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
      "a": "Sai. Vì cả kiểm thử tĩnh và kiểm thử động đều quan trọng và có giá trị riêng, bổ trợ lẫn nhau chứ không cái nào ít giá trị hơn cái nào.",
      "b": "Sai. Vì kiểm thử tĩnh không thể phát hiện lỗi thời gian chạy (runtime) như rò rỉ bộ nhớ, lỗi hiệu năng vì chương trình không thực thi. Lỗi runtime chỉ phát hiện được qua kiểm thử động.",
      "c": "Đúng. Vì kiểm thử tĩnh (bao gồm review tài liệu, code walkthrough, inspection) được thực hiện sớm khi phần mềm chưa chạy. Việc phát hiện và sửa lỗi ở giai đoạn này cực kỳ tiết kiệm chi phí vì code chưa được triển khai phức tạp.",
      "d": "Sai. Vì cả kiểm thử tĩnh và kiểm thử động đều quan trọng và có giá trị riêng, bổ trợ lẫn nhau chứ không cái nào ít giá trị hơn cái nào."
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
    "correct": "d",
    "explanations": {
      "a": "Sai. Vì không bao phủ hết tất cả các trường hợp logic nghiệp vụ hợp lệ và không hợp lệ của đầu vào.",
      "b": "Sai. Vì không bao phủ hết tất cả các trường hợp logic nghiệp vụ hợp lệ và không hợp lệ của đầu vào.",
      "c": "Sai. Vì không bao phủ hết tất cả các trường hợp logic nghiệp vụ hợp lệ và không hợp lệ của đầu vào.",
      "d": "Đúng. Vì để kiểm thử đầy đủ bằng kỹ thuật phân vùng tương đương, ta cần xác định cả các phân vùng hợp lệ (valid partitions) và phân vùng không hợp lệ (invalid partitions). Các phân vùng cụ thể bao gồm:\n    1. *Phân vùng không hợp lệ:* Số năm làm việc nhỏ hơn 0 (`t < 0`).\n    2. *Phân vùng hợp lệ 1:* Nhân viên làm dưới 2 năm, không có tiền thưởng (`0 <= t < 2`).\n    3. *Phân vùng hợp lệ 2:* Làm từ 2 năm đến dưới 5 năm, thưởng 10% (`2 <= t < 5`).\n    4. *Phân vùng hợp lệ 3:* Làm từ 5 đến 10 năm, thưởng 25% (`5 <= t <= 10`).\n    5. *Phân vùng hợp lệ 4:* Làm trên 10 năm, thưởng 35% (`t > 10`).\n    Tổng cộng có **5** phân vùng tương đương cần kiểm thử."
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
      "a": "Sai. Vì ngược lại, phủ lệnh yếu hơn phủ quyết định.",
      "b": "Sai. Vì hoàn toàn có thể đạt được 100% phủ quyết định bằng cách thiết kế đủ ca kiểm thử để đi qua mọi nhánh đúng/sai của các điều kiện.",
      "c": "Sai. Vì phủ lệnh 100% không đảm bảo phủ quyết định 100%. Ví dụ: Cấu trúc `if` không có `else` chỉ cần 1 test case để chạy vào thân `if` (đạt 100% phủ lệnh), nhưng nhánh đi vòng qua `if` (nhánh False) chưa được thực thi (chưa đạt 100% phủ quyết định).",
      "d": "Đúng. Vì phủ quyết định (Decision/Branch Coverage) là thước đo mạnh hơn phủ lệnh (Statement Coverage). Nếu bộ kiểm thử đạt 100% phủ quyết định, nó sẽ tự động bao phủ 100% phủ lệnh."
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
      "a": "Sai. Vì coder, tester nội bộ của dự án hoặc các chuyên gia kỹ thuật không phải đối tượng thực hiện kiểm thử Beta. Họ chỉ tham gia hỗ trợ hoặc phân tích phản hồi từ quá trình này.",
      "b": "Đúng. Vì kiểm thử Beta (Beta Testing) là một loại kiểm thử chấp nhận được thực hiện bởi khách hàng hoặc người dùng cuối tại môi trường vận hành thực tế của chính họ (nằm ngoài cơ sở của đơn vị phát triển).",
      "c": "Sai. Vì coder, tester nội bộ của dự án hoặc các chuyên gia kỹ thuật không phải đối tượng thực hiện kiểm thử Beta. Họ chỉ tham gia hỗ trợ hoặc phân tích phản hồi từ quá trình này.",
      "d": "Sai. Vì coder, tester nội bộ của dự án hoặc các chuyên gia kỹ thuật không phải đối tượng thực hiện kiểm thử Beta. Họ chỉ tham gia hỗ trợ hoặc phân tích phản hồi từ quá trình này."
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
      "a": "Sai. Vì việc kiểm thử toàn bộ/tất cả mọi thứ là không khả thi dù có sử dụng công cụ tự động hóa hay công cụ kiểm thử tối tân nhất.",
      "b": "Đúng. Vì đây là nguyên tắc \"Kiểm thử toàn diện là không thể\" (Exhaustive testing is impossible). Do số lượng kết hợp dữ liệu, điều kiện đầu vào và đường chạy trong mã nguồn là vô hạn nên không thể thực hiện kiểm thử toàn bộ.",
      "c": "Sai. Vì mục đích của kiểm thử là chỉ ra sự hiện diện của lỗi, chứ không thể chứng minh phần mềm hoàn toàn không có lỗi (Testing shows the presence of defects, not their absence).",
      "d": "Sai. Vì việc kiểm thử toàn bộ/tất cả mọi thứ là không khả thi dù có sử dụng công cụ tự động hóa hay công cụ kiểm thử tối tân nhất."
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
      "a": "Đúng. Vì xác minh (Verification) tập trung vào câu hỏi: \"Are we building the product right?\" (Chúng ta có đang xây dựng hệ thống đúng cách không?). Tức là kiểm tra xem sản phẩm ở các giai đoạn phát triển có tuân thủ đúng các yêu cầu và đặc tả kỹ thuật đã thiết lập trước đó hay không.",
      "b": "Sai. Vì đây là định nghĩa của Thẩm định (Validation): \"Are we building the right product?\" (Chúng ta có đang xây dựng đúng sản phẩm mà người dùng thực sự mong muốn không?).",
      "c": "Sai. Vì hoạt động xác minh (như review code, review tài liệu thiết kế) có thể thực hiện bởi các lập trình viên hoặc các thành viên khác trong dự án, không chỉ giới hạn ở nhóm kiểm thử độc lập.",
      "d": "Sai. Vì đây là định nghĩa của Thẩm định (Validation): \"Are we building the right product?\" (Chúng ta có đang xây dựng đúng sản phẩm mà người dùng thực sự mong muốn không?)."
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
      "a": "Sai. Vì đây là những lợi ích phụ, không phải mục tiêu quan trọng và cốt lõi nhất dưới góc độ chất lượng phần mềm.",
      "b": "Đúng. Vì khi thiết kế các kịch bản kiểm thử sớm (ngay từ khâu phân tích yêu cầu), kiểm thử viên có thể phát hiện ngay các điểm mâu thuẫn, mơ hồ trong tài liệu. Việc làm rõ này giúp ngăn ngừa việc lập trình sai và ngăn chặn sự tích tụ, nhân lên của lỗi qua các giai đoạn tiếp theo (Defect multiplication / propagation).",
      "c": "Sai. Vì không thể tìm ra tất cả các lỗi do giới hạn thực tế của việc kiểm thử.",
      "d": "Sai. Vì đây là những lợi ích phụ, không phải mục tiêu quan trọng và cốt lõi nhất dưới góc độ chất lượng phần mềm."
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
      "a": "Sai. Vì mock là đối tượng giả lập hành vi phức tạp của một dependency; Proxy là đối tượng đại diện trung gian điều khiển truy cập.",
      "b": "Đúng. Vì driver (Bộ điều khiển) là một thành phần mã nguồn tạm thời được viết ra nhằm mục đích giả lập module cha (module cấp cao hơn chưa được phát triển). Driver chịu trách nhiệm khởi chạy, gọi hàm/module đang được kiểm thử và truyền dữ liệu đầu vào cho hàm đó. Thường sử dụng trong kiểm thử tích hợp từ dưới lên (Bottom-up).",
      "c": "Sai. Vì stub (Cuống/Mầm) là thành phần giả lập module con (cấp dưới chưa phát triển) để module đang test gọi xuống và nhận lại dữ liệu giả lập. Thường dùng trong kiểm thử tích hợp từ trên xuống (Top-down).",
      "d": "Sai. Vì mock là đối tượng giả lập hành vi phức tạp của một dependency; Proxy là đối tượng đại diện trung gian điều khiển truy cập."
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
      "a": "Đúng. Vì theo nguyên tắc \"Kiểm thử sớm\", ngay khi tài liệu Đặc tả yêu cầu phần mềm (SRS - Software Requirement Specification) hoàn thành và được phê duyệt, tester đã có thể bắt đầu thiết kế test case dựa trên tài liệu này.",
      "b": "Sai. Vì thiết kế muộn (sau khi code hoặc trong quá trình chạy thử) làm giảm hiệu quả phát hiện lỗi tài liệu sớm và làm chậm tiến độ tổng thể của dự án.",
      "c": "Sai. Vì thiết kế muộn (sau khi code hoặc trong quá trình chạy thử) làm giảm hiệu quả phát hiện lỗi tài liệu sớm và làm chậm tiến độ tổng thể của dự án.",
      "d": "Sai. Vì thiết kế muộn (sau khi code hoặc trong quá trình chạy thử) làm giảm hiệu quả phát hiện lỗi tài liệu sớm và làm chậm tiến độ tổng thể của dự án."
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
      "a": "Đúng. Vì trong kiểm thử dựa trên rủi ro (Risk-based testing), tài nguyên dự án (thời gian, nhân lực) luôn có hạn. Việc xác định độ ưu tiên giúp tập trung kiểm thử vào những khu vực có rủi ro cao nhất (những nơi dễ có lỗi nghiêm trọng nhất) để bảo vệ giá trị cốt lõi của phần mềm trước tiên.",
      "b": "Sai. Vì đều không phải mục tiêu tối thượng khi quản lý rủi ro và phân bổ nguồn lực kiểm thử.",
      "c": "Sai. Vì đều không phải mục tiêu tối thượng khi quản lý rủi ro và phân bổ nguồn lực kiểm thử.",
      "d": "Sai. Vì đều không phải mục tiêu tối thượng khi quản lý rủi ro và phân bổ nguồn lực kiểm thử."
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
      "a": "Đúng. Vì xác minh sớm giúp phát hiện và giải quyết các lỗi ngay tại thời điểm chúng mới xuất hiện (ví dụ: phát hiện lỗi thiết kế trước khi bắt đầu viết mã). Điều này giúp giảm thiểu việc lỗi lan truyền và gia tăng quy mô (defect amplification).",
      "b": "Sai. Vì chỉ là các khía cạnh tổ chức hoặc kết quả phụ của quy trình, không phải lợi ích cốt lõi nhất về chất lượng và chi phí.",
      "c": "Sai. Vì chỉ là các khía cạnh tổ chức hoặc kết quả phụ của quy trình, không phải lợi ích cốt lõi nhất về chất lượng và chi phí.",
      "d": "Sai. Vì chỉ là các khía cạnh tổ chức hoặc kết quả phụ của quy trình, không phải lợi ích cốt lõi nhất về chất lượng và chi phí."
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
      "a": "Sai. Vì đây là kỹ thuật kiểm thử hộp trắng (White-box / structure-based) dựa vào mã nguồn và thiết kế chi tiết bên trong.",
      "b": "Sai. Vì đây là kỹ thuật kiểm thử dựa trên kinh nghiệm (experience-based).",
      "c": "Đúng. Vì kỹ thuật kiểm thử hộp đen (Black-box testing) còn được gọi là kỹ thuật dựa trên đặc tả (specification-based) vì các ca kiểm thử được rút ra từ các tài liệu yêu cầu, chức năng mà không cần biết đến cấu trúc mã nguồn bên trong.",
      "d": "Sai. Vì đây là kỹ thuật kiểm thử hộp trắng (White-box / structure-based) dựa vào mã nguồn và thiết kế chi tiết bên trong."
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
      "a": "Sai. Vì bước cuối cùng trước khi phát hành thường là kiểm thử Beta hoặc Acceptance testing nói chung.",
      "b": "Sai. Vì kiểm thử đầu tiên trong dự án là kiểm thử đơn vị (Unit Testing).",
      "c": "Sai. Vì kiểm thử sau phát hành tại chính môi trường của khách hàng là kiểm thử Beta.",
      "d": "Đúng. Vì kiểm thử Alpha (Alpha Testing) là loại kiểm thử chấp nhận được thực hiện tại cơ sở của bên phát triển (in-house) bởi một nhóm độc lập đại diện cho khách hàng/người dùng hoặc chuyên gia nội bộ."
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
      "a": "Sai. Vì đều là những loại/mức kiểm thử được thực hiện chủ yếu bởi kiểm thử viên hoặc lập trình viên chuyên nghiệp của đội dự án.",
      "b": "Đúng. Vì kiểm thử chấp nhận (Acceptance Testing) là hoạt động nhằm kiểm chứng xem hệ thống có đáp ứng các tiêu chuẩn nghiệp vụ của khách hàng để ký nghiệm thu hay không. Người chịu trách nhiệm thực thi chính là khách hàng, người dùng cuối (end-user) hoặc bộ phận vận hành (ops), chứ không phải đội ngũ tester chuyên nghiệp của dự án.",
      "c": "Sai. Vì đều là những loại/mức kiểm thử được thực hiện chủ yếu bởi kiểm thử viên hoặc lập trình viên chuyên nghiệp của đội dự án.",
      "d": "Sai. Vì đều là những loại/mức kiểm thử được thực hiện chủ yếu bởi kiểm thử viên hoặc lập trình viên chuyên nghiệp của đội dự án."
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
      "a": "Sai. Vì mỗi ý chỉ định nghĩa một phần, chưa bao quát đầy đủ khái niệm kiểm thử phần mềm.",
      "b": "Sai. Vì mỗi ý chỉ định nghĩa một phần, chưa bao quát đầy đủ khái niệm kiểm thử phần mềm.",
      "c": "Sai. Vì mỗi ý chỉ định nghĩa một phần, chưa bao quát đầy đủ khái niệm kiểm thử phần mềm.",
      "d": "Đúng. Vì kiểm thử phần mềm bao gồm tất cả các khía cạnh trên: từ việc chạy thử chương trình để phát hiện lỗi (kiểm thử động), đánh giá mức độ chất lượng (kiểm thử phi chức năng/nghiệm thu), cho đến việc soát xét các sản phẩm trung gian như tài liệu, thiết kế, mã nguồn (kiểm thử tĩnh)."
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
      "a": "Sai. Vì kiểm tra chức năng nghiệp vụ, kiểm tra hiệu năng (phi chức năng), và kiểm tra giao diện người dùng (UI) đều là các hoạt động trọng tâm của kiểm thử hệ thống.",
      "b": "Sai. Vì kiểm tra chức năng nghiệp vụ, kiểm tra hiệu năng (phi chức năng), và kiểm tra giao diện người dùng (UI) đều là các hoạt động trọng tâm của kiểm thử hệ thống.",
      "c": "Sai. Vì kiểm tra chức năng nghiệp vụ, kiểm tra hiệu năng (phi chức năng), và kiểm tra giao diện người dùng (UI) đều là các hoạt động trọng tâm của kiểm thử hệ thống.",
      "d": "Đúng. Vì kiểm tra sự tích hợp giữa các module thuộc phạm vi của Kiểm thử tích hợp (Integration Testing). Kiểm thử hệ thống (System Testing) được tiến hành trên một hệ thống đã tích hợp hoàn chỉnh để đánh giá hành vi tổng thể của hệ thống dựa trên yêu cầu đặc tả."
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
      "a": "Đúng. Vì theo nguyên tắc kiểm thử phần mềm, kiểm tra toàn bộ (exhaustive testing) là bất khả thi do số lượng tổ hợp đầu vào và các luồng đi là vô tận.",
      "b": "Sai. Vì đều sai bản chất vì kiểm thử toàn diện không thể thực hiện được trong thực tế, bất kể có công cụ hỗ trợ hay yêu cầu bắt buộc từ khách hàng.",
      "c": "Sai. Vì đều sai bản chất vì kiểm thử toàn diện không thể thực hiện được trong thực tế, bất kể có công cụ hỗ trợ hay yêu cầu bắt buộc từ khách hàng.",
      "d": "Sai. Vì đều sai bản chất vì kiểm thử toàn diện không thể thực hiện được trong thực tế, bất kể có công cụ hỗ trợ hay yêu cầu bắt buộc từ khách hàng."
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
      "a": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "b": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "c": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "d": "Đúng. Vì đây là đáp án chính xác theo tài liệu chuẩn ôn tập môn học."
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
      "a": "Đúng. Vì tiêu chí dừng kiểm thử (Exit Criteria) xác định các mốc và điều kiện cụ thể (ví dụ: tỷ lệ bao phủ code, số lượng lỗi nghiêm trọng đã sửa, hết thời gian phân bổ) để kết thúc quá trình kiểm thử một cách có kế hoạch và an toàn.",
      "b": "Sai. Vì không thể chứng minh đã tìm thấy hết lỗi.",
      "c": "Sai. Vì tiết kiệm chi phí hay kịp tiến độ là các mục tiêu quản lý chung của dự án, không phải mục đích trực tiếp của tiêu chí dừng kiểm thử.",
      "d": "Sai. Vì tiết kiệm chi phí hay kịp tiến độ là các mục tiêu quản lý chung của dự án, không phải mục đích trực tiếp của tiêu chí dừng kiểm thử."
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
    "correct": "c",
    "explanations": {
      "a": "Sai. Vì đều đưa ra số lượng test case nhiều hơn mức tối thiểu cần thiết.",
      "b": "Sai. Vì đều đưa ra số lượng test case nhiều hơn mức tối thiểu cần thiết.",
      "c": "Đúng. Vì phủ cấp 3 chính là Phủ điều kiện (Condition Coverage). Phủ điều kiện yêu cầu mỗi điều kiện logic đơn lẻ (atomic condition) trong biểu thức quyết định phức tạp phải nhận giá trị Đúng (True) và Sai (False) ít nhất một lần.\n  Trong hàm `maxAm`, biểu thức điều kiện phức tạp tại câu lệnh `if` là:\n  `a[i] < 0 && (max == 0 || a[i] > max)`\n  Ta có 3 điều kiện đơn lẻ:\n  1. $C_1$: `a[i] < 0`\n  2. $C_2$: `max == 0`\n  3. $C_3$: `a[i] > max`\n\n  Vì đầu vào là một mảng `a[]` có `n` phần tử, vòng lặp `for` sẽ chạy qua từng phần tử. Chỉ cần **1 ca kiểm thử** (1 lần gọi hàm) với mảng gồm các phần tử phù hợp là có thể bao phủ giá trị True/False cho cả 3 điều kiện đơn:\n  *Ví dụ với 1 test case:* `a[] = {-2, 5, -5, -1}` với `n = 4`:\n  - Lần lặp 1 ($i = 0$, $a[0] = -2$):\n    - $C_1$: `a[0] < 0` $\\to$ **True**.\n    - $C_2$: `max == 0` (lúc đầu `max` là `0`) $\\to$ **True**.\n    - Kết quả biểu thức `if` là True, thực hiện `max = -2`.\n  - Lần lặp 2 ($i = 1$, $a[1] = 5$):\n    - $C_1$: `a[1] < 0` $\\to$ **False** (Đã bao phủ được cả True và False cho $C_1$).\n    - Theo cơ chế ngắn mạch (short-circuit), các điều kiện sau không cần tính toán, thân `if` bị bỏ qua.\n  - Lần lặp 3 ($i = 2$, $a[2] = -5$):\n    - $C_1$: `a[2] < 0` $\\to$ True.\n    - $C_2$: `max == 0` (bây giờ `max` là `-2`) $\\to$ **False** (Đã bao phủ được cả True và False cho $C_2$).\n    - $C_3$: `a[2] > max` (tức là `-5 > -2`) $\\to$ **False**.\n    - Kết quả biểu thức `if` là False, thân `if` bị bỏ qua.\n  - Lần lặp 4 ($i = 3$, $a[3] = -1$):\n    - $C_1$: `a[3] < 0` $\\to$ True.\n    - $C_2$: `max == 0` $\\to$ False.\n    - $C_3$: `a[3] > max` (tức là `-1 > -2`) $\\to$ **True** (Đã bao phủ được cả True và False cho $C_3$).\n    - Kết quả biểu thức `if` là True, thực hiện `max = -1`.\n\n  Như vậy, chỉ cần **1 test case** duy nhất chứa mảng `a[] = {-2, 5, -5, -1}`, ta đã bao phủ thành công tất cả các giá trị True và False của cả 3 điều kiện đơn lẻ $C_1, C_2, C_3$.",
      "d": "Sai. Vì đều đưa ra số lượng test case nhiều hơn mức tối thiểu cần thiết."
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
    "correct": "a",
    "explanations": {
      "a": "Đúng. Vì câu hỏi này hoàn toàn tương tự câu 20. \"Phủ điều kiện 100%\" (Condition Coverage 100%) chính là \"phủ cấp 3\". Như phân tích chi tiết ở Câu 20, chỉ cần **1 test case** với mảng `a[] = {-2, 5, -5, -1}` là đã đủ bao phủ 100% các giá trị True/False cho tất cả các điều kiện logic đơn lẻ.",
      "b": "Sai. Vì đều lớn hơn số test case tối thiểu thực tế.",
      "c": "Sai. Vì đều lớn hơn số test case tối thiểu thực tế.",
      "d": "Sai. Vì đều lớn hơn số test case tối thiểu thực tế."
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
    "correct": "b",
    "explanations": {
      "a": "Sai. Vì đều lớn hơn số test case tối thiểu thực tế.",
      "b": "Đúng. Vì phủ nhánh (Branch Coverage / Decision Coverage) yêu cầu kiểm thử tất cả các kết quả đúng (True) và sai (False) của điểm quyết định `if` (tức là đi qua cả nhánh chạy vào trong `if` và nhánh bỏ qua `if`).\n  Chỉ cần **1 test case** có mảng nhiều phần tử, ví dụ: `a[] = {-2, 5}` với `n = 2`:\n  - Khi $i = 0$, $a[0] = -2$: Biểu thức điều kiện là True $\\to$ Thực thi khối lệnh trong `if` (Nhánh True được bao phủ).\n  - Khi $i = 1$, $a[1] = 5$: Biểu thức điều kiện là False $\\to$ Bỏ qua khối lệnh trong `if` (Nhánh False được bao phủ).\n  Do đó, chỉ cần **1 test case** duy nhất là có thể đạt 100% phủ nhánh.",
      "c": "Sai. Vì đều lớn hơn số test case tối thiểu thực tế.",
      "d": "Sai. Vì đều lớn hơn số test case tối thiểu thực tế."
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
      "a": "Sai. Vì - Sandwich testing: Tích hợp kết hợp cả hai hướng Top-down và Bottom-up.\n    - Bottom-up: Tích hợp và kiểm thử lần lượt từ dưới lên trên.\n    - Top-down: Tích hợp và kiểm thử lần lượt từ trên xuống dưới.",
      "b": "Sai. Vì - Sandwich testing: Tích hợp kết hợp cả hai hướng Top-down và Bottom-up.\n    - Bottom-up: Tích hợp và kiểm thử lần lượt từ dưới lên trên.\n    - Top-down: Tích hợp và kiểm thử lần lượt từ trên xuống dưới.",
      "c": "Sai. Vì - Sandwich testing: Tích hợp kết hợp cả hai hướng Top-down và Bottom-up.\n    - Bottom-up: Tích hợp và kiểm thử lần lượt từ dưới lên trên.\n    - Top-down: Tích hợp và kiểm thử lần lượt từ trên xuống dưới.",
      "d": "Đúng. Vì Big-Bang testing (Kiểm thử vụ nổ lớn) là một phương pháp kiểm thử tích hợp trong đó mọi module/thành phần của hệ thống đều được ghép nối và tích hợp đồng thời cùng một lúc, sau đó thực hiện test toàn bộ."
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
      "a": "Sai. Vì đều chứa các giá trị thuộc các lớp tương đương khác nhau (ví dụ: `999999` và `100000` thuộc lớp không hợp lệ lớn hơn `99999`, trong khi các số còn lại thuộc lớp hợp lệ).",
      "b": "Đúng. Vì ta có các phân vùng tương đương cho biến đầu vào:\n    1. Phân vùng không hợp lệ 1: `< 1000`\n    2. Phân vùng hợp lệ: `[1000, 99999]`\n    3. Phân vùng không hợp lệ 2: `> 99999`\n    Xét các giá trị ở phương án B: `1000`, `5000`, `10000` đều nằm trong khoảng hợp lệ từ `1000` đến `99999`. Do đó chúng thuộc cùng 1 lớp tương đương.",
      "c": "Sai. Vì đều chứa các giá trị thuộc các lớp tương đương khác nhau (ví dụ: `999999` và `100000` thuộc lớp không hợp lệ lớn hơn `99999`, trong khi các số còn lại thuộc lớp hợp lệ).",
      "d": "Sai. Vì đều chứa các giá trị thuộc các lớp tương đương khác nhau (ví dụ: `999999` và `100000` thuộc lớp không hợp lệ lớn hơn `99999`, trong khi các số còn lại thuộc lớp hợp lệ)."
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
      "a": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "b": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "c": "Đúng. Vì test Plan (Kế hoạch kiểm thử) là tài liệu định hướng được lập ra trước khi quá trình thực thi kiểm thử diễn ra. Trong khi đó, Báo cáo kết quả test (Test Summary Report) chỉ có thể được viết sau khi kết thúc việc thực thi test để báo cáo kết quả thực tế. Do đó, báo cáo kết quả không thể nằm trong kế hoạch kiểm thử ban đầu.\n  * **A, B, D sai (đều có trong Test Plan):** Theo tiêu chuẩn IEEE 829 về Test Plan, các phần như Môi trường kiểm thử (Test Environment), Phạm vi loại trừ kiểm thử (Features not to be tested), Lịch trình và Mốc thời gian (Schedule) đều bắt buộc phải có.",
      "d": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học."
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
      "a": "Sai. Vì đều là các mức kiểm thử đã thực hiện xong ở các bước trước đó trước khi tiến hành kiểm thử hệ thống.",
      "b": "Sai. Vì đều là các mức kiểm thử đã thực hiện xong ở các bước trước đó trước khi tiến hành kiểm thử hệ thống.",
      "c": "Sai. Vì đều là các mức kiểm thử đã thực hiện xong ở các bước trước đó trước khi tiến hành kiểm thử hệ thống.",
      "d": "Đúng. Vì trình tự các mức kiểm thử tiêu chuẩn là: Kiểm thử đơn vị (Unit) $\\to$ Kiểm thử tích hợp (Integration) $\\to$ Kiểm thử hệ thống (System) $\\to$ Kiểm thử chấp nhận (Acceptance). Do đó, Kiểm thử hệ thống là mức kiểm thử diễn ra ngay trước Kiểm thử chấp nhận."
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
      "a": "Sai. Vì đều đưa ra các định nghĩa và mục đích sai lệch, không liên quan đến kỹ thuật phân vùng tương đương.",
      "b": "Sai. Vì đều đưa ra các định nghĩa và mục đích sai lệch, không liên quan đến kỹ thuật phân vùng tương đương.",
      "c": "Đúng. Vì đây là định nghĩa và mục tiêu cốt lõi của kỹ thuật phân vùng tương đương (Equivalence Partitioning). Việc chia nhỏ các tập hợp giá trị đầu vào thành các phân vùng đại diện giúp giảm số lượng test case cần chạy mà vẫn đảm bảo tính bao quát của việc kiểm thử.",
      "d": "Sai. Vì đều đưa ra các định nghĩa và mục đích sai lệch, không liên quan đến kỹ thuật phân vùng tương đương."
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
      "a": "Sai. Vì - A, B: Kiểm thử đơn vị/module diễn ra trước kiểm thử tích hợp.\n    - D: Kiểm thử chấp nhận diễn ra sau kiểm thử hệ thống.",
      "b": "Sai. Vì - A, B: Kiểm thử đơn vị/module diễn ra trước kiểm thử tích hợp.\n    - D: Kiểm thử chấp nhận diễn ra sau kiểm thử hệ thống.",
      "c": "Đúng. Vì theo đúng thứ tự tuyến tính trong quy trình phát triển phần mềm, sau khi hoàn tất Kiểm thử tích hợp (tích hợp các module riêng lẻ thành khối), hệ thống hoàn chỉnh sẽ được đưa vào thực hiện Kiểm thử hệ thống.",
      "d": "Sai. Vì - A, B: Kiểm thử đơn vị/module diễn ra trước kiểm thử tích hợp.\n    - D: Kiểm thử chấp nhận diễn ra sau kiểm thử hệ thống."
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
      "a": "Sai. Vì không thể chứng minh hệ thống hoàn toàn sạch lỗi (Nguyên tắc kiểm thử 1).",
      "b": "Đúng. Vì mục tiêu cơ bản của Kiểm thử chấp nhận (Acceptance Testing) là xây dựng niềm tin rằng hệ thống đã hoàn thiện, hoạt động đúng mục tiêu nghiệp vụ và đáp ứng đầy đủ các yêu cầu đã thỏa thuận để khách hàng sẵn sàng nghiệm thu và đưa vào sử dụng thực tế.",
      "c": "Sai. Vì bảo mật thuộc về kiểm thử hệ thống phi chức năng; tích hợp là mục tiêu của kiểm thử tích hợp.",
      "d": "Sai. Vì bảo mật thuộc về kiểm thử hệ thống phi chức năng; tích hợp là mục tiêu của kiểm thử tích hợp."
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
      "a": "Sai. Vì đây không phải mục tiêu kiểm tra chính của giai đoạn kiểm thử tích hợp (chúng được giải quyết ở mức kiểm thử đơn vị hoặc kiểm thử hệ thống).",
      "b": "Sai. Vì đây không phải mục tiêu kiểm tra chính của giai đoạn kiểm thử tích hợp (chúng được giải quyết ở mức kiểm thử đơn vị hoặc kiểm thử hệ thống).",
      "c": "Sai. Vì đây không phải mục tiêu kiểm tra chính của giai đoạn kiểm thử tích hợp (chúng được giải quyết ở mức kiểm thử đơn vị hoặc kiểm thử hệ thống).",
      "d": "Đúng. Vì kiểm thử tích hợp (Integration Testing) tập trung vào giao diện (interfaces) và sự tương tác giữa các module với nhau (ví dụ: lỗi truyền tham số sai kiểu dữ liệu, sai thứ tự dữ liệu giữa API và database). Trong lý thuyết kiểm thử phần mềm, cụm từ \"lỗi giao diện\" ở đây chỉ các lỗi tại giao diện liên kết (interface) giữa các thành phần."
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
      "a": "Đúng. Vì nguyên tắc \"Lỗi thường tập trung\" (Defect Clustering) chỉ ra rằng phần lớn các lỗi thường chỉ tập trung trong một số lượng nhỏ các module (nguyên lý 80/20). Do đó, khi phát hiện một module có nhiều lỗi, tester cần tập trung test thêm ở khu vực đó vì khả năng còn lỗi tiềm ẩn là rất cao.",
      "b": "Sai. Vì đều là các nguyên tắc kiểm thử khác, không mô tả hiện tượng gom cụm lỗi nêu trên.",
      "c": "Sai. Vì đều là các nguyên tắc kiểm thử khác, không mô tả hiện tượng gom cụm lỗi nêu trên.",
      "d": "Sai. Vì đều là các nguyên tắc kiểm thử khác, không mô tả hiện tượng gom cụm lỗi nêu trên."
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
      "a": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "b": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "c": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "d": "Đúng. Vì đây là đáp án chính xác theo tài liệu chuẩn ôn tập môn học."
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
      "a": "Sai. Vì phủ lệnh chỉ là thước đo tỷ lệ, không bắt buộc hay xác nhận tất cả mọi câu lệnh đều đã được chạy (có thể kết quả đo chỉ đạt 70%).",
      "b": "Đúng. Vì phủ lệnh (Statement Coverage) đo lường tỉ lệ phần trăm các câu lệnh nguồn đã thực thi trên tổng số câu lệnh của chương trình.",
      "c": "Sai. Vì sai định nghĩa toán học của phủ lệnh (không tính theo số lượng test case hay chỉ tính test case pass).",
      "d": "Sai. Vì sai định nghĩa toán học của phủ lệnh (không tính theo số lượng test case hay chỉ tính test case pass)."
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
      "a": "Sai. Vì đều là những hiểu lầm phổ biến và sai lầm nghiêm trọng trong lý thuyết kiểm thử phần mềm.",
      "b": "Sai. Vì đều là những hiểu lầm phổ biến và sai lầm nghiêm trọng trong lý thuyết kiểm thử phần mềm.",
      "c": "Sai. Vì đều là những hiểu lầm phổ biến và sai lầm nghiêm trọng trong lý thuyết kiểm thử phần mềm.",
      "d": "Đúng. Vì đây là phát biểu chuẩn của nguyên tắc \"Kiểm thử toàn diện là không thể\"."
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
      "a": "Đúng. Vì kiểm thử Alpha và Kiểm thử Beta là hai giai đoạn cốt lõi của Kiểm thử chấp nhận (Acceptance Testing) nhằm thu thập phản hồi từ người dùng thực tế trước khi phát hành chính thức.",
      "b": "Sai. Vì đều không phải cấp độ kiểm thử trực tiếp chứa Alpha và Beta testing.\n\n---\n\n## BỘ 2: 56 CÂU HỎI TRẮC NGHIỆM (ĐÀN XEN THIẾT KẾ VÀ HIỆN THỰC)",
      "c": "Sai. Vì đều không phải cấp độ kiểm thử trực tiếp chứa Alpha và Beta testing.\n\n---\n\n## BỘ 2: 56 CÂU HỎI TRẮC NGHIỆM (ĐÀN XEN THIẾT KẾ VÀ HIỆN THỰC)",
      "d": "Sai. Vì đều không phải cấp độ kiểm thử trực tiếp chứa Alpha và Beta testing.\n\n---\n\n## BỘ 2: 56 CÂU HỎI TRẮC NGHIỆM (ĐÀN XEN THIẾT KẾ VÀ HIỆN THỰC)"
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
      "a": "Sai. Vì đây là hoạt động viết mã nguồn (Coding / Implementation).",
      "b": "Đúng. Vì thiết kế phần mềm (Software Design) là giai đoạn định nghĩa kiến trúc, cấu trúc, các thành phần (components), giao diện và mối quan hệ giữa chúng để đáp ứng các yêu cầu nghiệp vụ của hệ thống.",
      "c": "Sai. Vì kiểm thử (Testing) và Bảo trì (Maintenance) là các giai đoạn độc lập khác trong vòng đời phát triển phần mềm (SDLC).",
      "d": "Sai. Vì kiểm thử (Testing) và Bảo trì (Maintenance) là các giai đoạn độc lập khác trong vòng đời phát triển phần mềm (SDLC)."
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
      "a": "Sai. Vì đều là các hoạt động hoặc giai đoạn khác ngoài lập trình viết code.",
      "b": "Đúng. Vì hiện thực phần mềm (Implementation/Coding) là quá trình chuyển đổi các mô hình và đặc tả thiết kế chi tiết thành mã nguồn chương trình chạy được trên máy tính.",
      "c": "Sai. Vì đều là các hoạt động hoặc giai đoạn khác ngoài lập trình viết code.",
      "d": "Sai. Vì đều là các hoạt động hoặc giai đoạn khác ngoài lập trình viết code."
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
      "a": "Sai. Vì phản ánh quan điểm cứng nhắc hoặc tách rời, không đúng với thực tế phát triển phần mềm chuyên nghiệp.",
      "b": "Đúng. Vì trong các mô hình phát triển phần mềm hiện đại (như Agile), hoạt động thiết kế và viết code (hiện thực) luôn đan xen, tác động qua lại lẫn nhau (interleaved). Quá trình viết code có thể làm thay đổi thiết kế chi tiết để tối ưu hiệu năng và ngược lại.",
      "c": "Sai. Vì phản ánh quan điểm cứng nhắc hoặc tách rời, không đúng với thực tế phát triển phần mềm chuyên nghiệp.",
      "d": "Sai. Vì phản ánh quan điểm cứng nhắc hoặc tách rời, không đúng với thực tế phát triển phần mềm chuyên nghiệp."
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
      "a": "Đúng. Vì UML (Unified Modeling Language - Ngôn ngữ mô hình hóa thống nhất) là công cụ đồ họa chuẩn hóa dùng để trực quan hóa, đặc tả và biểu diễn cấu trúc cũng như hành vi của hệ thống hướng đối tượng.",
      "b": "Sai. Vì - SQL: Ngôn ngữ truy vấn cơ sở dữ liệu.\n    - HTML: Ngôn ngữ đánh dấu siêu văn bản để dựng layout web.\n    - XML: Định dạng dữ liệu dạng văn bản để trao đổi dữ liệu.",
      "c": "Sai. Vì - SQL: Ngôn ngữ truy vấn cơ sở dữ liệu.\n    - HTML: Ngôn ngữ đánh dấu siêu văn bản để dựng layout web.\n    - XML: Định dạng dữ liệu dạng văn bản để trao đổi dữ liệu.",
      "d": "Sai. Vì - SQL: Ngôn ngữ truy vấn cơ sở dữ liệu.\n    - HTML: Ngôn ngữ đánh dấu siêu văn bản để dựng layout web.\n    - XML: Định dạng dữ liệu dạng văn bản để trao đổi dữ liệu."
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
      "a": "Sai. Vì định nghĩa không đúng bản chất của Design Pattern.",
      "b": "Sai. Vì định nghĩa không đúng bản chất của Design Pattern.",
      "c": "Đúng. Vì thiết kế mẫu (Design Pattern) là một giải pháp tổng quát đã được tối ưu hóa, có thể tái sử dụng để giải quyết các vấn đề thường gặp trong thiết kế kiến trúc phần mềm.",
      "d": "Sai. Vì định nghĩa không đúng bản chất của Design Pattern."
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
      "a": "Sai. Vì đều không phải đặc thù của phát triển phần mềm mã nguồn mở.",
      "b": "Đúng. Vì phát triển phần mềm mã nguồn mở (Open Source Development) là quá trình xây dựng hệ thống phần mềm bằng việc tích hợp, sử dụng và đóng góp cho sự phát triển của các thành phần mã nguồn mở sẵn có dưới các giấy phép tương ứng.",
      "c": "Sai. Vì đều không phải đặc thù của phát triển phần mềm mã nguồn mở.",
      "d": "Sai. Vì đều không phải đặc thù của phát triển phần mềm mã nguồn mở."
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
      "a": "Sai. Vì chỉ là một khía cạnh thiết kế đáp ứng (responsive), không bao quát bằng B.",
      "b": "Đúng. Vì nguyên lý đặt người dùng làm trung tâm (User-Centered Design) đòi hỏi thiết kế UI phải phù hợp với nhu cầu, mức độ kinh nghiệm, thói quen và khả năng của người dùng mục tiêu để tối đa hóa hiệu quả sử dụng.",
      "c": "Sai. Vì thiết kế giao diện chuyên nghiệp thường làm tăng chi phí và thời gian phát triển ban đầu, chứ không làm giảm chi phí hay tăng tốc độ lập trình.",
      "d": "Sai. Vì thiết kế giao diện chuyên nghiệp thường làm tăng chi phí và thời gian phát triển ban đầu, chứ không làm giảm chi phí hay tăng tốc độ lập trình."
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
      "a": "Sai. Vì không phải là đối tượng trực tiếp chi phối các nghiên cứu công thái học (ergonomics) của giao diện người dùng.",
      "b": "Đúng. Vì nhà thiết kế UI phải nhận thức được các giới hạn về mặt vật lý (kích thước nút bấm, khoảng cách mắt nhìn, sự phân biệt màu sắc) và tinh thần (dung lượng bộ nhớ ngắn hạn của con người) để thiết kế giao diện thân thiện và hạn chế lỗi thao tác.",
      "c": "Sai. Vì không phải là đối tượng trực tiếp chi phối các nghiên cứu công thái học (ergonomics) của giao diện người dùng.",
      "d": "Sai. Vì không phải là đối tượng trực tiếp chi phối các nghiên cứu công thái học (ergonomics) của giao diện người dùng."
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
      "a": "Sai. Vì mô hình hóa không trực tiếp giảm thời gian hay lỗi, mà gián tiếp thông qua việc cải thiện giao tiếp và hiểu biết thiết kế.",
      "b": "Đúng. Vì ở các dự án lớn có sự tham gia của nhiều nhóm phát triển độc lập, mô hình thiết kế (như các biểu đồ kiến trúc hệ thống, API specs) đóng vai trò là phương tiện giao tiếp chung để các nhóm hiểu và phối hợp làm việc đồng bộ.",
      "c": "Sai. Vì không phải là vai trò của mô hình thiết kế.",
      "d": "Sai. Vì mô hình hóa không trực tiếp giảm thời gian hay lỗi, mà gián tiếp thông qua việc cải thiện giao tiếp và hiểu biết thiết kế."
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
      "a": "Sai. Vì đều là các giai đoạn hoạt động khác của SDLC.",
      "b": "Đúng. Vì thiết kế thuật toán (Algorithm Design) là việc xác định các bước xử lý logic, các phép tính toán cần thiết để giải quyết một bài toán cụ thể.",
      "c": "Sai. Vì đều là các giai đoạn hoạt động khác của SDLC.",
      "d": "Sai. Vì đều là các giai đoạn hoạt động khác của SDLC."
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
      "a": "Sai. Vì đều thuộc phạm vi của các lĩnh vực thiết kế khác hoặc kiểm thử.",
      "b": "Đúng. Vì thiết kế CSDL là quá trình phân tích thực thể liên kết, định nghĩa cấu trúc bảng (tables), các quan hệ giữa các bảng và các ràng buộc toàn vẹn của dữ liệu.",
      "c": "Sai. Vì đều thuộc phạm vi của các lĩnh vực thiết kế khác hoặc kiểm thử.",
      "d": "Sai. Vì đều thuộc phạm vi của các lĩnh vực thiết kế khác hoặc kiểm thử."
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
      "a": "Sai. Vì là những giả định sai lầm trong thiết kế trải nghiệm người dùng.",
      "b": "Đúng. Vì thiết kế UI phải dựa trên thực tế là con người có thể phạm sai lầm (User error). Do đó, giao diện phải được thiết kế có tính dung lỗi (error tolerance), bao gồm cảnh báo khi thao tác nguy hiểm và cung cấp tính năng hoàn tác (Undo).",
      "c": "Sai. Vì là những giả định sai lầm trong thiết kế trải nghiệm người dùng.",
      "d": "Sai. Vì là những giả định sai lầm trong thiết kế trải nghiệm người dùng."
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
      "a": "Sai. Vì không phải mục tiêu trực tiếp và quan trọng nhất của UI/UX.",
      "b": "Đúng. Vì mục tiêu tối thượng của thiết kế UI/UX là tạo ra một giao diện thân thiện, dễ sử dụng, đáp ứng tối đa nhu cầu sử dụng và mang lại trải nghiệm tốt nhất cho người dùng.",
      "c": "Sai. Vì không phải mục tiêu trực tiếp và quan trọng nhất của UI/UX.",
      "d": "Sai. Vì không phải mục tiêu trực tiếp và quan trọng nhất của UI/UX."
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
      "a": "Sai. Vì đều thuộc các giai đoạn khác của quy trình phát triển.",
      "b": "Đúng. Vì thiết kế phần mềm bao gồm việc định hình kiến trúc, chia nhỏ hệ thống thành các thành phần (modules) và xác định giao thức/mối liên kết giao tiếp giữa chúng.",
      "c": "Sai. Vì đều thuộc các giai đoạn khác của quy trình phát triển.",
      "d": "Sai. Vì đều thuộc các giai đoạn khác của quy trình phát triển."
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
      "a": "Sai. Vì đều là các loại biểu đồ tĩnh (Class, Component) hoặc biểu đồ tương tác, không thuộc nhóm biểu đồ hoạt động.",
      "b": "Sai. Vì đều là các loại biểu đồ tĩnh (Class, Component) hoặc biểu đồ tương tác, không thuộc nhóm biểu đồ hoạt động.",
      "c": "Đúng. Vì biểu đồ hoạt động phân làn (Activity Diagram with Swimlanes) là một loại biểu đồ hành vi trong UML dùng để mô tả luồng công việc và chỉ rõ đối tượng chịu trách nhiệm thực thi các bước đó.",
      "d": "Sai. Vì đều là các loại biểu đồ tĩnh (Class, Component) hoặc biểu đồ tương tác, không thuộc nhóm biểu đồ hoạt động."
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
      "a": "Sai. Vì rất nguy hiểm vì có thể vi phạm bản quyền (ví dụ: vô ý sử dụng thư viện GPL trong dự án mã nguồn đóng thương mại).",
      "b": "Đúng. Vì việc quản lý bản quyền mã nguồn mở yêu cầu ghi chép và theo dõi kỹ lưỡng các thông tin bản quyền của các thư viện bên thứ ba mà dự án sử dụng để đảm bảo tính tuân thủ pháp lý khi phân phối sản phẩm.",
      "c": "Sai. Vì không liên quan đến quản lý bản quyền.",
      "d": "Sai. Vì không liên quan đến quản lý bản quyền."
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
      "a": "Sai. Vì đều không phải là nguyên tắc kỹ nghệ phần mềm chuẩn mực.",
      "b": "Đúng. Vì nguyên tắc thiết kế phần mềm tốt luôn hướng tới khả năng dễ đọc, dễ sửa lỗi (bảo trì) và dễ tích hợp thêm tính năng mới mà không phá vỡ cấu trúc cũ (khả năng mở rộng).",
      "c": "Sai. Vì đều không phải là nguyên tắc kỹ nghệ phần mềm chuẩn mực.",
      "d": "Sai. Vì đều không phải là nguyên tắc kỹ nghệ phần mềm chuẩn mực."
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
      "a": "Đúng. Vì thiết kế CSDL liên quan đến việc cấu trúc hóa thông tin, định nghĩa các bảng dữ liệu, khóa chính, khóa ngoại và các ràng buộc dữ liệu.",
      "b": "Sai. Vì đều thuộc các bước khác trong quy trình phát triển dự án.",
      "c": "Sai. Vì đều thuộc các bước khác trong quy trình phát triển dự án.",
      "d": "Sai. Vì đều thuộc các bước khác trong quy trình phát triển dự án."
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
      "a": "Sai. Vì không phải chức năng hay vai trò của thuật toán.",
      "b": "Đúng. Vì vai trò của thiết kế thuật toán là tìm ra cách thức giải quyết một bài toán logic cụ thể thông qua một chuỗi các bước xử lý tuần tự và chính xác.",
      "c": "Sai. Vì không phải chức năng hay vai trò của thuật toán.",
      "d": "Sai. Vì không phải chức năng hay vai trò của thuật toán."
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
      "a": "Đúng. Vì việc hiện thực phần mềm (coding) có mục đích trực tiếp là lập trình cụ thể hóa các bản thiết kế chi tiết thành mã lệnh thực thi chính xác.",
      "b": "Sai. Vì thỏa mãn người dùng cuối là đích đến của toàn bộ dự án, được nghiệm thu ở giai đoạn kiểm thử chấp nhận.",
      "c": "Sai. Vì tăng độ phức tạp là điều cần tránh; hiện thực code không trực tiếp làm giảm chi phí phát triển.",
      "d": "Sai. Vì tăng độ phức tạp là điều cần tránh; hiện thực code không trực tiếp làm giảm chi phí phát triển."
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
      "a": "Đúng. Vì unit Implementation (Hiện thực đơn vị) là việc viết mã nguồn chi tiết cho các thành phần phần mềm nhỏ nhất (chức năng, lớp, phương thức) có thể chạy độc lập.",
      "b": "Sai. Vì đều là các hoạt động ngoài viết mã đơn vị.",
      "c": "Sai. Vì đều là các hoạt động ngoài viết mã đơn vị.",
      "d": "Sai. Vì đều là các hoạt động ngoài viết mã đơn vị."
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
      "a": "Đúng. Vì trước khi viết code, việc kiểm tra lại yêu cầu nghiệp vụ và thiết kế chi tiết một lần nữa là quy tắc vàng giúp hạn chế sai lệch hiểu biết của lập trình viên, tránh lãng phí thời gian viết code sai.",
      "b": "Sai. Vì đều bỏ qua hoặc giảm nhẹ tầm quan trọng của việc đối chiếu yêu cầu và thiết kế trong quá trình phát triển mã nguồn.",
      "c": "Sai. Vì đều bỏ qua hoặc giảm nhẹ tầm quan trọng của việc đối chiếu yêu cầu và thiết kế trong quá trình phát triển mã nguồn.",
      "d": "Sai. Vì đều bỏ qua hoặc giảm nhẹ tầm quan trọng của việc đối chiếu yêu cầu và thiết kế trong quá trình phát triển mã nguồn."
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
      "a": "Đúng. Vì xác nhận thiết kế chi tiết nhằm đảm bảo thiết kế đó phản ánh đúng đắn, không sai lệch so với mong đợi của người dùng trước khi tiến hành code.",
      "b": "Sai. Vì chỉ là những kết quả gián tiếp hoặc mục tiêu phụ không sát bằng A.",
      "c": "Sai. Vì chỉ là những kết quả gián tiếp hoặc mục tiêu phụ không sát bằng A.",
      "d": "Sai. Vì chỉ là những kết quả gián tiếp hoặc mục tiêu phụ không sát bằng A."
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
      "a": "Đúng. Vì sử dụng biểu mẫu ghi nhận lỗi (Defect Log Form) giúp lưu giữ thông tin chi tiết về lỗi, từ đó quản lý trạng thái sửa lỗi một cách chặt chẽ và có hệ thống.",
      "b": "Sai. Vì sai mục đích của hoạt động quản lý lỗi (Bug/Defect tracking).",
      "c": "Sai. Vì sai mục đích của hoạt động quản lý lỗi (Bug/Defect tracking).",
      "d": "Sai. Vì sai mục đích của hoạt động quản lý lỗi (Bug/Defect tracking)."
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
      "a": "Đúng. Vì lập trình viên viết mã nguồn trước hết phải đảm bảo tính đúng đắn (correctness - chạy đúng logic) và tính rõ ràng (readability - dễ đọc, tuân thủ coding standards).",
      "b": "Sai. Vì đều không phản ánh hai tiêu chuẩn chất lượng cơ bản nhất của dòng mã nguồn viết ra.",
      "c": "Sai. Vì đều không phản ánh hai tiêu chuẩn chất lượng cơ bản nhất của dòng mã nguồn viết ra.",
      "d": "Sai. Vì đều không phản ánh hai tiêu chuẩn chất lượng cơ bản nhất của dòng mã nguồn viết ra."
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
      "a": "Đúng. Vì việc ước lượng kích thước phần mềm và thời gian thực hiện dự án phải có căn cứ khoa học, dựa trên dữ liệu thực tế lịch sử (historical data) của các dự án trước đó kết hợp với các mô hình tính toán.",
      "b": "Sai. Vì - Kinh nghiệm cá nhân: Chỉ mang tính chất tham khảo chủ quan, độ chính xác không cao.\n    - Yêu cầu và ngân sách: Là các ràng buộc của dự án chứ không phải là căn cứ kỹ thuật để tính toán lượng công việc thực tế.",
      "c": "Sai. Vì - Kinh nghiệm cá nhân: Chỉ mang tính chất tham khảo chủ quan, độ chính xác không cao.\n    - Yêu cầu và ngân sách: Là các ràng buộc của dự án chứ không phải là căn cứ kỹ thuật để tính toán lượng công việc thực tế.",
      "d": "Sai. Vì - Kinh nghiệm cá nhân: Chỉ mang tính chất tham khảo chủ quan, độ chính xác không cao.\n    - Yêu cầu và ngân sách: Là các ràng buộc của dự án chứ không phải là căn cứ kỹ thuật để tính toán lượng công việc thực tế."
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
      "a": "Đúng. Vì trong quy trình hiện thực (coding), bước đầu tiên trước khi gõ các dòng mã là lập kế hoạch cấu trúc các lớp và thiết kế mã chi tiết để đảm bảo code logic mạch lạc.",
      "b": "Sai. Vì đều thuộc các giai đoạn/lĩnh vực hoạt động khác ngoài việc lập trình mã nguồn.",
      "c": "Sai. Vì đều thuộc các giai đoạn/lĩnh vực hoạt động khác ngoài việc lập trình mã nguồn.",
      "d": "Sai. Vì đều thuộc các giai đoạn/lĩnh vực hoạt động khác ngoài việc lập trình mã nguồn."
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
      "a": "Đúng. Vì việc tự soát xét thiết kế và cấu trúc lớp giúp lập trình viên phát hiện sớm các lỗi logic thiết kế trước khi bắt tay vào gõ lệnh, từ đó đảm bảo mã nguồn viết ra chạy đúng đắn và đạt hiệu suất cao.",
      "b": "Sai. Vì tự kiểm tra có thể làm giảm tốc độ viết code ban đầu nhưng giúp tối ưu hóa tổng thời gian và tính đúng đắn của phần mềm.",
      "c": "Sai. Vì tự kiểm tra có thể làm giảm tốc độ viết code ban đầu nhưng giúp tối ưu hóa tổng thời gian và tính đúng đắn của phần mềm.",
      "d": "Sai. Vì tự kiểm tra có thể làm giảm tốc độ viết code ban đầu nhưng giúp tối ưu hóa tổng thời gian và tính đúng đắn của phần mềm."
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
      "a": "Đúng. Vì tên biến, tên lớp, tên phương thức phải phù hợp với ngữ cảnh nghiệp vụ và rõ nghĩa (self-documenting) để hỗ trợ tối đa cho việc đọc hiểu và bảo trì code sau này.",
      "b": "Sai. Vì tên quá ngắn (như a, b, temp) thường làm mất đi ý nghĩa nghiệp vụ của biến.",
      "c": "Sai. Vì tên quá phức tạp làm mã nguồn rối rắm, khó đọc.",
      "d": "Sai. Vì đặt tên tùy tiện làm hỏng tính nhất quán của hệ thống."
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
      "a": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "b": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "c": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "d": "Đúng. Vì khi xem xét, đánh giá một Class (Class Code Review), ta cần kiểm tra tổng thể: tên Class có phản ánh đúng thực thể, Class có áp dụng nguyên lý trừu tượng hóa (Abstraction) phù hợp hay không, và phần tài liệu mô tả mục đích của Class có đầy đủ hay không."
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
      "a": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "b": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "c": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "d": "Đúng. Vì khi soát xét các thuộc tính của một lớp (Class Attributes Review), ta cần đánh giá toàn diện: thuộc tính đó có thực sự cần thiết không (tránh dư thừa), có thể tối ưu bộ nhớ bằng cách khai báo `static` không, và có nên khai báo `final` (hằng số) để bảo vệ giá trị dữ liệu không bị sửa đổi ngoài ý muốn không."
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
      "a": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "b": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "c": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "d": "Đúng. Vì khi soát xét phương thức khởi tạo (Constructor Review), ta cần xác định: constructor đó có thực sự cần thiết không, có sử dụng lại (leverage) các constructor khác bằng từ khóa `this(...)` để tránh lặp code không, và có thực thi việc khởi tạo (initialize) giá trị ban đầu cho toàn bộ thuộc tính của đối tượng hay không."
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
      "a": "Đúng. Vì năng suất lập trình thực tế (lines of code chất lượng) không phụ thuộc vào tốc độ gõ phím nhanh mà phụ thuộc vào việc thiết kế cấu trúc chương trình rõ ràng từ trước. Việc lên kế hoạch giúp lập trình viên viết code mạch lạc, trơn tru, hạn chế lỗi logic và không phải sửa đổi cấu trúc nhiều lần.",
      "b": "Sai. Vì đều không phải giải pháp cốt lõi về kỹ nghệ để duy trì hiệu suất viết code sạch và đúng đắn ở mức cao.",
      "c": "Sai. Vì đều không phải giải pháp cốt lõi về kỹ nghệ để duy trì hiệu suất viết code sạch và đúng đắn ở mức cao.",
      "d": "Sai. Vì đều không phải giải pháp cốt lõi về kỹ nghệ để duy trì hiệu suất viết code sạch và đúng đắn ở mức cao."
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
      "a": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "b": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "c": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "d": "Đúng. Vì câu hỏi này lặp lại nội dung của Câu 66. Các thuộc tính khi viết mã cần được duyệt qua các tiêu chí: sự cần thiết, tối ưu hóa qua static và tính đóng gói an toàn qua final."
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
      "a": "Đúng. Vì việc ghi nhận thời gian thực tế cho mỗi giai đoạn (Time logging) giúp lập trình viên tự quản lý công việc và giúp quản lý dự án theo dõi sát sao tiến độ hoàn thành so với kế hoạch đề ra.",
      "b": "Sai. Vì không liên quan đến mục đích kiểm soát quy trình viết mã nguồn.",
      "c": "Sai. Vì không liên quan đến mục đích kiểm soát quy trình viết mã nguồn.",
      "d": "Sai. Vì không liên quan đến mục đích kiểm soát quy trình viết mã nguồn."
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
      "a": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "b": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "c": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "d": "Đúng. Vì các bước chuẩn bị trước khi viết code bao gồm: xác nhận kỹ bản thiết kế chi tiết cần làm; đọc hiểu các yêu cầu thiết kế mô tả dưới dạng văn bản; và lên kế hoạch ghi chép lại thời gian thực hiện từng bước để quản lý hiệu suất."
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
      "a": "Đúng. Vì biên dịch (Compile) là việc dịch mã nguồn thành mã máy hoặc mã trung gian, trong quá trình đó trình biên dịch tự động kiểm tra và báo các lỗi cú pháp (Syntax errors) để lập trình viên sửa đổi.",
      "b": "Sai. Vì đều là các công việc nằm ngoài mục tiêu kỹ thuật của trình biên dịch.",
      "c": "Sai. Vì đều là các công việc nằm ngoài mục tiêu kỹ thuật của trình biên dịch.",
      "d": "Sai. Vì đều là các công việc nằm ngoài mục tiêu kỹ thuật của trình biên dịch."
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
      "a": "Đúng. Vì kiểm thử phần mềm (Software Testing) hướng tới hai mục tiêu cốt lõi: xác minh phần mềm chạy đúng yêu cầu đặc tả (Validation) và chủ động phát hiện ra các lỗi tiềm ẩn (Defect testing).",
      "b": "Sai. Vì đây là những lợi ích hoặc hệ quả kinh tế - quản lý ở cấp độ vĩ mô, không phải là định nghĩa chuyên môn trực tiếp của kiểm thử.",
      "c": "Sai. Vì đây là những lợi ích hoặc hệ quả kinh tế - quản lý ở cấp độ vĩ mô, không phải là định nghĩa chuyên môn trực tiếp của kiểm thử.",
      "d": "Sai. Vì đây là những lợi ích hoặc hệ quả kinh tế - quản lý ở cấp độ vĩ mô, không phải là định nghĩa chuyên môn trực tiếp của kiểm thử."
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
      "a": "Đúng. Vì kiểm thử đơn vị (Unit Testing) tập trung kiểm tra các thành phần logic độc lập nhỏ nhất của phần mềm, cụ thể là các phương thức (methods), các hàm (functions) hoặc các lớp (classes).",
      "b": "Sai. Vì đều là các mục tiêu kiểm tra cấp độ hệ thống (System Testing) hoặc tích hợp lớn hơn.",
      "c": "Sai. Vì đều là các mục tiêu kiểm tra cấp độ hệ thống (System Testing) hoặc tích hợp lớn hơn.",
      "d": "Sai. Vì đều là các mục tiêu kiểm tra cấp độ hệ thống (System Testing) hoặc tích hợp lớn hơn."
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
      "a": "Đúng. Vì theo giáo trình kỹ nghệ phần mềm, đối với các component phức tạp (được cấu thành từ nhiều Class), kiểm thử component tập trung vào việc kiểm tra các giao diện liên kết (interfaces) của component đó để đảm bảo nó giao tiếp đúng đắn và độc lập.",
      "b": "Sai. Vì kiểm thử chức năng phương thức là việc của unit test ở cấp độ nhỏ hơn.",
      "c": "Sai. Vì đều thuộc về kiểm thử phi chức năng hoặc giao diện ở mức hệ thống lớn.",
      "d": "Sai. Vì đều thuộc về kiểm thử phi chức năng hoặc giao diện ở mức hệ thống lớn."
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
      "a": "Đúng. Vì theo giáo trình kỹ nghệ phần mềm của Ian Sommerville, kiểm thử hệ thống trong giai đoạn phát triển (system testing during development) tập trung hàng đầu vào việc kiểm tra sự tương tác giữa các thành phần (interactions between components) tạo nên hệ thống để phát hiện các lỗi liên kết.",
      "b": "Sai. Vì là các loại kiểm thử cụ thể (UI, bảo mật, hiệu năng) nhưng không phải là trọng tâm định nghĩa bao trùm của kiểm thử hệ thống trong phát triển.",
      "c": "Sai. Vì là các loại kiểm thử cụ thể (UI, bảo mật, hiệu năng) nhưng không phải là trọng tâm định nghĩa bao trùm của kiểm thử hệ thống trong phát triển.",
      "d": "Sai. Vì là các loại kiểm thử cụ thể (UI, bảo mật, hiệu năng) nhưng không phải là trọng tâm định nghĩa bao trùm của kiểm thử hệ thống trong phát triển."
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
      "a": "Đúng. Vì các framework kiểm thử tự động như JUnit giúp lập trình viên tự động hóa việc thực thi và kiểm tra kết quả của các ca kiểm thử đơn vị một cách nhanh chóng và chính xác.",
      "b": "Sai. Vì không hỗ trợ viết và tự động hóa kiểm thử đơn vị.",
      "c": "Sai. Vì không hỗ trợ viết và tự động hóa kiểm thử đơn vị.",
      "d": "Sai. Vì không hỗ trợ viết và tự động hóa kiểm thử đơn vị."
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
      "a": "Đúng. Vì kiểm thử giao diện (Interface Testing) nhằm phát hiện lỗi giao tiếp giữa các thành phần, bao gồm các giả định sai lầm về dữ liệu truyền qua lại giữa các module.",
      "b": "Sai. Vì là mục tiêu của kiểm thử đơn vị, kiểm thử hiệu năng hoặc bảo mật.",
      "c": "Sai. Vì là mục tiêu của kiểm thử đơn vị, kiểm thử hiệu năng hoặc bảo mật.",
      "d": "Sai. Vì là mục tiêu của kiểm thử đơn vị, kiểm thử hiệu năng hoặc bảo mật."
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
      "a": "Đúng. Vì giáo trình kỹ nghệ phần mềm chỉ ra 4 loại giao diện kỹ thuật giữa các component: Giao diện có tham số (Parameter interfaces), Giao diện bộ nhớ dùng chung (Shared memory), Giao diện thủ tục (Procedural) và Giao diện truyền thông điệp (Message passing).",
      "b": "Sai. Vì không nằm trong phân loại 4 loại giao diện component này.",
      "c": "Sai. Vì không nằm trong phân loại 4 loại giao diện component này.",
      "d": "Sai. Vì không nằm trong phân loại 4 loại giao diện component này."
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
      "a": "Đúng. Vì kiểm thử phát triển (Development Testing) do chính đội ngũ lập trình viên (software developers) thực hiện trong suốt quá trình xây dựng mã nguồn để phát hiện lỗi sớm.",
      "b": "Sai. Vì không trực tiếp viết mã hoặc thực thi kiểm thử trong giai đoạn viết code này.",
      "c": "Sai. Vì không trực tiếp viết mã hoặc thực thi kiểm thử trong giai đoạn viết code này.",
      "d": "Sai. Vì không trực tiếp viết mã hoặc thực thi kiểm thử trong giai đoạn viết code này."
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
      "a": "Đúng. Vì kiểm thử phát hành (Release Testing) là quá trình kiểm thử một phiên bản hệ thống hoàn chỉnh ở giai đoạn cuối nhằm chứng minh sản phẩm đã sẵn sàng để chuyển giao cho người dùng.",
      "b": "Sai. Vì sai thời điểm thực hiện (release testing diễn ra ngay trước khi bàn giao phát hành).",
      "c": "Sai. Vì sai thời điểm thực hiện (release testing diễn ra ngay trước khi bàn giao phát hành).",
      "d": "Sai. Vì sai thời điểm thực hiện (release testing diễn ra ngay trước khi bàn giao phát hành)."
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
      "a": "Đúng. Vì kiểm thử hộp đen (Black-box testing) tập trung hoàn toàn vào chức năng nghiệp vụ của chương trình dựa trên yêu cầu đặc tả (inputs/outputs), mà không can thiệp hay hiểu cấu trúc mã nguồn bên trong.",
      "b": "Sai. Vì đều là các loại kiểm thử cụ thể bên trong hộp đen, không phải là định nghĩa chung.",
      "c": "Sai. Vì đều là các loại kiểm thử cụ thể bên trong hộp đen, không phải là định nghĩa chung.",
      "d": "Sai. Vì đều là các loại kiểm thử cụ thể bên trong hộp đen, không phải là định nghĩa chung."
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
      "a": "Đúng. Vì kiểm thử hộp trắng (White-box testing) tập trung thiết kế các ca kiểm thử dựa trên cấu trúc mã lệnh bên trong (như các đường chạy, các câu lệnh, các nhánh quyết định) để đạt độ bao phủ code tối đa.",
      "b": "Sai. Vì đều thuộc nhóm kiểm thử hành vi/chức năng hộp đen, không phải kiểm thử cấu trúc.",
      "c": "Sai. Vì đều thuộc nhóm kiểm thử hành vi/chức năng hộp đen, không phải kiểm thử cấu trúc.",
      "d": "Sai. Vì đều thuộc nhóm kiểm thử hành vi/chức năng hộp đen, không phải kiểm thử cấu trúc."
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
      "a": "Đúng. Vì kiểm thử hộp xám (Gray-box testing) kết hợp việc kiểm thử chức năng bên ngoài (hộp đen) với một phần hiểu biết về cấu trúc dữ liệu và thiết kế bên trong (hộp trắng) của hệ thống.",
      "b": "Sai. Vì không định nghĩa đúng bản chất tích hợp của hộp xám.",
      "c": "Sai. Vì không định nghĩa đúng bản chất tích hợp của hộp xám.",
      "d": "Sai. Vì không định nghĩa đúng bản chất tích hợp của hộp xám."
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
      "a": "Đúng. Vì validation Testing (Kiểm thử thẩm định) nhằm xác nhận sản phẩm phần mềm được làm ra đáp ứng đúng và đầy đủ các mong đợi, yêu cầu thực tế của khách hàng (Are we building the right product?).",
      "b": "Sai. Vì đây là mục tiêu của kiểm thử tìm lỗi (defect/verification testing).",
      "c": "Sai. Vì không phải mục tiêu trực tiếp.",
      "d": "Sai. Vì không phải mục tiêu trực tiếp."
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
      "a": "Đúng. Vì kiểm thử tìm lỗi (Defect Testing) có mục tiêu tìm ra các lỗi bằng cách thiết kế các ca kiểm thử làm bộc lộ lỗi, bắt chương trình hoạt động sai so với mong đợi.",
      "b": "Sai. Vì đây là mục tiêu của Validation testing.",
      "c": "Sai. Vì không phải mục tiêu trực tiếp.",
      "d": "Sai. Vì không phải mục tiêu trực tiếp."
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
      "a": "Đúng. Vì việc soát xét và đối chiếu kết quả thực tế khi chạy test với kết quả kỳ vọng giúp phát hiện ra các sai lệch (lỗi) và các điểm bất thường của phần mềm.",
      "b": "Sai. Vì đều sai mục đích chuyên môn của việc đánh giá kết quả test.",
      "c": "Sai. Vì đều sai mục đích chuyên môn của việc đánh giá kết quả test.",
      "d": "Sai. Vì đều sai mục đích chuyên môn của việc đánh giá kết quả test."
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
      "a": "Đúng. Vì kiểm thử người dùng (User Testing) là quá trình để chính những khách hàng, người dùng cuối thực thi hệ thống để đánh giá mức độ hỗ trợ công việc của sản phẩm trong thực tế.",
      "b": "Sai. Vì đều là các loại kiểm thử chuyên sâu do chuyên gia hoặc tester thực hiện.",
      "c": "Sai. Vì đều là các loại kiểm thử chuyên sâu do chuyên gia hoặc tester thực hiện.",
      "d": "Sai. Vì đều là các loại kiểm thử chuyên sâu do chuyên gia hoặc tester thực hiện."
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
      "a": "Đúng. Vì cải tiến quy trình phần mềm (Software Process Improvement) là việc phân tích các hoạt động phát triển hiện tại để tìm ra điểm nghẽn và cải tiến các phương pháp code, test nhằm tối ưu hóa năng suất và chất lượng.",
      "b": "Sai. Vì đều chỉ là các mục tiêu nhỏ hoặc kết quả gián tiếp của quy trình cải tiến.",
      "c": "Sai. Vì đều chỉ là các mục tiêu nhỏ hoặc kết quả gián tiếp của quy trình cải tiến.",
      "d": "Sai. Vì đều chỉ là các mục tiêu nhỏ hoặc kết quả gián tiếp của quy trình cải tiến."
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
      "a": "Đúng. Vì bảo trì phần mềm (Software Maintenance) gồm toàn bộ các hoạt động sửa đổi, nâng cấp phần mềm sau khi sản phẩm đã được bàn giao chính thức cho khách hàng vận hành.",
      "b": "Sai. Vì đều là các hoạt động nằm trong giai đoạn phát triển ban đầu của dự án.",
      "c": "Sai. Vì đều là các hoạt động nằm trong giai đoạn phát triển ban đầu của dự án.",
      "d": "Sai. Vì đều là các hoạt động nằm trong giai đoạn phát triển ban đầu của dự án."
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
      "a": "Đúng. Vì đây là đáp án chính xác theo tài liệu chuẩn ôn tập môn học.",
      "b": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "c": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "d": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học."
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
      "a": "Sai. Vì đây không phải mục tiêu cốt lõi hàng đầu dưới góc độ quản lý rủi ro và tối ưu hóa nguồn lực.",
      "b": "Đúng. Vì trọng tâm của việc lập độ ưu tiên kiểm thử là quản lý rủi ro (Risk-based testing). Bằng cách kiểm thử các khu vực có rủi ro cao trước, ta giảm thiểu tối đa khả năng xảy ra các lỗi nghiêm trọng trong thực tế khi thời gian và tài nguyên kiểm thử bị giới hạn.",
      "c": "Sai. Vì đây không phải mục tiêu cốt lõi hàng đầu dưới góc độ quản lý rủi ro và tối ưu hóa nguồn lực.",
      "d": "Sai. Vì đây không phải mục tiêu cốt lõi hàng đầu dưới góc độ quản lý rủi ro và tối ưu hóa nguồn lực."
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
    "correct": "a",
    "explanations": {
      "a": "Đúng. Vì trong môi trường dự án thực tế, thời hạn bàn giao (deadline) là yếu tố bắt buộc mang tính thương mại. Kiểm thử thường bị buộc phải kết thúc và bàn giao sản phẩm ngay khi hết thời gian quy định, dù có thể vẫn chưa chạy hết tất cả kịch bản hay tìm hết lỗi.",
      "b": "Sai. Vì đây là các tiêu chí dừng lý tưởng (đặc biệt là b), nhưng trên thực tế, yếu tố hết thời gian (a) là lý do phổ biến nhất buộc hoạt động kiểm thử phải dừng lại.",
      "c": "Sai. Vì đây là các tiêu chí dừng lý tưởng (đặc biệt là b), nhưng trên thực tế, yếu tố hết thời gian (a) là lý do phổ biến nhất buộc hoạt động kiểm thử phải dừng lại.",
      "d": "Sai. Vì đây là các tiêu chí dừng lý tưởng (đặc biệt là b), nhưng trên thực tế, yếu tố hết thời gian (a) là lý do phổ biến nhất buộc hoạt động kiểm thử phải dừng lại."
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
      "a": "Sai. Vì chỉ là các kết quả phụ hoặc yếu tố tổ chức, không phải lợi ích kinh tế - kỹ thuật cốt lõi của xác minh sớm.",
      "b": "Sai. Vì chỉ là các kết quả phụ hoặc yếu tố tổ chức, không phải lợi ích kinh tế - kỹ thuật cốt lõi của xác minh sớm.",
      "c": "Đúng. Vì việc thực hiện xác minh sớm (review tài liệu yêu cầu, thiết kế) giúp phát hiện và sửa các lỗi ngay tại giai đoạn phát sinh, ngăn chặn lỗi lan truyền và nhân lên nhiều lần ở các giai đoạn code tiếp theo (defect amplification).",
      "d": "Sai. Vì chỉ là các kết quả phụ hoặc yếu tố tổ chức, không phải lợi ích kinh tế - kỹ thuật cốt lõi của xác minh sớm."
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
      "a": "Sai. Vì đây là kiểm thử Beta (Beta Testing).",
      "b": "Sai. Vì kiểm thử đầu tiên là unit testing.",
      "c": "Đúng. Vì kiểm thử Alpha (Alpha Testing) là kiểm thử chấp nhận được thực hiện tại cơ sở của nhà phát triển (in-house) bởi một nhóm độc lập đại diện cho khách hàng/người dùng hoặc chuyên gia nội bộ.",
      "d": "Sai. Vì thường kiểm thử Beta mới là bước kiểm thử cuối cùng trước khi phát hành chính thức."
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
      "a": "Sai. Vì đều chứa các giá trị thuộc các bậc thuế (phân vùng tương đương) khác nhau.",
      "b": "Sai. Vì đều chứa các giá trị thuộc các bậc thuế (phân vùng tương đương) khác nhau.",
      "c": "Sai. Vì đều chứa các giá trị thuộc các bậc thuế (phân vùng tương đương) khác nhau.",
      "d": "Đúng. Vì ta xác định các bậc thuế tương ứng với các phân vùng tương đương của tiền lương:\n    1. Bậc 1 (Thuế 0%): `[0, 4000]`\n    2. Bậc 2 (Thuế 10%): `(4000, 4000 + 1500] = (4000, 5500]`\n    3. Bậc 3 (Thuế 22%): `(5500, 5500 + 28000] = (5500, 33500]`\n    4. Bậc 4 (Thuế 40%): `> 33500`\n    Xét nhóm ở phương án d: `£5800`, `£28000`, `£32000` đều nằm trong khoảng `(5500, 33500]`, tức là tất cả đều chịu mức thuế 22% (rơi vào cùng một lớp tương đương bậc 3)."
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
      "a": "Sai. Vì không phản ánh đúng giá trị kỹ thuật cốt lõi nhất của việc thiết kế kiểm thử sớm.",
      "b": "Sai. Vì không phản ánh đúng giá trị kỹ thuật cốt lõi nhất của việc thiết kế kiểm thử sớm.",
      "c": "Đúng. Vì việc thiết kế test case sớm từ giai đoạn yêu cầu giúp phát hiện các điểm mâu thuẫn, thiếu sót trong SRS ngay lập tức. Điều này giúp ngăn ngừa việc viết mã sai, từ đó ngăn chặn sự lan truyền và nhân lên của lỗi ở các giai đoạn sau.",
      "d": "Sai. Vì không phản ánh đúng giá trị kỹ thuật cốt lõi nhất của việc thiết kế kiểm thử sớm."
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
      "a": "Sai. Vì có thể thực hiện review trên tài liệu yêu cầu (yêu cầu nghiệp vụ).",
      "b": "Sai. Vì review code là một trong những cách hiệu quả nhất để phát hiện lỗi logic.",
      "c": "Sai. Vì hoàn toàn có thể tìm lỗi thiết kế/hoạch định trong kế hoạch kiểm thử qua review.",
      "d": "Đúng. Vì soát xét (Review) là phương pháp kiểm thử tĩnh có thể áp dụng cho hầu hết các sản phẩm trung gian trong dự án, bao gồm tài liệu đặc tả yêu cầu (specs), thiết kế, code, kế hoạch kiểm thử (test plan) và các kịch bản kiểm thử."
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
      "a": "Sai. Vì đều là các giai đoạn khác (thực thi test, lập kế hoạch, cấu hình môi trường) không trực tiếp thiết kế test case.",
      "b": "Sai. Vì đều là các giai đoạn khác (thực thi test, lập kế hoạch, cấu hình môi trường) không trực tiếp thiết kế test case.",
      "c": "Sai. Vì đều là các giai đoạn khác (thực thi test, lập kế hoạch, cấu hình môi trường) không trực tiếp thiết kế test case.",
      "d": "Đúng. Vì các ca kiểm thử (test cases) được thiết kế và viết chi tiết trong giai đoạn Phân tích và thiết kế kiểm thử (Test Analysis and Design) của quy trình kiểm thử phần mềm."
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
      "a": "Sai. Vì vẫn chạy được kiểm thử bằng cách nhập giá trị đầu vào nhưng không thể kết luận đạt/không đạt khách quan.",
      "b": "Sai. Vì việc lặp lại test case hay nhập dữ liệu tự động không bị ảnh hưởng bởi việc định nghĩa kết quả mong đợi.",
      "c": "Đúng. Vì kết quả mong đợi (Expected result) là tiêu chuẩn đối chiếu duy nhất giúp tester hoặc công cụ test tự động kết luận ca kiểm thử chạy Thành công (Pass) hay Thất bại (Fail). Không có kết quả mong đợi, việc đánh giá tính đúng đắn của phần mềm là rất khó khăn và mang tính chủ quan.",
      "d": "Sai. Vì việc lặp lại test case hay nhập dữ liệu tự động không bị ảnh hưởng bởi việc định nghĩa kết quả mong đợi."
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
      "a": "Sai. Vì đây là định nghĩa của Thẩm định (Validation - \"building the right system\").",
      "b": "Đúng. Vì trùng với Câu 6 ở Bộ 1. Xác minh (Verification) nhằm đảm bảo phần mềm được xây dựng đúng theo các đặc tả kỹ thuật và thiết kế đã định ra (\"building the system right\").",
      "c": "Sai. Vì lập trình viên cũng có thể thực hiện các hoạt động xác minh như review code hoặc kiểm tra tĩnh.",
      "d": "Sai. Vì đây là định nghĩa của Thẩm định (Validation - \"building the right system\")."
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
      "a": "Đúng. Vì tester đã phân chia miền điểm số thành các lớp tương đương: Lớp đạt điểm A (`[90, 100]`) và Lớp không đạt điểm A (`< 90`). Đây là kỹ thuật Phân vùng tương đương (Equivalence Partitioning).",
      "b": "Sai. Vì phân tích giá trị biên (Boundary Value Analysis) tập trung vào các điểm mút ranh giới (như 89, 90, 100, 101), chứ không nói về việc phân vùng toàn bộ miền giá trị như đề bài.",
      "c": "Sai. Vì không đúng với kỹ thuật mô tả.",
      "d": "Sai. Vì không đúng với kỹ thuật mô tả."
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
      "a": "Sai. Vì đều không phải đối tượng thực hiện kiểm thử Beta.",
      "b": "Sai. Vì đều không phải đối tượng thực hiện kiểm thử Beta.",
      "c": "Đúng. Vì kiểm thử Beta do khách hàng/người dùng cuối thực tế thực thi tại môi trường làm việc thực tế của họ để đưa ra phản hồi nghiệm thu.",
      "d": "Sai. Vì đều không phải đối tượng thực hiện kiểm thử Beta."
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
    "correct": "d",
    "explanations": {
      "a": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "b": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "c": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "d": "Đúng. Vì đây là đáp án chính xác theo tài liệu chuẩn ôn tập môn học."
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
      "a": "Sai. Vì quan trọng ở mọi cấp độ kiểm thử.",
      "b": "Sai. Vì quan trọng ở mọi cấp độ kiểm thử.",
      "c": "Sai. Vì bắt buộc phải xác định trước để phục vụ đối chiếu kết quả.",
      "d": "Đúng. Vì kết quả mong đợi cần được xác định từ trước khi chạy test để đảm bảo tính khách quan trong việc đánh giá và giúp dễ dàng tự động hóa đối chiếu kết quả."
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
      "a": "Sai. Vì kết quả tính toán sai.",
      "b": "Đúng. Vì áp dụng công thức McCabe $V(G) = p + 1$, với $p$ là số điểm quyết định nhị phân. Đoạn mã có 2 điểm quyết định:\n    1. `X < Y`\n    2. `Y >= Z`\n    Do đó, $V(G) = 2 + 1 = 3$.",
      "c": "Sai. Vì kết quả tính toán sai.",
      "d": "Sai. Vì kết quả tính toán sai."
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
      "a": "Sai. Vì đều không phải tài liệu dùng để hoạch định các tiêu chí dừng kiểm thử này từ đầu dự án.",
      "b": "Sai. Vì đều không phải tài liệu dùng để hoạch định các tiêu chí dừng kiểm thử này từ đầu dự án.",
      "c": "Sai. Vì đều không phải tài liệu dùng để hoạch định các tiêu chí dừng kiểm thử này từ đầu dự án.",
      "d": "Đúng. Vì tiêu chí dừng kiểm thử (Exit criteria) được định nghĩa và vạch ra từ đầu dự án trong tài liệu Kế hoạch kiểm thử (Test Plan)."
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
      "a": "Đúng. Vì kiểm thử hộp trắng là kỹ thuật kiểm thử cấu trúc đòi hỏi phải xem xét và thực thi trực tiếp trên mã nguồn. Vì vậy, chỉ sau khi hoàn thành giai đoạn viết code (coding phase) thì mới có mã nguồn để tiến hành kiểm thử hộp trắng.",
      "b": "Sai. Vì chưa có mã nguồn hoặc đã quá muộn để bắt đầu kiểm thử tĩnh/động hộp trắng.",
      "c": "Sai. Vì chưa có mã nguồn hoặc đã quá muộn để bắt đầu kiểm thử tĩnh/động hộp trắng.",
      "d": "Sai. Vì chưa có mã nguồn hoặc đã quá muộn để bắt đầu kiểm thử tĩnh/động hộp trắng."
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
      "a": "Sai. Vì mặc dù đây là các khía cạnh hữu ích của kiểm thử, nhưng dưới góc độ quản lý dự án và bàn giao sản phẩm, cung cấp thông tin đánh giá rủi ro (d) là mục tiêu cốt lõi nhất.",
      "b": "Sai. Vì mặc dù đây là các khía cạnh hữu ích của kiểm thử, nhưng dưới góc độ quản lý dự án và bàn giao sản phẩm, cung cấp thông tin đánh giá rủi ro (d) là mục tiêu cốt lõi nhất.",
      "c": "Sai. Vì mặc dù đây là các khía cạnh hữu ích của kiểm thử, nhưng dưới góc độ quản lý dự án và bàn giao sản phẩm, cung cấp thông tin đánh giá rủi ro (d) là mục tiêu cốt lõi nhất.",
      "d": "Đúng. Vì dưới góc độ quản lý và kinh doanh, kiểm thử trước khi release cung cấp bức tranh rõ nét về chất lượng sản phẩm và các rủi ro còn tồn tại để ban quản lý đưa ra quyết định phát hành dựa trên rủi ro (risk-based decision)."
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
      "a": "Sai. Vì độ bao phủ là một khái niệm cực kỳ quan trọng trong kiểm thử.",
      "b": "Đúng. Vì độ bao phủ (Coverage) đo lường tỉ lệ phần trăm các thành phần đã được thực thi bởi bộ test case, phản ánh trực tiếp mức độ kỹ lưỡng, đầy đủ (thoroughness) của hoạt động kiểm thử.",
      "c": "Sai. Vì không bắt buộc cho mọi loại phần mềm phổ thông (tùy thuộc vào mức độ rủi ro và ngân sách).",
      "d": "Sai. Vì vẫn áp dụng được ở kiểm thử hệ thống (ví dụ: phủ yêu cầu chức năng)."
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
      "a": "Sai. Vì các lỗi này xảy ra muộn hơn, nên chi phí khắc phục thấp hơn so với lỗi ở khâu yêu cầu.",
      "b": "Sai. Vì các lỗi này xảy ra muộn hơn, nên chi phí khắc phục thấp hơn so với lỗi ở khâu yêu cầu.",
      "c": "Đúng. Vì lỗi yêu cầu (Requirements error) được phát sinh ở giai đoạn sớm nhất của dự án. Nếu không được phát hiện sớm, nó sẽ lan truyền qua thiết kế, mã nguồn và chỉ bộc lộ khi bàn giao, gây tốn kém chi phí sửa đổi gấp hàng chục đến hàng trăm lần.",
      "d": "Sai. Vì các lỗi này xảy ra muộn hơn, nên chi phí khắc phục thấp hơn so với lỗi ở khâu yêu cầu."
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
      "a": "Sai. Vì chỉ là các khía cạnh hẹp hoặc mô tả không chính xác mục tiêu bao trùm của review.",
      "b": "Đúng. Vì mục tiêu cốt lõi của hoạt động review tài liệu/sản phẩm phần mềm (kiểm thử tĩnh) là phát hiện sớm các khiếm khuyết (defects) trong các tài liệu yêu cầu, thiết kế, code trước khi chúng chuyển sang giai đoạn sau.",
      "c": "Sai. Vì chỉ là các khía cạnh hẹp hoặc mô tả không chính xác mục tiêu bao trùm của review.",
      "d": "Sai. Vì chỉ là các khía cạnh hẹp hoặc mô tả không chính xác mục tiêu bao trùm của review."
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
      "a": "Đúng. Vì tiêu chí dừng kiểm thử (Exit criteria) là một phần của Kế hoạch kiểm thử, do đó nó phải được xác định ngay trong quá trình Lập kế hoạch kiểm thử (Test Planning) ở đầu dự án.",
      "b": "Sai. Vì đều là các giai đoạn thực thi hoặc đóng dự án sau này, lúc đó tiêu chí dừng đã được áp dụng chứ không phải bắt đầu xác định nữa.",
      "c": "Sai. Vì đều là các giai đoạn thực thi hoặc đóng dự án sau này, lúc đó tiêu chí dừng đã được áp dụng chứ không phải bắt đầu xác định nữa.",
      "d": "Sai. Vì đều là các giai đoạn thực thi hoặc đóng dự án sau này, lúc đó tiêu chí dừng đã được áp dụng chứ không phải bắt đầu xác định nữa."
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
      "a": "Sai. Vì đều không đủ để bao phủ hết tất cả các nhánh điều kiện lồng nhau.",
      "b": "Đúng. Vì cấu trúc mã chứa các điều kiện lồng nhau.\n    - Để kiểm thử nhánh Đúng và Sai của `if height > width`, ta bắt buộc phải chạy qua nhánh `then` của điều kiện ngoài (`width > length` là True). Điều này cần ít nhất 2 test case.\n    - Để kiểm thử nhánh Đúng và Sai của `if height > length`, ta bắt buộc phải chạy qua nhánh `else` của điều kiện ngoài (`width > length` là False). Điều này cần thêm ít nhất 2 test case nữa.\n    Do đó, tổng số test case tối thiểu cần thiết để đạt 100% phủ quyết định là $2 + 2 = 4$ test case.",
      "c": "Sai. Vì đều không đủ để bao phủ hết tất cả các nhánh điều kiện lồng nhau.",
      "d": "Sai. Vì đều không đủ để bao phủ hết tất cả các nhánh điều kiện lồng nhau."
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
      "a": "Sai. Vì không cần thiết thêm test case vì độ bao phủ đã đạt 100%.",
      "b": "Sai. Vì không cần thiết thêm test case vì độ bao phủ đã đạt 100%.",
      "c": "Đúng. Vì Ba câu lệnh `print` được thêm vào cuối đoạn mã là những câu lệnh tuần tự (sequential statements) không chứa điểm quyết định hay rẽ nhánh nào. Bất kỳ test case nào đi qua nhánh `then` hay nhánh `else` của khối `if` phía trước đều sẽ đi tiếp xuống và thực thi ba câu lệnh này. Do bộ test case cũ đã đạt 100% phủ lệnh và phủ quyết định cho khối `if`, nó sẽ tự động chạy qua ba câu lệnh mới này. Do đó không cần thiết kế thêm bất cứ test case nào nữa.",
      "d": "Sai. Vì không cần thiết thêm test case vì độ bao phủ đã đạt 100%."
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
      "a": "Sai. Vì đều là các giai đoạn trước hoặc phục vụ cơ sở hạ tầng, chưa bắt đầu viết và nhóm các ca kiểm thử.",
      "b": "Sai. Vì đều là các giai đoạn trước hoặc phục vụ cơ sở hạ tầng, chưa bắt đầu viết và nhóm các ca kiểm thử.",
      "c": "Đúng. Vì test Suite (Bộ ca kiểm thử - tập hợp các test case liên quan) được tạo ra và nhóm lại ở giai đoạn thiết kế và phát triển ca kiểm thử (Test Case Development / Design).",
      "d": "Sai. Vì đều là các giai đoạn trước hoặc phục vụ cơ sở hạ tầng, chưa bắt đầu viết và nhóm các ca kiểm thử."
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
      "a": "Sai. Vì đều loại trừ hoặc hạn chế một trong hai loại yêu cầu này một cách sai lầm, không đáp ứng định nghĩa kiểm thử hệ thống đầy đủ.",
      "b": "Sai. Vì đều loại trừ hoặc hạn chế một trong hai loại yêu cầu này một cách sai lầm, không đáp ứng định nghĩa kiểm thử hệ thống đầy đủ.",
      "c": "Đúng. Vì kiểm thử hệ thống (System Testing) là cấp độ kiểm thử bao trùm toàn bộ hệ thống đã được tích hợp hoàn chỉnh. Ở giai đoạn này, bắt buộc phải kiểm thử cả các yêu cầu chức năng (hệ thống làm gì) và các yêu cầu phi chức năng (hiệu năng, độ tin cậy, bảo mật, khả năng sử dụng...).",
      "d": "Sai. Vì đều loại trừ hoặc hạn chế một trong hai loại yêu cầu này một cách sai lầm, không đáp ứng định nghĩa kiểm thử hệ thống đầy đủ."
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
      "a": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "b": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "c": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "d": "Đúng. Vì đây là đáp án chính xác theo tài liệu chuẩn ôn tập môn học."
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
      "a": "Đúng. Vì trình tự vòng đời bug tiêu chuẩn bắt đầu khi bug được phát hiện và mở ra (`Open`), sau đó được phân công cho lập trình viên (`Assigned`), lập trình viên sửa lỗi thành công (`Fixed`), và cuối cùng kiểm thử viên kiểm tra lại rồi đóng lỗi (`Closed`).",
      "b": "Sai. Vì sắp xếp sai thứ tự logic của các trạng thái lỗi (ví dụ: không thể sửa lỗi `Fixed` trước khi được gán `Assigned`, hoặc đóng `Closed` trước khi được sửa `Fixed`).",
      "c": "Sai. Vì sắp xếp sai thứ tự logic của các trạng thái lỗi (ví dụ: không thể sửa lỗi `Fixed` trước khi được gán `Assigned`, hoặc đóng `Closed` trước khi được sửa `Fixed`).",
      "d": "Sai. Vì sắp xếp sai thứ tự logic của các trạng thái lỗi (ví dụ: không thể sửa lỗi `Fixed` trước khi được gán `Assigned`, hoặc đóng `Closed` trước khi được sửa `Fixed`)."
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
      "a": "Đúng. Vì đây là đáp án chính xác theo tài liệu chuẩn ôn tập môn học.",
      "b": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "c": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "d": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học."
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
    "correct": "b",
    "explanations": {
      "a": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "b": "Đúng. Vì đây là đáp án chính xác theo tài liệu chuẩn ôn tập môn học.",
      "c": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "d": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học."
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
      "a": "Sai. Vì đây là kiểm thử động (yêu cầu chạy chương trình).",
      "b": "Sai. Vì đây là kiểm thử động (yêu cầu chạy chương trình).",
      "c": "Sai. Vì sơ đồ luồng dữ liệu (Data flow diagram) chủ yếu dùng trong phân tích tĩnh tự động hoặc thiết kế, không phải công cụ chính của code review thủ công.",
      "d": "Đúng. Vì code review (Soát xét mã nguồn) là một phương pháp kiểm thử tĩnh, trong đó lập trình viên đọc mã nguồn để tìm lỗi logic, phong cách lập trình và đối chiếu với tài liệu thiết kế để đảm bảo code được hiện thực đúng hướng dẫn thiết kế."
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
      "a": "Sai. Vì thiếu các bước logic quan trọng (như sinh đường thi hành hoặc nhầm lẫn trình tự).",
      "b": "Sai. Vì thiếu các bước logic quan trọng (như sinh đường thi hành hoặc nhầm lẫn trình tự).",
      "c": "Sai. Vì thiếu các bước logic quan trọng (như sinh đường thi hành hoặc nhầm lẫn trình tự).",
      "d": "Đúng. Vì kiểm thử dòng điều khiển (Control Flow Testing - kỹ thuật hộp trắng) có quy trình chuẩn gồm 4 bước:\n    1. Vẽ đồ thị dòng điều khiển (CFG) từ mã nguồn.\n    2. Xác định các đường thi hành (execution paths) dựa trên tiêu chí đo lường cần đạt (phủ lệnh, phủ nhánh, phủ đường).\n    3. Thiết kế/sinh các ca kiểm thử (test cases) để chạy qua các đường thi hành đã chọn.\n    4. Thực thi các ca kiểm thử và đối chiếu kết quả."
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
      "a": "Sai. Vì đều không phản ánh đúng định nghĩa cấu trúc của một test case.",
      "b": "Sai. Vì đều không phản ánh đúng định nghĩa cấu trúc của một test case.",
      "c": "Đúng. Vì định nghĩa cơ bản của ca kiểm thử (Test Case) là một tập hợp các giá trị đầu vào (inputs), điều kiện thực thi (preconditions) và kết quả mong đợi (expected outputs) được xây dựng để xác minh một chức năng cụ thể của phần mềm.",
      "d": "Sai. Vì đều không phản ánh đúng định nghĩa cấu trúc của một test case."
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
      "a": "Đúng. Vì tương tự các câu trước, Bao phủ quyết định (Decision/Branch coverage) là tiêu chí mạnh hơn bao phủ câu lệnh (Statement coverage). Đạt 100% bao phủ quyết định đồng nghĩa với đạt 100% bao phủ câu lệnh.",
      "b": "Sai. Vì Bao phủ câu lệnh yếu hơn nên không thể suy ngược lại bao phủ quyết định.",
      "c": "Sai. Vì Bao phủ câu lệnh yếu hơn nên không thể suy ngược lại bao phủ quyết định.",
      "d": "Sai. Vì Bao phủ câu lệnh yếu hơn nên không thể suy ngược lại bao phủ quyết định."
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
    "correct": "d",
    "explanations": {
      "a": "Sai. Vì không bao phủ được tất cả các phân vùng hợp lệ và không hợp lệ của biến đầu vào.\n\n---\n\n## BỘ 3: 74 CÂU HỎI TRẮC NGHIỆM KIỂM THỬ PHẦN MỀM (PHẦN 2)",
      "b": "Sai. Vì không bao phủ được tất cả các phân vùng hợp lệ và không hợp lệ của biến đầu vào.\n\n---\n\n## BỘ 3: 74 CÂU HỎI TRẮC NGHIỆM KIỂM THỬ PHẦN MỀM (PHẦN 2)",
      "c": "Sai. Vì không bao phủ được tất cả các phân vùng hợp lệ và không hợp lệ của biến đầu vào.\n\n---\n\n## BỘ 3: 74 CÂU HỎI TRẮC NGHIỆM KIỂM THỬ PHẦN MỀM (PHẦN 2)",
      "d": "Đúng. Vì để kiểm thử đầy đủ bằng phân vùng tương đương, ta cần xác định cả phân vùng hợp lệ và không hợp lệ:\n    1. *Phân vùng hợp lệ 1:* Số năm làm việc từ 0 đến 2 năm (`0 <= t <= 2`) $\\to$ thưởng 1 triệu.\n    2. *Phân vùng hợp lệ 2:* Số năm làm việc từ trên 2 đến dưới 5 năm (`2 < t < 5`) $\\to$ thưởng 2 triệu.\n    3. *Phân vùng hợp lệ 3:* Số năm làm việc từ trên 5 đến dưới 10 năm (`5 < t < 10`) $\\to$ thưởng 3 triệu.\n    4. *Phân vùng hợp lệ 4:* Số năm làm việc trên 10 năm (`t > 10`) $\\to$ thưởng 4 triệu.\n    5. *Phân vùng không hợp lệ:* Số năm làm việc là số âm (`t < 0`).\n    Tổng cộng cần ít nhất **5** test case tương ứng với 5 phân vùng trên."
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
      "a": "Đúng. Vì đây là đáp án chính xác theo tài liệu chuẩn ôn tập môn học.",
      "b": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "c": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "d": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học."
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
      "a": "Sai. Vì đều thu hẹp phạm vi của kiểm thử chức năng một cách sai lầm.",
      "b": "Sai. Vì đều thu hẹp phạm vi của kiểm thử chức năng một cách sai lầm.",
      "c": "Sai. Vì đều thu hẹp phạm vi của kiểm thử chức năng một cách sai lầm.",
      "d": "Đúng. Vì kiểm thử chức năng (Functional Testing) tập trung kiểm tra tính năng nghiệp vụ (\"hệ thống làm gì\"). Nó được áp dụng ở tất cả các cấp độ: unit testing (chức năng hàm), integration testing (phối hợp chức năng), system testing (chức năng toàn hệ thống) và acceptance testing (nghiệm thu chức năng)."
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
      "a": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "b": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "c": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "d": "Đúng. Vì đây là đáp án chính xác theo tài liệu chuẩn ôn tập môn học."
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
      "a": "Sai. Vì bỏ sót các giai đoạn quan trọng khác cần áp dụng kiểm thử tĩnh.",
      "b": "Sai. Vì bỏ sót các giai đoạn quan trọng khác cần áp dụng kiểm thử tĩnh.",
      "c": "Sai. Vì bỏ sót các giai đoạn quan trọng khác cần áp dụng kiểm thử tĩnh.",
      "d": "Đúng. Vì kiểm thử tĩnh (Static testing) không chạy chương trình, gồm review tài liệu và code. Do đó nó cần được thực hiện xuyên suốt các giai đoạn: review tài liệu yêu cầu (Đặc tả), review bản thiết kế (Thiết kế), và review mã nguồn (Lập trình)."
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
      "a": "Sai. Vì đều hiểu sai bản chất của nguyên lý thứ 7 này.",
      "b": "Sai. Vì đều hiểu sai bản chất của nguyên lý thứ 7 này.",
      "c": "Đúng. Vì nguyên lý \"Ngụy biện không có lỗi\" nhấn mạnh rằng một phần mềm sạch lỗi kỹ thuật vẫn hoàn toàn vô dụng nếu nó được thiết kế không đúng nhu cầu của khách hàng hoặc không thể vận hành mang lại hiệu quả nghiệp vụ thực tế.",
      "d": "Sai. Vì đều hiểu sai bản chất của nguyên lý thứ 7 này."
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
      "a": "Sai. Vì đều đưa ra các quan điểm sai lệch về tính khả thi và định nghĩa của kiểm thử toàn diện.",
      "b": "Đúng. Vì kiểm thử toàn diện (kiểm tra toàn bộ mọi kết hợp đầu vào và đường đi) là bất khả thi trong thực tế do miền dữ liệu và tổ hợp đường đi trong mã nguồn là vô hạn.",
      "c": "Sai. Vì đều đưa ra các quan điểm sai lệch về tính khả thi và định nghĩa của kiểm thử toàn diện.",
      "d": "Sai. Vì đều đưa ra các quan điểm sai lệch về tính khả thi và định nghĩa của kiểm thử toàn diện."
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
      "a": "Đúng. Vì `@CsvSource` trong JUnit 5 cho phép truyền trực tiếp các giá trị kiểm thử nhiều dòng dạng CSV (phân cách bằng dấu phẩy) làm đối số đầu vào cho hàm parameterized test.",
      "b": "Sai. Vì `@ValueSource` chỉ truyền mảng giá trị đơn; `@MethodSource` lấy dữ liệu từ một hàm Java; `@FileSource` không tồn tại (trong JUnit 5 là `@CsvFileSource`).",
      "c": "Sai. Vì `@ValueSource` chỉ truyền mảng giá trị đơn; `@MethodSource` lấy dữ liệu từ một hàm Java; `@FileSource` không tồn tại (trong JUnit 5 là `@CsvFileSource`).",
      "d": "Sai. Vì `@ValueSource` chỉ truyền mảng giá trị đơn; `@MethodSource` lấy dữ liệu từ một hàm Java; `@FileSource` không tồn tại (trong JUnit 5 là `@CsvFileSource`)."
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
      "a": "Sai. Vì `hasItems()` không ràng buộc thứ tự và kích thước; `containsInAnyOrder()` bỏ qua thứ tự; `everyItem()` dùng để kiểm tra điều kiện chung cho mọi phần tử trong list.",
      "b": "Đúng. Vì matcher `contains()` của Hamcrest kiểm tra xem Collection có chứa chính xác các phần tử đó và phải tuân thủ **đúng thứ tự** được chỉ định.",
      "c": "Sai. Vì `hasItems()` không ràng buộc thứ tự và kích thước; `containsInAnyOrder()` bỏ qua thứ tự; `everyItem()` dùng để kiểm tra điều kiện chung cho mọi phần tử trong list.",
      "d": "Sai. Vì `hasItems()` không ràng buộc thứ tự và kích thước; `containsInAnyOrder()` bỏ qua thứ tự; `everyItem()` dùng để kiểm tra điều kiện chung cho mọi phần tử trong list."
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
      "a": "Đúng. Vì `@BeforeEach` trong JUnit 5 đánh dấu phương thức sẽ chạy trước **mỗi** phương thức kiểm thử (`@Test`) để phục vụ công tác setup dữ liệu.",
      "b": "Sai. Vì `@BeforeAll` chỉ chạy duy nhất 1 lần trước toàn bộ lớp test.",
      "c": "Sai. Vì `@Before` là annotation cũ của JUnit 4, không dùng trong JUnit 5.",
      "d": "Sai. Vì `@Before` là annotation cũ của JUnit 4, không dùng trong JUnit 5."
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
      "a": "Đúng. Vì matcher chuẩn của thư viện Hamcrest tích hợp trong JUnit để so sánh chuỗi bỏ qua hoa/thường là `equalToIgnoreCase()`.",
      "b": "Sai. Vì đều là các phương thức không tồn tại trong thư viện Hamcrest Matchers.",
      "c": "Sai. Vì đều là các phương thức không tồn tại trong thư viện Hamcrest Matchers.",
      "d": "Sai. Vì đều là các phương thức không tồn tại trong thư viện Hamcrest Matchers."
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
      "a": "Sai. Vì driver dùng để giả lập module cha trong tích hợp từ dưới lên.",
      "b": "Đúng. Vì trùng khớp lý thuyết Câu 8 Bộ 1. Trong tích hợp từ trên xuống, ta cần dùng **Stub** để giả lập hành vi phản hồi của các module con cấp thấp chưa viết xong.",
      "c": "Sai. Vì không phải thuật ngữ biểu diễn module giả lập tích hợp.",
      "d": "Sai. Vì không phải thuật ngữ biểu diễn module giả lập tích hợp."
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
      "a": "Sai. Vì không đủ để bao phủ hết toàn bộ 3 nhánh rẽ của cấu trúc switch.",
      "b": "Đúng. Vì cấu trúc rẽ nhánh `switch` có 3 nhánh đích dựa trên giá trị của `n % 3`:\n    1. Nhánh rẽ tới `case 0` (in ra \"Chia het cho 3\").\n    2. Nhánh rẽ tới `case 1` (fall-through tới case 2).\n    3. Nhánh rẽ tới `case 2` (in ra \"Khong chia het cho 3\").\n    Để phủ 100% nhánh rẽ từ điểm quyết định `switch`, bắt buộc phải thiết kế **3** test case tương ứng với 3 giá trị số dư này (ví dụ: `n=3, n=4, n=5`).",
      "c": "Sai. Vì không đủ để bao phủ hết toàn bộ 3 nhánh rẽ của cấu trúc switch.",
      "d": "Sai. Vì không đủ để bao phủ hết toàn bộ 3 nhánh rẽ của cấu trúc switch."
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
      "a": "Đúng. Vì thẩm định (Validation) là hoạt động đánh giá xem sản phẩm có đáp ứng đầy đủ yêu cầu nghiệp vụ thực tế của người dùng/khách hàng hay không (\"Are we building the right product?\").",
      "b": "Sai. Vì xác minh (Verification) kiểm tra tính đúng đắn so với đặc tả thiết kế kỹ thuật của chính dự án.",
      "c": "Sai. Vì đều là các thuật ngữ rộng hơn về bảo đảm và kiểm soát chất lượng quy trình phát triển.",
      "d": "Sai. Vì đều là các thuật ngữ rộng hơn về bảo đảm và kiểm soát chất lượng quy trình phát triển."
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
      "a": "Sai. Vì đều viết sai chính tả hoặc sai tên annotation của thư viện JUnit 5.",
      "b": "Sai. Vì đều viết sai chính tả hoặc sai tên annotation của thư viện JUnit 5.",
      "c": "Sai. Vì đều viết sai chính tả hoặc sai tên annotation của thư viện JUnit 5.",
      "d": "Đúng. Vì annotation chuẩn trong JUnit 5 để khai báo một test case có nhận tham số đầu vào là `@ParameterizedTest`."
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
      "a": "Sai. Vì đều đưa ra số lượng test case nhiều hơn mức tối thiểu thực tế cần thiết.",
      "b": "Sai. Vì đều đưa ra số lượng test case nhiều hơn mức tối thiểu thực tế cần thiết.",
      "c": "Sai. Vì đều đưa ra số lượng test case nhiều hơn mức tối thiểu thực tế cần thiết.",
      "d": "Đúng. Vì do cấu trúc lặp `while` sẽ chạy nhiều vòng cho đến khi `a == b`, chỉ cần duy nhất **1 test case** là `USCLN(3, 2)` (với `a = 3, b = 2`) ta đã bao phủ thành công cả 100% dòng lệnh và 100% nhánh rẽ:\n    - Vòng 1: `a != b` (True) $\\to$ vào lặp. `a > b` (3 > 2 là True) $\\to$ chạy `a = 3 - 2 = 1` (phủ nhánh `if-True`).\n    - Vòng 2: `a != b` (1 != 2 là True). `a > b` (1 > 2 là False) $\\to$ chạy `b = 2 - 1 = 1` (phủ nhánh `if-False`).\n    - Vòng 3: `a != b` (1 != 1 là False) $\\to$ thoát lặp (phủ nhánh `while-False`) và chạy tiếp dòng `return a`.\n    Như vậy, cả 100% câu lệnh và 100% nhánh rẽ đều được thực hiện đầy đủ trong 1 test case."
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
      "a": "Đúng. Vì hệ thống tính phí gửi xe có sự kết hợp phức tạp giữa các điều kiện đầu vào (thời gian gửi, giới hạn trần chi phí) để sinh ra các quyết định hành vi. Bảng quyết định (Decision Table Testing) là kỹ thuật kiểm thử hộp đen tốt nhất để bao phủ toàn bộ các kết hợp điều kiện nghiệp vụ dạng này.",
      "b": "Sai. Vì đều không phải kỹ thuật tối ưu và trực tiếp để kiểm thử logic nghiệp vụ phức tạp này.",
      "c": "Sai. Vì đều không phải kỹ thuật tối ưu và trực tiếp để kiểm thử logic nghiệp vụ phức tạp này.",
      "d": "Sai. Vì đều không phải kỹ thuật tối ưu và trực tiếp để kiểm thử logic nghiệp vụ phức tạp này."
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
    "correct": "c",
    "explanations": {
      "a": "Sai. Vì số lượng test case không đủ bao phủ hết toàn bộ các giá trị True/False của cả 4 điều kiện đơn lẻ do cơ chế ngắn mạch của code.",
      "b": "Sai. Vì số lượng test case không đủ bao phủ hết toàn bộ các giá trị True/False của cả 4 điều kiện đơn lẻ do cơ chế ngắn mạch của code.",
      "c": "Đúng. Vì phủ cấp 3 là Phủ điều kiện (Condition Coverage). Ta có 4 điều kiện logic đơn lẻ: $C_1$: `a < 0`, $C_2$: `b < 0`, $C_3$: `a > b`, $C_4$: `a == b`. Để đạt 100% phủ điều kiện, ta cần tối thiểu **4** test case để từng điều kiện đơn nhận cả giá trị True và False:\n    1. `TC1: a = -1, b = -2` $\\to$ $C_1$=True, $C_2$=True. (Trả về 0).\n    2. `TC2: a = -1, b = 2` $\\to$ $C_1$=True, $C_2$=False. Lúc này biểu thức 1 là False, đi tiếp xuống biểu thức 2 và đánh giá $C_3$ (`-1 > 2` $\\to$ False), $C_4$ (`-1 == 2` $\\to$ False).\n    3. `TC3: a = 2, b = 1` $\\to$ $C_1$=False, $C_3$ (`2 > 1` $\\to$ True). (Trả về 1).\n    4. `TC4: a = 2, b = 2` $\\to$ $C_1$=False, $C_3$ (`2 > 2` $\\to$ False), $C_4$ (`2 == 2` $\\to$ True). (Trả về 1).\n    Bộ 4 test case này giúp cả 4 điều kiện đơn lẻ đều được đánh giá True và False ít nhất 1 lần.",
      "d": "Sai. Vì số lượng test case không đủ bao phủ hết toàn bộ các giá trị True/False của cả 4 điều kiện đơn lẻ do cơ chế ngắn mạch của code."
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
      "a": "Sai. Vì đều không phải annotation chuẩn của JUnit 5 phục vụ định cấu hình thứ tự chạy test.",
      "b": "Đúng. Vì `@Order` trong JUnit 5 được dùng để sắp xếp thứ tự thực thi của các phương thức kiểm thử trong class kiểm thử (khi đi kèm cấu hình `@TestMethodOrder`).",
      "c": "Sai. Vì đều không phải annotation chuẩn của JUnit 5 phục vụ định cấu hình thứ tự chạy test.",
      "d": "Sai. Vì đều không phải annotation chuẩn của JUnit 5 phục vụ định cấu hình thứ tự chạy test."
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
      "a": "Sai. Vì tính toán sai độ phức tạp chu trình của chương trình.",
      "b": "Đúng. Vì áp dụng công thức McCabe: $V(G) = p + 1$. Ở đây chỉ có 1 điểm quyết định nhị phân duy nhất tại điều kiện dừng lặp `i++ < 10` (nhánh lặp tiếp hoặc thoát lặp). Do đó, $V(G) = 1 + 1 = 2$.",
      "c": "Sai. Vì tính toán sai độ phức tạp chu trình của chương trình.",
      "d": "Sai. Vì tính toán sai độ phức tạp chu trình của chương trình."
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
      "a": "Sai. Vì 13 là số test case của kiểm thử biên thông thường (Normal BVA - công thức $4n+1$).",
      "b": "Đúng. Vì công thức tính số ca kiểm thử giá trị biên mạnh (Robust BVA - bao gồm các giá trị ngoài biên) đối với $n$ biến là: $6n + 1$. Với $n = 3$ biến đầu vào ($a, b, c$), ta có số lượng ca kiểm thử cần thiết là $6 \\times 3 + 1 = 19$ test case.",
      "c": "Sai. Vì tính sai số lượng test case.",
      "d": "Sai. Vì tính sai số lượng test case."
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
      "a": "Đúng. Vì tên nguyên tắc gốc là \"Kiểm thử chỉ ra sự hiện diện của lỗi, chứ không thể chứng minh sự vắng mặt của lỗi\" (Testing shows the presence of defects, not their absence). Nó có ý nghĩa là hoạt động kiểm thử chỉ giúp tester tìm lỗi, chứ không thể chứng minh hay cam kết sản phẩm đã hoàn toàn sạch lỗi 100%.",
      "b": "Sai. Vì đi ngược lại nguyên lý nền tảng của kỹ nghệ kiểm thử phần mềm.",
      "c": "Sai. Vì đi ngược lại nguyên lý nền tảng của kỹ nghệ kiểm thử phần mềm.",
      "d": "Sai. Vì đi ngược lại nguyên lý nền tảng của kỹ nghệ kiểm thử phần mềm."
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
      "a": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "b": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "c": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "d": "Đúng. Vì đây là đáp án chính xác theo tài liệu chuẩn ôn tập môn học."
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
      "a": "Sai. Vì đơn vị (C) tập trung vào một thành phần cô lập; Hệ thống (A) tập trung vào hành vi tổng thể; Chấp nhận (B) tập trung vào sự hài lòng nghiệp vụ của khách hàng.",
      "b": "Sai. Vì đơn vị (C) tập trung vào một thành phần cô lập; Hệ thống (A) tập trung vào hành vi tổng thể; Chấp nhận (B) tập trung vào sự hài lòng nghiệp vụ của khách hàng.",
      "c": "Sai. Vì đơn vị (C) tập trung vào một thành phần cô lập; Hệ thống (A) tập trung vào hành vi tổng thể; Chấp nhận (B) tập trung vào sự hài lòng nghiệp vụ của khách hàng.",
      "d": "Đúng. Vì kiểm thử tích hợp (Integration Testing) có mục tiêu cốt lõi là kiểm tra giao diện (interfaces) và sự tương tác qua lại giữa các module/thành phần với nhau."
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
      "a": "Sai. Vì đều không tính toán đúng và đầy đủ số lớp tương đương cần thiết.",
      "b": "Sai. Vì đều không tính toán đúng và đầy đủ số lớp tương đương cần thiết.",
      "c": "Đúng. Vì phân tích các phân vùng tương đương của khối lượng đầu vào:\n    1. Phân vùng không hợp lệ: `w <= 0`\n    2. Phân vùng hợp lệ 1: `0 < w < 5` $\\to$ phí $3.\n    3. Phân vùng hợp lệ 2: `5 <= w <= 10` $\\to$ phí $5.\n    4. Phân vùng hợp lệ 3: `w > 10` $\\to$ phí $10.\n    Tổng cộng cần **4** lớp tương đương.",
      "d": "Sai. Vì đều không tính toán đúng và đầy đủ số lớp tương đương cần thiết."
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
      "a": "Sai. Vì không dùng làm cách tiếp cận đầu tiên vì thiếu tính hệ thống.",
      "b": "Đúng. Vì đoán lỗi (Error Guessing) là kỹ thuật dựa trên kinh nghiệm. Nó được áp dụng tốt nhất **sau** khi đã sử dụng các kỹ thuật chính quy (phân vùng tương đương, giá trị biên...) để bao phủ các lỗi dị biệt, lỗi ở góc khuất của hệ thống mà kỹ thuật chính quy có thể bỏ sót.",
      "c": "Sai. Vì lúc hệ thống đã hoạt động thực tế thì việc thiết kế test case ban đầu đã hoàn thành.",
      "d": "Sai. Vì đoán lỗi đòi hỏi tester rất giàu kinh nghiệm thực tế mới hiệu quả."
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
      "a": "Sai. Vì đều không tối ưu được số lượng test case cần thiết để bao phủ toàn bộ nhánh.",
      "b": "Sai. Vì đều không tối ưu được số lượng test case cần thiết để bao phủ toàn bộ nhánh.",
      "c": "Đúng. Vì đoạn mã kiểm tra số nguyên tố có các nhánh rẽ điều kiện:\n    - Nhánh 1: `k <= 1` là True $\\to$ trả về -1.\n    - Nhánh 2: `k <= 1` là False $\\to$ vào vòng lặp.\n    - Nhánh 3: Vòng lặp chạy (loop condition True).\n    - Nhánh 4: Vòng lặp kết thúc (loop condition False).\n    - Nhánh 5: `k % i == 0` là True $\\to$ trả về -1.\n    - Nhánh 6: `k % i == 0` là False $\\to$ tiếp tục lặp.\n    Để bao phủ toàn bộ các nhánh này, ta cần tối thiểu **3** test case:\n    1. `k = 1` $\\to$ phủ Nhánh 1.\n    2. `k = 4` $\\to$ phủ Nhánh 2, Nhánh 3 (khi $i=2$), Nhánh 5.\n    3. `k = 3` $\\to$ phủ Nhánh 2, Nhánh 3 (khi $i=2$), Nhánh 6 (khi $i=2$), Nhánh 4 (khi $i=3$).",
      "d": "Sai. Vì đều không tối ưu được số lượng test case cần thiết để bao phủ toàn bộ nhánh."
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
      "a": "Sai. Vì thiếu nhánh (chỉ có 1 test case).",
      "b": "Đúng. Vì để phủ quyết định 100%, ta cần biểu thức điều kiện phức tạp nhận cả giá trị True (nhánh giảm giá) và False (nhánh không giảm giá):\n    - Với `TC1: Tuổi=20, Là_Học_Sinh=TRUE` $\\to$ `(20 < 18 OR TRUE == TRUE)` $\\to$ True (phủ nhánh True).\n    - Với `TC2: Tuổi=20, Là_Học_Sinh=FALSE` $\\to$ `(20 < 18 OR FALSE == TRUE)` $\\to$ False (phủ nhánh False).",
      "c": "Sai. Vì cả hai test case đều làm biểu thức nhận giá trị True (do tuổi 15 < 18 luôn đúng), không phủ được nhánh False.",
      "d": "Sai. Vì thiếu nhánh (chỉ có 1 test case)."
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
      "a": "Đúng. Vì độ bao phủ (Coverage) đo lường mức độ đầy đủ của bộ test case đối với mã nguồn/yêu cầu, giúp tester đánh giá được bộ test đã kiểm tra kỹ lưỡng đến đâu.",
      "b": "Sai. Vì độ bao phủ là chỉ số đo lường cốt lõi của kiểm thử hộp trắng.",
      "c": "Sai. Vì tiêu chuẩn dừng test phụ thuộc vào ngân sách, thời gian, chất lượng phần mềm, không nhất thiết phải đạt 100% độ bao phủ.",
      "d": "Sai. Vì số lượng test case lớn nhưng trùng lặp đường chạy thì không làm tăng độ bao phủ."
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
      "a": "Đúng. Vì nghịch lý thuốc trừ sâu chỉ ra rằng nếu lặp lại cùng một bộ test case cũ, phần mềm sẽ không phát hiện thêm lỗi mới. Do đó, cần thường xuyên review, cập nhật bộ test case cũ và bổ sung thêm các kịch bản test mới.",
      "b": "Sai. Vì đều hiểu sai hoặc hành động đi ngược lại nguyên lý này.",
      "c": "Sai. Vì đều hiểu sai hoặc hành động đi ngược lại nguyên lý này.",
      "d": "Sai. Vì đều hiểu sai hoặc hành động đi ngược lại nguyên lý này."
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
      "a": "Sai. Vì là các tài liệu đặc tả kỹ thuật nội bộ, không phản ánh trực tiếp góc nhìn nghiệp vụ thực tế của người dùng.",
      "b": "Đúng. Vì kiểm thử chấp nhận nhằm chứng minh phần mềm phục vụ tốt công việc của người dùng. Do đó, nguồn cung cấp kết quả mong đợi (Expected results) chính xác nhất chính là tài liệu Đặc tả yêu cầu của người dùng (User Requirements).",
      "c": "Sai. Vì là các tài liệu đặc tả kỹ thuật nội bộ, không phản ánh trực tiếp góc nhìn nghiệp vụ thực tế của người dùng.",
      "d": "Sai. Vì kết quả thực tế là thứ cần kiểm thử, không thể dùng làm nguồn kết quả mong đợi."
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
      "a": "Đúng. Vì đoạn mã có 2 điểm quyết định: câu lệnh `if` và vòng lặp `while`. Ta cần tối thiểu **2 test case** để phủ hết tất cả các nhánh:\n    - *TC1: x = 1, y = 2* $\\to$ `x > y` là False $\\to$ chạy `y = y + 1 = 3`. `while (x > y)` là `1 > 3` (False) $\\to$ thoát lặp. Ca này phủ được nhánh `if-False` và `while-False`.\n    - *TC2: x = 3, y = 1* $\\to$ `x > y` là True $\\to$ chạy `x = x + 1 = 4`. Chạy tiếp `y = y + 1 = 2`. `while (x > y)` là `4 > 2` (True) $\\to$ chạy lặp `y = 4 * 2 = 8`, rồi kiểm tra lại `4 > 8` (False) $\\to$ thoát lặp. Ca này phủ được nhánh `if-True`, `while-True` và `while-False`.",
      "b": "Sai. Vì đều không phải số lượng test case tối ưu nhất.",
      "c": "Sai. Vì đều không phải số lượng test case tối ưu nhất.",
      "d": "Sai. Vì đều không phải số lượng test case tối ưu nhất."
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
      "a": "Sai. Vì chương trình kiểm thử chạy bình thường (không lỗi cú pháp/runtime), chỉ báo thất bại do sai logic mong đợi.",
      "b": "Sai. Vì chương trình kiểm thử chạy bình thường (không lỗi cú pháp/runtime), chỉ báo thất bại do sai logic mong đợi.",
      "c": "Sai. Vì chương trình kiểm thử chạy bình thường (không lỗi cú pháp/runtime), chỉ báo thất bại do sai logic mong đợi.",
      "d": "Đúng. Vì chiều dài chuỗi `\"Test\"` là 4 ký tự, nhưng câu lệnh assert mong đợi kết quả là 3 (`assertEquals(3, 4)`). Lỗi kiểm thử (AssertionError) xảy ra và JUnit báo cáo kết quả kiểm thử này là Thất bại (Failure)."
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
      "a": "Sai. Vì QA/QC, người dùng cuối hay designer không chịu trách nhiệm viết và chạy unit test.",
      "b": "Đúng. Vì kiểm thử đơn vị (Unit Test) được viết và thực hiện bởi chính lập trình viên (Developer) ngay trong giai đoạn phát triển để tự kiểm tra chất lượng code của mình.",
      "c": "Sai. Vì QA/QC, người dùng cuối hay designer không chịu trách nhiệm viết và chạy unit test.",
      "d": "Sai. Vì QA/QC, người dùng cuối hay designer không chịu trách nhiệm viết và chạy unit test."
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
    "correct": "a",
    "explanations": {
      "a": "Đúng. Vì tương tự Câu 69 Bộ 2, do tích hợp từ các thành phần cấp thấp nhất (lá) trở lên, các module này không gọi xuống module nào khác. Vì vậy tester hoàn toàn **không cần thiết kế Stub** (cần thiết kế Driver để gọi).",
      "b": "Sai. Vì vẫn cần thiết kế Driver.\n  - **C & D sai:** Các chức năng điều khiển hệ thống ở cấp cao sẽ được kiểm thử muộn nhất trong chiến lược này.",
      "c": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "d": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học."
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
      "a": "Sai. Vì không phải phần mở rộng tệp nguồn Java.",
      "b": "Sai. Vì không phải phần mở rộng tệp nguồn Java.",
      "c": "Sai. Vì không phải phần mở rộng tệp nguồn Java.",
      "d": "Đúng. Vì JUnit test code thực chất là các class viết bằng ngôn ngữ Java, do đó chúng bắt buộc phải lưu dưới tệp nguồn Java có phần mở rộng là `.java`."
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
    "correct": "c",
    "explanations": {
      "a": "Sai. Vì đều không tối ưu được số lượng test case cần thiết để bao phủ lệnh 100%.",
      "b": "Sai. Vì đều không tối ưu được số lượng test case cần thiết để bao phủ lệnh 100%.",
      "c": "Đúng. Vì đoạn mã switch có 2 khối lệnh độc lập: `cout << \"Chia het cho 3\";` (ở case 0) và `cout << \"Khong chia het cho 3\";` (ở case 1/2). Do trong 1 lần thực thi chỉ có 1 case chạy, ta cần tối thiểu **2** test case (1 ca chia hết cho 3, 1 ca không chia hết cho 3) để thực thi toàn bộ các câu lệnh trong code.",
      "d": "Sai. Vì đều không tối ưu được số lượng test case cần thiết để bao phủ lệnh 100%."
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
      "a": "Sai. Vì đều là hình thức kiểm thử động, yêu cầu chạy chương trình.",
      "b": "Sai. Vì đều là hình thức kiểm thử động, yêu cầu chạy chương trình.",
      "c": "Sai. Vì đều là hình thức kiểm thử động, yêu cầu chạy chương trình.",
      "d": "Đúng. Vì soát xét mã nguồn (Review code) là kỹ thuật kiểm thử tĩnh (Static testing) vì hoạt động này được thực hiện thông qua việc đọc hiểu và phân tích code tĩnh mà không cần chạy chương trình."
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
      "a": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "b": "Đúng. Vì đây là đáp án chính xác theo tài liệu chuẩn ôn tập môn học.",
      "c": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "d": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học."
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
      "a": "Đúng. Vì kiểm thử hồi quy (Regression Testing) được chạy lại sau khi hệ thống có sửa đổi (code change, bug fix, environment change) để đảm bảo các thay đổi đó không làm phát sinh lỗi ở các chức năng cũ đang hoạt động ổn định.",
      "b": "Sai. Vì đều hiểu sai về mục đích và thời điểm tiến hành kiểm thử hồi quy.\n\n---\n\n## BỘ 4: ÔN TẬP KIỂM THỬ PHẦN MỀM (35 CÂU)",
      "c": "Sai. Vì đều hiểu sai về mục đích và thời điểm tiến hành kiểm thử hồi quy.\n\n---\n\n## BỘ 4: ÔN TẬP KIỂM THỬ PHẦN MỀM (35 CÂU)",
      "d": "Sai. Vì đều hiểu sai về mục đích và thời điểm tiến hành kiểm thử hồi quy.\n\n---\n\n## BỘ 4: ÔN TẬP KIỂM THỬ PHẦN MỀM (35 CÂU)"
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
      "a": "Sai. Vì đều phát biểu sai mối quan hệ tỷ lệ thuận giữa độ bao phủ và độ tin cậy của kiểm thử.",
      "b": "Sai. Vì đều phát biểu sai mối quan hệ tỷ lệ thuận giữa độ bao phủ và độ tin cậy của kiểm thử.",
      "c": "Sai. Vì đều phát biểu sai mối quan hệ tỷ lệ thuận giữa độ bao phủ và độ tin cậy của kiểm thử.",
      "d": "Đúng. Vì độ bao phủ (Coverage) đo lường tỉ lệ phần trăm các thành phần của hệ thống (mã nguồn, rẽ nhánh, yêu cầu) đã được thực thi bởi bộ ca kiểm thử. Khi độ bao phủ càng lớn, nhiều trường hợp và lỗi tiềm ẩn được phát hiện và khắc phục, qua đó làm tăng độ tin cậy (reliability) của phần mềm và bộ kiểm thử."
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
      "a": "Sai. Vì đây là kỹ thuật kiểm thử dựa trên kinh nghiệm (Experience-based testing).",
      "b": "Đúng. Vì kiểm thử hộp đen (Black-box testing) hay kiểm thử dựa trên đặc tả (Specification-based testing) là kỹ thuật thiết kế các ca kiểm thử dựa trực tiếp trên các tài liệu đặc tả yêu cầu và chức năng của hệ thống mà không cần biết cấu trúc code bên trong.",
      "c": "Sai. Vì đều là kỹ thuật kiểm thử hộp trắng (White-box / structure-based testing) do can thiệp sâu vào cấu trúc thiết kế chi tiết và kiến trúc mã nguồn.",
      "d": "Sai. Vì đều là kỹ thuật kiểm thử hộp trắng (White-box / structure-based testing) do can thiệp sâu vào cấu trúc thiết kế chi tiết và kiến trúc mã nguồn."
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
      "a": "Đúng. Vì nhà phát triển (Developer) khi tự kiểm thử code của mình sẽ thiếu tính khách quan (lack of objectivity). Do có tâm lý tin tưởng code của mình đã chạy đúng (thiên kiến xác nhận), họ thường bỏ qua các kịch bản lỗi hoặc các giả định sai lầm mà chính họ đã đưa vào khi lập trình.",
      "b": "Sai. Vì đều không phải lý do tâm lý - nhận thức cốt lõi nhất gây cản trở lập trình viên tự tìm lỗi của mình.",
      "c": "Sai. Vì đều không phải lý do tâm lý - nhận thức cốt lõi nhất gây cản trở lập trình viên tự tìm lỗi của mình.",
      "d": "Sai. Vì đều không phải lý do tâm lý - nhận thức cốt lõi nhất gây cản trở lập trình viên tự tìm lỗi của mình."
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
      "a": "Sai. Vì thuộc kiểm thử chức năng (Functional testing).",
      "b": "Sai. Vì đây là kiểm thử tìm lỗi (defect testing) hoặc stress test nói chung.",
      "c": "Đúng. Vì kiểm thử phi chức năng (Non-functional testing) tập trung vào các đặc tính chất lượng của hệ thống như hiệu năng, bảo mật, độ tin cậy, và khả năng mở rộng (scalability). Do đó, kiểm tra khả năng mở rộng dễ dàng (C) thuộc nhóm phi chức năng.",
      "d": "Sai. Vì thuộc kiểm thử chức năng (Functional testing)."
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
      "a": "Sai. Vì - 13 là số test case của kiểm thử biên thông thường (Normal BVA - công thức $4n+1$).\n    - 9 và 125 tính sai số lượng test case.",
      "b": "Sai. Vì - 13 là số test case của kiểm thử biên thông thường (Normal BVA - công thức $4n+1$).\n    - 9 và 125 tính sai số lượng test case.",
      "c": "Sai. Vì - 13 là số test case của kiểm thử biên thông thường (Normal BVA - công thức $4n+1$).\n    - 9 và 125 tính sai số lượng test case.",
      "d": "Đúng. Vì công thức tính số ca kiểm thử giá trị biên mạnh (Robust BVA - bao gồm các giá trị ngoài biên) đối với hệ thống có $n$ biến đầu vào là: $6n + 1$. Với $n = 3$ biến ($a, b, c$), số lượng test case cần thiết là $6 \\times 3 + 1 = 19$ test case."
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
      "a": "Sai. Vì - Test suite là tập hợp nhiều test case.\n    - Test plan là tài liệu kế hoạch kiểm thử tổng thể.\n    - Test document là tài liệu kiểm thử nói chung.",
      "b": "Sai. Vì - Test suite là tập hợp nhiều test case.\n    - Test plan là tài liệu kế hoạch kiểm thử tổng thể.\n    - Test document là tài liệu kiểm thử nói chung.",
      "c": "Đúng. Vì đây là định nghĩa tiêu chuẩn của Ca kiểm thử (Test Case). Một test case bắt buộc phải có các giá trị đầu vào (inputs), điều kiện tiền đề thực thi (preconditions) và kết quả mong đợi (expected outputs).",
      "d": "Sai. Vì - Test suite là tập hợp nhiều test case.\n    - Test plan là tài liệu kế hoạch kiểm thử tổng thể.\n    - Test document là tài liệu kiểm thử nói chung."
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
      "a": "Sai. Vì kiểm thử hộp đen thường dựa vào đặc tả thiết kế chức năng.",
      "b": "Sai. Vì đều thuộc nhóm kiểm thử dựa trên kinh nghiệm (experience-based).",
      "c": "Đúng. Vì kiểm thử hộp trắng (White-box testing) dựa trên việc phân tích mã nguồn bên trong của chương trình nên còn được gọi là Kiểm thử cấu trúc (Structure-based testing).",
      "d": "Sai. Vì đều thuộc nhóm kiểm thử dựa trên kinh nghiệm (experience-based)."
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
      "a": "Sai. Vì ở giai đoạn này mới có tài liệu, chỉ có thể kiểm thử tĩnh (static testing/review) chứ chưa thể chạy thử code.",
      "b": "Đúng. Vì kiểm thử động (Dynamic testing) yêu cầu chương trình phải chạy được (thực thi). Do đó, kiểm thử động chỉ có thể bắt đầu sớm nhất khi module code đầu tiên (first code module) đã sẵn sàng để viết và chạy unit test.",
      "c": "Sai. Vì ở giai đoạn này mới có tài liệu, chỉ có thể kiểm thử tĩnh (static testing/review) chứ chưa thể chạy thử code.",
      "d": "Sai. Vì đợi đến khi toàn bộ hệ thống code xong mới test động là quá muộn và không tối ưu."
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
      "a": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "b": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "c": "Sai. Vì lựa chọn này chưa chính xác theo đặc tả lý thuyết môn học.",
      "d": "Đúng. Vì đây là đáp án chính xác theo tài liệu chuẩn ôn tập môn học."
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
      "a": "Đúng. Vì re-testing (Test lại) là chạy lại đúng các ca kiểm thử từng thất bại trước đó để xác minh xem lỗi đó đã được fix chưa. Kiểm thử hồi quy (Regression Testing) là chạy lại các ca kiểm thử đang chạy tốt để đảm bảo việc sửa đổi code không gây ra tác dụng phụ (lỗi mới) ở các vùng chức năng khác.",
      "b": "Sai. Vì phát biểu ngược nghĩa của hai khái niệm.",
      "c": "Sai. Vì cả hai kỹ thuật đều được thực hiện sau khi đã có sửa đổi code/fix bug.",
      "d": "Sai. Vì cả hai đều có thể chạy trên cùng một môi trường kiểm thử."
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
      "a": "Đúng. Vì kiểm thử hồi quy (Regression testing) được thực hiện ngay sau khi hệ thống có sửa đổi (code change, bug fix) để đảm bảo không phát sinh lỗi mới ở các vùng chức năng cũ đang hoạt động ổn định.",
      "b": "Sai. Vì kiểm thử hồi quy có thể chạy lặp đi lặp lại nhiều lần mỗi khi có bản build mới.",
      "c": "Sai. Vì không thể thực hiện hồi quy khi chỉ mới có SRS vì chưa có code để thực thi.",
      "d": "Sai. Vì bộ test case hồi quy vẫn cần được cập nhật khi các tính năng cũ thay đổi yêu cầu."
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
      "a": "Sai. Vì đều là các nội dung bắt buộc có trong Test Plan theo tiêu chuẩn IEEE 829.",
      "b": "Sai. Vì đều là các nội dung bắt buộc có trong Test Plan theo tiêu chuẩn IEEE 829.",
      "c": "Đúng. Vì test Plan (Kế hoạch kiểm thử) định ra chiến lược, phạm vi, lịch trình, mốc tiến độ (Milestone), môi trường và tài nguyên. Chi tiết các ca kiểm thử (Test Case) được viết riêng trong các tài liệu Kịch bản kiểm thử (Test Cases Specification) chứ không đưa trực tiếp vào Test Plan tổng thể để tránh tài liệu bị quá tải chi tiết.",
      "d": "Sai. Vì đều là các nội dung bắt buộc có trong Test Plan theo tiêu chuẩn IEEE 829."
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
      "a": "Sai. Vì độ bao phủ là một thước đo tỷ lệ định lượng (ví dụ: đạt 85%), chứ không phải chỉ là lời khẳng định đúng/sai.",
      "b": "Đúng. Vì Bao phủ dòng lệnh (Statement Coverage) là chỉ số đo lường tỷ lệ phần trăm (%) các câu lệnh trong mã nguồn chương trình được thực thi bởi bộ ca kiểm thử trên tổng số câu lệnh có thể thực thi của chương trình.",
      "c": "Sai. Vì sai công thức tính của độ bao phủ lệnh.",
      "d": "Sai. Vì sai công thức tính của độ bao phủ lệnh."
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
      "a": "Sai. Vì tích hợp Top-down đòi hỏi phải tạo các Stub (module con giả lập) nên việc thiết kế phức tạp hơn và cần Stub.",
      "b": "Sai. Vì tích hợp Top-down đòi hỏi phải tạo các Stub (module con giả lập) nên việc thiết kế phức tạp hơn và cần Stub.",
      "c": "Đúng. Vì trong kiểm thử tích hợp từ trên xuống (Top-down), các module ở mức cao nhất (chứa logic điều khiển chính) được tích hợp và kiểm thử đầu tiên. Điều này giúp kiểm chứng sớm kiến trúc điều khiển cốt lõi và demo được giao diện chính cho khách hàng từ rất sớm.",
      "d": "Sai. Vì stub chỉ là module giả lập tạm thời, không phải đối tượng cần kiểm thử."
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
      "a": "Sai. Vì không thể chứng minh hoàn toàn sạch lỗi.",
      "b": "Sai. Vì đây là mục đích của kiểm thử chấp nhận (Acceptance testing).",
      "c": "Đúng. Vì mục đích chính của kiểm thử đơn vị (Unit testing) là để lập trình viên tự kiểm chứng xem thành phần logic nhỏ nhất mình viết ra (hàm, lớp, phương thức) có hoạt động hoàn toàn chính xác theo đúng tài liệu đặc tả thiết kế chi tiết (low-level design) của module đó.",
      "d": "Sai. Vì tìm lỗi là hoạt động hỗ trợ, mục đích bao quát của unit test là xác minh tính đúng đắn so với đặc tả."
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
      "a": "Đúng. Vì kiểm thử hiệu năng (Performance Testing) kiểm tra các đặc tính phi chức năng như tốc độ đáp ứng, độ ổn định, khả năng chịu tải của phần mềm dưới các điều kiện vận hành khác nhau.",
      "b": "Sai. Vì đều là các cấp độ kiểm thử (Levels of testing) chứ không phải loại kiểm thử phi chức năng.",
      "c": "Sai. Vì đều là các cấp độ kiểm thử (Levels of testing) chứ không phải loại kiểm thử phi chức năng.",
      "d": "Sai. Vì đều là các cấp độ kiểm thử (Levels of testing) chứ không phải loại kiểm thử phi chức năng."
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
      "a": "Sai. Vì tính toán sai số lượng test case cần thiết cho phủ dòng lệnh hoặc phủ nhánh.",
      "b": "Sai. Vì tính toán sai số lượng test case cần thiết cho phủ dòng lệnh hoặc phủ nhánh.",
      "c": "Sai. Vì tính toán sai số lượng test case cần thiết cho phủ dòng lệnh hoặc phủ nhánh.",
      "d": "Đúng. Vì - **Phủ dòng lệnh (Statement Coverage):** Ta có 2 khối lệnh rẽ nhánh là: `Print \"Large\"` (khi điều kiện True) và `Print \"Not large\"` (khi điều kiện False). Vì 1 test case chỉ có thể chạy qua một trong hai khối này, ta cần tối thiểu **2 test case** để đi qua tất cả các dòng lệnh trong code.\n      - *TC1: P = 1, Q = 1* -> `P > 0 && Q > 0` là True -> In ra \"Large\" (phủ dòng lệnh in \"Large\").\n      - *TC2: P = 0, Q = 0* -> `P > 0 && Q > 0` là False -> In ra \"Not large\" (phủ dòng lệnh in \"Not large\").\n    - **Phủ nhánh (Branch Coverage):** Ta cần kiểm thử cả nhánh True và False của điểm quyết định `if`. Bộ 2 test case trên (`TC1` cho nhánh True, `TC2` cho nhánh False) đã bao phủ hoàn toàn cả hai nhánh này. Do đó ta cần **2 test case** để phủ nhánh.\n    - Vậy kết quả là 2 test case để phủ các dòng lệnh, 2 test case để phủ nhánh."
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
      "a": "Sai. Vì đều là các yêu cầu mơ hồ, định tính và không thể đo lường khách quan bằng kiểm thử (thân thiện là cảm tính; 0 lỗi là bất khả thi; dễ di động thiếu tiêu chí đánh giá cụ thể).",
      "b": "Sai. Vì đều là các yêu cầu mơ hồ, định tính và không thể đo lường khách quan bằng kiểm thử (thân thiện là cảm tính; 0 lỗi là bất khả thi; dễ di động thiếu tiêu chí đánh giá cụ thể).",
      "c": "Đúng. Vì một yêu cầu kiểm thử được (testable requirement) phải rõ ràng, định lượng được và có tiêu chuẩn đo lường khách quan. Yêu cầu C chỉ rõ thời gian đáp ứng cụ thể (`< 1 giây`) dưới một điều kiện tải xác định, giúp tester dễ dàng thiết kế test case và đo lường trực tiếp để kết luận Pass/Fail.",
      "d": "Sai. Vì đều là các yêu cầu mơ hồ, định tính và không thể đo lường khách quan bằng kiểm thử (thân thiện là cảm tính; 0 lỗi là bất khả thi; dễ di động thiếu tiêu chí đánh giá cụ thể)."
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
    "correct": "b",
    "explanations": {
      "a": "Sai. Vì thiếu phân vùng không hợp lệ (`t < 0`) hoặc bỏ sót các phân vùng hợp lệ.",
      "b": "Đúng. Vì ta xác định các phân vùng tương đương cho số năm làm việc `t` như sau:\n    1. *Phân vùng hợp lệ 1:* `0 <= t <= 2` -> thưởng 1 triệu.\n    2. *Phân vùng hợp lệ 2:* `2 < t < 5` -> thưởng 3 triệu.\n    3. *Phân vùng hợp lệ 3:* `5 <= t <= 10` -> thưởng 5 triệu.\n    4. *Phân vùng hợp lệ 4:* `t > 10` -> thưởng 7 triệu.\n    5. *Phân vùng không hợp lệ:* `t < 0` -> báo lỗi.\n    Để bao phủ toàn bộ các trường hợp logic đầu vào hợp lệ và không hợp lệ, ta cần tối thiểu **5** test case tương ứng với 5 phân vùng tương đương này.",
      "c": "Sai. Vì thiếu phân vùng không hợp lệ (`t < 0`) hoặc bỏ sót các phân vùng hợp lệ.",
      "d": "Sai. Vì thiếu phân vùng không hợp lệ (`t < 0`) hoặc bỏ sót các phân vùng hợp lệ."
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
    "correct": "b",
    "explanations": {
      "a": "Sai. Vì đều không tối ưu được số lượng test case tối thiểu cần thiết để phủ điều kiện.",
      "b": "Đúng. Vì phủ điều kiện (Condition Coverage) yêu cầu mọi điều kiện đơn lẻ trong biểu thức quyết định phức tạp phải nhận cả giá trị True và False ít nhất một lần. Ở đây biểu thức quyết định là `(A>0 || B<7)` với hai điều kiện đơn lẻ: $C_1$: `A > 0` và $C_2$: `B < 7`. Ta cần tối thiểu **2 test case** để bao phủ:\n    - *TC1: A = 1, B = 8* -> $C_1$ = True, $C_2$ = False.\n    - *TC2: A = 0, B = 6* -> $C_1$ = False, $C_2$ = True.\n    Qua 2 test case này, cả $C_1$ và $C_2$ đều đã có đủ giá trị Đúng và Sai. Do đó số lượng test case tối thiểu cần thiết là **2**.",
      "c": "Sai. Vì đều không tối ưu được số lượng test case tối thiểu cần thiết để phủ điều kiện.",
      "d": "Sai. Vì đều không tối ưu được số lượng test case tối thiểu cần thiết để phủ điều kiện."
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
    "correct": "d",
    "explanations": {
      "a": "Sai. Vì đều là các trường hợp thích hợp để áp dụng bảng quyết định nhằm làm rõ sự phụ thuộc logic phức tạp giữa các biến.",
      "b": "Sai. Vì đều là các trường hợp thích hợp để áp dụng bảng quyết định nhằm làm rõ sự phụ thuộc logic phức tạp giữa các biến.",
      "c": "Sai. Vì đều là các trường hợp thích hợp để áp dụng bảng quyết định nhằm làm rõ sự phụ thuộc logic phức tạp giữa các biến.",
      "d": "Đúng. Vì bảng quyết định (Decision Table Testing) là kỹ thuật kiểm thử hộp đen để bao phủ các tổ hợp điều kiện đầu vào phức tạp dẫn đến các hành động đầu ra khác nhau. Khi độ phức tạp của logic nghiệp vụ thấp (hoặc độ phức tạp chu trình thấp - cấu trúc rẽ nhánh đơn giản), việc lập bảng quyết định cồng kềnh là không cần thiết, gây tốn thời gian. Khi đó ta nên dùng phân vùng tương đương hoặc biên để tiết kiệm chi phí."
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
      "a": "Đúng. Vì miền giá trị hợp lệ của textbox là các ký tự chữ cái (thường, hoa) và chữ số. Bất kỳ ký tự đặc biệt nào nằm ngoài miền này (như ký tự `$`) đều thuộc phân vùng không hợp lệ (Invalid Partition).",
      "b": "Sai. Vì đều là các ký tự chữ hoặc số hợp lệ nằm trong khoảng cho phép.",
      "c": "Sai. Vì đều là các ký tự chữ hoặc số hợp lệ nằm trong khoảng cho phép.",
      "d": "Sai. Vì đều là các ký tự chữ hoặc số hợp lệ nằm trong khoảng cho phép."
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
    "correct": "b",
    "explanations": {
      "a": "Sai. Vì tích hợp sandwich là sự kết hợp tăng dần giữa Top-down và Bottom-up.",
      "b": "Đúng. Vì tích hợp đồng thời (non-incremental integration) là phương pháp tích hợp tất cả các thành phần của hệ thống cùng một lúc và thực hiện kiểm thử toàn bộ. Phương pháp này được gọi là Tích hợp Big-bang (Big-bang integration).",
      "c": "Sai. Vì là các cách duyệt cấu trúc điều khiển trong tích hợp tăng dần.",
      "d": "Sai. Vì là các cách duyệt cấu trúc điều khiển trong tích hợp tăng dần."
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
      "a": "Đúng. Vì phủ cấp 3 là Phủ điều kiện (Condition Coverage). Ở đây, ta có cấu trúc rẽ nhánh `if-else if-else` với các điều kiện đơn lẻ: $C_1$: `x > y` và $C_2$: `x == y`. Để đạt 100% phủ điều kiện, ta cần các test case làm các điều kiện đơn lẻ này nhận cả True và False ít nhất 1 lần. Đồng thời, cấu trúc có 3 nhánh thực thi độc lập (trả về x=1, x=0, x=-1). Ta cần tối thiểu **3 test case** để bao phủ cả 3 nhánh logic này:\n    - *TC1: x = 2, y = 1* -> `x > y` là True -> `x = 1`. (Phủ nhánh 1).\n    - *TC2: x = 1, y = 1* -> `x > y` là False, `x == y` là True -> `x = 0`. (Phủ nhánh 2).\n    - *TC3: x = 1, y = 2* -> `x > y` là False, `x == y` là False -> `x = -1`. (Phủ nhánh 3).\n    Bộ 3 test case này giúp cả $C_1$ và $C_2$ đều được đánh giá cả True và False, đồng thời đi qua toàn bộ các nhánh lệnh của mã nguồn.",
      "b": "Sai. Vì đều không đưa ra số lượng test case chính xác để phủ đầy đủ.",
      "c": "Sai. Vì đều không đưa ra số lượng test case chính xác để phủ đầy đủ.",
      "d": "Sai. Vì đều không đưa ra số lượng test case chính xác để phủ đầy đủ."
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
      "a": "Đúng. Vì - **Độ bao phủ câu lệnh (Statement Coverage):** Chỉ cần **1 test case** duy nhất là đủ để thực thi 100% các dòng lệnh trong chương trình, bằng cách làm cho tất cả các điều kiện `if` đều là True: *TC1: person = \"senior citizen\", travelMonth = \"January\", class = \"first\"*. Vì tất cả các câu lệnh rẽ nhánh nằm trong thân `then` của `if`, không có khối `else` nào, nên TC1 sẽ chạy qua tất cả mọi dòng code.\n    - **Độ bao phủ nhánh (Branch Coverage):** Có 2 câu lệnh `if` độc lập. Mỗi `if` có 2 nhánh: True và False. Tổng cộng có 4 nhánh cần bao phủ. Ta cần tối thiểu **2 test case** để phủ hết:\n      - *TC1: person = \"senior citizen\", travelMonth = \"January\", class = \"first\"* -> phủ 2 nhánh True.\n      - *TC2: person = \"normal\", travelMonth = \"January\", class = \"economy\"* -> phủ 2 nhánh False.\n    - Vậy kết quả là 1 test case để phủ lệnh, 2 test case để phủ nhánh.",
      "b": "Sai. Vì tính toán sai số lượng test case tối thiểu cần thiết.",
      "c": "Sai. Vì tính toán sai số lượng test case tối thiểu cần thiết.",
      "d": "Sai. Vì tính toán sai số lượng test case tối thiểu cần thiết."
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
      "a": "Sai. Vì đều không phải định nghĩa đúng về Test Suite.",
      "b": "Đúng. Vì bộ kịch bản kiểm thử (Test Suite) là một tập hợp hoặc một nhóm các ca kiểm thử (test cases) liên quan được gom lại nhằm thực thi kiểm thử cho một tính năng hoặc toàn bộ hệ thống.",
      "c": "Sai. Vì đều không phải định nghĩa đúng về Test Suite.",
      "d": "Sai. Vì đều không phải định nghĩa đúng về Test Suite."
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
      "a": "Sai. Vì độ bao phủ không đo lường thời gian, xu hướng phân tích hay số lượng lỗi còn lại.",
      "b": "Sai. Vì độ bao phủ không đo lường thời gian, xu hướng phân tích hay số lượng lỗi còn lại.",
      "c": "Đúng. Vì độ bao phủ (Coverage) là chỉ số phản ánh tỷ lệ phần trăm các thành phần cấu trúc mã nguồn hoặc đặc tả yêu cầu đã được thực thi bởi bộ test. Chỉ số này giúp đánh giá độ đầy đủ và hiệu quả (thoroughness/effectiveness) của hoạt động kiểm thử.",
      "d": "Sai. Vì độ bao phủ không đo lường thời gian, xu hướng phân tích hay số lượng lỗi còn lại."
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
      "a": "Đúng. Vì việc phân chia kiểm thử thành các cấp độ/giai đoạn độc lập (Unit, Integration, System, Acceptance) giúp mỗi giai đoạn tập trung vào một mục tiêu kiểm tra khác nhau để tìm kiếm các loại lỗi khác nhau một cách hiệu quả.",
      "b": "Sai. Vì không phải là lý do kỹ thuật cốt lõi chi phối việc chia cấp độ kiểm thử.",
      "c": "Sai. Vì không phải là lý do kỹ thuật cốt lõi chi phối việc chia cấp độ kiểm thử.",
      "d": "Sai. Vì không phải là lý do kỹ thuật cốt lõi chi phối việc chia cấp độ kiểm thử."
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
      "a": "Sai. Vì đều hiểu sai khái niệm tiêu chí dừng trong quản lý kiểm thử.",
      "b": "Đúng. Vì tiêu chí dừng kiểm thử (Exit Criteria) xác định các điều kiện cụ thể cần thỏa mãn để hoạt động kiểm thử được coi là hoàn thành theo kế hoạch một cách an toàn và đạt yêu cầu chất lượng.",
      "c": "Sai. Vì đều hiểu sai khái niệm tiêu chí dừng trong quản lý kiểm thử.",
      "d": "Sai. Vì đều hiểu sai khái niệm tiêu chí dừng trong quản lý kiểm thử."
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
      "a": "Sai. Vì độ phức tạp rẽ nhánh không đồng nghĩa với kích thước dòng code hay độ khó khi viết code.",
      "b": "Sai. Vì độ phức tạp rẽ nhánh không đồng nghĩa với kích thước dòng code hay độ khó khi viết code.",
      "c": "Đúng. Vì độ phức tạp chu trình (Cyclomatic Complexity) đo lường số lượng đường đi độc lập qua mã nguồn của chương trình. Độ phức tạp chu trình càng cao nghĩa là chương trình có càng nhiều rẽ nhánh phức tạp, dẫn đến việc thiết kế các kịch bản kiểm thử để bao phủ hết các đường chạy này trở nên rất khó khăn (chương trình khó test).",
      "d": "Sai. Vì độ phức tạp rẽ nhánh không đồng nghĩa với kích thước dòng code hay độ khó khi viết code."
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
      "a": "Sai. Vì đều là các hoạt động trọng tâm ở mức kiểm thử hệ thống.",
      "b": "Sai. Vì đều là các hoạt động trọng tâm ở mức kiểm thử hệ thống.",
      "c": "Đúng. Vì kiểm thử Big-bang (Big-bang integration testing) là một chiến lược kiểm thử tích hợp (Integration Testing), không phải là một phần của kiểm thử hệ thống (System Testing) - mức độ kiểm thử trên hệ thống hoàn chỉnh đã qua tích hợp.",
      "d": "Sai. Vì đều là các hoạt động trọng tâm ở mức kiểm thử hệ thống."
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
      "a": "Đúng. Vì - Chương trình có 3 nhánh in độc lập:\n      1. Nhánh 1: `print \"c must be smaller...\"` (khi `c < a` và `c > b` là True).\n      2. Nhánh 2: `print \"Proceed to next...\"` (khi `c < a` là True và `c > b` là False).\n      3. Nhánh 3: `print \"b can be smaller...\"` (khi `c < a` là False).\n    - **Phủ dòng lệnh (Statement Coverage):** Vì cả 3 nhánh in đều chứa các dòng lệnh độc lập, ta cần tối thiểu **3 test case** để chạy qua cả 3 dòng in này.\n    - **Phủ quyết định (Decision Coverage):** Ta có 2 điểm quyết định lồng nhau. Để phủ hết toàn bộ các nhánh rẽ này (nhánh True/False của cả 2 quyết định), ta bắt buộc phải chạy qua cả 3 đường đi tương ứng với 3 test case ở trên. Do đó ta cần **3 test case** để phủ quyết định.\n    - Vậy kết quả là 3 test case cho phủ lệnh, 3 test case cho phủ quyết định (3, 3).",
      "b": "Sai. Vì đều tính toán sai số lượng test case cần thiết để bao phủ code.",
      "c": "Sai. Vì đều tính toán sai số lượng test case cần thiết để bao phủ code.",
      "d": "Sai. Vì đều tính toán sai số lượng test case cần thiết để bao phủ code."
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
      "a": "Sai. Vì đều là các hoạt động soát xét code tĩnh có thể thực hiện ở mức đơn vị.",
      "b": "Sai. Vì đều là các hoạt động soát xét code tĩnh có thể thực hiện ở mức đơn vị.",
      "c": "Đúng. Vì kiểm tra khả năng phục hồi sau sự cố (Recovery Testing) là loại kiểm thử phi chức năng được thực hiện ở cấp độ Kiểm thử hệ thống (System Testing). Ở cấp độ đơn vị (Unit Testing) cô lập, ta không thực hiện kiểm thử phục hồi hệ thống này.",
      "d": "Sai. Vì đều là các hoạt động soát xét code tĩnh có thể thực hiện ở mức đơn vị."
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
      "a": "Sai. Vì tính toán sai số lượng test case tối thiểu theo lý thuyết phủ cấu trúc.",
      "b": "Sai. Vì tính toán sai số lượng test case tối thiểu theo lý thuyết phủ cấu trúc.",
      "c": "Sai. Vì tính toán sai số lượng test case tối thiểu theo lý thuyết phủ cấu trúc.",
      "d": "Đúng. Vì - **Phủ cấp 1 (Statement Coverage):** Ta cần chạy qua tất cả 4 khối lệnh gán giá trị cho `res`. Chỉ cần **3 test case** là đủ:\n      - *TC1: m = -1, n = 0, x = false, y = false* -> chạy Khối 1 (`res = n-m`).\n      - *TC2: m = 2, n = 2, x = true, y = false* -> chạy Khối 2 (`res = -1`) và Khối 3 (`res = 1`).\n      - *TC3: m = 2, n = 0, x = false, y = false* -> chạy Khối 4 (`res = n`).\n      Với 3 test case này, toàn bộ mọi dòng lệnh đều đã được thực thi ít nhất một lần.\n    - **Phủ cấp 2 (Branch Coverage):** Ta có 3 quyết định rẽ nhánh: `if(m<0)`, `else if(x || y)`, và `if(n==m)`. Để đi qua toàn bộ nhánh True và False của cả 3 quyết định này, ta cần tối thiểu **4 test case**:\n      - *TC1 (m = -1)* -> phủ nhánh True của `if(m<0)`.\n      - *TC2 (m = 2, x = true, n = 2)* -> phủ nhánh False `if(m<0)`, nhánh True `if(x||y)`, nhánh True `if(n==m)`.\n      - *TC3 (m = 2, x = true, n = 1)* -> phủ nhánh False `if(n==m)`.\n      - *TC4 (m = 2, x = false, y = false)* -> phủ nhánh False `if(x||y)`.\n      Với 4 test case này, tất cả các nhánh rẽ đều đã được bao phủ.\n    - Do đó, số lượng test case cần thiết là 3 cho phủ cấp 1, 4 cho phủ cấp 2."
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
      "a": "Đúng. Vì đoán lỗi (Error Guessing) là kỹ thuật kiểm thử dựa trên kinh nghiệm của tester. Nó được dùng như phương pháp bổ sung (complementary) cho các kỹ thuật thiết kế kiểm thử chính quy (như phân vùng tương đương, biên) nhằm tìm lỗi ở các góc khuất.",
      "b": "Sai. Vì đoán lỗi có thể áp dụng ở mọi cấp độ kiểm thử.",
      "c": "Sai. Vì đoán lỗi có thể áp dụng ở mọi cấp độ kiểm thử.",
      "d": "Sai. Vì các test case đoán lỗi vẫn có thể được viết ra thành tài liệu và chạy lặp lại bình thường."
    }
  }
];
