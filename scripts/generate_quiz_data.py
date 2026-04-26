from __future__ import annotations

import glob
import json
import os
import re
import shutil
import zipfile
from pathlib import Path
from typing import Any
from xml.etree import ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]
DOWNLOADS = Path.home() / "Downloads"
ASSET_DIR = ROOT / "public" / "question-assets"
OUTPUT_FILE = ROOT / "lib" / "quiz-data.ts"

NS = {
    "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "rel": "http://schemas.openxmlformats.org/package/2006/relationships",
}

DOCS = {
    "23": {
        "title": "Bài 23",
        "pattern": "B*i_23_chuan_bi_xay_dung_trang_web.docx",
    },
    "24": {
        "title": "Bài 24",
        "pattern": "B*i_24_xay_dung_phan_dau_trang_web.docx",
    },
    "25": {
        "title": "Bài 25",
        "pattern": "B*i_25_xay_dung_phan_than_va_chan_trang_web.docx",
    },
    "26": {
        "title": "Bài 26",
        "pattern": "B*i_26_lien_ket_va_thanh_dieu_huong.docx",
    },
    "27": {
        "title": "Bài 27",
        "pattern": "B*i_27_bieu_mau_tren_trang_web.docx",
    },
}

ANSWER_KEYS = {
    "23": {
        "choice": "1B 2C 3A 4A 5A 6C 7A 8C 9B 10A 11A 12B 13C 14C 15D 16A 17A 18A 19A 20A 21D 22C 23B 24A",
        "tf": {
            25: "DSĐĐ",
            26: "SSĐĐ",
            27: "SĐSĐ",
            28: "ĐSĐĐ",
            29: "ĐSĐĐ",
            30: "SĐĐĐ",
        },
    },
    "24": {
        "choice": "1D 2B 3C 4A 5B 6C 7B 8A 9A 10A 11A 12A 13A 14C 15B 16A 17C 18A 19A 20A 21A 22A",
        "tf": {
            23: "ĐSSĐ",
            24: "SĐSĐ",
            25: "SĐSĐ",
            26: "ĐSĐĐ",
        },
    },
    "25": {
        "choice": "1C 2B 3A 4C 5A 6A 7A 8C 9A 10A 11A 12A 13A 14D 15A 16A 17A 18A 19A",
        "tf": {
            20: "ĐĐSĐ",
            21: "ĐĐSS",
            22: "ĐSĐS",
            23: "SĐSĐ",
        },
    },
    "26": {
        "choice": "1C 2B 3A 4A 5A 6A 7A 8A 9A 10A 11A 12A 13D 14C 15A 16A 17A 18A 19A 20A 21A 22A",
        "tf": {
            23: "ĐĐSS",
            24: "ĐSĐĐ",
            25: "ĐSSĐ",
            26: "SĐĐĐ",
            27: "SĐĐS",
        },
    },
    "27": {
        "choice": "1B 2D 3C 4A 5A 6A 7A 8A 9A 10A 11A 12A 13C 14A 15A 16A 17A 18A 19A 20A 21A 22A 23A 24A",
        "tf": {
            25: "SĐĐS",
            26: "SĐSĐ",
            27: "SĐSĐ",
            28: "SĐSĐ",
            29: "ĐSĐĐ",
            30: "SĐSĐ",
        },
    },
}


def find_doc(pattern: str) -> Path:
    matches = glob.glob(str(DOWNLOADS / pattern))
    if not matches:
        raise FileNotFoundError(pattern)
    return Path(matches[0])


def read_relationships(zf: zipfile.ZipFile) -> dict[str, str]:
    rels_path = "word/_rels/document.xml.rels"
    if rels_path not in zf.namelist():
        return {}

    rels: dict[str, str] = {}
    root = ET.fromstring(zf.read(rels_path))
    for rel in root.findall("rel:Relationship", NS):
        rels[rel.attrib["Id"]] = rel.attrib.get("Target", "")
    return rels


