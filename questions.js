// Ngân hàng câu hỏi ôn tập trắc nghiệm môn Kiểm thử phần mềm (KTPM)
// Tổng cộng: 200 câu hỏi được parse tự động từ tài liệu ôn tập.

const QUESTIONS_DATA = [
  {
    "id": 1,
    "question": "Phát biểu nào sau đây đúng nhất về kiểm thử tĩnh?",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử động có ít giá trị hơn vì kiểm thử tĩnh tìm ra lỗi tốt hơn"
      },
      {
        "key": "b",
        "text": "Test tĩnh giúp phát hiện sớm các vấn đề về thời gian chạy trong vòng đời"
      },
      {
        "key": "c",
        "text": "Test tĩnh là một cách ít tốn kém để phát hiện và loại bỏ lỗi"
      },
      {
        "key": "d",
        "text": "Kiểm thử tĩnh có ít giá trị hơn vì kiểm thử động tìm ra lỗi tốt hơn"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Sai. Kiểm thử tĩnh và kiểm thử động bổ trợ cho nhau. Kiểm thử tĩnh tìm lỗi logic và cấu trúc sớm, còn kiểm thử động tìm lỗi lúc chạy, không thể nói cái nào ít giá trị hơn.",
      "b": "Sai. Các vấn đề thời gian chạy (runtime) như rò rỉ bộ nhớ hay nghẽn luồng chỉ có thể được tìm thấy bằng kiểm thử động khi thực thi code.",
      "c": "Chính xác! Kiểm thử tĩnh (Static testing) xem xét tài liệu, đặc tả hoặc mã nguồn mà không chạy chương trình, giúp phát hiện lỗi sớm nên chi phí khắc phục rất thấp.",
      "d": "Sai. Cả hai phương pháp đều có giá trị lớn và đóng vai trò quan trọng trong các giai đoạn khác nhau của vòng đời phát triển phần mềm."
    }
  },
  {
    "id": 2,
    "question": "Tiền thưởng được tính theo thời gian làm việc đối với các nhân viên làm việc từ 2 năm trở lên. Tùy thuộc vào thời gian làm việc từ 2 năm đến dưới 5 năm, 5 đến 10 năm hoặc nhiều hơn 10 năm, nhân viên sẽ nhận được tiền thưởng từ 10%, 25% hoặc 35%. Cần bao nhiêu phân vùng tương đương để kiểm tra việc này?",
    "options": [
      {
        "key": "a",
        "text": "2"
      },
      {
        "key": "b",
        "text": "4"
      },
      {
        "key": "c",
        "text": "3"
      },
      {
        "key": "d",
        "text": "5"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Sai. 2 phân vùng là không đủ để đại diện cho 3 mức thưởng khác nhau được quy định trong đề bài.",
      "b": "Sai. 4 phân vùng là không chính xác nếu chỉ tính các phân vùng hợp lệ đại diện cho các mốc thưởng.",
      "c": "Chính xác! Có 3 mốc thời gian làm việc tương ứng với 3 mức thưởng khác nhau: [2 đến dưới 5 năm] (thưởng 10%), [5 đến 10 năm] (thưởng 25%), và [trên 10 năm] (thưởng 35%).",
      "d": "Sai. 5 phân vùng là dư thừa cho việc kiểm thử các điều kiện thưởng hợp lệ nêu trong đề bài."
    }
  },
  {
    "id": 3,
    "question": "Phát biểu nào sau đây về mối quan hệ phủ lệnh và phủ quyết định là đúng?",
    "options": [
      {
        "key": "a",
        "text": "Phủ lệnh mạnh hơn phủ quyết định"
      },
      {
        "key": "b",
        "text": "Không bao giờ đạt được 100% phủ quyết định"
      },
      {
        "key": "c",
        "text": "Phủ lệnh 100% sẽ đảm bảo phủ được 100% phủ quyết định"
      },
      {
        "key": "d",
        "text": "Phủ quyết định mạnh hơn phủ lệnh"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Sai. Phủ quyết định (Decision coverage) mạnh hơn phủ lệnh (Statement coverage). Đạt 100% phủ quyết định thì chắc chắn đạt 100% phủ lệnh, nhưng ngược lại thì không.",
      "b": "Sai. Hoàn toàn có thể đạt được 100% phủ quyết định bằng cách thiết kế các bộ test case đi qua mọi nhánh True/False của các điều kiện.",
      "c": "Sai. Phủ lệnh 100% chỉ đảm bảo mọi câu lệnh được chạy, chứ không đảm bảo mọi nhánh quyết định True/False đều được kiểm tra.",
      "d": "Chính xác! Phủ quyết định mạnh hơn phủ lệnh vì nó yêu cầu kiểm tra tất cả các nhánh rẽ của quyết định, bao phủ được cả trường hợp nhánh rỗng."
    }
  },
  {
    "id": 4,
    "question": "Phát biểu nào sau đây đúng với kiểm thử beta?",
    "options": [
      {
        "key": "a",
        "text": "Được thực hiện bởi coder"
      },
      {
        "key": "b",
        "text": "Được thực hiện bởi người dùng cuối"
      },
      {
        "key": "c",
        "text": "Được thực hiện bởi tester"
      },
      {
        "key": "d",
        "text": "Được thực hiện bởi các chuyên gia"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Lập trình viên (coder) chỉ thực hiện các mức kiểm thử nội bộ như kiểm thử đơn vị hoặc kiểm thử tích hợp chứ không làm kiểm thử beta.",
      "b": "Chính xác! Kiểm thử Beta (Beta testing) được thực hiện bởi người dùng cuối hoặc đối tượng khách hàng tiềm năng tại môi trường thực tế của họ trước khi phát hành chính thức.",
      "c": "Sai. Tester của dự án thực hiện kiểm thử hệ thống và kiểm thử chấp nhận alpha, còn beta được bàn giao cho người dùng ngoài dự án.",
      "d": "Sai. Các chuyên gia tư vấn thường tham gia đánh giá thiết kế hoặc bảo mật, còn kiểm thử beta nhắm vào người dùng thực tế."
    }
  },
  {
    "id": 5,
    "question": "Phát biểu nào sau đây mô tả đúng một trong bảy nguyên tắc chính của kiểm thử phần mềm?",
    "options": [
      {
        "key": "a",
        "text": "Bằng cách sử dụng test tự động, có thể test mọi thứ"
      },
      {
        "key": "b",
        "text": "Không thể test tất cả các kết hợp tập đầu vào trong một hệ thống"
      },
      {
        "key": "c",
        "text": "Mục đích của việc kiểm tra là để chứng minh sự vắng mặt của các khiếm khuyết"
      },
      {
        "key": "d",
        "text": "Với sự hỗ trợ của công cụ, việc kiểm tra toàn diện (exhaustive testing) là khả thi đối với tất cả các phần mềm"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Không thể kiểm thử tất cả mọi thứ (Exhaustive testing) vì tổ hợp dữ liệu đầu vào và các kịch bản sử dụng là vô hạn.",
      "b": "Chính xác! Do giới hạn thời gian và chi phí, việc kiểm thử toàn bộ tất cả các kết hợp đầu vào của một hệ thống là không khả thi.",
      "c": "Sai. Kiểm thử chỉ có thể chỉ ra sự hiện diện của lỗi (presence of defects) chứ không thể chứng minh phần mềm hoàn toàn không còn lỗi (absence of defects).",
      "d": "Sai. Dù có công cụ mạnh đến đâu thì việc chạy hết mọi tổ hợp đầu vào vẫn là bất khả thi về mặt toán học và thực tế."
    }
  },
  {
    "id": 6,
    "question": "Xác minh (verification) là:",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử xem chúng ta có đang xây dựng hệ thống đúng cách không"
      },
      {
        "key": "b",
        "text": "Kiểm thử xem chúng ta có đang xây dựng hệ thống phù hợp không"
      },
      {
        "key": "c",
        "text": "Được thực hiện bởi một nhóm kiểm thử độc lập"
      },
      {
        "key": "d",
        "text": "Đảm bảo rằng đó là những gì người dùng thực sự muốn"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Xác minh (Verification) tập trung vào việc đánh giá xem sản phẩm có được xây dựng đúng theo các đặc tả kỹ thuật và tiêu chuẩn thiết kế ban đầu hay không (Are we building the product right?).",
      "b": "Sai. Kiểm thử xem sản phẩm có phù hợp hay không là định nghĩa của Xác nhận (Validation) (Are we building the right product?).",
      "c": "Sai. Xác minh có thể được thực hiện bởi chính lập trình viên (qua review code) hoặc kiểm thử viên ở nhiều giai đoạn khác nhau.",
      "d": "Sai. Đảm bảo những gì người dùng thực sự muốn là mục tiêu của Xác nhận (Validation)."
    }
  },
  {
    "id": 7,
    "question": "Điều quan trọng nhất về thiết kế kiểm thử sớm là:",
    "options": [
      {
        "key": "a",
        "text": "Làm cho việc chuẩn bị kiểm thử dễ dàng hơn"
      },
      {
        "key": "b",
        "text": "Có thể ngăn chặn sự nhân lên của lỗi"
      },
      {
        "key": "c",
        "text": "Giúp tìm ra tất cả các lỗi"
      },
      {
        "key": "d",
        "text": "Giảm chi phí thiết kế test case"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Chuẩn bị kiểm thử dễ dàng chỉ là một tiện ích đi kèm, không phải mục quan trọng nhất của thiết kế kiểm thử sớm.",
      "b": "Chính xác! Thiết kế kiểm thử sớm giúp phát hiện sớm các sai sót trong tài liệu yêu cầu và thiết kế, ngăn chặn lỗi lan truyền và nhân lên ở các pha lập trình tiếp theo.",
      "c": "Sai. Không có kỹ thuật nào giúp tìm ra 100% tất cả các lỗi trong phần mềm.",
      "d": "Sai. Thiết kế sớm có thể làm tăng chi phí thiết kế ban đầu nhưng giúp tiết kiệm chi phí sửa lỗi về sau."
    }
  },
  {
    "id": 8,
    "question": "Để kiểm tra một hàm, lập trình viên phải viết một...., gọi hàm được kiểm tra và truyền dữ liệu kiểm tra cho nó.",
    "options": [
      {
        "key": "a",
        "text": "Mock"
      },
      {
        "key": "b",
        "text": "Driver"
      },
      {
        "key": "c",
        "text": "Stub"
      },
      {
        "key": "d",
        "text": "Proxy"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Mock là đối tượng giả lập dùng để thay thế các thành phần phụ thuộc của đối tượng đang được kiểm thử, chứ không dùng để gọi hàm.",
      "b": "Chính xác! Driver là một chương trình mồi/điều khiển được viết để gọi hàm cần kiểm thử và truyền dữ liệu kiểm thử (test data) vào hàm đó.",
      "c": "Sai. Stub là thành phần giả lập được gọi bởi hàm đang kiểm thử (để thay thế cho các hàm cấp thấp chưa được viết).",
      "d": "Sai. Proxy là đối tượng đại diện trung gian điều khiển truy cập, không phải công cụ hỗ trợ gọi hàm trong Unit Test."
    }
  },
  {
    "id": 9,
    "question": "Các test case có thể được thiết kế sớm nhất khi nào?",
    "options": [
      {
        "key": "a",
        "text": "Sau khi có tài liệu đặc tả"
      },
      {
        "key": "b",
        "text": "Sau khi code"
      },
      {
        "key": "c",
        "text": "Sau khi có bản thiết kế"
      },
      {
        "key": "d",
        "text": "Trong quá trình test"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Các ca kiểm thử (test cases) có thể được thiết kế ngay sau khi có tài liệu đặc tả yêu cầu (requirements specification), giúp phát hiện lỗi tài liệu sớm.",
      "b": "Sai. Thiết kế test case sau khi viết code là quá muộn và dễ bị ảnh hưởng bởi tư duy lối mòn của người viết code.",
      "c": "Sai. Mặc dù có thể thiết kế dựa trên bản thiết kế, nhưng đặc tả yêu cầu mới là mốc sớm nhất có thể thực hiện.",
      "d": "Sai. Thiết kế test case trong lúc chạy test sẽ gây thiếu tổ chức và không đảm bảo độ bao phủ."
    }
  },
  {
    "id": 10,
    "question": "Mục tiêu quan trọng nhất của việc xác định độ ưu tiên kiểm thử là gì?",
    "options": [
      {
        "key": "a",
        "text": "Test các khu vực rủi ro cao"
      },
      {
        "key": "b",
        "text": "Tìm càng nhiều lỗi càng tốt"
      },
      {
        "key": "c",
        "text": "Đạt được độ bao phủ cao"
      },
      {
        "key": "d",
        "text": "Cái nào dễ thì test trước"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Việc xác định độ ưu tiên kiểm thử giúp tập trung tài nguyên vào việc kiểm thử các khu vực có rủi ro cao nhất trước, đảm bảo các lỗi nghiêm trọng được phát hiện sớm.",
      "b": "Sai. Tìm nhiều lỗi nhất không phải mục tiêu tối thượng nếu đó chỉ là các lỗi nhỏ nhặt, không quan trọng.",
      "c": "Sai. Đạt độ bao phủ cao là thước đo kỹ thuật, không phản ánh trực tiếp giá trị rủi ro của hệ thống.",
      "d": "Sai. Kiểm thử cái dễ trước là phương pháp thiếu khoa học, dễ bỏ sót lỗi nghiêm trọng ở các phần phức tạp."
    }
  },
  {
    "id": 11,
    "question": "Điều nào sau đây mô tả lợi ích chính của việc xác minh (verification) sớm trong vòng đời?",
    "options": [
      {
        "key": "a",
        "text": "Nó làm giảm sự gia tăng của lỗi"
      },
      {
        "key": "b",
        "text": "Nó tạo điều kiện cho việc thiết lập môi trường kiểm thử kịp thời"
      },
      {
        "key": "c",
        "text": "Nó cho phép xác định các thay đổi trong yêu cầu của người dùng"
      },
      {
        "key": "d",
        "text": "Nó cho phép người kiểm thử sớm tham gia vào dự án"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Việc xác minh (verification) sớm giúp phát hiện sớm lỗi thiết kế và yêu cầu, ngăn chặn lỗi nhân lên và lan truyền xuống giai đoạn viết code.",
      "b": "Sai. Việc thiết lập môi trường phụ thuộc vào kế hoạch kiểm thử hệ thống, không phải lợi ích trực tiếp của xác minh sớm.",
      "c": "Sai. Xác minh là đối chiếu với đặc tả có sẵn, còn việc xác định thay đổi yêu cầu của người dùng thuộc pha phân tích yêu cầu.",
      "d": "Sai. Việc người kiểm thử tham gia sớm là hoạt động nhân sự, không phải lợi ích kỹ thuật của việc xác minh sớm."
    }
  },
  {
    "id": 12,
    "question": "Lựa chọn nào sau đây được phân loại là kỹ thuật kiểm thử hộp đen?",
    "options": [
      {
        "key": "a",
        "text": "Một kỹ thuật dựa trên phân tích kiến trúc"
      },
      {
        "key": "b",
        "text": "Một kỹ thuật dựa trên kiến thức về lỗi trong quá khứ hoặc kiến thức chung về lỗi"
      },
      {
        "key": "c",
        "text": "Một kỹ thuật dựa trên các đặc tả yêu cầu chính thức"
      },
      {
        "key": "d",
        "text": "Một kỹ thuật kiểm tra xem đối tượng kiểm thử có hoạt động theo thiết kế kỹ thuật hay không"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Sai. Thiết kế dựa trên phân tích kiến trúc mã nguồn thuộc kỹ thuật kiểm thử hộp trắng (White-box).",
      "b": "Sai. Kỹ thuật dựa vào kinh nghiệm hoặc lỗi trong quá khứ là kiểm thử dựa trên kinh nghiệm (Experience-based testing).",
      "c": "Chính xác! Kiểm thử hộp đen (Black-box) thiết kế các ca kiểm thử dựa trên tài liệu đặc tả yêu cầu chính thức mà không cần biết cấu trúc mã nguồn.",
      "d": "Sai. Kiểm tra xem đối tượng hoạt động theo thiết kế kỹ thuật chi tiết bên trong là kiểm thử hộp trắng."
    }
  },
  {
    "id": 13,
    "question": "Kiểm thử alpha là:",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử cuối cùng trước khi phát hành"
      },
      {
        "key": "b",
        "text": "Kiểm thử đầu tiên được thực hiện"
      },
      {
        "key": "c",
        "text": "Kiểm thử sau khi phát hành được thực hiện bởi người dùng cuối"
      },
      {
        "key": "d",
        "text": "Kiểm thử trước khi phát hành được thực hiện bởi nhóm đại diện người dùng"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Sai. Kiểm thử cuối cùng trước khi phát hành cho toàn bộ công chúng là kiểm thử beta hoặc phát hành thử nghiệm.",
      "b": "Sai. Kiểm thử đầu tiên thường là kiểm thử đơn vị (Unit Testing) do lập trình viên thực hiện.",
      "c": "Sai. Kiểm thử sau khi phát hành được thực hiện bởi người dùng cuối là hoạt động vận hành thực tế.",
      "d": "Chính xác! Kiểm thử Alpha (Alpha testing) là kiểm thử chấp nhận được thực hiện bởi khách hàng hoặc nhóm đại diện người dùng ngay tại môi trường phát triển của nhà sản xuất."
    }
  },
  {
    "id": 14,
    "question": "Loại test nào mà không do tester thực hiện?",
    "options": [
      {
        "key": "a",
        "text": "Test hệ thống"
      },
      {
        "key": "b",
        "text": "Test chấp nhận"
      },
      {
        "key": "c",
        "text": "Test bảo mật"
      },
      {
        "key": "d",
        "text": "Test tích hợp"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Kiểm thử hệ thống (System Testing) do nhóm kiểm thử độc lập (testers) thực hiện.",
      "b": "Chính xác! Kiểm thử chấp nhận (Acceptance testing) được thực hiện bởi khách hàng hoặc người dùng cuối để đưa ra quyết định có nhận bàn giao phần mềm hay không.",
      "c": "Sai. Kiểm thử bảo mật (Security testing) thường do nhóm testers chuyên môn thực hiện.",
      "d": "Sai. Kiểm thử tích hợp (Integration testing) do nhóm phát triển hoặc testers thực hiện."
    }
  },
  {
    "id": 15,
    "question": "Kiểm thử là:",
    "options": [
      {
        "key": "a",
        "text": "Là quá trình thực thi chương trình để tìm lỗi"
      },
      {
        "key": "b",
        "text": "Là quá trình đo lường chất lượng của phần mềm"
      },
      {
        "key": "c",
        "text": "Gồm các hoạt động kiểm tra, đánh giá các sản phẩm trung gian trong quá trình phát triển"
      },
      {
        "key": "d",
        "text": "Tất cả các ý kiến trên"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Sai. Chạy chương trình tìm lỗi chỉ là một phần của kiểm thử động, chưa bao hàm kiểm thử tĩnh.",
      "b": "Sai. Đo lường chất lượng chỉ là một mục tiêu gián tiếp của kiểm thử phần mềm.",
      "c": "Sai. Đánh giá sản phẩm trung gian là hoạt động đảm bảo chất lượng (QA/QC), chưa đủ định nghĩa kiểm thử.",
      "d": "Chính xác! Kiểm thử bao gồm toàn bộ quá trình thực thi chương trình để tìm lỗi, đo lường chất lượng và đánh giá các sản phẩm trung gian trong suốt vòng đời phát triển."
    }
  },
  {
    "id": 16,
    "question": "Câu hỏi nào sau đây KHÔNG phải là một phần của quy trình kiểm thử hệ thống?",
    "options": [
      {
        "key": "a",
        "text": "Kiểm tra các chức năng nghiệp vụ"
      },
      {
        "key": "b",
        "text": "Kiểm tra hiệu năng hệ thống"
      },
      {
        "key": "c",
        "text": "Kiểm tra các giao diện người dùng"
      },
      {
        "key": "d",
        "text": "Kiểm tra sự tích hợp giữa các module"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Sai. Kiểm tra các chức năng nghiệp vụ là hoạt động trọng tâm của kiểm thử hệ thống.",
      "b": "Sai. Kiểm tra hiệu năng hệ thống (Performance) là một phần của kiểm thử phi chức năng ở mức hệ thống.",
      "c": "Sai. Kiểm tra giao diện người dùng (UI) cũng được thực hiện ở mức kiểm thử hệ thống.",
      "d": "Chính xác! Kiểm tra sự tích hợp giữa các module là công việc của Kiểm thử tích hợp (Integration Testing), diễn ra trước khi tiến hành kiểm thử hệ thống."
    }
  },
  {
    "id": 17,
    "question": "Kiểm tra toàn diện là:",
    "options": [
      {
        "key": "a",
        "text": "Không khả thi trong thực tế"
      },
      {
        "key": "b",
        "text": "Có thể thực hiện được nếu có công cụ hỗ trợ"
      },
      {
        "key": "c",
        "text": "Là yêu cầu bắt buộc của mọi dự án phần mềm"
      },
      {
        "key": "d",
        "text": "Chỉ thực hiện khi có yêu cầu của khách hàng"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử toàn diện (Exhaustive testing - thử mọi tổ hợp đầu vào và đường chạy) là không khả thi trong thực tế do số lượng trường hợp là vô hạn.",
      "b": "Sai. Dù có công cụ mạnh đến đâu cũng không thể chạy hết các trường hợp vô hạn trong thời gian hữu hạn.",
      "c": "Sai. Kiểm thử toàn diện không bắt buộc vì nó bất khả thi.",
      "d": "Sai. Khách hàng cũng không thể yêu cầu kiểm thử toàn diện vì chi phí và thời gian sẽ là vô hạn."
    }
  },
  {
    "id": 18,
    "question": "Phát biểu nào sau đây không phải nguyên tắc của kiểm thử phần mềm?",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử chứng minh sự hiện diện của lỗi"
      },
      {
        "key": "b",
        "text": "Kiểm thử càng sớm càng tốt"
      },
      {
        "key": "c",
        "text": "Kiểm thử độc lập với việc phát triển"
      },
      {
        "key": "d",
        "text": "Kiểm thử là để chứng minh phần mềm không có lỗi"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Sai. 'Kiểm thử chứng minh sự hiện diện của lỗi' là một nguyên tắc cơ bản (kiểm thử chỉ tìm thấy lỗi chứ không chứng minh hệ thống hết lỗi).",
      "b": "Sai. 'Kiểm thử càng sớm càng tốt' là nguyên tắc giúp tối ưu hóa chi phí sửa lỗi.",
      "c": "Sai. 'Kiểm thử độc lập' giúp tăng hiệu quả tìm lỗi do không bị lối mòn tư duy của nhà phát triển.",
      "d": "Chính xác! Phát biểu này sai vì nguyên tắc kiểm thử quy định kiểm thử không thể chứng minh phần mềm hoàn toàn không có lỗi."
    }
  },
  {
    "id": 19,
    "question": "Mục đích của điều kiện dừng kiểm thử là gì?",
    "options": [
      {
        "key": "a",
        "text": "Để biết khi nào cần dừng việc kiểm thử"
      },
      {
        "key": "b",
        "text": "Để chứng minh rằng tất cả các lỗi đã được tìm thấy"
      },
      {
        "key": "c",
        "text": "Để kết thúc dự án đúng hạn"
      },
      {
        "key": "d",
        "text": "Để tiết kiệm chi phí cho dự án"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Điều kiện dừng kiểm thử (Exit criteria) được định nghĩa để xác định khi nào hoạt động kiểm thử đã đạt yêu cầu và có thể dừng lại (như đạt độ bao phủ, hết ngân sách, tỷ lệ lỗi dưới ngưỡng).",
      "b": "Sai. Không thể chứng minh mọi lỗi đã được tìm thấy.",
      "c": "Sai. Kết thúc dự án đúng hạn thuộc về quản trị dự án, không phải mục đích kỹ thuật của điều kiện dừng.",
      "d": "Sai. Tiết kiệm chi phí không phải lý do chính để đặt ra điều kiện dừng kiểm thử."
    }
  },
  {
    "id": 20,
    "question": "Số test case tối thiểu để đạt được phủ cấp 3 cho hàm sau là bao nhiêu?\nint maxAm(int a[], int n){    int max = 0;    for (int i = 0; i &lt; n; i++)        if (a[i] &lt; 0 &amp;&amp; (max == 0 || a[i] &gt; max))            max = a[i];    return max;}",
    "options": [
      {
        "key": "a",
        "text": "3"
      },
      {
        "key": "b",
        "text": "2"
      },
      {
        "key": "c",
        "text": "1"
      },
      {
        "key": "d",
        "text": "4"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Chính xác! Hàm maxAm có cấu trúc rẽ nhánh phức tạp. Để đạt độ bao phủ cấp 3 (path coverage), cần tối thiểu 3 ca kiểm thử đi qua các nhánh: nhánh không vào loop/trả về 0, nhánh không thỏa mãn if, và nhánh thỏa mãn if để gán max.",
      "b": "Sai. 2 test case là không đủ để đi qua hết các đường chạy logic độc lập của hàm.",
      "c": "Sai. 1 test case chỉ đi qua được 1 đường duy nhất, không thể đạt phủ cấp 3.",
      "d": "Sai. 4 test case là dư thừa vì chỉ cần 3 đường chạy là bao phủ toàn bộ cấu trúc độc lập."
    }
  },
  {
    "id": 21,
    "question": "Số test case tối thiểu để đạt được phủ điều kiện 100% cho hàm sau là bao nhiêu?\nint maxAm(int a[], int n){    int max = 0;    for (int i = 0; i &lt; n; i++)        if (a[i] &lt; 0 &amp;&amp; (max == 0 || a[i] &gt; max))            max = a[i];    return max;}",
    "options": [
      {
        "key": "a",
        "text": "1"
      },
      {
        "key": "b",
        "text": "3"
      },
      {
        "key": "c",
        "text": "2"
      },
      {
        "key": "d",
        "text": "4"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Sai. 1 test case không thể bao phủ hết các điều kiện boolean True/False trong biểu thức phức hợp.",
      "b": "Sai. 3 test case là dư thừa nếu ta thiết kế khéo léo để bao phủ các giá trị logic True/False.",
      "c": "Chính xác! Để đạt phủ điều kiện 100%, mỗi điều kiện đơn lẻ trong `a[i] < 0` và `(max == 0 || a[i] > max)` phải được đánh giá cả True và False ít nhất một lần. Cần tối thiểu 2 test case.",
      "d": "Sai. 4 test case là quá nhiều và không cần thiết đối với bài toán này."
    }
  },
  {
    "id": 22,
    "question": "Số test case tối thiểu để đạt được phủ 100% nhánh cho hàm sau là bao nhiêu?\nint maxAm(int a[], int n){    int max = 0;    for (int i = 0; i &lt; n; i++)        if (a[i] &lt; 0 &amp;&amp; (max == 0 || a[i] &gt; max))            max = a[i];    return max;}",
    "options": [
      {
        "key": "a",
        "text": "3"
      },
      {
        "key": "b",
        "text": "1"
      },
      {
        "key": "c",
        "text": "2"
      },
      {
        "key": "d",
        "text": "4"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Sai. 3 test case là dư thừa cho việc phủ nhánh (Branch coverage) của hàm này.",
      "b": "Sai. 1 test case chỉ đi qua một nhánh rẽ, không thể phủ hết nhánh True/False.",
      "c": "Chính xác! Phủ nhánh yêu cầu mọi quyết định rẽ nhánh (`i < n` và điều kiện `if`) đều được thực thi cả hai hướng True và False. Cần tối thiểu 2 test case.",
      "d": "Sai. 4 test case là quá nhiều đối với việc phủ nhánh của hàm `maxAm`."
    }
  },
  {
    "id": 23,
    "question": "Phương pháp test nào mà tất cả các module được tích hợp đồng thời để test?",
    "options": [
      {
        "key": "a",
        "text": "Sandwich testing"
      },
      {
        "key": "b",
        "text": "Bottom-up testing"
      },
      {
        "key": "c",
        "text": "Top-down testing"
      },
      {
        "key": "d",
        "text": "Big-Bang testing"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Sai. Tích hợp Sandwich kết hợp cả Bottom-up và Top-down.",
      "b": "Sai. Tích hợp từ dưới lên (Bottom-up) tích hợp các module cấp thấp trước rồi tiến dần lên trên.",
      "c": "Sai. Tích hợp từ trên xuống (Top-down) tích hợp các module điều khiển cấp cao trước.",
      "d": "Chính xác! Tích hợp Big-Bang là phương pháp ghép nối tất cả các module cùng một lúc rồi tiến hành kiểm thử, dễ gây khó khăn khi cô lập lỗi."
    }
  },
  {
    "id": 24,
    "question": "Số đơn đặt hàng trên hệ thống kiểm soát kho có thể bao gồm từ 1000 đến 99999. Đầu vào nào sau đây thuộc cùng 1 lớp tương đương:",
    "options": [
      {
        "key": "a",
        "text": "10000, 50000, 999999"
      },
      {
        "key": "b",
        "text": "1000, 5000, 10000"
      },
      {
        "key": "c",
        "text": "9999, 50000, 100000"
      },
      {
        "key": "d",
        "text": "10000, 999999"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. 999999 nằm ngoài khoảng [1000, 99999], thuộc lớp không hợp lệ, trong khi 10000 và 50000 thuộc lớp hợp lệ.",
      "b": "Chính xác! Cả 3 giá trị 1000, 5000, và 10000 đều nằm trong khoảng hợp lệ [1000, 99999] nên chúng thuộc cùng một lớp tương đương hợp lệ.",
      "c": "Sai. 100000 nằm ngoài khoảng [1000, 99999], thuộc lớp không hợp lệ.",
      "d": "Sai. 999999 là không hợp lệ còn 10000 là hợp lệ."
    }
  },
  {
    "id": 25,
    "question": "Nội dung nào sau đây KHÔNG có trong tài liệu test plan:",
    "options": [
      {
        "key": "a",
        "text": "Môi trường thử nghiệm"
      },
      {
        "key": "b",
        "text": "Những gì không được kiểm tra"
      },
      {
        "key": "c",
        "text": "Báo cáo kết quả test"
      },
      {
        "key": "d",
        "text": "Lịch trình và thời hạn"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Sai. Kế hoạch kiểm thử (Test Plan) bắt buộc phải định nghĩa môi trường thử nghiệm.",
      "b": "Sai. Phạm vi không kiểm thử (out of scope) là phần quan trọng trong Test Plan.",
      "c": "Chính xác! Báo cáo kết quả test (Test Report) là tài liệu được tạo ra sau khi thực thi kiểm thử, không nằm trong tài liệu lập kế hoạch Test Plan ban đầu.",
      "d": "Sai. Lịch trình và thời hạn là nội dung bắt buộc của Test Plan."
    }
  },
  {
    "id": 26,
    "question": "Kiểm thử hệ thống (System Testing) được thực hiện trước khi:",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử tích hợp"
      },
      {
        "key": "b",
        "text": "Kiểm thử module"
      },
      {
        "key": "c",
        "text": "Kiểm thử đơn vị"
      },
      {
        "key": "d",
        "text": "Kiểm thử chấp nhận"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Sai. Kiểm thử tích hợp được thực hiện trước kiểm thử hệ thống.",
      "b": "Sai. Kiểm thử module là một dạng của kiểm thử đơn vị/tích hợp, được làm trước kiểm thử hệ thống.",
      "c": "Sai. Kiểm thử đơn vị là mức kiểm thử đầu tiên, làm trước kiểm thử hệ thống.",
      "d": "Chính xác! Kiểm thử hệ thống (System Testing) nhằm xác minh toàn bộ sản phẩm hoàn chỉnh, được thực hiện trước khi chuyển giao sang cho khách hàng làm Kiểm thử chấp nhận (Acceptance Testing)."
    }
  },
  {
    "id": 27,
    "question": "Mục đích của việc phân vùng tương đương trong kiểm thử phần mềm là gì?",
    "options": [
      {
        "key": "a",
        "text": "Để kiểm tra sự tương đương của các thành phần hệ thống"
      },
      {
        "key": "b",
        "text": "Để tìm lỗi trong code"
      },
      {
        "key": "c",
        "text": "Để chia các giá trị đầu vào thành các lớp tương đương nhằm giảm số ca kiểm thử"
      },
      {
        "key": "d",
        "text": "Để đánh giá sự tương đương của các phiên bản phần mềm khác nhau"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Sai. Phân vùng tương đương không dùng để kiểm tra cấu trúc tương đương của các thành phần.",
      "b": "Sai. Mục tiêu của mọi kỹ thuật là tìm lỗi, nhưng mục tiêu đặc thù của phân vùng tương đương là giảm số ca kiểm thử bằng cách chọn đại diện dữ liệu.",
      "c": "Chính xác! Kỹ thuật này chia miền đầu vào thành các phân vùng mà chương trình xử lý như nhau, giúp giảm số lượng ca kiểm thử cần thiết mà vẫn giữ được hiệu quả.",
      "d": "Sai. Kỹ thuật này áp dụng cho dữ liệu đầu vào, không dùng để so sánh các phiên bản phần mềm."
    }
  },
  {
    "id": 28,
    "question": "Kiểm thử hệ thống (System Testing) được thực hiện ngay sau khi nào?",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử module"
      },
      {
        "key": "b",
        "text": "Kiểm thử đơn vị"
      },
      {
        "key": "c",
        "text": "Kiểm thử tích hợp"
      },
      {
        "key": "d",
        "text": "Kiểm thử chấp nhận"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Sai. Kiểm thử module được làm trước cả kiểm thử tích hợp.",
      "b": "Sai. Kiểm thử đơn vị là bước đầu tiên của lập trình viên.",
      "c": "Chính xác! Theo quy trình kiểm thử chuẩn, kiểm thử hệ thống (System Testing) được tiến hành ngay sau khi hoàn thành mức Kiểm thử tích hợp (Integration Testing).",
      "d": "Sai. Kiểm thử chấp nhận diễn ra sau kiểm thử hệ thống."
    }
  },
  {
    "id": 29,
    "question": "Mục đích của kiểm thử chấp nhận để làm gì?",
    "options": [
      {
        "key": "a",
        "text": "Chứng minh hệ thống không còn lỗi"
      },
      {
        "key": "b",
        "text": "Chứng minh tính thỏa mãn tất cả yêu cầu của khách hàng"
      },
      {
        "key": "c",
        "text": "Chứng minh tính bảo mật của hệ thống"
      },
      {
        "key": "d",
        "text": "Chứng minh tính tích hợp của hệ thống"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Không có hoạt động kiểm thử nào có thể chứng minh hệ thống hoàn toàn hết lỗi.",
      "b": "Chính xác! Mục tiêu của kiểm thử chấp nhận (Acceptance Testing) là để khách hàng đánh giá và xác nhận phần mềm đã thỏa mãn đầy đủ các yêu cầu nghiệp vụ của họ để nghiệm thu bàn giao.",
      "c": "Sai. Kiểm thử bảo mật là một loại kiểm thử phi chức năng, không phải mục tiêu chính của kiểm thử chấp nhận.",
      "d": "Sai. Kiểm thử tích hợp mới có nhiệm vụ chứng minh tính tích hợp của hệ thống."
    }
  },
  {
    "id": 30,
    "question": "Mục tiêu chính của kiểm thử tích hợp là gì?",
    "options": [
      {
        "key": "a",
        "text": "Tìm các lỗi thủ tục"
      },
      {
        "key": "b",
        "text": "Tìm các lỗi bảo mật"
      },
      {
        "key": "c",
        "text": "Tìm các lỗi thiết kế"
      },
      {
        "key": "d",
        "text": "Tìm các lỗi giao diện"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Sai. Lỗi thủ tục thuộc về kiểm thử đơn vị hoặc tĩnh.",
      "b": "Sai. Lỗi bảo mật được tìm ở mức kiểm thử hệ thống.",
      "c": "Sai. Lỗi thiết kế hệ thống lớn được phát hiện ở kiểm thử hệ thống.",
      "d": "Chính xác! Kiểm thử tích hợp tập trung vào việc phát hiện lỗi xảy ra tại các giao diện kết nối (giao tiếp) giữa các thành phần hoặc hệ thống với nhau."
    }
  },
  {
    "id": 31,
    "question": "Theo kết quả của việc phân tích rủi ro, việc test đang được hướng tới các khu vực của hệ thống được test, nơi mà ban đầu tìm thấy nhiều lỗi hơn mức trung bình. Nguyên tắc kiểm thử nào sau đây đang được áp dụng?",
    "options": [
      {
        "key": "a",
        "text": "Lỗi thường tập trung"
      },
      {
        "key": "b",
        "text": "Nghịch lý thuốc trừ sâu"
      },
      {
        "key": "c",
        "text": "Test theo ngữ cảnh"
      },
      {
        "key": "d",
        "text": "Không thể chứng minh hết lỗi"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Nguyên lý 'Lỗi thường tập trung' (Defect Clustering) chỉ ra rằng phần lớn các lỗi thường được phát hiện tập trung ở một số ít các module cốt lõi hoặc phức tạp của hệ thống.",
      "b": "Sai. Nghịch lý thuốc trừ sâu nói về việc bộ test case lặp lại nhiều lần sẽ không tìm thấy lỗi mới.",
      "c": "Sai. Test theo ngữ cảnh phát biểu rằng việc kiểm thử phải linh hoạt theo từng đặc thù dự án.",
      "d": "Sai. 'Không thể chứng minh hết lỗi' nói về tính không hoàn hảo của kiểm thử."
    }
  },
  {
    "id": 32,
    "question": "Điều nào sau đây không đúng với điều kiện phủ (coverage criteria) của kiểm thử?",
    "options": [
      {
        "key": "a",
        "text": "Thước đo điều kiện phủ kiểm thử là tỷ lệ phần trăm lệnh được thực thi"
      },
      {
        "key": "b",
        "text": "Thước đo điều kiện phủ là tỷ lệ phần trăm yêu cầu của người dùng được phủ"
      },
      {
        "key": "c",
        "text": "Các điều kiện phủ thường được sử dụng khi chỉ định các tiêu chí hoàn thành kiểm thử"
      },
      {
        "key": "d",
        "text": "Cho biết số lỗi còn lại trong hệ thống"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Sai. Thước đo bao phủ lệnh thực thi là một tiêu chí phủ đúng đắn.",
      "b": "Sai. Bao phủ yêu cầu người dùng cũng là một thước đo độ phủ hợp lệ ở mức hệ thống/chấp nhận.",
      "c": "Sai. Điều kiện phủ rất hay được dùng để làm tiêu chuẩn hoàn thành kiểm thử (Exit criteria).",
      "d": "Chính xác! Độ bao phủ chỉ cho biết tỷ lệ các phần tử cấu trúc được quét qua, chứ không thể chỉ ra số lượng lỗi cụ thể còn lại trong hệ thống."
    }
  },
  {
    "id": 33,
    "question": "Phát biểu nào sau đây phù hợp nhất về phủ lệnh?",
    "options": [
      {
        "key": "a",
        "text": "Đây là thước đo để xác nhận xem tất cả các câu lệnh có được thực thi hay không"
      },
      {
        "key": "b",
        "text": "Đây là một thước đo được sử dụng để tính toán và đo lường phần trăm các câu lệnh trong code đã được thực thi"
      },
      {
        "key": "c",
        "text": "Đây là một thước đo được sử dụng để tính toán và đo lường tỷ lệ phần trăm các test case đã được thực thi"
      },
      {
        "key": "d",
        "text": "Đây là một thước đo được sử dụng để tính toán và đo lường số lượng câu lệnh trong code đã được thực thi bởi các test case có kết quả pass"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Phủ lệnh là đo lường chứ không phải một công cụ xác nhận tự động.",
      "b": "Chính xác! Phủ lệnh (Statement Coverage) là thước đo tỷ lệ phần trạng các câu lệnh (dòng lệnh) trong mã nguồn đã được thực thi bởi bộ ca kiểm thử.",
      "c": "Sai. Đo lường tỷ lệ các test case đã chạy là đo lường tiến độ thực thi test, không phải phủ lệnh.",
      "d": "Sai. Phủ lệnh tính trên toàn bộ mã nguồn được quét qua, không phân biệt test case pass hay fail."
    }
  },
  {
    "id": 34,
    "question": "Câu nào sau đây mô tả nguyên tắc chính của kiểm thử phần mềm?",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử tự động cho phép đưa ra những tuyên bố đáng tin hơn về chất lượng của sản phẩm phần mềm"
      },
      {
        "key": "b",
        "text": "Kiểm thử phần mềm toàn diện (Exhaustive software testing), với đủ nỗ lực và công cụ hỗ trợ, có thể thực hiện được đối với tất cả phần mềm"
      },
      {
        "key": "c",
        "text": "Mục đích của kiểm thử phần mềm là chứng minh rằng sản phẩm phần mềm không có lỗi"
      },
      {
        "key": "d",
        "text": "Đối với một hệ thống phần mềm, thông thường không thể kiểm tra tất cả các kết hợp đầu vào và đầu ra"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Sai. Kiểm thử tự động giúp tăng hiệu suất chạy test, không phải nguyên lý nền tảng của kiểm thử phần mềm.",
      "b": "Sai. Kiểm thử toàn diện là bất khả thi, phát biểu này đi ngược lại nguyên lý kiểm thử.",
      "c": "Sai. Mục đích kiểm thử là chỉ ra lỗi chứ không thể chứng minh phần mềm không có lỗi.",
      "d": "Chính xác! Đây là một nguyên lý cơ bản: Không thể kiểm thử toàn bộ (Exhaustive testing) tất cả các tổ hợp đầu vào và đầu ra của hệ thống."
    }
  },
  {
    "id": 35,
    "question": "Alpha và Beta testing là hình thức test nào?",
    "options": [
      {
        "key": "a",
        "text": "Acceptance testing"
      },
      {
        "key": "b",
        "text": "White-box testing"
      },
      {
        "key": "c",
        "text": "Black-box testing"
      },
      {
        "key": "d",
        "text": "System testing"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Alpha và Beta testing là hai hình thức chính của kiểm thử chấp nhận (Acceptance testing) nhằm xác nhận sự sẵn sàng phát hành của sản phẩm.",
      "b": "Sai. Chúng là kiểm thử hộp đen, không phải hộp trắng (White-box).",
      "c": "Sai. Mặc dù chúng dùng kỹ thuật hộp đen, nhưng phân loại mức độ kiểm thử của chúng là kiểm thử chấp nhận.",
      "d": "Sai. Kiểm thử hệ thống diễn ra trước kiểm thử alpha/beta và do đội ngũ test nội bộ thực hiện."
    }
  },
  {
    "id": 36,
    "question": "Thiết kế phần mềm là gì?",
    "options": [
      {
        "key": "a",
        "text": "Quá trình viết mã nguồn"
      },
      {
        "key": "b",
        "text": "Quá trình xác định các thành phần phần mềm và mối liên kết giữa chúng dựa trên yêu cầu của khách hàng"
      },
      {
        "key": "c",
        "text": "Quá trình kiểm thử phần mềm"
      },
      {
        "key": "d",
        "text": "Quá trình bảo trì phần mềm"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Viết mã nguồn thuộc pha Hiện thực (Coding), không thuộc pha thiết kế.",
      "b": "Chính xác! Thiết kế phần mềm là pha xác định cấu trúc các thành phần hệ thống và mối quan hệ tương tác giữa chúng dựa trên yêu cầu khách hàng.",
      "c": "Sai. Kiểm thử phần mềm là hoạt động độc lập nhằm tìm lỗi, không phải thiết kế.",
      "d": "Sai. Bảo trì diễn ra sau khi bàn giao sản phẩm."
    }
  },
  {
    "id": 37,
    "question": "Hiện thực phần mềm là gì?",
    "options": [
      {
        "key": "a",
        "text": "Quá trình kiểm thử phần mềm"
      },
      {
        "key": "b",
        "text": "Quá trình hiện thực hóa thiết kế thành chương trình"
      },
      {
        "key": "c",
        "text": "Quá trình viết tài liệu hướng dẫn"
      },
      {
        "key": "d",
        "text": "Quá trình bảo trì phần mềm"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Kiểm thử là hoạt động xác minh và tìm lỗi sau hoặc song song với hiện thực.",
      "b": "Chính xác! Hiện thực phần mềm (Coding/Implementation) chính là quá trình chuyển đổi bản thiết kế chi tiết thành chương trình mã nguồn chạy được.",
      "c": "Sai. Viết tài liệu hướng dẫn là hoạt động hỗ trợ bàn giao.",
      "d": "Sai. Bảo trì là giai đoạn sau khi sản phẩm đã được đưa vào sử dụng thực tế."
    }
  },
  {
    "id": 38,
    "question": "Thiết kế và hiện thực phần mềm là hai hoạt động như thế nào?",
    "options": [
      {
        "key": "a",
        "text": "Tách biệt hoàn toàn"
      },
      {
        "key": "b",
        "text": "Đan xen lẫn nhau"
      },
      {
        "key": "c",
        "text": "Hoàn toàn độc lập"
      },
      {
        "key": "d",
        "text": "Không liên quan đến nhau"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Trong thực tế, lập trình viên thường vừa viết code vừa tinh chỉnh thiết kế chi tiết.",
      "b": "Chính xác! Thiết kế chi tiết và lập trình là hai hoạt động đan xen, tác động qua lại lẫn nhau trong quá trình phát triển.",
      "c": "Sai. Chúng có liên hệ chặt chẽ và không thể tách rời.",
      "d": "Sai. Thiết kế là nền tảng để viết code, chúng liên quan trực tiếp đến nhau."
    }
  },
  {
    "id": 39,
    "question": "Thiết kế hướng đối tượng sử dụng gì để biểu diễn?",
    "options": [
      {
        "key": "a",
        "text": "UML"
      },
      {
        "key": "b",
        "text": "SQL"
      },
      {
        "key": "c",
        "text": "HTML"
      },
      {
        "key": "d",
        "text": "XML"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! UML (Unified Modeling Language) cung cấp các biểu đồ chuẩn hóa để thiết kế và biểu diễn hệ thống hướng đối tượng.",
      "b": "Sai. SQL là ngôn ngữ truy vấn cơ sở dữ liệu quan hệ.",
      "c": "Sai. HTML là ngôn ngữ đánh dấu siêu văn bản để dựng trang web.",
      "d": "Sai. XML là ngôn ngữ đánh dấu dùng để truyền tải và lưu trữ dữ liệu."
    }
  },
  {
    "id": 40,
    "question": "Thiết kế mẫu là gì?",
    "options": [
      {
        "key": "a",
        "text": "Một phương pháp lập trình"
      },
      {
        "key": "b",
        "text": "Một phương pháp thiết kế giao diện người dùng"
      },
      {
        "key": "c",
        "text": "Một phương pháp để giải quyết các vấn đề thiết kế thường gặp"
      },
      {
        "key": "d",
        "text": "Một phương pháp kiểm thử phần mềm"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Sai. Lập trình hướng đối tượng hay hướng thủ tục là phương pháp lập trình, không phải mẫu thiết kế.",
      "b": "Sai. Thiết kế giao diện (UI) có các quy chuẩn riêng, khác với thiết kế mẫu kiến trúc phần mềm.",
      "c": "Chính xác! Thiết kế mẫu (Design Pattern) cung cấp các giải pháp mẫu đã được chuẩn hóa để giải quyết các vấn đề thiết kế kiến trúc mã nguồn thường gặp.",
      "d": "Sai. Thiết kế mẫu không thuộc lĩnh vực kiểm thử phần mềm."
    }
  },
  {
    "id": 41,
    "question": "Phát triển mã nguồn mở liên quan đến gì?",
    "options": [
      {
        "key": "a",
        "text": "Sử dụng phần mềm đóng gói"
      },
      {
        "key": "b",
        "text": "Sử dụng và phát triển các thành phần mã nguồn mở"
      },
      {
        "key": "c",
        "text": "Thiết kế giao diện người dùng"
      },
      {
        "key": "d",
        "text": "Quản lý dự án phần mềm"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Phần mềm đóng gói thương mại thuộc bản quyền mã nguồn đóng.",
      "b": "Chính xác! Phát triển mã nguồn mở liên quan trực tiếp đến việc sử dụng, tùy biến và đóng góp cho các thành phần phần mềm có mã nguồn công khai.",
      "c": "Sai. Thiết kế giao diện là công việc thiết kế mỹ thuật, áp dụng chung cho mọi loại phần mềm.",
      "d": "Sai. Quản lý dự án là hoạt động quản trị con người và tiến độ, không đặc thù cho mã nguồn mở."
    }
  },
  {
    "id": 42,
    "question": "Một trong những nguyên tắc chính trong thiết kế giao diện người dùng là gì?",
    "options": [
      {
        "key": "a",
        "text": "Tối ưu hóa cho các thiết bị di động"
      },
      {
        "key": "b",
        "text": "Tính đến nhu cầu, kinh nghiệm và khả năng của người dùng hệ thống"
      },
      {
        "key": "c",
        "text": "Tăng tốc độ phát triển phần mềm"
      },
      {
        "key": "d",
        "text": "Giảm chi phí phát triển"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Tối ưu cho di động chỉ là một yêu cầu kỹ thuật đa nền tảng cụ thể, không phải nguyên lý UI/UX tổng quát.",
      "b": "Chính xác! Nguyên tắc vàng của thiết kế UI/UX là phải lấy người dùng làm trung tâm, thấu hiểu kinh nghiệm và giới hạn khả năng của họ để giao diện trực quan nhất.",
      "c": "Sai. Thiết kế UI kỹ lưỡng có thể làm tăng thời gian phát triển ban đầu.",
      "d": "Sai. Thiết kế UI tốt thường yêu cầu đầu tư chi phí cao hơn ở giai đoạn đầu."
    }
  },
  {
    "id": 43,
    "question": "Thiết kế UI cần nhận thức được điều gì?",
    "options": [
      {
        "key": "a",
        "text": "Các hạn chế về tài chính của dự án"
      },
      {
        "key": "b",
        "text": "Các hạn chế về vật lý và tinh thần của người dùng"
      },
      {
        "key": "c",
        "text": "Các công nghệ mới nhất"
      },
      {
        "key": "d",
        "text": "Các yêu cầu chức năng của hệ thống"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Hạn chế tài chính thuộc về quản lý dự án, không thuộc nguyên lý thiết kế UI.",
      "b": "Chính xác! Thiết kế giao diện cần thấu hiểu giới hạn sinh lý và nhận thức của con người (thị lực, kích thước ngón tay, trí nhớ ngắn hạn) để tránh gây nhầm lẫn.",
      "c": "Sai. Lạm dụng công nghệ mới nhất mà không tối ưu cho người dùng sẽ gây phản tác dụng.",
      "d": "Sai. Yêu cầu chức năng quyết định hệ thống làm gì, còn thiết kế UI quyết định làm thế nào để tương tác thân thiện."
    }
  },
  {
    "id": 44,
    "question": "Các mô hình thiết kế hệ thống có vai trò gì trong dự án lớn?",
    "options": [
      {
        "key": "a",
        "text": "Giảm thời gian phát triển"
      },
      {
        "key": "b",
        "text": "Là cơ chế giao tiếp quan trọng giữa các nhóm thiết kế khác nhau"
      },
      {
        "key": "c",
        "text": "Tăng chi phí dự án"
      },
      {
        "key": "d",
        "text": "Giảm số lượng lỗi phần mềm"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Việc lập tài liệu mô hình ban đầu có thể kéo dài thời gian chuẩn bị thiết kế.",
      "b": "Chính xác! Các mô hình hệ thống đóng vai trò như ngôn ngữ kỹ thuật chung để các nhóm lập trình khác nhau trao đổi và phối hợp tích hợp.",
      "c": "Sai. Mô hình chuẩn giúp tối ưu hóa chi phí chứ không phải để tăng chi phí dự án.",
      "d": "Sai. Mô hình thiết kế rõ ràng giúp hạn chế lỗi, nhưng vai trò giao tiếp trực tiếp là quan trọng nhất trong dự án lớn."
    }
  },
  {
    "id": 45,
    "question": "Thiết kế thuật toán là gì?",
    "options": [
      {
        "key": "a",
        "text": "Quá trình thiết kế giao diện người dùng"
      },
      {
        "key": "b",
        "text": "Quá trình thiết kế các thuật toán để giải quyết các vấn đề cụ thể"
      },
      {
        "key": "c",
        "text": "Quá trình viết mã nguồn"
      },
      {
        "key": "d",
        "text": "Quá trình kiểm thử phần mềm"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Thiết kế giao diện liên quan đến đồ họa và luồng đi của người dùng.",
      "b": "Chính xác! Thiết kế thuật toán là quá trình xây dựng các bước logic tuần tự và tính toán để giải quyết một bài toán xử lý cụ thể.",
      "c": "Sai. Viết mã nguồn (Coding) là pha hiện thực hóa thuật toán đã thiết kế.",
      "d": "Sai. Kiểm thử phần mềm nhằm tìm lỗi của chương trình sau khi code."
    }
  },
  {
    "id": 46,
    "question": "Thiết kế cơ sở dữ liệu liên quan đến điều gì?",
    "options": [
      {
        "key": "a",
        "text": "Thiết kế giao diện người dùng"
      },
      {
        "key": "b",
        "text": "Thiết kế cấu trúc và tổ chức của cơ sở dữ liệu"
      },
      {
        "key": "c",
        "text": "Thiết kế các thuật toán"
      },
      {
        "key": "d",
        "text": "Kiểm thử cơ sở dữ liệu"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Giao diện hiển thị dữ liệu ra màn hình, còn CSDL lưu trữ dữ liệu bên dưới.",
      "b": "Chính xác! Thiết kế cơ sở dữ liệu liên quan đến việc xác định cấu trúc lưu trữ, định dạng bảng, khóa ngoại và chỉ mục để truy vấn dữ liệu hiệu quả.",
      "c": "Sai. Thiết kế thuật toán tập trung vào luồng tính toán logic.",
      "d": "Sai. Kiểm thử cơ sở dữ liệu là pha kiểm định phụ, không phải thiết kế."
    }
  },
  {
    "id": 47,
    "question": "Trong thiết kế giao diện người dùng, cần thừa nhận điều gì?",
    "options": [
      {
        "key": "a",
        "text": "Người dùng luôn biết cách sử dụng hệ thống"
      },
      {
        "key": "b",
        "text": "Ai cũng có thể nhầm lẫn"
      },
      {
        "key": "c",
        "text": "Hệ thống không bao giờ gặp lỗi"
      },
      {
        "key": "d",
        "text": "Giao diện không cần thân thiện"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Người dùng rất dễ gặp khó khăn hoặc bỡ ngỡ khi tiếp cận hệ thống mới.",
      "b": "Chính xác! Thừa nhận 'con người ai cũng có thể nhầm lẫn' giúp thiết kế giao diện có dung sai cao (có xác nhận hành vi, nút Undo, thông báo lỗi rõ ràng).",
      "c": "Sai. Mọi hệ thống phần mềm đều có nguy cơ phát sinh lỗi khách quan.",
      "d": "Sai. Giao diện thân thiện là mục tiêu sống còn của UI thiết kế."
    }
  },
  {
    "id": 48,
    "question": "Mục tiêu chính của thiết kế giao diện người dùng là gì?",
    "options": [
      {
        "key": "a",
        "text": "Tăng tốc độ phát triển phần mềm"
      },
      {
        "key": "b",
        "text": "Đáp ứng nhu cầu và trải nghiệm người dùng"
      },
      {
        "key": "c",
        "text": "Giảm chi phí phát triển"
      },
      {
        "key": "d",
        "text": "Tăng tính bảo mật của hệ thống"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Thiết kế giao diện kỹ lưỡng đòi hỏi nhiều thời gian phân tích hơn.",
      "b": "Chính xác! Mục tiêu cao nhất của thiết kế UI/UX là mang lại trải nghiệm tối ưu, giúp người dùng thao tác dễ dàng và hài lòng khi sử dụng.",
      "c": "Sai. Thiết kế UI chuyên nghiệp làm tăng chi phí thiết kế ban đầu.",
      "d": "Sai. Bảo mật là nhiệm vụ của kiến trúc phân quyền hệ thống, không phải của giao diện đồ họa."
    }
  },
  {
    "id": 49,
    "question": "Quá trình thiết kế phần mềm bao gồm gì?",
    "options": [
      {
        "key": "a",
        "text": "Viết mã nguồn"
      },
      {
        "key": "b",
        "text": "Định nghĩa các thành phần phần mềm và mối liên kết giữa chúng"
      },
      {
        "key": "c",
        "text": "Kiểm thử phần mềm"
      },
      {
        "key": "d",
        "text": "Bảo trì phần mềm"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Viết mã nguồn là công việc thuộc pha hiện thực.",
      "b": "Chính xác! Thiết kế phần mềm là quá trình kiến trúc hóa hệ thống, định nghĩa cấu trúc của các mô-đun thành phần và các giao diện tích hợp giữa chúng.",
      "c": "Sai. Kiểm thử diễn ra sau khi đã có code chạy được để tìm lỗi.",
      "d": "Sai. Bảo trì thực hiện sau khi phần mềm đã bàn giao cho khách hàng sử dụng."
    }
  },
  {
    "id": 50,
    "question": "Một ví dụ về biểu đồ hoạt động trong thiết kế phần mềm là gì?",
    "options": [
      {
        "key": "a",
        "text": "Biểu đồ lớp"
      },
      {
        "key": "b",
        "text": "Biểu đồ liên kết"
      },
      {
        "key": "c",
        "text": "Biểu đồ hoạt động swimming lane"
      },
      {
        "key": "d",
        "text": "Biểu đồ thành phần"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Sai. Biểu đồ lớp (Class Diagram) mô tả cấu trúc tĩnh, không mô tả hoạt động.",
      "b": "Sai. Biểu đồ liên kết mô tả sự kết nối tĩnh giữa các đối tượng.",
      "c": "Chính xác! Biểu đồ hoạt động bơi làn (Swimlane Activity Diagram) mô tả luồng công việc với các hành động được phân chia theo từng làn đại diện cho các đối tượng thực hiện.",
      "d": "Sai. Biểu đồ thành phần mô tả cấu trúc vật lý của mã nguồn, là biểu đồ tĩnh."
    }
  },
  {
    "id": 51,
    "question": "Quản lý bản quyền trong thiết kế phần mềm liên quan đến điều gì?",
    "options": [
      {
        "key": "a",
        "text": "Sử dụng các thành phần mã nguồn mở mà không cần kiểm tra"
      },
      {
        "key": "b",
        "text": "Duy trì thông tin về các thành phần mã nguồn mở đã tải về và sử dụng"
      },
      {
        "key": "c",
        "text": "Thiết kế giao diện người dùng"
      },
      {
        "key": "d",
        "text": "Bảo trì phần mềm"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Việc sử dụng các thành phần mã nguồn mở bừa bãi không qua kiểm duyệt có thể dẫn đến rủi ro pháp lý nghiêm trọng do vi phạm các điều khoản bản quyền.",
      "b": "Chính xác! Quản lý bản quyền (License Management) yêu cầu ghi nhận, theo dõi và lưu trữ đầy đủ thông tin về mọi thành phần mã nguồn mở được tích hợp để tuân thủ luật sở hữu trí tuệ.",
      "c": "Sai. Thiết kế giao diện người dùng tập trung vào thẩm mỹ, tương tác (UI/UX), không liên quan đến việc quản lý pháp lý/bản quyền mã nguồn.",
      "d": "Sai. Bảo trì phần mềm là hoạt động chỉnh sửa lỗi và cập nhật chức năng sau khi phát hành, không phải trọng tâm của quản lý bản quyền trong thiết kế."
    }
  },
  {
    "id": 52,
    "question": "Một trong những nguyên tắc quan trọng trong thiết kế phần mềm là gì?",
    "options": [
      {
        "key": "a",
        "text": "Giảm thiểu số lượng mã nguồn"
      },
      {
        "key": "b",
        "text": "Đảm bảo phần mềm dễ dàng bảo trì và mở rộng"
      },
      {
        "key": "c",
        "text": "Tăng số lượng thành phần phần mềm"
      },
      {
        "key": "d",
        "text": "Giảm thiểu tài liệu hướng dẫn"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Giảm số lượng mã nguồn không phải là mục tiêu hàng đầu, nếu viết mã quá ngắn gọn/rút bớt chức năng có thể làm mã nguồn khó đọc và thiếu tính năng.",
      "b": "Chính xác! Một thiết kế phần mềm tốt phải đảm bảo tính module hóa cao, khớp nối lỏng (loose coupling) giúp việc bảo trì, sửa lỗi và mở rộng tính năng sau này trở nên dễ dàng.",
      "c": "Sai. Tăng số lượng thành phần không mục đích chỉ làm tăng độ phức tạp của hệ thống và khó quản lý.",
      "d": "Sai. Việc giảm thiểu tài liệu hướng dẫn sẽ gây khó khăn cho đội ngũ phát triển, kiểm thử và người vận hành hệ thống sau này."
    }
  },
  {
    "id": 53,
    "question": "Thiết kế cơ sở dữ liệu bao gồm việc gì?",
    "options": [
      {
        "key": "a",
        "text": "Xác định cấu trúc dữ liệu và cách tổ chức dữ liệu trong cơ sở dữ liệu"
      },
      {
        "key": "b",
        "text": "Viết mã nguồn"
      },
      {
        "key": "c",
        "text": "Thiết kế giao diện người dùng"
      },
      {
        "key": "d",
        "text": "Kiểm thử cơ sở dữ liệu"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Thiết kế cơ sở dữ liệu (Database Design) là quá trình xác định các bảng, trường thông tin, các mối quan hệ (1-n, n-n) và cách tổ chức lưu trữ dữ liệu để tối ưu hóa truy vấn và đảm bảo tính toàn vẹn dữ liệu.",
      "b": "Sai. Viết mã nguồn (Coding) là bước hiện thực hóa logic nghiệp vụ của ứng dụng, không thuộc phạm vi thiết kế cơ sở dữ liệu.",
      "c": "Sai. Thiết kế giao diện người dùng (UI Design) thuộc về lớp trình diễn (Presentation layer) tương tác trực tiếp với người dùng.",
      "d": "Sai. Kiểm thử cơ sở dữ liệu (Database Testing) là hoạt động kiểm định tính đúng đắn của dữ liệu, không phải hoạt động thiết kế."
    }
  },
  {
    "id": 54,
    "question": "Thiết kế thuật toán có vai trò gì trong phần mềm?",
    "options": [
      {
        "key": "a",
        "text": "Định nghĩa các giao diện người dùng"
      },
      {
        "key": "b",
        "text": "Giải quyết các vấn đề cụ thể bằng cách xác định các bước xử lý"
      },
      {
        "key": "c",
        "text": "Tăng tốc độ phát triển phần mềm"
      },
      {
        "key": "d",
        "text": "Bảo trì phần mềm"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Định nghĩa giao diện người dùng thuộc về phần thiết kế UI, không phải vai trò của thiết kế thuật toán.",
      "b": "Chính xác! Thiết kế thuật toán (Algorithm Design) là việc xây dựng các bước logic, các phép toán cụ thể để giải quyết một bài toán nghiệp vụ hay kỹ thuật trong hệ thống phần mềm.",
      "c": "Sai. Thiết kế thuật toán đòi hỏi thời gian suy nghĩ và tối ưu hóa, nó hướng tới hiệu năng và tính đúng đắn chứ không trực tiếp tăng tốc độ thời gian viết mã ban đầu.",
      "d": "Sai. Bảo trì phần mềm diễn ra sau khi phần mềm đã vận hành thực tế, thuật toán chỉ là một phần trong mã nguồn được bảo trì."
    }
  },
  {
    "id": 55,
    "question": "Mục đích của việc hiện thực phần mềm là gì?",
    "options": [
      {
        "key": "a",
        "text": "Đáp ứng các yêu cầu thiết kế chi tiết"
      },
      {
        "key": "b",
        "text": "Thỏa mãn người dùng cuối"
      },
      {
        "key": "c",
        "text": "Tăng tính phức tạp của mã nguồn"
      },
      {
        "key": "d",
        "text": "Giảm chi phí phát triển"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Hiện thực phần mềm (Software Implementation/Coding) có mục đích chính là chuyển đổi các đặc tả thiết kế chi tiết (kiến trúc, thuật toán, dữ liệu) thành mã nguồn chạy được.",
      "b": "Sai. Thỏa mãn người dùng cuối là mục tiêu chung của toàn bộ dự án (đặc biệt là pha phân tích yêu cầu và kiểm thử validation), không phải mục đích kỹ thuật trực tiếp của pha code.",
      "c": "Sai. Tăng tính phức tạp của mã nguồn là điều cần tránh trong lập trình vì sẽ gây khó khăn cho việc bảo trì.",
      "d": "Sai. Hiện thực mã nguồn là hoạt động tốn kém tài nguyên nhất, bản thân nó không trực tiếp làm giảm chi phí."
    }
  },
  {
    "id": 56,
    "question": "Unit Implementation được hiểu là gì?",
    "options": [
      {
        "key": "a",
        "text": "Lập trình các đơn vị phần mềm nhỏ nhất"
      },
      {
        "key": "b",
        "text": "Thiết kế giao diện người dùng"
      },
      {
        "key": "c",
        "text": "Tạo lập các tài liệu hướng dẫn sử dụng"
      },
      {
        "key": "d",
        "text": "Kiểm tra và bảo trì phần mềm"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Unit Implementation là quá trình lập trình (viết mã nguồn) cho các đơn vị phần mềm độc lập nhỏ nhất trong hệ thống, thường là các hàm, thủ tục hoặc các lớp (classes).",
      "b": "Sai. Thiết kế giao diện người dùng là hoạt động thiết kế UI/UX ở các pha trước đó.",
      "c": "Sai. Tạo tài liệu hướng dẫn sử dụng là hoạt động viết tài liệu hỗ trợ người dùng (Technical writing).",
      "d": "Sai. Kiểm tra và bảo trì phần mềm là các hoạt động diễn ra ở pha kiểm thử hoặc vận hành."
    }
  },
  {
    "id": 57,
    "question": "Một quy tắc vàng trong hiện thực phần mềm là gì?",
    "options": [
      {
        "key": "a",
        "text": "Kiểm tra các yêu cầu và thiết kế lại một lần nữa"
      },
      {
        "key": "b",
        "text": "Không cần kiểm tra lại thiết kế sau khi mã hóa"
      },
      {
        "key": "c",
        "text": "Tập trung vào việc lập trình nhanh chóng"
      },
      {
        "key": "d",
        "text": "Đơn giản hóa tất cả các quy trình"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Việc rà soát lại các yêu cầu và thiết kế chi tiết trước và trong quá trình viết mã giúp hạn chế việc hiểu sai đặc tả, tránh viết code sai logic gây lãng phí công sức.",
      "b": "Sai. Không kiểm tra lại thiết kế sau khi mã hóa sẽ dễ dẫn đến việc code không khớp với thiết kế ban đầu hoặc bỏ sót yêu cầu.",
      "c": "Sai. Lập trình quá nhanh mà không kiểm tra chất lượng sẽ tạo ra nhiều lỗi (bugs), làm tăng chi phí sửa lỗi ở pha kiểm thử.",
      "d": "Sai. Đơn giản hóa quy trình quá mức có thể làm bỏ qua các bước quan trọng như review code, thiết kế test case."
    }
  },
  {
    "id": 58,
    "question": "Tại sao cần xác nhận các thiết kế chi tiết trước khi hiện thực?",
    "options": [
      {
        "key": "a",
        "text": "Để đảm bảo các thiết kế đáp ứng yêu cầu của người dùng"
      },
      {
        "key": "b",
        "text": "Để giảm chi phí phát triển"
      },
      {
        "key": "c",
        "text": "Để tiết kiệm thời gian kiểm thử"
      },
      {
        "key": "d",
        "text": "Để tăng tốc độ mã hóa"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Xác nhận thiết kế chi tiết (Design Validation) nhằm đảm bảo các bản vẽ kiến trúc, thiết kế cơ sở dữ liệu và thuật toán hoàn toàn khớp với yêu cầu của người dùng trước khi tiến hành code.",
      "b": "Sai. Việc xác nhận này gián tiếp tiết kiệm chi phí sửa lỗi chứ không trực tiếp giảm chi phí phát triển chung.",
      "c": "Sai. Thời gian kiểm thử được xác định trong kế hoạch test, việc thiết kế tốt chỉ giúp giảm số lỗi tìm thấy chứ không làm giảm thời gian chạy test cơ bản.",
      "d": "Sai. Tăng tốc độ viết mã chỉ là hệ quả phụ nhờ việc lập trình viên có hướng đi rõ ràng, không phải mục đích cốt lõi."
    }
  },
  {
    "id": 59,
    "question": "Mục đích của việc ghi lại lỗi khi sử dụng form là gì?",
    "options": [
      {
        "key": "a",
        "text": "Để theo dõi và sửa chữa lỗi một cách hệ thống"
      },
      {
        "key": "b",
        "text": "Để lưu trữ dữ liệu người dùng"
      },
      {
        "key": "c",
        "text": "Để tăng tốc độ phát triển phần mềm"
      },
      {
        "key": "d",
        "text": "Để phân tích thị trường"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Sử dụng form ghi nhận lỗi (Bug Report Form) giúp nhóm phát triển thu thập đầy đủ thông tin về lỗi (mô tả, các bước tái hiện, môi trường) để phân loại, theo dõi trạng thái sửa lỗi một cách khoa học.",
      "b": "Sai. Form báo lỗi không dùng để lưu trữ thông tin cá nhân hay dữ liệu người dùng chung.",
      "c": "Sai. Ghi nhận lỗi là hoạt động kiểm soát chất lượng, không giúp tăng tốc độ viết mã mới.",
      "d": "Sai. Phân tích thị trường là hoạt động kinh doanh, hoàn toàn không liên quan đến form báo cáo lỗi kỹ thuật."
    }
  },
  {
    "id": 60,
    "question": "Tiêu chuẩn yêu cầu đối với việc mã hóa bao gồm gì?",
    "options": [
      {
        "key": "a",
        "text": "Tính đúng đắn và rõ ràng"
      },
      {
        "key": "b",
        "text": "Tính linh hoạt và tiết kiệm"
      },
      {
        "key": "c",
        "text": "Tính đơn giản và nhanh chóng"
      },
      {
        "key": "d",
        "text": "Tính bảo mật và khả năng mở rộng"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Khi viết mã nguồn (Coding Standards), tiêu chuẩn tiên quyết là code phải chạy đúng logic nghiệp vụ (tính đúng đắn) và cấu trúc mã phải dễ hiểu, dễ đọc (tính rõ ràng) đối với các lập trình viên khác.",
      "b": "Sai. Tính linh hoạt và tiết kiệm tài nguyên là tiêu chuẩn phụ tùy thuộc ngữ cảnh, không phải tiêu chuẩn cốt lõi hàng đầu của mã hóa.",
      "c": "Sai. Lập trình nhanh chóng thường đi kèm với việc viết code ẩu, bỏ qua các chuẩn mực cấu trúc làm code khó đọc.",
      "d": "Sai. Tính bảo mật và khả năng mở rộng là các thuộc tính phi chức năng ở mức thiết kế hệ thống lớn, không phải tiêu chuẩn trực tiếp khi viết từng dòng code đơn lẻ."
    }
  },
  {
    "id": 61,
    "question": "Ước lượng kích thước và thời gian dựa trên gì?",
    "options": [
      {
        "key": "a",
        "text": "Dữ liệu đã có"
      },
      {
        "key": "b",
        "text": "Kinh nghiệm cá nhân"
      },
      {
        "key": "c",
        "text": "Yêu cầu khách hàng"
      },
      {
        "key": "d",
        "text": "Ngân sách dự án"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Phương pháp ước lượng khoa học (chẳng hạn như trong mô hình PSP/COCOMO) yêu cầu dựa trên các dữ liệu lịch sử đã lưu trữ từ các dự án tương tự trước đó để đưa ra con số chính xác nhất.",
      "b": "Sai. Kinh nghiệm cá nhân chỉ mang tính chủ quan, cảm tính và dễ dẫn đến sai số lớn nếu thiếu dữ liệu thực tế chứng minh.",
      "c": "Sai. Khách hàng thường đưa ra hạn chót (deadline) mong muốn chứ không có thông tin kỹ thuật để ước lượng kích thước code.",
      "d": "Sai. Ngân sách dự án giới hạn số tiền chi tiêu, không phải cơ sở kỹ thuật để ước lượng khối lượng công việc thực tế."
    }
  },
  {
    "id": 62,
    "question": "Hiện thực mã chương trình bao gồm bước nào?",
    "options": [
      {
        "key": "a",
        "text": "Lập kế hoạch cấu trúc và thiết kế mã"
      },
      {
        "key": "b",
        "text": "Thiết kế giao diện người dùng"
      },
      {
        "key": "c",
        "text": "Viết tài liệu hướng dẫn"
      },
      {
        "key": "d",
        "text": "Tạo lập báo cáo phân tích"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Quá trình hiện thực mã (Coding) không chỉ đơn thuần là gõ code mà phải bắt đầu bằng việc lập kế hoạch cấu trúc các lớp/hàm và thiết kế logic luồng dữ liệu của mã nguồn.",
      "b": "Sai. Thiết kế giao diện người dùng là bước thuộc về pha thiết kế UI trước khi lập trình.",
      "c": "Sai. Viết tài liệu hướng dẫn là công việc soạn thảo văn bản hỗ trợ, được thực hiện song song hoặc sau khi hoàn thành code.",
      "d": "Sai. Tạo lập báo cáo phân tích là công việc của nhà phân tích hệ thống (BA) ở giai đoạn đầu dự án."
    }
  },
  {
    "id": 63,
    "question": "Tại sao cần tự kiểm tra lại thiết kế/cấu trúc trước khi mã hóa?",
    "options": [
      {
        "key": "a",
        "text": "Để đảm bảo tính đúng đắn và hiệu quả của mã nguồn"
      },
      {
        "key": "b",
        "text": "Để tăng tốc độ mã hóa"
      },
      {
        "key": "c",
        "text": "Để giảm chi phí phát triển"
      },
      {
        "key": "d",
        "text": "Để làm hài lòng khách hàng"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Tự kiểm tra (Review) lại thiết kế cấu trúc trước khi code giúp phát hiện sớm các điểm thiếu sót, sai lệch logic, từ đó đảm bảo mã nguồn sau khi viết sẽ chạy đúng hướng và tối ưu.",
      "b": "Sai. Việc review tốn thêm một khoảng thời gian chuẩn bị ban đầu chứ không trực tiếp tăng tốc độ gõ phím.",
      "c": "Sai. Hoạt động này gián tiếp làm giảm chi phí sửa lỗi phát sinh sau này chứ không trực tiếp giảm chi phí tổng thể của dự án.",
      "d": "Sai. Khách hàng không trực tiếp xem thiết kế chi tiết bên trong mã nguồn, họ chỉ quan tâm đến tính năng chạy được."
    }
  },
  {
    "id": 64,
    "question": "Quy tắc đặt tên trong hiện thực mã chương trình cần tuân thủ những gì?",
    "options": [
      {
        "key": "a",
        "text": "Phù hợp và rõ ràng"
      },
      {
        "key": "b",
        "text": "Ngắn gọn và xúc tích"
      },
      {
        "key": "c",
        "text": "Phức tạp và chi tiết"
      },
      {
        "key": "d",
        "text": "Bất kỳ tên nào cũng được"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Tên biến, tên hàm, tên lớp phải phản ánh đúng mục đích sử dụng (phù hợp) và dễ đọc, dễ hiểu (rõ ràng) để bất kỳ lập trình viên nào đọc vào cũng nhận biết được chức năng.",
      "b": "Sai. Tên quá ngắn gọn (như a, b, c) sẽ làm mã nguồn cực kỳ khó hiểu vì không rõ ý nghĩa của biến.",
      "c": "Sai. Đặt tên quá phức tạp và chi tiết sẽ làm dòng code dài dòng và khó đọc một cách không cần thiết.",
      "d": "Sai. Đặt tên bừa bãi sẽ phá hủy cấu trúc của dự án, làm tăng chi phí bảo trì lên cực kỳ cao."
    }
  },
  {
    "id": 65,
    "question": "Kiểm tra Class cần xem xét điều gì?",
    "options": [
      {
        "key": "a",
        "text": "Tên Class có thích hợp không"
      },
      {
        "key": "b",
        "text": "Class có được trừu tượng không"
      },
      {
        "key": "c",
        "text": "Header của Class có mô tả mục đích của hàm hay không"
      },
      {
        "key": "d",
        "text": "Tất cả các ý trên"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Sai. Tên lớp thích hợp chỉ là một khía cạnh cần kiểm tra, chưa bao hàm các tiêu chí chất lượng khác.",
      "b": "Sai. Kiểm tra xem lớp có tính trừu tượng phù hợp hay không cũng là tiêu chí quan trọng nhưng chưa đủ.",
      "c": "Sai. Xem xét header của lớp có mô tả rõ ràng chức năng và mục đích hay không cũng là một phần việc kiểm tra.",
      "d": "Chính xác! Khi đánh giá chất lượng của một Lớp (Class), ta cần rà soát toàn diện: từ cách đặt tên thích hợp, mức độ trừu tượng hóa cho đến việc tài liệu hóa/ghi chú rõ ràng ở phần header."
    }
  },
  {
    "id": 66,
    "question": "Kiểm tra thuộc tính cần xác định điều gì?",
    "options": [
      {
        "key": "a",
        "text": "Thuộc tính có cần thiết không"
      },
      {
        "key": "b",
        "text": "Thuộc tính có thể là static không"
      },
      {
        "key": "c",
        "text": "Thuộc tính có nên là final không"
      },
      {
        "key": "d",
        "text": "Tất cả các ý trên"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Sai. Xác định sự cần thiết chỉ là một bước kiểm tra thuộc tính để loại bỏ các biến dư thừa.",
      "b": "Sai. Xem xét biến static giúp tối ưu bộ nhớ nhưng chưa bao quát hết việc kiểm tra thuộc tính.",
      "c": "Sai. Đánh giá tính hằng số (final) giúp tăng tính an toàn cho dữ liệu nhưng chỉ là một tiêu chí riêng lẻ.",
      "d": "Chính xác! Khi review các thuộc tính (fields/attributes) của lớp, cần kiểm tra toàn diện xem thuộc tính có dư thừa không, có thể tối ưu bằng static/final để đảm bảo an toàn và hiệu năng hay không."
    }
  },
  {
    "id": 67,
    "question": "Phương pháp kiểm tra phương thức khởi dựng cần xác định điều gì?",
    "options": [
      {
        "key": "a",
        "text": "Phương thức có cần thiết không"
      },
      {
        "key": "b",
        "text": "Phương thức có leverage các constructor hiện có không"
      },
      {
        "key": "c",
        "text": "Phương thức có initialize tất cả các thuộc tính không"
      },
      {
        "key": "d",
        "text": "Tất cả các ý trên"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Sai. Kiểm tra sự cần thiết của constructor chỉ là một phần nhỏ trong việc thiết kế phương thức khởi tạo.",
      "b": "Sai. Tận dụng (leverage) các constructor có sẵn để tránh lặp mã (code duplication) là tiêu chí tốt nhưng chưa đủ.",
      "c": "Sai. Việc đảm bảo khởi tạo (initialize) đầy đủ mọi thuộc tính để tránh lỗi NullPointerException là cực kỳ quan trọng nhưng chưa bao quát toàn bộ.",
      "d": "Chính xác! Kiểm tra constructor đòi hỏi xem xét tính cần thiết, khả năng tái sử dụng (chaining) các constructor khác và đảm bảo mọi thuộc tính của đối tượng được khởi tạo giá trị hợp lệ."
    }
  },
  {
    "id": 68,
    "question": "Làm thế nào để lập trình 1000 LoC/ngày?",
    "options": [
      {
        "key": "a",
        "text": "Lập kế hoạch cấu trúc và thiết kế mã chương trình"
      },
      {
        "key": "b",
        "text": "Tăng tốc độ đánh máy"
      },
      {
        "key": "c",
        "text": "Tập trung vào các yêu cầu của khách hàng"
      },
      {
        "key": "d",
        "text": "Giảm thời gian kiểm tra mã"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Để đạt hiệu suất lập trình cao (viết được 1000 dòng code chất lượng mỗi ngày), lập trình viên phải lập kế hoạch cấu trúc và thiết kế logic chi tiết từ trước. Khi đã rõ ràng về mặt giải thuật và kiến trúc, việc viết code sẽ diễn ra rất nhanh và ít bị tắc nghẽn.",
      "b": "Sai. Tốc độ đánh máy nhanh không giúp ích nếu tư duy logic chưa thông suốt, dễ tạo ra code lỗi hoặc phải đập đi xây lại.",
      "c": "Sai. Tập trung vào yêu cầu khách hàng là pha phân tích, không trực tiếp hỗ trợ tăng sản lượng dòng code hàng ngày trong pha lập trình.",
      "d": "Sai. Giảm thời gian kiểm tra sẽ dẫn đến code nhiều lỗi, tốn nhiều thời gian fix bug hơn và làm giảm hiệu suất thực tế."
    }
  },
  {
    "id": 69,
    "question": "Kiểm tra thuộc tính có cần xác định điều gì?",
    "options": [
      {
        "key": "a",
        "text": "Sự cần thiết của thuộc tính"
      },
      {
        "key": "b",
        "text": "Thuộc tính có thể là static hay không"
      },
      {
        "key": "c",
        "text": "Thuộc tính có nên là final hay không"
      },
      {
        "key": "d",
        "text": "Tất cả các ý trên"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Sai. Kiểm tra sự cần thiết của thuộc tính là một phần cần xem xét để tránh rác mã.",
      "b": "Sai. Đánh giá khả năng chuyển thuộc tính thành static chỉ là một khía cạnh tối ưu hóa tài nguyên.",
      "c": "Sai. Xem xét việc gán hằng số final để ngăn việc ghi đè ngoài ý muốn là tiêu chuẩn an toàn nhưng chưa đủ.",
      "d": "Chính xác! Đây là câu hỏi lặp lại của Q66. Việc kiểm tra thuộc tính của lớp phải xem xét cả tính cần thiết, phạm vi truy cập (static) và tính bất biến (final) của nó."
    }
  },
  {
    "id": 70,
    "question": "Tại sao cần ghi chú lại các mốc thời gian trong quá trình hiện thực mã chương trình?",
    "options": [
      {
        "key": "a",
        "text": "Để theo dõi tiến độ và quản lý thời gian hiệu quả"
      },
      {
        "key": "b",
        "text": "Để lưu trữ dữ liệu người dùng"
      },
      {
        "key": "c",
        "text": "Để phân tích thị trường"
      },
      {
        "key": "d",
        "text": "Để giảm chi phí phát triển"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Việc ghi lại mốc thời gian thực hiện (Time tracking) giúp lập trình viên và quản lý dự án đo lường được năng suất, theo dõi tiến độ thực tế so với kế hoạch để điều chỉnh kịp thời.",
      "b": "Sai. Ghi chú thời gian làm việc cá nhân của dev không liên quan đến dữ liệu người dùng của hệ thống phần mềm.",
      "c": "Sai. Phân tích thị trường là hoạt động kinh doanh bên ngoài, không liên quan đến việc ghi chú thời gian code.",
      "d": "Sai. Ghi chú thời gian không trực tiếp làm giảm chi phí phát triển mà chỉ giúp quản lý dự án hiệu quả hơn."
    }
  },
  {
    "id": 71,
    "question": "Việc chuẩn bị để hiện thực bao gồm gì?",
    "options": [
      {
        "key": "a",
        "text": "Xác nhận các thiết kế chi tiết phải hiện thực"
      },
      {
        "key": "b",
        "text": "Mã hóa từ một thiết kế được mô tả bằng văn bản"
      },
      {
        "key": "c",
        "text": "Đo thời gian phân loại theo các bước"
      },
      {
        "key": "d",
        "text": "Tất cả các ý trên"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Sai. Xác nhận thiết kế chi tiết là một khâu chuẩn bị quan trọng nhưng chưa bao quát toàn bộ quy trình hiện thực.",
      "b": "Sai. Viết mã dựa trên mô tả văn bản là công việc code chính thức, chưa đủ để nói về khâu chuẩn bị và quản lý.",
      "c": "Sai. Đo thời gian phân loại chỉ là hoạt động bổ trợ để kiểm soát tiến độ làm việc.",
      "d": "Chính xác! Chuẩn bị hiện thực mã hóa là một quy trình khép kín bao gồm: xác nhận thiết kế chi tiết cần code, lập kế hoạch viết mã dựa trên mô tả thiết kế và thiết lập việc ghi nhận thời gian thực hiện."
    }
  },
  {
    "id": 72,
    "question": "Mục đích của việc biên dịch mã lệnh là gì?",
    "options": [
      {
        "key": "a",
        "text": "Kiểm tra và sửa chữa các lỗi cú pháp"
      },
      {
        "key": "b",
        "text": "Thiết kế giao diện người dùng"
      },
      {
        "key": "c",
        "text": "Viết tài liệu hướng dẫn"
      },
      {
        "key": "d",
        "text": "Tạo lập báo cáo phân tích"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Trình biên dịch (Compiler) có nhiệm vụ phân tích cú pháp mã nguồn để dịch sang ngôn ngữ máy hoặc mã trung gian, giúp phát hiện và cảnh báo ngay lập tức các lỗi vi phạm cú pháp lập trình.",
      "b": "Sai. Biên dịch là thao tác kỹ thuật trên mã nguồn, không liên quan đến việc thiết kế giao diện đồ họa.",
      "c": "Sai. Viết tài liệu hướng dẫn là soạn thảo văn bản cho người dùng, không cần đến trình biên dịch mã nguồn.",
      "d": "Sai. Báo cáo phân tích hệ thống được lập trước giai đoạn lập trình và biên dịch."
    }
  },
  {
    "id": 73,
    "question": "Mục tiêu của kiểm thử phần mềm là gì?",
    "options": [
      {
        "key": "a",
        "text": "Để chỉ ra rằng chương trình thực hiện đúng như mong đợi và tìm ra lỗi"
      },
      {
        "key": "b",
        "text": "Để giảm chi phí phát triển"
      },
      {
        "key": "c",
        "text": "Để tăng tốc độ lập trình"
      },
      {
        "key": "d",
        "text": "Để làm hài lòng khách hàng"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử phần mềm (Software Testing) hướng tới hai mục tiêu: kiểm chứng xem phần mềm có hoạt động đúng theo đặc tả yêu cầu không (Validation) và chủ động tìm kiếm các lỗi để khắc phục (Defect detection).",
      "b": "Sai. Kiểm thử tốn chi phí và nhân lực của dự án, nó chỉ giúp tránh chi phí khắc phục lỗi quá lớn sau khi bàn giao chứ bản thân nó không làm giảm chi phí phát triển.",
      "c": "Sai. Hoạt động kiểm thử diễn ra sau khi lập trình, nó thậm chí có thể làm kéo dài thời gian hoàn thành dự án để sửa lỗi.",
      "d": "Sai. Làm hài lòng khách hàng là mục tiêu bao trùm của toàn dự án, kiểm thử chỉ là một công cụ kiểm soát chất lượng hỗ trợ mục tiêu đó."
    }
  },
  {
    "id": 74,
    "question": "Kiểm thử đơn vị (unit testing) tập trung vào điều gì?",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử chức năng của các đối tượng hay các phương thức"
      },
      {
        "key": "b",
        "text": "Kiểm thử giao diện người dùng"
      },
      {
        "key": "c",
        "text": "Kiểm thử hiệu suất hệ thống"
      },
      {
        "key": "d",
        "text": "Kiểm thử tính bảo mật"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử đơn vị (Unit Testing) tập trung kiểm tra độc lập các thành phần phần mềm nhỏ nhất có thể lập trình được (hàm, phương thức, lớp) và thường do chính các lập trình viên (Developers) thực hiện.",
      "b": "Sai. Kiểm thử giao diện người dùng (UI Testing) thuộc mức kiểm thử hệ thống hoặc chấp nhận.",
      "c": "Sai. Kiểm thử hiệu suất hệ thống (Performance Testing) là loại kiểm thử phi chức năng ở mức hệ thống.",
      "d": "Sai. Kiểm thử tính bảo mật (Security Testing) được thực hiện ở mức hệ thống để đánh giá khả năng chống tấn công của toàn hệ thống."
    }
  },
  {
    "id": 75,
    "question": "Kiểm thử component (component testing) tập trung vào điều gì:",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử giao diện component"
      },
      {
        "key": "b",
        "text": "Kiểm thử chức năng của các phương thức"
      },
      {
        "key": "c",
        "text": "Kiểm thử tính bảo mật"
      },
      {
        "key": "d",
        "text": "Kiểm thử giao diện người dùng"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử thành phần (Component/Module Testing) tập trung vào việc xác minh hoạt động của các thành phần độc lập thông qua các giao diện (interface) hoặc API giao tiếp của chính thành phần đó.",
      "b": "Sai. Kiểm thử chức năng của các phương thức riêng lẻ bên trong thành phần thuộc về phạm vi Kiểm thử đơn vị (Unit Testing).",
      "c": "Sai. Kiểm thử bảo mật là hoạt động ở mức hệ thống nhằm đánh giá toàn diện các rủi ro bảo mật.",
      "d": "Sai. Kiểm thử giao diện người dùng (UI Testing) kiểm tra cách người dùng tương tác với hệ thống, không phải giao diện lập trình của component."
    }
  },
  {
    "id": 76,
    "question": "Kiểm thử hệ thống (system testing) tập trung vào điều gì:",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử tương tác giữa các component"
      },
      {
        "key": "b",
        "text": "Kiểm thử giao diện người dùng"
      },
      {
        "key": "c",
        "text": "Kiểm thử tính bảo mật"
      },
      {
        "key": "d",
        "text": "Kiểm thử hiệu suất hệ thống"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Theo câu hỏi trong tài liệu ôn tập này, Kiểm thử hệ thống (System Testing) tập trung kiểm tra sự tương tác và tích hợp giữa toàn bộ các component/sub-system để đảm bảo cả hệ thống vận hành trơn tru.",
      "b": "Sai. Kiểm thử giao diện người dùng chỉ là một phần nhỏ của kiểm thử hệ thống.",
      "c": "Sai. Kiểm thử bảo mật là một khía cạnh phi chức năng cụ thể của kiểm thử hệ thống.",
      "d": "Sai. Kiểm thử hiệu suất hệ thống cũng là một loại kiểm thử phi chức năng cụ thể, không phải trọng tâm duy nhất của kiểm thử hệ thống."
    }
  },
  {
    "id": 77,
    "question": "Kiểm thử tự động nên sử dụng gì để hỗ trợ kiểm thử đơn vị:",
    "options": [
      {
        "key": "a",
        "text": "Framework kiểm thử tự động (như JUnit)"
      },
      {
        "key": "b",
        "text": "Các công cụ kiểm thử thủ công"
      },
      {
        "key": "c",
        "text": "Phần mềm thiết kế giao diện"
      },
      {
        "key": "d",
        "text": "Các chương trình bảo mật"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Để tự động hóa kiểm thử đơn vị, lập trình viên sử dụng các framework xUnit (như JUnit cho Java, NUnit cho C#, PyTest cho Python) giúp viết, chạy và báo cáo kết quả test tự động.",
      "b": "Sai. Các công cụ thủ công không thể tự động hóa việc chạy các ca kiểm thử đơn vị trong mã nguồn.",
      "c": "Sai. Phần mềm thiết kế giao diện (như Figma, Adobe XD) dùng để vẽ mockup UI, không hỗ trợ kiểm thử đơn vị mã nguồn.",
      "d": "Sai. Các chương trình bảo mật (như phần mềm quét virus, tường lửa) không có chức năng chạy test case đơn vị."
    }
  },
  {
    "id": 78,
    "question": "Mục tiêu của kiểm thử giao diện là gì:",
    "options": [
      {
        "key": "a",
        "text": "Tìm ra lỗi gây ra bởi các lỗi giao diện hoặc giả định sai về các giao diện"
      },
      {
        "key": "b",
        "text": "Kiểm thử chức năng của các phương thức"
      },
      {
        "key": "c",
        "text": "Kiểm thử hiệu suất hệ thống"
      },
      {
        "key": "d",
        "text": "Kiểm thử tính bảo mật"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử giao diện (Interface Testing) nhằm mục đích phát hiện các lỗi phát sinh do sự giao tiếp không khớp, sai lệch định dạng truyền nhận dữ liệu hoặc các giả định không đúng giữa các module/hệ thống tương tác với nhau.",
      "b": "Sai. Kiểm thử chức năng phương thức là nhiệm vụ của kiểm thử đơn vị.",
      "c": "Sai. Kiểm thử hiệu suất hệ thống là đo lường thời gian phản hồi, thông lượng dưới tải lớn.",
      "d": "Sai. Kiểm thử bảo mật nhằm phát hiện các lỗ hổng an ninh thông tin."
    }
  },
  {
    "id": 79,
    "question": "Một loại giao diện trong kiểm thử giao diện là gì:",
    "options": [
      {
        "key": "a",
        "text": "Giao diện có tham số"
      },
      {
        "key": "b",
        "text": "Giao diện người dùng"
      },
      {
        "key": "c",
        "text": "Giao diện hệ thống"
      },
      {
        "key": "d",
        "text": "Giao diện bảo mật"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Giao diện có tham số (Parameter Interfaces) là loại giao diện trao đổi dữ liệu thông qua các tham số được truyền trực tiếp giữa các hàm hoặc phương thức khi gọi nhau.",
      "b": "Sai. Giao diện người dùng (UI) là giao diện tương tác trực quan giữa người và máy, không phải loại giao diện lập trình/tích hợp kỹ thuật trong ngữ cảnh này.",
      "c": "Sai. Giao diện hệ thống là thuật ngữ chung, không phải phân loại cụ thể của giao diện lập trình trong kiểm thử tích hợp.",
      "d": "Sai. Giao diện bảo mật không phải là một loại giao diện kỹ thuật để truyền nhận dữ liệu giữa các module."
    }
  },
  {
    "id": 80,
    "question": "Kiểm thử phát triển là trách nhiệm của ai:",
    "options": [
      {
        "key": "a",
        "text": "Đội ngũ phát triển phần mềm"
      },
      {
        "key": "b",
        "text": "Người dùng cuối"
      },
      {
        "key": "c",
        "text": "Nhóm marketing"
      },
      {
        "key": "d",
        "text": "Nhóm hỗ trợ khách hàng"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử phát triển (Development Testing) bao gồm kiểm thử đơn vị, kiểm thử tích hợp và kiểm thử hệ thống nội bộ, là trách nhiệm trực tiếp của đội ngũ phát triển (Developers & QA/Tester nội bộ) trong quá trình xây dựng sản phẩm.",
      "b": "Sai. Người dùng cuối tham gia vào kiểm thử chấp nhận (Acceptance Testing) ở giai đoạn cuối chứ không tham gia kiểm thử trong pha phát triển.",
      "c": "Sai. Nhóm marketing làm nhiệm vụ quảng bá sản phẩm, không có chuyên môn và nhiệm vụ kiểm thử kỹ thuật.",
      "d": "Sai. Nhóm hỗ trợ khách hàng tiếp nhận phản hồi sau khi sản phẩm đã phát hành thực tế."
    }
  },
  {
    "id": 81,
    "question": "Kiểm thử phát hành là gì:",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử hệ thống trước khi phát hành cho khách hàng"
      },
      {
        "key": "b",
        "text": "Kiểm thử hệ thống sau khi phát hành cho khách hàng"
      },
      {
        "key": "c",
        "text": "Kiểm thử hệ thống trong giai đoạn phát triển"
      },
      {
        "key": "d",
        "text": "Kiểm thử hệ thống trong giai đoạn bảo trì"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử phát hành (Release Testing) là quá trình kiểm thử một phiên bản hoàn chỉnh của hệ thống để đảm bảo nó hoạt động ổn định và đáp ứng tất cả các tiêu chí chất lượng trước khi phân phối tới tay người dùng hoặc khách hàng.",
      "b": "Sai. Kiểm thử sau khi phát hành là hoạt động giám sát vận hành hoặc kiểm thử hồi quy sau cập nhật.",
      "c": "Sai. Kiểm thử trong giai đoạn phát triển được thực hiện liên tục trên từng module và nhánh tính năng nhỏ.",
      "d": "Sai. Kiểm thử trong giai đoạn bảo trì được gọi là kiểm thử bảo trì hoặc kiểm thử hồi quy (Regression testing)."
    }
  },
  {
    "id": 82,
    "question": "Phương pháp kiểm thử hộp đen tập trung vào điều gì:",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử chức năng của hệ thống mà không cần biết cấu trúc bên trong"
      },
      {
        "key": "b",
        "text": "Kiểm thử hiệu suất hệ thống"
      },
      {
        "key": "c",
        "text": "Kiểm thử tính bảo mật"
      },
      {
        "key": "d",
        "text": "Kiểm thử giao diện người dùng"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử hộp đen (Black-box Testing) tập trung kiểm tra hoạt động chức năng của hệ thống dựa trên đầu vào và đầu ra theo đặc tả yêu cầu, hoàn toàn độc lập với cấu trúc mã nguồn bên trong.",
      "b": "Sai. Kiểm thử hiệu suất hệ thống là một dạng kiểm thử phi chức năng cụ thể, hộp đen có thể áp dụng nhưng không phải là định nghĩa hay trọng tâm chính của kiểm thử hộp đen.",
      "c": "Sai. Kiểm thử bảo mật cũng là một dạng kiểm thử phi chức năng chuyên biệt.",
      "d": "Sai. Kiểm thử giao diện người dùng là một mức/loại kiểm thử, trong khi kiểm thử hộp đen là một phương pháp luận tiếp cận rộng hơn."
    }
  },
  {
    "id": 83,
    "question": "Phương pháp kiểm thử hộp trắng tập trung vào điều gì:",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử cấu trúc bên trong của hệ thống"
      },
      {
        "key": "b",
        "text": "Kiểm thử hiệu suất hệ thống"
      },
      {
        "key": "c",
        "text": "Kiểm thử tính bảo mật"
      },
      {
        "key": "d",
        "text": "Kiểm thử giao diện người dùng"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử hộp trắng (White-box Testing / Structural Testing) tập trung kiểm tra cấu trúc mã nguồn bên trong hệ thống, bao gồm các đường đi của thuật toán, các câu lệnh, các nhánh rẽ và điều kiện logic.",
      "b": "Sai. Kiểm thử hiệu suất không yêu cầu kiểm tra chi tiết cấu trúc code mà đo lường các chỉ số thời gian phản hồi ở mức hệ thống.",
      "c": "Sai. Kiểm thử bảo mật có thể dùng hộp trắng (Static Code Analysis) nhưng bản thân định nghĩa hộp trắng rộng hơn, bao gồm kiểm tra logic cấu trúc code.",
      "d": "Sai. Giao diện người dùng thường được kiểm thử bằng phương pháp hộp đen."
    }
  },
  {
    "id": 84,
    "question": "Phương pháp kiểm thử hộp xám là gì:",
    "options": [
      {
        "key": "a",
        "text": "Kết hợp giữa kiểm thử hộp đen và kiểm thử hộp trắng"
      },
      {
        "key": "b",
        "text": "Kiểm thử hiệu suất hệ thống"
      },
      {
        "key": "c",
        "text": "Kiểm thử tính bảo mật"
      },
      {
        "key": "d",
        "text": "Kiểm thử giao diện người dùng"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử hộp xám (Gray-box Testing) là sự kết hợp giữa hộp đen và hộp trắng. Tester có kiến thức nhất định về cấu trúc dữ liệu hoặc kiến trúc bên trong hệ thống để thiết kế các kịch bản kiểm thử hộp đen hiệu quả hơn.",
      "b": "Sai. Kiểm thử hiệu suất là một loại kiểm thử phi chức năng, không phải định nghĩa của phương pháp kiểm thử hộp xám.",
      "c": "Sai. Kiểm thử bảo mật có thể áp dụng hộp xám nhưng bảo mật không phải định nghĩa của hộp xám.",
      "d": "Sai. Kiểm thử giao diện người dùng chủ yếu dựa trên hộp đen."
    }
  },
  {
    "id": 85,
    "question": "Mục tiêu của kiểm thử validation là gì:",
    "options": [
      {
        "key": "a",
        "text": "Để chỉ ra rằng phần mềm thỏa mãn các yêu cầu đưa ra"
      },
      {
        "key": "b",
        "text": "Để tìm ra các lỗi của phần mềm"
      },
      {
        "key": "c",
        "text": "Để giảm chi phí phát triển"
      },
      {
        "key": "d",
        "text": "Để tăng tốc độ lập trình"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử Validation (Xác nhận) hướng đến mục tiêu chứng minh phần mềm đáp ứng đầy đủ và đúng đắn các yêu cầu và mong đợi thực tế của khách hàng (Are we building the right product?).",
      "b": "Sai. Tìm ra các lỗi của phần mềm là mục tiêu chính của kiểm thử defect (Defect testing).",
      "c": "Sai. Kiểm thử validation là giai đoạn cuối, không trực tiếp giảm chi phí phát triển mà chỉ giúp tránh bàn giao sản phẩm sai yêu cầu.",
      "d": "Sai. Kiểm thử validation diễn ra sau khi lập trình xong, không thể tăng tốc độ viết mã."
    }
  },
  {
    "id": 86,
    "question": "Mục tiêu của kiểm thử defect là gì:",
    "options": [
      {
        "key": "a",
        "text": "Để tìm ra các tình huống mà phần mềm không hoạt động đúng như mong đợi"
      },
      {
        "key": "b",
        "text": "Để chỉ ra rằng phần mềm thỏa mãn các yêu cầu đưa ra"
      },
      {
        "key": "c",
        "text": "Để giảm chi phí phát triển"
      },
      {
        "key": "d",
        "text": "Để làm hài lòng khách hàng"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử defect (Defect Testing) được thiết kế có chủ ý nhằm tìm ra các trường hợp biên, các kịch bản bất thường khiến phần mềm bị lỗi hoặc hoạt động sai lệch so với mong muốn.",
      "b": "Sai. Chỉ ra phần mềm thỏa mãn yêu cầu là mục tiêu của kiểm thử xác nhận (Validation Testing).",
      "c": "Sai. Kiểm thử defect giúp phát hiện lỗi để sửa, bản thân nó không làm giảm chi phí phát triển trực tiếp.",
      "d": "Sai. Làm hài lòng khách hàng là mục tiêu chung của sản phẩm, không phải mục tiêu kỹ thuật cụ thể của kiểm thử defect."
    }
  },
  {
    "id": 87,
    "question": "Tại sao cần kiểm tra kết quả của việc kiểm thử:",
    "options": [
      {
        "key": "a",
        "text": "Để tìm ra lỗi và các bất thường"
      },
      {
        "key": "b",
        "text": "Để lưu trữ dữ liệu người dùng"
      },
      {
        "key": "c",
        "text": "Để phân tích thị trường"
      },
      {
        "key": "d",
        "text": "Để tăng tốc độ phát triển phần mềm"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Việc đối chiếu kết quả thực tế (Actual result) với kết quả mong đợi (Expected result) sau khi chạy test case là bắt buộc để phát hiện xem hệ thống có lỗi hoặc các hành vi bất thường nào không.",
      "b": "Sai. Kiểm tra kết quả kiểm thử không có chức năng lưu trữ dữ liệu người dùng của hệ thống.",
      "c": "Sai. Phân tích thị trường là hoạt động kinh doanh, không liên quan đến việc kiểm tra kết quả test.",
      "d": "Sai. Việc đối chiếu và kiểm tra kết quả test tốn thêm thời gian của dự án chứ không trực tiếp tăng tốc độ code."
    }
  },
  {
    "id": 88,
    "question": "Kiểm thử người dùng tập trung vào điều gì:",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử phần mềm bởi người dùng cuối"
      },
      {
        "key": "b",
        "text": "Kiểm thử tính bảo mật"
      },
      {
        "key": "c",
        "text": "Kiểm thử hiệu suất hệ thống"
      },
      {
        "key": "d",
        "text": "Kiểm thử giao diện người dùng"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử người dùng (User Testing) là quá trình để người dùng thực sự (hoặc khách hàng) trải nghiệm và đánh giá phần mềm trong môi trường thực tế của họ nhằm xác nhận hệ thống hoạt động phù hợp với quy trình nghiệp vụ hàng ngày.",
      "b": "Sai. Kiểm thử bảo mật do các chuyên gia an ninh thông tin thực hiện.",
      "c": "Sai. Kiểm thử hiệu suất hệ thống cần các công cụ giả lập tải chuyên nghiệp, không do người dùng cuối thực hiện thủ công.",
      "d": "Sai. Kiểm thử giao diện người dùng (UI/UX) là hoạt động đánh giá thiết kế, còn kiểm thử người dùng tập trung vào toàn bộ trải nghiệm nghiệp vụ."
    }
  },
  {
    "id": 89,
    "question": "Cải tiến quy trình phần mềm bao gồm gì:",
    "options": [
      {
        "key": "a",
        "text": "Cải tiến các phương pháp phát triển và kiểm thử phần mềm"
      },
      {
        "key": "b",
        "text": "Tăng tốc độ lập trình"
      },
      {
        "key": "c",
        "text": "Giảm chi phí phát triển"
      },
      {
        "key": "d",
        "text": "Tập trung vào giao diện người dùng"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Cải tiến quy trình phần mềm (Software Process Improvement - SPI) là việc tối ưu hóa các quy trình, phương pháp phát triển và hoạt động kiểm thử (như áp dụng Agile/Scrum, CI/CD, tự động hóa) để nâng cao chất lượng sản phẩm ổn định.",
      "b": "Sai. Tăng tốc độ lập trình chỉ là kết quả gián tiếp khi quy trình làm việc được tối ưu hóa tốt.",
      "c": "Sai. Cải tiến quy trình đòi hỏi đầu tư chi phí đào tạo và công cụ ban đầu, không trực tiếp giảm chi phí phát triển ngay lập tức.",
      "d": "Sai. Tập trung vào giao diện người dùng chỉ là một khía cạnh thiết kế sản phẩm, không phải cải tiến toàn bộ quy trình phát triển."
    }
  },
  {
    "id": 90,
    "question": "Bảo trì phần mềm bao gồm gì:",
    "options": [
      {
        "key": "a",
        "text": "Sửa lỗi và nâng cấp phần mềm sau khi phát hành"
      },
      {
        "key": "b",
        "text": "Thiết kế giao diện người dùng"
      },
      {
        "key": "c",
        "text": "Viết tài liệu hướng dẫn"
      },
      {
        "key": "d",
        "text": "Tạo lập báo cáo phân tích"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Bảo trì phần mềm (Software Maintenance) bao gồm các hoạt động sửa các lỗi phát sinh (corrective), tối ưu hóa hiệu năng (perfective), thích ứng môi trường mới (adaptive) và nâng cấp tính năng sau khi sản phẩm đã được bàn giao vận hành.",
      "b": "Sai. Thiết kế giao diện người dùng thuộc giai đoạn thiết kế ban đầu trước khi phát hành sản phẩm.",
      "c": "Sai. Viết tài liệu hướng dẫn là hoạt động hỗ trợ chuyển giao, không phải nội dung cốt lõi của hoạt động bảo trì kỹ thuật.",
      "d": "Sai. Báo cáo phân tích hệ thống được lập ở giai đoạn khởi đầu dự án."
    }
  },
  {
    "id": 91,
    "question": "Mục đích của việc kiểm thử bản release là gì:",
    "options": [
      {
        "key": "a",
        "text": "Để đảm bảo phần mềm hoạt động đúng như mong đợi trước khi phát hành"
      },
      {
        "key": "b",
        "text": "Để giảm chi phí phát triển"
      },
      {
        "key": "c",
        "text": "Để tăng tốc độ lập trình"
      },
      {
        "key": "d",
        "text": "Để làm hài lòng khách hàng"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử bản release (Release Testing) nhằm xác nhận phiên bản phần mềm cuối cùng đã đạt đầy đủ các tiêu chuẩn chất lượng, chạy ổn định và không chứa lỗi nghiêm trọng trước khi bàn giao cho người dùng.",
      "b": "Sai. Kiểm thử release được thực hiện ở cuối vòng đời phát triển nên không trực tiếp giảm chi phí viết code trước đó.",
      "c": "Sai. Hoạt động kiểm thử release diễn ra sau khi đã đóng băng mã nguồn (code freeze), không ảnh hưởng đến tốc độ lập trình.",
      "d": "Sai. Làm hài lòng khách hàng là mục tiêu bao trùm của toàn dự án, không phải mục tiêu kỹ thuật cụ thể của việc kiểm thử release."
    }
  },
  {
    "id": 92,
    "question": "Mục tiêu quan trọng nhất của việc xác định độ ưu tiên kiểm thử là gì?",
    "options": [
      {
        "key": "a",
        "text": "Tìm càng nhiều lỗi càng tốt"
      },
      {
        "key": "b",
        "text": "Test các khu vực rủi ro cao"
      },
      {
        "key": "c",
        "text": "Đạt được độ bao phủ cao"
      },
      {
        "key": "d",
        "text": "Cái nào dễ thì test trước"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Tìm nhiều lỗi nhỏ không quan trọng bằng việc phát hiện và ngăn chặn các lỗi nghiêm trọng làm sập hệ thống.",
      "b": "Chính xác! Xác định độ ưu tiên kiểm thử (Test Prioritization) nhằm tập trung thời gian và nguồn lực kiểm thử vào các tính năng hoặc module có mức độ rủi ro cao nhất (Risk-based testing) để hạn chế thiệt hại lớn.",
      "c": "Sai. Đạt độ bao phủ cao là mục tiêu kỹ thuật định lượng, không phản ánh trực tiếp mức độ rủi ro nghiệp vụ của hệ thống.",
      "d": "Sai. Kiểm thử phần dễ trước là cách tiếp cận thiếu khoa học, dễ dẫn đến hết thời gian trước khi kiểm thử các phần phức tạp chứa nhiều lỗi nghiêm trọng."
    }
  },
  {
    "id": 93,
    "question": "Kiểm thử được thực hiện dù khi",
    "options": [
      {
        "key": "a",
        "text": "hết thời gian"
      },
      {
        "key": "b",
        "text": "Độ tin cậy cần thiết đã đạt"
      },
      {
        "key": "c",
        "text": "không tìm thấy lỗi nào nữa"
      },
      {
        "key": "d",
        "text": "người dùng sẽ không tìm thấy bất kỳ lỗi nghiêm trọng nào"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Sai. Khi hết thời gian/ngân sách mà chưa đạt tiêu chí chất lượng tối thiểu thì việc dừng kiểm thử là bắt buộc nhưng mang tính cưỡng ép rủi ro, không phải là điều kiện khoa học.",
      "b": "Chính xác! Theo định nghĩa về tiêu chí dừng (Exit Criteria), kiểm thử có thể dừng lại khi sản phẩm đã đạt được mức độ tin cậy mong muốn (reliability target) thông qua việc đo lường mật độ lỗi và kết quả kiểm thử.",
      "c": "Sai. Không tìm thấy lỗi mới không có nghĩa là phần mềm hết lỗi (nghịch lý thuốc trừ sâu), cần thay đổi test case hoặc phương pháp chứ không đơn thuần là dừng lại.",
      "d": "Sai. Đây là giả định chủ quan, không thể đo lường và chứng minh được trong thực tế."
    }
  },
  {
    "id": 94,
    "question": "Điều nào sau đây mô tả lợi ích chính của việc xác minh (verification) sớm trong vòng đời?",
    "options": [
      {
        "key": "a",
        "text": "Nó cho phép xác định các thay đổi trong yêu cầu của người dùng"
      },
      {
        "key": "b",
        "text": "Nó tạo điều kiện cho việc thiết lập môi trường kiểm thử kịp thời"
      },
      {
        "key": "c",
        "text": "Nó làm giảm sự gia tăng của lỗi"
      },
      {
        "key": "d",
        "text": "Nó cho phép người kiểm thử sớm tham gia vào dự án"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Sai. Xác minh sớm giúp đối chiếu xem sản phẩm có làm đúng đặc tả không, còn việc thay đổi yêu cầu của người dùng thuộc pha quản lý yêu cầu.",
      "b": "Sai. Chuẩn bị môi trường kiểm thử là hoạt động hậu cần của nhóm test, không phải lợi ích kỹ thuật trực tiếp của xác minh sớm.",
      "c": "Chính xác! Xác minh sớm (như review tài liệu đặc tả, thiết kế, code trước khi test động) giúp phát hiện và sửa lỗi ngay tại giai đoạn phát sinh, ngăn chặn lỗi lan truyền và nhân lên ở các pha tiếp theo (Defect amplification).",
      "d": "Sai. Việc người kiểm thử tham gia sớm là hoạt động tổ chức nhân sự, không phải lợi ích kỹ thuật trực tiếp của việc xác minh."
    }
  },
  {
    "id": 95,
    "question": "Kiểm thử alpha là:",
    "options": [
      {
        "key": "a",
        "text": "kiểm thử sau khi phát hành được thực hiện bởi người dùng cuối"
      },
      {
        "key": "b",
        "text": "Kiểm thử đầu tiên được thực hiện"
      },
      {
        "key": "c",
        "text": "Kiểm thử trước khi phát hành được thực hiện bởi nhóm đại diện người dùng"
      },
      {
        "key": "d",
        "text": "Kiểm thử cuối cùng trước khi phát hành"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Sai. Kiểm thử sau khi phát hành được thực hiện bởi người dùng cuối trên môi trường của họ là kiểm thử Beta.",
      "b": "Sai. Kiểm thử đầu tiên thường là kiểm thử đơn vị (Unit Testing) do lập trình viên thực hiện trong quá trình code.",
      "c": "Chính xác! Kiểm thử Alpha (Alpha testing) là hình thức kiểm thử chấp nhận nội bộ, được thực hiện bởi khách hàng hoặc nhóm đại diện người dùng ngay tại môi trường phát triển của nhà sản xuất trước khi phát hành rộng rãi.",
      "d": "Sai. Kiểm thử cuối cùng trước khi phát hành thường là kiểm thử Beta hoặc Acceptance test chính thức."
    }
  },
  {
    "id": 96,
    "question": "Trong một hệ thống được thiết kế để tính thuế phải trả:\nMột nhân viên có £4000 tiền lương miễn thuế. £1500 tiếp theo bị đánh thuế 10%. £28000 tiếp theo bị đánh thuế 22%. Bất kỳ số tiền còn lại sẽ bị đánh thuế ở mức 40%.\nNhóm nào trong số các nhóm sẽ rơi vào cùng một lớp tương đương?",
    "options": [
      {
        "key": "a",
        "text": "£ 4800; £ 14000; £ 28000"
      },
      {
        "key": "b",
        "text": "£ 5200; £ 5500; £ 28000"
      },
      {
        "key": "c",
        "text": "£ 28001; £ 32000; £ 35000"
      },
      {
        "key": "d",
        "text": "£ 5800; £ 28000; £ 32000"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Sai. £4800 thuộc mức thuế 10% (£4001 - £5500), £14000 thuộc mức 22% (£5501 - £33500), £28000 thuộc mức 22%. Chúng không nằm trong cùng một lớp tương đương.",
      "b": "Sai. £5200 thuộc mức 10%, £5500 thuộc mức 10%, nhưng £28000 thuộc mức 22%.",
      "c": "Sai. £28001 thuộc mức 22% (vì £4000 + £1500 + £28000 = £33500 mới là mốc đánh thuế 40%), £32000 thuộc mức 22%, nhưng £35000 thuộc mức 40%.",
      "d": "Chính xác! Các khoảng tương đương của tổng tiền lương là: Lớp 1 (miễn thuế): <= £4000. Lớp 2 (thuế 10%): £4001 - £5500. Lớp 3 (thuế 22%): £5501 - £33500. Lớp 4 (thuế 40%): >= £33501. Ba giá trị £5800, £28000, và £32000 đều nằm trong khoảng Lớp 3 [£5501 - £33500], do đó chúng thuộc cùng một lớp tương đương."
    }
  },
  {
    "id": 97,
    "question": "Điều quan trọng nhất về thiết kế kiểm thử sớm là:",
    "options": [
      {
        "key": "a",
        "text": "Làm cho việc chuẩn bị kiểm thử dễ dàng hơn"
      },
      {
        "key": "b",
        "text": "Giúp việc kiểm thử nhanh hơn"
      },
      {
        "key": "c",
        "text": "Có thể ngăn chặn sự nhân lên của lỗi"
      },
      {
        "key": "d",
        "text": "Giúp tìm ra tất cả các lỗi"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Sai. Chuẩn bị dễ dàng hơn chỉ là một lợi ích nhỏ về mặt quy trình, không phải ý nghĩa quan trọng nhất.",
      "b": "Sai. Thiết kế test case sớm không chắc chắn làm cho quá trình chạy test nhanh hơn nếu hệ thống vẫn nhiều lỗi.",
      "c": "Chính xác! Thiết kế kiểm thử sớm (Early test design) giúp rà soát tài liệu đặc tả và thiết kế ngay từ đầu, từ đó phát hiện sớm các mâu thuẫn, sai sót logic và ngăn chặn lỗi nhân lên trong giai đoạn viết code tiếp theo.",
      "d": "Sai. Không có kỹ thuật nào có thể giúp tìm ra toàn bộ 100% các lỗi của phần mềm."
    }
  },
  {
    "id": 98,
    "question": "Phát biểu nào sau đây là phát biểu đúng về review?",
    "options": [
      {
        "key": "a",
        "text": "Review không thể thực hiện dựa trên thông số kỹ thuật yêu cầu của người dùng"
      },
      {
        "key": "b",
        "text": "Review là cách kiểm tra mã kém hiệu quả nhất"
      },
      {
        "key": "c",
        "text": "Review không có khả năng tìm ra lỗi trong kế hoạch kiểm thử"
      },
      {
        "key": "d",
        "text": "Review được thực hiện dựa theo thông số kỹ thuật, code và kế hoạch kiểm thử"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Sai. Thông số kỹ thuật yêu cầu của người dùng (SRS) chính là tài liệu quan trọng nhất cần được review sớm để tránh hiểu sai yêu cầu.",
      "b": "Sai. Review (kiểm thử tĩnh) là một trong những phương pháp phát hiện lỗi mã nguồn sớm và cực kỳ hiệu quả, tiết kiệm chi phí.",
      "c": "Sai. Hoàn toàn có thể review kế hoạch kiểm thử (Test Plan review) để tìm ra các thiếu sót trong phạm vi test, tài nguyên hay lịch trình.",
      "d": "Chính xác! Review (Kiểm thử tĩnh) là hoạt động đánh giá thủ công có thể áp dụng cho mọi loại sản phẩm trung gian trong dự án phần mềm, bao gồm tài liệu đặc tả, mã nguồn và cả tài liệu kế hoạch test."
    }
  },
  {
    "id": 99,
    "question": "Các test case được thiết kế khi nào?",
    "options": [
      {
        "key": "a",
        "text": "Khi thực thi kiểm thử"
      },
      {
        "key": "b",
        "text": "Khi lập kế hoạch kiểm thử"
      },
      {
        "key": "c",
        "text": "Khi cấu hình môi trường kiểm thử"
      },
      {
        "key": "d",
        "text": "Khi phân tích và thiết kế kiểm thử"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Sai. Khi thực thi kiểm thử (Test Execution) là lúc ta chạy các test case đã có và ghi nhận kết quả, không phải lúc bắt đầu đi thiết kế chúng.",
      "b": "Sai. Khi lập kế hoạch kiểm thử (Test Planning), ta xác định phạm vi, mục tiêu, tài nguyên và lịch trình chứ chưa đi vào thiết kế chi tiết từng ca kiểm thử.",
      "c": "Sai. Cấu hình môi trường là khâu chuẩn bị hạ tầng kỹ thuật để chạy test.",
      "d": "Chính xác! Theo quy trình kiểm thử phần mềm chuẩn (ISTQB), các ca kiểm thử (test cases) được xây dựng chi tiết trong giai đoạn Phân tích và Thiết kế kiểm thử (Test Analysis & Design)."
    }
  },
  {
    "id": 100,
    "question": "Nếu kết quả mong đợi (trong test case) không được xác định thì:",
    "options": [
      {
        "key": "a",
        "text": "Chúng ta không thể chạy kiểm thử"
      },
      {
        "key": "b",
        "text": "Có thể khó lặp lại bài kiểm thử"
      },
      {
        "key": "c",
        "text": "Có thể khó xác định xem bài kiểm thử là đạt hay không đạt"
      },
      {
        "key": "d",
        "text": "Chúng ta không thể nhập tự động đầu vào của người dùng"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Sai. Ta vẫn có thể chạy test case bằng cách nhập dữ liệu vào, nhưng sẽ gặp khó khăn ở khâu đánh giá kết quả.",
      "b": "Sai. Việc lặp lại test case phụ thuộc vào mô tả các bước thực hiện (Test steps) và dữ liệu đầu vào chứ không phụ thuộc vào kết quả mong đợi.",
      "c": "Chính xác! Kết quả mong đợi (Expected Result) là căn cứ duy nhất để đối chiếu với kết quả thực tế (Actual Result). Nếu không xác định rõ kết quả mong đợi từ trước, người kiểm thử sẽ khó đánh giá xem hệ thống chạy đúng (Pass) hay chạy sai (Fail).",
      "d": "Sai. Việc tự động hóa nhập liệu đầu vào phụ thuộc vào công cụ test tool và kịch bản giả lập, không phụ thuộc trực tiếp vào việc định nghĩa kết quả mong đợi."
    }
  },
  {
    "id": 101,
    "question": "Xác minh (verification) là:",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử xem chúng ta có đang xây dựng hệ thống có phù hợp không"
      },
      {
        "key": "b",
        "text": "Kiểm thử xem chúng ta có đang xây dựng hệ thống đúng cách không"
      },
      {
        "key": "c",
        "text": "Được thực hiện bởi một nhóm kiểm thử độc lập"
      },
      {
        "key": "d",
        "text": "Đảm bảo rằng đó là những gì người dùng thực sự muốn"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Kiểm thử xem chúng ta có đang xây dựng hệ thống đúng cách không\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Đáp án đúng là: **Kiểm thử xem chúng ta có đang xây dựng hệ thống đúng cách không**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Kiểm thử xem chúng ta có đang xây dựng hệ thống đúng cách không\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Kiểm thử xem chúng ta có đang xây dựng hệ thống đúng cách không\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 102,
    "question": "Khi kiểm thử hệ thống tính điểm, tester xác định rằng tất cả các điểm từ 90 đến 100 sẽ mang lại kết quả A, nhưng điểm dưới 90 sẽ không được điểm A. Phương pháp phân tích này được gọi là:",
    "options": [
      {
        "key": "a",
        "text": "Phân vùng tương đương"
      },
      {
        "key": "b",
        "text": "Phân tích giá trị ranh giới"
      },
      {
        "key": "c",
        "text": "Bảng quyết định"
      },
      {
        "key": "d",
        "text": "Phân tích lại"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Đáp án đúng là: **Phân vùng tương đương**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Phân vùng tương đương\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Phân vùng tương đương\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Phân vùng tương đương\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 103,
    "question": "Phát biểu nào sau đây đúng với kiểm thử beta",
    "options": [
      {
        "key": "a",
        "text": "Được thực hiện bởi coder"
      },
      {
        "key": "b",
        "text": "Được thực hiện bởi các chuyên gia"
      },
      {
        "key": "c",
        "text": "Được thực hiện bởi người dùng cuối"
      },
      {
        "key": "d",
        "text": "Được thực hiện bởi tester"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Được thực hiện bởi người dùng cuối\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Được thực hiện bởi người dùng cuối\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Kiểm thử chấp nhận (Acceptance Testing) là mức kiểm thử cuối cùng để xác định xem hệ thống đã sẵn sàng bàn giao cho người dùng chưa, thường dựa trên yêu cầu nghiệp vụ thực tế của khách hàng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Được thực hiện bởi người dùng cuối\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 104,
    "question": "Phát biểu nào sau đây về tiêu chuẩn component testing là sai:",
    "options": [
      {
        "key": "a",
        "text": "Các kỹ thuật kiểm thử hộp đen đều có một kỹ thuật đo lường liên quan"
      },
      {
        "key": "b",
        "text": "Các kỹ thuật kiểm thử hộp trắng đều có một kỹ thuật đo lường liên quan"
      },
      {
        "key": "c",
        "text": "Độ phức tạp chu trình không phải là một kỹ thuật do kiểm thử"
      },
      {
        "key": "d",
        "text": "Các kỹ thuật đo lường kiểm thử hộp trắng đều có một kỹ thuật thiết kế kiểm thử liên quan"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Độ phức tạp chu trình không phải là một kỹ thuật do kiểm thử\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Độ phức tạp chu trình không phải là một kỹ thuật do kiểm thử\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Đáp án đúng là: **Độ phức tạp chu trình không phải là một kỹ thuật do kiểm thử**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Độ phức tạp chu trình không phải là một kỹ thuật do kiểm thử\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 105,
    "question": "Phát biểu nào sau đây đúng về kết quả mong đợi.",
    "options": [
      {
        "key": "a",
        "text": "Chỉ quan trọng trong kiểm thử hệ thống"
      },
      {
        "key": "b",
        "text": "Chỉ được sử dụng trong kiểm thử đơn vị"
      },
      {
        "key": "c",
        "text": "Không bao giờ được xác định trước"
      },
      {
        "key": "d",
        "text": "Hữu ích nhất khi được xác định trước"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Hữu ích nhất khi được xác định trước\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Hữu ích nhất khi được xác định trước\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Hữu ích nhất khi được xác định trước\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Đáp án đúng là: **Hữu ích nhất khi được xác định trước**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm."
    }
  },
  {
    "id": 106,
    "question": "Given the Following program\nIF X &lt; Y\nTHEN Statement 1;\nELSE IF Y &gt;= Z\nTHEN Statement 2;\nEND\nĐộ phức tạp chu trình là bao nhiêu?",
    "options": [
      {
        "key": "a",
        "text": "2"
      },
      {
        "key": "b",
        "text": "3"
      },
      {
        "key": "c",
        "text": "4"
      },
      {
        "key": "d",
        "text": "5"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"3\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Độ phức tạp chu trình (Cyclomatic Complexity) đo lường số lượng đường đi độc lập tuyến tính qua đồ thị dòng điều khiển (CFG) của chương trình, giúp xác định số lượng test case tối thiểu cần để đạt 100% phủ nhánh.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"3\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"3\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 107,
    "question": "Chúng ta có thể tìm thấy điều kiện dừng kiểm thử trong tài liệu nào.",
    "options": [
      {
        "key": "a",
        "text": "Báo cáo kết quả kiểm thử"
      },
      {
        "key": "b",
        "text": "Test suite"
      },
      {
        "key": "c",
        "text": "Test case"
      },
      {
        "key": "d",
        "text": "Test plan"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Test plan\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Test plan\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Test plan\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Đáp án đúng là: **Test plan**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm."
    }
  },
  {
    "id": 108,
    "question": "Sau giai đoạn nào, chúng ta có thể tiến hành kiểm thử hộp trắng?",
    "options": [
      {
        "key": "a",
        "text": "Sau giai đoạn code"
      },
      {
        "key": "b",
        "text": "Sau giai đoạn thiết kế"
      },
      {
        "key": "c",
        "text": "Sau khi tạo SRS"
      },
      {
        "key": "d",
        "text": "Sau giai đoạn cài đặt"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử hộp trắng (White-box testing) dựa trên kiến thức về mã nguồn, cấu trúc thuật toán bên trong để kiểm tra các đường chạy (paths), nhánh quyết định (branches), và câu lệnh (statements) của chương trình.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Sau giai đoạn code\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Sau giai đoạn code\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Sau giai đoạn code\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 109,
    "question": "Lý do chính để kiểm thử phần mềm trước khi phát hành là gì?",
    "options": [
      {
        "key": "a",
        "text": "để cho thấy rằng hệ thống sẽ hoạt động sau khi phát hành"
      },
      {
        "key": "b",
        "text": "để quyết định khi nào phần mềm có đủ chất lượng để phát hành"
      },
      {
        "key": "c",
        "text": "để tìm càng nhiều lỗi càng tốt trước khi phát hành"
      },
      {
        "key": "d",
        "text": "để cung cấp thông tin cho một quyết định dựa trên rủi ro về việc phát hành"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"để cung cấp thông tin cho một quyết định dựa trên rủi ro về việc phát hành\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"để cung cấp thông tin cho một quyết định dựa trên rủi ro về việc phát hành\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"để cung cấp thông tin cho một quyết định dựa trên rủi ro về việc phát hành\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Đáp án đúng là: **để cung cấp thông tin cho một quyết định dựa trên rủi ro về việc phát hành**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm."
    }
  },
  {
    "id": 110,
    "question": "Phát biểu nào sau đây đúng về độ bao phủ",
    "options": [
      {
        "key": "a",
        "text": "Không liên quan gì đến thử nghiệm"
      },
      {
        "key": "b",
        "text": "Là một thước đo về tính kỹ lưỡng của thử nghiệm"
      },
      {
        "key": "c",
        "text": "Độ phủ nhánh phải là bắt buộc đối với tất cả phần mềm"
      },
      {
        "key": "d",
        "text": "Chỉ có thể được áp dụng trong kiểm thử đơn vị hoặc mô-đun, không áp dụng trong kiểm thử hệ thống"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Là một thước đo về tính kỹ lưỡng của thử nghiệm\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Độ bao phủ kiểm thử (Test Coverage) là tỷ lệ phần trăm các thành phần cấu trúc (lệnh, quyết định, nhánh) được thực thi bởi bộ ca kiểm thử. Độ bao phủ càng cao thì độ tin cậy của bộ kiểm thử càng cao.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Là một thước đo về tính kỹ lưỡng của thử nghiệm\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Là một thước đo về tính kỹ lưỡng của thử nghiệm\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 111,
    "question": "Lỗi nào trong các lỗi sau tốn chi phí khắc phục nhất",
    "options": [
      {
        "key": "a",
        "text": "Lỗi trong đặc tả chương trình"
      },
      {
        "key": "b",
        "text": "Lỗi trong code"
      },
      {
        "key": "c",
        "text": "Lỗi trong yêu cầu"
      },
      {
        "key": "d",
        "text": "Lỗi trong thiết kế"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Lỗi trong yêu cầu\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Lỗi trong yêu cầu\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Đáp án đúng là: **Lỗi trong yêu cầu**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Lỗi trong yêu cầu\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 112,
    "question": "Mục tiêu chính khi review một giao phẩm phần mềm là gì?",
    "options": [
      {
        "key": "a",
        "text": "Để xác định các lỗi tiềm ẩn bằng cách sử dụng đặc tả kiểm thử"
      },
      {
        "key": "b",
        "text": "Để xác định các (defect) khiếm khuyết trong bất kỳ sản phẩm công việc phần mềm nào"
      },
      {
        "key": "c",
        "text": "Để xác định các lỗi chính tả trong một đặc tả yêu cầu"
      },
      {
        "key": "d",
        "text": "Để xác định code viết không theo chuẩn"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Để xác định các (defect) khiếm khuyết trong bất kỳ sản phẩm công việc phần mềm nào\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Đáp án đúng là: **Để xác định các (defect) khiếm khuyết trong bất kỳ sản phẩm công việc phần mềm nào**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Để xác định các (defect) khiếm khuyết trong bất kỳ sản phẩm công việc phần mềm nào\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Để xác định các (defect) khiếm khuyết trong bất kỳ sản phẩm công việc phần mềm nào\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 113,
    "question": "Việc xác định tiêu chí dừng kiểm thử được thực hiện khi nào?",
    "options": [
      {
        "key": "a",
        "text": "Trong khi lập kế hoạch kiểm thử"
      },
      {
        "key": "b",
        "text": "Khi đánh giá các tiêu chí dừng và lập báo cáo"
      },
      {
        "key": "c",
        "text": "Khi đóng quá trình kiểm thử"
      },
      {
        "key": "d",
        "text": "Khi kiểm soát quá trình kiểm thử"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Đáp án đúng là: **Trong khi lập kế hoạch kiểm thử**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Trong khi lập kế hoạch kiểm thử\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Trong khi lập kế hoạch kiểm thử\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Trong khi lập kế hoạch kiểm thử\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 114,
    "question": "Cho đoạn mã sau, cần tối thiểu bao nhiêu test case để phủ quyết định 100%?\nif width &gt; length\nthen\nbiggest_dimension = width\nif height &gt; width then\nbiggest_dimension = height\nend_if\nelse\nbiggest_dimension = length\nif height &gt; length then\nbiggest_dimension = height\nend_if\nend_if",
    "options": [
      {
        "key": "a",
        "text": "3"
      },
      {
        "key": "b",
        "text": "4"
      },
      {
        "key": "c",
        "text": "2"
      },
      {
        "key": "d",
        "text": "1"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"4\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Đáp án đúng là: **4**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"4\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"4\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 115,
    "question": "Bạn đã thiết kế các test case để đạt 100% phủ lệnh và 100% phủ quyết định cho đoạn mã sau:\nif width &gt; length\nthen\nbiggest_dimension = width\nelse\nbiggest_dimension = length\nend_if\nPhần sau được thêm vào cuối đoạn mã ở trên\nprint \"Biggest dimension is \" &amp; biggest_dimension\nprint \"Width: \" &amp; width\nprint \"Length: \" &amp; length\nHỏi cần thêm bao nhiêu test case nữa để đạt được yêu cầu?",
    "options": [
      {
        "key": "a",
        "text": "Thêm 1 test case nữa để đạt phủ cấp 2"
      },
      {
        "key": "b",
        "text": "Thêm 2 test case nữa để phủ cấp 1 và 1 trong 2 test case đó được dùng để phủ cấp 2"
      },
      {
        "key": "c",
        "text": "Không cần thêm test case nào nữa"
      },
      {
        "key": "d",
        "text": "Thêm 1 test case nữa để đạt phủ cấp 1"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Không cần thêm test case nào nữa\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Không cần thêm test case nào nữa\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Đáp án đúng là: **Không cần thêm test case nào nữa**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Không cần thêm test case nào nữa\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 116,
    "question": "Test suite được tạo ra trong giai đoạn nào?",
    "options": [
      {
        "key": "a",
        "text": "Phân tích yêu cầu"
      },
      {
        "key": "b",
        "text": "Lập kế hoạch"
      },
      {
        "key": "c",
        "text": "Phát triển test case"
      },
      {
        "key": "d",
        "text": "Thiết lập môi trường"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Phát triển test case\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Phát triển test case\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Đáp án đúng là: **Phát triển test case**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Phát triển test case\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 117,
    "question": "Kiểm tra hệ thống nên:",
    "options": [
      {
        "key": "a",
        "text": "Chỉ kiểm các yêu cầu phi chức năng không cần kiểm các yêu cầu chức năng"
      },
      {
        "key": "b",
        "text": "Chỉ kiểm các yêu cầu phi chức năng không cần kiểm các yêu cầu chức năng"
      },
      {
        "key": "c",
        "text": "Kiểm cả yêu cầu phi chức năng và yêu cầu chức năng"
      },
      {
        "key": "d",
        "text": "Kiểm yêu cầu phi chức năng hoặc yêu cầu chức năng"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Kiểm cả yêu cầu phi chức năng và yêu cầu chức năng\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Kiểm cả yêu cầu phi chức năng và yêu cầu chức năng\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Đáp án đúng là: **Kiểm cả yêu cầu phi chức năng và yêu cầu chức năng**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Kiểm cả yêu cầu phi chức năng và yêu cầu chức năng\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 118,
    "question": "Cái nào không phải là mục tiêu kiểm thử",
    "options": [
      {
        "key": "a",
        "text": "Tìm khuyết điểm của phần mềm"
      },
      {
        "key": "b",
        "text": "Để đạt được mức độ tin tưởng về chất lượng"
      },
      {
        "key": "c",
        "text": "Ngăn ngừa khiếm khuyết"
      },
      {
        "key": "d",
        "text": "Gỡ lỗi"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Gỡ lỗi\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Gỡ lỗi\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Gỡ lỗi\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Đáp án đúng là: **Gỡ lỗi**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm."
    }
  },
  {
    "id": 119,
    "question": "Thứ tự nào sau đây phù hợp với vòng đời bug.",
    "options": [
      {
        "key": "a",
        "text": "Open, Assigned, Fixed, Closed"
      },
      {
        "key": "b",
        "text": "Open, Fixed, Assigned, Closed"
      },
      {
        "key": "c",
        "text": "Assigned, Open, Closed, Fixed"
      },
      {
        "key": "d",
        "text": "Assigned, Open, Fixed, Closed"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Đáp án đúng là: **Open, Assigned, Fixed, Closed**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Open, Assigned, Fixed, Closed\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Open, Assigned, Fixed, Closed\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Open, Assigned, Fixed, Closed\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 120,
    "question": "Phát biểu nào sau đây mô tả về kiểm thử tĩnh là sai:",
    "options": [
      {
        "key": "a",
        "text": "Kiểm tra tĩnh yêu cầu chạy các bài kiểm tra thông qua mã"
      },
      {
        "key": "b",
        "text": "Kiểm tra tĩnh bao gồm kiểm tra bàn"
      },
      {
        "key": "c",
        "text": "Kiểm tra tĩnh bao gồm các kỹ thuật như xem xét và kiểm tra"
      },
      {
        "key": "d",
        "text": "Kiểm tra tĩnh có thể cho các phép đo như độ phức tạp chu kỳ"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử tĩnh (Static testing) là phương pháp xem xét mã nguồn, tài liệu thiết kế hoặc yêu cầu mà không cần thực thi chương trình. Nó giúp phát hiện lỗi cú pháp, cấu trúc lập trình và lỗi logic sớm trong vòng đời, tiết kiệm đáng kể chi phí sửa lỗi.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Kiểm tra tĩnh yêu cầu chạy các bài kiểm tra thông qua mã\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Kiểm tra tĩnh yêu cầu chạy các bài kiểm tra thông qua mã\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Kiểm tra tĩnh yêu cầu chạy các bài kiểm tra thông qua mã\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 121,
    "question": "Phát biểu nào sau đây không đúng về kiểm thử hồi quy",
    "options": [
      {
        "key": "a",
        "text": "Để đảm bảo phần mềm sau khi sửa chữa không gặp thêm lỗi mới có liên quan"
      },
      {
        "key": "b",
        "text": "Để đảm bảo các test case mới không trùng với test case cũ"
      },
      {
        "key": "c",
        "text": "Để đảm bảo phiên bản mới nhất của phần mềm không làm ảnh hưởng đến các chức năng đang hoạt động tốt"
      },
      {
        "key": "d",
        "text": "Để tiết kiệm công sức phải kiểm thử lại toàn bộ hệ thống"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Để đảm bảo phiên bản mới nhất của phần mềm không làm ảnh hưởng đến các chức năng đang hoạt động tốt\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Để đảm bảo phiên bản mới nhất của phần mềm không làm ảnh hưởng đến các chức năng đang hoạt động tốt\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Kiểm thử hồi quy (Regression Testing) được thực hiện sau khi mã nguồn có sự thay đổi (như sửa lỗi, tái cấu trúc, nâng cấp) để đảm bảo các thay đổi mới không làm phát sinh lỗi ở các chức năng vốn đang hoạt động ổn định.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Để đảm bảo phiên bản mới nhất của phần mềm không làm ảnh hưởng đến các chức năng đang hoạt động tốt\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 122,
    "question": "Phát biểu nào sau đây phù hợp nhất với code review",
    "options": [
      {
        "key": "a",
        "text": "Chạy các test case để phát hiện các vấn đề của code"
      },
      {
        "key": "b",
        "text": "Chạy chương trình bằng tay để tìm lỗi"
      },
      {
        "key": "c",
        "text": "Dựa vào sơ đồ dòng dữ liệu để tìm lỗi"
      },
      {
        "key": "d",
        "text": "So sánh với tài liệu thiết kế để xác định code chưa đạt"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"So sánh với tài liệu thiết kế để xác định code chưa đạt\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"So sánh với tài liệu thiết kế để xác định code chưa đạt\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"So sánh với tài liệu thiết kế để xác định code chưa đạt\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Đáp án đúng là: **So sánh với tài liệu thiết kế để xác định code chưa đạt**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm."
    }
  },
  {
    "id": 123,
    "question": "Các bước cơ bản của quá trình kiểm thử dòng điều khiển là",
    "options": [
      {
        "key": "a",
        "text": "Tính độ phức tạp chu trình để xác định loại đồ thị dòng điều khiển, xác định đường thi hành, sinh test case dựa vào đường thi hành"
      },
      {
        "key": "b",
        "text": "Sinh đồ thị các test case từ code với độ đo cần kiểm thử, thực hiện các test case"
      },
      {
        "key": "c",
        "text": "Sinh đồ thị dòng điều khiển CFG với tiêu chỉ độ đo cần kiểm thử, sinh các test case, thực hiện các test case"
      },
      {
        "key": "d",
        "text": "Sinh đồ thị dòng điều khiển CFG với tiêu chỉ độ đo cần kiểm thử, sinh các đường thi hành, sinh test case, thực hiện các test case"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Sinh đồ thị dòng điều khiển CFG với tiêu chỉ độ đo cần kiểm thử, sinh các đường thi hành, sinh test case, thực hiện các test case\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Sinh đồ thị dòng điều khiển CFG với tiêu chỉ độ đo cần kiểm thử, sinh các đường thi hành, sinh test case, thực hiện các test case\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Sinh đồ thị dòng điều khiển CFG với tiêu chỉ độ đo cần kiểm thử, sinh các đường thi hành, sinh test case, thực hiện các test case\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Đáp án đúng là: **Sinh đồ thị dòng điều khiển CFG với tiêu chỉ độ đo cần kiểm thử, sinh các đường thi hành, sinh test case, thực hiện các test case**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm."
    }
  },
  {
    "id": 124,
    "question": "Định nghĩa nào là phù hợp cho test case",
    "options": [
      {
        "key": "a",
        "text": "Là một cơ chế xác minh tính chính xác của kết quả đầu ra"
      },
      {
        "key": "b",
        "text": "Là một cơ sở nguyên tắc về đo lường và thống kê"
      },
      {
        "key": "c",
        "text": "Là một tập giá trị đầu vào và đầu ra mong đợi"
      },
      {
        "key": "d",
        "text": "Là một trạng thái của hệ thống"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Là một tập giá trị đầu vào và đầu ra mong đợi\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Là một tập giá trị đầu vào và đầu ra mong đợi\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Đáp án đúng là: **Là một tập giá trị đầu vào và đầu ra mong đợi**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Là một tập giá trị đầu vào và đầu ra mong đợi\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 125,
    "question": "Phát biểu nào đúng về mối quan hệ giữa bao phủ dòng lệnh và bao phủ quyết định",
    "options": [
      {
        "key": "a",
        "text": "Bao phủ quyết định đạt 100% sẽ đảm bảo bao phủ lệnh 100%"
      },
      {
        "key": "b",
        "text": "Bao phủ lệnh đạt 100% sẽ đảm bảo bao phủ quyết định 100%"
      },
      {
        "key": "c",
        "text": "Bao phủ lệnh đạt 50% sẽ đảm bảo bao phủ quyết định 100%"
      },
      {
        "key": "d",
        "text": "Bao phủ quyết định đạt 50% sẽ đảm bảo bao phủ lệnh 100%"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Độ bao phủ kiểm thử (Test Coverage) là tỷ lệ phần trăm các thành phần cấu trúc (lệnh, quyết định, nhánh) được thực thi bởi bộ ca kiểm thử. Độ bao phủ càng cao thì độ tin cậy của bộ kiểm thử càng cao.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Bao phủ quyết định đạt 100% sẽ đảm bảo bao phủ lệnh 100%\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Bao phủ quyết định đạt 100% sẽ đảm bảo bao phủ lệnh 100%\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Bao phủ quyết định đạt 100% sẽ đảm bảo bao phủ lệnh 100%\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 126,
    "question": "Công ty X muốn xây dựng hàm tính thưởng của một nhân viên dựa vào số năm làm việc với các mức sau:\nÍt hơn hoặc bằng 2 năm: 1 triệu\nNhiều hơn 2 năm và ít hơn 5 năm: 2 triệu\nNhiều hơn 5 năm và ít hơn 10 năm: 3 triệu\nTrên 10 năm: 4 triệu\nĐể kiểm thử hàm tính thưởng của công ty X theo phương pháp phân hoạch tương đương, cần tối thiểu bao nhiêu test case?",
    "options": [
      {
        "key": "a",
        "text": "2"
      },
      {
        "key": "b",
        "text": "3"
      },
      {
        "key": "c",
        "text": "4"
      },
      {
        "key": "d",
        "text": "5"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"4\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"4\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Đáp án đúng là: **4**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"4\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 127,
    "question": "Thông tin nào không có trong báo cáo kết quả kiểm thử",
    "options": [
      {
        "key": "a",
        "text": "Mục tiêu kiểm thử và tiêu chí để đánh giá"
      },
      {
        "key": "b",
        "text": "Các vấn đề xảy ra trong quá trình kiểm thử"
      },
      {
        "key": "c",
        "text": "So sánh tiến trình thực tế với các tiêu chí đã đặt ra"
      },
      {
        "key": "d",
        "text": "Đánh giá chất lượng của đối tượng được kiểm thử"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Đáp án đúng là: **Mục tiêu kiểm thử và tiêu chí để đánh giá**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Mục tiêu kiểm thử và tiêu chí để đánh giá\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Mục tiêu kiểm thử và tiêu chí để đánh giá\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Mục tiêu kiểm thử và tiêu chí để đánh giá\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 128,
    "question": "Kiểm thử chức năng được thực hiện khi nào?",
    "options": [
      {
        "key": "a",
        "text": "Chỉ được thực hiện ở mức kiểm thử hệ thống và kiểm thử chấp nhận"
      },
      {
        "key": "b",
        "text": "Chỉ được thực hiện ở mức kiểm thử đơn vị"
      },
      {
        "key": "c",
        "text": "Chỉ được thực hiện ở mức kiểm thử chấp nhận"
      },
      {
        "key": "d",
        "text": "Được thực hiện ở tất cả các mức kiểm thử"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Được thực hiện ở tất cả các mức kiểm thử\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Được thực hiện ở tất cả các mức kiểm thử\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Được thực hiện ở tất cả các mức kiểm thử\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Đáp án đúng là: **Được thực hiện ở tất cả các mức kiểm thử**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm."
    }
  },
  {
    "id": 129,
    "question": "Đâu không phải là mục tiêu của kiểm thử",
    "options": [
      {
        "key": "a",
        "text": "Tìm lỗi"
      },
      {
        "key": "b",
        "text": "Tăng sự tự tin về chất lượng của chương trình"
      },
      {
        "key": "c",
        "text": "Ngăn chặn lỗi"
      },
      {
        "key": "d",
        "text": "Tìm nguyên nhân lỗi"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Tìm nguyên nhân lỗi\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Tìm nguyên nhân lỗi\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Tìm nguyên nhân lỗi\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Đáp án đúng là: **Tìm nguyên nhân lỗi**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm."
    }
  },
  {
    "id": 130,
    "question": "Kiểm thử tĩnh được thực hiện trong giai đoạn nào?",
    "options": [
      {
        "key": "a",
        "text": "Đặc tả yêu cầu"
      },
      {
        "key": "b",
        "text": "Thiết kế"
      },
      {
        "key": "c",
        "text": "Lập trình"
      },
      {
        "key": "d",
        "text": "Tất cả các giai đoạn trên"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Tất cả các giai đoạn trên\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Tất cả các giai đoạn trên\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Tất cả các giai đoạn trên\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Kiểm thử tĩnh (Static testing) là phương pháp xem xét mã nguồn, tài liệu thiết kế hoặc yêu cầu mà không cần thực thi chương trình. Nó giúp phát hiện lỗi cú pháp, cấu trúc lập trình và lỗi logic sớm trong vòng đời, tiết kiệm đáng kể chi phí sửa lỗi."
    }
  },
  {
    "id": 131,
    "question": "“Ngụy biện không có lỗi” (absence-of-errors fallacy) nghĩa là gì?",
    "options": [
      {
        "key": "a",
        "text": "Nếu không tìm thấy lỗi thì chắc chắn không có lỗi"
      },
      {
        "key": "b",
        "text": "Nếu phần mềm ít lỗi thì chắc chắn đáp ứng nhu cầu người dùng"
      },
      {
        "key": "c",
        "text": "Dù ít/không có lỗi, phần mềm vẫn có thể không đáp ứng nhu cầu/giá trị sử dụng"
      },
      {
        "key": "d",
        "text": "Lỗi chỉ xuất hiện khi thay đổi môi trường triển khai"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Dù ít/không có lỗi, phần mềm vẫn có thể không đáp ứng nhu cầu/giá trị sử dụng\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Dù ít/không có lỗi, phần mềm vẫn có thể không đáp ứng nhu cầu/giá trị sử dụng\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Đáp án đúng là: **Dù ít/không có lỗi, phần mềm vẫn có thể không đáp ứng nhu cầu/giá trị sử dụng**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Dù ít/không có lỗi, phần mềm vẫn có thể không đáp ứng nhu cầu/giá trị sử dụng\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 132,
    "question": "Phát biểu nào mô tả đúng “exhaustive testing” (kiểm thử toàn diện)?",
    "options": [
      {
        "key": "a",
        "text": "Luôn bắt buộc với mọi dự án"
      },
      {
        "key": "b",
        "text": "Thường không khả thi vì số lượng trường hợp đầu vào/quyết định quá lớn"
      },
      {
        "key": "c",
        "text": "Chỉ áp dụng cho UI testing"
      },
      {
        "key": "d",
        "text": "Chỉ cần đạt 100% statement coverage là đủ gọi là exhaustive"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Thường không khả thi vì số lượng trường hợp đầu vào/quyết định quá lớn\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Đáp án đúng là: **Thường không khả thi vì số lượng trường hợp đầu vào/quyết định quá lớn**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Thường không khả thi vì số lượng trường hợp đầu vào/quyết định quá lớn\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Thường không khả thi vì số lượng trường hợp đầu vào/quyết định quá lớn\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 133,
    "question": "Trong Junit, khi test có tham số thì annotation nào thường dùng để truyền dữ liệu nhiều dòng (CSV) trực tiếp?",
    "options": [
      {
        "key": "a",
        "text": "@CsvSource"
      },
      {
        "key": "b",
        "text": "@ValueSource"
      },
      {
        "key": "c",
        "text": "@MethodSource"
      },
      {
        "key": "d",
        "text": "@FileSource"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Đáp án đúng là: **@CsvSource**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"@CsvSource\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"@CsvSource\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"@CsvSource\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 134,
    "question": "Để kiểm tra list chứa đúng các phần tử theo thứ tự 1,2,3, matcher phù hợp nhất là:",
    "options": [
      {
        "key": "a",
        "text": "hasItems(1,2,3)"
      },
      {
        "key": "b",
        "text": "contains(1,2,3)"
      },
      {
        "key": "c",
        "text": "containsInAnyOrder(1,2,3)"
      },
      {
        "key": "d",
        "text": "everyItem(isOneOf(1,2,3))"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"contains(1,2,3)\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Đáp án đúng là: **contains(1,2,3)**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"contains(1,2,3)\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"contains(1,2,3)\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 135,
    "question": "Trong JUnit 5, Annotation nào sau đây làm cho 1 phương thức được chạy trước phương thức test trong test class?",
    "options": [
      {
        "key": "a",
        "text": "@BeforeEach"
      },
      {
        "key": "b",
        "text": "@BeforeAll"
      },
      {
        "key": "c",
        "text": "@Before"
      },
      {
        "key": "d",
        "text": "@Before"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Đáp án đúng là: **@BeforeEach**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"@BeforeEach\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"@BeforeEach\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"@BeforeEach\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 136,
    "question": "Trong JUnit 5, Matcher nào kiểm tra chuỗi bằng nhau, bỏ qua hoa/thường?",
    "options": [
      {
        "key": "a",
        "text": "equalToIgnoreCase()"
      },
      {
        "key": "b",
        "text": "equalsIgnoreCase()"
      },
      {
        "key": "c",
        "text": "sameTextIgnoreCase()"
      },
      {
        "key": "d",
        "text": "textEqualsIgnoreCase()"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Đáp án đúng là: **equalToIgnoreCase()**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"equalToIgnoreCase()\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"equalToIgnoreCase()\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"equalToIgnoreCase()\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 137,
    "question": "Trong chiến lược kiểm thử tích hợp từ trên xuống (Top-down Integration), thành phần giả lập được sử dụng để thay thế cho các module cấp thấp chưa được phát triển gọi là gì?",
    "options": [
      {
        "key": "a",
        "text": "Driver"
      },
      {
        "key": "b",
        "text": "Stub"
      },
      {
        "key": "c",
        "text": "Dummy"
      },
      {
        "key": "d",
        "text": "Proxy"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Stub\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Kiểm thử tích hợp (Integration Testing) tập trung kiểm tra các giao tiếp (interfaces), tương tác và dòng dữ liệu qua lại giữa các module hoặc component phần mềm khác nhau.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Stub\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Stub\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 138,
    "question": "Cho đoạn mã sau, cần tối thiểu bao nhiêu test case để phủ nhánh 100%?\nint n;\ncout &lt;&lt; \"Nhap n: \";\ncin &gt;&gt; n;\nswitch (n%3)\n{\ncase 0:\ncout &lt;&lt; \"Chia het cho 3\";\nbreak;\ncase 1:\ncase 2:\ncout &lt;&lt; \"Khong chia het cho 3\";\n}",
    "options": [
      {
        "key": "a",
        "text": "2"
      },
      {
        "key": "b",
        "text": "3"
      },
      {
        "key": "c",
        "text": "1"
      },
      {
        "key": "d",
        "text": "4"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"3\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Đáp án đúng là: **3**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"3\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"3\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 139,
    "question": "Hoạt động nào dùng để kiểm tra xem đã phát triển sản phẩm theo yêu cầu của khách hàng chưa.",
    "options": [
      {
        "key": "a",
        "text": "Validation"
      },
      {
        "key": "b",
        "text": "Verification"
      },
      {
        "key": "c",
        "text": "Quality Assurance"
      },
      {
        "key": "d",
        "text": "Quality Control"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử động (Dynamic testing) yêu cầu chương trình phải chạy thực tế trên máy tính với dữ liệu đầu vào cụ thể để so sánh kết quả thực tế và kết quả mong đợi.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Validation\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Validation\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Validation\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 140,
    "question": "Annotation JUnit nào được sử dụng để đánh dấu một phương thức test có tham số?",
    "options": [
      {
        "key": "a",
        "text": "@ParametrizedTest"
      },
      {
        "key": "b",
        "text": "@Parameterized"
      },
      {
        "key": "c",
        "text": "@ParamTest"
      },
      {
        "key": "d",
        "text": "@ParameterizedTest"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"@ParameterizedTest\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"@ParameterizedTest\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"@ParameterizedTest\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Đáp án đúng là: **@ParameterizedTest**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm."
    }
  },
  {
    "id": 141,
    "question": "Cho đoạn mã sau và phát biểu nào sau đây đúng:\nint USCLN(int a, int b){\nwhile (a != b)\nif (a &gt; b)\na = a - b;\nelse\nb = b - a;\nreturn a;\n}",
    "options": [
      {
        "key": "a",
        "text": "2 test case để phủ các dòng lệnh, 2 test case để phủ nhánh"
      },
      {
        "key": "b",
        "text": "1 test case để phủ các dòng lệnh, 2 test case để phủ nhánh"
      },
      {
        "key": "c",
        "text": "2 test case để phủ các dòng lệnh, 3 test case để phủ nhánh"
      },
      {
        "key": "d",
        "text": "1 test case để phủ các dòng lệnh, 1 test case để phủ nhánh"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"1 test case để phủ các dòng lệnh, 1 test case để phủ nhánh\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"1 test case để phủ các dòng lệnh, 1 test case để phủ nhánh\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"1 test case để phủ các dòng lệnh, 1 test case để phủ nhánh\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Đáp án đúng là: **1 test case để phủ các dòng lệnh, 1 test case để phủ nhánh**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm."
    }
  },
  {
    "id": 142,
    "question": "Một hệ thống tính phí gửi xe: Miễn phí cho 15 phút đầu. 10.000đ cho mỗi giờ tiếp theo. Tối đa 200.000đ/ngày. Kỹ thuật thiết kế test case nào phù hợp nhất để kiểm tra logic nghiệp vụ này?",
    "options": [
      {
        "key": "a",
        "text": "Bảng quyết định (Decision Table Testing)"
      },
      {
        "key": "b",
        "text": "Phân tích luồng điều khiển (Control Flow Analysis)"
      },
      {
        "key": "c",
        "text": "Kiểm thử trường hợp sử dụng (Use Case Testing)"
      },
      {
        "key": "d",
        "text": "Kiểm thử chuyển đổi trạng thái (State Transition Testing)"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Đáp án đúng là: **Bảng quyết định (Decision Table Testing)**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Bảng quyết định (Decision Table Testing)\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Bảng quyết định (Decision Table Testing)\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Bảng quyết định (Decision Table Testing)\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 143,
    "question": "Cần tối thiểu bao nhiêu test case để phủ được cấp 3 đoạn mã sau:\nint f(int a, int b)\n{\nif (a &lt; 0 &amp;&amp; b &lt; 0)\nreturn 0;\nif (a &gt; b || a == b)\nreturn 1;\nreturn -1;\n}",
    "options": [
      {
        "key": "a",
        "text": "2"
      },
      {
        "key": "b",
        "text": "5"
      },
      {
        "key": "c",
        "text": "4"
      },
      {
        "key": "d",
        "text": "3"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Đáp án đúng là: **2**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"2\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"2\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"2\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 144,
    "question": "Annotation JUnit nào được sử dụng để xác định thứ tự chạy của các test case?",
    "options": [
      {
        "key": "a",
        "text": "@Step"
      },
      {
        "key": "b",
        "text": "@Order"
      },
      {
        "key": "c",
        "text": "@Important"
      },
      {
        "key": "d",
        "text": "@Display"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"@Order\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Đáp án đúng là: **@Order**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"@Order\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"@Order\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 145,
    "question": "Độ phức tạp chu trình của đoạn mã giả sau là bao nhiêu?\nint i = 1, s = 2;\ndo {\ns += i;\ncout &lt;&lt; \"i = \" &lt;&lt; i &lt;&lt; \" =&gt; s = \" &lt;&lt; s &lt;&lt; endl;\n} while (i++ &lt; 10);",
    "options": [
      {
        "key": "a",
        "text": "3"
      },
      {
        "key": "b",
        "text": "2"
      },
      {
        "key": "c",
        "text": "4"
      },
      {
        "key": "d",
        "text": "5"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"2\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Độ phức tạp chu trình (Cyclomatic Complexity) đo lường số lượng đường đi độc lập tuyến tính qua đồ thị dòng điều khiển (CFG) của chương trình, giúp xác định số lượng test case tối thiểu cần để đạt 100% phủ nhánh.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"2\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"2\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 146,
    "question": "Kiểm thử giá trị biên mạnh của hàm tính số lượng nghiệm không trùng nhau của phương trình bậc hai int f(int a, int b, int c) với ba số a, b, c có khoảng giá trị từ 1 đến 100 thì cần bao nhiêu test case",
    "options": [
      {
        "key": "a",
        "text": "13"
      },
      {
        "key": "b",
        "text": "19"
      },
      {
        "key": "c",
        "text": "9"
      },
      {
        "key": "d",
        "text": "125"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"19\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Phân tích giá trị biên (Boundary Value Analysis) là kỹ thuật kiểm thử hộp đen tập trung vào các điểm cực trị ở biên của phân vùng tương đương (như Min, Max, lân cận biên) do lỗi lập trình rất hay xảy ra tại các điểm này.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"19\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"19\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 147,
    "question": "Nguyên tắc kiểm thử “Không thể chứng minh sự tồn tại của lỗi” có ý nghĩa gì?",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử chỉ có thể phát hiện lỗi, không thể chứng minh phần mềm không có lỗi"
      },
      {
        "key": "b",
        "text": "Kiểm thử có thể loại bỏ mọi lỗi trong phần mềm"
      },
      {
        "key": "c",
        "text": "Kiểm thử giúp chứng minh phần mềm hoàn hảo"
      },
      {
        "key": "d",
        "text": "Kiểm thử chỉ cần kiểm tra giao diện người dùng"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Đáp án đúng là: **Kiểm thử chỉ có thể phát hiện lỗi, không thể chứng minh phần mềm không có lỗi**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Kiểm thử chỉ có thể phát hiện lỗi, không thể chứng minh phần mềm không có lỗi\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Kiểm thử chỉ có thể phát hiện lỗi, không thể chứng minh phần mềm không có lỗi\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Kiểm thử chỉ có thể phát hiện lỗi, không thể chứng minh phần mềm không có lỗi\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 148,
    "question": "Cái nào sau đây không phải là một trong những nguyên tắc của kiểm thử",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử càng sớm càng tốt"
      },
      {
        "key": "b",
        "text": "Lỗi thường phân bố tập trung"
      },
      {
        "key": "c",
        "text": "Nghịch lý thuốc trừ sâu"
      },
      {
        "key": "d",
        "text": "Kiểm thử toàn bộ"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Kiểm thử toàn bộ\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Kiểm thử toàn bộ\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Kiểm thử toàn bộ\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Đáp án đúng là: **Kiểm thử toàn bộ**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm."
    }
  },
  {
    "id": 149,
    "question": "Cấp độ kiểm thử nào tập trung vào sự tương tác giữa các thành phần hoặc hệ thống?",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử hệ thống (System Testing)"
      },
      {
        "key": "b",
        "text": "Kiểm thử chấp nhận (Acceptance Testing)"
      },
      {
        "key": "c",
        "text": "Kiểm thử đơn vị (Unit Testing)"
      },
      {
        "key": "d",
        "text": "Kiểm thử tích hợp (Integration Testing)"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Kiểm thử tích hợp (Integration Testing)\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Kiểm thử tích hợp (Integration Testing)\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Kiểm thử tích hợp (Integration Testing)\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Đáp án đúng là: **Kiểm thử tích hợp (Integration Testing)**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm."
    }
  },
  {
    "id": 150,
    "question": "Bạn đang test một hệ thống bán hàng online. Chi phí vận chuyển được xác định với mức giá là: dưới 5Kg là 3$, từ 5Kg đến 10Kg là 5$, trên 10Kg là 10$. Trọng lượng mà nhỏ hơn hoặc bằng 0 được xem là không hợp lệ. Xác định có bao nhiêu lớp tương đương cần thiết để test.",
    "options": [
      {
        "key": "a",
        "text": "2"
      },
      {
        "key": "b",
        "text": "3"
      },
      {
        "key": "c",
        "text": "4"
      },
      {
        "key": "d",
        "text": "5"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"4\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"4\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Đáp án đúng là: **4**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"4\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 151,
    "question": "Kỹ thuật đoán lỗi được sử dụng tốt nhất",
    "options": [
      {
        "key": "a",
        "text": "Khi tiếp cận đầu tiên để tạo ra các test case"
      },
      {
        "key": "b",
        "text": "Sau khi các kỹ thuật chính thức được áp dụng"
      },
      {
        "key": "c",
        "text": "Sau khi hệ thống hoạt động"
      },
      {
        "key": "d",
        "text": "Bởi những tester thiếu kinh nghiệm"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Sau khi các kỹ thuật chính thức được áp dụng\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Đáp án đúng là: **Sau khi các kỹ thuật chính thức được áp dụng**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Sau khi các kỹ thuật chính thức được áp dụng\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Sau khi các kỹ thuật chính thức được áp dụng\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 152,
    "question": "Cho đoạn mã giả sau, số test case tối thiểu cần có để phủ tất cả các nhánh?\nint test(int k){\nif(k&lt;=1) return -1;\nfor(int i=2; i&lt;k; i++)\nif(k%i==0) return -1;\nreturn 1;\n}",
    "options": [
      {
        "key": "a",
        "text": "Có 4 test case"
      },
      {
        "key": "b",
        "text": "Có 2 test case"
      },
      {
        "key": "c",
        "text": "Có 3 test case"
      },
      {
        "key": "d",
        "text": "Tất cả đều sai"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Có 3 test case\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Có 3 test case\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Đáp án đúng là: **Có 3 test case**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Có 3 test case\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 153,
    "question": "Đoạn mã giả: IF (Tuổi &lt; 18 OR Là_Học_Sinh == TRUE) THEN Giảm_giá = 10%. Để đạt được 100% Độ bao phủ quyết định (Decision Coverage) với số lượng test case tối thiểu, bạn cần các trường hợp nào?",
    "options": [
      {
        "key": "a",
        "text": "TC1: Tuổi=20, Là_Học_Sinh=FALSE"
      },
      {
        "key": "b",
        "text": "TC1: Tuổi=20, Là_Học_Sinh=TRUE; TC2: Tuổi=20, Là_Học_Sinh=FALSE"
      },
      {
        "key": "c",
        "text": "TC1: Tuổi=15, Là_Học_Sinh=TRUE; TC2: Tuổi=15, Là_Học_Sinh=FALSE"
      },
      {
        "key": "d",
        "text": "TC1: Tuổi=10, Là_Học_Sinh=FALSE"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"TC1: Tuổi=20, Là_Học_Sinh=TRUE; TC2: Tuổi=20, Là_Học_Sinh=FALSE\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Độ bao phủ kiểm thử (Test Coverage) là tỷ lệ phần trăm các thành phần cấu trúc (lệnh, quyết định, nhánh) được thực thi bởi bộ ca kiểm thử. Độ bao phủ càng cao thì độ tin cậy của bộ kiểm thử càng cao.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"TC1: Tuổi=20, Là_Học_Sinh=TRUE; TC2: Tuổi=20, Là_Học_Sinh=FALSE\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"TC1: Tuổi=20, Là_Học_Sinh=TRUE; TC2: Tuổi=20, Là_Học_Sinh=FALSE\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 154,
    "question": "Phát biểu nào sau đây đúng về độ bao phủ",
    "options": [
      {
        "key": "a",
        "text": "Cho biết test kỹ hay không"
      },
      {
        "key": "b",
        "text": "Không liên quan gì đến kiểm thử"
      },
      {
        "key": "c",
        "text": "Chỉ dừng test khi đạt được độ bao phủ là 100%"
      },
      {
        "key": "d",
        "text": "Số test case càng lớn thì độ bao phủ càng cao"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Độ bao phủ kiểm thử (Test Coverage) là tỷ lệ phần trăm các thành phần cấu trúc (lệnh, quyết định, nhánh) được thực thi bởi bộ ca kiểm thử. Độ bao phủ càng cao thì độ tin cậy của bộ kiểm thử càng cao.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Cho biết test kỹ hay không\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Cho biết test kỹ hay không\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Cho biết test kỹ hay không\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 155,
    "question": "Nguyên lý 'Nghịch lý thuốc trừ sâu' (Pesticide Paradox) gợi ý hành động nào sau đây?",
    "options": [
      {
        "key": "a",
        "text": "Cần thường xuyên xem xét và cập nhật bộ test case, viết thêm test case mới"
      },
      {
        "key": "b",
        "text": "Dừng kiểm thử khi đã tìm thấy đủ số lượng lỗi dự kiến"
      },
      {
        "key": "c",
        "text": "Chỉ sử dụng những test case đã tìm thấy lỗi trong quá khứ"
      },
      {
        "key": "d",
        "text": "Nên tập trung vào kiểm thử tự động hơn là thủ công"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử động (Dynamic testing) yêu cầu chương trình phải chạy thực tế trên máy tính với dữ liệu đầu vào cụ thể để so sánh kết quả thực tế và kết quả mong đợi.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Cần thường xuyên xem xét và cập nhật bộ test case, viết thêm test case mới\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Cần thường xuyên xem xét và cập nhật bộ test case, viết thêm test case mới\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Cần thường xuyên xem xét và cập nhật bộ test case, viết thêm test case mới\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 156,
    "question": "Nguồn nào sau đây là nguồn tốt nhất về “Kết quả mong đợi” cho các tập lệnh “Kiểm thử chấp nhận” của người dùng",
    "options": [
      {
        "key": "a",
        "text": "Đặc tả chương trình"
      },
      {
        "key": "b",
        "text": "Yêu cầu của người dùng"
      },
      {
        "key": "c",
        "text": "Đặc tả hệ thống"
      },
      {
        "key": "d",
        "text": "Kết quả thực tế"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Yêu cầu của người dùng\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Kiểm thử chấp nhận (Acceptance Testing) là mức kiểm thử cuối cùng để xác định xem hệ thống đã sẵn sàng bàn giao cho người dùng chưa, thường dựa trên yêu cầu nghiệp vụ thực tế của khách hàng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Yêu cầu của người dùng\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Yêu cầu của người dùng\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 157,
    "question": "Cho đoạn mã giả sau, số test case tối thiểu để phủ được tất cả các nhánh là?\nif(x&gt;y)    x=x+1;\ny=y+1;\nwhile (x&gt;y)\ny=x*y;\nx=x+1;",
    "options": [
      {
        "key": "a",
        "text": "Có 2 ca kiểm thử"
      },
      {
        "key": "b",
        "text": "Có 1 ca kiểm thử"
      },
      {
        "key": "c",
        "text": "Có 3 ca kiểm thử"
      },
      {
        "key": "d",
        "text": "Có 4 ca kiểm thử"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Đáp án đúng là: **Có 2 ca kiểm thử**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Có 2 ca kiểm thử\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Có 2 ca kiểm thử\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Có 2 ca kiểm thử\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 158,
    "question": "Kết quả của đoạn mã sau là gì.\npublic class TestClass {\n@Test\npublic void testingMethod() {\nString message = \"Test\";\nassertEquals(3, message.length());\n}\n}",
    "options": [
      {
        "key": "a",
        "text": "Test chạy với kết quả là thành công"
      },
      {
        "key": "b",
        "text": "Lỗi Runtime"
      },
      {
        "key": "c",
        "text": "Lỗi biên dịch"
      },
      {
        "key": "d",
        "text": "Test chạy với kết quả là thất bại"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Test chạy với kết quả là thất bại\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Test chạy với kết quả là thất bại\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Test chạy với kết quả là thất bại\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Đáp án đúng là: **Test chạy với kết quả là thất bại**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm."
    }
  },
  {
    "id": 159,
    "question": "Ai thực hiện Unit Test",
    "options": [
      {
        "key": "a",
        "text": "QC"
      },
      {
        "key": "b",
        "text": "Developer"
      },
      {
        "key": "c",
        "text": "User"
      },
      {
        "key": "d",
        "text": "Designer"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Developer\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Kiểm thử đơn vị (Unit Testing) tập trung kiểm tra độc lập các đơn vị phần mềm nhỏ nhất có thể lập trình được (hàm, phương thức, lớp) và thường do chính các lập trình viên (Developers) thực hiện trước khi tích hợp.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Developer\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Developer\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 160,
    "question": "Ưu điểm chính của phương pháp kiểm thử tích hợp dưới lên (Bottom-up) là gì?",
    "options": [
      {
        "key": "a",
        "text": "Không cần phải tạo stub"
      },
      {
        "key": "b",
        "text": "Thiết kế test case dễ và không cần driver"
      },
      {
        "key": "c",
        "text": "Kiểm thử ngay chức năng điều khiển hệ thống"
      },
      {
        "key": "d",
        "text": "Phát hiện sớm các lỗi hệ thống"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Thiết kế test case dễ và không cần driver\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Kiểm thử tích hợp (Integration Testing) tập trung kiểm tra các giao tiếp (interfaces), tương tác và dòng dữ liệu qua lại giữa các module hoặc component phần mềm khác nhau.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Thiết kế test case dễ và không cần driver\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Thiết kế test case dễ và không cần driver\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 161,
    "question": "Các file JUnit test được lưu trong các file có phần mở rộng là gì?",
    "options": [
      {
        "key": "a",
        "text": ".test"
      },
      {
        "key": "b",
        "text": ".unit"
      },
      {
        "key": "c",
        "text": ".junit"
      },
      {
        "key": "d",
        "text": ".java"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \".java\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \".java\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \".java\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Kiểm thử đơn vị (Unit Testing) tập trung kiểm tra độc lập các đơn vị phần mềm nhỏ nhất có thể lập trình được (hàm, phương thức, lớp) và thường do chính các lập trình viên (Developers) thực hiện trước khi tích hợp."
    }
  },
  {
    "id": 162,
    "question": "Cho đoạn mã sau, cần tối thiểu bao nhiêu test case để phủ lệnh 100%?\nint n; cout &lt;&lt; \"Nhap n: \"; cin &gt;&gt; n;\nswitch (n%3){\ncase 0:\ncout &lt;&lt; \"Chia het cho 3\"; break;\ncase 1:\ncase 2:\ncout &lt;&lt; \"Khong chia het cho 3\";\n}",
    "options": [
      {
        "key": "a",
        "text": "1"
      },
      {
        "key": "b",
        "text": "3"
      },
      {
        "key": "c",
        "text": "2"
      },
      {
        "key": "d",
        "text": "4"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"4\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"4\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"4\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Đáp án đúng là: **4**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm."
    }
  },
  {
    "id": 163,
    "question": "Kỹ thuật nào sau đây là một hình thức kiểm thử tĩnh?",
    "options": [
      {
        "key": "a",
        "text": "Đoán lỗi"
      },
      {
        "key": "b",
        "text": "Kiểm thử hồi quy tự động"
      },
      {
        "key": "c",
        "text": "Cung cấp đầu vào, chạy chương trình và kiểm tra kết quả đầu ra"
      },
      {
        "key": "d",
        "text": "Review code"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Review code\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Review code\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Review code\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Kiểm thử tĩnh (Static testing) là phương pháp xem xét mã nguồn, tài liệu thiết kế hoặc yêu cầu mà không cần thực thi chương trình. Nó giúp phát hiện lỗi cú pháp, cấu trúc lập trình và lỗi logic sớm trong vòng đời, tiết kiệm đáng kể chi phí sửa lỗi."
    }
  },
  {
    "id": 164,
    "question": "Cái nào sau đây không phải là một phần của kiểm thử hệ thống:",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử khả năng phục hồi khi gặp sự cố không"
      },
      {
        "key": "b",
        "text": "Kiểm tra viết code có đúng chuẩn"
      },
      {
        "key": "c",
        "text": "Kiểm tra xem có sử dụng dễ không"
      },
      {
        "key": "d",
        "text": "Kiểm thử hiệu suất"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Kiểm tra viết code có đúng chuẩn\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Đáp án đúng là: **Kiểm tra viết code có đúng chuẩn**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Kiểm tra viết code có đúng chuẩn\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Kiểm tra viết code có đúng chuẩn\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 165,
    "question": "Kiểm thử hồi quy (Regression Testing) nên được thực hiện khi nào?",
    "options": [
      {
        "key": "a",
        "text": "Sau khi mã nguồn đã được sửa đổi hoặc thay đổi môi trường"
      },
      {
        "key": "b",
        "text": "Khi khách hàng yêu cầu kiểm thử hiệu năng"
      },
      {
        "key": "c",
        "text": "Chỉ thực hiện một lần duy nhất trước khi phát hành"
      },
      {
        "key": "d",
        "text": "Chỉ khi bắt đầu một dự án mới"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử hồi quy (Regression Testing) được thực hiện sau khi mã nguồn có sự thay đổi (như sửa lỗi, tái cấu trúc, nâng cấp) để đảm bảo các thay đổi mới không làm phát sinh lỗi ở các chức năng vốn đang hoạt động ổn định.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Sau khi mã nguồn đã được sửa đổi hoặc thay đổi môi trường\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Sau khi mã nguồn đã được sửa đổi hoặc thay đổi môi trường\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Sau khi mã nguồn đã được sửa đổi hoặc thay đổi môi trường\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 166,
    "question": "Phát biểu nào sau đây phù hợp với độ bao phủ?",
    "options": [
      {
        "key": "a",
        "text": "Độ bao phủ không ảnh hưởng đến độ tin cậy của bộ kiểm thử"
      },
      {
        "key": "b",
        "text": "Độ bao phủ càng nhỏ thì độ tin cậy của bộ kiểm thử càng cao"
      },
      {
        "key": "c",
        "text": "Độ bao phủ càng lớn thì độ tin cậy của bộ kiểm thử càng thấp"
      },
      {
        "key": "d",
        "text": "Độ bao phủ càng lớn thì độ tin cậy của bộ kiểm thử càng cao"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Độ bao phủ càng lớn thì độ tin cậy của bộ kiểm thử càng cao\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Độ bao phủ càng lớn thì độ tin cậy của bộ kiểm thử càng cao\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Độ bao phủ càng lớn thì độ tin cậy của bộ kiểm thử càng cao\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Độ bao phủ kiểm thử (Test Coverage) là tỷ lệ phần trăm các thành phần cấu trúc (lệnh, quyết định, nhánh) được thực thi bởi bộ ca kiểm thử. Độ bao phủ càng cao thì độ tin cậy của bộ kiểm thử càng cao."
    }
  },
  {
    "id": 167,
    "question": "Kỹ thuật nào là một kỹ thuật kiểm thử hộp đen?",
    "options": [
      {
        "key": "a",
        "text": "Kỹ thuật dựa vào kiến thức chung về thất bại của hệ thống và kiến thức về các lỗi đã xày ra"
      },
      {
        "key": "b",
        "text": "Kỹ thuật dựa vào đặc tả yêu cầu"
      },
      {
        "key": "c",
        "text": "Kỹ thuật kiểm tra xem một hệ thống có hoạt động theo thiết kế chi tiết không"
      },
      {
        "key": "d",
        "text": "Kỹ thuật dựa vào phân tích kiến trúc hệ thống"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Kỹ thuật dựa vào đặc tả yêu cầu\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Kiểm thử hộp đen (Black-box testing) là phương pháp thiết kế ca kiểm thử dựa hoàn toàn vào tài liệu đặc tả yêu cầu chức năng, giao diện của phần mềm mà không quan tâm đến cấu trúc mã nguồn bên trong.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Kỹ thuật dựa vào đặc tả yêu cầu\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Kỹ thuật dựa vào đặc tả yêu cầu\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 168,
    "question": "Một lý do khiến các nhà phát triển gặp khó khăn trong việc kiểm thử công việc của chính họ là:",
    "options": [
      {
        "key": "a",
        "text": "Thiếu khách quan"
      },
      {
        "key": "b",
        "text": "Thiếu các công cụ kiểm tra trên thị trường dành cho nhà phát triển"
      },
      {
        "key": "c",
        "text": "Chưa qua đào tạo"
      },
      {
        "key": "d",
        "text": "Thiếu tài liệu kỹ thuật"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Đáp án đúng là: **Thiếu khách quan**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Thiếu khách quan\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Thiếu khách quan\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Thiếu khách quan\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 169,
    "question": "Kiểm thử hệ thống phi chức năng bao gồm:",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử một tính năng để đáp ứng cho một hành động đó"
      },
      {
        "key": "b",
        "text": "Kiểm thử để xem hệ thống hoạt động không bình thường ở đâu"
      },
      {
        "key": "c",
        "text": "Kiểm thử tính mở rộng có dễ dàng không"
      },
      {
        "key": "d",
        "text": "Kiểm thử các chức năng không nên tồn tại"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Kiểm thử tính mở rộng có dễ dàng không\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Kiểm thử tính mở rộng có dễ dàng không\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Đáp án đúng là: **Kiểm thử tính mở rộng có dễ dàng không**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Kiểm thử tính mở rộng có dễ dàng không\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 170,
    "question": "Kiểm thử giá trị biên mạnh (robust) của hàm tính số lượng nghiệm của phương trình bậc hai f(int a, int b, int c) với ba số a, b, c có khoảng giá trị từ 1 đến 100 thì cần bao nhiêu test case",
    "options": [
      {
        "key": "a",
        "text": "9"
      },
      {
        "key": "b",
        "text": "13"
      },
      {
        "key": "c",
        "text": "125"
      },
      {
        "key": "d",
        "text": "19"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"19\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"19\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"19\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Phân tích giá trị biên (Boundary Value Analysis) là kỹ thuật kiểm thử hộp đen tập trung vào các điểm cực trị ở biên của phân vùng tương đương (như Min, Max, lân cận biên) do lỗi lập trình rất hay xảy ra tại các điểm này."
    }
  },
  {
    "id": 171,
    "question": "Một tập hợp các yếu tố đầu vào, điều kiện tiên quyết thực hiện và kết quả mong đợi được gọi là",
    "options": [
      {
        "key": "a",
        "text": "Test suite"
      },
      {
        "key": "b",
        "text": "Test plan"
      },
      {
        "key": "c",
        "text": "Test case"
      },
      {
        "key": "d",
        "text": "Test document"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Test case\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Test case\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Đáp án đúng là: **Test case**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Test case\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 172,
    "question": "Kiểm thử hộp trắng còn được gọi là:",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử dựa vào thiết kế"
      },
      {
        "key": "b",
        "text": "Kỹ thuật đoán lỗi"
      },
      {
        "key": "c",
        "text": "Kiểm thử cấu trúc"
      },
      {
        "key": "d",
        "text": "Kỹ thuật dựa vào kinh nghiệm"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Kiểm thử cấu trúc\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Kiểm thử cấu trúc\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Kiểm thử hộp trắng (White-box testing) dựa trên kiến thức về mã nguồn, cấu trúc thuật toán bên trong để kiểm tra các đường chạy (paths), nhánh quyết định (branches), và câu lệnh (statements) của chương trình.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Kiểm thử cấu trúc\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 173,
    "question": "Trong quá trình phát triển phần mềm, quá trình kiểm thử động có thể bắt đầu vào thời điểm nào?",
    "options": [
      {
        "key": "a",
        "text": "Khi các yêu cầu phần mềm đã được phê duyệt"
      },
      {
        "key": "b",
        "text": "Khi mô-đun mã đầu tiên đã sẳn sàng để test đơn vị"
      },
      {
        "key": "c",
        "text": "Khi thiết kế hoàn tất"
      },
      {
        "key": "d",
        "text": "Khi code xong"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Khi mô-đun mã đầu tiên đã sẳn sàng để test đơn vị\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Kiểm thử động (Dynamic testing) yêu cầu chương trình phải chạy thực tế trên máy tính với dữ liệu đầu vào cụ thể để so sánh kết quả thực tế và kết quả mong đợi.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Khi mô-đun mã đầu tiên đã sẳn sàng để test đơn vị\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Khi mô-đun mã đầu tiên đã sẳn sàng để test đơn vị\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 174,
    "question": "Đâu không phải là mục tiêu của kiểm thử",
    "options": [
      {
        "key": "a",
        "text": "Tìm lỗi"
      },
      {
        "key": "b",
        "text": "Tăng sự tự tin về chất lượng của chương trình"
      },
      {
        "key": "c",
        "text": "Ngăn chặn lỗi"
      },
      {
        "key": "d",
        "text": "Phân tích nguyên nhân của lỗi"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Phân tích nguyên nhân của lỗi\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Phân tích nguyên nhân của lỗi\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"Phân tích nguyên nhân của lỗi\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Đáp án đúng là: **Phân tích nguyên nhân của lỗi**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm."
    }
  },
  {
    "id": 175,
    "question": "Sự khác biệt giữa re-test (test lại) và kiểm tra hồi quy là",
    "options": [
      {
        "key": "a",
        "text": "re-testing là chạy kiểm thử lại; kiểm tra hồi quy tìm kiếm các tác dụng phụ không mong muốn"
      },
      {
        "key": "b",
        "text": "re-testing để tìm các tác dụng phụ không mong muốn; kiểm tra hồi quy chạy các test lặp đi lặp lại"
      },
      {
        "key": "c",
        "text": "re-testing được thực hiện sau khi các lỗi đã được khắc phục; kiểm tra hồi quy được thực hiện sớm hơn"
      },
      {
        "key": "d",
        "text": "re-testing sử dụng các môi trường khác nhau, kiểm tra hồi quy sử dụng cùng một môi trường"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử hồi quy (Regression Testing) được thực hiện sau khi mã nguồn có sự thay đổi (như sửa lỗi, tái cấu trúc, nâng cấp) để đảm bảo các thay đổi mới không làm phát sinh lỗi ở các chức năng vốn đang hoạt động ổn định.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"re-testing là chạy kiểm thử lại; kiểm tra hồi quy tìm kiếm các tác dụng phụ không mong muốn\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"re-testing là chạy kiểm thử lại; kiểm tra hồi quy tìm kiếm các tác dụng phụ không mong muốn\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"re-testing là chạy kiểm thử lại; kiểm tra hồi quy tìm kiếm các tác dụng phụ không mong muốn\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 176,
    "question": "Chọn phát biểu phù hợp nhất trong các phát biểu sau",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử hồi quy được sử dụng sau khi hệ thống cần kiểm có sửa đổi"
      },
      {
        "key": "b",
        "text": "Kiểm thử hồi quy chỉ chạy được 1 lần duy nhất"
      },
      {
        "key": "c",
        "text": "Kiểm thử hồi quy được thực hiện càng sớm càng tốt, có thể bắt đầu khi đã có SRS"
      },
      {
        "key": "d",
        "text": "Kiểm thử hồi quy không cần thay đổi"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Đáp án đúng là: **Kiểm thử hồi quy được sử dụng sau khi hệ thống cần kiểm có sửa đổi**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Kiểm thử hồi quy được sử dụng sau khi hệ thống cần kiểm có sửa đổi\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Kiểm thử hồi quy được sử dụng sau khi hệ thống cần kiểm có sửa đổi\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Kiểm thử hồi quy được sử dụng sau khi hệ thống cần kiểm có sửa đổi\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 177,
    "question": "Nội dung nào sau đây không có trong tài liệu test plan:",
    "options": [
      {
        "key": "a",
        "text": "Những gì không được kiểm tra"
      },
      {
        "key": "b",
        "text": "Môi trường thử nghiệm"
      },
      {
        "key": "c",
        "text": "Test case"
      },
      {
        "key": "d",
        "text": "Milestone"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Test case\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Test case\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Đáp án đúng là: **Test case**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Test case\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 178,
    "question": "Phát biểu nào sau đây phù hợp nhất về bao phủ dòng lệnh",
    "options": [
      {
        "key": "a",
        "text": "Bao phủ dòng lệnh là một độ đo khẳng định rằng tất cả các statement đã được phủ hay chưa"
      },
      {
        "key": "b",
        "text": "Bao phủ dòng lệnh là một độ đo về số % statement trong source code đã được thực thi"
      },
      {
        "key": "c",
        "text": "Bao phủ dòng lệnh là một độ đo về số lượng statement trong source code đã được thực thi bởi các test case thành công"
      },
      {
        "key": "d",
        "text": "Bao phủ dòng lệnh là một độ đo về số % test case đã được thực thi"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Bao phủ dòng lệnh là một độ đo về số % statement trong source code đã được thực thi\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Độ bao phủ kiểm thử (Test Coverage) là tỷ lệ phần trăm các thành phần cấu trúc (lệnh, quyết định, nhánh) được thực thi bởi bộ ca kiểm thử. Độ bao phủ càng cao thì độ tin cậy của bộ kiểm thử càng cao.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Bao phủ dòng lệnh là một độ đo về số % statement trong source code đã được thực thi\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Bao phủ dòng lệnh là một độ đo về số % statement trong source code đã được thực thi\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 179,
    "question": "Ưu điểm chính của phương pháp kiểm thử tích hợp từ trên xuống dưới (top down) là gì?",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử nhanh theo từng đơn vị"
      },
      {
        "key": "b",
        "text": "Thiết kế test case dễ không cần stub"
      },
      {
        "key": "c",
        "text": "Kiểm thử ngay chức năng điều khiển hệ thống"
      },
      {
        "key": "d",
        "text": "Kiểm thử được các stub"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Kiểm thử ngay chức năng điều khiển hệ thống\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Kiểm thử ngay chức năng điều khiển hệ thống\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Kiểm thử tích hợp (Integration Testing) tập trung kiểm tra các giao tiếp (interfaces), tương tác và dòng dữ liệu qua lại giữa các module hoặc component phần mềm khác nhau.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Kiểm thử ngay chức năng điều khiển hệ thống\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 180,
    "question": "Mục đích của kiểm thử đơn vị là gì?",
    "options": [
      {
        "key": "a",
        "text": "Chứng minh đơn vị không còn lỗi"
      },
      {
        "key": "b",
        "text": "Chứng minh tính thỏa mãn tất cả yêu cầu của khách hàng và khách hàng chấp nhận sản phẩm"
      },
      {
        "key": "c",
        "text": "Chứng minh đơn vị làm đúng với đặc tả"
      },
      {
        "key": "d",
        "text": "Chứng minh đơn vị vẫn còn có lỗi"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Chứng minh đơn vị làm đúng với đặc tả\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Chứng minh đơn vị làm đúng với đặc tả\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Kiểm thử đơn vị (Unit Testing) tập trung kiểm tra độc lập các đơn vị phần mềm nhỏ nhất có thể lập trình được (hàm, phương thức, lớp) và thường do chính các lập trình viên (Developers) thực hiện trước khi tích hợp.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Chứng minh đơn vị làm đúng với đặc tả\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 181,
    "question": "Loại kiểm thử nào sau đây là kiểm thử phi chức năng?",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử hiệu năng"
      },
      {
        "key": "b",
        "text": "Kiểm thử chấp nhận"
      },
      {
        "key": "c",
        "text": "Kiểm thử hệ thống"
      },
      {
        "key": "d",
        "text": "Kiểm thử đơn vị"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Đáp án đúng là: **Kiểm thử hiệu năng**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Kiểm thử hiệu năng\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Kiểm thử hiệu năng\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Kiểm thử hiệu năng\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 182,
    "question": "Cho đoạn mã sau và chọn phát biểu đúng nhất:\nRead P\nRead Q\nIF(P&gt;0 &amp;&amp; Q&gt;0) THEN\nPrint “Large”\nElse\nPrint “Not large”\nENDIF",
    "options": [
      {
        "key": "a",
        "text": "1 test case để phủ các dòng lệnh, 1 test case để phủ nhánh"
      },
      {
        "key": "b",
        "text": "2 test case để phủ các dòng lệnh, 3 test case để phủ nhánh"
      },
      {
        "key": "c",
        "text": "1 test case để phủ các dòng lệnh, 3 test case để phủ nhánh"
      },
      {
        "key": "d",
        "text": "2 test case để phủ các dòng lệnh, 2 test case để phủ nhánh"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"2 test case để phủ các dòng lệnh, 2 test case để phủ nhánh\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"2 test case để phủ các dòng lệnh, 2 test case để phủ nhánh\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"2 test case để phủ các dòng lệnh, 2 test case để phủ nhánh\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Đáp án đúng là: **2 test case để phủ các dòng lệnh, 2 test case để phủ nhánh**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm."
    }
  },
  {
    "id": 183,
    "question": "Yêu cầu nào sau đây là có thể kiểm thử được?",
    "options": [
      {
        "key": "a",
        "text": "Hệ thống phải thân thiện với người dùng"
      },
      {
        "key": "b",
        "text": "Các bộ phận quan trọng về an toàn của hệ thống phải có 0 lỗi"
      },
      {
        "key": "c",
        "text": "Thời gian đáp ứng phải nhỏ hơn một giây đối với tải thiết kế quy định"
      },
      {
        "key": "d",
        "text": "Hệ thống phải được xây dựng để di động (portable)"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Thời gian đáp ứng phải nhỏ hơn một giây đối với tải thiết kế quy định\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Thời gian đáp ứng phải nhỏ hơn một giây đối với tải thiết kế quy định\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Đáp án đúng là: **Thời gian đáp ứng phải nhỏ hơn một giây đối với tải thiết kế quy định**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Thời gian đáp ứng phải nhỏ hơn một giây đối với tải thiết kế quy định\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 184,
    "question": "Công ty X muốn xây dựng hàm tính thưởng của một nhân viên dựa vào số năm làm việc với các mức sau:\nÍt hơn hoặc bằng 2 năm: 1 triệu\nNhiều hơn 2 năm và ít hơn 5 năm: 3 triệu\nTừ 5 đến 10 năm: 5 triệu\nNhiều hơn 10 năm: 7 triệu\nĐể kiểm thử hàm tính thưởng của công ty X theo phương pháp phân vùng tương đương cần tối thiểu bao nhiêu test case",
    "options": [
      {
        "key": "a",
        "text": "4"
      },
      {
        "key": "b",
        "text": "5"
      },
      {
        "key": "c",
        "text": "2"
      },
      {
        "key": "d",
        "text": "3"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Phân vùng tương đương là kỹ thuật kiểm thử hộp đen chia miền đầu vào thành các lớp dữ liệu mà phần mềm xử lý giống nhau, từ đó chọn đại diện từ mỗi lớp để kiểm thử, giúp giảm số lượng test case cần thiết.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"4\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"4\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"4\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 185,
    "question": "Cho đoạn mã giả sau, số test case tối thiểu cần có để phủ điều kiện?\nif(A&gt;0 || B&lt;7)\ncout &lt;&lt; “valid input”;\nelse\ncout &lt;&lt; “invalid input”;",
    "options": [
      {
        "key": "a",
        "text": "4"
      },
      {
        "key": "b",
        "text": "2"
      },
      {
        "key": "c",
        "text": "1"
      },
      {
        "key": "d",
        "text": "3"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"3\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"3\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"3\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Đáp án đúng là: **3**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm."
    }
  },
  {
    "id": 186,
    "question": "Trường hợp nào không nên dùng bảng quyết định",
    "options": [
      {
        "key": "a",
        "text": "Các biến đầu vào và đầu ra có quan hệ với nhau"
      },
      {
        "key": "b",
        "text": "Các biến đầu vào có quan hệ với nhau"
      },
      {
        "key": "c",
        "text": "Độ phức tạp chu trình cao"
      },
      {
        "key": "d",
        "text": "Độ phức tạp chu trình thấp"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Các biến đầu vào có quan hệ với nhau\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Đáp án đúng là: **Các biến đầu vào có quan hệ với nhau**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Các biến đầu vào có quan hệ với nhau\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Các biến đầu vào có quan hệ với nhau\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 187,
    "question": "Một textbox chỉ nhận giá trị ký tự từ [a, z], [A, Z], [0, 9]. Chỉ ra một lớp tương đương không hợp lệ?",
    "options": [
      {
        "key": "a",
        "text": "$"
      },
      {
        "key": "b",
        "text": "w"
      },
      {
        "key": "c",
        "text": "j"
      },
      {
        "key": "d",
        "text": "5"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Đáp án đúng là: **$**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"$\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"$\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"$\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 188,
    "question": "Trong kiểm thử tích hợp, ngoài cách tích hợp tăng dần (từ trên xuống, từ dưới lên) thì chúng ta có tích hợp đồng thời. Loại tích hợp này có tên là gì?",
    "options": [
      {
        "key": "a",
        "text": "Tích hợp sandwich"
      },
      {
        "key": "b",
        "text": "Tích hợp Big-bang"
      },
      {
        "key": "c",
        "text": "Tích hợp theo chiều rộng (width)"
      },
      {
        "key": "d",
        "text": "Tích hợp theo chiều sâu (deep)"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Kiểm thử tích hợp (Integration Testing) tập trung kiểm tra các giao tiếp (interfaces), tương tác và dòng dữ liệu qua lại giữa các module hoặc component phần mềm khác nhau.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Tích hợp sandwich\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Tích hợp sandwich\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Tích hợp sandwich\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 189,
    "question": "Cho đoạn mã giả sau, số test case tối thiểu để phủ cấp 3 là bao nhiêu?\nIf(x&gt;y) x=1;\nelse if(x==y)\nx=0;\nelse x = -1",
    "options": [
      {
        "key": "a",
        "text": "3"
      },
      {
        "key": "b",
        "text": "1"
      },
      {
        "key": "c",
        "text": "4"
      },
      {
        "key": "d",
        "text": "2"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Đáp án đúng là: **3**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"3\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"3\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"3\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 190,
    "question": "Phát biểu nào sau đây đúng cho đoạn mã sau:\ndiscountRate = 1;\nfare = 1000;\nif((person == “senior citizen”) and (travelMonth ==”January”))\nbonusPoints = bonusPoint + 100;\nif(class == “first”)\ndiscountRate = 5;\nfare = fare* discountRate;",
    "options": [
      {
        "key": "a",
        "text": "1 test case để phủ lệnh, 2 test case để phủ nhánh"
      },
      {
        "key": "b",
        "text": "2 test case để phủ lệnh, 2 test case để phủ nhánh"
      },
      {
        "key": "c",
        "text": "1 test case để phủ lệnh, 3 test case để phủ nhánh"
      },
      {
        "key": "d",
        "text": "2 test case để phủ lệnh, 4 test case để phủ nhánh"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Đáp án đúng là: **1 test case để phủ lệnh, 2 test case để phủ nhánh**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"1 test case để phủ lệnh, 2 test case để phủ nhánh\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"1 test case để phủ lệnh, 2 test case để phủ nhánh\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"1 test case để phủ lệnh, 2 test case để phủ nhánh\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 191,
    "question": "Phát biểu nào phù hợp với test suite?",
    "options": [
      {
        "key": "a",
        "text": "Là 1 báo cáo test"
      },
      {
        "key": "b",
        "text": "Là 1 nhóm các test case"
      },
      {
        "key": "c",
        "text": "Là 1 phần mềm quản lý test case"
      },
      {
        "key": "d",
        "text": "Là 1 tài liệu hướng dẫn test"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Là 1 nhóm các test case\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Đáp án đúng là: **Là 1 nhóm các test case**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Là 1 nhóm các test case\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Là 1 nhóm các test case\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 192,
    "question": "Độ bao phủ được dùng để đo điều gì?",
    "options": [
      {
        "key": "a",
        "text": "Xu hướng phân tích"
      },
      {
        "key": "b",
        "text": "Thời gian kiểm thử"
      },
      {
        "key": "c",
        "text": "Hiệu quả của kiểm thử"
      },
      {
        "key": "d",
        "text": "Số lượng lỗi"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Hiệu quả của kiểm thử\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Hiệu quả của kiểm thử\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Độ bao phủ kiểm thử (Test Coverage) là tỷ lệ phần trăm các thành phần cấu trúc (lệnh, quyết định, nhánh) được thực thi bởi bộ ca kiểm thử. Độ bao phủ càng cao thì độ tin cậy của bộ kiểm thử càng cao.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Hiệu quả của kiểm thử\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 193,
    "question": "Chúng ta chia kiểm thử thành các giai đoạn riêng biệt chủ yếu vì:",
    "options": [
      {
        "key": "a",
        "text": "Mỗi giai đoạn kiểm tra có một mục đích khác nhau"
      },
      {
        "key": "b",
        "text": "Việc quản lý thử nghiệm theo từng giai đoạn dễ dàng hơn"
      },
      {
        "key": "c",
        "text": "Chúng tôi có thể chạy các bài kiểm tra khác nhau trong các môi trường khác nhau"
      },
      {
        "key": "d",
        "text": "Chúng tôi càng có nhiều giai đoạn, thử nghiệm càng tốt"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Đáp án đúng là: **Mỗi giai đoạn kiểm tra có một mục đích khác nhau**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Mỗi giai đoạn kiểm tra có một mục đích khác nhau\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Mỗi giai đoạn kiểm tra có một mục đích khác nhau\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Mỗi giai đoạn kiểm tra có một mục đích khác nhau\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 194,
    "question": "Mục đích của điều kiện dừng trong kế hoạch kiểm thử là gì?",
    "options": [
      {
        "key": "a",
        "text": "Để biết khi nào dừng chạy chương trình"
      },
      {
        "key": "b",
        "text": "Để đảm bảo rằng đã hoàn thành theo kế hoạch"
      },
      {
        "key": "c",
        "text": "Để biết khi nào việc lập kế hoạch kiểm thử hoàn tất"
      },
      {
        "key": "d",
        "text": "Để biết khi nào một bài kiểm thử cụ thể đã kết thúc quá trình thực hiện"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Để đảm bảo rằng đã hoàn thành theo kế hoạch\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Chính xác! Đáp án đúng là: **Để đảm bảo rằng đã hoàn thành theo kế hoạch**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Để đảm bảo rằng đã hoàn thành theo kế hoạch\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **B**: \"Để đảm bảo rằng đã hoàn thành theo kế hoạch\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 195,
    "question": "Một chương trình có độ phức tạp chu trình cao có nghĩa là",
    "options": [
      {
        "key": "a",
        "text": "Chương trình lớn"
      },
      {
        "key": "b",
        "text": "Chương trình nhỏ"
      },
      {
        "key": "c",
        "text": "Chương trình khó test"
      },
      {
        "key": "d",
        "text": "Chương trình khó code"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Chương trình khó test\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Chương trình khó test\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Độ phức tạp chu trình (Cyclomatic Complexity) đo lường số lượng đường đi độc lập tuyến tính qua đồ thị dòng điều khiển (CFG) của chương trình, giúp xác định số lượng test case tối thiểu cần để đạt 100% phủ nhánh.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Chương trình khó test\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 196,
    "question": "Cái nào sau đây không phải là một phần của kiểm thử hệ thống:",
    "options": [
      {
        "key": "a",
        "text": "Kiểm thử hiệu suất, tải"
      },
      {
        "key": "b",
        "text": "Kiểm tra khả năng sử dụng"
      },
      {
        "key": "c",
        "text": "Kiểm thử BIG BANG"
      },
      {
        "key": "d",
        "text": "Kiểm thử dựa trên quy trình kinh doanh"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Kiểm thử BIG BANG\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Kiểm thử BIG BANG\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Đáp án đúng là: **Kiểm thử BIG BANG**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Kiểm thử BIG BANG\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 197,
    "question": "Cần tối thiểu bao nhiêu test case để phù lệnh và tối thiểu bao nhiêu test case để phủ quyết định đoạn mã giả sau:\nRead a\nRead b\nRead c\nif c&lt;a then\nif c&gt;b then\nprint “c must be smaller than at least one number”\nelse\nprint “Proceed to next stage”\nendif\nelse\nprint “b can be smaller than c”\nendif",
    "options": [
      {
        "key": "a",
        "text": "3, 3"
      },
      {
        "key": "b",
        "text": "2, 3"
      },
      {
        "key": "c",
        "text": "2, 4"
      },
      {
        "key": "d",
        "text": "3, 2"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Đáp án đúng là: **3, 3**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"3, 3\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"3, 3\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"3, 3\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 198,
    "question": "Điều nào sau đây không có trong kiểm thử đơn vị?",
    "options": [
      {
        "key": "a",
        "text": "Kiểm tra cú pháp"
      },
      {
        "key": "b",
        "text": "Kiểm tra lỗi chính tả"
      },
      {
        "key": "c",
        "text": "Kiểm tra khả năng phục hồi"
      },
      {
        "key": "d",
        "text": "Kiểm tra xem code có viết đúng theo chuẩn yêu cầu không"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Kiểm tra khả năng phục hồi\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Kiểm tra khả năng phục hồi\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Chính xác! Kiểm thử đơn vị (Unit Testing) tập trung kiểm tra độc lập các đơn vị phần mềm nhỏ nhất có thể lập trình được (hàm, phương thức, lớp) và thường do chính các lập trình viên (Developers) thực hiện trước khi tích hợp.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **C**: \"Kiểm tra khả năng phục hồi\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  },
  {
    "id": 199,
    "question": "Số test case tối thiểu để phủ cấp 1, phủ cấp 2 của hàm sau là\nint f(int m, int n, boolean x, boolean y)\n{\nint res=0;\nif(m&lt;0) {res = n-m;}\nelse if(x || y){\nres=-1;\nif(n==m) {res=1;}\n}else {res=n;}\nreturn res;\n}",
    "options": [
      {
        "key": "a",
        "text": "3, 2"
      },
      {
        "key": "b",
        "text": "4, 3"
      },
      {
        "key": "c",
        "text": "2, 3"
      },
      {
        "key": "d",
        "text": "3, 4"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"3, 4\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"3, 4\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **D**: \"3, 4\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Chính xác! Đáp án đúng là: **3, 4**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm."
    }
  },
  {
    "id": 200,
    "question": "Mô tả nào phù hợp cho chẩn đoán lỗi:",
    "options": [
      {
        "key": "a",
        "text": "Bổ sung các kỹ thuật thiết kế kiểm thử chính thức"
      },
      {
        "key": "b",
        "text": "Chỉ có thể được sử dụng trong kiểm thử thành phần. tích hợp hệ thống"
      },
      {
        "key": "c",
        "text": "Chỉ được thực hiện trong kiểm thử chấp nhận của người dùng"
      },
      {
        "key": "d",
        "text": "Không thể lặp lại và không nên sử dụng"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Chính xác! Đáp án đúng là: **Bổ sung các kỹ thuật thiết kế kiểm thử chính thức**. Điều này hoàn toàn phù hợp với các định nghĩa lý thuyết và tiêu chuẩn thực hành của môn Kiểm thử phần mềm.",
      "b": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Bổ sung các kỹ thuật thiết kế kiểm thử chính thức\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "c": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Bổ sung các kỹ thuật thiết kế kiểm thử chính thức\". Hãy xem lại khái niệm lý thuyết tương ứng.",
      "d": "Lựa chọn này chưa chính xác. Phương án đúng phải là **A**: \"Bổ sung các kỹ thuật thiết kế kiểm thử chính thức\". Hãy xem lại khái niệm lý thuyết tương ứng."
    }
  }
];
