# Ôn tập trắc nghiệm Bài 23-27

Ứng dụng Next.js + React mobile-first để ôn tập 136 câu hỏi từ Bài 23-27.

## Chạy cục bộ

```powershell
$env:PATH='C:\Users\Legion\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;' + $env:PATH
.\.tools\pnpm-win-x64\package\pnpm.exe install --store-dir .pnpm-store
.\.tools\pnpm-win-x64\package\pnpm.exe dev --hostname 127.0.0.1 --port 3000
```

Mở `http://127.0.0.1:3000`.

## Kiểm tra

```powershell
$env:PATH='C:\Users\Legion\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;' + $env:PATH
.\.tools\pnpm-win-x64\package\pnpm.exe validate:data
.\.tools\pnpm-win-x64\package\pnpm.exe exec tsc --noEmit
.\.tools\pnpm-win-x64\package\pnpm.exe build
```

## Dữ liệu

- Dữ liệu câu hỏi nằm trong `lib/quiz-data.ts`.
- Type dữ liệu nằm trong `lib/quiz-types.ts`.
- Script import lại từ Word: `scripts/generate_quiz_data.py`.
- Hình minh họa được trích ra vào `public/question-assets/`.