def extract_assets(zf: zipfile.ZipFile, lesson_id: str) -> dict[str, str]:
    ASSET_DIR.mkdir(parents=True, exist_ok=True)
    image_map: dict[str, str] = {}

    media_files = sorted(name for name in zf.namelist() if name.startswith("word/media/"))
    for index, media_name in enumerate(media_files, start=1):
        suffix = Path(media_name).suffix.lower() or ".png"
        output_name = f"lesson-{lesson_id}-image-{index}{suffix}"
        output_path = ASSET_DIR / output_name
        with zf.open(media_name) as source, output_path.open("wb") as target:
            shutil.copyfileobj(source, target)
        image_map[media_name.replace("word/", "")] = f"/question-assets/{output_name}"
        image_map[media_name] = f"/question-assets/{output_name}"

    return image_map


def paragraph_text(paragraph: ET.Element, rels: dict[str, str], image_map: dict[str, str], lesson_id: str) -> str:
    parts: list[str] = []

    for node in paragraph.iter():
        if node.tag == f"{{{NS['w']}}}t":
            parts.append(node.text or "")
        elif node.tag == f"{{{NS['w']}}}tab":
            parts.append(" ")
        elif node.tag == f"{{{NS['w']}}}br":
            parts.append("\n")
        elif node.tag == f"{{{NS['w']}}}drawing":
            blip = node.find(".//a:blip", NS)
            if blip is None:
                continue
            rid = blip.attrib.get(f"{{{NS['r']}}}embed") or blip.attrib.get(f"{{{NS['r']}}}link")
            target = rels.get(rid or "", "")
            src = image_map.get(target) or image_map.get(f"word/{target}")
            if src:
                parts.append(f" {{{{img:{src}|Biểu tượng minh họa Bài {lesson_id}}}}} ")

    return "".join(parts)


def read_doc_text(path: Path, lesson_id: str) -> str:
    with zipfile.ZipFile(path) as zf:
        rels = read_relationships(zf)
        image_map = extract_assets(zf, lesson_id)
        root = ET.fromstring(zf.read("word/document.xml"))
        paragraphs = [
            paragraph_text(paragraph, rels, image_map, lesson_id)
            for paragraph in root.findall(".//w:p", NS)
        ]

    text = "\n".join(part for part in paragraphs if part.strip())
    text = text.replace("\u00a0", " ")
    text = re.sub(r"[ \t]+", " ", text)
    return text


