// Ngân hàng câu hỏi ôn tập trắc nghiệm môn Nhập môn Web và Ứng dụng
// Tổng cộng: 145 câu hỏi được parse tự động từ tài liệu ôn tập.

const QUESTIONS_DATA = [
  {
    "id": 12,
    "question": "Đặt dòng liên kết với file CSS ở vùng nào trong trang HTML?",
    "options": [
      {
        "key": "a",
        "text": "Trong thẻ <head>"
      },
      {
        "key": "b",
        "text": "Trong thẻ <body>"
      },
      {
        "key": "c",
        "text": "Ở cuối trang HTML"
      },
      {
        "key": "d",
        "text": "Ở đầu trang HTML"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: HTML & CSS Basics] Để nhúng file CSS ngoại vi (External Style Sheet), chúng ta khai báo thẻ `<link>` nằm bên trong khối `<head>...</head>`. Theo tiêu chuẩn thiết kế web, trình duyệt sẽ đọc phần đầu (`<head>`) trước để tải các định dạng giao diện trước khi hiển thị phần thân (`<body>`).",
      "b": "Phương án này chưa chính xác. Để nhúng file CSS ngoại vi (External Style Sheet), chúng ta khai báo thẻ `<link>` nằm bên trong khối `<head>...</head>`. Theo tiêu chuẩn thiết kế web, trình duyệt sẽ đọc phần đầu (`<head>`) trước để tải các định dạng giao diện trước khi hiển thị phần thân (`<body>`).",
      "c": "Phương án này chưa chính xác. Để nhúng file CSS ngoại vi (External Style Sheet), chúng ta khai báo thẻ `<link>` nằm bên trong khối `<head>...</head>`. Theo tiêu chuẩn thiết kế web, trình duyệt sẽ đọc phần đầu (`<head>`) trước để tải các định dạng giao diện trước khi hiển thị phần thân (`<body>`).",
      "d": "Phương án này chưa chính xác. Để nhúng file CSS ngoại vi (External Style Sheet), chúng ta khai báo thẻ `<link>` nằm bên trong khối `<head>...</head>`. Theo tiêu chuẩn thiết kế web, trình duyệt sẽ đọc phần đầu (`<head>`) trước để tải các định dạng giao diện trước khi hiển thị phần thân (`<body>`)."
    }
  },
  {
    "id": 46,
    "question": "Thuộc tính CSS nào định dạng đối tượng nằm một hàng riêng biệt?",
    "options": [
      {
        "key": "a",
        "text": "display: none"
      },
      {
        "key": "b",
        "text": "display: block"
      },
      {
        "key": "c",
        "text": "display: inline"
      },
      {
        "key": "d",
        "text": "display: inline-block"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Ẩn hoàn toàn phần tử và giải phóng vùng không gian mà nó chiếm đóng.",
      "b": "[Chủ đề: CSS Display] `display: block` biến phần tử thành một khối hộp độc lập. Nó sẽ bắt đầu ở một dòng mới và chiếm toàn bộ chiều rộng có sẵn của phần tử cha (100% width).",
      "c": "Vừa hiển thị trên cùng hàng với các phần tử khác vừa cho phép định dạng kích thước (width/height).",
      "d": "Phương án này chưa chính xác. `display: block` biến phần tử thành một khối hộp độc lập. Nó sẽ bắt đầu ở một dòng mới và chiếm toàn bộ chiều rộng có sẵn của phần tử cha (100% width)."
    }
  },
  {
    "id": 31,
    "question": "Để thay đổi màu chữ trong thẻ div có id=id1, câu lệnh javascript nào đúng?",
    "options": [
      {
        "key": "a",
        "text": "document.getElementById('id1').style.color='red';"
      },
      {
        "key": "b",
        "text": "document.getElementById('id1').style.color('red');"
      },
      {
        "key": "c",
        "text": "document.getElementById('id1').color='red';"
      },
      {
        "key": "d",
        "text": "document.getElementById('id1').color('red');"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "Sai vì đối tượng DOM không có thuộc tính trực tiếp là `color`, phải truy cập thông qua đối tượng con `style`.",
      "b": "Sai cú pháp vì `color` là thuộc tính (property), không phải là phương thức (method/function) để gọi bằng cặp ngoặc tròn.",
      "c": "Phương án này chưa chính xác. `document.getElementById('id1').style.color='red';` sử dụng thuộc tính `style` của đối tượng DOM để can thiệp vào thuộc tính màu sắc (`color`) của CSS và gán giá trị bằng chuỗi `'red'`.",
      "d": "Phương án này chưa chính xác. `document.getElementById('id1').style.color='red';` sử dụng thuộc tính `style` của đối tượng DOM để can thiệp vào thuộc tính màu sắc (`color`) của CSS và gán giá trị bằng chuỗi `'red'`."
    }
  },
  {
    "id": 11,
    "question": "Thẻ HTML nào được sử dụng để trỏ tới external style sheet?",
    "options": [
      {
        "key": "a",
        "text": "<link url= “stylesheet” type= “text/css” href=”style.css”>"
      },
      {
        "key": "b",
        "text": "<style src=”style.css”>"
      },
      {
        "key": "c",
        "text": "<link rel= “stylesheet” type= “text/css” href=”style.css”>"
      },
      {
        "key": "d",
        "text": "<stylesheet>style.css</stylesheet>"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Cú pháp chuẩn để trỏ đến file CSS bên ngoài là `<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">`. Trong đó:\n  - `rel=\"stylesheet\"`: Khai báo mối quan hệ là bảng liên kết phong cách.\n  - `type=\"text/css\"`: Kiểu nội dung tệp.\n  - `href=\"style.css\"`: Đường dẫn tới file CSS.",
      "b": "Phương án này chưa chính xác. Cú pháp chuẩn để trỏ đến file CSS bên ngoài là `<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">`. Trong đó:\n  - `rel=\"stylesheet\"`: Khai báo mối quan hệ là bảng liên kết phong cách.\n  - `type=\"text/css\"`: Kiểu nội dung tệp.\n  - `href=\"style.css\"`: Đường dẫn tới file CSS.",
      "c": "[Chủ đề: HTML Linking External CSS] Cú pháp chuẩn để trỏ đến file CSS bên ngoài là `<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">`. Trong đó:\n  - `rel=\"stylesheet\"`: Khai báo mối quan hệ là bảng liên kết phong cách.\n  - `type=\"text/css\"`: Kiểu nội dung tệp.\n  - `href=\"style.css\"`: Đường dẫn tới file CSS.",
      "d": "Phương án này chưa chính xác. Cú pháp chuẩn để trỏ đến file CSS bên ngoài là `<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">`. Trong đó:\n  - `rel=\"stylesheet\"`: Khai báo mối quan hệ là bảng liên kết phong cách.\n  - `type=\"text/css\"`: Kiểu nội dung tệp.\n  - `href=\"style.css\"`: Đường dẫn tới file CSS."
    }
  },
  {
    "id": 41,
    "question": "Thuộc tính z-index dùng để?",
    "options": [
      {
        "key": "a",
        "text": "Định vị tương đối cho một thành phần"
      },
      {
        "key": "b",
        "text": "Quy định kiểu viền của một đối tượng web"
      },
      {
        "key": "c",
        "text": "Tạo hiệu ứng màu sắc cho liên kết"
      },
      {
        "key": "d",
        "text": "Đặt các thành phần web ở các lớp khác nhau"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Thuộc tính `position: relative` đảm nhiệm.",
      "b": "Thuộc tính `border-style` đảm nhiệm.",
      "c": "Thuộc tính `color` phối hợp với pseudo-class `:hover` đảm nhiệm.",
      "d": "[Chủ đề: CSS Position & Layering] Thuộc tính `z-index` chỉ định thứ tự xếp chồng lớp (stack order) của các phần tử HTML trên trục Z (trục vuông góc với màn hình). Phần tử có `z-index` lớn hơn sẽ hiển thị đè lên phần tử có `z-index` nhỏ hơn. Lưu ý: `z-index` chỉ hoạt động khi đi kèm thuộc tính `position` khác `static`."
    }
  },
  {
    "id": 264,
    "question": "Bạn cảm thấy việc ôn trắc nghiệm thế này có hữu ích không?",
    "options": [
      {
        "key": "a",
        "text": "Hữu ích"
      },
      {
        "key": "b",
        "text": "Không hữu ích"
      },
      {
        "key": "c",
        "text": "Bình thường"
      },
      {
        "key": "d",
        "text": "Không nên ôn"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "explanations": {
      "a": "[Chủ đề: Feedback Question] Đây là câu hỏi khảo sát ý kiến phản hồi từ người học trắc nghiệm. Tất cả các phương án đều được tính là đáp án đúng tùy chọn theo cảm xúc cá nhân.",
      "b": "[Chủ đề: Feedback Question] Đây là câu hỏi khảo sát ý kiến phản hồi từ người học trắc nghiệm. Tất cả các phương án đều được tính là đáp án đúng tùy chọn theo cảm xúc cá nhân.",
      "c": "[Chủ đề: Feedback Question] Đây là câu hỏi khảo sát ý kiến phản hồi từ người học trắc nghiệm. Tất cả các phương án đều được tính là đáp án đúng tùy chọn theo cảm xúc cá nhân.",
      "d": "[Chủ đề: Feedback Question] Đây là câu hỏi khảo sát ý kiến phản hồi từ người học trắc nghiệm. Tất cả các phương án đều được tính là đáp án đúng tùy chọn theo cảm xúc cá nhân."
    }
  },
  {
    "id": 120,
    "question": "Nếu có đoạn mã HTML và CSS như sau: <div> <a href=\"#\">A</a> <b><a href=\"#\">B</a></b> <a href=\"#\">C</a> </div> div > a{color:green} Hỏi nội dung nào có màu xanh ?",
    "options": [
      {
        "key": "a",
        "text": "A"
      },
      {
        "key": "b",
        "text": "B"
      },
      {
        "key": "c",
        "text": "A và C"
      },
      {
        "key": "d",
        "text": "Tất cả đều đúng"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Selector `div > a` là Child Selector (chọn con trực tiếp).\n- Phần tử `A` nằm trực tiếp bên trong `<div>` (đúng).\n- Phần tử `B` nằm trong thẻ `<b>` (cháu của div, con của b), nên không được chọn.\n- Phần tử `C` nằm trong thẻ `<b>` trước, thẻ `<a>` là con trực tiếp của thẻ `<b>` (cháu của div), nên không được chọn.\n- Do đó, chỉ có `A` và `C`? Khoan! Hãy nhìn kỹ cấu trúc đề bài:\n  `<div> <a href=\"#\">A</a> <b><a href=\"#\">B</a></b> <a href=\"#\">C</a> </div>`\n  - `A` là con trực tiếp của `div` (Đúng).\n  - `B` là con của `b`, là cháu của `div` (Sai).\n  - `C` nằm trực tiếp trong `div`: `<b>...</b>` và `<a href=\"#\">C</a>`. Như vậy `C` nằm trực tiếp bên trong `div`. Nên `C` cũng được chọn!\n  Do đó đáp án chính xác là **A và C**.",
      "b": "Phương án này chưa chính xác. Selector `div > a` là Child Selector (chọn con trực tiếp).\n- Phần tử `A` nằm trực tiếp bên trong `<div>` (đúng).\n- Phần tử `B` nằm trong thẻ `<b>` (cháu của div, con của b), nên không được chọn.\n- Phần tử `C` nằm trong thẻ `<b>` trước, thẻ `<a>` là con trực tiếp của thẻ `<b>` (cháu của div), nên không được chọn.\n- Do đó, chỉ có `A` và `C`? Khoan! Hãy nhìn kỹ cấu trúc đề bài:\n  `<div> <a href=\"#\">A</a> <b><a href=\"#\">B</a></b> <a href=\"#\">C</a> </div>`\n  - `A` là con trực tiếp của `div` (Đúng).\n  - `B` là con của `b`, là cháu của `div` (Sai).\n  - `C` nằm trực tiếp trong `div`: `<b>...</b>` và `<a href=\"#\">C</a>`. Như vậy `C` nằm trực tiếp bên trong `div`. Nên `C` cũng được chọn!\n  Do đó đáp án chính xác là **A và C**.",
      "c": "[Chủ đề: CSS Selector Combinators] Selector `div > a` là Child Selector (chọn con trực tiếp).\n- Phần tử `A` nằm trực tiếp bên trong `<div>` (đúng).\n- Phần tử `B` nằm trong thẻ `<b>` (cháu của div, con của b), nên không được chọn.\n- Phần tử `C` nằm trong thẻ `<b>` trước, thẻ `<a>` là con trực tiếp của thẻ `<b>` (cháu của div), nên không được chọn.\n- Do đó, chỉ có `A` và `C`? Khoan! Hãy nhìn kỹ cấu trúc đề bài:\n  `<div> <a href=\"#\">A</a> <b><a href=\"#\">B</a></b> <a href=\"#\">C</a> </div>`\n  - `A` là con trực tiếp của `div` (Đúng).\n  - `B` là con của `b`, là cháu của `div` (Sai).\n  - `C` nằm trực tiếp trong `div`: `<b>...</b>` và `<a href=\"#\">C</a>`. Như vậy `C` nằm trực tiếp bên trong `div`. Nên `C` cũng được chọn!\n  Do đó đáp án chính xác là **A và C**.",
      "d": "Phương án này chưa chính xác. Selector `div > a` là Child Selector (chọn con trực tiếp).\n- Phần tử `A` nằm trực tiếp bên trong `<div>` (đúng).\n- Phần tử `B` nằm trong thẻ `<b>` (cháu của div, con của b), nên không được chọn.\n- Phần tử `C` nằm trong thẻ `<b>` trước, thẻ `<a>` là con trực tiếp của thẻ `<b>` (cháu của div), nên không được chọn.\n- Do đó, chỉ có `A` và `C`? Khoan! Hãy nhìn kỹ cấu trúc đề bài:\n  `<div> <a href=\"#\">A</a> <b><a href=\"#\">B</a></b> <a href=\"#\">C</a> </div>`\n  - `A` là con trực tiếp của `div` (Đúng).\n  - `B` là con của `b`, là cháu của `div` (Sai).\n  - `C` nằm trực tiếp trong `div`: `<b>...</b>` và `<a href=\"#\">C</a>`. Như vậy `C` nằm trực tiếp bên trong `div`. Nên `C` cũng được chọn!\n  Do đó đáp án chính xác là **A và C**."
    }
  },
  {
    "id": 16,
    "question": "Thuộc tính CSS nào dùng để ngăn không cho 1 đối tượng bị ảnh hưởng bởi các đối tượng được float trước đó?",
    "options": [
      {
        "key": "a",
        "text": "clear"
      },
      {
        "key": "b",
        "text": "anchor"
      },
      {
        "key": "c",
        "text": "fixed"
      },
      {
        "key": "d",
        "text": "static"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: CSS Float & Clear] Thuộc tính `clear` dùng để thiết lập xem một phần tử có được nằm cạnh các phần tử trôi nổi (`float`) trước đó hay không. Giá trị `clear: both` sẽ đẩy phần tử xuống dòng dưới hoàn toàn, tránh khỏi ảnh hưởng của `float: left` và `float: right`.",
      "b": "Phương án này chưa chính xác. Thuộc tính `clear` dùng để thiết lập xem một phần tử có được nằm cạnh các phần tử trôi nổi (`float`) trước đó hay không. Giá trị `clear: both` sẽ đẩy phần tử xuống dòng dưới hoàn toàn, tránh khỏi ảnh hưởng của `float: left` và `float: right`.",
      "c": "Phương án này chưa chính xác. Thuộc tính `clear` dùng để thiết lập xem một phần tử có được nằm cạnh các phần tử trôi nổi (`float`) trước đó hay không. Giá trị `clear: both` sẽ đẩy phần tử xuống dòng dưới hoàn toàn, tránh khỏi ảnh hưởng của `float: left` và `float: right`.",
      "d": "- `fixed` / `static`: Là các giá trị của thuộc tính định vị `position`, không liên quan đến việc hóa giải hiệu ứng trôi nổi float."
    }
  },
  {
    "id": 33,
    "question": "Cách ẩn phần tử được chọn trong jQuery, sử dụng phương thức nào?",
    "options": [
      {
        "key": "a",
        "text": "hide();"
      },
      {
        "key": "b",
        "text": "visible(false);"
      },
      {
        "key": "c",
        "text": "hidden();"
      },
      {
        "key": "d",
        "text": "display(none);"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: jQuery Effects] Trong jQuery, phương thức `.hide()` được sử dụng để ẩn phần tử được chọn nhanh chóng bằng cách set thuộc tính inline CSS `display: none` cho phần tử đó.",
      "b": "Phương án này chưa chính xác. Trong jQuery, phương thức `.hide()` được sử dụng để ẩn phần tử được chọn nhanh chóng bằng cách set thuộc tính inline CSS `display: none` cho phần tử đó.",
      "c": "Phương án này chưa chính xác. Trong jQuery, phương thức `.hide()` được sử dụng để ẩn phần tử được chọn nhanh chóng bằng cách set thuộc tính inline CSS `display: none` cho phần tử đó.",
      "d": "Phương án này chưa chính xác. Trong jQuery, phương thức `.hide()` được sử dụng để ẩn phần tử được chọn nhanh chóng bằng cách set thuộc tính inline CSS `display: none` cho phần tử đó."
    }
  },
  {
    "id": 18,
    "question": "Để bỏ biểu tượng đánh dấu các phần tử trong một danh sách không thứ tự (<ul>) dùng thuộc tính CSS nào sau đây?",
    "options": [
      {
        "key": "a",
        "text": "list-style-type"
      },
      {
        "key": "b",
        "text": "list-style"
      },
      {
        "key": "c",
        "text": "style-image"
      },
      {
        "key": "d",
        "text": "list-symbol"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: CSS Lists] Thuộc tính `list-style-type` được dùng để thay đổi hoặc loại bỏ ký hiệu đầu dòng của danh sách. Giá trị `list-style-type: none;` sẽ xóa hoàn toàn các dấu chấm tròn mặc định của danh sách không thứ tự (`<ul>`).",
      "b": "Phương án này chưa chính xác. Thuộc tính `list-style-type` được dùng để thay đổi hoặc loại bỏ ký hiệu đầu dòng của danh sách. Giá trị `list-style-type: none;` sẽ xóa hoàn toàn các dấu chấm tròn mặc định của danh sách không thứ tự (`<ul>`).",
      "c": "Phương án này chưa chính xác. Thuộc tính `list-style-type` được dùng để thay đổi hoặc loại bỏ ký hiệu đầu dòng của danh sách. Giá trị `list-style-type: none;` sẽ xóa hoàn toàn các dấu chấm tròn mặc định của danh sách không thứ tự (`<ul>`).",
      "d": "- `style-image` / `list-symbol`: Không phải các thuộc tính hợp lệ trong CSS."
    }
  },
  {
    "id": 20,
    "question": "Thuộc tính và giá trị CSS nào dùng để chuyển tất cả các ký tự đầu thành chứ viết hoa?",
    "options": [
      {
        "key": "a",
        "text": "text-transform:uppercase"
      },
      {
        "key": "b",
        "text": "text-transform:capitaliza"
      },
      {
        "key": "c",
        "text": "text-transform:proper"
      },
      {
        "key": "d",
        "text": "Không thể làm được với CSS"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Giá trị `capitalize` của thuộc tính `text-transform` được dùng để viết hoa chữ cái đầu tiên của mỗi từ (Ví dụ: \"thông tin\" -> \"Thông Tin\"). Đề bài bị viết nhầm chính tả thành `capitaliza` nhưng đây vẫn là đáp án chuẩn.",
      "b": "[Chủ đề: CSS Text Transform] Giá trị `capitalize` của thuộc tính `text-transform` được dùng để viết hoa chữ cái đầu tiên của mỗi từ (Ví dụ: \"thông tin\" -> \"Thông Tin\"). Đề bài bị viết nhầm chính tả thành `capitaliza` nhưng đây vẫn là đáp án chuẩn.",
      "c": "Phương án này chưa chính xác. Giá trị `capitalize` của thuộc tính `text-transform` được dùng để viết hoa chữ cái đầu tiên của mỗi từ (Ví dụ: \"thông tin\" -> \"Thông Tin\"). Đề bài bị viết nhầm chính tả thành `capitaliza` nhưng đây vẫn là đáp án chuẩn.",
      "d": "Phương án này chưa chính xác. Giá trị `capitalize` của thuộc tính `text-transform` được dùng để viết hoa chữ cái đầu tiên của mỗi từ (Ví dụ: \"thông tin\" -> \"Thông Tin\"). Đề bài bị viết nhầm chính tả thành `capitaliza` nhưng đây vẫn là đáp án chuẩn."
    }
  },
  {
    "id": 53,
    "question": "Phương thức nào của jQuery tương đương câu lệnh javascript: document.getElementById(\"ID\").",
    "options": [
      {
        "key": "a",
        "text": "$(\"#ID\");"
      },
      {
        "key": "b",
        "text": "$(\"ID\") ;"
      },
      {
        "key": "c",
        "text": "$(\"id=ID\");"
      },
      {
        "key": "d",
        "text": "$(\".ID\");"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: jQuery Selector] Trong jQuery, để lựa chọn một phần tử bằng ID, ta sử dụng cú pháp tương tự CSS selector: `$(\"#ID\")`. Điều này tương đương với `document.getElementById(\"ID\")` trong JS thuần.",
      "b": "Chọn các thẻ có tên là `<ID>` (thẻ HTML tùy biến).",
      "c": "Sai cú pháp chọn ID của jQuery.",
      "d": "Lựa chọn các phần tử có class là `ID`, tương đương với `document.getElementsByClassName(\"ID\")`."
    }
  },
  {
    "id": 48,
    "question": "Chọn thứ tự định dạng các góc?",
    "options": [
      {
        "key": "a",
        "text": "top-left, bottom-right, top-right, bottom-left"
      },
      {
        "key": "b",
        "text": "top-left, top-right, bottom-right, bottom-left"
      },
      {
        "key": "c",
        "text": "top-right, bottom-right, bottom-left, top-left"
      },
      {
        "key": "d",
        "text": "top-left, top-right, bottom-left, bottom-right"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Khi định nghĩa các góc riêng lẻ cho thuộc tính bo góc hoặc đường viền theo chiều kim đồng hồ, thứ tự chuẩn bắt đầu từ góc trên bên trái: **Góc trên-trái (top-left) -> Góc trên-phải (top-right) -> Góc dưới-phải (bottom-right) -> Góc dưới-trái (bottom-left)**.",
      "b": "[Chủ đề: CSS Border Radius Corners] Khi định nghĩa các góc riêng lẻ cho thuộc tính bo góc hoặc đường viền theo chiều kim đồng hồ, thứ tự chuẩn bắt đầu từ góc trên bên trái: **Góc trên-trái (top-left) -> Góc trên-phải (top-right) -> Góc dưới-phải (bottom-right) -> Góc dưới-trái (bottom-left)**.",
      "c": "Phương án này chưa chính xác. Khi định nghĩa các góc riêng lẻ cho thuộc tính bo góc hoặc đường viền theo chiều kim đồng hồ, thứ tự chuẩn bắt đầu từ góc trên bên trái: **Góc trên-trái (top-left) -> Góc trên-phải (top-right) -> Góc dưới-phải (bottom-right) -> Góc dưới-trái (bottom-left)**.",
      "d": "Phương án này chưa chính xác. Khi định nghĩa các góc riêng lẻ cho thuộc tính bo góc hoặc đường viền theo chiều kim đồng hồ, thứ tự chuẩn bắt đầu từ góc trên bên trái: **Góc trên-trái (top-left) -> Góc trên-phải (top-right) -> Góc dưới-phải (bottom-right) -> Góc dưới-trái (bottom-left)**."
    }
  },
  {
    "id": 104,
    "question": "Chọn thứ tự giá trị thuộc tính đúng mã CSS sau?",
    "options": [
      {
        "key": "a",
        "text": "border: #333 1px solid ;"
      },
      {
        "key": "b",
        "text": "border: 1px solid #333;"
      },
      {
        "key": "c",
        "text": "border: solid 1px #333;"
      },
      {
        "key": "d",
        "text": "border: 1px #333 solid;"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thứ tự chuẩn viết tắt thuộc tính `border` là: **Kích thước đường viền (border-width) -> Kiểu đường viền (border-style) -> Màu đường viền (border-color)**. Ví dụ: `border: 1px solid #333;`.",
      "b": "[Chủ đề: CSS Border Shorthand] Thứ tự chuẩn viết tắt thuộc tính `border` là: **Kích thước đường viền (border-width) -> Kiểu đường viền (border-style) -> Màu đường viền (border-color)**. Ví dụ: `border: 1px solid #333;`.",
      "c": "Phương án này chưa chính xác. Thứ tự chuẩn viết tắt thuộc tính `border` là: **Kích thước đường viền (border-width) -> Kiểu đường viền (border-style) -> Màu đường viền (border-color)**. Ví dụ: `border: 1px solid #333;`.",
      "d": "Phương án này chưa chính xác. Thứ tự chuẩn viết tắt thuộc tính `border` là: **Kích thước đường viền (border-width) -> Kiểu đường viền (border-style) -> Màu đường viền (border-color)**. Ví dụ: `border: 1px solid #333;`."
    }
  },
  {
    "id": 14,
    "question": "Thẻ HTML nào được sử dụng để khởi tạo internal style sheet?",
    "options": [
      {
        "key": "a",
        "text": "<style>"
      },
      {
        "key": "b",
        "text": "<css>"
      },
      {
        "key": "c",
        "text": "<script>"
      },
      {
        "key": "d",
        "text": "<stylesheet>"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: HTML Style Tag] Thẻ `<style>` được dùng để chèn mã CSS trực tiếp bên trong trang HTML (Internal Style Sheet), thường được đặt trong khối `<head>`.",
      "b": "Phương án này chưa chính xác. Thẻ `<style>` được dùng để chèn mã CSS trực tiếp bên trong trang HTML (Internal Style Sheet), thường được đặt trong khối `<head>`.",
      "c": "Dùng để nhúng mã JavaScript, không dùng cho CSS.",
      "d": "- `<css>` / `<stylesheet>`: Không tồn tại các thẻ HTML này."
    }
  },
  {
    "id": 98,
    "question": "Thuộc tính nào thay đổi kích cỡ chữ?",
    "options": [
      {
        "key": "a",
        "text": "font-size"
      },
      {
        "key": "b",
        "text": "font-style"
      },
      {
        "key": "c",
        "text": "text-style"
      },
      {
        "key": "d",
        "text": "text-size"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: CSS Typography] Thuộc tính `font-size` dùng để thiết lập kích thước của phông chữ (đơn vị có thể là px, em, rem, %).",
      "b": "Phương án này chưa chính xác. Thuộc tính `font-size` dùng để thiết lập kích thước của phông chữ (đơn vị có thể là px, em, rem, %).",
      "c": "Phương án này chưa chính xác. Thuộc tính `font-size` dùng để thiết lập kích thước của phông chữ (đơn vị có thể là px, em, rem, %).",
      "d": "- `text-style` / `text-size`: Không tồn tại các thuộc tính CSS này."
    }
  },
  {
    "id": 52,
    "question": "Phương thức nào của jQuery tương đương với thuộc tính innerHTML của javascript?",
    "options": [
      {
        "key": "a",
        "text": "val();"
      },
      {
        "key": "b",
        "text": "content();"
      },
      {
        "key": "c",
        "text": "html();"
      },
      {
        "key": "d",
        "text": "innerHTML();"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Dùng để lấy hoặc set giá trị của các phần tử form (input, select, textarea).\n- `content()` / `innerHTML()`: Không tồn tại các phương thức này trong thư viện jQuery.",
      "b": "Phương án này chưa chính xác. Phương thức `.html()` của jQuery dùng để lấy hoặc thay thế toàn bộ mã HTML bên trong phần tử được chọn, tương đương với thuộc tính `innerHTML` của JS thuần.",
      "c": "[Chủ đề: jQuery DOM Manipulation] Phương thức `.html()` của jQuery dùng để lấy hoặc thay thế toàn bộ mã HTML bên trong phần tử được chọn, tương đương với thuộc tính `innerHTML` của JS thuần.",
      "d": "Phương án này chưa chính xác. Phương thức `.html()` của jQuery dùng để lấy hoặc thay thế toàn bộ mã HTML bên trong phần tử được chọn, tương đương với thuộc tính `innerHTML` của JS thuần."
    }
  },
  {
    "id": 106,
    "question": "Nếu viết padding: 20px 40px 30px thì padding-top và padding-bottom là bao nhiêu?",
    "options": [
      {
        "key": "a",
        "text": "40px – 30px"
      },
      {
        "key": "b",
        "text": "20px – 30px"
      },
      {
        "key": "c",
        "text": "20px – 40px"
      },
      {
        "key": "d",
        "text": "30px – 40px"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Khi thuộc tính padding có 3 giá trị: `padding: top right bottom`. Ở đây, `padding: 20px 40px 30px` nghĩa là:\n  - Top (trên) = 20px.\n  - Right & Left (phải & trái) = 40px.\n  - Bottom (dưới) = 30px.\n  Do đó, padding-top là 20px và padding-bottom là 30px.",
      "b": "[Chủ đề: CSS Box Model Padding] Khi thuộc tính padding có 3 giá trị: `padding: top right bottom`. Ở đây, `padding: 20px 40px 30px` nghĩa là:\n  - Top (trên) = 20px.\n  - Right & Left (phải & trái) = 40px.\n  - Bottom (dưới) = 30px.\n  Do đó, padding-top là 20px và padding-bottom là 30px.",
      "c": "Phương án này chưa chính xác. Khi thuộc tính padding có 3 giá trị: `padding: top right bottom`. Ở đây, `padding: 20px 40px 30px` nghĩa là:\n  - Top (trên) = 20px.\n  - Right & Left (phải & trái) = 40px.\n  - Bottom (dưới) = 30px.\n  Do đó, padding-top là 20px và padding-bottom là 30px.",
      "d": "Phương án này chưa chính xác. Khi thuộc tính padding có 3 giá trị: `padding: top right bottom`. Ở đây, `padding: 20px 40px 30px` nghĩa là:\n  - Top (trên) = 20px.\n  - Right & Left (phải & trái) = 40px.\n  - Bottom (dưới) = 30px.\n  Do đó, padding-top là 20px và padding-bottom là 30px."
    }
  },
  {
    "id": 38,
    "question": "Thuộc tính nào trong CSS dùng để định dạng chữ nghiêng?",
    "options": [
      {
        "key": "a",
        "text": "text-decoration"
      },
      {
        "key": "b",
        "text": "text-transform"
      },
      {
        "key": "c",
        "text": "italic"
      },
      {
        "key": "d",
        "text": "font-style"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Dùng để gạch chân (`underline`), gạch ngang (`line-through`).",
      "b": "Dùng để chuyển đổi chữ hoa/chữ thường.",
      "c": "Phương án này chưa chính xác. Thuộc tính `font-style` dùng để cấu hình kiểu hiển thị của phông chữ, giá trị `italic` được dùng để tạo chữ in nghiêng.",
      "d": "[Chủ đề: CSS Font Style] Thuộc tính `font-style` dùng để cấu hình kiểu hiển thị của phông chữ, giá trị `italic` được dùng để tạo chữ in nghiêng."
    }
  },
  {
    "id": 29,
    "question": "Để xóa nội dung của thẻ div có id=id1, đoạn lệnh nào sau đúng?",
    "options": [
      {
        "key": "a",
        "text": "document.getElementById('id1').innerHTML='';"
      },
      {
        "key": "b",
        "text": "document.getElementById('id1').HTML='';"
      },
      {
        "key": "c",
        "text": "document.getElementById('id1').value='';"
      },
      {
        "key": "d",
        "text": "document.getElementById('id1').delete()';"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: JavaScript DOM Text] Can thiệp thuộc tính `innerHTML` và gán bằng chuỗi rỗng `''` sẽ xóa toàn bộ nội dung HTML và chữ bên trong phần tử có id tương ứng.",
      "b": "Sai vì viết hoa chữ cái (JS phân biệt chữ hoa chữ thường, phải viết là `innerHTML`).",
      "c": "Dùng để gán giá trị cho thẻ input của form, không dùng để xóa nội dung hiển thị của thẻ `<div>`.",
      "d": "Không phải phương thức hợp lệ của phần tử DOM."
    }
  },
  {
    "id": 37,
    "question": "Thuộc tính nào của thẻ input dùng để xác định giá trị khởi tạo cho textfield?",
    "options": [
      {
        "key": "a",
        "text": "init"
      },
      {
        "key": "b",
        "text": "initvalue"
      },
      {
        "key": "c",
        "text": "value"
      },
      {
        "key": "d",
        "text": "default"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thuộc tính `value` của thẻ `<input>` xác định giá trị mặc định ban đầu được điền sẵn trong hộp nhập liệu văn bản (textfield).",
      "b": "Phương án này chưa chính xác. Thuộc tính `value` của thẻ `<input>` xác định giá trị mặc định ban đầu được điền sẵn trong hộp nhập liệu văn bản (textfield).",
      "c": "[Chủ đề: HTML Input Attribute] Thuộc tính `value` của thẻ `<input>` xác định giá trị mặc định ban đầu được điền sẵn trong hộp nhập liệu văn bản (textfield).",
      "d": "- **Sai ở các đáp án khác:** `init`, `initvalue`, `default` không phải là thuộc tính hợp lệ của thẻ `<input>`."
    }
  },
  {
    "id": 103,
    "question": "Thuộc tính CSS nào định dạng bo góc một đối tượng với màu nền chỉ định?",
    "options": [
      {
        "key": "a",
        "text": "border-conner"
      },
      {
        "key": "b",
        "text": "border-radius"
      },
      {
        "key": "c",
        "text": "border-radian"
      },
      {
        "key": "d",
        "text": "border -rounded"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thuộc tính `border-radius` dùng để bo tròn các góc của một đối tượng hình hộp (box model) trong CSS.",
      "b": "[Chủ đề: CSS Border Radius] Thuộc tính `border-radius` dùng để bo tròn các góc của một đối tượng hình hộp (box model) trong CSS.",
      "c": "- **Sai ở các đáp án khác:** `border-conner`, `border-radian`, `border-rounded` không phải là các thuộc tính CSS hợp lệ.",
      "d": "Phương án này chưa chính xác. Thuộc tính `border-radius` dùng để bo tròn các góc của một đối tượng hình hộp (box model) trong CSS."
    }
  },
  {
    "id": 23,
    "question": "Thuộc tính nào của CSS không cho hình nền lập lại ?",
    "options": [
      {
        "key": "a",
        "text": "background-repeat: no-repeat"
      },
      {
        "key": "b",
        "text": "image-repeat"
      },
      {
        "key": "c",
        "text": "background-norepeat"
      },
      {
        "key": "d",
        "text": "bgimage-repeat"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: CSS Background Repeat] Thuộc tính `background-repeat: no-repeat;` cấu hình để ảnh nền của trang web chỉ hiển thị duy nhất một lần và không bị lặp lại theo cả chiều dọc lẫn chiều ngang.",
      "b": "Phương án này chưa chính xác. Thuộc tính `background-repeat: no-repeat;` cấu hình để ảnh nền của trang web chỉ hiển thị duy nhất một lần và không bị lặp lại theo cả chiều dọc lẫn chiều ngang.",
      "c": "Phương án này chưa chính xác. Thuộc tính `background-repeat: no-repeat;` cấu hình để ảnh nền của trang web chỉ hiển thị duy nhất một lần và không bị lặp lại theo cả chiều dọc lẫn chiều ngang.",
      "d": "- **Sai ở các đáp án khác:** `image-repeat`, `background-norepeat`, `bgimage-repeat` đều là các thuộc tính sai chính tả và không tồn tại."
    }
  },
  {
    "id": 15,
    "question": "Trong CSS, thuộc tính nào dùng để định dạng màu chữ?",
    "options": [
      {
        "key": "a",
        "text": "color"
      },
      {
        "key": "b",
        "text": "Font-color"
      },
      {
        "key": "c",
        "text": "text-color"
      },
      {
        "key": "d",
        "text": "font color"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: CSS Color] Thuộc tính `color` được dùng để thiết lập màu sắc cho văn bản hiển thị.",
      "b": "Phương án này chưa chính xác. Thuộc tính `color` được dùng để thiết lập màu sắc cho văn bản hiển thị.",
      "c": "Phương án này chưa chính xác. Thuộc tính `color` được dùng để thiết lập màu sắc cho văn bản hiển thị.",
      "d": "- **Sai ở các đáp án khác:** `font-color`, `text-color`, `font color` đều không tồn tại trong CSS."
    }
  },
  {
    "id": 44,
    "question": "Cú pháp CSS nào được sử dụng để chuyển tất cả các thẻ <p> thành bold?",
    "options": [
      {
        "key": "a",
        "text": "p {text-size:bold}"
      },
      {
        "key": "b",
        "text": "style:bold"
      },
      {
        "key": "c",
        "text": "p {font-weight:bold}"
      },
      {
        "key": "d",
        "text": "p {font:bold}"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thuộc tính `font-weight: bold;` dùng để thay đổi độ đậm nhạt của chữ sang dạng in đậm.",
      "b": "Phương án này chưa chính xác. Thuộc tính `font-weight: bold;` dùng để thay đổi độ đậm nhạt của chữ sang dạng in đậm.",
      "c": "[Chủ đề: CSS Font Weight] Thuộc tính `font-weight: bold;` dùng để thay đổi độ đậm nhạt của chữ sang dạng in đậm.",
      "d": "Phương án này chưa chính xác. Thuộc tính `font-weight: bold;` dùng để thay đổi độ đậm nhạt của chữ sang dạng in đậm."
    }
  },
  {
    "id": 42,
    "question": "Thuộc tính CSS nào định dạng liên kết không có gạch chân?",
    "options": [
      {
        "key": "a",
        "text": "text-align : none"
      },
      {
        "key": "b",
        "text": "text-decoration : none"
      },
      {
        "key": "c",
        "text": "text-decoration : underline"
      },
      {
        "key": "d",
        "text": "text-underline : none"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Dùng để căn chỉnh lề (trái, phải, giữa).",
      "b": "[Chủ đề: CSS Text Decoration] Mặc định các thẻ liên kết `<a>` có gạch chân. Để xóa gạch chân này, ta sử dụng thuộc tính `text-decoration: none;`.",
      "c": "Phương án này chưa chính xác. Mặc định các thẻ liên kết `<a>` có gạch chân. Để xóa gạch chân này, ta sử dụng thuộc tính `text-decoration: none;`.",
      "d": "Không tồn tại thuộc tính này."
    }
  },
  {
    "id": 366,
    "question": "Nếu viết padding: 20px 50px thì padding-right là bao nhiêu?",
    "options": [
      {
        "key": "a",
        "text": "10px"
      },
      {
        "key": "b",
        "text": "50px"
      },
      {
        "key": "c",
        "text": "20px"
      },
      {
        "key": "d",
        "text": "50px - 50px"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Khi padding có 2 giá trị: `padding: vertical horizontal`. Ở đây, `20px 50px` có nghĩa là:\n  - Top & Bottom (trên & dưới) = 20px.\n  - Right & Left (phải & trái) = 50px.\n  Do đó, padding-right là 50px.",
      "b": "[Chủ đề: CSS Box Model Shorthand] Khi padding có 2 giá trị: `padding: vertical horizontal`. Ở đây, `20px 50px` có nghĩa là:\n  - Top & Bottom (trên & dưới) = 20px.\n  - Right & Left (phải & trái) = 50px.\n  Do đó, padding-right là 50px.",
      "c": "Phương án này chưa chính xác. Khi padding có 2 giá trị: `padding: vertical horizontal`. Ở đây, `20px 50px` có nghĩa là:\n  - Top & Bottom (trên & dưới) = 20px.\n  - Right & Left (phải & trái) = 50px.\n  Do đó, padding-right là 50px.",
      "d": "Phương án này chưa chính xác. Khi padding có 2 giá trị: `padding: vertical horizontal`. Ở đây, `20px 50px` có nghĩa là:\n  - Top & Bottom (trên & dưới) = 20px.\n  - Right & Left (phải & trái) = 50px.\n  Do đó, padding-right là 50px."
    }
  },
  {
    "id": 50,
    "question": "Nếu có đoạn mã HTML và CSS như sau: <div> <a href=\"#\">A</a> <a href=\"#\"><b>B</b></a> <b><a href=\"#\">C</a></b> </div> Mã HTML div b a{color:blue} Mã CSS Hỏi nội dung nào có màu xanh ?",
    "options": [
      {
        "key": "a",
        "text": "A"
      },
      {
        "key": "b",
        "text": "B"
      },
      {
        "key": "c",
        "text": "C"
      },
      {
        "key": "d",
        "text": "Tất cả đều đúng"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Selector `div b a` chọn thẻ `<a>` là hậu duệ (nằm trong) của thẻ `<b>` và thẻ `<b>` này phải nằm trong thẻ `<div>`.\n- Cấu trúc:\n  - Thẻ `A`: `<div> <a href=\"#\">A</a> ...` -> Không nằm trong thẻ `<b>` (Loại).\n  - Thẻ `B`: `<div> ... <a href=\"#\"><b>B</b></a> ...` -> Thẻ `<b>` nằm trong thẻ `<a>` (đây là selector `div a b`, ngược lại đề bài, Loại).\n  - Thẻ `C`: `<div> ... <b><a href=\"#\">C</a></b> </div>` -> Thẻ `<a>` nằm trong thẻ `<b>` và `<b>` nằm trong `<div>` (Khớp hoàn toàn).\n  Do đó, chỉ có nội dung **C** có màu xanh.",
      "b": "Phương án này chưa chính xác. Selector `div b a` chọn thẻ `<a>` là hậu duệ (nằm trong) của thẻ `<b>` và thẻ `<b>` này phải nằm trong thẻ `<div>`.\n- Cấu trúc:\n  - Thẻ `A`: `<div> <a href=\"#\">A</a> ...` -> Không nằm trong thẻ `<b>` (Loại).\n  - Thẻ `B`: `<div> ... <a href=\"#\"><b>B</b></a> ...` -> Thẻ `<b>` nằm trong thẻ `<a>` (đây là selector `div a b`, ngược lại đề bài, Loại).\n  - Thẻ `C`: `<div> ... <b><a href=\"#\">C</a></b> </div>` -> Thẻ `<a>` nằm trong thẻ `<b>` và `<b>` nằm trong `<div>` (Khớp hoàn toàn).\n  Do đó, chỉ có nội dung **C** có màu xanh.",
      "c": "[Chủ đề: CSS Descendant Selectors] Selector `div b a` chọn thẻ `<a>` là hậu duệ (nằm trong) của thẻ `<b>` và thẻ `<b>` này phải nằm trong thẻ `<div>`.\n- Cấu trúc:\n  - Thẻ `A`: `<div> <a href=\"#\">A</a> ...` -> Không nằm trong thẻ `<b>` (Loại).\n  - Thẻ `B`: `<div> ... <a href=\"#\"><b>B</b></a> ...` -> Thẻ `<b>` nằm trong thẻ `<a>` (đây là selector `div a b`, ngược lại đề bài, Loại).\n  - Thẻ `C`: `<div> ... <b><a href=\"#\">C</a></b> </div>` -> Thẻ `<a>` nằm trong thẻ `<b>` và `<b>` nằm trong `<div>` (Khớp hoàn toàn).\n  Do đó, chỉ có nội dung **C** có màu xanh.",
      "d": "Phương án này chưa chính xác. Selector `div b a` chọn thẻ `<a>` là hậu duệ (nằm trong) của thẻ `<b>` và thẻ `<b>` này phải nằm trong thẻ `<div>`.\n- Cấu trúc:\n  - Thẻ `A`: `<div> <a href=\"#\">A</a> ...` -> Không nằm trong thẻ `<b>` (Loại).\n  - Thẻ `B`: `<div> ... <a href=\"#\"><b>B</b></a> ...` -> Thẻ `<b>` nằm trong thẻ `<a>` (đây là selector `div a b`, ngược lại đề bài, Loại).\n  - Thẻ `C`: `<div> ... <b><a href=\"#\">C</a></b> </div>` -> Thẻ `<a>` nằm trong thẻ `<b>` và `<b>` nằm trong `<div>` (Khớp hoàn toàn).\n  Do đó, chỉ có nội dung **C** có màu xanh."
    }
  },
  {
    "id": 39,
    "question": "Thuộc tính nào trong CSS để làm mờ đối tượng",
    "options": [
      {
        "key": "a",
        "text": "transparent"
      },
      {
        "key": "b",
        "text": "blur"
      },
      {
        "key": "c",
        "text": "opacity"
      },
      {
        "key": "d",
        "text": "Tất cả đều sai"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Là giá trị màu sắc, không phải thuộc tính.",
      "b": "Thường dùng làm bộ lọc hiệu ứng (`filter: blur()` trong CSS nâng cao, không phải thuộc tính làm mờ độ đục.",
      "c": "[Chủ đề: CSS Opacity] Thuộc tính `opacity` dùng để điều chỉnh độ trong suốt (làm mờ) của một phần tử web. Giá trị chạy từ `0` (hoàn toàn vô hình) đến `1` (hiển thị rõ hoàn toàn).",
      "d": "Phương án này chưa chính xác. Thuộc tính `opacity` dùng để điều chỉnh độ trong suốt (làm mờ) của một phần tử web. Giá trị chạy từ `0` (hoàn toàn vô hình) đến `1` (hiển thị rõ hoàn toàn)."
    }
  },
  {
    "id": 100,
    "question": "Thuộc tính CSS nào định dạng liên kết không có gạch chân?",
    "options": [
      {
        "key": "a",
        "text": "text-align : none"
      },
      {
        "key": "b",
        "text": "text-decoration : none"
      },
      {
        "key": "c",
        "text": "text-decoration : underline"
      },
      {
        "key": "d",
        "text": "text-underline : none"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. (Giống câu 42) Thuộc tính `text-decoration: none;` dùng để tắt đường gạch chân mặc định của liên kết `<a>`.",
      "b": "[Chủ đề: CSS Text Decoration] (Giống câu 42) Thuộc tính `text-decoration: none;` dùng để tắt đường gạch chân mặc định của liên kết `<a>`.",
      "c": "Phương án này chưa chính xác. (Giống câu 42) Thuộc tính `text-decoration: none;` dùng để tắt đường gạch chân mặc định của liên kết `<a>`.",
      "d": "Phương án này chưa chính xác. (Giống câu 42) Thuộc tính `text-decoration: none;` dùng để tắt đường gạch chân mặc định của liên kết `<a>`."
    }
  },
  {
    "id": 22,
    "question": "Thuộc tính nào để tạo danh sách hiển thị tất cả các thành phần trong ô vuông?",
    "options": [
      {
        "key": "a",
        "text": "type:square"
      },
      {
        "key": "b",
        "text": "list-style-type: square"
      },
      {
        "key": "c",
        "text": "list-type: square"
      },
      {
        "key": "d",
        "text": "style-type: square"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thuộc tính `list-style-type: square;` định dạng các ký hiệu đầu dòng của danh sách không thứ tự (`<ul>`) thành các hình ô vuông đặc.",
      "b": "[Chủ đề: CSS Lists] Thuộc tính `list-style-type: square;` định dạng các ký hiệu đầu dòng của danh sách không thứ tự (`<ul>`) thành các hình ô vuông đặc.",
      "c": "Phương án này chưa chính xác. Thuộc tính `list-style-type: square;` định dạng các ký hiệu đầu dòng của danh sách không thứ tự (`<ul>`) thành các hình ô vuông đặc.",
      "d": "Phương án này chưa chính xác. Thuộc tính `list-style-type: square;` định dạng các ký hiệu đầu dòng của danh sách không thứ tự (`<ul>`) thành các hình ô vuông đặc."
    }
  },
  {
    "id": 365,
    "question": "Để chèn 1 file CSS vào trang HTML thì cú pháp nào đúng?",
    "options": [
      {
        "key": "a",
        "text": "<style rel=\"stylesheet\" src=\"...\"></style>"
      },
      {
        "key": "b",
        "text": "<a rel=\"stylesheet\" href=\"...\"></a>"
      },
      {
        "key": "c",
        "text": "<file rel=\"stylesheet\" href=\"...\"></file>"
      },
      {
        "key": "d",
        "text": "<div style=\"width:100px\"></div>"
      },
      {
        "key": "e",
        "text": "Chả cái nào đúng hết đâu!"
      }
    ],
    "correct": "e",
    "explanations": {
      "a": "Phương án này chưa chính xác. Cú pháp chuẩn để chèn file CSS ngoại vi vào HTML là `<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">`.\n- Tất cả các phương án:\n  - `<style rel=... src=...>` (Sai thuộc tính `src`).\n  - `<a rel=... href=...>` (Thẻ `<a>` là thẻ liên kết văn bản, không dùng nhúng CSS).\n  - `<file rel=... href=...>` (Không tồn tại thẻ `<file>`).\n  - `<div style=...>` (Định dạng Inline CSS, không phải chèn file CSS).\n  Do đó, đáp án đúng là **Chả cái nào đúng hết đâu!**.",
      "b": "Phương án này chưa chính xác. Cú pháp chuẩn để chèn file CSS ngoại vi vào HTML là `<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">`.\n- Tất cả các phương án:\n  - `<style rel=... src=...>` (Sai thuộc tính `src`).\n  - `<a rel=... href=...>` (Thẻ `<a>` là thẻ liên kết văn bản, không dùng nhúng CSS).\n  - `<file rel=... href=...>` (Không tồn tại thẻ `<file>`).\n  - `<div style=...>` (Định dạng Inline CSS, không phải chèn file CSS).\n  Do đó, đáp án đúng là **Chả cái nào đúng hết đâu!**.",
      "c": "Phương án này chưa chính xác. Cú pháp chuẩn để chèn file CSS ngoại vi vào HTML là `<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">`.\n- Tất cả các phương án:\n  - `<style rel=... src=...>` (Sai thuộc tính `src`).\n  - `<a rel=... href=...>` (Thẻ `<a>` là thẻ liên kết văn bản, không dùng nhúng CSS).\n  - `<file rel=... href=...>` (Không tồn tại thẻ `<file>`).\n  - `<div style=...>` (Định dạng Inline CSS, không phải chèn file CSS).\n  Do đó, đáp án đúng là **Chả cái nào đúng hết đâu!**.",
      "d": "Phương án này chưa chính xác. Cú pháp chuẩn để chèn file CSS ngoại vi vào HTML là `<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">`.\n- Tất cả các phương án:\n  - `<style rel=... src=...>` (Sai thuộc tính `src`).\n  - `<a rel=... href=...>` (Thẻ `<a>` là thẻ liên kết văn bản, không dùng nhúng CSS).\n  - `<file rel=... href=...>` (Không tồn tại thẻ `<file>`).\n  - `<div style=...>` (Định dạng Inline CSS, không phải chèn file CSS).\n  Do đó, đáp án đúng là **Chả cái nào đúng hết đâu!**.",
      "e": "[Chủ đề: HTML CSS Integration] Cú pháp chuẩn để chèn file CSS ngoại vi vào HTML là `<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">`.\n- Tất cả các phương án:\n  - `<style rel=... src=...>` (Sai thuộc tính `src`).\n  - `<a rel=... href=...>` (Thẻ `<a>` là thẻ liên kết văn bản, không dùng nhúng CSS).\n  - `<file rel=... href=...>` (Không tồn tại thẻ `<file>`).\n  - `<div style=...>` (Định dạng Inline CSS, không phải chèn file CSS).\n  Do đó, đáp án đúng là **Chả cái nào đúng hết đâu!**."
    }
  },
  {
    "id": 30,
    "question": "Để truy xuất lấy giá trị phần tử textbox có name=n ra biến x, mã javascript là ?",
    "options": [
      {
        "key": "a",
        "text": "x = docuemnt.frm.n.value;"
      },
      {
        "key": "b",
        "text": "x = docuemnt.frm.n.value();"
      },
      {
        "key": "c",
        "text": "x = document.getElementByName('n');"
      },
      {
        "key": "d",
        "text": "x = document.getElementsByName('n').value;"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: JavaScript Form DOM] `x = docuemnt.frm.n.value;` truy xuất giá trị từ form. Lưu ý: Trong cơ sở dữ liệu ôn tập của trường có chứa từ viết sai chính tả `docuemnt` thay vì `document`, tuy nhiên đây vẫn là đáp án được hệ thống công nhận.",
      "b": "Gọi hàm sai vì `value` là thuộc tính dạng văn bản.",
      "c": "Sai tên hàm (chuẩn là `getElementsByName` số nhiều).",
      "d": "Không lấy được trực tiếp vì `getElementsByName` trả về một mảng danh sách các nút, cần chỉ định chỉ mục như `[0].value`."
    }
  },
  {
    "id": 13,
    "question": "Thuộc tính nào của thẻ <input type=”text” > để giới hạn số ký tự nhập vào?",
    "options": [
      {
        "key": "a",
        "text": "limit"
      },
      {
        "key": "b",
        "text": "chars"
      },
      {
        "key": "c",
        "text": "maxchar"
      },
      {
        "key": "d",
        "text": "maxlenght"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thuộc tính `maxlength` (trong đề ghi nhầm thành `maxlenght`) quy định số ký tự lớn nhất người dùng được gõ vào hộp văn bản.",
      "b": "Phương án này chưa chính xác. Thuộc tính `maxlength` (trong đề ghi nhầm thành `maxlenght`) quy định số ký tự lớn nhất người dùng được gõ vào hộp văn bản.",
      "c": "- **Sai ở các đáp án khác:** `limit`, `chars`, `maxchar` không phải các thuộc tính hợp lệ của HTML.",
      "d": "[Chủ đề: HTML Input Attributes] Thuộc tính `maxlength` (trong đề ghi nhầm thành `maxlenght`) quy định số ký tự lớn nhất người dùng được gõ vào hộp văn bản."
    }
  },
  {
    "id": 28,
    "question": "Đoạn mã CSS sau đại diện cho đối tượng nào? input[id$=’abc’]",
    "options": [
      {
        "key": "a",
        "text": "Những thẻ input mà thuộc tính id có giá trị bắt đầu là abc"
      },
      {
        "key": "b",
        "text": "Những thẻ input mà thuộc tính id có giá trị kết thúc là abc"
      },
      {
        "key": "c",
        "text": "Những thẻ input mà thuộc tính id có giá trị chứa abc"
      },
      {
        "key": "d",
        "text": "Tất cả đều sai"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Ký hiệu `$` trong attribute selector (`[attr$=value]`) nghĩa là \"kết thúc bằng\". Do đó `input[id$='abc']` sẽ chọn các thẻ `<input>` có giá trị thuộc tính `id` kết thúc bằng chuỗi \"abc\".",
      "b": "[Chủ đề: CSS Attribute Selectors] Ký hiệu `$` trong attribute selector (`[attr$=value]`) nghĩa là \"kết thúc bằng\". Do đó `input[id$='abc']` sẽ chọn các thẻ `<input>` có giá trị thuộc tính `id` kết thúc bằng chuỗi \"abc\".",
      "c": "Ký hiệu là `*` (`[id*='abc']`).",
      "d": "Phương án này chưa chính xác. Ký hiệu `$` trong attribute selector (`[attr$=value]`) nghĩa là \"kết thúc bằng\". Do đó `input[id$='abc']` sẽ chọn các thẻ `<input>` có giá trị thuộc tính `id` kết thúc bằng chuỗi \"abc\"."
    }
  },
  {
    "id": 19,
    "question": "Cú pháp CSS nào được sử dụng để chuyển tất cả các thẻ <p> thành bold?",
    "options": [
      {
        "key": "a",
        "text": "p {text-size:bold}"
      },
      {
        "key": "b",
        "text": "p {font-weight:bold}"
      },
      {
        "key": "c",
        "text": "background-attachment: scroll"
      },
      {
        "key": "d",
        "text": "Tất cả đều sai"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. (Giống câu 44) Dùng thuộc tính `font-weight: bold;` để in đậm văn bản cho thẻ chọn.",
      "b": "[Chủ đề: CSS Typography Bold] (Giống câu 44) Dùng thuộc tính `font-weight: bold;` để in đậm văn bản cho thẻ chọn.",
      "c": "Phương án này chưa chính xác. (Giống câu 44) Dùng thuộc tính `font-weight: bold;` để in đậm văn bản cho thẻ chọn.",
      "d": "Phương án này chưa chính xác. (Giống câu 44) Dùng thuộc tính `font-weight: bold;` để in đậm văn bản cho thẻ chọn."
    }
  },
  {
    "id": 27,
    "question": "Đoạn mã CSS sau đại diện cho đối tượng nào? input[id^=’abc’]",
    "options": [
      {
        "key": "a",
        "text": "Những thẻ input mà thuộc tính id có giá trị bắt đầu là abc"
      },
      {
        "key": "b",
        "text": "Những thẻ input mà thuộc tính id có giá trị kết thúc là abc"
      },
      {
        "key": "c",
        "text": "Những thẻ input mà thuộc tính id có giá trị chứa abc"
      },
      {
        "key": "d",
        "text": "Tất cả đều sai"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: CSS Attribute Selectors] Ký hiệu `^` trong attribute selector (`[attr^=value]`) nghĩa là \"bắt đầu bằng\". Do đó `input[id^='abc']` chọn các thẻ `<input>` có thuộc tính `id` bắt đầu bằng chuỗi \"abc\".",
      "b": "Phương án này chưa chính xác. Ký hiệu `^` trong attribute selector (`[attr^=value]`) nghĩa là \"bắt đầu bằng\". Do đó `input[id^='abc']` chọn các thẻ `<input>` có thuộc tính `id` bắt đầu bằng chuỗi \"abc\".",
      "c": "Phương án này chưa chính xác. Ký hiệu `^` trong attribute selector (`[attr^=value]`) nghĩa là \"bắt đầu bằng\". Do đó `input[id^='abc']` chọn các thẻ `<input>` có thuộc tính `id` bắt đầu bằng chuỗi \"abc\".",
      "d": "Phương án này chưa chính xác. Ký hiệu `^` trong attribute selector (`[attr^=value]`) nghĩa là \"bắt đầu bằng\". Do đó `input[id^='abc']` chọn các thẻ `<input>` có thuộc tính `id` bắt đầu bằng chuỗi \"abc\"."
    }
  },
  {
    "id": 121,
    "question": "Thêm gì vào <input type=”text” /> để có được gợi ý “Nhập số” như sau:",
    "options": [
      {
        "key": "a",
        "text": "value=\"Nhập số\""
      },
      {
        "key": "b",
        "text": "comment=\"Nhập số\""
      },
      {
        "key": "c",
        "text": "hint=\"Nhập số\""
      },
      {
        "key": "d",
        "text": "placeholder=\"Nhập số\""
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. (Giống câu 9 của đề 1) Thuộc tính `placeholder` dùng để tạo gợi ý văn bản hiển thị mờ trong trường nhập liệu và biến mất khi người dùng gõ chữ.",
      "b": "Phương án này chưa chính xác. (Giống câu 9 của đề 1) Thuộc tính `placeholder` dùng để tạo gợi ý văn bản hiển thị mờ trong trường nhập liệu và biến mất khi người dùng gõ chữ.",
      "c": "Phương án này chưa chính xác. (Giống câu 9 của đề 1) Thuộc tính `placeholder` dùng để tạo gợi ý văn bản hiển thị mờ trong trường nhập liệu và biến mất khi người dùng gõ chữ.",
      "d": "[Chủ đề: HTML Placeholder] (Giống câu 9 của đề 1) Thuộc tính `placeholder` dùng để tạo gợi ý văn bản hiển thị mờ trong trường nhập liệu và biến mất khi người dùng gõ chữ."
    }
  },
  {
    "id": 24,
    "question": "Chọn thứ tự định dạng liên kết trong CSS?",
    "options": [
      {
        "key": "a",
        "text": "a:link > a:visited > a :hover > a:active"
      },
      {
        "key": "b",
        "text": "a:visited > a:link > a :hover > a:active"
      },
      {
        "key": "c",
        "text": "a:link > a :hover > a:visited > a:active"
      },
      {
        "key": "d",
        "text": "a:active > a:link > a:visited > a :hover"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: CSS Link States Order] Theo nguyên tắc định nghĩa CSS, thứ tự viết các trạng thái của liên kết bắt buộc phải là: **Link -> Visited -> Hover -> Active** (Mẹo nhớ: **L**ove **V**iệt **H**ùng **A**nh hoặc **L**o**V**e **H**a**T**e). Nếu viết sai thứ tự này, các thuộc tính CSS có thể bị ghi đè không đúng như mong đợi.",
      "b": "Phương án này chưa chính xác. Theo nguyên tắc định nghĩa CSS, thứ tự viết các trạng thái của liên kết bắt buộc phải là: **Link -> Visited -> Hover -> Active** (Mẹo nhớ: **L**ove **V**iệt **H**ùng **A**nh hoặc **L**o**V**e **H**a**T**e). Nếu viết sai thứ tự này, các thuộc tính CSS có thể bị ghi đè không đúng như mong đợi.",
      "c": "Phương án này chưa chính xác. Theo nguyên tắc định nghĩa CSS, thứ tự viết các trạng thái của liên kết bắt buộc phải là: **Link -> Visited -> Hover -> Active** (Mẹo nhớ: **L**ove **V**iệt **H**ùng **A**nh hoặc **L**o**V**e **H**a**T**e). Nếu viết sai thứ tự này, các thuộc tính CSS có thể bị ghi đè không đúng như mong đợi.",
      "d": "Phương án này chưa chính xác. Theo nguyên tắc định nghĩa CSS, thứ tự viết các trạng thái của liên kết bắt buộc phải là: **Link -> Visited -> Hover -> Active** (Mẹo nhớ: **L**ove **V**iệt **H**ùng **A**nh hoặc **L**o**V**e **H**a**T**e). Nếu viết sai thứ tự này, các thuộc tính CSS có thể bị ghi đè không đúng như mong đợi."
    }
  },
  {
    "id": 21,
    "question": "Trong CSS, thuộc tính nào để hiển thị nội dung text dưới dạng bold?",
    "options": [
      {
        "key": "a",
        "text": "font:b"
      },
      {
        "key": "b",
        "text": "font:bold"
      },
      {
        "key": "c",
        "text": "style:bold"
      },
      {
        "key": "d",
        "text": "font-weight:bold"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. (Giống câu 19) Dùng thuộc tính `font-weight: bold;` để cấu hình chữ in đậm.",
      "b": "Phương án này chưa chính xác. (Giống câu 19) Dùng thuộc tính `font-weight: bold;` để cấu hình chữ in đậm.",
      "c": "Phương án này chưa chính xác. (Giống câu 19) Dùng thuộc tính `font-weight: bold;` để cấu hình chữ in đậm.",
      "d": "[Chủ đề: CSS Typography Bold] (Giống câu 19) Dùng thuộc tính `font-weight: bold;` để cấu hình chữ in đậm."
    }
  },
  {
    "id": 108,
    "question": "Nếu có đoạn mã HTML và CSS như sau: <div> <a href=\"#\">A</a> <b><a href=\"#\">B</a></b> </div> <a href=\"#\">C</a> div > a{color:red} Hỏi nội dung nào có màu đỏ ?",
    "options": [
      {
        "key": "a",
        "text": "A"
      },
      {
        "key": "b",
        "text": "B"
      },
      {
        "key": "c",
        "text": "C"
      },
      {
        "key": "d",
        "text": "Tất cả đều đúng"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: CSS Combinator Selectors] Selector `div > a` là Child Selector (con trực tiếp của div).\n- Cấu trúc:\n  `<div> <a href=\"#\">A</a> <b><a href=\"#\">B</a></b> </div> <a href=\"#\">C</a>`\n  - `A` là con trực tiếp nằm ngay dưới `div` -> Được chọn (Màu đỏ).\n  - `B` là con của thẻ `<b>`, cháu của `div` -> Không chọn.\n  - `C` nằm hoàn toàn bên ngoài thẻ `div` -> Không chọn.\n  Do đó, chỉ có **A** có màu đỏ.",
      "b": "Phương án này chưa chính xác. Selector `div > a` là Child Selector (con trực tiếp của div).\n- Cấu trúc:\n  `<div> <a href=\"#\">A</a> <b><a href=\"#\">B</a></b> </div> <a href=\"#\">C</a>`\n  - `A` là con trực tiếp nằm ngay dưới `div` -> Được chọn (Màu đỏ).\n  - `B` là con của thẻ `<b>`, cháu của `div` -> Không chọn.\n  - `C` nằm hoàn toàn bên ngoài thẻ `div` -> Không chọn.\n  Do đó, chỉ có **A** có màu đỏ.",
      "c": "Phương án này chưa chính xác. Selector `div > a` là Child Selector (con trực tiếp của div).\n- Cấu trúc:\n  `<div> <a href=\"#\">A</a> <b><a href=\"#\">B</a></b> </div> <a href=\"#\">C</a>`\n  - `A` là con trực tiếp nằm ngay dưới `div` -> Được chọn (Màu đỏ).\n  - `B` là con của thẻ `<b>`, cháu của `div` -> Không chọn.\n  - `C` nằm hoàn toàn bên ngoài thẻ `div` -> Không chọn.\n  Do đó, chỉ có **A** có màu đỏ.",
      "d": "Phương án này chưa chính xác. Selector `div > a` là Child Selector (con trực tiếp của div).\n- Cấu trúc:\n  `<div> <a href=\"#\">A</a> <b><a href=\"#\">B</a></b> </div> <a href=\"#\">C</a>`\n  - `A` là con trực tiếp nằm ngay dưới `div` -> Được chọn (Màu đỏ).\n  - `B` là con của thẻ `<b>`, cháu của `div` -> Không chọn.\n  - `C` nằm hoàn toàn bên ngoài thẻ `div` -> Không chọn.\n  Do đó, chỉ có **A** có màu đỏ."
    }
  },
  {
    "id": 119,
    "question": "Thuộc tính CSS nào định dạng đối tượng ẩn nhưng vẫn chiếm vùng không gian?",
    "options": [
      {
        "key": "a",
        "text": "display: none"
      },
      {
        "key": "b",
        "text": "display: block"
      },
      {
        "key": "c",
        "text": "display: inline"
      },
      {
        "key": "d",
        "text": "visibility: hidden"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thuộc tính `visibility: hidden;` ẩn phần tử khỏi giao diện màn hình nhưng phần tử vẫn chiếm vùng không gian (layout) ban đầu của nó.",
      "b": "- `display: block` / `inline`: Định dạng hiển thị dạng khối hoặc cùng dòng, không có chức năng ẩn phần tử.",
      "c": "Phương án này chưa chính xác. Thuộc tính `visibility: hidden;` ẩn phần tử khỏi giao diện màn hình nhưng phần tử vẫn chiếm vùng không gian (layout) ban đầu của nó.",
      "d": "[Chủ đề: CSS Visibility vs Display] Thuộc tính `visibility: hidden;` ẩn phần tử khỏi giao diện màn hình nhưng phần tử vẫn chiếm vùng không gian (layout) ban đầu của nó."
    }
  },
  {
    "id": 43,
    "question": "Thuộc tính CSS nào định dạng đường biên (border) table nét đơn?",
    "options": [
      {
        "key": "a",
        "text": "border-collapse : separate"
      },
      {
        "key": "b",
        "text": "border-collapse : 1px"
      },
      {
        "key": "c",
        "text": "border-line : collapse"
      },
      {
        "key": "d",
        "text": "border-collapse : collapse"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thuộc tính `border-collapse: collapse;` dùng để gộp các đường viền kép của các ô kề nhau trong bảng (`<table>`) thành một đường viền đơn gọn gàng.",
      "b": "Phương án này chưa chính xác. Thuộc tính `border-collapse: collapse;` dùng để gộp các đường viền kép của các ô kề nhau trong bảng (`<table>`) thành một đường viền đơn gọn gàng.",
      "c": "Phương án này chưa chính xác. Thuộc tính `border-collapse: collapse;` dùng để gộp các đường viền kép của các ô kề nhau trong bảng (`<table>`) thành một đường viền đơn gọn gàng.",
      "d": "[Chủ đề: CSS Table Border] Thuộc tính `border-collapse: collapse;` dùng để gộp các đường viền kép của các ô kề nhau trong bảng (`<table>`) thành một đường viền đơn gọn gàng."
    }
  },
  {
    "id": 101,
    "question": "Thuộc tính CSS nào định dạng đường biên (border) table nét đơn?",
    "options": [
      {
        "key": "a",
        "text": "border-collapse : separate"
      },
      {
        "key": "b",
        "text": "border-collapse : 1px"
      },
      {
        "key": "c",
        "text": "border-line : collapse"
      },
      {
        "key": "d",
        "text": "border-collapse : collapse"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. (Giống câu 43) Dùng `border-collapse: collapse;` để gộp viền bảng thành một nét đơn.",
      "b": "Phương án này chưa chính xác. (Giống câu 43) Dùng `border-collapse: collapse;` để gộp viền bảng thành một nét đơn.",
      "c": "Phương án này chưa chính xác. (Giống câu 43) Dùng `border-collapse: collapse;` để gộp viền bảng thành một nét đơn.",
      "d": "[Chủ đề: CSS Table Border] (Giống câu 43) Dùng `border-collapse: collapse;` để gộp viền bảng thành một nét đơn."
    }
  },
  {
    "id": 35,
    "question": "Thẻ div nào sau đây có chiều rộng là 100px?",
    "options": [
      {
        "key": "a",
        "text": "<div style=\"width=100px\"></div>"
      },
      {
        "key": "b",
        "text": "<div width:\"100px\"></div>"
      },
      {
        "key": "c",
        "text": "<div width=\"100px\"></div>"
      },
      {
        "key": "d",
        "text": "<div style=\"width:100px\"></div>"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Sai dấu gán bằng `=` thay vì `:`.",
      "b": "Thiếu thuộc tính bao `style`.",
      "c": "Viết dạng thuộc tính trực tiếp (chỉ hợp lệ cho một số thẻ nhất định như `<img>`, `<table>`, nhưng không hợp lệ cho `<div>` theo tiêu chuẩn HTML5).",
      "d": "[Chủ đề: HTML Inline Style Syntax] Cú pháp viết style inline chuẩn cho thẻ HTML là: `style=\"thuộc-tính: giá-trị;\"`. Do đó đáp án đúng là `<div style=\"width:100px\"></div>`."
    }
  },
  {
    "id": 40,
    "question": "Nếu viết padding: 20px 50px 10px 30px thì padding-left là bao nhiêu?",
    "options": [
      {
        "key": "a",
        "text": "10px"
      },
      {
        "key": "b",
        "text": "50px"
      },
      {
        "key": "c",
        "text": "20px"
      },
      {
        "key": "d",
        "text": "30px"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. (Giống câu 18 đề 1) Thứ tự xác định các cạnh của padding/margin viết gọn: **Top Right Bottom Left**. Với `20px 50px 10px 30px`, cạnh bên trái (Left) tương ứng là `30px`.",
      "b": "Phương án này chưa chính xác. (Giống câu 18 đề 1) Thứ tự xác định các cạnh của padding/margin viết gọn: **Top Right Bottom Left**. Với `20px 50px 10px 30px`, cạnh bên trái (Left) tương ứng là `30px`.",
      "c": "Phương án này chưa chính xác. (Giống câu 18 đề 1) Thứ tự xác định các cạnh của padding/margin viết gọn: **Top Right Bottom Left**. Với `20px 50px 10px 30px`, cạnh bên trái (Left) tương ứng là `30px`.",
      "d": "[Chủ đề: CSS Box Model Margin/Padding] (Giống câu 18 đề 1) Thứ tự xác định các cạnh của padding/margin viết gọn: **Top Right Bottom Left**. Với `20px 50px 10px 30px`, cạnh bên trái (Left) tương ứng là `30px`."
    }
  },
  {
    "id": 17,
    "question": "Nhóm các đối tượng có cùng thuộc tính và có thể được sử dụng nhiều lần là?",
    "options": [
      {
        "key": "a",
        "text": "class"
      },
      {
        "key": "b",
        "text": "id"
      },
      {
        "key": "c",
        "text": "Cả class và id đều đúng"
      },
      {
        "key": "d",
        "text": "Cả class và id đều sai"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: CSS Selector Types] Lớp (`class`) trong CSS cho phép gom nhóm các phần tử có chung kiểu thiết kế và có thể tái sử dụng nhiều lần cho nhiều phần tử khác nhau trên cùng một trang web (bằng cách gọi `class=\"class_name\"`).",
      "b": "Chỉ định dạng duy nhất cho một phần tử duy nhất trong trang web (không được lặp lại `id` trên cùng một tài liệu HTML).",
      "c": "Phương án này chưa chính xác. Lớp (`class`) trong CSS cho phép gom nhóm các phần tử có chung kiểu thiết kế và có thể tái sử dụng nhiều lần cho nhiều phần tử khác nhau trên cùng một trang web (bằng cách gọi `class=\"class_name\"`).",
      "d": "Phương án này chưa chính xác. Lớp (`class`) trong CSS cho phép gom nhóm các phần tử có chung kiểu thiết kế và có thể tái sử dụng nhiều lần cho nhiều phần tử khác nhau trên cùng một trang web (bằng cách gọi `class=\"class_name\"`)."
    }
  },
  {
    "id": 45,
    "question": "Lựa chọn thiết lập ảnh nền cố định?",
    "options": [
      {
        "key": "a",
        "text": "background-attachment: fix"
      },
      {
        "key": "b",
        "text": "background-attachment: fixed"
      },
      {
        "key": "c",
        "text": "background-attachment: scroll"
      },
      {
        "key": "d",
        "text": "Tất cả đều sai"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. (Giống câu 13 đề 1) Giá trị `fixed` của thuộc tính `background-attachment` dùng để giữ cố định ảnh nền đứng yên khi người dùng cuộn nội dung trang web.",
      "b": "[Chủ đề: CSS Background Attachment] (Giống câu 13 đề 1) Giá trị `fixed` của thuộc tính `background-attachment` dùng để giữ cố định ảnh nền đứng yên khi người dùng cuộn nội dung trang web.",
      "c": "Phương án này chưa chính xác. (Giống câu 13 đề 1) Giá trị `fixed` của thuộc tính `background-attachment` dùng để giữ cố định ảnh nền đứng yên khi người dùng cuộn nội dung trang web.",
      "d": "Phương án này chưa chính xác. (Giống câu 13 đề 1) Giá trị `fixed` của thuộc tính `background-attachment` dùng để giữ cố định ảnh nền đứng yên khi người dùng cuộn nội dung trang web."
    }
  },
  {
    "id": 99,
    "question": "Chọn thứ tự định dạng liên kết đúng ?",
    "options": [
      {
        "key": "a",
        "text": "link > hover > visited > active"
      },
      {
        "key": "b",
        "text": "link > acitve > visisted > hover"
      },
      {
        "key": "c",
        "text": "link > visited > hover > active"
      },
      {
        "key": "d",
        "text": "Tất cả đều sai"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. (Giống câu 24) Thứ tự chuẩn khai báo trạng thái liên kết: **Link -> Visited -> Hover -> Active**.",
      "b": "Phương án này chưa chính xác. (Giống câu 24) Thứ tự chuẩn khai báo trạng thái liên kết: **Link -> Visited -> Hover -> Active**.",
      "c": "[Chủ đề: CSS Link States Order] (Giống câu 24) Thứ tự chuẩn khai báo trạng thái liên kết: **Link -> Visited -> Hover -> Active**.",
      "d": "Phương án này chưa chính xác. (Giống câu 24) Thứ tự chuẩn khai báo trạng thái liên kết: **Link -> Visited -> Hover -> Active**."
    }
  },
  {
    "id": 26,
    "question": "Nếu có đoạn mã HTML và CSS như sau: <div> <a href=\"#\">A</a> <a href=\"#\"><b>B</b></a> <b><a href=\"#\">C</a></b> </div> div, a{color:yellow} Hỏi nội dung nào có màu vàng ?",
    "options": [
      {
        "key": "a",
        "text": "A"
      },
      {
        "key": "b",
        "text": "B"
      },
      {
        "key": "c",
        "text": "C"
      },
      {
        "key": "d",
        "text": "Tất cả đều đúng"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Dấu phẩy (`,`) trong CSS dùng để nhóm các selector (Grouping Selectors). Câu lệnh `div, a {color:yellow}` nghĩa là tô tất cả thẻ `<div>` và tất cả thẻ `<a>` có màu vàng.\n- Do cấu trúc HTML:\n  - `A`, `B`, `C` đều là nội dung bên trong các thẻ `<a>` nằm trong `div`.\n  - Do cả `div` và `a` đều có màu vàng nên tất cả nội dung **A, B, C** đều hiển thị màu vàng.",
      "b": "Phương án này chưa chính xác. Dấu phẩy (`,`) trong CSS dùng để nhóm các selector (Grouping Selectors). Câu lệnh `div, a {color:yellow}` nghĩa là tô tất cả thẻ `<div>` và tất cả thẻ `<a>` có màu vàng.\n- Do cấu trúc HTML:\n  - `A`, `B`, `C` đều là nội dung bên trong các thẻ `<a>` nằm trong `div`.\n  - Do cả `div` và `a` đều có màu vàng nên tất cả nội dung **A, B, C** đều hiển thị màu vàng.",
      "c": "Phương án này chưa chính xác. Dấu phẩy (`,`) trong CSS dùng để nhóm các selector (Grouping Selectors). Câu lệnh `div, a {color:yellow}` nghĩa là tô tất cả thẻ `<div>` và tất cả thẻ `<a>` có màu vàng.\n- Do cấu trúc HTML:\n  - `A`, `B`, `C` đều là nội dung bên trong các thẻ `<a>` nằm trong `div`.\n  - Do cả `div` và `a` đều có màu vàng nên tất cả nội dung **A, B, C** đều hiển thị màu vàng.",
      "d": "[Chủ đề: CSS Selectors Grouping] Dấu phẩy (`,`) trong CSS dùng để nhóm các selector (Grouping Selectors). Câu lệnh `div, a {color:yellow}` nghĩa là tô tất cả thẻ `<div>` và tất cả thẻ `<a>` có màu vàng.\n- Do cấu trúc HTML:\n  - `A`, `B`, `C` đều là nội dung bên trong các thẻ `<a>` nằm trong `div`.\n  - Do cả `div` và `a` đều có màu vàng nên tất cả nội dung **A, B, C** đều hiển thị màu vàng."
    }
  },
  {
    "id": 36,
    "question": "Thuộc tính gì của thẻ option để xác định phần tử đó được chọn?",
    "options": [
      {
        "key": "a",
        "text": "checked"
      },
      {
        "key": "b",
        "text": "default"
      },
      {
        "key": "c",
        "text": "Tất cả đều đúng"
      },
      {
        "key": "d",
        "text": "Tất cả đều sai"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Chỉ dùng cho hộp chọn check và nút radio (`<input type=\"checkbox/radio\">`).",
      "b": "Không phải thuộc tính chọn của các thẻ HTML.",
      "c": "Phương án này chưa chính xác. Để thiết lập một phần tử `<option>` trong danh sách lựa chọn (`<select>`) được chọn làm mặc định, ta sử dụng thuộc tính `selected` (Ví dụ: `<option selected>...`).",
      "d": "[Chủ đề: HTML Option Selected] Để thiết lập một phần tử `<option>` trong danh sách lựa chọn (`<select>`) được chọn làm mặc định, ta sử dụng thuộc tính `selected` (Ví dụ: `<option selected>...`)."
    }
  },
  {
    "id": 32,
    "question": "Phương thức nào của jQuery ngăn ngừa code chạy trước khi trang web load xong?",
    "options": [
      {
        "key": "a",
        "text": "$(document).ready();"
      },
      {
        "key": "b",
        "text": "$(document).load();"
      },
      {
        "key": "c",
        "text": "$(body).onload();"
      },
      {
        "key": "d",
        "text": "$(body).load();"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: jQuery Ready Event] Phương thức `$(document).ready()` (hoặc dạng viết tắt `$(function() { ... })`) được dùng để đảm bảo đoạn mã jQuery bên trong chỉ thực thi sau khi cây cấu trúc DOM của tài liệu HTML đã được trình duyệt phân tích và dựng xong.",
      "b": "Phương án này chưa chính xác. Phương thức `$(document).ready()` (hoặc dạng viết tắt `$(function() { ... })`) được dùng để đảm bảo đoạn mã jQuery bên trong chỉ thực thi sau khi cây cấu trúc DOM của tài liệu HTML đã được trình duyệt phân tích và dựng xong.",
      "c": "Phương án này chưa chính xác. Phương thức `$(document).ready()` (hoặc dạng viết tắt `$(function() { ... })`) được dùng để đảm bảo đoạn mã jQuery bên trong chỉ thực thi sau khi cây cấu trúc DOM của tài liệu HTML đã được trình duyệt phân tích và dựng xong.",
      "d": "Phương án này chưa chính xác. Phương thức `$(document).ready()` (hoặc dạng viết tắt `$(function() { ... })`) được dùng để đảm bảo đoạn mã jQuery bên trong chỉ thực thi sau khi cây cấu trúc DOM của tài liệu HTML đã được trình duyệt phân tích và dựng xong."
    }
  },
  {
    "id": 51,
    "question": "Đoạn mã CSS sau đại diện cho đối tượng nào? input[id*=’abc’]",
    "options": [
      {
        "key": "a",
        "text": "Những thẻ input mà thuộc tính id có giá trị bắt đầu là abc"
      },
      {
        "key": "b",
        "text": "Những thẻ input mà thuộc tính id có giá trị kết thúc là abc"
      },
      {
        "key": "c",
        "text": "Những thẻ input mà thuộc tính id có giá trị chứa abc"
      },
      {
        "key": "d",
        "text": "Tất cả đều sai"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Ký hiệu `*` trong attribute selector (`[attr*=value]`) nghĩa là \"chứa chuỗi\". Do đó `input[id*='abc']` sẽ chọn các thẻ input có thuộc tính id chứa từ \"abc\" ở bất kỳ vị trí nào.",
      "b": "Phương án này chưa chính xác. Ký hiệu `*` trong attribute selector (`[attr*=value]`) nghĩa là \"chứa chuỗi\". Do đó `input[id*='abc']` sẽ chọn các thẻ input có thuộc tính id chứa từ \"abc\" ở bất kỳ vị trí nào.",
      "c": "[Chủ đề: CSS Attribute Selectors] Ký hiệu `*` trong attribute selector (`[attr*=value]`) nghĩa là \"chứa chuỗi\". Do đó `input[id*='abc']` sẽ chọn các thẻ input có thuộc tính id chứa từ \"abc\" ở bất kỳ vị trí nào.",
      "d": "Phương án này chưa chính xác. Ký hiệu `*` trong attribute selector (`[attr*=value]`) nghĩa là \"chứa chuỗi\". Do đó `input[id*='abc']` sẽ chọn các thẻ input có thuộc tính id chứa từ \"abc\" ở bất kỳ vị trí nào."
    }
  },
  {
    "id": 47,
    "question": "Thuộc tính nào của CSS không cho hình nền lập lại ?",
    "options": [
      {
        "key": "a",
        "text": "background-repeat: no-repeat"
      },
      {
        "key": "b",
        "text": "image-repeat"
      },
      {
        "key": "c",
        "text": "background-norepeat"
      },
      {
        "key": "d",
        "text": "bgimage-repeat"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: CSS Background Repeat] (Giống câu 23) Thuộc tính `background-repeat: no-repeat;` dùng để tắt tính năng lặp lại của ảnh nền.",
      "b": "Phương án này chưa chính xác. (Giống câu 23) Thuộc tính `background-repeat: no-repeat;` dùng để tắt tính năng lặp lại của ảnh nền.",
      "c": "Phương án này chưa chính xác. (Giống câu 23) Thuộc tính `background-repeat: no-repeat;` dùng để tắt tính năng lặp lại của ảnh nền.",
      "d": "Phương án này chưa chính xác. (Giống câu 23) Thuộc tính `background-repeat: no-repeat;` dùng để tắt tính năng lặp lại của ảnh nền."
    }
  },
  {
    "id": 107,
    "question": "Chọn khai báo quan hệ Child selector giữa div và p ?",
    "options": [
      {
        "key": "a",
        "text": "div ~ p"
      },
      {
        "key": "b",
        "text": "div > p"
      },
      {
        "key": "c",
        "text": "div + p"
      },
      {
        "key": "d",
        "text": "div * p"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Ký hiệu `>` đại diện cho quan hệ con trực tiếp (Child Selector). Do đó khai báo con trực tiếp của div và p là `div > p`.\n- **Giải thích các ký hiệu khác:**\n  - `div ~ p`: General Sibling Selector (anh em đồng cấp).\n  - `div + p`: Adjacent Sibling Selector (anh em liền kề sát sau).\n  - `div * p`: Selector chọn thẻ `<p>` là cháu của `div` thông qua một thẻ trung gian bất kỳ.",
      "b": "[Chủ đề: CSS Child Selector] Ký hiệu `>` đại diện cho quan hệ con trực tiếp (Child Selector). Do đó khai báo con trực tiếp của div và p là `div > p`.\n- **Giải thích các ký hiệu khác:**\n  - `div ~ p`: General Sibling Selector (anh em đồng cấp).\n  - `div + p`: Adjacent Sibling Selector (anh em liền kề sát sau).\n  - `div * p`: Selector chọn thẻ `<p>` là cháu của `div` thông qua một thẻ trung gian bất kỳ.",
      "c": "Phương án này chưa chính xác. Ký hiệu `>` đại diện cho quan hệ con trực tiếp (Child Selector). Do đó khai báo con trực tiếp của div và p là `div > p`.\n- **Giải thích các ký hiệu khác:**\n  - `div ~ p`: General Sibling Selector (anh em đồng cấp).\n  - `div + p`: Adjacent Sibling Selector (anh em liền kề sát sau).\n  - `div * p`: Selector chọn thẻ `<p>` là cháu của `div` thông qua một thẻ trung gian bất kỳ.",
      "d": "Phương án này chưa chính xác. Ký hiệu `>` đại diện cho quan hệ con trực tiếp (Child Selector). Do đó khai báo con trực tiếp của div và p là `div > p`.\n- **Giải thích các ký hiệu khác:**\n  - `div ~ p`: General Sibling Selector (anh em đồng cấp).\n  - `div + p`: Adjacent Sibling Selector (anh em liền kề sát sau).\n  - `div * p`: Selector chọn thẻ `<p>` là cháu của `div` thông qua một thẻ trung gian bất kỳ."
    }
  },
  {
    "id": 500,
    "question": "Để thiết lập hình nền cho bảng (`table`), cách nào đúng theo `HTML hiện đại`?",
    "options": [
      {
        "key": "a",
        "text": "Dùng CSS background cho table"
      },
      {
        "key": "b",
        "text": "Cả a và b đúng"
      },
      {
        "key": "c",
        "text": "Dùng thuộc tính background trong thẻ <table>"
      },
      {
        "key": "d",
        "text": "Dùng thuộc tính bgcolor trong thẻ <table>"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: CSS Table Background] Trong HTML hiện đại (HTML5), thuộc tính background và bgcolor của thẻ <table> đã bị loại bỏ. Phương án đúng và chuẩn nhất là sử dụng CSS background để thiết lập hình nền cho bảng.",
      "b": "Phương án này chưa chính xác. Trong HTML hiện đại (HTML5), thuộc tính background và bgcolor của thẻ <table> đã bị loại bỏ. Phương án đúng và chuẩn nhất là sử dụng CSS background để thiết lập hình nền cho bảng.",
      "c": "Phương án này chưa chính xác. Trong HTML hiện đại (HTML5), thuộc tính background và bgcolor của thẻ <table> đã bị loại bỏ. Phương án đúng và chuẩn nhất là sử dụng CSS background để thiết lập hình nền cho bảng.",
      "d": "Phương án này chưa chính xác. Trong HTML hiện đại (HTML5), thuộc tính background và bgcolor của thẻ <table> đã bị loại bỏ. Phương án đúng và chuẩn nhất là sử dụng CSS background để thiết lập hình nền cho bảng."
    }
  },
  {
    "id": 501,
    "question": "Trong danh sách không thứ tự <ul> muốn sử dụng 1 hình ảnh khác làm biểu tượng thì phải làm sao?",
    "options": [
      {
        "key": "a",
        "text": "Dùng thuộc tính list-style-image"
      },
      {
        "key": "b",
        "text": "Không thay đổi được"
      },
      {
        "key": "c",
        "text": "Thay đổi thuộc tính type"
      },
      {
        "key": "d",
        "text": "Thay đổi thuộc tính src"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: CSS List Style Image] Để dùng ảnh riêng làm ký hiệu đầu dòng danh sách, ta sử dụng thuộc tính list-style-image trong CSS.",
      "b": "Phương án này chưa chính xác. Để dùng ảnh riêng làm ký hiệu đầu dòng danh sách, ta sử dụng thuộc tính list-style-image trong CSS.",
      "c": "Phương án này chưa chính xác. Để dùng ảnh riêng làm ký hiệu đầu dòng danh sách, ta sử dụng thuộc tính list-style-image trong CSS.",
      "d": "Phương án này chưa chính xác. Để dùng ảnh riêng làm ký hiệu đầu dòng danh sách, ta sử dụng thuộc tính list-style-image trong CSS."
    }
  },
  {
    "id": 502,
    "question": "Thẻ <dl>…</dl> là danh sách gì?",
    "options": [
      {
        "key": "a",
        "text": "Có thứ tự"
      },
      {
        "key": "b",
        "text": "Tất cả đều sai"
      },
      {
        "key": "c",
        "text": "Không có thứ tự"
      },
      {
        "key": "d",
        "text": "Mô tả/Định nghĩa"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thẻ <dl> đại diện cho Description List (Danh sách mô tả hoặc danh sách định nghĩa).",
      "b": "Phương án này chưa chính xác. Thẻ <dl> đại diện cho Description List (Danh sách mô tả hoặc danh sách định nghĩa).",
      "c": "Phương án này chưa chính xác. Thẻ <dl> đại diện cho Description List (Danh sách mô tả hoặc danh sách định nghĩa).",
      "d": "[Chủ đề: HTML Description List] Thẻ <dl> đại diện cho Description List (Danh sách mô tả hoặc danh sách định nghĩa)."
    }
  },
  {
    "id": 503,
    "question": "Mã màu `#ffffff` là màu gì?",
    "options": [
      {
        "key": "a",
        "text": "blue"
      },
      {
        "key": "b",
        "text": "green"
      },
      {
        "key": "c",
        "text": "Mã màu #ffffff là màu gì?"
      },
      {
        "key": "d",
        "text": "black"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: HTML Color Code (Broken Database)] Mã màu #ffffff đại diện cho màu Trắng (White). Tuy nhiên, trong ngân hàng câu hỏi của đề thi này, do lỗi thiết lập đề, đáp án đúng được đặt là A (blue).",
      "b": "Phương án này chưa chính xác. Mã màu #ffffff đại diện cho màu Trắng (White). Tuy nhiên, trong ngân hàng câu hỏi của đề thi này, do lỗi thiết lập đề, đáp án đúng được đặt là A (blue).",
      "c": "Phương án này chưa chính xác. Mã màu #ffffff đại diện cho màu Trắng (White). Tuy nhiên, trong ngân hàng câu hỏi của đề thi này, do lỗi thiết lập đề, đáp án đúng được đặt là A (blue).",
      "d": "Phương án này chưa chính xác. Mã màu #ffffff đại diện cho màu Trắng (White). Tuy nhiên, trong ngân hàng câu hỏi của đề thi này, do lỗi thiết lập đề, đáp án đúng được đặt là A (blue)."
    }
  },
  {
    "id": 504,
    "question": "Đoạn mã `X<sub><u>2</u></sub>` xuất ra trình duyệt là gì?",
    "options": [
      {
        "key": "a",
        "text": "X<sub><u>2</u></sub>"
      },
      {
        "key": "b",
        "text": "X<sup>2</sup>"
      },
      {
        "key": "c",
        "text": "X<sub>2</sub>"
      },
      {
        "key": "d",
        "text": "X2"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: HTML Subscript & Underline] Thẻ <sub> định dạng chỉ số dưới (subscript) và thẻ <u> định dạng gạch chân (underline), nên số 2 sẽ hiển thị in dưới và có gạch chân.",
      "b": "Phương án này chưa chính xác. Thẻ <sub> định dạng chỉ số dưới (subscript) và thẻ <u> định dạng gạch chân (underline), nên số 2 sẽ hiển thị in dưới và có gạch chân.",
      "c": "Phương án này chưa chính xác. Thẻ <sub> định dạng chỉ số dưới (subscript) và thẻ <u> định dạng gạch chân (underline), nên số 2 sẽ hiển thị in dưới và có gạch chân.",
      "d": "Phương án này chưa chính xác. Thẻ <sub> định dạng chỉ số dưới (subscript) và thẻ <u> định dạng gạch chân (underline), nên số 2 sẽ hiển thị in dưới và có gạch chân."
    }
  },
  {
    "id": 505,
    "question": "Thuộc tính nào xác định tốc độ chuyển động của thẻ <marquee>?",
    "options": [
      {
        "key": "a",
        "text": "direction"
      },
      {
        "key": "b",
        "text": "loop"
      },
      {
        "key": "c",
        "text": "scrollamount"
      },
      {
        "key": "d",
        "text": "behavior"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thuộc tính scrollamount xác định tốc độ di chuyển của chữ trong thẻ <marquee>.",
      "b": "Phương án này chưa chính xác. Thuộc tính scrollamount xác định tốc độ di chuyển của chữ trong thẻ <marquee>.",
      "c": "[Chủ đề: HTML Marquee Speed] Thuộc tính scrollamount xác định tốc độ di chuyển của chữ trong thẻ <marquee>.",
      "d": "Phương án này chưa chính xác. Thuộc tính scrollamount xác định tốc độ di chuyển của chữ trong thẻ <marquee>."
    }
  },
  {
    "id": 506,
    "question": "Nếu viết padding: 20px 40px 30px thì padding-left và padding-right là bao nhiêu?",
    "options": [
      {
        "key": "a",
        "text": "20px – 40px"
      },
      {
        "key": "b",
        "text": "20px – 30px"
      },
      {
        "key": "c",
        "text": "40px – 30px"
      },
      {
        "key": "d",
        "text": "40px – 40px"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Quy tắc padding 3 giá trị: top (20px), right/left (40px), bottom (30px). Do đó padding-left và padding-right đều là 40px.",
      "b": "Phương án này chưa chính xác. Quy tắc padding 3 giá trị: top (20px), right/left (40px), bottom (30px). Do đó padding-left và padding-right đều là 40px.",
      "c": "Phương án này chưa chính xác. Quy tắc padding 3 giá trị: top (20px), right/left (40px), bottom (30px). Do đó padding-left và padding-right đều là 40px.",
      "d": "[Chủ đề: CSS Padding Shorthand] Quy tắc padding 3 giá trị: top (20px), right/left (40px), bottom (30px). Do đó padding-left và padding-right đều là 40px."
    }
  },
  {
    "id": 507,
    "question": "Thuộc tính HTML dùng để viết inline CSS là:",
    "options": [
      {
        "key": "a",
        "text": "class"
      },
      {
        "key": "b",
        "text": "style"
      },
      {
        "key": "c",
        "text": "css"
      },
      {
        "key": "d",
        "text": "font"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Để viết CSS inline trực tiếp vào một thẻ HTML, ta dùng thuộc tính style.",
      "b": "[Chủ đề: HTML Inline Style] Để viết CSS inline trực tiếp vào một thẻ HTML, ta dùng thuộc tính style.",
      "c": "Phương án này chưa chính xác. Để viết CSS inline trực tiếp vào một thẻ HTML, ta dùng thuộc tính style.",
      "d": "Phương án này chưa chính xác. Để viết CSS inline trực tiếp vào một thẻ HTML, ta dùng thuộc tính style."
    }
  },
  {
    "id": 508,
    "question": "Để tạo ô nhập liệu nhiều dòng, dùng thẻ nào?",
    "options": [
      {
        "key": "a",
        "text": "<textarea></textarea>"
      },
      {
        "key": "b",
        "text": "<text></text>"
      },
      {
        "key": "c",
        "text": "<input type=\"text\">"
      },
      {
        "key": "d",
        "text": "<input type=\"multitext\">"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: HTML Textarea] Thẻ <textarea> dùng để tạo ô nhập văn bản nhiều dòng cho người dùng.",
      "b": "Phương án này chưa chính xác. Thẻ <textarea> dùng để tạo ô nhập văn bản nhiều dòng cho người dùng.",
      "c": "Phương án này chưa chính xác. Thẻ <textarea> dùng để tạo ô nhập văn bản nhiều dòng cho người dùng.",
      "d": "Phương án này chưa chính xác. Thẻ <textarea> dùng để tạo ô nhập văn bản nhiều dòng cho người dùng."
    }
  },
  {
    "id": 509,
    "question": "Để upload file bằng form, cần thiết lập thuộc tính nào đúng?",
    "options": [
      {
        "key": "a",
        "text": "enctype=\"multipart/file\" và method=\"post\""
      },
      {
        "key": "b",
        "text": "Tất cả đều đúng"
      },
      {
        "key": "c",
        "text": "enctype=\"multipart/form-data\" và method=\"get\""
      },
      {
        "key": "d",
        "text": "enctype=\"multipart/form-data\" và method=\"post\""
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Để tải tệp lên qua form, thuộc tính enctype của form phải được đặt là \"multipart/form-data\" và method phải là \"post\".",
      "b": "Phương án này chưa chính xác. Để tải tệp lên qua form, thuộc tính enctype của form phải được đặt là \"multipart/form-data\" và method phải là \"post\".",
      "c": "Phương án này chưa chính xác. Để tải tệp lên qua form, thuộc tính enctype của form phải được đặt là \"multipart/form-data\" và method phải là \"post\".",
      "d": "[Chủ đề: HTML Form File Upload] Để tải tệp lên qua form, thuộc tính enctype của form phải được đặt là \"multipart/form-data\" và method phải là \"post\"."
    }
  },
  {
    "id": 510,
    "question": "Thêm thuộc tính nào vào <input type=”text” …> để không cho người dùng thay đổi giá trị của nó nhưng vẫn gửi dữ liệu lên server.",
    "options": [
      {
        "key": "a",
        "text": "readonly"
      },
      {
        "key": "b",
        "text": "change-value=\"no\""
      },
      {
        "key": "c",
        "text": "enable=\"false\""
      },
      {
        "key": "d",
        "text": "locked"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: HTML Input Attributes] Thuộc tính readonly khóa ô nhập liệu không cho người dùng chỉnh sửa nhưng trình duyệt vẫn gửi giá trị của nó khi submit form.",
      "b": "Phương án này chưa chính xác. Thuộc tính readonly khóa ô nhập liệu không cho người dùng chỉnh sửa nhưng trình duyệt vẫn gửi giá trị của nó khi submit form.",
      "c": "Phương án này chưa chính xác. Thuộc tính readonly khóa ô nhập liệu không cho người dùng chỉnh sửa nhưng trình duyệt vẫn gửi giá trị của nó khi submit form.",
      "d": "Phương án này chưa chính xác. Thuộc tính readonly khóa ô nhập liệu không cho người dùng chỉnh sửa nhưng trình duyệt vẫn gửi giá trị của nó khi submit form."
    }
  },
  {
    "id": 511,
    "question": "Để đánh dấu bookmark (liên kết trong) ta sử dụng cách nào sau đây?`(chọn 2 đáp án)`",
    "options": [
      {
        "key": "a",
        "text": "<a name=” # tên_bookmark”>…</a>"
      },
      {
        "key": "b",
        "text": "<p id=”tên_bookmark”>…</p>"
      },
      {
        "key": "c",
        "text": "<a name=”tên_bookmark”>…</a>"
      },
      {
        "key": "d",
        "text": "<p id=” # tên_bookmark”>…</p>"
      }
    ],
    "correct": [
      "b",
      "c"
    ],
    "explanations": {
      "a": "Phương án này chưa chính xác. Cả thẻ có id (ví dụ: <p id=\"tên_bookmark\">) và thẻ <a> có thuộc tính name (ví dụ: <a name=\"tên_bookmark\">) đều có thể làm bookmark neo liên kết trong trang.",
      "b": "[Chủ đề: HTML Bookmarks] Cả thẻ có id (ví dụ: <p id=\"tên_bookmark\">) và thẻ <a> có thuộc tính name (ví dụ: <a name=\"tên_bookmark\">) đều có thể làm bookmark neo liên kết trong trang.",
      "c": "[Chủ đề: HTML Bookmarks] Cả thẻ có id (ví dụ: <p id=\"tên_bookmark\">) và thẻ <a> có thuộc tính name (ví dụ: <a name=\"tên_bookmark\">) đều có thể làm bookmark neo liên kết trong trang.",
      "d": "Phương án này chưa chính xác. Cả thẻ có id (ví dụ: <p id=\"tên_bookmark\">) và thẻ <a> có thuộc tính name (ví dụ: <a name=\"tên_bookmark\">) đều có thể làm bookmark neo liên kết trong trang."
    }
  },
  {
    "id": 512,
    "question": "Thuộc tính CSS nào định dạng đối tường nằm một hàng riêng biệt?",
    "options": [
      {
        "key": "a",
        "text": "display: inline"
      },
      {
        "key": "b",
        "text": "display: inline-block"
      },
      {
        "key": "c",
        "text": "display: none"
      },
      {
        "key": "d",
        "text": "display: block"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. display: block định dạng phần tử hiển thị dạng khối, bắt đầu ở một dòng mới và chiếm toàn bộ chiều rộng có sẵn.",
      "b": "Phương án này chưa chính xác. display: block định dạng phần tử hiển thị dạng khối, bắt đầu ở một dòng mới và chiếm toàn bộ chiều rộng có sẵn.",
      "c": "Phương án này chưa chính xác. display: block định dạng phần tử hiển thị dạng khối, bắt đầu ở một dòng mới và chiếm toàn bộ chiều rộng có sẵn.",
      "d": "[Chủ đề: CSS Display block] display: block định dạng phần tử hiển thị dạng khối, bắt đầu ở một dòng mới và chiếm toàn bộ chiều rộng có sẵn."
    }
  },
  {
    "id": 513,
    "question": "Đoạn mã `This is a <span>sentence</span>` xuất ra trình duyệt là gì?",
    "options": [
      {
        "key": "a",
        "text": "This is a **sentence**"
      },
      {
        "key": "b",
        "text": "This is a sentence"
      },
      {
        "key": "c",
        "text": "This is a sentence"
      },
      {
        "key": "d",
        "text": "This is a sentence"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thẻ <span> là thẻ dạng inline và mặc định không áp dụng thêm định dạng đặc biệt nào cho văn bản bên trong.",
      "b": "Phương án này chưa chính xác. Thẻ <span> là thẻ dạng inline và mặc định không áp dụng thêm định dạng đặc biệt nào cho văn bản bên trong.",
      "c": "Phương án này chưa chính xác. Thẻ <span> là thẻ dạng inline và mặc định không áp dụng thêm định dạng đặc biệt nào cho văn bản bên trong.",
      "d": "[Chủ đề: HTML Span Tag] Thẻ <span> là thẻ dạng inline và mặc định không áp dụng thêm định dạng đặc biệt nào cho văn bản bên trong."
    }
  },
  {
    "id": 514,
    "question": "Thuộc tính nào canh chỉnh nội dung các ô theo chiều dọc trong <table> ?",
    "options": [
      {
        "key": "a",
        "text": "halign"
      },
      {
        "key": "b",
        "text": "text-align"
      },
      {
        "key": "c",
        "text": "align"
      },
      {
        "key": "d",
        "text": "valign"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thuộc tính valign dùng để căn lề nội dung các ô theo chiều dọc trong bảng.",
      "b": "Phương án này chưa chính xác. Thuộc tính valign dùng để căn lề nội dung các ô theo chiều dọc trong bảng.",
      "c": "Phương án này chưa chính xác. Thuộc tính valign dùng để căn lề nội dung các ô theo chiều dọc trong bảng.",
      "d": "[Chủ đề: HTML Table Vertical Alignment] Thuộc tính valign dùng để căn lề nội dung các ô theo chiều dọc trong bảng."
    }
  },
  {
    "id": 515,
    "question": "Đâu là cú pháp chú thích đúng trong CSS?",
    "options": [
      {
        "key": "a",
        "text": "// ..."
      },
      {
        "key": "b",
        "text": "Tất cả đều đúng"
      },
      {
        "key": "c",
        "text": "/* ... */"
      },
      {
        "key": "d",
        "text": "// ..."
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Trong CSS, cú pháp chú thích hợp lệ duy nhất là /* nội dung chú thích */.",
      "b": "Phương án này chưa chính xác. Trong CSS, cú pháp chú thích hợp lệ duy nhất là /* nội dung chú thích */.",
      "c": "[Chủ đề: CSS Comments] Trong CSS, cú pháp chú thích hợp lệ duy nhất là /* nội dung chú thích */.",
      "d": "Phương án này chưa chính xác. Trong CSS, cú pháp chú thích hợp lệ duy nhất là /* nội dung chú thích */."
    }
  },
  {
    "id": 516,
    "question": "Thuộc tính màu nền trong <table> là?",
    "options": [
      {
        "key": "a",
        "text": "bgcolor"
      },
      {
        "key": "b",
        "text": "background-image"
      },
      {
        "key": "c",
        "text": "background"
      },
      {
        "key": "d",
        "text": "bordercolor"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: HTML Table Background Color] Thuộc tính bgcolor của thẻ <table> dùng để xác định màu nền cho bảng.",
      "b": "Phương án này chưa chính xác. Thuộc tính bgcolor của thẻ <table> dùng để xác định màu nền cho bảng.",
      "c": "Phương án này chưa chính xác. Thuộc tính bgcolor của thẻ <table> dùng để xác định màu nền cho bảng.",
      "d": "Phương án này chưa chính xác. Thuộc tính bgcolor của thẻ <table> dùng để xác định màu nền cho bảng."
    }
  },
  {
    "id": 517,
    "question": "Đâu là tag tạo ra 1 danh sách đứng đầu bởi dấu chấm • ?",
    "options": [
      {
        "key": "a",
        "text": "<ol>"
      },
      {
        "key": "b",
        "text": "<dl>"
      },
      {
        "key": "c",
        "text": "<ul>"
      },
      {
        "key": "d",
        "text": "<list>"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thẻ <ul> (Unordered List) định nghĩa một danh sách không thứ tự có ký hiệu đầu dòng dạng chấm tròn.",
      "b": "Phương án này chưa chính xác. Thẻ <ul> (Unordered List) định nghĩa một danh sách không thứ tự có ký hiệu đầu dòng dạng chấm tròn.",
      "c": "[Chủ đề: HTML Unordered List] Thẻ <ul> (Unordered List) định nghĩa một danh sách không thứ tự có ký hiệu đầu dòng dạng chấm tròn.",
      "d": "Phương án này chưa chính xác. Thẻ <ul> (Unordered List) định nghĩa một danh sách không thứ tự có ký hiệu đầu dòng dạng chấm tròn."
    }
  },
  {
    "id": 518,
    "question": "Để các nút `radio` chỉ chọn được một trong nhiều lựa chọn, cần:",
    "options": [
      {
        "key": "a",
        "text": "Cùng name"
      },
      {
        "key": "b",
        "text": "Cùng value"
      },
      {
        "key": "c",
        "text": "Cùng id"
      },
      {
        "key": "d",
        "text": "Cùng class"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: HTML Radio Inputs Grouping] Để tạo nhóm các nút radio duy nhất (chọn 1 trong many), các nút đó phải có chung giá trị thuộc tính name.",
      "b": "Phương án này chưa chính xác. Để tạo nhóm các nút radio duy nhất (chọn 1 trong many), các nút đó phải có chung giá trị thuộc tính name.",
      "c": "Phương án này chưa chính xác. Để tạo nhóm các nút radio duy nhất (chọn 1 trong many), các nút đó phải có chung giá trị thuộc tính name.",
      "d": "Phương án này chưa chính xác. Để tạo nhóm các nút radio duy nhất (chọn 1 trong many), các nút đó phải có chung giá trị thuộc tính name."
    }
  },
  {
    "id": 519,
    "question": "Đâu là tag tạo ra 1 danh sách đứng đầu bằng số?",
    "options": [
      {
        "key": "a",
        "text": "<ol>"
      },
      {
        "key": "b",
        "text": "<dl>"
      },
      {
        "key": "c",
        "text": "<ul>"
      },
      {
        "key": "d",
        "text": "<list>"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: HTML Ordered List] Thẻ <ol> (Ordered List) định nghĩa danh sách có thứ tự được đánh số mặc định.",
      "b": "Phương án này chưa chính xác. Thẻ <ol> (Ordered List) định nghĩa danh sách có thứ tự được đánh số mặc định.",
      "c": "Phương án này chưa chính xác. Thẻ <ol> (Ordered List) định nghĩa danh sách có thứ tự được đánh số mặc định.",
      "d": "Phương án này chưa chính xác. Thẻ <ol> (Ordered List) định nghĩa danh sách có thứ tự được đánh số mặc định."
    }
  },
  {
    "id": 520,
    "question": "Để chọn sẵn một option trong thẻ `<select>`, cần dùng thuộc tính nào?",
    "options": [
      {
        "key": "a",
        "text": "select"
      },
      {
        "key": "b",
        "text": "check"
      },
      {
        "key": "c",
        "text": "selected"
      },
      {
        "key": "d",
        "text": "checked"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Sử dụng thuộc tính selected trong thẻ <option> để chọn sẵn một mục trong hộp select.",
      "b": "Phương án này chưa chính xác. Sử dụng thuộc tính selected trong thẻ <option> để chọn sẵn một mục trong hộp select.",
      "c": "[Chủ đề: HTML Select Selected Attribute] Sử dụng thuộc tính selected trong thẻ <option> để chọn sẵn một mục trong hộp select.",
      "d": "Phương án này chưa chính xác. Sử dụng thuộc tính selected trong thẻ <option> để chọn sẵn một mục trong hộp select."
    }
  },
  {
    "id": 521,
    "question": "Để mở liên kết trong một cửa sổ mới sử dụng thuộc tính?",
    "options": [
      {
        "key": "a",
        "text": "target=”_blank”"
      },
      {
        "key": "b",
        "text": "target=”_parent”"
      },
      {
        "key": "c",
        "text": "target=”_top”"
      },
      {
        "key": "d",
        "text": "target=”_self”"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: HTML Link Target blank] Thuộc tính target=\"_blank\" được sử dụng để mở liên kết trong một tab hoặc cửa sổ mới.",
      "b": "Phương án này chưa chính xác. Thuộc tính target=\"_blank\" được sử dụng để mở liên kết trong một tab hoặc cửa sổ mới.",
      "c": "Phương án này chưa chính xác. Thuộc tính target=\"_blank\" được sử dụng để mở liên kết trong một tab hoặc cửa sổ mới.",
      "d": "Phương án này chưa chính xác. Thuộc tính target=\"_blank\" được sử dụng để mở liên kết trong một tab hoặc cửa sổ mới."
    }
  },
  {
    "id": 522,
    "question": "Cellspacing là khoảng cách?",
    "options": [
      {
        "key": "a",
        "text": "Từ biên đến nội dung ô"
      },
      {
        "key": "b",
        "text": "Nội dung với lề phải"
      },
      {
        "key": "c",
        "text": "Giữa các ô"
      },
      {
        "key": "d",
        "text": "Nội dung với lề trái"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. cellspacing định cấu hình khoảng cách giữa các ô cạnh nhau trong bảng.",
      "b": "Phương án này chưa chính xác. cellspacing định cấu hình khoảng cách giữa các ô cạnh nhau trong bảng.",
      "c": "[Chủ đề: HTML Table Cellspacing] cellspacing định cấu hình khoảng cách giữa các ô cạnh nhau trong bảng.",
      "d": "Phương án này chưa chính xác. cellspacing định cấu hình khoảng cách giữa các ô cạnh nhau trong bảng."
    }
  },
  {
    "id": 523,
    "question": "Đâu là cú pháp tạo link đến Zalo với số điện thoại 0903762699 đúng?",
    "options": [
      {
        "key": "a",
        "text": "<a zalo=\"http://zalo.me/0903762699\">Zalo</a>"
      },
      {
        "key": "b",
        "text": "Tất cả đều đúng"
      },
      {
        "key": "c",
        "text": "<a href=\"http://zalo.me/0903762699\">Zalo</a>"
      },
      {
        "key": "d",
        "text": "<a href=\"zalo.me/0903762699\">Zalo</a>"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Cú pháp tạo liên kết chuẩn là dùng href chứa đường dẫn đầy đủ dạng URL tuyệt đối: <a href=\"http://zalo.me/...\">.",
      "b": "Phương án này chưa chính xác. Cú pháp tạo liên kết chuẩn là dùng href chứa đường dẫn đầy đủ dạng URL tuyệt đối: <a href=\"http://zalo.me/...\">.",
      "c": "[Chủ đề: HTML Link Zalo] Cú pháp tạo liên kết chuẩn là dùng href chứa đường dẫn đầy đủ dạng URL tuyệt đối: <a href=\"http://zalo.me/...\">.",
      "d": "Phương án này chưa chính xác. Cú pháp tạo liên kết chuẩn là dùng href chứa đường dẫn đầy đủ dạng URL tuyệt đối: <a href=\"http://zalo.me/...\">."
    }
  },
  {
    "id": 524,
    "question": "Cách chèn video v1.mp4 vào trang web đúng chuẩn `HTML5` là:",
    "options": [
      {
        "key": "a",
        "text": "<mp4 src=\"v1.mp4\"></mp4>"
      },
      {
        "key": "b",
        "text": "Cả a và b đúng"
      },
      {
        "key": "c",
        "text": "<video src=\"v1.mp4\"></video>"
      },
      {
        "key": "d",
        "text": "<video controls><source src=\"v1.mp4\" type=\"video/mp4\"></video>"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Cách chuẩn mực của HTML5 là dùng thẻ <video controls> kèm thẻ con <source> chỉ định src và type.",
      "b": "Phương án này chưa chính xác. Cách chuẩn mực của HTML5 là dùng thẻ <video controls> kèm thẻ con <source> chỉ định src và type.",
      "c": "Phương án này chưa chính xác. Cách chuẩn mực của HTML5 là dùng thẻ <video controls> kèm thẻ con <source> chỉ định src và type.",
      "d": "[Chủ đề: HTML5 Video] Cách chuẩn mực của HTML5 là dùng thẻ <video controls> kèm thẻ con <source> chỉ định src và type."
    }
  },
  {
    "id": 525,
    "question": "Cú pháp CSS đúng là:",
    "options": [
      {
        "key": "a",
        "text": "body {color: red;}"
      },
      {
        "key": "b",
        "text": "body {color: red;}"
      },
      {
        "key": "c",
        "text": "Body {color=red}"
      },
      {
        "key": "d",
        "text": "Body:color=red"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: CSS Syntax] Cú pháp đúng là body {color: red;} viết thường tên thẻ và sử dụng dấu hai chấm gán giá trị thuộc tính màu sắc.",
      "b": "Phương án này chưa chính xác. Cú pháp đúng là body {color: red;} viết thường tên thẻ và sử dụng dấu hai chấm gán giá trị thuộc tính màu sắc.",
      "c": "Phương án này chưa chính xác. Cú pháp đúng là body {color: red;} viết thường tên thẻ và sử dụng dấu hai chấm gán giá trị thuộc tính màu sắc.",
      "d": "Phương án này chưa chính xác. Cú pháp đúng là body {color: red;} viết thường tên thẻ và sử dụng dấu hai chấm gán giá trị thuộc tính màu sắc."
    }
  },
  {
    "id": 526,
    "question": "Phần tử nào là block mặc định?",
    "options": [
      {
        "key": "a",
        "text": "h1"
      },
      {
        "key": "b",
        "text": "Tất cả đúng"
      },
      {
        "key": "c",
        "text": "div"
      },
      {
        "key": "d",
        "text": "p"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Các thẻ h1, div, p đều hiển thị mặc định dưới dạng khối (block).",
      "b": "[Chủ đề: HTML Block Elements] Các thẻ h1, div, p đều hiển thị mặc định dưới dạng khối (block).",
      "c": "Phương án này chưa chính xác. Các thẻ h1, div, p đều hiển thị mặc định dưới dạng khối (block).",
      "d": "Phương án này chưa chính xác. Các thẻ h1, div, p đều hiển thị mặc định dưới dạng khối (block)."
    }
  },
  {
    "id": 527,
    "question": "Đoạn mã `<pre> 1    -    10 </pre>` xuất ra trình duyệt là gì?",
    "options": [
      {
        "key": "a",
        "text": "1 10"
      },
      {
        "key": "b",
        "text": "1-10"
      },
      {
        "key": "c",
        "text": "1-10"
      },
      {
        "key": "d",
        "text": "1        -        10"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thẻ <pre> bảo lưu hoàn toàn các khoảng trắng nguyên bản bên trong mã nguồn.",
      "b": "Phương án này chưa chính xác. Thẻ <pre> bảo lưu hoàn toàn các khoảng trắng nguyên bản bên trong mã nguồn.",
      "c": "Phương án này chưa chính xác. Thẻ <pre> bảo lưu hoàn toàn các khoảng trắng nguyên bản bên trong mã nguồn.",
      "d": "[Chủ đề: HTML Preformatted Text] Thẻ <pre> bảo lưu hoàn toàn các khoảng trắng nguyên bản bên trong mã nguồn."
    }
  },
  {
    "id": 528,
    "question": "Để thêm vào form một đối tượng có thể lưu giữ giá trị và gửi lên server nhưng người dùng không thể thấy được, ta sử dụng ?",
    "options": [
      {
        "key": "a",
        "text": "<input type=\"hidden\" />"
      },
      {
        "key": "b",
        "text": "<hidden type=”text”>"
      },
      {
        "key": "c",
        "text": "<input type=\"text\" hidden=\"yes\" />"
      },
      {
        "key": "d",
        "text": "<input type=\"text\" visible=\"no\" />"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: HTML Hidden Input] <input type=\"hidden\"> cho phép lưu giá trị ẩn để gửi lên máy chủ mà không xuất hiện trên giao diện trang web.",
      "b": "Phương án này chưa chính xác. <input type=\"hidden\"> cho phép lưu giá trị ẩn để gửi lên máy chủ mà không xuất hiện trên giao diện trang web.",
      "c": "Phương án này chưa chính xác. <input type=\"hidden\"> cho phép lưu giá trị ẩn để gửi lên máy chủ mà không xuất hiện trên giao diện trang web.",
      "d": "Phương án này chưa chính xác. <input type=\"hidden\"> cho phép lưu giá trị ẩn để gửi lên máy chủ mà không xuất hiện trên giao diện trang web."
    }
  },
  {
    "id": 529,
    "question": "Ô nhập liệu nào sau đây có chiều rộng là 100px ?",
    "options": [
      {
        "key": "a",
        "text": "Tất cả đều đúng"
      },
      {
        "key": "b",
        "text": "Tất cả đều sai"
      },
      {
        "key": "c",
        "text": "<input type=\"text\" width=\"100px\" />"
      },
      {
        "key": "d",
        "text": "<input type=\"text\" style=\"width:100px\" />"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Để thiết lập chiều rộng cho ô nhập liệu, sử dụng CSS inline style=\"width:100px\" là đúng chuẩn.",
      "b": "Phương án này chưa chính xác. Để thiết lập chiều rộng cho ô nhập liệu, sử dụng CSS inline style=\"width:100px\" là đúng chuẩn.",
      "c": "Phương án này chưa chính xác. Để thiết lập chiều rộng cho ô nhập liệu, sử dụng CSS inline style=\"width:100px\" là đúng chuẩn.",
      "d": "[Chủ đề: CSS Inline Width] Để thiết lập chiều rộng cho ô nhập liệu, sử dụng CSS inline style=\"width:100px\" là đúng chuẩn."
    }
  },
  {
    "id": 530,
    "question": "Để định nghĩa CSS nội bộ (internal CSS), dùng thẻ:",
    "options": [
      {
        "key": "a",
        "text": "<css>"
      },
      {
        "key": "b",
        "text": "<internal>"
      },
      {
        "key": "c",
        "text": "<style>"
      },
      {
        "key": "d",
        "text": "<link>"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thẻ <style> được sử dụng để khai báo mã CSS nội bộ (internal CSS) nằm trong tài liệu HTML.",
      "b": "Phương án này chưa chính xác. Thẻ <style> được sử dụng để khai báo mã CSS nội bộ (internal CSS) nằm trong tài liệu HTML.",
      "c": "[Chủ đề: HTML Style Tag] Thẻ <style> được sử dụng để khai báo mã CSS nội bộ (internal CSS) nằm trong tài liệu HTML.",
      "d": "Phương án này chưa chính xác. Thẻ <style> được sử dụng để khai báo mã CSS nội bộ (internal CSS) nằm trong tài liệu HTML."
    }
  },
  {
    "id": 531,
    "question": "Từ HTML là từ viết tắt của từ nào?",
    "options": [
      {
        "key": "a",
        "text": "Hyper Text Markup Language"
      },
      {
        "key": "b",
        "text": "Tất cả đều sai"
      },
      {
        "key": "c",
        "text": "Hyperlinks and Text Markup Language"
      },
      {
        "key": "d",
        "text": "Home Tool Markup Language"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: HTML Definition] HTML viết tắt của Hyper Text Markup Language (Ngôn ngữ định dạng siêu văn bản).",
      "b": "Phương án này chưa chính xác. HTML viết tắt của Hyper Text Markup Language (Ngôn ngữ định dạng siêu văn bản).",
      "c": "Phương án này chưa chính xác. HTML viết tắt của Hyper Text Markup Language (Ngôn ngữ định dạng siêu văn bản).",
      "d": "Phương án này chưa chính xác. HTML viết tắt của Hyper Text Markup Language (Ngôn ngữ định dạng siêu văn bản)."
    }
  },
  {
    "id": 532,
    "question": "Để liên kết file CSS ngoài vào HTML:",
    "options": [
      {
        "key": "a",
        "text": "<script href=\"style.css\">"
      },
      {
        "key": "b",
        "text": "<style>my.css</style>"
      },
      {
        "key": "c",
        "text": "<style src=\"my.css\">"
      },
      {
        "key": "d",
        "text": "<link rel=\"stylesheet\" href=\"style.css\">"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Sử dụng thẻ <link rel=\"stylesheet\" href=\"style.css\"> để nhúng file CSS từ bên ngoài.",
      "b": "Phương án này chưa chính xác. Sử dụng thẻ <link rel=\"stylesheet\" href=\"style.css\"> để nhúng file CSS từ bên ngoài.",
      "c": "Phương án này chưa chính xác. Sử dụng thẻ <link rel=\"stylesheet\" href=\"style.css\"> để nhúng file CSS từ bên ngoài.",
      "d": "[Chủ đề: HTML External CSS] Sử dụng thẻ <link rel=\"stylesheet\" href=\"style.css\"> để nhúng file CSS từ bên ngoài."
    }
  },
  {
    "id": 533,
    "question": "Đâu là tag tạo ra liên kết (links) trong web?",
    "options": [
      {
        "key": "a",
        "text": "<a>http://www.w3.com</a>"
      },
      {
        "key": "b",
        "text": "<a namel=\"http://www.w3.com\">Click</a>"
      },
      {
        "key": "c",
        "text": "<a url=\"http://www.w3.com\">Click</a>"
      },
      {
        "key": "d",
        "text": "<a href=\"http://www.w3.com\">Click</a>"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thẻ liên kết chuẩn là <a href=\"url\">Click</a> với thuộc tính href để chỉ đường dẫn.",
      "b": "Phương án này chưa chính xác. Thẻ liên kết chuẩn là <a href=\"url\">Click</a> với thuộc tính href để chỉ đường dẫn.",
      "c": "Phương án này chưa chính xác. Thẻ liên kết chuẩn là <a href=\"url\">Click</a> với thuộc tính href để chỉ đường dẫn.",
      "d": "[Chủ đề: HTML Anchor Tag] Thẻ liên kết chuẩn là <a href=\"url\">Click</a> với thuộc tính href để chỉ đường dẫn."
    }
  },
  {
    "id": 534,
    "question": "Để bỏ biểu tượng đánh dấu các phần tử trong một danh sách không thứ tự (<ul>) dùng thuộc tính CSS nào?",
    "options": [
      {
        "key": "a",
        "text": "style-image: none;"
      },
      {
        "key": "b",
        "text": "list-symbol: none;"
      },
      {
        "key": "c",
        "text": "list-style-type: none;"
      },
      {
        "key": "d",
        "text": "list-type: none;"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Sử dụng thuộc tính CSS list-style-type: none; để xóa ký hiệu đầu dòng tròn mặc định của danh sách.",
      "b": "Phương án này chưa chính xác. Sử dụng thuộc tính CSS list-style-type: none; để xóa ký hiệu đầu dòng tròn mặc định của danh sách.",
      "c": "[Chủ đề: CSS List Style None] Sử dụng thuộc tính CSS list-style-type: none; để xóa ký hiệu đầu dòng tròn mặc định của danh sách.",
      "d": "Phương án này chưa chính xác. Sử dụng thuộc tính CSS list-style-type: none; để xóa ký hiệu đầu dòng tròn mặc định của danh sách."
    }
  },
  {
    "id": 535,
    "question": "Đoạn mã `This is a <br />sentence` xuất ra trình duyệt là gì?",
    "options": [
      {
        "key": "a",
        "text": "This is a sentence"
      },
      {
        "key": "b",
        "text": "This is a &lt;br /&gt;sentence"
      },
      {
        "key": "c",
        "text": "This is a **sentence**"
      },
      {
        "key": "d",
        "text": "This is a   sentence"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: HTML Line Break] Thẻ <br /> bẻ gãy dòng văn bản hiện tại để đưa phần chữ phía sau xuống dòng tiếp theo.",
      "b": "Phương án này chưa chính xác. Thẻ <br /> bẻ gãy dòng văn bản hiện tại để đưa phần chữ phía sau xuống dòng tiếp theo.",
      "c": "Phương án này chưa chính xác. Thẻ <br /> bẻ gãy dòng văn bản hiện tại để đưa phần chữ phía sau xuống dòng tiếp theo.",
      "d": "Phương án này chưa chính xác. Thẻ <br /> bẻ gãy dòng văn bản hiện tại để đưa phần chữ phía sau xuống dòng tiếp theo."
    }
  },
  {
    "id": 536,
    "question": "Tag nào dùng để tạo tiêu đề kích lớn nhất?",
    "options": [
      {
        "key": "a",
        "text": "<h1>"
      },
      {
        "key": "b",
        "text": "<h6>"
      },
      {
        "key": "c",
        "text": "<heading>"
      },
      {
        "key": "d",
        "text": "<header>"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: HTML Headings] Thẻ <h1> định nghĩa tiêu đề có kích cỡ lớn nhất và giảm dần đến <h6>.",
      "b": "Phương án này chưa chính xác. Thẻ <h1> định nghĩa tiêu đề có kích cỡ lớn nhất và giảm dần đến <h6>.",
      "c": "Phương án này chưa chính xác. Thẻ <h1> định nghĩa tiêu đề có kích cỡ lớn nhất và giảm dần đến <h6>.",
      "d": "Phương án này chưa chính xác. Thẻ <h1> định nghĩa tiêu đề có kích cỡ lớn nhất và giảm dần đến <h6>."
    }
  },
  {
    "id": 537,
    "question": "Sử dung emmet trong vscode tao ra mã html sau:\n`<form action=\"\" name=\"f1\">`\n`< input type=\"text\" name=\"input1\"> < input type=\"text\" name=\"input2\">`\n`</form>`",
    "options": [
      {
        "key": "a",
        "text": "form['name=f1'][action='']>input['type-text']['name'='input$']*2"
      },
      {
        "key": "b",
        "text": "form[name=f1][action='']>input[type=text][name='input$']*2"
      },
      {
        "key": "c",
        "text": "form[name=f1][action='']>input.type=text&name=input$*2"
      },
      {
        "key": "d",
        "text": "form.name=f1[action='']> input[type=text][name='input$']*2"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Cú pháp Emmet form[name=f1][action=\"\"]>input[type=text][name=\"input$\"]*2 sẽ sinh ra thẻ form chứa 2 thẻ input.",
      "b": "[Chủ đề: Emmet Abbreviation] Cú pháp Emmet form[name=f1][action=\"\"]>input[type=text][name=\"input$\"]*2 sẽ sinh ra thẻ form chứa 2 thẻ input.",
      "c": "Phương án này chưa chính xác. Cú pháp Emmet form[name=f1][action=\"\"]>input[type=text][name=\"input$\"]*2 sẽ sinh ra thẻ form chứa 2 thẻ input.",
      "d": "Phương án này chưa chính xác. Cú pháp Emmet form[name=f1][action=\"\"]>input[type=text][name=\"input$\"]*2 sẽ sinh ra thẻ form chứa 2 thẻ input."
    }
  },
  {
    "id": 538,
    "question": "Đoạn mã `ab<c>d</c>` xuất ra trên trình duyệt là gì?",
    "options": [
      {
        "key": "a",
        "text": "abcd"
      },
      {
        "key": "b",
        "text": "Lỗi"
      },
      {
        "key": "c",
        "text": "ab<c>d</c>"
      },
      {
        "key": "d",
        "text": "abd"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: HTML Invalid Tags Rendering] Các thẻ tùy biến không hợp lệ (như <c>) sẽ bị trình duyệt bỏ qua và chỉ hiển thị phần chữ nội dung bên trong là abcd.",
      "b": "Phương án này chưa chính xác. Các thẻ tùy biến không hợp lệ (như <c>) sẽ bị trình duyệt bỏ qua và chỉ hiển thị phần chữ nội dung bên trong là abcd.",
      "c": "Phương án này chưa chính xác. Các thẻ tùy biến không hợp lệ (như <c>) sẽ bị trình duyệt bỏ qua và chỉ hiển thị phần chữ nội dung bên trong là abcd.",
      "d": "Phương án này chưa chính xác. Các thẻ tùy biến không hợp lệ (như <c>) sẽ bị trình duyệt bỏ qua và chỉ hiển thị phần chữ nội dung bên trong là abcd."
    }
  },
  {
    "id": 539,
    "question": "Đoạn mã nào sau đây canh đều 2 bên?",
    "options": [
      {
        "key": "a",
        "text": "<p style=\"align:justify\">…</p>"
      },
      {
        "key": "b",
        "text": "Tất cả đều đúng"
      },
      {
        "key": "c",
        "text": "<p align=\"justify\">…</p>"
      },
      {
        "key": "d",
        "text": "<p><justify>…</justify></p>"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thuộc tính align=\"justify\" căn chỉnh văn bản canh đều hai bên lề trong HTML.",
      "b": "Phương án này chưa chính xác. Thuộc tính align=\"justify\" căn chỉnh văn bản canh đều hai bên lề trong HTML.",
      "c": "[Chủ đề: HTML Text Alignment] Thuộc tính align=\"justify\" căn chỉnh văn bản canh đều hai bên lề trong HTML.",
      "d": "Phương án này chưa chính xác. Thuộc tính align=\"justify\" căn chỉnh văn bản canh đều hai bên lề trong HTML."
    }
  },
  {
    "id": 540,
    "question": "Để nối (trộn) các ô theo chiều ngang dùng thuộc tính?",
    "options": [
      {
        "key": "a",
        "text": "rowpan"
      },
      {
        "key": "b",
        "text": "rowspan"
      },
      {
        "key": "c",
        "text": "colpan"
      },
      {
        "key": "d",
        "text": "colspan"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thuộc tính colspan (column span) gộp các ô lại với nhau theo chiều ngang.",
      "b": "Phương án này chưa chính xác. Thuộc tính colspan (column span) gộp các ô lại với nhau theo chiều ngang.",
      "c": "Phương án này chưa chính xác. Thuộc tính colspan (column span) gộp các ô lại với nhau theo chiều ngang.",
      "d": "[Chủ đề: HTML Table Colspan] Thuộc tính colspan (column span) gộp các ô lại với nhau theo chiều ngang."
    }
  },
  {
    "id": 541,
    "question": "Để nối (trộn) các ô theo chiều dọc dùng thuộc tính?",
    "options": [
      {
        "key": "a",
        "text": "rowspan"
      },
      {
        "key": "b",
        "text": "rowpan"
      },
      {
        "key": "c",
        "text": "colpan"
      },
      {
        "key": "d",
        "text": "colspan"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: HTML Table Rowspan] Thuộc tính rowspan (row span) gộp các ô lại với nhau theo chiều dọc.",
      "b": "Phương án này chưa chính xác. Thuộc tính rowspan (row span) gộp các ô lại với nhau theo chiều dọc.",
      "c": "Phương án này chưa chính xác. Thuộc tính rowspan (row span) gộp các ô lại với nhau theo chiều dọc.",
      "d": "Phương án này chưa chính xác. Thuộc tính rowspan (row span) gộp các ô lại với nhau theo chiều dọc."
    }
  },
  {
    "id": 542,
    "question": "Cách viết CSS sau thuộc loại nào?\n`<style type=“text/css”>`\n`p {color: red; align: center }`\n`</style>`",
    "options": [
      {
        "key": "a",
        "text": "External CSS"
      },
      {
        "key": "b",
        "text": "Cả 3 đều sai"
      },
      {
        "key": "c",
        "text": "In line CSS"
      },
      {
        "key": "d",
        "text": "Internal CSS"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Mã CSS khai báo bên trong thẻ <style> đặt tại trang HTML được gọi là Internal CSS.",
      "b": "Phương án này chưa chính xác. Mã CSS khai báo bên trong thẻ <style> đặt tại trang HTML được gọi là Internal CSS.",
      "c": "Phương án này chưa chính xác. Mã CSS khai báo bên trong thẻ <style> đặt tại trang HTML được gọi là Internal CSS.",
      "d": "[Chủ đề: CSS Types] Mã CSS khai báo bên trong thẻ <style> đặt tại trang HTML được gọi là Internal CSS."
    }
  },
  {
    "id": 543,
    "question": "Đâu là mã màu green (xanh lá)?",
    "options": [
      {
        "key": "a",
        "text": "#00ff00"
      },
      {
        "key": "b",
        "text": "#ffffff"
      },
      {
        "key": "c",
        "text": "#0000ff"
      },
      {
        "key": "d",
        "text": "#ff0000"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: HTML Color Hex] #00ff00 đại diện cho màu xanh lá (Green) trong hệ màu RGB hex.",
      "b": "Phương án này chưa chính xác. #00ff00 đại diện cho màu xanh lá (Green) trong hệ màu RGB hex.",
      "c": "Phương án này chưa chính xác. #00ff00 đại diện cho màu xanh lá (Green) trong hệ màu RGB hex.",
      "d": "Phương án này chưa chính xác. #00ff00 đại diện cho màu xanh lá (Green) trong hệ màu RGB hex."
    }
  },
  {
    "id": 544,
    "question": "Đoạn mã `X<sup>2</sup>` xuất ra trình duyệt là gì?",
    "options": [
      {
        "key": "a",
        "text": "X2"
      },
      {
        "key": "b",
        "text": "<code>X&lt;sup&gt;2&lt;/sup&gt;</code>"
      },
      {
        "key": "c",
        "text": "X<sup>2</sup>"
      },
      {
        "key": "d",
        "text": "X<sub>2</sub>"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thẻ <sup> tạo chỉ số trên (superscript), do đó số 2 sẽ được nâng lên trên dạng số mũ.",
      "b": "Phương án này chưa chính xác. Thẻ <sup> tạo chỉ số trên (superscript), do đó số 2 sẽ được nâng lên trên dạng số mũ.",
      "c": "[Chủ đề: HTML Superscript] Thẻ <sup> tạo chỉ số trên (superscript), do đó số 2 sẽ được nâng lên trên dạng số mũ.",
      "d": "Phương án này chưa chính xác. Thẻ <sup> tạo chỉ số trên (superscript), do đó số 2 sẽ được nâng lên trên dạng số mũ."
    }
  },
  {
    "id": 545,
    "question": "Văn bản nào có màu đỏ:\n`<style>`\n`span, div.c2{color:red;}`\n`</style>`\n`<div class=\"c1\">Text1</div>`\n`<p>Text2</p><span>Text3</span>`",
    "options": [
      {
        "key": "a",
        "text": "Text3"
      },
      {
        "key": "b",
        "text": "Tất cả đều đúng"
      },
      {
        "key": "c",
        "text": "Text1"
      },
      {
        "key": "d",
        "text": "Text2"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: CSS Selectors Matching] Selector \"span, div.c2\" chọn thẻ <span> và thẻ <div> có class c2. Thẻ <span>Text3</span> được chọn nên có màu đỏ.",
      "b": "Phương án này chưa chính xác. Selector \"span, div.c2\" chọn thẻ <span> và thẻ <div> có class c2. Thẻ <span>Text3</span> được chọn nên có màu đỏ.",
      "c": "Phương án này chưa chính xác. Selector \"span, div.c2\" chọn thẻ <span> và thẻ <div> có class c2. Thẻ <span>Text3</span> được chọn nên có màu đỏ.",
      "d": "Phương án này chưa chính xác. Selector \"span, div.c2\" chọn thẻ <span> và thẻ <div> có class c2. Thẻ <span>Text3</span> được chọn nên có màu đỏ."
    }
  },
  {
    "id": 546,
    "question": "Định dạng font chữ là Times New Roman bằng CSS thì lựa chọn nào sau đây đúng nhất ?",
    "options": [
      {
        "key": "a",
        "text": "font-family: \"Times New Roman\""
      },
      {
        "key": "b",
        "text": "font-family: Times New Roman"
      },
      {
        "key": "c",
        "text": "font-face: \"Times New Roman\""
      },
      {
        "key": "d",
        "text": "font-face: Times New Roman"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: CSS Font Family] Đối với tên phông chữ có chứa khoảng trắng, ta bắt buộc phải đặt tên đó trong dấu nháy kép: font-family: \"Times New Roman\".",
      "b": "Phương án này chưa chính xác. Đối với tên phông chữ có chứa khoảng trắng, ta bắt buộc phải đặt tên đó trong dấu nháy kép: font-family: \"Times New Roman\".",
      "c": "Phương án này chưa chính xác. Đối với tên phông chữ có chứa khoảng trắng, ta bắt buộc phải đặt tên đó trong dấu nháy kép: font-family: \"Times New Roman\".",
      "d": "Phương án này chưa chính xác. Đối với tên phông chữ có chứa khoảng trắng, ta bắt buộc phải đặt tên đó trong dấu nháy kép: font-family: \"Times New Roman\"."
    }
  },
  {
    "id": 547,
    "question": "Thuộc tính nào để làm mờ đối tượng ?",
    "options": [
      {
        "key": "a",
        "text": "transparent"
      },
      {
        "key": "b",
        "text": "Tất cả đều sai"
      },
      {
        "key": "c",
        "text": "opacity"
      },
      {
        "key": "d",
        "text": "blur"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thuộc tính opacity dùng để chỉnh độ mờ/trong suốt của phần tử từ 0 đến 1.",
      "b": "Phương án này chưa chính xác. Thuộc tính opacity dùng để chỉnh độ mờ/trong suốt của phần tử từ 0 đến 1.",
      "c": "[Chủ đề: CSS Opacity] Thuộc tính opacity dùng để chỉnh độ mờ/trong suốt của phần tử từ 0 đến 1.",
      "d": "Phương án này chưa chính xác. Thuộc tính opacity dùng để chỉnh độ mờ/trong suốt của phần tử từ 0 đến 1."
    }
  },
  {
    "id": 548,
    "question": "Đâu là tag để xuống dòng trong web?",
    "options": [
      {
        "key": "a",
        "text": "<break>"
      },
      {
        "key": "b",
        "text": "Tất cả đều sai"
      },
      {
        "key": "c",
        "text": "<lb>"
      },
      {
        "key": "d",
        "text": "<br>"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thẻ <br> (hoặc <br />) tạo ngắt dòng xuống dòng tiếp theo trong trang web.",
      "b": "Phương án này chưa chính xác. Thẻ <br> (hoặc <br />) tạo ngắt dòng xuống dòng tiếp theo trong trang web.",
      "c": "Phương án này chưa chính xác. Thẻ <br> (hoặc <br />) tạo ngắt dòng xuống dòng tiếp theo trong trang web.",
      "d": "[Chủ đề: HTML Line Break Tag] Thẻ <br> (hoặc <br />) tạo ngắt dòng xuống dòng tiếp theo trong trang web."
    }
  },
  {
    "id": 549,
    "question": "Tag nào tạo ra 1 drop-down list?",
    "options": [
      {
        "key": "a",
        "text": "<input type=\"dropdown\">"
      },
      {
        "key": "b",
        "text": "<input type=\"list\">"
      },
      {
        "key": "c",
        "text": "<select>"
      },
      {
        "key": "d",
        "text": "<list>"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thẻ <select> kết hợp các thẻ con <option> dùng để tạo danh sách lựa chọn dạng thả xuống.",
      "b": "Phương án này chưa chính xác. Thẻ <select> kết hợp các thẻ con <option> dùng để tạo danh sách lựa chọn dạng thả xuống.",
      "c": "[Chủ đề: HTML Dropdown List select] Thẻ <select> kết hợp các thẻ con <option> dùng để tạo danh sách lựa chọn dạng thả xuống.",
      "d": "Phương án này chưa chính xác. Thẻ <select> kết hợp các thẻ con <option> dùng để tạo danh sách lựa chọn dạng thả xuống."
    }
  },
  {
    "id": 550,
    "question": "Đoạn văn bản nào sẽ có màu red:\n`<style> li:nth-child(2n+1){color:red;} </style>`\n`<ul>`\n`<li>Text1</li>`\n`<li>Text2</li>`\n`<li>Text3</li>`\n`<li>Text4</li>`\n`</ul>`",
    "options": [
      {
        "key": "a",
        "text": "text1, text3"
      },
      {
        "key": "b",
        "text": "text1, text2, text3, text4"
      },
      {
        "key": "c",
        "text": "text1, text2"
      },
      {
        "key": "d",
        "text": "text2, text4"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: CSS Pseudo-class nth-child] li:nth-child(2n+1) chọn các thẻ li ở chỉ mục lẻ (1, 3, 5...). Do đó Text1 (dòng 1) và Text3 (dòng 3) sẽ có màu đỏ.",
      "b": "Phương án này chưa chính xác. li:nth-child(2n+1) chọn các thẻ li ở chỉ mục lẻ (1, 3, 5...). Do đó Text1 (dòng 1) và Text3 (dòng 3) sẽ có màu đỏ.",
      "c": "Phương án này chưa chính xác. li:nth-child(2n+1) chọn các thẻ li ở chỉ mục lẻ (1, 3, 5...). Do đó Text1 (dòng 1) và Text3 (dòng 3) sẽ có màu đỏ.",
      "d": "Phương án này chưa chính xác. li:nth-child(2n+1) chọn các thẻ li ở chỉ mục lẻ (1, 3, 5...). Do đó Text1 (dòng 1) và Text3 (dòng 3) sẽ có màu đỏ."
    }
  },
  {
    "id": 551,
    "question": "Trong CSS, để canh vị trí hình nền nằm giữa, ta sử dụng thuộc tính nào?",
    "options": [
      {
        "key": "a",
        "text": "background-attachment"
      },
      {
        "key": "b",
        "text": "background-position"
      },
      {
        "key": "c",
        "text": "background-align"
      },
      {
        "key": "d",
        "text": "background-center"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thuộc tính background-position: center; căn chỉnh hình nền vào chính giữa phần tử.",
      "b": "[Chủ đề: CSS Background Position] Thuộc tính background-position: center; căn chỉnh hình nền vào chính giữa phần tử.",
      "c": "Phương án này chưa chính xác. Thuộc tính background-position: center; căn chỉnh hình nền vào chính giữa phần tử.",
      "d": "Phương án này chưa chính xác. Thuộc tính background-position: center; căn chỉnh hình nền vào chính giữa phần tử."
    }
  },
  {
    "id": 552,
    "question": "Để hiển thị 2 khoảng trắng giữa text1 và text2 trên trình duyệt, cách nào đúng?",
    "options": [
      {
        "key": "a",
        "text": "Cả a và b đúng"
      },
      {
        "key": "b",
        "text": "Cả a và b sai"
      },
      {
        "key": "c",
        "text": "text1 text2 (2 khoảng trắng)"
      },
      {
        "key": "d",
        "text": "text1  text2"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Trình duyệt nén nhiều khoảng trắng thường thành 1 khoảng trắng duy nhất. Để hiện 2 khoảng trắng, ta phải dùng thực thể ký tự &nbsp;&nbsp; (hoặc dấu cách cứng trong một số phương án hiển thị).",
      "b": "[Chủ đề: HTML Spaces &nbsp;] Trình duyệt nén nhiều khoảng trắng thường thành 1 khoảng trắng duy nhất. Để hiện 2 khoảng trắng, ta phải dùng thực thể ký tự &nbsp;&nbsp; (hoặc dấu cách cứng trong một số phương án hiển thị).",
      "c": "Phương án này chưa chính xác. Trình duyệt nén nhiều khoảng trắng thường thành 1 khoảng trắng duy nhất. Để hiện 2 khoảng trắng, ta phải dùng thực thể ký tự &nbsp;&nbsp; (hoặc dấu cách cứng trong một số phương án hiển thị).",
      "d": "Phương án này chưa chính xác. Trình duyệt nén nhiều khoảng trắng thường thành 1 khoảng trắng duy nhất. Để hiện 2 khoảng trắng, ta phải dùng thực thể ký tự &nbsp;&nbsp; (hoặc dấu cách cứng trong một số phương án hiển thị)."
    }
  },
  {
    "id": 553,
    "question": "Trong <table> sử dụng thẻ <th> nội dung sẽ tự động?",
    "options": [
      {
        "key": "a",
        "text": "Canh giữa ô"
      },
      {
        "key": "b",
        "text": "Tất cả đều sai"
      },
      {
        "key": "c",
        "text": "Canh đều 2 bên"
      },
      {
        "key": "d",
        "text": "Canh phải"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: HTML Table Header] Mặc định thẻ <th> căn giữa ô và hiển thị chữ in đậm.",
      "b": "Phương án này chưa chính xác. Mặc định thẻ <th> căn giữa ô và hiển thị chữ in đậm.",
      "c": "Phương án này chưa chính xác. Mặc định thẻ <th> căn giữa ô và hiển thị chữ in đậm.",
      "d": "Phương án này chưa chính xác. Mặc định thẻ <th> căn giữa ô và hiển thị chữ in đậm."
    }
  },
  {
    "id": 554,
    "question": "Để chèn hình `1.jpg` nằm trong thư mục cha, cú pháp đúng là:",
    "options": [
      {
        "key": "a",
        "text": "<img src=\"../../1.jpg\">"
      },
      {
        "key": "b",
        "text": "<img src=\"../1.jpg\">"
      },
      {
        "key": "c",
        "text": "<img src=\"/1.jpg\">"
      },
      {
        "key": "d",
        "text": "<img src=\"1.jpg\">"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Ký hiệu \"../\" đại diện cho thư mục cha của thư mục chứa file hiện tại. Do đó cú pháp đúng là <img src=\"../1.jpg\">.",
      "b": "[Chủ đề: HTML Relative Paths] Ký hiệu \"../\" đại diện cho thư mục cha của thư mục chứa file hiện tại. Do đó cú pháp đúng là <img src=\"../1.jpg\">.",
      "c": "Phương án này chưa chính xác. Ký hiệu \"../\" đại diện cho thư mục cha của thư mục chứa file hiện tại. Do đó cú pháp đúng là <img src=\"../1.jpg\">.",
      "d": "Phương án này chưa chính xác. Ký hiệu \"../\" đại diện cho thư mục cha của thư mục chứa file hiện tại. Do đó cú pháp đúng là <img src=\"../1.jpg\">."
    }
  },
  {
    "id": 555,
    "question": "Trong textfield <input type=”text” /> thuộc tính nào giới hạn số ký tự nhập vào?",
    "options": [
      {
        "key": "a",
        "text": "width"
      },
      {
        "key": "b",
        "text": "value"
      },
      {
        "key": "c",
        "text": "size"
      },
      {
        "key": "d",
        "text": "maxlenght"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thuộc tính maxlength (trong đề ghi nhầm thành maxlenght) dùng để khống chế chiều dài ký tự nhập tối đa của input.",
      "b": "Phương án này chưa chính xác. Thuộc tính maxlength (trong đề ghi nhầm thành maxlenght) dùng để khống chế chiều dài ký tự nhập tối đa của input.",
      "c": "Phương án này chưa chính xác. Thuộc tính maxlength (trong đề ghi nhầm thành maxlenght) dùng để khống chế chiều dài ký tự nhập tối đa của input.",
      "d": "[Chủ đề: HTML Maxlength] Thuộc tính maxlength (trong đề ghi nhầm thành maxlenght) dùng để khống chế chiều dài ký tự nhập tối đa của input."
    }
  },
  {
    "id": 556,
    "question": "Để chuyển văn bản thành chữ in hoa, dùng thuộc tính:",
    "options": [
      {
        "key": "a",
        "text": "text-transform"
      },
      {
        "key": "b",
        "text": "uppercase"
      },
      {
        "key": "c",
        "text": "letter-spacing"
      },
      {
        "key": "d",
        "text": "word-spacing"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: CSS Text Transform Uppercase] Thuộc tính CSS text-transform: uppercase; dùng để hiển thị toàn bộ chữ in hoa.",
      "b": "Phương án này chưa chính xác. Thuộc tính CSS text-transform: uppercase; dùng để hiển thị toàn bộ chữ in hoa.",
      "c": "Phương án này chưa chính xác. Thuộc tính CSS text-transform: uppercase; dùng để hiển thị toàn bộ chữ in hoa.",
      "d": "Phương án này chưa chính xác. Thuộc tính CSS text-transform: uppercase; dùng để hiển thị toàn bộ chữ in hoa."
    }
  },
  {
    "id": 557,
    "question": "Cellpadding là khoảng cách?",
    "options": [
      {
        "key": "a",
        "text": "Từ biên đến nội dung ô"
      },
      {
        "key": "b",
        "text": "Nội dung với lề phải"
      },
      {
        "key": "c",
        "text": "Giữa các ô"
      },
      {
        "key": "d",
        "text": "Nội dung với lề trái"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: HTML Table Cellpadding] cellpadding quy định khoảng đệm từ đường viền ô đến nội dung văn bản bên trong ô.",
      "b": "Phương án này chưa chính xác. cellpadding quy định khoảng đệm từ đường viền ô đến nội dung văn bản bên trong ô.",
      "c": "Phương án này chưa chính xác. cellpadding quy định khoảng đệm từ đường viền ô đến nội dung văn bản bên trong ô.",
      "d": "Phương án này chưa chính xác. cellpadding quy định khoảng đệm từ đường viền ô đến nội dung văn bản bên trong ô."
    }
  },
  {
    "id": 558,
    "question": "Thuộc tính CSS nào xác định ảnh nền đứng yên hay di chuyển khi scroll?",
    "options": [
      {
        "key": "a",
        "text": "background-image"
      },
      {
        "key": "b",
        "text": "background-repeat"
      },
      {
        "key": "c",
        "text": "background-attachment"
      },
      {
        "key": "d",
        "text": "background-position"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thuộc tính background-attachment cấu hình ảnh nền đứng yên (fixed) hoặc di chuyển khi cuộn trang.",
      "b": "Phương án này chưa chính xác. Thuộc tính background-attachment cấu hình ảnh nền đứng yên (fixed) hoặc di chuyển khi cuộn trang.",
      "c": "[Chủ đề: CSS Background Attachment] Thuộc tính background-attachment cấu hình ảnh nền đứng yên (fixed) hoặc di chuyển khi cuộn trang.",
      "d": "Phương án này chưa chính xác. Thuộc tính background-attachment cấu hình ảnh nền đứng yên (fixed) hoặc di chuyển khi cuộn trang."
    }
  },
  {
    "id": 559,
    "question": "Đâu là tag tạo ra chữ in nghiêng?",
    "options": [
      {
        "key": "a",
        "text": "<i>"
      },
      {
        "key": "b",
        "text": "Cả <em> và <i>"
      },
      {
        "key": "c",
        "text": "<em>"
      },
      {
        "key": "d",
        "text": "<italics>"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Cả thẻ <i> (italic) và thẻ <em> (emphasis) đều hiển thị văn bản in nghiêng trên trình duyệt.",
      "b": "[Chủ đề: HTML Italic Tags] Cả thẻ <i> (italic) và thẻ <em> (emphasis) đều hiển thị văn bản in nghiêng trên trình duyệt.",
      "c": "Phương án này chưa chính xác. Cả thẻ <i> (italic) và thẻ <em> (emphasis) đều hiển thị văn bản in nghiêng trên trình duyệt.",
      "d": "Phương án này chưa chính xác. Cả thẻ <i> (italic) và thẻ <em> (emphasis) đều hiển thị văn bản in nghiêng trên trình duyệt."
    }
  },
  {
    "id": 560,
    "question": "Phần tử nào là inline mặc định?",
    "options": [
      {
        "key": "a",
        "text": "span"
      },
      {
        "key": "b",
        "text": "h1"
      },
      {
        "key": "c",
        "text": "div"
      },
      {
        "key": "d",
        "text": "p"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: HTML Inline Elements] Thẻ <span> là thẻ hiển thị mặc định kiểu inline, không tự xuống dòng.",
      "b": "Phương án này chưa chính xác. Thẻ <span> là thẻ hiển thị mặc định kiểu inline, không tự xuống dòng.",
      "c": "Phương án này chưa chính xác. Thẻ <span> là thẻ hiển thị mặc định kiểu inline, không tự xuống dòng.",
      "d": "Phương án này chưa chính xác. Thẻ <span> là thẻ hiển thị mặc định kiểu inline, không tự xuống dòng."
    }
  },
  {
    "id": 561,
    "question": "Định nghĩa CSS sau có ý nghĩa gì?\n`input:focus { background-color: red; }`",
    "options": [
      {
        "key": "a",
        "text": "Các thẻ input có class là focus sẽ có nền màu đỏ"
      },
      {
        "key": "b",
        "text": "Các thẻ input khi được chọn (focus) sẽ có nền màu đỏ"
      },
      {
        "key": "c",
        "text": "Các thẻ input có id là focus sẽ có nền màu đỏ"
      },
      {
        "key": "d",
        "text": "Các thẻ input khi mất focus sẽ có nền màu đỏ"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Selector pseudo-class :focus chọn các trường nhập liệu khi đang nhận tiêu điểm nhấp chuột từ người dùng.",
      "b": "[Chủ đề: CSS Pseudo-class focus] Selector pseudo-class :focus chọn các trường nhập liệu khi đang nhận tiêu điểm nhấp chuột từ người dùng.",
      "c": "Phương án này chưa chính xác. Selector pseudo-class :focus chọn các trường nhập liệu khi đang nhận tiêu điểm nhấp chuột từ người dùng.",
      "d": "Phương án này chưa chính xác. Selector pseudo-class :focus chọn các trường nhập liệu khi đang nhận tiêu điểm nhấp chuột từ người dùng."
    }
  },
  {
    "id": 562,
    "question": "Tag nào dùng để tạo tiêu đề kích nhỏ nhất?",
    "options": [
      {
        "key": "a",
        "text": "<h1>"
      },
      {
        "key": "b",
        "text": "<h6>"
      },
      {
        "key": "c",
        "text": "<heading>"
      },
      {
        "key": "d",
        "text": "<header>"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thẻ <h6> đại diện cho tiêu đề có kích cỡ nhỏ nhất.",
      "b": "[Chủ đề: HTML Headings] Thẻ <h6> đại diện cho tiêu đề có kích cỡ nhỏ nhất.",
      "c": "Phương án này chưa chính xác. Thẻ <h6> đại diện cho tiêu đề có kích cỡ nhỏ nhất.",
      "d": "Phương án này chưa chính xác. Thẻ <h6> đại diện cho tiêu đề có kích cỡ nhỏ nhất."
    }
  },
  {
    "id": 563,
    "question": "Thuộc tính nào dùng để tạo gợi ý nhập liệu cho 1 text field.",
    "options": [
      {
        "key": "a",
        "text": "recommend"
      },
      {
        "key": "b",
        "text": "hint"
      },
      {
        "key": "c",
        "text": "placeholder"
      },
      {
        "key": "d",
        "text": "hint=\"Nhập số\""
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thuộc tính placeholder hiển thị gợi ý mờ trong ô nhập liệu.",
      "b": "Phương án này chưa chính xác. Thuộc tính placeholder hiển thị gợi ý mờ trong ô nhập liệu.",
      "c": "[Chủ đề: HTML Placeholder Attribute] Thuộc tính placeholder hiển thị gợi ý mờ trong ô nhập liệu.",
      "d": "Phương án này chưa chính xác. Thuộc tính placeholder hiển thị gợi ý mờ trong ô nhập liệu."
    }
  },
  {
    "id": 564,
    "question": "Thẻ nào sau đây dùng để tạo một liên kết trong trang1.html đến vị trí pos1 trong trang2.html biết 2 trang lưu trong cùng 1 thư mục?",
    "options": [
      {
        "key": "a",
        "text": "<a href=\"pos1&trang2.html\"></a>"
      },
      {
        "key": "b",
        "text": "<a href=\"trang2.html&pos1\"></a>"
      },
      {
        "key": "c",
        "text": "<a href=\"trang2.html#pos1\"></a>"
      },
      {
        "key": "d",
        "text": "<a href=\"trang2.html@pos1\"></a>"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Cú pháp liên kết đến mốc cụ thể ở trang khác là trang2.html#pos1.",
      "b": "Phương án này chưa chính xác. Cú pháp liên kết đến mốc cụ thể ở trang khác là trang2.html#pos1.",
      "c": "[Chủ đề: HTML Anchor Links] Cú pháp liên kết đến mốc cụ thể ở trang khác là trang2.html#pos1.",
      "d": "Phương án này chưa chính xác. Cú pháp liên kết đến mốc cụ thể ở trang khác là trang2.html#pos1."
    }
  },
  {
    "id": 565,
    "question": "Khi sử dụng thuộc tính display: flex, thì thuộc tính nào đi kèm xác định chiều của các item con trực tiếp",
    "options": [
      {
        "key": "a",
        "text": "flex-t"
      },
      {
        "key": "b",
        "text": "flex-grow"
      },
      {
        "key": "c",
        "text": "flex-direction"
      },
      {
        "key": "d",
        "text": "auto"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thuộc tính flex-direction xác định hướng dòng chảy các item con (row hoặc column).",
      "b": "Phương án này chưa chính xác. Thuộc tính flex-direction xác định hướng dòng chảy các item con (row hoặc column).",
      "c": "[Chủ đề: CSS Flex Direction] Thuộc tính flex-direction xác định hướng dòng chảy các item con (row hoặc column).",
      "d": "Phương án này chưa chính xác. Thuộc tính flex-direction xác định hướng dòng chảy các item con (row hoặc column)."
    }
  },
  {
    "id": 566,
    "question": "Để định dạng màu nền cho các ô thuộc dòng đầu tiên của table có id là tbl1, mã css nào đúng?",
    "options": [
      {
        "key": "a",
        "text": "table tr {background-color:#F00;}"
      },
      {
        "key": "b",
        "text": "#tbl1 tr:1 {background-color:#F00;}"
      },
      {
        "key": "c",
        "text": "#tbl1 tr:first {background-color:#F00;}"
      },
      {
        "key": "d",
        "text": "#tbl1 tr:first-child {background-color:#F00;}"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Selector #tbl1 tr:first-child sẽ áp dụng cho dòng đầu tiên của bảng có id=\"tbl1\".",
      "b": "Phương án này chưa chính xác. Selector #tbl1 tr:first-child sẽ áp dụng cho dòng đầu tiên của bảng có id=\"tbl1\".",
      "c": "Phương án này chưa chính xác. Selector #tbl1 tr:first-child sẽ áp dụng cho dòng đầu tiên của bảng có id=\"tbl1\".",
      "d": "[Chủ đề: CSS Table Selector] Selector #tbl1 tr:first-child sẽ áp dụng cho dòng đầu tiên của bảng có id=\"tbl1\"."
    }
  },
  {
    "id": 567,
    "question": "Chọn khai báo quan hệ Descendant Selector giữa div và p ?",
    "options": [
      {
        "key": "a",
        "text": "div ~ p"
      },
      {
        "key": "b",
        "text": "div p"
      },
      {
        "key": "c",
        "text": "div + p"
      },
      {
        "key": "d",
        "text": "div * p"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Quan hệ descendant (con cháu) được định nghĩa bằng dấu cách: div p.",
      "b": "[Chủ đề: CSS Descendant Selector] Quan hệ descendant (con cháu) được định nghĩa bằng dấu cách: div p.",
      "c": "Phương án này chưa chính xác. Quan hệ descendant (con cháu) được định nghĩa bằng dấu cách: div p.",
      "d": "Phương án này chưa chính xác. Quan hệ descendant (con cháu) được định nghĩa bằng dấu cách: div p."
    }
  },
  {
    "id": 568,
    "question": "Chọn khai báo quan hệ Adjacent Sibling Selector giữa div và p ?",
    "options": [
      {
        "key": "a",
        "text": "div ~ p"
      },
      {
        "key": "b",
        "text": "div > p"
      },
      {
        "key": "c",
        "text": "div + p"
      },
      {
        "key": "d",
        "text": "div * p"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Quan hệ adjacent sibling (anh em liền kề) sử dụng ký hiệu dấu cộng: div + p.",
      "b": "Phương án này chưa chính xác. Quan hệ adjacent sibling (anh em liền kề) sử dụng ký hiệu dấu cộng: div + p.",
      "c": "[Chủ đề: CSS Adjacent Sibling Selector] Quan hệ adjacent sibling (anh em liền kề) sử dụng ký hiệu dấu cộng: div + p.",
      "d": "Phương án này chưa chính xác. Quan hệ adjacent sibling (anh em liền kề) sử dụng ký hiệu dấu cộng: div + p."
    }
  },
  {
    "id": 569,
    "question": "Thuộc tính nào trong CSS định dạng kiểu border phía top của element",
    "options": [
      {
        "key": "a",
        "text": "border-style"
      },
      {
        "key": "b",
        "text": "border-top-type"
      },
      {
        "key": "c",
        "text": "border-top-family"
      },
      {
        "key": "d",
        "text": "border-top-style"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Thuộc tính border-top-style định cấu hình kiểu viền phía mép trên của phần tử.",
      "b": "Phương án này chưa chính xác. Thuộc tính border-top-style định cấu hình kiểu viền phía mép trên của phần tử.",
      "c": "Phương án này chưa chính xác. Thuộc tính border-top-style định cấu hình kiểu viền phía mép trên của phần tử.",
      "d": "[Chủ đề: CSS Border Top Style] Thuộc tính border-top-style định cấu hình kiểu viền phía mép trên của phần tử."
    }
  },
  {
    "id": 570,
    "question": "Nếu viết padding: 20px 50px 10px 30px thì padding-bottom là bao nhiêu?",
    "options": [
      {
        "key": "a",
        "text": "10px"
      },
      {
        "key": "b",
        "text": "50px"
      },
      {
        "key": "c",
        "text": "20px"
      },
      {
        "key": "d",
        "text": "30px"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: CSS Padding Bottom] Theo thứ tự top right bottom left, giá trị thứ 3 (bottom) là 10px.",
      "b": "Phương án này chưa chính xác. Theo thứ tự top right bottom left, giá trị thứ 3 (bottom) là 10px.",
      "c": "Phương án này chưa chính xác. Theo thứ tự top right bottom left, giá trị thứ 3 (bottom) là 10px.",
      "d": "Phương án này chưa chính xác. Theo thứ tự top right bottom left, giá trị thứ 3 (bottom) là 10px."
    }
  },
  {
    "id": 571,
    "question": "JavaScript là ngôn ngữ dịch mã nguồn theo kiểu nào?",
    "options": [
      {
        "key": "a",
        "text": "Biên dịch"
      },
      {
        "key": "b",
        "text": "Thông dịch"
      },
      {
        "key": "c",
        "text": "Cả biên dịch và thông dịch"
      },
      {
        "key": "d",
        "text": "Không có dạng nào"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. JavaScript là ngôn ngữ thông dịch (interpreted language), thực thi dòng lệnh trực tiếp bằng trình duyệt.",
      "b": "[Chủ đề: JavaScript Compilation Type] JavaScript là ngôn ngữ thông dịch (interpreted language), thực thi dòng lệnh trực tiếp bằng trình duyệt.",
      "c": "Phương án này chưa chính xác. JavaScript là ngôn ngữ thông dịch (interpreted language), thực thi dòng lệnh trực tiếp bằng trình duyệt.",
      "d": "Phương án này chưa chính xác. JavaScript là ngôn ngữ thông dịch (interpreted language), thực thi dòng lệnh trực tiếp bằng trình duyệt."
    }
  },
  {
    "id": 572,
    "question": "Hàm alert(...) trong JavaScript dùng để làm gì?",
    "options": [
      {
        "key": "a",
        "text": "Hiển thị một thông báo Yes, No"
      },
      {
        "key": "b",
        "text": "Hiển thị thông báo yêu cầu nhập thông tin"
      },
      {
        "key": "c",
        "text": "Hiển thị một thông báo"
      },
      {
        "key": "d",
        "text": "Không phương án nào đúng"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Hàm alert(...) hiển thị một hộp thoại cảnh báo chứa thông tin dạng văn bản.",
      "b": "Phương án này chưa chính xác. Hàm alert(...) hiển thị một hộp thoại cảnh báo chứa thông tin dạng văn bản.",
      "c": "[Chủ đề: JS Window Alert] Hàm alert(...) hiển thị một hộp thoại cảnh báo chứa thông tin dạng văn bản.",
      "d": "Phương án này chưa chính xác. Hàm alert(...) hiển thị một hộp thoại cảnh báo chứa thông tin dạng văn bản."
    }
  },
  {
    "id": 573,
    "question": "Hàm prompt(...) trong JavaScript dùng để làm gì?",
    "options": [
      {
        "key": "a",
        "text": "Hiển thị một thông báo"
      },
      {
        "key": "b",
        "text": "Hiển thị một thông báo Yes, No"
      },
      {
        "key": "c",
        "text": "Hiển thị thông báo yêu cầu nhập thông tin"
      },
      {
        "key": "d",
        "text": "Không phương án nào đúng"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Hàm prompt(...) mở hộp thoại yêu cầu người dùng nhập chuỗi thông tin đầu vào.",
      "b": "Phương án này chưa chính xác. Hàm prompt(...) mở hộp thoại yêu cầu người dùng nhập chuỗi thông tin đầu vào.",
      "c": "[Chủ đề: JS Window Prompt] Hàm prompt(...) mở hộp thoại yêu cầu người dùng nhập chuỗi thông tin đầu vào.",
      "d": "Phương án này chưa chính xác. Hàm prompt(...) mở hộp thoại yêu cầu người dùng nhập chuỗi thông tin đầu vào."
    }
  },
  {
    "id": 574,
    "question": "Đâu là kết quả của phép tính sau 2+6+'3'",
    "options": [
      {
        "key": "a",
        "text": "83"
      },
      {
        "key": "b",
        "text": "'83'"
      },
      {
        "key": "c",
        "text": "11"
      },
      {
        "key": "d",
        "text": "'11'"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Phép tính 2 + 6 thực hiện trước ra số 8. Cộng tiếp với chuỗi '3' thực hiện ghép chuỗi thu được '83'.",
      "b": "[Chủ đề: JS String Concatenation] Phép tính 2 + 6 thực hiện trước ra số 8. Cộng tiếp với chuỗi '3' thực hiện ghép chuỗi thu được '83'.",
      "c": "Phương án này chưa chính xác. Phép tính 2 + 6 thực hiện trước ra số 8. Cộng tiếp với chuỗi '3' thực hiện ghép chuỗi thu được '83'.",
      "d": "Phương án này chưa chính xác. Phép tính 2 + 6 thực hiện trước ra số 8. Cộng tiếp với chuỗi '3' thực hiện ghép chuỗi thu được '83'."
    }
  },
  {
    "id": 575,
    "question": "Trong javascript biểu thức x===y có nghĩa là:",
    "options": [
      {
        "key": "a",
        "text": "Cả x và y đều bằng nhau về giá trị, kiểu và địa chỉ tham chiếu."
      },
      {
        "key": "b",
        "text": "Cả hai đều là x và y chỉ bằng nhau về giá trị."
      },
      {
        "key": "c",
        "text": "Cả hai đều bằng nhau về giá trị và kiểu dữ liệu."
      },
      {
        "key": "d",
        "text": "Cả hai đều không giống nhau chút nào."
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Toán tử === so sánh cả giá trị lẫn kiểu dữ liệu của hai toán hạng.",
      "b": "Phương án này chưa chính xác. Toán tử === so sánh cả giá trị lẫn kiểu dữ liệu của hai toán hạng.",
      "c": "[Chủ đề: JS Strict Equality] Toán tử === so sánh cả giá trị lẫn kiểu dữ liệu của hai toán hạng.",
      "d": "Phương án này chưa chính xác. Toán tử === so sánh cả giá trị lẫn kiểu dữ liệu của hai toán hạng."
    }
  },
  {
    "id": 576,
    "question": "Trong JavaScript sự kiện Onblur thực hiện khi nào?",
    "options": [
      {
        "key": "a",
        "text": "Khi di chuyển con chuột qua form"
      },
      {
        "key": "b",
        "text": "Khi một đối tượng trong form mất focus"
      },
      {
        "key": "c",
        "text": "Khi một đối tượng trong form nhận focus"
      },
      {
        "key": "d",
        "text": "Khi di chuyển chuột vào nút lệnh"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Sự kiện onblur kích hoạt khi một phần tử biểu mẫu mất đi tiêu điểm tập trung.",
      "b": "[Chủ đề: JS Events] Sự kiện onblur kích hoạt khi một phần tử biểu mẫu mất đi tiêu điểm tập trung.",
      "c": "Phương án này chưa chính xác. Sự kiện onblur kích hoạt khi một phần tử biểu mẫu mất đi tiêu điểm tập trung.",
      "d": "Phương án này chưa chính xác. Sự kiện onblur kích hoạt khi một phần tử biểu mẫu mất đi tiêu điểm tập trung."
    }
  },
  {
    "id": 577,
    "question": "Hàm nào trong JavaScript được sử dụng để chọn tất cả các đối tượng có class=\"selector\"?",
    "options": [
      {
        "key": "a",
        "text": "querySelectorAll()"
      },
      {
        "key": "b",
        "text": "querySelector()"
      },
      {
        "key": "c",
        "text": "getElementByClass()"
      },
      {
        "key": "d",
        "text": "Cả a,b,c đều sai"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: JS Selector All] Phương thức querySelectorAll() trả về tất cả các phần tử khớp với selector lớp CSS.",
      "b": "Phương án này chưa chính xác. Phương thức querySelectorAll() trả về tất cả các phần tử khớp với selector lớp CSS.",
      "c": "Phương án này chưa chính xác. Phương thức querySelectorAll() trả về tất cả các phần tử khớp với selector lớp CSS.",
      "d": "Phương án này chưa chính xác. Phương thức querySelectorAll() trả về tất cả các phần tử khớp với selector lớp CSS."
    }
  },
  {
    "id": 578,
    "question": "Cách khai báo mảng nào trong javascript là đúng ?",
    "options": [
      {
        "key": "a",
        "text": "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")"
      },
      {
        "key": "b",
        "text": "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")"
      },
      {
        "key": "c",
        "text": "var colors = [\"red\", \"green\", \"blue\"]"
      },
      {
        "key": "d",
        "text": "var colors = \"red\", \"green\", \"blue\""
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Mảng trong JS khai báo chuẩn bằng cặp ngoặc vuông: var colors = [\"red\", \"green\", \"blue\"].",
      "b": "Phương án này chưa chính xác. Mảng trong JS khai báo chuẩn bằng cặp ngoặc vuông: var colors = [\"red\", \"green\", \"blue\"].",
      "c": "[Chủ đề: JS Array Declaration] Mảng trong JS khai báo chuẩn bằng cặp ngoặc vuông: var colors = [\"red\", \"green\", \"blue\"].",
      "d": "Phương án này chưa chính xác. Mảng trong JS khai báo chuẩn bằng cặp ngoặc vuông: var colors = [\"red\", \"green\", \"blue\"]."
    }
  },
  {
    "id": 579,
    "question": "Form có id=frm, để lấy giá trị phần tử trong form có id=n ra biến x, mã javascript là",
    "options": [
      {
        "key": "a",
        "text": "x = document.getElementById('n');"
      },
      {
        "key": "b",
        "text": "x = document.getElementById('n').value;"
      },
      {
        "key": "c",
        "text": "x = document.frm.n.value;"
      },
      {
        "key": "d",
        "text": "x = document.frm.n.value();"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Sử dụng document.getElementById('n').value để trích xuất giá trị phần tử.",
      "b": "[Chủ đề: JS DOM Value] Sử dụng document.getElementById('n').value để trích xuất giá trị phần tử.",
      "c": "Phương án này chưa chính xác. Sử dụng document.getElementById('n').value để trích xuất giá trị phần tử.",
      "d": "Phương án này chưa chính xác. Sử dụng document.getElementById('n').value để trích xuất giá trị phần tử."
    }
  },
  {
    "id": 580,
    "question": "Cho mảng arr = ['aa','bb','cc','dd']; để xóa 'bb' và 'cc' mã javascript là",
    "options": [
      {
        "key": "a",
        "text": "arr.splice(1,1);"
      },
      {
        "key": "b",
        "text": "arr.splice(1,3);"
      },
      {
        "key": "c",
        "text": "arr.splice(2,3);"
      },
      {
        "key": "d",
        "text": "arr.splice(1,2);"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. arr.splice(1, 2) bắt đầu xóa từ chỉ mục 1 (bb) và xóa đi 2 phần tử (bb và cc).",
      "b": "Phương án này chưa chính xác. arr.splice(1, 2) bắt đầu xóa từ chỉ mục 1 (bb) và xóa đi 2 phần tử (bb và cc).",
      "c": "Phương án này chưa chính xác. arr.splice(1, 2) bắt đầu xóa từ chỉ mục 1 (bb) và xóa đi 2 phần tử (bb và cc).",
      "d": "[Chủ đề: JS Array Splice] arr.splice(1, 2) bắt đầu xóa từ chỉ mục 1 (bb) và xóa đi 2 phần tử (bb và cc)."
    }
  },
  {
    "id": 581,
    "question": "Để ẩn phần tử có id=txt, mã javascript là",
    "options": [
      {
        "key": "a",
        "text": "document.getElementById('txt').display= 'none';"
      },
      {
        "key": "b",
        "text": "document.getElementById('txt').style.display= 'none';"
      },
      {
        "key": "c",
        "text": "document.getElementById('txt').css.display= 'none';"
      },
      {
        "key": "d",
        "text": "document.getElementById('txt').style.display= 'hide';"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Để ẩn phần tử, ta gán thuộc tính display trong style bằng \"none\": document.getElementById('txt').style.display = 'none'.",
      "b": "[Chủ đề: JS DOM Display] Để ẩn phần tử, ta gán thuộc tính display trong style bằng \"none\": document.getElementById('txt').style.display = 'none'.",
      "c": "Phương án này chưa chính xác. Để ẩn phần tử, ta gán thuộc tính display trong style bằng \"none\": document.getElementById('txt').style.display = 'none'.",
      "d": "Phương án này chưa chính xác. Để ẩn phần tử, ta gán thuộc tính display trong style bằng \"none\": document.getElementById('txt').style.display = 'none'."
    }
  },
  {
    "id": 582,
    "question": "Để đổi kích thước chữ của phần tử có id=txt thành 60px, mã javascript là",
    "options": [
      {
        "key": "a",
        "text": "document.getElementById('txt').style.fontSize= '60px';"
      },
      {
        "key": "b",
        "text": "document.getElementById('txt').css.fontSize= '60px';"
      },
      {
        "key": "c",
        "text": "document.getElementById('txt').style.Size= '60px';"
      },
      {
        "key": "d",
        "text": "document.getElementById('txt').fontSize= '60px';"
      }
    ],
    "correct": "a",
    "explanations": {
      "a": "[Chủ đề: JS DOM Font Size] Sử dụng style.fontSize = '60px' để cập nhật kích thước chữ qua JavaScript.",
      "b": "Phương án này chưa chính xác. Sử dụng style.fontSize = '60px' để cập nhật kích thước chữ qua JavaScript.",
      "c": "Phương án này chưa chính xác. Sử dụng style.fontSize = '60px' để cập nhật kích thước chữ qua JavaScript.",
      "d": "Phương án này chưa chính xác. Sử dụng style.fontSize = '60px' để cập nhật kích thước chữ qua JavaScript."
    }
  },
  {
    "id": 583,
    "question": "Để xóa phần tử thứ 1 có class là class1 bằng jQuery là:",
    "options": [
      {
        "key": "a",
        "text": "$('#class1')[0].remove();"
      },
      {
        "key": "b",
        "text": "$('.class1')[0].remove();"
      },
      {
        "key": "c",
        "text": "$('#class1')[1].remove();"
      },
      {
        "key": "d",
        "text": "$('.class1')[1].remove();"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. $('.class1')[0].remove() truy cập phần tử thứ nhất ở chỉ mục 0 của mảng jQuery.",
      "b": "[Chủ đề: jQuery remove] $('.class1')[0].remove() truy cập phần tử thứ nhất ở chỉ mục 0 của mảng jQuery.",
      "c": "Phương án này chưa chính xác. $('.class1')[0].remove() truy cập phần tử thứ nhất ở chỉ mục 0 của mảng jQuery.",
      "d": "Phương án này chưa chính xác. $('.class1')[0].remove() truy cập phần tử thứ nhất ở chỉ mục 0 của mảng jQuery."
    }
  },
  {
    "id": 584,
    "question": "Để xóa phần tử thứ 2 có class là class1 bằng jQuery là:",
    "options": [
      {
        "key": "a",
        "text": "$('.class1')[0].remove();"
      },
      {
        "key": "b",
        "text": "$('#class1')[0].remove();"
      },
      {
        "key": "c",
        "text": "$('.class1')[1].remove();"
      },
      {
        "key": "d",
        "text": "$('#class1')[1].remove();"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. $('.class1')[1].remove() truy cập phần tử thứ hai ở chỉ mục 1.",
      "b": "Phương án này chưa chính xác. $('.class1')[1].remove() truy cập phần tử thứ hai ở chỉ mục 1.",
      "c": "[Chủ đề: jQuery remove] $('.class1')[1].remove() truy cập phần tử thứ hai ở chỉ mục 1.",
      "d": "Phương án này chưa chính xác. $('.class1')[1].remove() truy cập phần tử thứ hai ở chỉ mục 1."
    }
  },
  {
    "id": 585,
    "question": "Tìm phần tử đầu tiên `<p>` và thay đổi giá trị của phần tử đó thành \"Hello\", mã javascript là",
    "options": [
      {
        "key": "a",
        "text": "document.getElementsByName('p')[0].innerHTML = 'Hello';"
      },
      {
        "key": "b",
        "text": "document.getElementsByTagName('p')[0].innerHTML = 'Hello';"
      },
      {
        "key": "c",
        "text": "document.getElementsByName('p')[1].innerHTML = 'Hello';"
      },
      {
        "key": "d",
        "text": "document.getElementsByTagName('p')[0].innerText = 'Hello';"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Sử dụng document.getElementsByTagName('p')[0].innerHTML = 'Hello' để thay đổi nội dung phần tử.",
      "b": "[Chủ đề: JS DOM innerHTML] Sử dụng document.getElementsByTagName('p')[0].innerHTML = 'Hello' để thay đổi nội dung phần tử.",
      "c": "Phương án này chưa chính xác. Sử dụng document.getElementsByTagName('p')[0].innerHTML = 'Hello' để thay đổi nội dung phần tử.",
      "d": "Phương án này chưa chính xác. Sử dụng document.getElementsByTagName('p')[0].innerHTML = 'Hello' để thay đổi nội dung phần tử."
    }
  },
  {
    "id": 586,
    "question": "Tìm phần tử thứ 2 `<p>` và thay đổi giá trị của phần tử đó thành \"Hello\", mã javascript là",
    "options": [
      {
        "key": "a",
        "text": "document.getElementsByName('p')[0].innerHTML = 'Hello';"
      },
      {
        "key": "b",
        "text": "document.getElementsByName('p')[1].innerHTML = 'Hello';"
      },
      {
        "key": "c",
        "text": "document.getElementsByTagName('p')[0].innerText = 'Hello';"
      },
      {
        "key": "d",
        "text": "document.getElementsByTagName('p')[1].innerHTML = 'Hello';"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Sử dụng document.getElementsByTagName('p')[1].innerHTML = 'Hello' thay đổi nội dung phần tử thứ hai.",
      "b": "Phương án này chưa chính xác. Sử dụng document.getElementsByTagName('p')[1].innerHTML = 'Hello' thay đổi nội dung phần tử thứ hai.",
      "c": "Phương án này chưa chính xác. Sử dụng document.getElementsByTagName('p')[1].innerHTML = 'Hello' thay đổi nội dung phần tử thứ hai.",
      "d": "[Chủ đề: JS DOM innerHTML] Sử dụng document.getElementsByTagName('p')[1].innerHTML = 'Hello' thay đổi nội dung phần tử thứ hai."
    }
  },
  {
    "id": 587,
    "question": "Để đổi màu chữ của phần tử có name=n thành 'red', mã javascript là",
    "options": [
      {
        "key": "a",
        "text": "document.getElementsByName('n').color='red';"
      },
      {
        "key": "b",
        "text": "document.getElementsByName('n').add.color='red';"
      },
      {
        "key": "c",
        "text": "document.getElementsByName('n')[0].css.color='red';"
      },
      {
        "key": "d",
        "text": "document.getElementsByName('n')[0].style.color='red';"
      }
    ],
    "correct": "d",
    "explanations": {
      "a": "Phương án này chưa chính xác. Sử dụng document.getElementsByName('n')[0].style.color = 'red' để đổi màu chữ phần tử đầu tiên có name=n.",
      "b": "Phương án này chưa chính xác. Sử dụng document.getElementsByName('n')[0].style.color = 'red' để đổi màu chữ phần tử đầu tiên có name=n.",
      "c": "Phương án này chưa chính xác. Sử dụng document.getElementsByName('n')[0].style.color = 'red' để đổi màu chữ phần tử đầu tiên có name=n.",
      "d": "[Chủ đề: JS DOM Color] Sử dụng document.getElementsByName('n')[0].style.color = 'red' để đổi màu chữ phần tử đầu tiên có name=n."
    }
  },
  {
    "id": 588,
    "question": "Để lấy giá trị tên thuộc tính đầu tiên của phần tử (nút) Button thứ 1 ra biến a, mã javascript là",
    "options": [
      {
        "key": "a",
        "text": "a = document.getElementsByName(\"BUTTON\")[0].attributes[0].name;"
      },
      {
        "key": "b",
        "text": "a = document.getElementsByName(\"BUTTON\")[0].attributes[1].name;"
      },
      {
        "key": "c",
        "text": "a = document.getElementsByTagName(\"BUTTON\")[0].attributes[0].name;"
      },
      {
        "key": "d",
        "text": "a = document.getElementsByTagName(\"BUTTON\")[1].attributes[0].name;"
      }
    ],
    "correct": "c",
    "explanations": {
      "a": "Phương án này chưa chính xác. Nút đầu tiên ở chỉ mục 0 và thuộc tính đầu tiên là attributes[0]. Do đó: document.getElementsByTagName(\"BUTTON\")[0].attributes[0].name.",
      "b": "Phương án này chưa chính xác. Nút đầu tiên ở chỉ mục 0 và thuộc tính đầu tiên là attributes[0]. Do đó: document.getElementsByTagName(\"BUTTON\")[0].attributes[0].name.",
      "c": "[Chủ đề: JS DOM Attributes] Nút đầu tiên ở chỉ mục 0 và thuộc tính đầu tiên là attributes[0]. Do đó: document.getElementsByTagName(\"BUTTON\")[0].attributes[0].name.",
      "d": "Phương án này chưa chính xác. Nút đầu tiên ở chỉ mục 0 và thuộc tính đầu tiên là attributes[0]. Do đó: document.getElementsByTagName(\"BUTTON\")[0].attributes[0].name."
    }
  },
  {
    "id": 589,
    "question": "Để lấy giá trị tên thuộc tính đầu tiên của phần tử (nút) Button thứ 2 ra biến a, mã javascript là",
    "options": [
      {
        "key": "a",
        "text": "a = document.getElementsByTagName(\"BUTTON\")[0].attributes[0].name;"
      },
      {
        "key": "b",
        "text": "a = document.getElementsByTagName(\"BUTTON\")[1].attributes[0].name;"
      },
      {
        "key": "c",
        "text": "a = document.getElementsByName(\"BUTTON\")[0].attributes[0].name;"
      },
      {
        "key": "d",
        "text": "a = document.getElementsByName(\"BUTTON\")[1].attributes[0].name;"
      }
    ],
    "correct": "b",
    "explanations": {
      "a": "Phương án này chưa chính xác. Nút thứ hai ở chỉ mục 1 và thuộc tính đầu tiên là attributes[0]. Do đó: document.getElementsByTagName(\"BUTTON\")[1].attributes[0].name.",
      "b": "[Chủ đề: JS DOM Attributes] Nút thứ hai ở chỉ mục 1 và thuộc tính đầu tiên là attributes[0]. Do đó: document.getElementsByTagName(\"BUTTON\")[1].attributes[0].name.",
      "c": "Phương án này chưa chính xác. Nút thứ hai ở chỉ mục 1 và thuộc tính đầu tiên là attributes[0]. Do đó: document.getElementsByTagName(\"BUTTON\")[1].attributes[0].name.",
      "d": "Phương án này chưa chính xác. Nút thứ hai ở chỉ mục 1 và thuộc tính đầu tiên là attributes[0]. Do đó: document.getElementsByTagName(\"BUTTON\")[1].attributes[0].name."
    }
  }
];
