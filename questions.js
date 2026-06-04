const QUESTIONS_DATA = [
  {
    id: 1,
    question: "Thiết kế phần mềm là gì?",
    options: [
      { key: "a", text: "Quá trình viết mã nguồn" },
      { key: "b", text: "Quá trình xác định các thành phần phần mềm và mối liên kết giữa chúng dựa trên yêu cầu của khách hàng" },
      { key: "c", text: "Quá trình kiểm thử phần mềm" },
      { key: "d", text: "Quá trình bảo trì phần mềm" }
    ],
    correct: "b",
    explanations: {
      a: "Viết mã nguồn thuộc về pha Hiện thực phần mềm (Implementation/Coding), chứ không phải pha Thiết kế.",
      b: "Chính xác! Thiết kế phần mềm là quá trình chuyển đổi các yêu cầu thành mô hình kiến trúc, xác định rõ các thành phần hệ thống và cách chúng giao tiếp, tương tác với nhau.",
      c: "Kiểm thử phần mềm (Testing) là một pha riêng biệt nhằm tìm kiếm lỗi, không phải thiết kế.",
      d: "Bảo trì phần mềm (Maintenance) là hoạt động sửa chữa, nâng cấp sau khi sản phẩm đã bàn giao."
    }
  },
  {
    id: 2,
    question: "Hiện thực phần mềm là gì?",
    options: [
      { key: "a", text: "Quá trình kiểm thử phần mềm" },
      { key: "b", text: "Quá trình hiện thực hóa thiết kế thành chương trình" },
      { key: "c", text: "Quá trình viết tài liệu hướng dẫn" },
      { key: "d", text: "Quá trình bảo trì phần mềm" }
    ],
    correct: "b",
    explanations: {
      a: "Kiểm thử phần mềm là hoạt động tìm lỗi, diễn ra song song hoặc sau pha hiện thực.",
      b: "Chính xác! Hiện thực phần mềm (Coding/Implementation) chính là quá trình dịch các mô hình, tài liệu thiết kế chi tiết thành mã nguồn chạy được.",
      c: "Viết tài liệu hướng dẫn chỉ là một phần việc hỗ trợ, không phản ánh cốt lõi của hiện thực phần mềm.",
      d: "Bảo trì phần mềm là pha hoạt động sau khi sản phẩm đã được đưa vào sử dụng thực tế."
    }
  },
  {
    id: 4,
    question: "Thiết kế hướng đối tượng sử dụng gì để biểu diễn?",
    options: [
      { key: "a", text: "UML" },
      { key: "b", text: "SQL" },
      { key: "c", text: "HTML" },
      { key: "d", text: "XML" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! UML (Unified Modeling Language) cung cấp các biểu đồ chuẩn hóa (Class, Sequence, Use Case...) chuyên dụng để mô hình hóa và thiết kế các hệ thống hướng đối tượng.",
      b: "SQL là ngôn ngữ truy vấn dùng cho các Cơ sở dữ liệu quan hệ, không dùng để biểu diễn thiết kế hướng đối tượng.",
      c: "HTML là ngôn ngữ đánh dấu dùng để xây dựng cấu trúc trang web.",
      d: "XML là ngôn ngữ đánh dấu dùng để lưu trữ và truyền tải dữ liệu có cấu trúc."
    }
  },
  {
    id: 5,
    question: "Thiết kế mẫu là gì?",
    options: [
      { key: "a", text: "Một phương pháp lập trình" },
      { key: "b", text: "Một phương pháp thiết kế giao diện người dùng" },
      { key: "c", text: "Một phương pháp để giải quyết các vấn đề thiết kế thường gặp" },
      { key: "d", text: "Một phương pháp kiểm thử phần mềm" }
    ],
    correct: "c",
    explanations: {
      a: "Lập trình (Programming paradigm) rộng hơn và khác với các mẫu thiết kế kiến trúc.",
      b: "Mặc dù có các mẫu thiết kế UI riêng, nhưng khái niệm chung của Thiết kế mẫu (Design Pattern) áp dụng cho kiến trúc mã nguồn tổng thể.",
      c: "Chính xác! Thiết kế mẫu (Design Pattern) là các giải pháp mẫu đã được chuẩn hóa và kiểm chứng giúp giải quyết các bài toán thiết kế hệ thống lặp đi lặp lại thường gặp.",
      d: "Kiểm thử phần mềm có các kỹ thuật riêng biệt, không thuộc khái niệm Thiết kế mẫu."
    }
  },
  {
    id: 6,
    question: "Phát triển mã nguồn mở liên quan đến gì?",
    options: [
      { key: "a", text: "Sử dụng phần mềm đóng gói" },
      { key: "b", text: "Sử dụng và phát triển các thành phần mã nguồn mở" },
      { key: "c", text: "Thiết kế giao diện người dùng" },
      { key: "d", text: "Quản lý dự án phần mềm" }
    ],
    correct: "b",
    explanations: {
      a: "Sử dụng phần mềm đóng gói (thương mại) thường đi liền với mã nguồn đóng và bản quyền nghiêm ngặt.",
      b: "Chính xác! Phát triển mã nguồn mở (Open Source Development) là quá trình xây dựng phần mềm có công khai mã nguồn, cho phép mọi người tự do kế thừa, tùy biến và đóng góp phát triển.",
      c: "Thiết kế UI là công việc thuộc về giao diện, áp dụng cho cả mã nguồn đóng lẫn nguồn mở.",
      d: "Quản lý dự án là quy trình tổ chức nhân sự và thời gian, không đặc thù riêng cho mã nguồn mở."
    }
  },
  {
    id: 7,
    question: "Một trong những nguyên tắc chính trong thiết kế giao diện người dùng là gì?",
    options: [
      { key: "a", text: "Tối ưu hóa cho các thiết bị di động" },
      { key: "b", text: "Tính đến nhu cầu, kinh nghiệm và khả năng của người dùng hệ thống" },
      { key: "c", text: "Tăng tốc độ phát triển phần mềm" },
      { key: "d", text: "Giảm chi phí phát triển" }
    ],
    correct: "b",
    explanations: {
      a: "Tối ưu cho di động chỉ là một phần của thiết kế đa nền tảng, không phải nguyên tắc cốt lõi tổng quát nhất.",
      b: "Chính xác! Thiết kế UI/UX phải lấy người dùng làm trung tâm (User-Centered Design). Ta cần thấu hiểu kinh nghiệm sống, thói quen và giới hạn khả năng của họ để giao diện dễ dùng nhất.",
      c: "Thiết kế giao diện kỹ lưỡng đôi khi có thể làm tăng thời gian phát triển ban đầu.",
      d: "Tương tự, đầu tư cho thiết kế giao diện chất lượng cao có thể làm tăng chi phí ban đầu nhưng tiết kiệm chi phí hỗ trợ và vận hành lâu dài."
    }
  },
  {
    id: 8,
    question: "Thiết kế UI cần nhận thức được điều gì?",
    options: [
      { key: "a", text: "Các hạn chế về tài chính của dự án" },
      { key: "b", text: "Các hạn chế về vật lý và tinh thần của người dùng" },
      { key: "c", text: "Các công nghệ mới nhất" },
      { key: "d", text: "Các yêu cầu chức năng của hệ thống" }
    ],
    correct: "b",
    explanations: {
      a: "Hạn chế tài chính thuộc về phạm vi quản trị dự án, không thuộc nguyên lý thiết kế tương tác người-máy.",
      b: "Chính xác! Người dùng có các giới hạn sinh học (ví dụ: kích thước ngón tay, thị lực kém ở người cao tuổi) và tinh thần (khả năng tập trung, trí nhớ ngắn hạn). UI tốt phải thiết kế để thích ứng với những hạn chế này.",
      c: "Đuổi theo công nghệ mới nhất mà không chú ý đến khả năng sử dụng của người dùng sẽ dẫn đến thất bại.",
      d: "Yêu cầu chức năng quyết định hệ thống làm được gì, còn thiết kế UI quyết định làm thế nào để người dùng tương tác dễ dàng nhất."
    }
  },
  {
    id: 9,
    question: "Các mô hình thiết kế hệ thống có vai trò gì trong dự án lớn?",
    options: [
      { key: "a", text: "Giảm thời gian phát triển" },
      { key: "b", text: "Là cơ chế giao tiếp quan trọng giữa các nhóm thiết kế khác nhau" },
      { key: "c", text: "Tăng chi phí dự án" },
      { key: "d", text: "Giảm số lượng lỗi phần mềm" }
    ],
    correct: "b",
    explanations: {
      a: "Việc dựng mô hình thiết kế ban đầu có thể làm kéo dài pha chuẩn bị, dù nó giúp giảm thời gian sửa lỗi về sau.",
      b: "Chính xác! Trong các dự án lớn có hàng trăm lập trình viên, các mô hình thiết kế đóng vai trò như một bản vẽ kỹ thuật chung giúp các nhóm khác nhau giao tiếp, tích hợp và phát triển nhất quán.",
      c: "Mô hình thiết kế chuẩn chỉnh giúp tối ưu hóa chi phí chứ không phải sinh ra để tăng chi phí.",
      d: "Giảm lỗi là lợi ích gián tiếp thông qua việc hiểu đúng thiết kế, nhưng vai trò trực tiếp cốt lõi là làm phương tiện truyền đạt thông tin."
    }
  },
  {
    id: 10,
    question: "Thiết kế thuật toán là gì?",
    options: [
      { key: "a", text: "Quá trình thiết kế giao diện người dùng" },
      { key: "b", text: "Quá trình thiết kế các thuật toán để giải quyết các vấn đề cụ thể" },
      { key: "c", text: "Quá trình viết mã nguồn" },
      { key: "d", text: "Quá trình kiểm thử phần mềm" }
    ],
    correct: "b",
    explanations: {
      a: "Thiết kế giao diện liên quan đến đồ họa và luồng tương tác, không liên quan đến thuật toán xử lý dữ liệu.",
      b: "Chính xác! Thiết kế thuật toán là việc xây dựng các bước logic tuần tự, cấu trúc dữ liệu và công thức tính toán để giải quyết một bài toán cụ thể tối ưu về bộ nhớ và thời gian.",
      c: "Viết mã nguồn là bước Hiện thực (Coding) sau khi đã thiết kế xong thuật toán.",
      d: "Kiểm thử phần mềm là tìm lỗi của mã nguồn sau khi đã lập trình xong."
    }
  },
  {
    id: 11,
    question: "Thiết kế cơ sở dữ liệu liên quan đến điều gì?",
    options: [
      { key: "a", text: "Thiết kế giao diện người dùng" },
      { key: "b", text: "Thiết kế cấu trúc và tổ chức của cơ sở dữ liệu" },
      { key: "c", text: "Thiết kế các thuật toán" },
      { key: "d", text: "Kiểm thử cơ sở dữ liệu" }
    ],
    correct: "b",
    explanations: {
      a: "Thiết kế giao diện hiển thị dữ liệu ra màn hình, còn CSDL lưu trữ dữ liệu phía dưới.",
      b: "Chính xác! Thiết kế cơ sở dữ liệu liên quan đến việc xác định cấu trúc lưu trữ, định dạng các bảng, liên kết quan hệ (khóa ngoại) và chỉ mục để truy vấn dữ liệu hiệu quả.",
      c: "Thiết kế thuật toán tập trung vào luồng tính toán, khác thiết kế cấu trúc dữ liệu lưu trữ.",
      d: "Kiểm thử CSDL là một pha kiểm định phụ, không phải pha thiết kế."
    }
  },
  {
    id: 12,
    question: "Trong thiết kế giao diện người dùng, cần thừa nhận điều gì?",
    options: [
      { key: "a", text: "Người dùng luôn biết cách sử dụng hệ thống" },
      { key: "b", text: "Ai cũng có thể nhầm lẫn" },
      { key: "c", text: "Hệ thống không bao giờ gặp lỗi" },
      { key: "d", text: "Giao diện không cần thân thiện" }
    ],
    correct: "b",
    explanations: {
      a: "Mọi người dùng, dù chuyên nghiệp hay mới dùng, đều cần thời gian làm quen và dễ gặp bỡ ngỡ.",
      b: "Chính xác! Thừa nhận 'con người ai cũng có thể nhầm lẫn' giúp thiết kế ra các giao diện có tính dung sai cao (cung cấp hộp thoại xác nhận, nút Undo, hướng dẫn sửa lỗi rõ ràng thay vì làm sập ứng dụng).",
      c: "Hệ thống phần mềm luôn có khả năng phát sinh lỗi khách quan.",
      d: "Giao diện thân thiện là mục tiêu sống còn của UI thiết kế."
    }
  },
  {
    id: 13,
    question: "Mục tiêu chính của thiết kế giao diện người dùng là gì?",
    options: [
      { key: "a", text: "Tăng tốc độ phát triển phần mềm" },
      { key: "b", text: "Đáp ứng nhu cầu và trải nghiệm người dùng" },
      { key: "c", text: "Giảm chi phí phát triển" },
      { key: "d", text: "Tăng tính bảo mật của hệ thống" }
    ],
    correct: "b",
    explanations: {
      a: "Thiết kế UI tốt đòi hỏi nhiều thời gian phân tích và chạy thử nên không trực tiếp tăng tốc độ lập trình.",
      b: "Chính xác! Mục tiêu tối thượng của UI/UX là giúp người dùng thao tác dễ dàng nhất, làm việc năng suất nhất và cảm thấy thoải mái khi trải nghiệm hệ thống.",
      c: "Tương tự, nó có thể tăng chi phí nhân sự thiết kế ban đầu.",
      d: "Tính bảo mật là nhiệm vụ của kiến trúc phân quyền và kỹ thuật mã hóa hệ thống."
    }
  },
  {
    id: 14,
    question: "Quá trình thiết kế phần mềm bao gồm gì?",
    options: [
      { key: "a", text: "Viết mã nguồn" },
      { key: "b", text: "Định nghĩa các thành phần phần mềm và mối liên kết giữa chúng" },
      { key: "c", text: "Kiểm thử phần mềm" },
      { key: "d", text: "Bảo trì phần mềm" }
    ],
    correct: "b",
    explanations: {
      a: "Viết mã nguồn là công việc của pha hiện thực mã chương trình.",
      b: "Chính xác! Thiết kế phần mềm là pha kiến trúc hóa hệ thống, định nghĩa cấu trúc của các mô-đun thành phần và giao diện tích hợp giữa chúng.",
      c: "Kiểm thử phần mềm diễn ra sau khi đã có code chạy được để tìm lỗi.",
      d: "Bảo trì phần mềm thực hiện sau khi phần mềm đã bàn giao cho khách hàng sử dụng."
    }
  },
  {
    id: 15,
    question: "Một ví dụ về biểu đồ hoạt động trong thiết kế phần mềm là gì?",
    options: [
      { key: "a", text: "Biểu đồ lớp" },
      { key: "b", text: "Biểu đồ liên kết" },
      { key: "c", text: "Biểu đồ hoạt động swimming lane" },
      { key: "d", text: "Biểu đồ thành phần" }
    ],
    correct: "c",
    explanations: {
      a: "Biểu đồ lớp (Class Diagram) là biểu đồ cấu trúc tĩnh, không mô tả hoạt động hay tiến trình xử lý.",
      b: "Biểu đồ liên kết thường dùng để chỉ ra sự kết nối cấu trúc tĩnh.",
      c: "Chính xác! Biểu đồ hoạt động bơi làn (Swimlane Activity Diagram) mô tả luồng công việc (workflow) với các hoạt động được phân nhóm theo các làn đại diện cho các đối tượng thực hiện khác nhau.",
      d: "Biểu đồ thành phần (Component Diagram) chỉ ra cấu trúc vật lý của mã nguồn, là biểu đồ tĩnh."
    }
  },
  {
    id: 16,
    question: "Quản lý bản quyền trong thiết kế phần mềm liên quan đến điều gì?",
    options: [
      { key: "a", text: "Sử dụng các thành phần mã nguồn mở mà không cần kiểm tra" },
      { key: "b", text: "Duy trì thông tin về các thành phần mã nguồn mở đã tải về và sử dụng" },
      { key: "c", text: "Thiết kế giao diện người dùng" },
      { key: "d", text: "Bảo trì phần mềm" }
    ],
    correct: "b",
    explanations: {
      a: "Tải và dùng mã nguồn mở không kiểm tra giấy phép (License) có thể dẫn tới bị kiện vi phạm bản quyền nghiêm trọng.",
      b: "Chính xác! Việc quản lý bản quyền đòi hỏi nhà phát triển phải theo dõi kỹ giấy phép của các phần mềm/thư viện bên thứ ba (MIT, GPL, Apache...) mà dự án đã tích hợp.",
      c: "Thiết kế UI hay Bảo trì phần mềm là công việc chuyên môn kỹ thuật, không trực tiếp là hoạt động quản lý pháp lý bản quyền.",
      d: "Thiết kế UI hay Bảo trì phần mềm là công việc chuyên môn kỹ thuật, không trực tiếp là hoạt động quản lý pháp lý bản quyền."
    }
  },
  {
    id: 17,
    question: "Một trong những nguyên tắc quan trọng trong thiết kế phần mềm là gì?",
    options: [
      { key: "a", text: "Giảm thiểu số lượng mã nguồn" },
      { key: "b", text: "Đảm bảo phần mềm dễ dàng bảo trì và mở rộng" },
      { key: "c", text: "Tăng số lượng thành phần phần mềm" },
      { key: "d", text: "Giảm thiểu tài liệu hướng dẫn" }
    ],
    correct: "b",
    explanations: {
      a: "Giảm số dòng code bừa bãi có thể làm mã nguồn trở nên khó đọc, khó hiểu hơn.",
      b: "Chính xác! Yêu cầu thay đổi là liên tục trong suốt vòng đời phần mềm. Vì vậy thiết kế tốt phải có tính modul cao để việc bảo trì, sửa lỗi và nâng cấp diễn ra dễ dàng, an toàn.",
      c: "Tăng số lượng thành phần quá mức làm tăng độ phức tạp và chi phí quản lý kết nối.",
      d: "Không có tài liệu hướng dẫn sẽ khiến dự án trở thành 'cơn ác mộng' cho những lập trình viên tiếp quản sau này."
    }
  },
  {
    id: 18,
    question: "Thiết kế cơ sở dữ liệu bao gồm việc gì?",
    options: [
      { key: "a", text: "Xác định cấu trúc dữ liệu và cách tổ chức dữ liệu trong cơ sở dữ liệu" },
      { key: "b", text: "Viết mã nguồn" },
      { key: "c", text: "Thiết kế giao diện người dùng" },
      { key: "d", text: "Kiểm thử cơ sở dữ liệu" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Thiết kế CSDL tập trung vào việc mô hình hóa các thực thể, thuộc tính và liên kết để tạo nên Schema CSDL tối ưu.",
      b: "Viết code, thiết kế giao diện hay kiểm thử là các hoạt động chuyên biệt khác trong vòng đời phát triển phần mềm.",
      c: "Viết code, thiết kế giao diện hay kiểm thử là các hoạt động chuyên biệt khác trong vòng đời phát triển phần mềm.",
      d: "Viết code, thiết kế giao diện hay kiểm thử là các hoạt động chuyên biệt khác trong vòng đời phát triển phần mềm."
    }
  },
  {
    id: 19,
    question: "Thiết kế thuật toán có vai trò gì trong phần mềm?",
    options: [
      { key: "a", text: "Định nghĩa các giao diện người dùng" },
      { key: "b", text: "Giải quyết các vấn đề cụ thể bằng cách xác định các bước xử lý" },
      { key: "c", text: "Tăng tốc độ phát triển phần mềm" },
      { key: "d", text: "Bảo trì phần mềm" }
    ],
    correct: "b",
    explanations: {
      a: "Định nghĩa giao diện là vai trò của thiết kế đồ họa / giao diện (UI).",
      b: "Chính xác! Thuật toán xác định các bước logic và tính toán để biến đổi dữ liệu đầu vào thành đầu ra mong muốn, giải quyết các bài toán nghiệp vụ cụ thể.",
      c: "Thiết kế thuật toán phức tạp đòi hỏi nhiều chất xám và thời gian, không trực tiếp rút ngắn thời gian làm dự án.",
      d: "Bảo trì là pha sửa chữa sau phát hành, không phải nhiệm vụ của thuật toán."
    }
  },
  {
    id: 20,
    question: "Mục đích của việc hiện thực phần mềm là gì?",
    options: [
      { key: "a", text: "Đáp ứng các yêu cầu thiết kế chi tiết" },
      { key: "b", text: "Thỏa mãn người dùng cuối" },
      { key: "c", text: "Tăng tính phức tạp của mã nguồn" },
      { key: "d", text: "Giảm chi phí phát triển" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Mục tiêu trực tiếp của pha lập trình/coding là hiện thực hóa các yêu cầu kỹ thuật và bản vẽ thiết kế chi tiết thành chương trình hoạt động đúng đặc tả.",
      b: "Thỏa mãn người dùng cuối là cái đích chung của toàn bộ quy trình phát triển chứ không phải riêng pha viết code.",
      c: "Tăng tính phức tạp của mã nguồn là điều tối kỵ cần tránh khi viết code.",
      d: "Pha hiện thực tiêu tốn nhiều thời gian và tiền bạc nhất, không nhằm mục đích giảm chi phí phát triển."
    }
  },
  {
    id: 21,
    question: "Unit Implementation được hiểu là gì?",
    options: [
      { key: "a", text: "Lập trình các đơn vị phần mềm nhỏ nhất" },
      { key: "b", text: "Thiết kế giao diện người dùng" },
      { key: "c", text: "Tạo lập các tài liệu hướng dẫn sử dụng" },
      { key: "d", text: "Kiểm tra và bảo trì phần mềm" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Unit Implementation là việc viết mã nguồn cho các phần tử nhỏ nhất có thể lập trình độc lập (như một hàm, một lớp hay một phương thức).",
      b: "Thiết kế giao diện là công việc thiết kế mỹ thuật và luồng đi (UI/UX).",
      c: "Viết tài liệu là nhiệm vụ viết kỹ thuật (Technical Writing).",
      d: "Kiểm tra và bảo trì phần mềm là các pha thuộc giai đoạn sau."
    }
  },
  {
    id: 22,
    question: "Một quy tắc vàng trong hiện thực phần mềm là gì?",
    options: [
      { key: "a", text: "Kiểm tra các yêu cầu và thiết kế lại một lần nữa" },
      { key: "b", text: "Không cần kiểm tra lại thiết kế sau khi mã hóa" },
      { key: "c", text: "Tập trung vào việc lập trình nhanh chóng" },
      { key: "d", text: "Đơn giản hóa tất cả các quy trình" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Trước khi viết mã, luôn luôn kiểm tra lại tài liệu yêu cầu và bản thiết kế. Điều này giúp ngăn ngừa việc lập trình sai hướng, vốn tốn rất nhiều chi phí để sửa đổi.",
      b: "Không kiểm tra lại thiết kế là thói quen xấu dẫn đến việc code sai nghiệp vụ mà không biết.",
      c: "Lập trình quá nhanh mà thiếu suy nghĩ thấu đáo thường tạo ra 'code rác' chứa nhiều lỗi bảo mật và hiệu năng.",
      d: "Không phải mọi quy trình đều có thể đơn giản hóa, đặc biệt là các quy trình kiểm thử và đảm bảo chất lượng."
    }
  },
  {
    id: 23,
    question: "Tại sao cần xác nhận các thiết kế chi tiết trước khi hiện thực?",
    options: [
      { key: "a", text: "Để đảm bảo các thiết kế đáp ứng yêu cầu của người dùng" },
      { key: "b", text: "Để giảm chi phí phát triển" },
      { key: "c", text: "Để tiết kiệm thời gian kiểm thử" },
      { key: "d", text: "Để tăng tốc độ mã hóa" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Việc xác nhận (validate) giúp đảm bảo bản thiết kế phản ánh đúng nhu cầu và mong muốn thực tế của khách hàng trước khi đội ngũ lập trình bỏ công sức viết mã.",
      b: "Các lợi ích về chi phí, kiểm thử hay tốc độ chỉ là những kết quả tích cực gián tiếp phát sinh từ việc có một bản thiết kế đúng đắn.",
      c: "Các lợi ích về chi phí, kiểm thử hay tốc độ chỉ là những kết quả tích cực gián tiếp phát sinh từ việc có một bản thiết kế đúng đắn.",
      d: "Các lợi ích về chi phí, kiểm thử hay tốc độ chỉ là những kết quả tích cực gián tiếp phát sinh từ việc có một bản thiết kế đúng đắn."
    }
  },
  {
    id: 24,
    question: "Mục đích của việc ghi lại lỗi khi sử dụng form là gì?",
    options: [
      { key: "a", text: "Để theo dõi và sửa chữa lỗi một cách hệ thống" },
      { key: "b", text: "Để lưu trữ dữ liệu người dùng" },
      { key: "c", text: "Để tăng tốc độ phát triển phần mềm" },
      { key: "d", text: "Để phân tích thị trường" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Phiếu ghi lỗi (Bug report/Form báo lỗi) giúp ghi nhận lại chi tiết lỗi phát sinh, thiết bị, hệ điều hành và các bước tái hiện lỗi để lập trình viên phân loại, sửa chữa có tổ chức.",
      b: "Lưu dữ liệu người dùng là nhiệm vụ của CSDL nghiệp vụ, không phải của hệ thống ghi lỗi.",
      c: "Ghi log lỗi không làm tăng tốc phát triển trực tiếp và cũng không nhằm mục đích phân tích thị trường kinh doanh.",
      d: "Ghi log lỗi không làm tăng tốc phát triển trực tiếp và cũng không nhằm mục đích phân tích thị trường kinh doanh."
    }
  },
  {
    id: 25,
    question: "Tiêu chuẩn yêu cầu đối với việc mã hóa bao gồm gì?",
    options: [
      { key: "a", text: "Tính đúng đắn và rõ ràng" },
      { key: "b", text: "Tính linh hoạt và tiết kiệm" },
      { key: "c", text: "Tính đơn giản và nhanh chóng" },
      { key: "d", text: "Tính bảo mật và khả năng mở rộng" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Code trước tiên phải chạy chính xác (correctness) theo yêu cầu, và thứ hai phải rõ ràng (clarity), tuân thủ coding convention để các thành viên khác dễ bảo trì.",
      b: "Tính linh hoạt, bảo mật hay mở rộng là các tiêu chí nâng cao cực kỳ quan trọng, nhưng không phải tiêu chuẩn cơ bản tối thiểu hàng đầu như việc chạy đúng và viết rõ ràng.",
      c: "Tính linh hoạt, bảo mật hay mở rộng là các tiêu chí nâng cao cực kỳ quan trọng, nhưng không phải tiêu chuẩn cơ bản tối thiểu hàng đầu như việc chạy đúng và viết rõ ràng.",
      d: "Tính linh hoạt, bảo mật hay mở rộng là các tiêu chí nâng cao cực kỳ quan trọng, nhưng không phải tiêu chuẩn cơ bản tối thiểu hàng đầu như việc chạy đúng và viết rõ ràng."
    }
  },
  {
    id: 26,
    question: "Ước lượng kích thước và thời gian dựa trên gì?",
    options: [
      { key: "a", text: "Dữ liệu đã có" },
      { key: "b", text: "Kinh nghiệm cá nhân" },
      { key: "c", text: "Yêu cầu khách hàng" },
      { key: "d", text: "Ngân sách dự án" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Ước lượng khoa học (ví dụ dùng phương pháp COCOMO, Function Point) luôn dựa trên cơ sở dữ liệu lịch sử của các dự án tương tự đã thực hiện.",
      b: "Kinh nghiệm cá nhân (Expert judgment) cũng là một nguồn quan trọng nhưng dễ mang tính chủ quan so với dữ liệu thực nghiệm đã có.",
      c: "Khách hàng thường chỉ đưa ra hạn định thời gian mong muốn, không phải cơ sở kỹ thuật để ước lượng.",
      d: "Ngân sách là giới hạn tài chính, không phải căn cứ kỹ thuật để tính toán thời gian viết code."
    }
  },
  {
    id: 27,
    question: "Hiện thực mã chương trình bao gồm bước nào sau đây?",
    options: [
      { key: "a", text: "Lập kế hoạch cấu trúc và thiết kế mã" },
      { key: "b", text: "Thiết kế giao diện người dùng" },
      { key: "c", text: "Viết tài liệu hướng dẫn" },
      { key: "d", text: "Tạo lập báo cáo phân tích" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Trước khi bắt đầu gõ code, lập trình viên cần lập kế hoạch phân tổ chức các file, các thư viện sử dụng và thiết kế cấu trúc lớp/hàm chi tiết.",
      b: "Thiết kế giao diện thuộc về pha thiết kế UI/UX.",
      c: "Viết tài liệu thuộc pha bàn giao / kỹ thuật viết tài liệu.",
      d: "Tạo lập báo cáo phân tích thuộc về pha phân tích yêu cầu (Analysis phase)."
    }
  },
  {
    id: 28,
    question: "Tại sao cần tự kiểm tra lại thiết kế/cấu trúc trước khi mã hóa?",
    options: [
      { key: "a", text: "Để đảm bảo tính đúng đắn và hiệu quả của mã nguồn" },
      { key: "b", text: "Để tăng tốc độ mã hóa" },
      { key: "c", text: "Để giảm chi phí phát triển" },
      { key: "d", text: "Để làm hài lòng khách hàng" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Tự kiểm tra lại thiết kế giúp nhà phát triển định hình thuật toán tối ưu nhất, phát hiện sớm các bất cập cấu trúc để tránh viết mã thừa thãi hoặc sai logic.",
      b: "Các lợi ích về thời gian gõ code, tiết kiệm chi phí hay sự hài lòng của khách hàng là những kết quả gián tiếp có được.",
      c: "Các lợi ích về thời gian gõ code, tiết kiệm chi phí hay sự hài lòng của khách hàng là những kết quả gián tiếp có được.",
      d: "Các lợi ích về thời gian gõ code, tiết kiệm chi phí hay sự hài lòng của khách hàng là những kết quả gián tiếp có được."
    }
  },
  {
    id: 29,
    question: "Quy tắc đặt tên trong hiện thực mã chương trình cần tuân thủ những gì?",
    options: [
      { key: "a", text: "Phù hợp và rõ ràng" },
      { key: "b", text: "Ngắn gọn và xúc tích" },
      { key: "c", text: "Phức tạp và chi tiết" },
      { key: "d", text: "Bất kỳ tên nào cũng được" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Tên biến, hàm, class cần phản ánh đúng mục đích sử dụng (phù hợp) và rõ ràng để bất kỳ ai đọc vào cũng hiểu ngay mà không cần xem code chi tiết.",
      b: "Ngắn gọn quá mức (như đặt tên biến là `x`, `y`, `temp`) thường gây mơ hồ, khó hiểu.",
      c: "Đặt tên quá phức tạp, dài dòng sẽ gây khó đọc, rối mắt.",
      d: "Đặt tên tùy tiện sẽ làm giảm nghiêm trọng khả năng bảo trì của mã nguồn."
    }
  },
  {
    id: 30,
    question: "Kiểm tra Class cần xem xét điều gì?",
    options: [
      { key: "a", text: "Tên Class có thích hợp không" },
      { key: "b", text: "Class có được trừu tượng không" },
      { key: "c", text: "Header của Class có mô tả mục đích của hàm hay không" },
      { key: "d", text: "Tất cả các ý trên" }
    ],
    correct: "d",
    explanations: {
      a: "Tên class phải phản ánh đúng trách nhiệm của nó theo quy tắc OOP.",
      b: "Class cần đạt độ trừu tượng hóa phù hợp, ẩn giấu chi tiết không cần thiết.",
      c: "Header class (comment đầu file) giúp tóm tắt mục đích sử dụng của lớp để lập trình viên khác nắm bắt nhanh.",
      d: "Chính xác! Cả 3 khía cạnh trên đều cần được rà soát kỹ lưỡng để đảm bảo lớp thiết kế đạt chất lượng cao."
    }
  },
  {
    id: 31,
    question: "Kiểm tra thuộc tính cần xác định điều gì?",
    options: [
      { key: "a", text: "Thuộc tính có cần thiết không" },
      { key: "b", text: "Thuộc tính có thể là static không" },
      { key: "c", text: "Thuộc tính có nên là final không" },
      { key: "d", text: "Tất cả các ý trên" }
    ],
    correct: "d",
    explanations: {
      a: "Rà soát xem thuộc tính đó có thừa hay không để tối ưu hóa bộ nhớ.",
      b: "Nếu thuộc tính dùng chung cho mọi đối tượng, nó nên là `static` để tiết kiệm tài nguyên.",
      c: "Nếu giá trị của thuộc tính không đổi sau khi khởi tạo, nó nên là `final` (hằng số) để tránh lỗi ghi đè dữ liệu vô ý.",
      d: "Chính xác! Cả 3 tiêu chí trên là các quy chuẩn để tối ưu hóa việc quản lý trạng thái của lớp."
    }
  },
  {
    id: 32,
    question: "Phương pháp kiểm tra phương thức khởi dựng cần xác định điều gì?",
    options: [
      { key: "a", text: "Phương thức có cần thiết không" },
      { key: "b", text: "Phương thức có leverage các constructor hiện có không" },
      { key: "c", text: "Phương thức có initialize tất cả các thuộc tính không" },
      { key: "d", text: "Tất cả các ý trên" }
    ],
    correct: "d",
    explanations: {
      a: "Kiểm tra xem constructor có thực sự cần khai báo tường minh hay không.",
      b: "Sử dụng từ khóa `this(...)` để nạp chồng (leverage) các constructor có sẵn nhằm tránh trùng lặp code.",
      c: "Đảm bảo mọi thuộc tính bắt buộc của đối tượng đều được gán giá trị hợp lệ khi khởi tạo.",
      d: "Chính xác! Rà soát đầy đủ cả 3 khía cạnh trên để đảm bảo hàm dựng của Class chạy an toàn, hiệu quả."
    }
  },
  {
    id: 33,
    question: "Làm thế nào để lập trình 1000 LoC/ngày?",
    options: [
      { key: "a", text: "Lập kế hoạch cấu trúc và thiết kế mã chương trình" },
      { key: "b", text: "Tăng tốc độ đánh máy" },
      { key: "c", text: "Tập trung vào các yêu cầu của khách hàng" },
      { key: "d", text: "Giảm thời gian kiểm tra mã" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Năng suất viết code phụ thuộc vào tư duy hơn là tốc độ tay. Khi lập trình viên đã lập kế hoạch cấu trúc và thiết kế logic rõ ràng, việc gõ mã sẽ diễn ra liên tục, không bị tắc nghẽn và ít lỗi.",
      b: "Gõ phím nhanh mà không có kế hoạch logic sẽ tạo ra code sai, tốn thời gian viết lại.",
      c: "Yêu cầu khách hàng là đích đến, nhưng để gõ được lượng code lớn chất lượng thì cần công cụ tổ chức cấu trúc lập trình cụ thể.",
      d: "Giảm kiểm tra mã sẽ làm tăng lỗi nghiêm trọng trong hệ thống, gây mất nhiều thời gian sửa chữa sau này."
    }
  },
  {
    id: 34,
    question: "Kiểm tra thuộc tính có cần xác định điều gì?",
    options: [
      { key: "a", text: "Sự cần thiết của thuộc tính" },
      { key: "b", text: "Thuộc tính có thể là static hay không" },
      { key: "c", text: "Thuộc tính có nên là final hay không" },
      { key: "d", text: "Tất cả các ý trên" }
    ],
    correct: "d",
    explanations: {
      a: "Đây là các câu hỏi rà soát chuẩn mực về thuộc tính để bảo đảm tính đóng gói (encapsulation) và tối ưu hóa bộ nhớ.",
      b: "Đây là các câu hỏi rà soát chuẩn mực về thuộc tính để bảo đảm tính đóng gói (encapsulation) và tối ưu hóa bộ nhớ.",
      c: "Đây là các câu hỏi rà soát chuẩn mực về thuộc tính để bảo đảm tính đóng gói (encapsulation) và tối ưu hóa bộ nhớ.",
      d: "Chính xác! (Câu hỏi này lặp lại câu 31 trong tài liệu gốc nhằm nhấn mạnh tầm quan trọng của việc kiểm tra thuộc tính)."
    }
  },
  {
    id: 35,
    question: "Tại sao cần ghi chú lại các mốc thời gian trong quá trình hiện thực mã chương trình?",
    options: [
      { key: "a", text: "Để theo dõi tiến độ và quản lý thời gian hiệu quả" },
      { key: "b", text: "Để lưu trữ dữ liệu người dùng" },
      { key: "c", text: "Để phân tích thị trường" },
      { key: "d", text: "Để giảm chi phí phát triển" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Ghi chép thời gian tiêu thụ cho từng tác vụ lập trình (Time-tracking) giúp lập trình viên tự đánh giá năng lực, quản lý thời gian tốt hơn và giúp dự án ước lượng tiến độ thực tế chính xác hơn.",
      b: "Việc theo dõi thời gian viết code của dev không liên quan đến cơ sở dữ liệu của người dùng cuối.",
      c: "Phân tích thị trường là công việc của bộ phận kinh doanh và marketing.",
      d: "Theo dõi thời gian không trực tiếp làm giảm chi phí sản xuất phần mềm."
    }
  },
  {
    id: 36,
    question: "Việc chuẩn bị để hiện thực bao gồm gì?",
    options: [
      { key: "a", text: "Xác nhận các thiết kế chi tiết phải hiện thực" },
      { key: "b", text: "Mã hóa từ một thiết kế được mô tả bằng văn bản" },
      { key: "c", text: "Đo thời gian phân loại theo các bước" },
      { key: "d", text: "Tất cả các ý trên" }
    ],
    correct: "d",
    explanations: {
      a: "Cần đảm bảo bản vẽ thiết kế đã chính xác và được phê duyệt.",
      b: "Đọc hiểu kỹ lưỡng các mô tả văn bản và lưu đồ thuật toán liên quan.",
      c: "Thiết lập kế hoạch/công cụ để đo lường thời gian thực hiện từng bước.",
      d: "Chính xác! Tất cả các công tác chuẩn bị trên giúp pha coding diễn ra khoa học, hạn chế sai lệch."
    }
  },
  {
    id: 37,
    question: "Mục đích của việc biên dịch mã lệnh là gì?",
    options: [
      { key: "a", text: "Kiểm tra và sửa chữa các lỗi cú pháp" },
      { key: "b", text: "Thiết kế giao diện người dùng" },
      { key: "c", text: "Viết tài liệu hướng dẫn" },
      { key: "d", text: "Tạo lập báo cáo phân tích" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Trình biên dịch (Compiler) quét qua toàn bộ mã nguồn để phát hiện các lỗi ngữ pháp của ngôn ngữ lập trình (cú pháp) và ngăn không cho chương trình chạy cho đến khi các lỗi này được khắc phục.",
      b: "Đây là các hoạt động phi lập trình khác trong dự án.",
      c: "Đây là các hoạt động phi lập trình khác trong dự án.",
      d: "Đây là các hoạt động phi lập trình khác trong dự án."
    }
  },
  {
    id: 38,
    question: "Mục tiêu của kiểm thử phần mềm là gì?",
    options: [
      { key: "a", text: "Để chỉ ra rằng chương trình thực hiện đúng như mong đợi và tìm ra lỗi" },
      { key: "b", text: "Để giảm chi phí phát triển" },
      { key: "c", text: "Để tăng tốc độ lập trình" },
      { key: "d", text: "Để làm hài lòng khách hàng" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Kiểm thử có hai mục tiêu chính: Xác minh xem phần mềm có hoạt động đúng theo yêu cầu thiết kế không (Validation) và chủ động tìm kiếm các lỗi ẩn giấu (Verification) để sửa chữa.",
      b: "Kiểm thử là một pha tốn kém chi phí, dù giúp tránh tổn thất nặng nề sau khi phát hành.",
      c: "Kiểm thử không làm tăng tốc độ viết code của lập trình viên.",
      d: "Sự hài lòng của khách hàng chỉ là kết quả gián tiếp khi họ nhận được một sản phẩm chạy ổn định."
    }
  },
  {
    id: 39,
    question: "Kiểm thử đơn vị (unit testing) tập trung vào điều gì?",
    options: [
      { key: "a", text: "Kiểm thử chức năng của các đối tượng hay các phương thức" },
      { key: "b", text: "Kiểm thử giao diện người dùng" },
      { key: "c", text: "Kiểm thử hiệu suất hệ thống" },
      { key: "d", text: "Kiểm thử tính bảo mật" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Kiểm thử đơn vị (Unit Testing) tập trung kiểm tra độc lập các khối mã nhỏ nhất có thể cô lập được (hàm, thủ tục, hoặc phương thức của class) để đảm bảo tính đúng đắn của logic bên trong.",
      b: "Kiểm thử UI, hiệu năng hay bảo mật thường được thực hiện ở cấp độ tích hợp hoặc hệ thống (System Testing).",
      c: "Kiểm thử UI, hiệu năng hay bảo mật thường được thực hiện ở cấp độ tích hợp hoặc hệ thống (System Testing).",
      d: "Kiểm thử UI, hiệu năng hay bảo mật thường được thực hiện ở cấp độ tích hợp hoặc hệ thống (System Testing)."
    }
  },
  {
    id: 40,
    question: "Kiểm thử component (component testing) tập trung vào điều gì?",
    options: [
      { key: "a", text: "Kiểm thử giao diện component" },
      { key: "b", text: "Kiểm thử chức năng của các phương thức" },
      { key: "c", text: "Kiểm thử tính bảo mật" },
      { key: "d", text: "Kiểm thử giao diện người dùng" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Component là một nhóm các đối tượng/lớp liên kết chặt chẽ. Kiểm thử component tập trung rà soát các giao tiếp (interfaces) và trao đổi thông tin giữa các thành phần cấu thành component đó.",
      b: "Kiểm thử các phương thức độc lập là nhiệm vụ của Unit testing.",
      c: "Bảo mật và UI người dùng thuộc phạm vi kiểm thử hệ thống rộng hơn.",
      d: "Bảo mật và UI người dùng thuộc phạm vi kiểm thử hệ thống rộng hơn."
    }
  },
  {
    id: 41,
    question: "Kiểm thử hệ thống (system testing) tập trung vào điều gì?",
    options: [
      { key: "a", text: "Kiểm thử tương tác giữa các component" },
      { key: "b", text: "Kiểm thử giao diện người dùng" },
      { key: "c", text: "Kiểm thử tính bảo mật" },
      { key: "d", text: "Kiểm thử hiệu suất hệ thống" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! (Theo ngữ cảnh tài liệu). Kiểm thử hệ thống ghép nối tất cả các component lại để xác nhận xem tương tác giữa chúng và toàn bộ luồng nghiệp vụ tích hợp có hoạt động đồng bộ hay không.",
      b: "Các yếu tố này cũng được kiểm tra trong pha System test nhưng không phản ánh khái niệm tích hợp cốt lõi của nó.",
      c: "Các yếu tố này cũng được kiểm tra trong pha System test nhưng không phản ánh khái niệm tích hợp cốt lõi của nó.",
      d: "Các yếu tố này cũng được kiểm tra trong pha System test nhưng không phản ánh khái niệm tích hợp cốt lõi của nó."
    }
  },
  {
    id: 42,
    question: "Kiểm thử tự động nên sử dụng gì để hỗ trợ kiểm thử đơn vị?",
    options: [
      { key: "a", text: "Framework kiểm thử tự động (như JUnit)" },
      { key: "b", text: "Các công cụ kiểm thử thủ công" },
      { key: "c", text: "Phần mềm thiết kế giao diện" },
      { key: "d", text: "Các chương trình bảo mật" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Các framework như JUnit (cho Java), PyTest (cho Python), NUnit (cho C#) giúp lập trình viên viết mã test, tự động hóa quá trình chạy thử và lập báo cáo kết quả tức thì.",
      b: "Kiểm thử thủ công không thể tự động hóa quy trình test code.",
      c: "Phần mềm UI hay chương trình bảo mật không hỗ trợ chạy các kịch bản kiểm thử đơn vị tự động.",
      d: "Phần mềm UI hay chương trình bảo mật không hỗ trợ chạy các kịch bản kiểm thử đơn vị tự động."
    }
  },
  {
    id: 43,
    question: "Mục tiêu của kiểm thử giao diện là gì?",
    options: [
      { key: "a", text: "Tìm ra lỗi gây ra bởi các lỗi giao diện hoặc giả định sai về các giao diện" },
      { key: "b", text: "Kiểm thử chức năng của các phương thức" },
      { key: "c", text: "Kiểm thử hiệu suất hệ thống" },
      { key: "d", text: "Kiểm thử tính bảo mật" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Kiểm thử giao diện tích hợp (Interface Testing) nhằm phát hiện lỗi do sự không tương thích về định dạng dữ liệu, tham số truyền vào hoặc các giả định sai giữa hai hệ thống/mô-đun giao tiếp với nhau.",
      b: "Là mục tiêu của Unit testing.",
      c: "Là mục tiêu của các loại kiểm thử phi chức năng ở cấp hệ thống.",
      d: "Là mục tiêu của các loại kiểm thử phi chức năng ở cấp hệ thống."
    }
  },
  {
    id: 44,
    question: "Một loại giao diện trong kiểm thử giao diện là gì?",
    options: [
      { key: "a", text: "Giao diện có tham số" },
      { key: "b", text: "Giao diện người dùng" },
      { key: "c", text: "Giao diện hệ thống" },
      { key: "d", text: "Giao diện bảo mật" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Giao diện có tham số (Parameter interface) là nơi dữ liệu được truyền qua lại dưới dạng các đối số giữa các hàm. Đây là đối tượng kiểm tra chính trong kiểm thử giao diện lập trình.",
      b: "Đây là các thuật ngữ mô tả khái niệm giao tiếp tổng quát, không phải phân loại giao diện kỹ thuật chuyên biệt trong lập trình tích hợp mô-đun.",
      c: "Đây là các thuật ngữ mô tả khái niệm giao tiếp tổng quát, không phải phân loại giao diện kỹ thuật chuyên biệt trong lập trình tích hợp mô-đun.",
      d: "Đây là các thuật ngữ mô tả khái niệm giao tiếp tổng quát, không phải phân loại giao diện kỹ thuật chuyên biệt trong lập trình tích hợp mô-đun."
    }
  },
  {
    id: 45,
    question: "Kiểm thử phát triển là trách nhiệm của ai?",
    options: [
      { key: "a", text: "Đội ngũ phát triển phần mềm" },
      { key: "b", text: "Người dùng cuối" },
      { key: "c", text: "Nhóm marketing" },
      { key: "d", text: "Nhóm hỗ trợ khách hàng" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Kiểm thử phát triển (Development testing) bao gồm Unit test, Component test do chính các kỹ sư lập trình và QA nội bộ thực hiện trong quá trình viết code.",
      b: "Người dùng cuối thực hiện kiểm thử chấp nhận (Acceptance testing).",
      c: "Nhóm marketing và CS không có chức năng kỹ thuật kiểm thử mã nguồn.",
      d: "Nhóm marketing và CS không có chức năng kỹ thuật kiểm thử mã nguồn."
    }
  },
  {
    id: 46,
    question: "Kiểm thử phát hành là gì?",
    options: [
      { key: "a", text: "Kiểm thử hệ thống trước khi phát hành cho khách hàng" },
      { key: "b", text: "Kiểm thử hệ thống sau khi phát hành cho khách hàng" },
      { key: "c", text: "Kiểm thử hệ thống trong giai đoạn phát triển" },
      { key: "d", text: "Kiểm thử hệ thống trong giai đoạn bảo trì" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Kiểm thử phát hành (Release testing) là bước đánh giá hộp đen toàn diện cuối cùng do một đội ngũ kiểm thử độc lập thực hiện nhằm đảm bảo chất lượng hệ thống đạt chuẩn trước khi giao tới tay khách hàng.",
      b: "Sau phát hành chỉ có hoạt động giám sát vận hành thực tế.",
      c: "Trong giai đoạn phát triển là Development testing.",
      d: "Trong giai đoạn bảo trì là kiểm thử hồi quy (Regression testing) để tránh làm hỏng các tính năng cũ."
    }
  },
  {
    id: 47,
    question: "Phương pháp kiểm thử hộp đen tập trung vào điều gì?",
    options: [
      { key: "a", text: "Kiểm thử chức năng của hệ thống mà không cần biết cấu trúc bên trong" },
      { key: "b", text: "Kiểm thử hiệu suất hệ thống" },
      { key: "c", text: "Kiểm thử tính bảo mật" },
      { key: "d", text: "Kiểm thử giao diện người dùng" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Kiểm thử hộp đen (Black-box testing) bỏ qua cấu trúc mã nguồn bên trong, chỉ nhập dữ liệu đầu vào và kiểm tra xem đầu ra có khớp với yêu cầu nghiệp vụ hay không.",
      b: "Các loại kiểm thử này có thể dùng cả phương pháp hộp đen hoặc hộp trắng tùy theo mục tiêu kỹ thuật cụ thể.",
      c: "Các loại kiểm thử này có thể dùng cả phương pháp hộp đen hoặc hộp trắng tùy theo mục tiêu kỹ thuật cụ thể.",
      d: "Các loại kiểm thử này có thể dùng cả phương pháp hộp đen hoặc hộp trắng tùy theo mục tiêu kỹ thuật cụ thể."
    }
  },
  {
    id: 48,
    question: "Phương pháp kiểm thử hộp trắng tập trung vào điều gì?",
    options: [
      { key: "a", text: "Kiểm thử cấu trúc bên trong của hệ thống" },
      { key: "b", text: "Kiểm thử hiệu suất hệ thống" },
      { key: "c", text: "Kiểm thử tính bảo mật" },
      { key: "d", text: "Kiểm thử giao diện người dùng" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Kiểm thử hộp trắng (White-box testing) đòi hỏi lập trình viên phải hiểu rõ cấu trúc mã nguồn để thiết kế các kịch bản bao phủ hết các dòng lệnh, các nhánh rẽ và các vòng lặp.",
      b: "Không phản ánh định nghĩa kỹ thuật cơ bản của kiểm thử hộp trắng.",
      c: "Không phản ánh định nghĩa kỹ thuật cơ bản của kiểm thử hộp trắng.",
      d: "Không phản ánh định nghĩa kỹ thuật cơ bản của kiểm thử hộp trắng."
    }
  },
  {
    id: 49,
    question: "Phương pháp kiểm thử hộp xám là gì?",
    options: [
      { key: "a", text: "Kết hợp giữa kiểm thử hộp đen và kiểm thử hộp trắng" },
      { key: "b", text: "Kiểm thử hiệu suất hệ thống" },
      { key: "c", text: "Kiểm thử tính bảo mật" },
      { key: "d", text: "Kiểm thử giao diện người dùng" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Kiểm thử hộp xám (Gray-box testing) là sự kết hợp lai: kiểm thử viên kiểm tra chức năng từ bên ngoài như hộp đen, nhưng có trang bị một phần hiểu biết về cấu trúc bên trong (như sơ đồ CSDL, thuật toán) để thiết kế kịch bản hiệu quả hơn.",
      b: "Không phải định nghĩa của kiểm thử hộp xám.",
      c: "Không phải định nghĩa của kiểm thử hộp xám.",
      d: "Không phải định nghĩa của kiểm thử hộp xám."
    }
  },
  {
    id: 50,
    question: "Mục tiêu của kiểm thử validation là gì?",
    options: [
      { key: "a", text: "Để chỉ ra rằng phần mềm thỏa mãn các yêu cầu đưa ra" },
      { key: "b", text: "Để tìm ra các lỗi của phần mềm" },
      { key: "c", text: "Để giảm chi phí phát triển" },
      { key: "d", text: "Để tăng tốc độ lập trình" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Kiểm thử xác nhận (Validation testing) nhằm trả lời câu hỏi: 'Chúng ta có xây dựng đúng sản phẩm khách hàng cần không?' (Are we building the right product?).",
      b: "Tìm kiếm các lỗi phần mềm là mục tiêu chính của kiểm thử tìm lỗi (Defect testing).",
      c: "Kiểm thử là quá trình tốn tài nguyên và thời gian, không trực tiếp giảm chi phí hay tăng tốc độ lập trình.",
      d: "Kiểm thử là quá trình tốn tài nguyên và thời gian, không trực tiếp giảm chi phí hay tăng tốc độ lập trình."
    }
  },
  {
    id: 51,
    question: "Mục tiêu của kiểm thử defect là gì?",
    options: [
      { key: "a", text: "Để tìm ra các tình huống mà phần mềm không hoạt động đúng như mong đợi" },
      { key: "b", text: "Để chỉ ra rằng phần mềm thỏa mãn các yêu cầu đưa ra" },
      { key: "c", text: "Để giảm chi phí phát triển" },
      { key: "d", text: "Để làm hài lòng khách hàng" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Defect testing được thiết kế nhằm mục đích chủ động 'phá hoại' hệ thống, tìm ra các lỗ hổng, sai sót và các ca kiểm thử biên mà phần mềm xử lý sai để lập trình viên sửa đổi.",
      b: "Là mục tiêu của Validation testing.",
      c: "Không phải mục tiêu kỹ thuật trực tiếp của Defect testing.",
      d: "Không phải mục tiêu kỹ thuật trực tiếp của Defect testing."
    }
  },
  {
    id: 52,
    question: "Tại sao cần kiểm tra kết quả của việc kiểm thử?",
    options: [
      { key: "a", text: "Để tìm ra lỗi và các bất thường" },
      { key: "b", text: "Để lưu trữ dữ liệu người dùng" },
      { key: "c", text: "Để phân tích thị trường" },
      { key: "d", text: "Để tăng tốc độ phát triển phần mềm" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Việc rà soát kết quả test (so sánh Actual Result và Expected Result) giúp chỉ ra các điểm sai lệch của hệ thống để kịp thời ghi nhận lỗi (Bug logging).",
      b: "Không liên quan đến hoạt động đối chiếu kết quả kiểm thử.",
      c: "Không liên quan đến hoạt động đối chiếu kết quả kiểm thử.",
      d: "Không liên quan đến hoạt động đối chiếu kết quả kiểm thử."
    }
  },
  {
    id: 53,
    question: "Kiểm thử người dùng tập trung vào điều gì?",
    options: [
      { key: "a", text: "Kiểm thử phần mềm bởi người dùng cuối" },
      { key: "b", text: "Kiểm thử tính bảo mật" },
      { key: "c", text: "Kiểm thử hiệu suất hệ thống" },
      { key: "d", text: "Kiểm thử giao diện người dùng" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Kiểm thử người dùng (User testing / Alpha-Beta testing) là quá trình đưa phần mềm cho chính đối tượng khách hàng sử dụng thực tế để đánh giá sự phù hợp với quy trình làm việc của họ.",
      b: "Các kỹ thuật kiểm thử chuyên sâu này do đội kỹ thuật/QA đảm nhiệm, không phải do người dùng cuối thực hiện.",
      c: "Các kỹ thuật kiểm thử chuyên sâu này do đội kỹ thuật/QA đảm nhiệm, không phải do người dùng cuối thực hiện.",
      d: "Các kỹ thuật kiểm thử chuyên sâu này do đội kỹ thuật/QA đảm nhiệm, không phải do người dùng cuối thực hiện."
    }
  },
  {
    id: 54,
    question: "Cải tiến quy trình phần mềm bao gồm gì?",
    options: [
      { key: "a", text: "Cải tiến các phương pháp phát triển và kiểm thử phần mềm" },
      { key: "b", text: "Tăng tốc độ lập trình" },
      { key: "c", text: "Giảm chi phí phát triển" },
      { key: "d", text: "Tập trung vào giao diện người dùng" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Cải tiến quy trình phần mềm (Software Process Improvement - SPI) là chu kỳ phân tích, đánh giá và tối ưu hóa các phương pháp phát triển, công cụ hỗ trợ và các kịch bản kiểm thử nhằm nâng cao chất lượng sản phẩm.",
      b: "Chỉ là các khía cạnh nhỏ, không bao quát toàn bộ mục tiêu của SPI.",
      c: "Chỉ là các khía cạnh nhỏ, không bao quát toàn bộ mục tiêu của SPI.",
      d: "Chỉ là các khía cạnh nhỏ, không bao quát toàn bộ mục tiêu của SPI."
    }
  },
  {
    id: 55,
    question: "Bảo trì phần mềm bao gồm gì?",
    options: [
      { key: "a", text: "Sửa lỗi và nâng cấp phần mềm sau khi phát hành" },
      { key: "b", text: "Thiết kế giao diện người dùng" },
      { key: "c", text: "Viết tài liệu hướng dẫn" },
      { key: "d", text: "Tạo lập báo cáo phân tích" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Bảo trì phần mềm là các hoạt động diễn ra sau khi bàn giao sản phẩm, bao gồm sửa lỗi phát sinh, thích ứng môi trường mới, nâng cấp tối ưu hiệu năng và bổ sung tính năng mới.",
      b: "Đây là các hoạt động diễn ra trước khi phần mềm được phát hành.",
      c: "Đây là các hoạt động diễn ra trước khi phần mềm được phát hành.",
      d: "Đây là các hoạt động diễn ra trước khi phần mềm được phát hành."
    }
  },
  {
    id: 56,
    question: "Mục đích của việc kiểm thử bản release là gì?",
    options: [
      { key: "a", text: "Để đảm bảo phần mềm hoạt động đúng như mong đợi trước khi phát hành" },
      { key: "b", text: "Để giảm chi phí phát triển" },
      { key: "c", text: "Để tăng tốc độ lập trình" },
      { key: "d", text: "Để làm hài lòng khách hàng" }
    ],
    correct: "a",
    explanations: {
      a: "Chính xác! Kiểm thử release nhằm đánh giá độ tin cậy và chất lượng tổng thể của hệ thống để chắc chắn sản phẩm không còn lỗi nghiêm trọng trước khi phát hành rộng rãi.",
      b: "Không phải mục tiêu kỹ thuật trực tiếp của kiểm thử bản release.",
      c: "Không phải mục tiêu kỹ thuật trực tiếp của kiểm thử bản release.",
      d: "Không phải mục tiêu kỹ thuật trực tiếp của kiểm thử bản release."
    }
  }
];