def clean_text(text: str) -> str:
    text = re.sub(r"\[(?:NB|TH|VD|VDC|TF)\]?", "", text)
    text = re.sub(r"\[(?:NB|TH|VD|VDC|TF)\[?", "", text)
    text = re.sub(r"^\s*[:.]\s*", "", text)
    text = re.sub(r"\s+([,.;:!?])", r"\1", text)
    text = re.sub(r"([,.;:!?])(?=[^\s}\]])", r"\1 ", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def content_parts(text: str) -> list[dict[str, str]]:
    parts: list[dict[str, str]] = []
    pattern = re.compile(r"\{\{img:([^|}]+)\|([^}]+)\}\}")
    cursor = 0

    for match in pattern.finditer(text):
        before = clean_text(text[cursor : match.start()])
        if before:
            parts.append({"type": "text", "text": before})
        parts.append({"type": "image", "src": match.group(1), "alt": match.group(2)})
        cursor = match.end()

    after = clean_text(text[cursor:])
    if after:
        parts.append({"type": "text", "text": after})

    if not parts:
        return [{"type": "text", "text": ""}]

    return parts


def split_questions(text: str) -> dict[int, str]:
    marker = re.compile(r"Câu\s*(\d+)\s*[:.]", re.IGNORECASE)
    matches = list(marker.finditer(text))
    blocks: dict[int, str] = {}

    for index, match in enumerate(matches):
        number = int(match.group(1))
        start = match.end()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        blocks[number] = text[start:end].strip()

    return blocks


def parse_choice_key(key_text: str) -> dict[int, str]:
    return {int(number): option for number, option in re.findall(r"(\d+)([ABCD])", key_text)}


def parse_choice_block(block: str, lesson_id: str, number: int, correct: str) -> dict[str, Any]:
    option_pattern = re.compile(r"(?<![A-Za-zÀ-ỹ])([ABCD])\.\s*")
    matches = list(option_pattern.finditer(block))
    if len(matches) < 4:
        raise ValueError(f"Cannot parse 4 options for lesson {lesson_id} question {number}: {block[:160]}")

    first_four = matches[:4]
    prompt = block[: first_four[0].start()]
    options: list[dict[str, Any]] = []

    for index, match in enumerate(first_four):
        option_id = match.group(1)
        start = match.end()
        end = first_four[index + 1].start() if index + 1 < len(first_four) else len(block)
        option_text = block[start:end]
        options.append({"id": option_id, "content": content_parts(option_text)})

    correct_text = clean_text(
        next((block_text(first["content"]) for first in options if first["id"] == correct), correct)
    )
    explanation = f"Đáp án đúng là {correct} vì phương án này phù hợp nhất với nội dung câu hỏi: {correct_text}."

    return {
        "id": f"bai-{lesson_id}-cau-{number}",
        "lessonId": lesson_id,
        "number": number,
        "type": "choice",
        "prompt": content_parts(prompt),
        "options": options,
        "correctOptionId": correct,
        "explanation": explanation,
    }


def block_text(parts: list[dict[str, str]]) -> str:
    output: list[str] = []
    for part in parts:
        if part["type"] == "text":
            output.append(part["text"])
        else:
            output.append(part["alt"])
    return clean_text(" ".join(output))


def parse_tf_block(block: str, lesson_id: str, number: int, key: str) -> dict[str, Any]:
    item_pattern = re.compile(r"(?<![A-Za-zÀ-ỹ])([abcd])\s*\.\s*(?:\[(?:NB|TH|VD|VDC|TF)\]?|\[(?:NB|TH|VD|VDC|TF)\[?)?\s*", re.IGNORECASE)
    matches = list(item_pattern.finditer(block))
    if len(matches) < 4:
        raise ValueError(f"Cannot parse 4 true/false items for lesson {lesson_id} question {number}: {block[:180]}")

    first_four = matches[:4]
    prompt = block[: first_four[0].start()]
    normalized_key = key.replace("D", "Đ").upper()
    if len(normalized_key) != 4:
        raise ValueError(f"Invalid true/false key for lesson {lesson_id} question {number}: {key}")

    items: list[dict[str, Any]] = []
    for index, match in enumerate(first_four):
        item_id = match.group(1).lower()
        start = match.end()
        end = first_four[index + 1].start() if index + 1 < len(first_four) else len(block)
        value = normalized_key[index] == "Đ"
        items.append(
            {
                "id": item_id,
                "content": content_parts(block[start:end]),
                "correct": value,
                "explanation": f"Ý này được xác định là {'đúng' if value else 'sai'} theo đáp án của bài.",
            }
        )

    return {
        "id": f"bai-{lesson_id}-cau-{number}",
        "lessonId": lesson_id,
        "number": number,
        "type": "true-false",
        "prompt": content_parts(prompt),
        "items": items,
    }


def generate() -> None:
    lessons: list[dict[str, Any]] = []
    questions: list[dict[str, Any]] = []

    for lesson_id, config in DOCS.items():
        doc_path = find_doc(config["pattern"])
        text = read_doc_text(doc_path, lesson_id)
        blocks = split_questions(text)
        choice_keys = parse_choice_key(ANSWER_KEYS[lesson_id]["choice"])
        tf_keys = ANSWER_KEYS[lesson_id]["tf"]

        for number in sorted(blocks):
            if number in choice_keys:
                questions.append(parse_choice_block(blocks[number], lesson_id, number, choice_keys[number]))
            elif number in tf_keys:
                questions.append(parse_tf_block(blocks[number], lesson_id, number, tf_keys[number]))
            else:
                raise ValueError(f"No answer key for lesson {lesson_id} question {number}")

        lessons.append(
            {
                "id": lesson_id,
                "title": config["title"],
                "questionCount": len(blocks),
            }
        )

    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    payload_lessons = json.dumps(lessons, ensure_ascii=False, indent=2)
    payload_questions = json.dumps(questions, ensure_ascii=False, indent=2)
    OUTPUT_FILE.write_text(
        "import type { Lesson, Question } from \"@/lib/quiz-types\";\n\n"
        f"export const lessons = {payload_lessons} satisfies Lesson[];\n\n"
        f"export const questions = {payload_questions} satisfies Question[];\n",
        encoding="utf-8",
    )
    print(f"Generated {len(questions)} questions in {OUTPUT_FILE}")


if __name__ == "__main__":
    generate()
