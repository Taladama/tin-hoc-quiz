import type { Lesson, Question } from "@/lib/quiz-types";

export const lessons = [
  {
    "id": "23",
    "title": "Bài 23",
    "questionCount": 30
  },
  {
    "id": "24",
    "title": "Bài 24",
    "questionCount": 26
  },
  {
    "id": "25",
    "title": "Bài 25",
    "questionCount": 23
  },
  {
    "id": "26",
    "title": "Bài 26",
    "questionCount": 27
  },
  {
    "id": "27",
    "title": "Bài 27",
    "questionCount": 30
  }
] satisfies Lesson[];

export const questions = [
  {
    "id": "bai-23-cau-1",
    "lessonId": "23",
    "number": 1,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Mỗi trang web đầy đủ nhất bao gồm mấy phần chính?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "2."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "3."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "4."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "5."
          }
        ]
      }
    ],
    "correctOptionId": "B",
    "explanation": "Đáp án đúng là B vì phương án này phù hợp nhất với nội dung câu hỏi: 3.."
  },
  {
    "id": "bai-23-cau-2",
    "lessonId": "23",
    "number": 2,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Phần chân trang của một website có thể chứa nội dung nào sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Nội dung website."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Thanh điều hướng."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Thông tin về bản quyền của website."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Thông tin mới cập nhật của website."
          }
        ]
      }
    ],
    "correctOptionId": "C",
    "explanation": "Đáp án đúng là C vì phương án này phù hợp nhất với nội dung câu hỏi: Thông tin về bản quyền của website.."
  },
  {
    "id": "bai-23-cau-3",
    "lessonId": "23",
    "number": 3,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Phần đầu trang (header) của một trang web thường chứa những thông tin nào sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Logo, tên trang, thanh điều hướng."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Nội dung chính của trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Chỉ chứa thông tin bản quyền."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Chỉ chứa các bài viết mới nhất."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Logo, tên trang, thanh điều hướng.."
  },
  {
    "id": "bai-23-cau-4",
    "lessonId": "23",
    "number": 4,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Phần thân trang (body) của một trang web chứa gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Nội dung chính của trang web."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Logo và thanh điều hướng."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Chỉ chứa thông tin bản quyền."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không có nội dung nào quan trọng."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Nội dung chính của trang web.."
  },
  {
    "id": "bai-23-cau-5",
    "lessonId": "23",
    "number": 5,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Biểu tượng đại diện cho tất cả các trang web trong một website và hiển thị trước địa chỉ trang web trên tab của trình duyệt được gọi là gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Favicon."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Weblogo."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Favlogo."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Webicon."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Favicon.."
  },
  {
    "id": "bai-23-cau-6",
    "lessonId": "23",
    "number": 6,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Phần mềm hỗ trợ làm trang web của Google là phần mềm nào sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Google Travel."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Google Drive."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Google Sites."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Google Jamboard."
          }
        ]
      }
    ],
    "correctOptionId": "C",
    "explanation": "Đáp án đúng là C vì phương án này phù hợp nhất với nội dung câu hỏi: Google Sites.."
  },
  {
    "id": "bai-23-cau-7",
    "lessonId": "23",
    "number": 7,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Favicon trong trang web là gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Biểu tượng nhỏ hiển thị trên tab trình duyệt."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Logo của trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Tiêu đề của trang web."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Hình nền của trang web."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Biểu tượng nhỏ hiển thị trên tab trình duyệt.."
  },
  {
    "id": "bai-23-cau-8",
    "lessonId": "23",
    "number": 8,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Thông tin bản quyền và bảo mật thường xuất hiện ở phần nào của trang web?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Phần đầu trang."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Phần thân trang."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Phần chân trang."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không xuất hiện trên trang web."
          }
        ]
      }
    ],
    "correctOptionId": "C",
    "explanation": "Đáp án đúng là C vì phương án này phù hợp nhất với nội dung câu hỏi: Phần chân trang.."
  },
  {
    "id": "bai-23-cau-9",
    "lessonId": "23",
    "number": 9,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Mỗi trang web trên Internet có một địa chỉ truy cập được gọi là gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "IP Address."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "URL (Uniform Resource Locator)."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Domain Name."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Server Name."
          }
        ]
      }
    ],
    "correctOptionId": "B",
    "explanation": "Đáp án đúng là B vì phương án này phù hợp nhất với nội dung câu hỏi: URL (Uniform Resource Locator).."
  },
  {
    "id": "bai-23-cau-10",
    "lessonId": "23",
    "number": 10,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Một trong những bước đầu tiên khi xây dựng trang web là gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Xác định mục đích và đối tượng sử dụng."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Viết mã HTML ngay lập tức."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Chọn màu sắc trang web trước tiên."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Đăng ký tên miền trước khi có ý tưởng."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Xác định mục đích và đối tượng sử dụng.."
  },
  {
    "id": "bai-23-cau-11",
    "lessonId": "23",
    "number": 11,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Phông chữ nào sau đây thường được dùng cho tiêu đề trong thiết kế trang web?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Serif (có chân)."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Sans Serif (không có chân)."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Script (chữ viết tay)."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Monospace (cỡ chữ cố định)."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Serif (có chân).."
  },
  {
    "id": "bai-23-cau-12",
    "lessonId": "23",
    "number": 12,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Một trang web có màu sắc quá gắt hoặc không hài hòa sẽ gây tác động gì sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Thu hút người dùng nhiều hơn."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Gây phản cảm và làm giảm trải nghiệm người dùng."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Không ảnh hưởng đến trang web."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Giúp người dùng đọc dễ hơn."
          }
        ]
      }
    ],
    "correctOptionId": "B",
    "explanation": "Đáp án đúng là B vì phương án này phù hợp nhất với nội dung câu hỏi: Gây phản cảm và làm giảm trải nghiệm người dùng.."
  },
  {
    "id": "bai-23-cau-13",
    "lessonId": "23",
    "number": 13,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Phần mềm miễn phí nào sau đây của Google có thể dùng để tạo trang web?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Google Forms."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Google Slides."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Google Sites."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Google Docs."
          }
        ]
      }
    ],
    "correctOptionId": "C",
    "explanation": "Đáp án đúng là C vì phương án này phù hợp nhất với nội dung câu hỏi: Google Sites.."
  },
  {
    "id": "bai-23-cau-14",
    "lessonId": "23",
    "number": 14,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Phát biểu nào sau đây sai?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Mỗi trang web phải bắt nguồn từ một nhu cầu cụ thể."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Thân trang là phần chứa nội dung của trang web, thường được bố cục thành các khối hình chữ nhật, mỗi khối trình bày một nội dung với tiêu đề riêng."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Phần đầu trang có thể bao gồm những liên kết tới các trang mạng xã hội liên quan."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Việc xây dựng trang web cần bắt đầu với việc phân tích, xác lập định hướng về mục đích của trang web và đối tượng người dùng."
          }
        ]
      }
    ],
    "correctOptionId": "C",
    "explanation": "Đáp án đúng là C vì phương án này phù hợp nhất với nội dung câu hỏi: Phần đầu trang có thể bao gồm những liên kết tới các trang mạng xã hội liên quan.."
  },
  {
    "id": "bai-23-cau-15",
    "lessonId": "23",
    "number": 15,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi xây dựng trang web, em cần làm gì để định hình ý tưởng?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Xây dựng kiến trúc nội dung, thiết kế mĩ thuật, chọn bảng màu, phông chữ, …"
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Làm logo, favicon, ảnh nền và đặt tên trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Lựa chọn phần mềm để xây dựng trang web."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Xác định mục đích và đối tượng phục vụ của trang web."
          }
        ]
      }
    ],
    "correctOptionId": "D",
    "explanation": "Đáp án đúng là D vì phương án này phù hợp nhất với nội dung câu hỏi: Xác định mục đích và đối tượng phục vụ của trang web.."
  },
  {
    "id": "bai-23-cau-16",
    "lessonId": "23",
    "number": 16,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Tại sao cần xác định rõ mục đích của trang web trước khi thiết kế?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Để đảm bảo nội dung và hình thức phù hợp với đối tượng sử dụng."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Để có thể lập trình trang web nhanh hơn."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Vì mọi trang web đều có mục đích giống nhau."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Để không cần cập nhật trang web sau này."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Để đảm bảo nội dung và hình thức phù hợp với đối tượng sử dụng.."
  },
  {
    "id": "bai-23-cau-17",
    "lessonId": "23",
    "number": 17,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Vì sao cần có thanh điều hướng trong trang web?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Giúp người dùng truy cập nhanh các nội dung quan trọng."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ để làm đẹp trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Không cần thiết nếu trang web có nhiều nội dung."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Chỉ sử dụng trong trang web thương mại điện tử."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Giúp người dùng truy cập nhanh các nội dung quan trọng.."
  },
  {
    "id": "bai-23-cau-18",
    "lessonId": "23",
    "number": 18,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi thiết kế trang web, tại sao cần quan tâm đến đối tượng người dùng?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Để đáp ứng tốt hơn nhu cầu và mong muốn của họ."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Vì mọi trang web đều có chung đối tượng."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Vì chỉ có một kiểu thiết kế trang web chuẩn."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Vì thiết kế trang web không cần quan tâm đến người dùng."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Để đáp ứng tốt hơn nhu cầu và mong muốn của họ.."
  },
  {
    "id": "bai-23-cau-19",
    "lessonId": "23",
    "number": 19,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Màu sắc trong thiết kế trang web nên được chọn như thế nào?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Phối hợp hài hòa giữa màu ấm, màu lạnh và màu trung tính."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Sử dụng càng nhiều màu sáng càng tốt."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Chỉ dùng một màu duy nhất cho toàn bộ trang web."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không cần quan tâm đến màu sắc."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Phối hợp hài hòa giữa màu ấm, màu lạnh và màu trung tính.."
  },
  {
    "id": "bai-23-cau-20",
    "lessonId": "23",
    "number": 20,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Định dạng chữ trong thiết kế trang web cần lưu ý điều gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Cần nhất quán về phông chữ, kiểu chữ và cỡ chữ."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Dùng càng nhiều phông chữ khác nhau càng tốt."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Không cần quan tâm đến cỡ chữ."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Chỉ dùng một kiểu chữ duy nhất cho toàn bộ trang web."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Cần nhất quán về phông chữ, kiểu chữ và cỡ chữ.."
  },
  {
    "id": "bai-23-cau-21",
    "lessonId": "23",
    "number": 21,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Em nên chọn các phông chữ loại nào sau đây cho các bảng chọn trên thanh điều hướng?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Monospace."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Serif."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Fantasy."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Sans Serif."
          }
        ]
      }
    ],
    "correctOptionId": "D",
    "explanation": "Đáp án đúng là D vì phương án này phù hợp nhất với nội dung câu hỏi: Sans Serif.."
  },
  {
    "id": "bai-23-cau-22",
    "lessonId": "23",
    "number": 22,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Phát biểu nào sau đây sai?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Việc chuẩn bị tư liệu cho trang web là việc kéo dài suốt thời gian thực hiện dự án."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Để có thể xác định được rõ mục đích cũng như các yêu cầu cần đặt ra với trang web, cần khảo sát, phân tích các nhu cầu cũng như những đặc điểm của người dùng một cách cẩn thận kĩ lưỡng."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Kiểu chữ đậm có ý nghĩa phân biệt, thường dùng khi muốn phân biệt từ ngữ, câu chữ hay phần chú thích."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Để gây cảm xúc tốt và thu hút người đọc cần phải chọn một số màu có độ tương phản nhẹ nhàng và hài hoà."
          }
        ]
      }
    ],
    "correctOptionId": "C",
    "explanation": "Đáp án đúng là C vì phương án này phù hợp nhất với nội dung câu hỏi: Kiểu chữ đậm có ý nghĩa phân biệt, thường dùng khi muốn phân biệt từ ngữ, câu chữ hay phần chú thích.."
  },
  {
    "id": "bai-23-cau-23",
    "lessonId": "23",
    "number": 23,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Thông tin nào sau đây là không phù hợp để đưa vào trang web chủ đề “Việt Nam – Vẻ đẹp tiềm ẩn”?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Đặc điểm ẩm thực địa phương."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Xu hướng nghề nghiệp trong tương lai ở Việt Nam."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Những làng nghề truyền thống nổi tiếng Việt Nam."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Lịch sử dựng nước và giữ nước của dân tộc Việt Nam."
          }
        ]
      }
    ],
    "correctOptionId": "B",
    "explanation": "Đáp án đúng là B vì phương án này phù hợp nhất với nội dung câu hỏi: Xu hướng nghề nghiệp trong tương lai ở Việt Nam.."
  },
  {
    "id": "bai-23-cau-24",
    "lessonId": "23",
    "number": 24,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Nếu muốn tạo một trang web giới thiệu địa điểm du lịch, cần lưu ý điều gì sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Sử dụng hình ảnh chất lượng cao và nội dung phong phú."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ cần viết bài mô tả, không cần hình ảnh."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Không cần thiết kế giao diện đẹp."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Chỉ tập trung vào nội dung văn bản."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Sử dụng hình ảnh chất lượng cao và nội dung phong phú.."
  },
  {
    "id": "bai-23-cau-25",
    "lessonId": "23",
    "number": 25,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Mỗi trang web đầy đủ nhất đều có cấu trúc gồm ba phần chính"
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Phần đầu trang (header) của một trang web thường chứa logo, tên trang và thanh điều hướng."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Phần thân trang (body) chỉ chứa nội dung văn bản."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Mỗi trang web chỉ có một địa chỉ URL duy nhất."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Thanh điều hướng giúp người dùng dễ dàng di chuyển giữa các trang con của website."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-23-cau-26",
    "lessonId": "23",
    "number": 26,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Xây dựng một trang web không chỉ đơn thuần là tạo ra một không gian trực tuyến, mà còn là một quá trình sáng tạo đòi hỏi sự chuẩn bị kỹ lưỡng."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Thiết kế giao diện chỉ cần đảm bảo tính thẩm mỹ, không cần quan tâm đến trải nghiệm người dùng."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Bảng màu của trang web nên sử dụng các màu sắc tương phản mạnh để tạo điểm nhấn."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Cấu trúc trang web bao gồm thanh điều hướng, phần thân trang và phần chân trang."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Khi xây dựng dàn ý tổng thể, cần xác định rõ các thông tin chính muốn truyền đạt và cách sắp xếp chúng."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-23-cau-27",
    "lessonId": "23",
    "number": 27,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Mỗi trang web đầy đủ thường có ba phần chính: phần đầu trang (header), phần thân trang (body) và phần chân trang (footer). Phần đầu trang có vai trò như trang bìa thu gọn của một cuốn sách, chứa thông tin quan trọng như logo, tên trang, thanh điều hướng và tiêu đề. Phần thân trang chứa nội dung chính, thường được bố cục thành các khối hình chữ nhật. Phần chân trang chứa thông tin về bản quyền, bảo mật và liên hệ."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Mọi trang web đều bắt buộc phải có cả ba phần: đầu trang, thân trang và chân trang."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Phần đầu trang có thể chứa logo, thanh điều hướng và thông tin tóm tắt về trang web."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Phần thân trang chỉ có thể chứa văn bản, không thể có hình ảnh hoặc ứng dụng nhúng."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Phần chân trang có thể chứa thông tin liên hệ và liên kết đến các mạng xã hội."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-23-cau-28",
    "lessonId": "23",
    "number": 28,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Khi một trang web được tải trên trình duyệt, tên của nó sẽ hiển thị tại tiêu đề của tab cùng với favicon (favorite icon). Favicon có thể được thiết kế riêng, không nhất thiết phải là phiên bản thu nhỏ của logo trang web."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Favicon là biểu tượng nhỏ xuất hiện trên tab trình duyệt khi mở trang web."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Tất cả favicon đều phải được thu nhỏ từ logo chính của trang web."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Mỗi website có thể có một favicon chung cho tất cả các trang con của nó."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Một trang web không có favicon vẫn có thể hiển thị bình thường trên trình duyệt."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-23-cau-29",
    "lessonId": "23",
    "number": 29,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Khi xây dựng một trang web, cần phân tích nhu cầu của người dùng để xác định mục đích và yêu cầu thiết kế. Trang web phải đáp ứng mong muốn của đối tượng sử dụng, từ đó hình thành kiến trúc nội dung, thiết kế mỹ thuật và chọn phần mềm phù hợp."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Việc xác định mục đích và đối tượng người dùng là bước quan trọng trong thiết kế trang web."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Tất cả các trang web đều có chung một mục đích và không cần xác định riêng đối tượng sử dụng."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Xây dựng dàn ý giúp sắp xếp nội dung một cách mạch lạc và dễ tiếp cận."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Việc thiết kế mỹ thuật bao gồm lựa chọn bảng màu, phông chữ và cách bố trí nội dung."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-23-cau-30",
    "lessonId": "23",
    "number": 30,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "ể thiết kế một trang web hiệu quả, cần lựa chọn định dạng chữ phù hợp với nội dung và đối tượng sử dụng. Phông chữ Sans Serif thường được dùng cho phần nội dung, trong khi phông Serif phù hợp cho tiêu đề."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Phông chữ Serif thường được dùng cho phần nội dung bài viết vì dễ đọc trên màn hình."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Phông Sans Serif như Arial, Calibri phù hợp để trình bày nội dung trang web."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Kiểu chữ đậm thường được dùng để nhấn mạnh tiêu đề hoặc phần quan trọng."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Cỡ chữ nên được quy định thành ít nhất bốn kích thước khác nhau để phù hợp với từng phần nội dung."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-24-cau-1",
    "lessonId": "24",
    "number": 1,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Phần mềm hỗ trợ làm trang web của Google là"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Google Slides."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Google Express."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Google Pay."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Google Sites."
          }
        ]
      }
    ],
    "correctOptionId": "D",
    "explanation": "Đáp án đúng là D vì phương án này phù hợp nhất với nội dung câu hỏi: Google Sites.."
  },
  {
    "id": "bai-24-cau-2",
    "lessonId": "24",
    "number": 2,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Phần đầu trang có thể chứa thông tin nào sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Thông tin liên hệ."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Tiêu đề trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Nội dung trang web."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Những thông tin cần nhấn mạnh thêm."
          }
        ]
      }
    ],
    "correctOptionId": "B",
    "explanation": "Đáp án đúng là B vì phương án này phù hợp nhất với nội dung câu hỏi: Tiêu đề trang web.."
  },
  {
    "id": "bai-24-cau-3",
    "lessonId": "24",
    "number": 3,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Phần đầu trang không có kích thước tuỳ chọn nào sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Chỉ tiêu đề."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Bìa."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Biểu ngữ nhỏ."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Biểu ngữ lớn."
          }
        ]
      }
    ],
    "correctOptionId": "C",
    "explanation": "Đáp án đúng là C vì phương án này phù hợp nhất với nội dung câu hỏi: Biểu ngữ nhỏ.."
  },
  {
    "id": "bai-24-cau-4",
    "lessonId": "24",
    "number": 4,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Để sử dụng Google Sites, bước đầu tiên cần thực hiện là gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Đăng nhập vào tài khoản Google."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Cài đặt phần mềm Google Sites."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Mua tên miền riêng."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Tạo tài khoản mới không cần Google."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Đăng nhập vào tài khoản Google.."
  },
  {
    "id": "bai-24-cau-5",
    "lessonId": "24",
    "number": 5,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Địa chỉ URL để truy cập Google Sites là gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "google. com/sites."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "sites. google. com."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "www. sites. google. vn."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "sites. google. org."
          }
        ]
      }
    ],
    "correctOptionId": "B",
    "explanation": "Đáp án đúng là B vì phương án này phù hợp nhất với nội dung câu hỏi: sites. google. com.."
  },
  {
    "id": "bai-24-cau-6",
    "lessonId": "24",
    "number": 6,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Trong giao diện Google Sites, phần nào sau đây chứa danh sách các trang web đã mở trước đó?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Phần tìm kiếm."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Phần tạo trang web mới."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Phần danh sách các trang web đã mở trước đó."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Phần cài đặt tài khoản Google."
          }
        ]
      }
    ],
    "correctOptionId": "C",
    "explanation": "Đáp án đúng là C vì phương án này phù hợp nhất với nội dung câu hỏi: Phần danh sách các trang web đã mở trước đó.."
  },
  {
    "id": "bai-24-cau-7",
    "lessonId": "24",
    "number": 7,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi tạo phần đầu trang trong Google Sites, khu vực nào sau đây cho phép nhập logo và favicon?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Phần tiêu đề trang."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Phần nhập tên trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Phần bảng chọn thanh điều hướng."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Phần chân trang."
          }
        ]
      }
    ],
    "correctOptionId": "B",
    "explanation": "Đáp án đúng là B vì phương án này phù hợp nhất với nội dung câu hỏi: Phần nhập tên trang web.."
  },
  {
    "id": "bai-24-cau-8",
    "lessonId": "24",
    "number": 8,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Trong Google Sites, favicon thường có kích thước nào?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "16x16, 32x32 hoặc 48x48 pixels."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "50x50, 100x100 hoặc 200x200 pixels."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "10x10, 20x20 hoặc 30x30 pixels."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "60x60, 90x90 hoặc 120x120 pixels."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: 16x16, 32x32 hoặc 48x48 pixels.."
  },
  {
    "id": "bai-24-cau-9",
    "lessonId": "24",
    "number": 9,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Chức năng của bảng chọn \"Loại tiêu đề\" trong Google Sites là gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Chọn kích thước phần đầu trang."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉnh màu sắc trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Tạo danh sách liên kết."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Thay đổi font chữ toàn bộ trang web."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Chọn kích thước phần đầu trang.."
  },
  {
    "id": "bai-24-cau-10",
    "lessonId": "24",
    "number": 10,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi thiết lập ảnh nền cho phần đầu trang trong Google Sites, người dùng có thể tải ảnh từ đâu?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Máy tính, Google Drive, Google Photos hoặc từ Internet."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ từ máy tính cá nhân."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Chỉ từ Google Drive."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Chỉ từ thư viện ảnh Google."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Máy tính, Google Drive, Google Photos hoặc từ Internet.."
  },
  {
    "id": "bai-24-cau-11",
    "lessonId": "24",
    "number": 11,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Trong Google Sites, chức năng nào sau đây giúp tự động điều chỉnh độ sáng hình nền?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Chế độ tự động điều chỉnh độ sáng hình nền."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chế độ tối ưu hóa hình ảnh."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Chế độ hiển thị mặc định."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Chế độ lọc ánh sáng xanh."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Chế độ tự động điều chỉnh độ sáng hình nền.."
  },
  {
    "id": "bai-24-cau-12",
    "lessonId": "24",
    "number": 12,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Chức năng nào sau đây cho phép người dùng thay đổi kích thước khung văn bản tiêu đề trang?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Các bảng chọn định dạng."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Thanh điều hướng."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Phần cài đặt bảo mật."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Chế độ xem trước."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Các bảng chọn định dạng.."
  },
  {
    "id": "bai-24-cau-13",
    "lessonId": "24",
    "number": 13,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi xem trước trang web trong Google Sites, người dùng có thể xem trên những thiết bị nào sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Điện thoại, máy tính bảng, máy tính."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ trên máy tính."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Chỉ trên điện thoại."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Chỉ trên máy tính bảng."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Điện thoại, máy tính bảng, máy tính.."
  },
  {
    "id": "bai-24-cau-14",
    "lessonId": "24",
    "number": 14,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Phát biểu nào sau đây sai?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Logo có thể có dạng hình chữ nhật, favicon dạng hình vuông với kích thước 16 16, 32 32, 48 48 px."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Có thể chọn ảnh nền trang web từ ảnh trong Google Drive, Google Photos hay ảnh trên Internet."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Các kích thước tuỳ chọn của phần đầu trang chỉ khác nhau về chiều rộng."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Khi thiết lập ảnh nền cho trang web, độ sáng của ảnh được tự động điều chỉnh để vẫn đọc được phần chữ trên nền."
          }
        ]
      }
    ],
    "correctOptionId": "C",
    "explanation": "Đáp án đúng là C vì phương án này phù hợp nhất với nội dung câu hỏi: Các kích thước tuỳ chọn của phần đầu trang chỉ khác nhau về chiều rộng.."
  },
  {
    "id": "bai-24-cau-15",
    "lessonId": "24",
    "number": 15,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Biểu tượng"
      },
      {
        "type": "image",
        "src": "/question-assets/lesson-24-image-1.png",
        "alt": "Biểu tượng minh họa Bài 24"
      },
      {
        "type": "text",
        "text": "dùng để làm gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Điều chỉnh phần ấn tượng nhất của ảnh hiển thị trọn vẹn trong đầu trang."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Huỷ bỏ chế độ tự động điều chỉnh độ sáng của ảnh được chọn làm ảnh nền."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Thêm bộ lọc cho ảnh nền."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Điều chỉnh độ sáng của ảnh nền."
          }
        ]
      }
    ],
    "correctOptionId": "B",
    "explanation": "Đáp án đúng là B vì phương án này phù hợp nhất với nội dung câu hỏi: Huỷ bỏ chế độ tự động điều chỉnh độ sáng của ảnh được chọn làm ảnh nền.."
  },
  {
    "id": "bai-24-cau-16",
    "lessonId": "24",
    "number": 16,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Google Sites sẽ tự động lưu trang web đang tạo vào đâu?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Google Drive."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Files."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Máy tính."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Gmail."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Google Drive.."
  },
  {
    "id": "bai-24-cau-17",
    "lessonId": "24",
    "number": 17,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Biểu tượng"
      },
      {
        "type": "image",
        "src": "/question-assets/lesson-24-image-2.png",
        "alt": "Biểu tượng minh họa Bài 24"
      },
      {
        "type": "text",
        "text": "dùng để làm gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Điều chỉnh chất lượng của ảnh nền."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉnh màu cho ảnh nền."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Điều chỉnh phần ấn tượng nhất của ảnh hiển thị trọn vẹn trong đầu trang."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Huỷ bỏ chế độ tự động điều chỉnh độ sáng của ảnh được chọn làm ảnh nền."
          }
        ]
      }
    ],
    "correctOptionId": "C",
    "explanation": "Đáp án đúng là C vì phương án này phù hợp nhất với nội dung câu hỏi: Điều chỉnh phần ấn tượng nhất của ảnh hiển thị trọn vẹn trong đầu trang.."
  },
  {
    "id": "bai-24-cau-18",
    "lessonId": "24",
    "number": 18,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Vì sao cần thiết lập logo và favicon cho trang web?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Giúp trang web chuyên nghiệp hơn và dễ nhận diện thương hiệu."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ để làm đẹp trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Không có tác dụng gì đặc biệt."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Giúp trang web tải nhanh hơn."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Giúp trang web chuyên nghiệp hơn và dễ nhận diện thương hiệu.."
  },
  {
    "id": "bai-24-cau-19",
    "lessonId": "24",
    "number": 19,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Trong Google Sites, vì sao cần đặt tiêu đề trang?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Giúp xác định nội dung chính của trang."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ để làm đẹp trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Không ảnh hưởng đến trải nghiệm người dùng."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không bắt buộc phải có."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Giúp xác định nội dung chính của trang.."
  },
  {
    "id": "bai-24-cau-20",
    "lessonId": "24",
    "number": 20,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi xuất bản trang web trong Google Sites, điều gì xảy ra?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Trang web có thể truy cập qua URL."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Trang web sẽ bị khóa và không thể chỉnh sửa."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Trang web bị xóa sau 24 giờ."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Chỉ có người tạo mới xem được trang web."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Trang web có thể truy cập qua URL.."
  },
  {
    "id": "bai-24-cau-21",
    "lessonId": "24",
    "number": 21,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi nào nên sử dụng biểu tượng \"Xem trước\" trong Google Sites?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Trước khi xuất bản trang web để kiểm tra hiển thị trên các thiết bị khác nhau."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Sau khi trang web đã xuất bản xong."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Khi chỉnh sửa nội dung bài viết."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Khi thay đổi màu nền trang web."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Trước khi xuất bản trang web để kiểm tra hiển thị trên các thiết bị khác nhau.."
  },
  {
    "id": "bai-24-cau-22",
    "lessonId": "24",
    "number": 22,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Tại sao cần chọn kích thước phần đầu trang phù hợp trong Google Sites?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Để nội dung trang hiển thị rõ ràng, chuyên nghiệp."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Để tiết kiệm dung lượng bộ nhớ."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Không ảnh hưởng đến bố cục trang web."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Giúp trang web tải nhanh hơn."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Để nội dung trang hiển thị rõ ràng, chuyên nghiệp.."
  },
  {
    "id": "bai-24-cau-23",
    "lessonId": "24",
    "number": 23,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Google Sites là một công cụ trực quan và dễ sử dụng giúp bạn tạo ra các trang web đơn giản. Bài hướng dẫn này sẽ giúp bạn làm quen với các bước cơ bản để tạo và tùy chỉnh phần đầu trang của một trang web trên Google Sites"
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Để bắt đầu tạo một trang web mới trên Google Sites, bạn cần đăng nhập vào tài khoản Google."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Để thay đổi hình ảnh nền cho phần đầu trang, bạn phải tải ảnh lên từ máy tính của mình."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Thanh điều hướng của trang web sẽ được thiết lập ngay từ khi tạo phần đầu trang."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Sau khi tạo xong phần đầu trang, bạn có thể xem trước trang web để kiểm tra trước khi xuất bản."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-24-cau-24",
    "lessonId": "24",
    "number": 24,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Google Sites là một công cụ trực tuyến miễn phí giúp người dùng dễ dàng tạo và quản lý trang web mà không cần kiến thức lập trình. Giao diện chính của Google Sites được chia thành ba phần quan trọng giúp người dùng điều hướng và sử dụng nhanh chóng."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Google Sites yêu cầu người dùng có kiến thức lập trình để tạo trang web."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Giao diện chính của Google Sites bao gồm phần tìm kiếm, danh sách trang web đã mở và tùy chọn tạo trang mới."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Người dùng cần cài đặt phần mềm bổ sung để sử dụng Google Sites."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Google Sites là một sản phẩm của Google, cho phép tạo trang web miễn phí."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-24-cau-25",
    "lessonId": "24",
    "number": 25,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Khi tạo trang web mới trên Google Sites, người dùng có thể thiết lập tiêu đề trang, thêm hình nền và chỉnh sửa bố cục theo nhu cầu. Các tùy chọn chỉnh sửa giúp trang web trở nên sinh động và chuyên nghiệp hơn."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Tiêu đề trang trên Google Sites không thể chỉnh sửa sau khi đã nhập lần đầu."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Người dùng có thể thay đổi hình nền của phần đầu trang theo sở thích."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Google Sites chỉ hỗ trợ một kiểu tiêu đề trang duy nhất."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Việc thiết lập tiêu đề trang giúp người dùng nhận diện nội dung chính của trang web."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-24-cau-26",
    "lessonId": "24",
    "number": 26,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Phần đầu trang trong Google Sites bao gồm nhiều yếu tố quan trọng như tên trang, logo, favicon và thông báo đầu trang. Người dùng có thể tùy chỉnh những yếu tố này để tạo dấu ấn riêng cho trang web."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Favicon trên Google Sites có thể có các kích thước như 16x16, 32x32 hoặc 48x48 pixels."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Logo trang web phải có định dạng GIF, không thể sử dụng PNG hoặc JPG."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Người dùng có thể thêm thông báo vào đầu trang web và tùy chỉnh màu sắc, nội dung."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Khi thiết lập phần đầu trang, người dùng có thể nhập tên trang web và chọn logo phù hợp."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-25-cau-1",
    "lessonId": "25",
    "number": 1,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Phần chân trang của một website có thể chứa nội dung nào sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn các chức năng."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Thông tin tóm tắt của trang."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Những liên kết tới các trang mạng xã hội liên quan."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Nội dung website."
          }
        ]
      }
    ],
    "correctOptionId": "C",
    "explanation": "Đáp án đúng là C vì phương án này phù hợp nhất với nội dung câu hỏi: Những liên kết tới các trang mạng xã hội liên quan.."
  },
  {
    "id": "bai-25-cau-2",
    "lessonId": "25",
    "number": 2,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Bảng chọn Chèn của giao diện tạo phần thân trang web có mấy nhóm lệnh nào sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "2."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "3."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "4."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "5."
          }
        ]
      }
    ],
    "correctOptionId": "B",
    "explanation": "Đáp án đúng là B vì phương án này phù hợp nhất với nội dung câu hỏi: 3.."
  },
  {
    "id": "bai-25-cau-3",
    "lessonId": "25",
    "number": 3,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Google Sites cung cấp sẵn bao nhiêu mẫu cấu trúc nội dung để tạo phần thân trang web?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "6."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "7."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "8."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "9."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: 6.."
  },
  {
    "id": "bai-25-cau-4",
    "lessonId": "25",
    "number": 4,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Trong Google Sites, có mấy bảng chọn chính ở khung bên phải khi tạo phần thân trang web?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Một bảng chọn."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Hai bảng chọn."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Ba bảng chọn."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Bốn bảng chọn."
          }
        ]
      }
    ],
    "correctOptionId": "C",
    "explanation": "Đáp án đúng là C vì phương án này phù hợp nhất với nội dung câu hỏi: Ba bảng chọn.."
  },
  {
    "id": "bai-25-cau-5",
    "lessonId": "25",
    "number": 5,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Bảng chọn nào sau đây trong Google Sites chứa nhóm lệnh Chèn nội dung vào phần thân trang?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn Chèn."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn Trang."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn Giao diện."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn Cài đặt."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Bảng chọn Chèn.."
  },
  {
    "id": "bai-25-cau-6",
    "lessonId": "25",
    "number": 6,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Nhóm lệnh đầu tiên trong bảng chọn Chèn bao gồm những công cụ nào sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Hộp văn bản, Hình ảnh, Nhúng, Drive."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Băng chuyền hình ảnh, Bản đồ, Video."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Liên kết đến mạng xã hội, Đường dẫn."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Công cụ thiết lập chân trang."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Hộp văn bản, Hình ảnh, Nhúng, Drive.."
  },
  {
    "id": "bai-25-cau-7",
    "lessonId": "25",
    "number": 7,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Trong Google Sites, nhóm lệnh thứ hai của bảng chọn Chèn dùng để làm gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Chèn các thành phần nội dung."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ thay đổi màu sắc trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Cài đặt tên miền."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Xuất bản trang web ngay lập tức."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Chèn các thành phần nội dung.."
  },
  {
    "id": "bai-25-cau-8",
    "lessonId": "25",
    "number": 8,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Để thêm bản đồ vào trang web, người dùng cần chọn mục nào sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn Giao diện."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn Trang."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Lệnh Nhúng trong bảng chọn Chèn."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Công cụ Xuất bản trang."
          }
        ]
      }
    ],
    "correctOptionId": "C",
    "explanation": "Đáp án đúng là C vì phương án này phù hợp nhất với nội dung câu hỏi: Lệnh Nhúng trong bảng chọn Chèn.."
  },
  {
    "id": "bai-25-cau-9",
    "lessonId": "25",
    "number": 9,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Trong Google Sites, bản đồ có thể được thêm vào trang web thông qua dịch vụ nào sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Google Maps."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Google Drive."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Google Photos."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Google Forms."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Google Maps.."
  },
  {
    "id": "bai-25-cau-10",
    "lessonId": "25",
    "number": 10,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi chèn bản đồ vào trang web, làm cách nào để xác định một địa điểm cụ thể?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Nhập tên địa điểm vào ô tìm kiếm hoặc đặt dấu vị trí."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ có thể chọn từ danh sách có sẵn."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Chỉ nhập địa chỉ IP của địa điểm."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Phải nhập tọa độ GPS."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Nhập tên địa điểm vào ô tìm kiếm hoặc đặt dấu vị trí.."
  },
  {
    "id": "bai-25-cau-11",
    "lessonId": "25",
    "number": 11,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Để thay đổi kích thước của bản đồ trong Google Sites, cần làm gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Kéo thả chuột để điều chỉnh kích thước."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉnh sửa trong phần Cài đặt trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Cài đặt lại Google Maps."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Chỉ có thể thay đổi khi xuất bản trang web."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Kéo thả chuột để điều chỉnh kích thước.."
  },
  {
    "id": "bai-25-cau-12",
    "lessonId": "25",
    "number": 12,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi muốn chỉnh sửa hoặc xóa một đối tượng trong trang web, người dùng cần thao tác gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Chọn đối tượng và sử dụng lệnh sao chép hoặc xóa."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Xuất bản lại trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Chỉ có thể chỉnh sửa khi tắt kết nối Internet."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không thể chỉnh sửa sau khi thêm vào."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Chọn đối tượng và sử dụng lệnh sao chép hoặc xóa.."
  },
  {
    "id": "bai-25-cau-13",
    "lessonId": "25",
    "number": 13,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Chức năng \"Undo\" (hoàn tác) trong Google Sites có tác dụng gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Hủy bỏ lệnh vừa thực hiện."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Xuất bản trang web ngay lập tức."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Xóa toàn bộ nội dung trang web."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Chỉ áp dụng cho phần tiêu đề."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Hủy bỏ lệnh vừa thực hiện.."
  },
  {
    "id": "bai-25-cau-14",
    "lessonId": "25",
    "number": 14,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Phát biểu nào sau đây sai?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Google Sites cho phép thực hiện tạo phần thân trang theo kiến trúc khối với các mẫu được hỗ trợ sẵn."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Sau khi thiết lập cấu trúc nội dung cho phần thân trang web, nháy chuột vào biểu tượng"
          },
          {
            "type": "image",
            "src": "/question-assets/lesson-25-image-1.png",
            "alt": "Biểu tượng minh họa Bài 25"
          },
          {
            "type": "text",
            "text": "để thêm ảnh vào trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Có thể thay đổi kích thước của bản đồ bằng cách chọn bản đồ rồi kéo thả chuột tại các nút trên khung để được kích thước mong muốn."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Sử dụng biểu tượng"
          },
          {
            "type": "image",
            "src": "/question-assets/lesson-25-image-2.png",
            "alt": "Biểu tượng minh họa Bài 25"
          },
          {
            "type": "text",
            "text": "để thêm bản đồ vào trang web."
          }
        ]
      }
    ],
    "correctOptionId": "D",
    "explanation": "Đáp án đúng là D vì phương án này phù hợp nhất với nội dung câu hỏi: Sử dụng biểu tượng Biểu tượng minh họa Bài 25 để thêm bản đồ vào trang web.."
  },
  {
    "id": "bai-25-cau-15",
    "lessonId": "25",
    "number": 15,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Vì sao cần sử dụng nhóm lệnh Chèn trong Google Sites?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Để thêm nội dung như văn bản, hình ảnh, bản đồ vào trang web."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Để chỉnh sửa phần tiêu đề trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Để thay đổi giao diện trình duyệt."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Để tắt các chức năng của trang web."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Để thêm nội dung như văn bản, hình ảnh, bản đồ vào trang web.."
  },
  {
    "id": "bai-25-cau-16",
    "lessonId": "25",
    "number": 16,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi thiết kế phần thân trang web, vì sao cần chia nội dung thành các khối?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Giúp nội dung dễ đọc và bố cục rõ ràng."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Giúp trang web tải nhanh hơn."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Chỉ để trang web đẹp hơn."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không cần thiết lập khối nội dung."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Giúp nội dung dễ đọc và bố cục rõ ràng.."
  },
  {
    "id": "bai-25-cau-17",
    "lessonId": "25",
    "number": 17,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi chỉnh sửa phần thân trang, tại sao cần thêm tiêu đề và văn bản dưới hình ảnh?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Để nội dung trở nên dễ hiểu và trực quan hơn."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ để làm đẹp trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Không cần thêm tiêu đề nếu có hình ảnh."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không ảnh hưởng đến trải nghiệm người dùng."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Để nội dung trở nên dễ hiểu và trực quan hơn.."
  },
  {
    "id": "bai-25-cau-18",
    "lessonId": "25",
    "number": 18,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Việc chèn bản đồ vào trang web có tác dụng gì sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Giúp người dùng dễ dàng tìm kiếm vị trí."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ để trang web có thêm tính năng."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Làm chậm tốc độ tải trang."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không có tác dụng đặc biệt."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Giúp người dùng dễ dàng tìm kiếm vị trí.."
  },
  {
    "id": "bai-25-cau-19",
    "lessonId": "25",
    "number": 19,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Vì sao cần chỉnh sửa kích thước và vị trí các đối tượng trên trang web?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Để đảm bảo bố cục trang web gọn gàng và dễ sử dụng."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ để tiết kiệm dung lượng trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Không ảnh hưởng đến trải nghiệm người dùng."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Để trang web có thể hoạt động nhanh hơn."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Để đảm bảo bố cục trang web gọn gàng và dễ sử dụng.."
  },
  {
    "id": "bai-25-cau-20",
    "lessonId": "25",
    "number": 20,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Ảnh số được xác định bởi tập hợp các điểm ảnh, mỗi điểm ảnh có một bộ giá trị thể hiện màu sắc và cường độ."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Ảnh số được tạo thành từ các điểm ảnh, mỗi điểm ảnh có thể biểu thị màu sắc và cường độ riêng."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Độ phân giải của ảnh số càng cao thì ảnh càng rõ nét và chi tiết hơn."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Độ phân giải của ảnh số không ảnh hưởng đến chất lượng hiển thị của ảnh."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Số điểm ảnh trên một inch là yếu tố quan trọng để xác định độ phân giải của ảnh số."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-25-cau-21",
    "lessonId": "25",
    "number": 21,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Phần mềm chỉnh sửa ảnh cho phép người dùng thực hiện nhiều thao tác khác nhau trên ảnh bitmap để điều chỉnh và cải thiện hình ảnh."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Thông tin ảnh bitmap được biểu thị bằng các điểm ảnh, mỗi điểm ảnh tương ứng với một vị trí trên ảnh với màu sắc xác định."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "GIMP là một phần mềm chỉnh sửa ảnh bitmap miễn phí, cung cấp nhiều công cụ và chức năng."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "GIMP là phần mềm chỉnh sửa ảnh chuyên nghiệp có tính phí, không phải là phần mềm miễn phí."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Ảnh bitmap không thể được chỉnh sửa mà chỉ có thể hiển thị."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-25-cau-22",
    "lessonId": "25",
    "number": 22,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Giao diện và chức năng của GIMP bao gồm nhiều thành phần và công cụ giúp người dùng thao tác chỉnh sửa ảnh một cách hiệu quả."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Giao diện của GIMP bao gồm Thanh bảng chọn, bảng công cụ, hộp tùy chọn công cụ, vùng hiển thị ảnh và các hộp chức năng."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "GIMP không hỗ trợ các thao tác cơ bản như phóng to, thu nhỏ, cắt ảnh hay xoay ảnh."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Người dùng có thể thực hiện các thao tác như cắt ảnh và xoay ảnh trực tiếp trong phần mềm GIMP."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Giao diện của GIMP không có tùy chọn công cụ và chỉ cho phép hiển thị ảnh mà không có chức năng chỉnh sửa."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-25-cau-23",
    "lessonId": "25",
    "number": 23,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Chỉnh sửa ảnh với GIMP là một quá trình đơn giản nhờ vào các công cụ và chức năng mà phần mềm cung cấp."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "GIMP chỉ cho phép chỉnh sửa ảnh với các thao tác nâng cao, không hỗ trợ các thao tác cơ bản."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Phần mềm GIMP cung cấp các công cụ cơ bản để chỉnh sửa ảnh như phóng to, thu nhỏ, cắt và xoay ảnh."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Việc chỉnh sửa ảnh với GIMP yêu cầu người dùng phải có kiến thức lập trình."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "GIMP là một công cụ miễn phí nhưng mạnh mẽ để chỉnh sửa ảnh bitmap."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-26-cau-1",
    "lessonId": "26",
    "number": 1,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Để tạo trang con, em sử dụng bảng chọn nào sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn Chèn."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn Giao diện."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn Trang."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn Cấu trúc."
          }
        ]
      }
    ],
    "correctOptionId": "C",
    "explanation": "Đáp án đúng là C vì phương án này phù hợp nhất với nội dung câu hỏi: Bảng chọn Trang.."
  },
  {
    "id": "bai-26-cau-2",
    "lessonId": "26",
    "number": 2,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Nếu người dùng truy cập bằng điện thoại hay máy tính bảng thì bảng chọn trên thanh điều hướng sẽ được hiển thị như thế nào?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn trên thanh điều hướng có dạng"
          },
          {
            "type": "image",
            "src": "/question-assets/lesson-26-image-1.png",
            "alt": "Biểu tượng minh họa Bài 26"
          },
          {
            "type": "text",
            "text": "và nằm bên trái, ngay sau logo của trang."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn trên thanh điều hướng có dạng"
          },
          {
            "type": "image",
            "src": "/question-assets/lesson-26-image-1.png",
            "alt": "Biểu tượng minh họa Bài 26"
          },
          {
            "type": "text",
            "text": "và nằm bên phải, ngay trước logo của trang."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn trên thanh điều hướng có dạng"
          },
          {
            "type": "image",
            "src": "/question-assets/lesson-26-image-1.png",
            "alt": "Biểu tượng minh họa Bài 26"
          },
          {
            "type": "text",
            "text": "và nằm bên trái, ngay trước logo của trang."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn trên thanh điều hướng có dạng"
          },
          {
            "type": "image",
            "src": "/question-assets/lesson-26-image-1.png",
            "alt": "Biểu tượng minh họa Bài 26"
          },
          {
            "type": "text",
            "text": "và nằm bên phải, ngay sau logo của trang."
          }
        ]
      }
    ],
    "correctOptionId": "B",
    "explanation": "Đáp án đúng là B vì phương án này phù hợp nhất với nội dung câu hỏi: Bảng chọn trên thanh điều hướng có dạng Biểu tượng minh họa Bài 26 và nằm bên phải, ngay trước logo của trang.."
  },
  {
    "id": "bai-26-cau-3",
    "lessonId": "26",
    "number": 3,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Trong mô hình trang web liên kết theo cấu trúc hình cây, thuật ngữ \"liên kết\" (link) có nghĩa là gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Cụm từ mang liên kết giúp người dùng điều hướng giữa các trang web."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Một hình ảnh trang trí trên trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Một đoạn văn bản không có chức năng đặc biệt."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Một đoạn mã HTML bắt buộc phải có."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Cụm từ mang liên kết giúp người dùng điều hướng giữa các trang web.."
  },
  {
    "id": "bai-26-cau-4",
    "lessonId": "26",
    "number": 4,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Trang chủ của một trang web là gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Trang đầu tiên chứa các khối văn bản giới thiệu."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Trang chứa toàn bộ nội dung chi tiết của trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Một trang con mở từ trang khác."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Trang cuối cùng của một trang web."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Trang đầu tiên chứa các khối văn bản giới thiệu.."
  },
  {
    "id": "bai-26-cau-5",
    "lessonId": "26",
    "number": 5,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Trang con trong một trang web là gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Trang mở từ bảng chọn của trang chủ."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Trang web độc lập không liên kết với trang nào."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Trang chủ của trang web."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Trang chỉ chứa hình ảnh mà không có nội dung văn bản."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Trang mở từ bảng chọn của trang chủ.."
  },
  {
    "id": "bai-26-cau-6",
    "lessonId": "26",
    "number": 6,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi tạo trang web theo cấu trúc hình cây, trang Mù Cang Chải thuộc loại nào?"
      },
      {
        "type": "image",
        "src": "/question-assets/lesson-26-image-2.png",
        "alt": "Biểu tượng minh họa Bài 26"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Trang con của trang Tây Bắc – Đông Bắc."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Trang chủ của trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Một trang độc lập không liên kết."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Một trang không thể truy cập từ trang chủ."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Trang con của trang Tây Bắc – Đông Bắc.."
  },
  {
    "id": "bai-26-cau-7",
    "lessonId": "26",
    "number": 7,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Trong Google Sites, bảng chọn nào sau đây được sử dụng để tạo trang con?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn Trang."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn Chèn."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn Giao diện."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn Cài đặt."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Bảng chọn Trang.."
  },
  {
    "id": "bai-26-cau-8",
    "lessonId": "26",
    "number": 8,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Để tạo trang con trong Google Sites, bước nào dưới đây là đúng?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Nháy chuột vào dấu cạnh Trang chủ → Thêm trang con → Gõ tên trang con → Xong."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ cần nhập tên trang con trong phần tiêu đề."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Chỉnh sửa nội dung trang chủ mà không cần tạo trang con."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không thể tạo trang con trong Google Sites."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Nháy chuột vào dấu cạnh Trang chủ → Thêm trang con → Gõ tên trang con → Xong.."
  },
  {
    "id": "bai-26-cau-9",
    "lessonId": "26",
    "number": 9,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Chế độ nào sau đây giúp kiểm tra trang con đã tạo trong Google Sites?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Chế độ xem trước."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chế độ chỉnh sửa trực tiếp."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Chế độ xuất bản ngay lập tức."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Chế độ xóa trang."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Chế độ xem trước.."
  },
  {
    "id": "bai-26-cau-10",
    "lessonId": "26",
    "number": 10,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Trong Google Sites, thanh điều hướng có thể được hiển thị ở vị trí nào sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Trên cùng hoặc bên trái."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ ở bên trái."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Chỉ ở trên cùng."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không thể điều chỉnh vị trí."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Trên cùng hoặc bên trái.."
  },
  {
    "id": "bai-26-cau-11",
    "lessonId": "26",
    "number": 11,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi bổ sung nội dung cho trang con, người dùng có thể thêm gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Văn bản và hình ảnh minh họa."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ văn bản."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Chỉ hình ảnh mà không có nội dung văn bản."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không thể bổ sung nội dung cho trang con."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Văn bản và hình ảnh minh họa.."
  },
  {
    "id": "bai-26-cau-12",
    "lessonId": "26",
    "number": 12,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Trong Google Sites, để tạo liên kết từ trang chủ đến trang con, bước nào sau đây là đúng?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Nháy chuột phải vào đoạn văn bản → Chọn biểu tượng chèn liên kết → Chọn trang con → Áp dụng."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ cần nhập tên trang con vào nội dung trang chủ."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Không thể tạo liên kết giữa trang chủ và trang con."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Phải tạo một trang web mới thay vì liên kết."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Nháy chuột phải vào đoạn văn bản → Chọn biểu tượng chèn liên kết → Chọn trang con → Áp dụng.."
  },
  {
    "id": "bai-26-cau-13",
    "lessonId": "26",
    "number": 13,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Phát biểu nào sau đây sai?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Giải pháp hữu hiệu để có thể trình bày đầy đủ văn bản mà không làm hỏng sự cân đối trong trình bày của trang web là tạo ra các trang độc lập và sử dụng các liên kết đến chúng từ phần giới thiệu ở trang chủ."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Các trang web được mở từ bảng chọn của trang chủ được gọi là trang con của trang chủ."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Có thể đưa vào các cụm từ mang liên kết đến các trang khác, làm thành một bảng chọn trên thanh điều hướng."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Các trang con của trang chủ không thể có các trang con của mình."
          }
        ]
      }
    ],
    "correctOptionId": "D",
    "explanation": "Đáp án đúng là D vì phương án này phù hợp nhất với nội dung câu hỏi: Các trang con của trang chủ không thể có các trang con của mình.."
  },
  {
    "id": "bai-26-cau-14",
    "lessonId": "26",
    "number": 14,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Phát biểu nào sau đây sai?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Muốn truy cập một trang con thì nháy chuột vào tên trang đó ở bảng chọn được mở ra từ Trang chủ."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Google Sites tự động điều chỉnh giao diện trang web khi người dùng truy cập bằng điện thoại hay máy tính bảng."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Sau khi được khởi tạo, các trang con đã có sẵn nội dung giống như trang chủ."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Phần đầu của các trang con được tạo tự động với hình nền của trang chủ và tiêu đề tương ứng với tên trang con."
          }
        ]
      }
    ],
    "correctOptionId": "C",
    "explanation": "Đáp án đúng là C vì phương án này phù hợp nhất với nội dung câu hỏi: Sau khi được khởi tạo, các trang con đã có sẵn nội dung giống như trang chủ.."
  },
  {
    "id": "bai-26-cau-15",
    "lessonId": "26",
    "number": 15,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Vì sao trang web thường được tổ chức theo cấu trúc hình cây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Giúp người dùng dễ dàng điều hướng và truy cập nội dung."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Giúp trang web tải nhanh hơn."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Để tạo ra nhiều liên kết không cần thiết."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Chỉ để trang web trông đẹp hơn."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Giúp người dùng dễ dàng điều hướng và truy cập nội dung.."
  },
  {
    "id": "bai-26-cau-16",
    "lessonId": "26",
    "number": 16,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Việc tạo trang con giúp ích gì cho việc quản lý nội dung trang web?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Giúp tổ chức nội dung khoa học và dễ truy cập hơn."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Khiến trang web phức tạp hơn."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Không ảnh hưởng đến trải nghiệm người dùng."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Chỉ làm tăng số lượng trang không cần thiết."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Giúp tổ chức nội dung khoa học và dễ truy cập hơn.."
  },
  {
    "id": "bai-26-cau-17",
    "lessonId": "26",
    "number": 17,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Tại sao cần sử dụng thanh điều hướng trong trang web?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Giúp người dùng di chuyển nhanh đến các trang quan trọng."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ để trang web trông chuyên nghiệp hơn."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Không cần thiết nếu có nhiều trang con."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Chỉ cần thiết trong trang web thương mại."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Giúp người dùng di chuyển nhanh đến các trang quan trọng.."
  },
  {
    "id": "bai-26-cau-18",
    "lessonId": "26",
    "number": 18,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi tạo liên kết từ trang chủ đến trang con, vì sao nên sử dụng cụm từ như \"Đọc tiếp\"?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Giúp người dùng dễ nhận biết liên kết và điều hướng tốt hơn."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ để làm đẹp trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Không ảnh hưởng đến trải nghiệm người dùng."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không cần thiết nếu đã có tiêu đề trang con."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Giúp người dùng dễ nhận biết liên kết và điều hướng tốt hơn.."
  },
  {
    "id": "bai-26-cau-19",
    "lessonId": "26",
    "number": 19,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi bổ sung nội dung cho trang con, điều nào sau đây là quan trọng nhất?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Sử dụng văn bản và hình ảnh phù hợp để minh họa nội dung."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ thêm hình ảnh mà không có mô tả."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Chỉ cần tiêu đề mà không có nội dung."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không cần thêm nội dung chi tiết."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Sử dụng văn bản và hình ảnh phù hợp để minh họa nội dung.."
  },
  {
    "id": "bai-26-cau-20",
    "lessonId": "26",
    "number": 20,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Nếu muốn xây dựng một trang web giới thiệu du lịch, bạn cần làm gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Tạo trang chủ và trang con theo từng địa điểm du lịch."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ sử dụng một trang duy nhất mà không có liên kết."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Không cần tổ chức nội dung theo cấu trúc cụ thể."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Chỉ cần nhập toàn bộ thông tin vào một trang."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Tạo trang chủ và trang con theo từng địa điểm du lịch.."
  },
  {
    "id": "bai-26-cau-21",
    "lessonId": "26",
    "number": 21,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi thiết kế trang web giới thiệu các danh lam thắng cảnh, cách tốt nhất để tổ chức nội dung là gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Tạo trang chủ và phân loại địa điểm theo từng trang con."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Đưa toàn bộ nội dung vào một trang duy nhất."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Không cần phân loại nội dung."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Chỉ hiển thị hình ảnh mà không có thông tin mô tả."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Tạo trang chủ và phân loại địa điểm theo từng trang con.."
  },
  {
    "id": "bai-26-cau-22",
    "lessonId": "26",
    "number": 22,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi người dùng muốn thêm một bài viết chi tiết về một địa danh vào trang web, cần thực hiện bước nào sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Tạo trang con và thêm nội dung vào đó."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Viết trực tiếp lên trang chủ mà không cần tạo trang con."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Không thể thêm bài viết vào trang web."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Chỉ cần tạo một liên kết đến trang web khác."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Tạo trang con và thêm nội dung vào đó.."
  },
  {
    "id": "bai-26-cau-23",
    "lessonId": "26",
    "number": 23,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Tạo các trang con, liên kết giữa các trang và xây dựng một hệ thống điều hướng rõ ràng giúp người dùng dễ dàng tìm kiếm thông tin trên trang web của mình."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Sử dụng cấu trúc hình cây giúp tăng tính chuyên nghiệp cho trang web."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Việc tạo quá nhiều cấp độ trang con có thể làm cho trang web trở nên phức tạp và khó sử dụng."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Liên kết nội bộ chỉ được đặt trong phần điều hướng của trang web."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Tất cả các trang con đều phải có cùng một giao diện."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-26-cau-24",
    "lessonId": "26",
    "number": 24,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Mô hình trang web theo cấu trúc hình cây là một cách tổ chức các trang web theo cấp bậc, trong đó có trang chủ và các trang con liên kết với nhau. Trang chủ là điểm bắt đầu và từ đó người dùng có thể truy cập các trang con qua liên kết."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Mô hình trang web theo cấu trúc hình cây bao gồm trang chủ và các trang con liên kết với nhau."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Trang chủ luôn là trang cuối cùng trong mô hình trang web hình cây."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Trang con là các trang mở từ bảng chọn của trang chủ."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Liên kết giúp người dùng di chuyển giữa các trang web trong mô hình hình cây."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-26-cau-25",
    "lessonId": "26",
    "number": 25,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Trang chủ là trang đầu tiên của một website, thường chứa các khối văn bản giới thiệu và điều hướng đến các trang con. Nó giúp người dùng dễ dàng tìm kiếm thông tin và truy cập các nội dung quan trọng."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Trang chủ có thể chứa liên kết đến các trang con khác trong website."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Mọi website đều phải có trang chủ để hoạt động."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Trang chủ không thể chứa hình ảnh hoặc nội dung văn bản."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Trang chủ đóng vai trò trung tâm trong việc điều hướng website."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-26-cau-26",
    "lessonId": "26",
    "number": 26,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Khi tạo trang con trên Google Sites, người dùng có thể truy cập bảng chọn Trang, chọn Thêm trang con và đặt tên cho trang mới. Sau đó, trang con sẽ xuất hiện trong hệ thống điều hướng của website."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Người dùng không thể tạo trang con trên Google Sites."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Trang con có thể được tạo thông qua bảng chọn Trang trong Google Sites."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Mỗi trang con phải có tên khác nhau để dễ quản lý."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Một trang con có thể xuất hiện trong hệ thống điều hướng của website."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-26-cau-27",
    "lessonId": "26",
    "number": 27,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Để truy cập trang con trong Google Sites, người dùng có thể sử dụng bảng chọn Trang hoặc tạo liên kết từ trang chủ đến trang con. Điều này giúp cải thiện trải nghiệm người dùng khi di chuyển giữa các nội dung."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Người dùng chỉ có thể truy cập trang con từ trang chủ."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Google Sites hỗ trợ truy cập trang con từ bảng chọn Trang."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Việc tạo liên kết giúp người dùng dễ dàng di chuyển giữa các trang."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Nếu không có liên kết, trang con sẽ không thể truy cập được."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-27-cau-1",
    "lessonId": "27",
    "number": 1,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Em có thể tạo biểu mẫu bằng ứng dụng nào sau đây của Google?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Google Docs."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Google Forms."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Google Sheets."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Google Finance."
          }
        ]
      }
    ],
    "correctOptionId": "B",
    "explanation": "Đáp án đúng là B vì phương án này phù hợp nhất với nội dung câu hỏi: Google Forms.."
  },
  {
    "id": "bai-27-cau-2",
    "lessonId": "27",
    "number": 2,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Em sử dụng bảng chọn nào sau đây để nhúng biểu mẫu đã tạo vào cuối trang chủ?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn Trang."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn Tiện ích."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn Giao diện."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Bảng chọn Chèn."
          }
        ]
      }
    ],
    "correctOptionId": "D",
    "explanation": "Đáp án đúng là D vì phương án này phù hợp nhất với nội dung câu hỏi: Bảng chọn Chèn.."
  },
  {
    "id": "bai-27-cau-3",
    "lessonId": "27",
    "number": 3,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Bản tóm tắt thống kê câu trả lời của biểu mẫu được biểu diễn dưới dạng gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Bảng."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Danh sách."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Biểu đồ."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Sơ đồ."
          }
        ]
      }
    ],
    "correctOptionId": "C",
    "explanation": "Đáp án đúng là C vì phương án này phù hợp nhất với nội dung câu hỏi: Biểu đồ.."
  },
  {
    "id": "bai-27-cau-4",
    "lessonId": "27",
    "number": 4,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Để tạo một biểu mẫu mới trong Google Forms, người dùng cần làm gì trước tiên?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Nháy chuột vào biểu tượng tạo mới."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Mở Google Docs."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Cài đặt phần mềm trên máy tính."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Mở Google Drive."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Nháy chuột vào biểu tượng tạo mới.."
  },
  {
    "id": "bai-27-cau-5",
    "lessonId": "27",
    "number": 5,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Biểu mẫu mới trong Google Forms ban đầu có đặc điểm gì sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Không có tiêu đề."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Có sẵn câu hỏi mẫu."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Đã được thiết lập sẵn câu trả lời."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không thể chỉnh sửa."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Không có tiêu đề.."
  },
  {
    "id": "bai-27-cau-6",
    "lessonId": "27",
    "number": 6,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Để nhập tiêu đề cho biểu mẫu mới, người dùng cần làm gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Nháy chuột vào \"Mẫu không có tiêu đề\" và nhập nội dung."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chọn một mẫu có sẵn và không thể chỉnh sửa."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Không cần nhập tiêu đề."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Nhập tiêu đề vào phần mô tả ngắn gọn."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Nháy chuột vào \"Mẫu không có tiêu đề\" và nhập nội dung.."
  },
  {
    "id": "bai-27-cau-7",
    "lessonId": "27",
    "number": 7,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Trong Google Forms, khi tạo câu hỏi trắc nghiệm, tùy chọn nào sau đây nên được bật?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Bắt buộc trả lời."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Tự động lưu câu trả lời."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Giới hạn số lần trả lời."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Ẩn câu hỏi với người dùng."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Bắt buộc trả lời.."
  },
  {
    "id": "bai-27-cau-8",
    "lessonId": "27",
    "number": 8,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Để thêm một câu hỏi mới trong Google Forms, người dùng cần làm gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Nháy chuột vào nút Thêm câu hỏi trong bảng chọn bên phải."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Sử dụng phím tắt Ctrl + N."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Xuất bản biểu mẫu trước khi thêm câu hỏi."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không thể thêm câu hỏi sau khi tạo biểu mẫu."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Nháy chuột vào nút Thêm câu hỏi trong bảng chọn bên phải.."
  },
  {
    "id": "bai-27-cau-9",
    "lessonId": "27",
    "number": 9,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Trong Google Forms, người dùng có thể thêm các loại câu hỏi nào sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Trắc nghiệm, hộp kiểm, câu trả lời ngắn."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ câu hỏi trắc nghiệm."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Chỉ câu hỏi mở."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không thể thêm câu hỏi."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Trắc nghiệm, hộp kiểm, câu trả lời ngắn.."
  },
  {
    "id": "bai-27-cau-10",
    "lessonId": "27",
    "number": 10,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Để nhúng biểu mẫu vào trang web, người dùng cần sử dụng chức năng nào sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Chèn biểu mẫu từ bảng chọn Chèn trong Google Sites."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Sao chép và dán nội dung biểu mẫu vào trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Chỉ có thể gửi biểu mẫu qua email."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không thể nhúng biểu mẫu vào trang web."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Chèn biểu mẫu từ bảng chọn Chèn trong Google Sites.."
  },
  {
    "id": "bai-27-cau-11",
    "lessonId": "27",
    "number": 11,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi nhúng biểu mẫu vào trang web, biểu mẫu sẽ xuất hiện ở đâu?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Cuối trang chủ."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Ở giữa trang web."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Ở đầu trang web."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không hiển thị trên trang web."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Cuối trang chủ.."
  },
  {
    "id": "bai-27-cau-12",
    "lessonId": "27",
    "number": 12,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Để xem lại dữ liệu phản hồi trong Google Forms, người dùng cần làm gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Mở ứng dụng Forms và chọn tab \"Câu trả lời\"."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Mở Google Docs."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Truy cập Google Sheets."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không thể xem lại phản hồi."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Mở ứng dụng Forms và chọn tab \"Câu trả lời\".."
  },
  {
    "id": "bai-27-cau-13",
    "lessonId": "27",
    "number": 13,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Phát biểu nào sau đây sai?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Việc tạo biểu mẫu trên trang web để lấy ý kiến phản hồi của người dùng về bản chất là tạo biểu mẫu bằng ứng dụng Forms của Google rồi nhúng vào trang web được thiết kế bằng Google Sites."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Để tạo biểu mẫu mới, em nháy chuột vào biểu tượng"
          },
          {
            "type": "image",
            "src": "/question-assets/lesson-27-image-1.png",
            "alt": "Biểu tượng minh họa Bài 27"
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Để nhập tiêu đề cho biểu mẫu, em nháy chuột vào Mô tả biểu mẫu."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Google Forms cung cấp một số kiểu biểu mẫu được tạo sẵn như: Thông tin liên hệ, Trả lời sự kiện, Lời mời dự tiệc, …"
          }
        ]
      }
    ],
    "correctOptionId": "C",
    "explanation": "Đáp án đúng là C vì phương án này phù hợp nhất với nội dung câu hỏi: Để nhập tiêu đề cho biểu mẫu, em nháy chuột vào Mô tả biểu mẫu.."
  },
  {
    "id": "bai-27-cau-14",
    "lessonId": "27",
    "number": 14,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Dữ liệu thống kê phản hồi của người dùng sau khi trang web được xuất bản được tập hợp vào ứng dụng nào của Google?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Google Sheets."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Google Docs."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Google Drive."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Google Keep."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Google Sheets.."
  },
  {
    "id": "bai-27-cau-15",
    "lessonId": "27",
    "number": 15,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Vì sao nên bật chế độ \"Bắt buộc\" khi tạo câu hỏi trong Google Forms?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Để đảm bảo người dùng trả lời câu hỏi trước khi gửi biểu mẫu."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Để giới hạn số người có thể tham gia."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Để ẩn câu hỏi với một số người dùng."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Để làm cho biểu mẫu trở nên đơn giản hơn."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Để đảm bảo người dùng trả lời câu hỏi trước khi gửi biểu mẫu.."
  },
  {
    "id": "bai-27-cau-16",
    "lessonId": "27",
    "number": 16,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi nhúng biểu mẫu vào trang web, người dùng có thể làm gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Trả lời trực tiếp trên trang web mà không cần mở Google Forms."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ có thể xem mà không thể trả lời."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Cần tải biểu mẫu về để điền."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Chỉ xem được câu hỏi, không thể nhập câu trả lời."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Trả lời trực tiếp trên trang web mà không cần mở Google Forms.."
  },
  {
    "id": "bai-27-cau-17",
    "lessonId": "27",
    "number": 17,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Vì sao cần sử dụng Google Forms thay vì tạo bảng câu hỏi trên giấy?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Dễ dàng thu thập và xử lý dữ liệu tự động."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ vì tiết kiệm chi phí in ấn."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Vì không thể tạo bảng câu hỏi trên giấy."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Vì Google Forms có nhiều màu sắc hơn."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Dễ dàng thu thập và xử lý dữ liệu tự động.."
  },
  {
    "id": "bai-27-cau-18",
    "lessonId": "27",
    "number": 18,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi xem dữ liệu phản hồi trong Google Forms, người dùng có thể làm gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Xem biểu đồ thống kê phản hồi."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉnh sửa câu trả lời của người khác."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Xóa tất cả phản hồi ngay lập tức."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không thể xem dữ liệu phản hồi."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Xem biểu đồ thống kê phản hồi.."
  },
  {
    "id": "bai-27-cau-19",
    "lessonId": "27",
    "number": 19,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi chọn \"Xem trong trang tính\", dữ liệu phản hồi sẽ được hiển thị dưới dạng nào sau đây?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Bảng dữ liệu trong Google Sheets."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Văn bản thuần túy không có định dạng."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Chỉ hiển thị số lượng câu trả lời."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không thể xem trong Google Sheets."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Bảng dữ liệu trong Google Sheets.."
  },
  {
    "id": "bai-27-cau-20",
    "lessonId": "27",
    "number": 20,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Nếu muốn thu thập ý kiến phản hồi từ khách hàng trên trang web, bạn nên làm gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Nhúng biểu mẫu Google Forms vào trang web."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Yêu cầu khách hàng gửi email phản hồi."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Chỉ sử dụng hình thức gọi điện thoại."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không cần thu thập phản hồi từ khách hàng."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Nhúng biểu mẫu Google Forms vào trang web.."
  },
  {
    "id": "bai-27-cau-21",
    "lessonId": "27",
    "number": 21,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi tạo khảo sát khách hàng về sản phẩm, điều quan trọng nhất là gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Đặt câu hỏi rõ ràng, phù hợp với mục tiêu khảo sát."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ đặt câu hỏi trắc nghiệm."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Không cần giới hạn số lượng câu hỏi."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Đặt câu hỏi càng dài càng tốt."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Đặt câu hỏi rõ ràng, phù hợp với mục tiêu khảo sát.."
  },
  {
    "id": "bai-27-cau-22",
    "lessonId": "27",
    "number": 22,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Nếu muốn tạo bài kiểm tra trắc nghiệm tự động chấm điểm, cần làm gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Sử dụng Google Forms và thiết lập đáp án đúng."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ sử dụng Google Docs."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Chấm điểm thủ công sau khi thu thập phản hồi."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Không thể tạo bài kiểm tra tự động chấm điểm."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Sử dụng Google Forms và thiết lập đáp án đúng.."
  },
  {
    "id": "bai-27-cau-23",
    "lessonId": "27",
    "number": 23,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Khi sử dụng Google Forms để khảo sát, làm thế nào để nhận thông báo khi có phản hồi mới?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Bật thông báo qua email trong phần cài đặt biểu mẫu."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Kiểm tra thủ công từng ngày."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Không thể nhận thông báo phản hồi."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Chỉ có thể xem phản hồi sau khi khảo sát kết thúc."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Bật thông báo qua email trong phần cài đặt biểu mẫu.."
  },
  {
    "id": "bai-27-cau-24",
    "lessonId": "27",
    "number": 24,
    "type": "choice",
    "prompt": [
      {
        "type": "text",
        "text": "Nếu muốn xem phản hồi chi tiết của từng người tham gia khảo sát, cần làm gì?"
      }
    ],
    "options": [
      {
        "id": "A",
        "content": [
          {
            "type": "text",
            "text": "Chọn tab \"Cá nhân\" trong mục \"Câu trả lời\" của Google Forms."
          }
        ]
      },
      {
        "id": "B",
        "content": [
          {
            "type": "text",
            "text": "Chỉ xem tổng số lượng phản hồi."
          }
        ]
      },
      {
        "id": "C",
        "content": [
          {
            "type": "text",
            "text": "Không thể xem phản hồi cá nhân."
          }
        ]
      },
      {
        "id": "D",
        "content": [
          {
            "type": "text",
            "text": "Phải xuất dữ liệu ra file Excel trước khi xem."
          }
        ]
      }
    ],
    "correctOptionId": "A",
    "explanation": "Đáp án đúng là A vì phương án này phù hợp nhất với nội dung câu hỏi: Chọn tab \"Cá nhân\" trong mục \"Câu trả lời\" của Google Forms.."
  },
  {
    "id": "bai-27-cau-25",
    "lessonId": "27",
    "number": 25,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Tạo biểu mẫu trực tuyến bằng Google Forms và nhúng biểu mẫu đó vào một trang web được thiết kế bằng Google Sites"
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Google Forms chỉ cho phép tạo các biểu mẫu đơn giản, không thể tạo các biểu mẫu phức tạp."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Để nhúng biểu mẫu Google Forms vào trang web Google Sites, cần phải có mã nhúng."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Bạn có thể tùy chỉnh giao diện của biểu mẫu Google Forms để phù hợp với trang web của mình."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Google Forms không tích hợp với các dịch vụ khác của Google như Google Drive."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-27-cau-26",
    "lessonId": "27",
    "number": 26,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Khi tạo biểu mẫu trên Google Forms, người dùng có thể thêm nhiều loại câu hỏi khác nhau như trắc nghiệm, hộp kiểm, câu trả lời ngắn hoặc đoạn văn bản dài để phù hợp với nhu cầu thu thập thông tin."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Google Forms chỉ hỗ trợ câu hỏi trắc nghiệm, không có loại câu hỏi khác."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Người dùng có thể đặt một câu hỏi là bắt buộc phải trả lời trước khi gửi biểu mẫu."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Câu hỏi trong Google Forms không thể có nhiều đáp án."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Google Forms cho phép thêm câu trả lời khác ngoài các tùy chọn có sẵn."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-27-cau-27",
    "lessonId": "27",
    "number": 27,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Để nhúng biểu mẫu vào trang web trên Google Sites, người dùng cần mở trang chủ, chọn biểu mẫu cần chèn và nhấn nút Chèn để thêm vào trang web."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Google Forms không thể nhúng trực tiếp vào Google Sites."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Biểu mẫu được nhúng vào trang web sẽ xuất hiện ở cuối trang chủ."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Sau khi nhúng biểu mẫu vào trang web, không thể chỉnh sửa hoặc cập nhật nội dung biểu mẫu."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Người dùng có thể nhập câu trả lời vào biểu mẫu ngay trên trang web mà không cần mở Google Forms."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-27-cau-28",
    "lessonId": "27",
    "number": 28,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Google Forms cho phép người dùng thu thập dữ liệu từ nhiều người khác nhau và cung cấp các công cụ để xem thống kê phản hồi dưới dạng biểu đồ trực quan."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Google Forms không hỗ trợ xem thống kê phản hồi dưới dạng biểu đồ."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Người dùng có thể xem tổng số câu trả lời đã được gửi qua Google Forms."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Google Forms chỉ hiển thị dữ liệu phản hồi dưới dạng danh sách, không có biểu đồ trực quan."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Các câu trả lời có thể được xem dưới nhiều chế độ khác nhau như Tóm tắt, Câu hỏi và Cá nhân."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-27-cau-29",
    "lessonId": "27",
    "number": 29,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Một học sinh thực hiện tạo website cho một tổ chức từ thiện gồm 3 trang web sau: Giới thiệu về tổ chức, Thông tin dự án, Sự kiện. Bạn học sinh đó có một số nhận xét sau đây:"
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Có thể tạo 3 trang web đã nêu từ các mẫu (theme) có sẵn của phần mềm tạo trang web."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Tổ chức chia sẻ website bằng cách duy nhất là: gửi các tệp *. html của trang web qua email."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "Trong trang Sự kiện, để hiển thị nhiều hình ảnh trong cùng một khối, có thể sử dụng chức năng Bộ sưu tập (hoặc thanh trượt/băng chuyền hình ảnh) của phần mềm tạo trang web."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Khi cần đăng lại một video về hoạt động từ thiện trên YouTube, cách làm tốt nhất là tải video đó về máy tính, sau đó chèn video vào trang web bằng chức năng Thêm hình ảnh/video của phần mềm."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      }
    ]
  },
  {
    "id": "bai-27-cau-30",
    "lessonId": "27",
    "number": 30,
    "type": "true-false",
    "prompt": [
      {
        "type": "text",
        "text": "Google Forms là một công cụ giúp người dùng tạo biểu mẫu trực tuyến để thu thập thông tin, khảo sát ý kiến hoặc làm bài kiểm tra trực tuyến. Giao diện của Google Forms tương tự với Google Sites, giúp người dùng dễ dàng thao tác."
      }
    ],
    "items": [
      {
        "id": "a",
        "content": [
          {
            "type": "text",
            "text": "Google Forms chỉ có thể tạo biểu mẫu để thu thập dữ liệu cá nhân, không thể dùng để làm bài kiểm tra."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "b",
        "content": [
          {
            "type": "text",
            "text": "Giao diện của Google Forms có thể chọn các mẫu có sẵn như Yêu cầu đặt hàng, Thông tin liên hệ."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      },
      {
        "id": "c",
        "content": [
          {
            "type": "text",
            "text": "[ Người dùng không thể tùy chỉnh tiêu đề biểu mẫu sau khi tạo."
          }
        ],
        "correct": false,
        "explanation": "Ý này được xác định là sai theo đáp án của bài."
      },
      {
        "id": "d",
        "content": [
          {
            "type": "text",
            "text": "Google Forms cho phép thêm mô tả ngắn gọn cho biểu mẫu để hướng dẫn người dùng."
          }
        ],
        "correct": true,
        "explanation": "Ý này được xác định là đúng theo đáp án của bài."
      }
    ]
  }
] satisfies Question[];
