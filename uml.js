// Helper to escape HTML to prevent XSS/injection in preview
function escapeHTML(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ----------------------------------------------------
// UML DATA & EXERCISES DATABASE
// ----------------------------------------------------
const UML_EXERCISES = [
  {
    title: "Vẽ sơ đồ Use Case: Hệ thống Quản lý Thư viện 📚",
    description: `<p><strong>Mô tả bài toán:</strong> Thiết kế sơ đồ Use Case cho một hệ thống quản lý thư viện trường học. Hệ thống phục vụ 3 nhóm người dùng chính: Độc giả (Sinh viên/Giảng viên), Thủ thư và Quản trị viên hệ thống.</p>
    <ul style="margin-left: 20px; margin-top: 8px;">
      <li><strong>Độc giả</strong> có thể tìm kiếm sách, xem thông tin sách, đăng ký mượn sách trực tuyến và xem danh sách sách mình đang mượn cùng tiền phạt quá hạn (nếu có).</li>
      <li><strong>Thủ thư</strong> chịu trách nhiệm quản lý danh mục sách (thêm sách mới, sửa/xóa sách), ghi nhận hoạt động mượn sách, xác nhận trả sách và xử lý phạt tiền độc giả trả sách muộn.</li>
      <li><strong>Quản trị viên</strong> quản lý tài khoản người dùng của toàn hệ thống (thêm, cấp quyền, khóa tài khoản).</li>
      <li>Tất cả tác nhân đều phải <strong>Đăng nhập</strong> trước khi thực hiện các hoạt động chuyên môn của mình.</li>
    </ul>`,
    analysis: `<p>Phân tích chi tiết thành phần hệ thống:</p>
    <ul style="margin-left: 20px; margin-top: 8px;">
      <li><strong>Tác nhân (Actors):</strong>
        <ul>
          <li><strong>Độc giả (Reader)</strong>: Tác nhân chính thực hiện các chức năng tra cứu và mượn sách.</li>
          <li><strong>Thủ thư (Librarian)</strong>: Tác nhân quản lý vận hành kho sách và hoạt động mượn/trả.</li>
          <li><strong>Quản trị viên (Admin)</strong>: Tác nhân cấu hình tài khoản hệ thống.</li>
        </ul>
      </li>
      <li><strong>Các ca sử dụng (Use Cases) chính:</strong>
        <ul>
          <li>Tra cứu sách, Đăng ký mượn, Xem lịch sử mượn.</li>
          <li>Quản lý sách, Xác nhận mượn/trả, Xử lý phạt quá hạn.</li>
          <li>Quản lý tài khoản.</li>
          <li>Đăng nhập (dùng chung cho cả 3 tác nhân).</li>
        </ul>
      </li>
      <li><strong>Quan hệ chính:</strong>
        <ul>
          <li>Các Use Case nghiệp vụ cụ thể sẽ có mối quan hệ <code>&lt;&lt;include&gt;&gt;</code> tới Use Case Đăng nhập (vì bắt buộc phải đăng nhập trước).</li>
        </ul>
      </li>
    </ul>`,
    initialCode: `graph LR
    %% Hãy vẽ sơ đồ của bạn ở đây!
    %% Định nghĩa các Actor
    Reader[Độc giả 👤]
    Librarian[Thủ thư 👤]
    
    %% Định nghĩa các Use Case
    UC_Login((Đăng nhập))
    UC_Search((Tra cứu sách))
    UC_Borrow((Đăng ký mượn))
    
    %% Mối liên kết giữa Actor và Use Case
    Reader --> UC_Search
    Reader --> UC_Borrow
    
    %% Mối quan hệ include / extend
    UC_Borrow -.->|include| UC_Login`,
    modelCode: `graph LR
    %% Định nghĩa các Actor
    Reader[Độc giả 👤]
    Librarian[Thủ thư 👤]
    Admin[Quản trị viên 👤]
    
    %% Định nghĩa các Use Case
    UC_Login((Đăng nhập))
    UC_Search((Tra cứu sách))
    UC_Borrow((Đăng ký mượn))
    UC_History((Xem lịch sử mượn))
    UC_ManageBooks((Quản lý đầu sách))
    UC_RecordLoan((Ghi nhận mượn/trả))
    UC_Penalty((Xử lý phạt quá hạn))
    UC_ManageUsers((Quản lý tài khoản))
    
    %% Liên kết cho Độc giả
    Reader --> UC_Search
    Reader --> UC_Borrow
    Reader --> UC_History
    
    %% Liên kết cho Thủ thư
    Librarian --> UC_ManageBooks
    Librarian --> UC_RecordLoan
    Librarian --> UC_Penalty
    
    %% Liên kết cho Admin
    Admin --> UC_ManageUsers
    
    %% Mối quan hệ include (Bắt buộc đăng nhập trước)
    UC_Borrow -.->|include| UC_Login
    UC_History -.->|include| UC_Login
    UC_ManageBooks -.->|include| UC_Login
    UC_RecordLoan -.->|include| UC_Login
    UC_Penalty -.->|include| UC_Login
    UC_ManageUsers -.->|include| UC_Login`
  },
  {
    title: "Vẽ sơ đồ Use Case: Hệ thống Bán hàng Online 🛒",
    description: `<p><strong>Mô tả bài toán:</strong> Thiết kế sơ đồ Use Case cho website bán hàng trực tuyến.</p>
    <ul style="margin-left: 20px; margin-top: 8px;">
      <li><strong>Khách vãng lai</strong> có thể Xem sản phẩm, Tìm kiếm sản phẩm và Đăng ký tài khoản khách hàng.</li>
      <li><strong>Khách hàng đã đăng nhập</strong> có thể mua hàng (đặt hàng, thanh toán qua cổng ngân hàng hoặc ví điện tử), Xem lịch sử đơn hàng và Hủy đơn hàng (nếu đơn chưa được giao).</li>
      <li><strong>Nhân viên bán hàng</strong> quản lý sản phẩm (thêm/sửa sản phẩm), Xác nhận đơn hàng và cập nhật trạng thái đơn hàng.</li>
      <li>Hệ thống <strong>Thanh toán trực tuyến (Cổng thanh toán)</strong> tham gia vào quá trình thanh toán đơn hàng của khách hàng.</li>
    </ul>`,
    analysis: `<p>Phân tích chi tiết thành phần hệ thống:</p>
    <ul style="margin-left: 20px; margin-top: 8px;">
      <li><strong>Tác nhân (Actors):</strong>
        <ul>
          <li><strong>Khách vãng lai (Guest)</strong> và <strong>Khách hàng thành viên (Customer)</strong>.</li>
          <li><strong>Nhân viên bán hàng (Sales Staff)</strong>.</li>
          <li><strong>Cổng thanh toán (Payment Gateway)</strong>: Tác nhân hệ thống bên thứ ba (System Actor) nhận tín hiệu xác thực giao dịch tài khoản.</li>
        </ul>
      </li>
      <li><strong>Các ca sử dụng & mối quan hệ:</strong>
        <ul>
          <li>Mua hàng <code>&lt;&lt;include&gt;&gt;</code> Thanh toán đơn hàng.</li>
          <li>Thanh toán đơn hàng kết nối trực tiếp với tác nhân Cổng thanh toán.</li>
        </ul>
      </li>
    </ul>`,
    initialCode: `graph LR
    %% Viết sơ đồ Use Case Bán hàng của bạn ở đây!
    Guest[Khách vãng lai 👤]
    Customer[Khách hàng thành viên 👤]
    
    UC_Register((Đăng ký tài khoản))
    UC_Order((Đặt hàng))
    
    Guest --> UC_Register
    Customer --> UC_Order`,
    modelCode: `graph LR
    %% Actors
    Guest[Khách vãng lai 👤]
    Customer[Khách hàng thành viên 👤]
    Staff[Nhân viên bán hàng 👤]
    Gateway[Cổng thanh toán ⚙️]
    
    %% Use Cases
    UC_View((Xem sản phẩm))
    UC_Register((Đăng ký tài khoản))
    UC_Order((Đặt hàng))
    UC_Pay((Thanh toán đơn hàng))
    UC_Cancel((Hủy đơn hàng))
    UC_ManageProducts((Quản lý sản phẩm))
    UC_ConfirmOrder((Xác nhận đơn hàng))
    
    %% Links for Guest
    Guest --> UC_View
    Guest --> UC_Register
    
    %% Links for Customer
    Customer --> UC_View
    Customer --> UC_Order
    Customer --> UC_Cancel
    
    %% Links for Staff
    Staff --> UC_ManageProducts
    Staff --> UC_ConfirmOrder
    
    %% Relationships
    UC_Order -.->|include| UC_Pay
    UC_Pay --> Gateway`
  },
  {
    title: "Vẽ sơ đồ Tuần tự: Chức năng Đăng nhập (User Login Flow) 🔑",
    description: `<p><strong>Mô tả bài toán:</strong> Thiết kế sơ đồ tuần tự (Sequence Diagram) mô tả chi tiết quá trình xác thực đăng nhập của người dùng vào hệ thống.</p>
    <ul style="margin-left: 20px; margin-top: 8px;">
      <li>Người dùng nhập Tên tài khoản và Mật khẩu vào giao diện đăng nhập (LoginUI).</li>
      <li>LoginUI gửi thông tin đăng nhập đến lớp điều khiển xử lý (LoginController).</li>
      <li>LoginController gửi thông tin yêu cầu xác thực tài khoản sang lớp cơ sở dữ liệu (Database).</li>
      <li>Database kiểm tra tài khoản:
        <ul>
          <li>Nếu không tồn tại tài khoản, trả về thông báo "Không tìm thấy người dùng".</li>
          <li>Nếu tài khoản tồn tại, trả về mật khẩu đã mã hóa (hashed password).</li>
        </ul>
      </li>
      <li>LoginController so sánh mật khẩu đã nhập và mật khẩu từ Database:
        <ul>
          <li>Nếu khớp: Tạo phiên đăng nhập (Session), trả về trạng thái "Đăng nhập thành công" cho LoginUI, và chuyển hướng người dùng đến màn hình Trang chủ (Homepage).</li>
          <li>Nếu không khớp: Trả về lỗi "Mật khẩu không đúng" để LoginUI hiển thị cho người dùng biết.</li>
        </ul>
      </li>
    </ul>`,
    analysis: `<p>Sơ đồ tuần tự thể hiện các đối tượng (Lifelines) giao tiếp theo thứ tự thời gian từ trên xuống dưới:</p>
    <ul style="margin-left: 20px; margin-top: 8px;">
      <li><strong>Các đối tượng (Lifelines):</strong>
        <ul>
          <li><code>User</code> (Người dùng): actor kích hoạt hành động.</li>
          <li><code>LoginUI</code> (Giao diện đăng nhập): đối tượng biên (Boundary object).</li>
          <li><code>LoginController</code> (Bộ điều khiển): đối tượng điều khiển (Control object).</li>
          <li><code>Database</code> (Cơ sở dữ liệu): đối tượng thực thể (Entity object).</li>
        </ul>
      </li>
      <li><strong>Các thông điệp (Messages):</strong>
        <ul>
          <li>Hành động gửi (solid line with arrow): <code>->></code></li>
          <li>Hành động trả về (dashed line with arrow): <code>-->></code></li>
          <li>Khối điều kiện (alt/else): dùng để chia nhánh Thành công và Thất bại.</li>
        </ul>
      </li>
    </ul>`,
    initialCode: `sequenceDiagram
    actor User as Người dùng
    participant UI as LoginUI
    participant Ctrl as LoginController
    participant DB as Database
    
    User->>UI: Nhập tài khoản & mật khẩu
    UI->>Ctrl: Yêu cầu đăng nhập(user, pass)
    %% Tiếp tục vẽ sơ đồ ở dưới!
    `,
    modelCode: `sequenceDiagram
    actor User as Người dùng
    participant UI as LoginUI
    participant Ctrl as LoginController
    participant DB as Database
    
    User->>UI: Nhập tài khoản & mật khẩu
    UI->>Ctrl: Yêu cầu đăng nhập(user, pass)
    Ctrl->>DB: Kiểm tra tài khoản(user)
    
    alt Tài khoản không tồn tại
        DB-->>Ctrl: Không tìm thấy người dùng
        Ctrl-->>UI: Báo lỗi tài khoản không tồn tại
        UI-->>User: Hiển thị lỗi lên màn hình
    else Tài khoản tồn tại
        DB-->>Ctrl: Trả về mật khẩu băm (hashed password)
        Ctrl->>Ctrl: So sánh mật khẩu
        alt Mật khẩu đúng
            Ctrl-->>UI: Đăng nhập thành công (Session ID)
            UI-->>User: Chuyển hướng tới Trang chủ (Homepage)
        else Mật khẩu sai
            Ctrl-->>UI: Báo lỗi mật khẩu không đúng
            UI-->>User: Hiển thị lỗi lên màn hình
        end
    end`
  },
  {
    title: "Vẽ sơ đồ Tuần tự: Chức năng Đặt hàng & Thanh toán (Checkout Flow) 💳",
    description: `<p><strong>Mô tả bài toán:</strong> Thiết kế sơ đồ tuần tự cho tính năng Đặt hàng và Thanh toán trực tuyến trên trang bán hàng.</p>
    <ul style="margin-left: 20px; margin-top: 8px;">
      <li>Khách hàng (Customer) nhấn nút "Đặt hàng và Thanh toán" trên trang Giỏ hàng (CartUI).</li>
      <li>CartUI gửi yêu cầu tạo hóa đơn đến Bộ điều khiển đơn hàng (OrderController).</li>
      <li>OrderController yêu cầu Cơ sở dữ liệu (Database) tạo bản ghi đơn hàng mới ở trạng thái "Chờ thanh toán".</li>
      <li>Database trả về thông tin ID Đơn hàng vừa tạo thành công.</li>
      <li>OrderController gọi API thanh toán của Cổng thanh toán (PaymentGateway) để gửi yêu cầu trừ tiền.</li>
      <li>Cổng thanh toán xử lý giao dịch:
        <ul>
          <li>Nếu số dư tài khoản của khách hàng không đủ, trả về lỗi "Thanh toán thất bại". OrderController cập nhật trạng thái đơn hàng thành "Thất bại" trong Database, đồng thời hiển thị thông báo lỗi trên CartUI.</li>
          <li>Nếu thanh toán thành công, Cổng thanh toán trả về mã giao dịch. OrderController cập nhật trạng thái đơn hàng thành "Đã thanh toán" trong Database, sau đó gửi thông báo xác nhận thanh toán thành công hiển thị ra CartUI cho khách hàng.</li>
        </ul>
      </li>
    </ul>`,
    analysis: `<p>Mục đích là thể hiện sự tương tác với một hệ thống bên thứ ba (Cổng thanh toán):</p>
    <ul style="margin-left: 20px; margin-top: 8px;">
      <li><strong>Các Lifelines:</strong> Customer (Người dùng), CartUI (Giao diện), OrderController (Điều khiển), Database (Lưu trữ), PaymentGateway (Cổng thanh toán bên thứ ba).</li>
      <li><strong>Các nhánh điều kiện (alt/else):</strong> Dùng để kiểm tra kết quả trả về của Cổng thanh toán (Thành công / Thất bại do thiếu số dư).</li>
    </ul>`,
    initialCode: `sequenceDiagram
    actor Customer as Khách hàng
    participant UI as CartUI
    participant Ctrl as OrderController
    participant DB as Database
    participant GW as PaymentGateway
    
    Customer->>UI: Click "Đặt hàng và Thanh toán"
    UI->>Ctrl: Yêu cầu đặt hàng(cartItems)
    %% Tiếp tục vẽ sơ đồ ở dưới!
    `,
    modelCode: `sequenceDiagram
    actor Customer as Khách hàng
    participant UI as CartUI
    participant Ctrl as OrderController
    participant DB as Database
    participant GW as PaymentGateway
    
    Customer->>UI: Click "Đặt hàng và Thanh toán"
    UI->>Ctrl: Yêu cầu đặt hàng(cartItems)
    Ctrl->>DB: Tạo đơn hàng mới (Trạng thái: Chờ thanh toán)
    DB-->>Ctrl: Trả về Mã đơn hàng (OrderID)
    
    Ctrl->>GW: Yêu cầu thanh toán(OrderID, số tiền)
    GW->>GW: Xử lý giao dịch tài khoản
    
    alt Thanh toán thất bại (Không đủ số dư)
        GW-->>Ctrl: Trả về lỗi thanh toán thất bại
        Ctrl->>DB: Cập nhật đơn hàng (Trạng thái: Thất bại)
        Ctrl-->>UI: Hiển thị thông báo "Thanh toán thất bại, vui lòng thử lại"
        UI-->>Customer: Xem thông báo lỗi thanh toán
    else Thanh toán thành công
        GW-->>Ctrl: Trả về Mã giao dịch (TransactionID)
        Ctrl->>DB: Cập nhật đơn hàng (Trạng thái: Đã thanh toán)
        Ctrl-->>UI: Trả về xác nhận đơn hàng thành công
        UI-->>Customer: Hiển thị hóa đơn thành công
    end`
  }
];

// ----------------------------------------------------
// STATE MANAGEMENT & INITIALIZATION
// ----------------------------------------------------
let activeUmlIndex = 0;
let isSolutionVisible = false;
let userUmlDrafts = {}; // Stores user's typed code for each exercise: { [index]: string }

// Save user drafts to LocalStorage
const STORAGE_UML_DRAFTS = "onthi_uml_drafts";

function loadUmlDrafts() {
  try {
    userUmlDrafts = JSON.parse(localStorage.getItem(STORAGE_UML_DRAFTS)) || {};
  } catch (e) {
    userUmlDrafts = {};
  }
}

function saveUmlDraft(index, code) {
  userUmlDrafts[index] = code;
  localStorage.setItem(STORAGE_UML_DRAFTS, JSON.stringify(userUmlDrafts));
}

// ----------------------------------------------------
// RENDERING LOGIC
// ----------------------------------------------------
async function renderMermaidDiagram(containerId, code) {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const id = "mermaid-" + Math.floor(Math.random() * 100000);
    // Render Mermaid code dynamically
    const { svg } = await mermaid.render(id, code);
    container.innerHTML = svg;
  } catch (err) {
    // Show syntax errors to the user in a friendly way
    container.innerHTML = `
      <div style="color: var(--error); padding: 12px; border: 1px dashed var(--error-border); background: var(--error-bg); border-radius: var(--radius-md); font-family: monospace; font-size: 12px; line-height: 1.4; width: 100%;">
        <strong>⚠️ Lỗi cú pháp vẽ sơ đồ:</strong><br>
        <span style="font-size: 11px; opacity: 0.85;">${escapeHTML(err.message || err.toString())}</span>
      </div>
    `;
    const badElement = document.getElementById(id) || document.getElementById("d" + id);
    if (badElement) badElement.remove();
  }
}

// Select an exercise and render it
function selectUmlExercise(index) {
  activeUmlIndex = index;
  isSolutionVisible = false;

  // Toggle active class on sidebar buttons
  const buttons = document.querySelectorAll(".uml-exercise-btn");
  buttons.forEach((btn, idx) => {
    if (idx === index) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const ex = UML_EXERCISES[index];
  
  // Set title & description
  document.getElementById("uml-title").textContent = ex.title;
  document.getElementById("uml-description").innerHTML = ex.description;
  
  // Hide solution box on switch
  document.getElementById("uml-solution-box").style.display = "none";
  document.getElementById("uml-solution-toggle-btn").textContent = "Xem Đáp Án Mẫu";

  // Load draft or default code
  const currentCode = userUmlDrafts[index] !== undefined ? userUmlDrafts[index] : ex.initialCode;
  const editor = document.getElementById("uml-editor");
  editor.value = currentCode;

  // Trigger rendering
  renderUserDiagram(currentCode);
}

// Render User Diagram
let renderTimeout = null;
function renderUserDiagram(code) {
  // Debounce rendering to avoid stutter while typing
  if (renderTimeout) clearTimeout(renderTimeout);
  renderTimeout = setTimeout(() => {
    renderMermaidDiagram("uml-user-render", code);
  }, 250);
}

// Toggle Solution Box
function toggleUmlSolution() {
  const box = document.getElementById("uml-solution-box");
  const btn = document.getElementById("uml-solution-toggle-btn");
  isSolutionVisible = !isSolutionVisible;

  if (isSolutionVisible) {
    box.style.display = "block";
    btn.textContent = "Ẩn Đáp Án Mẫu";
    
    // Fill analysis and render model answer
    const ex = UML_EXERCISES[activeUmlIndex];
    document.getElementById("uml-analysis-guide").innerHTML = ex.analysis;
    renderMermaidDiagram("uml-model-render", ex.modelCode);
  } else {
    box.style.display = "none";
    btn.textContent = "Xem Đáp Án Mẫu";
  }
}

// ----------------------------------------------------
// TAB NAVIGATION LOGIC
// ----------------------------------------------------
function switchMode(mode) {
  const tabQuiz = document.getElementById("tab-quiz-btn");
  const tabUml = document.getElementById("tab-uml-btn");
  const quizContainer = document.getElementById("quiz-mode-container");
  const umlContainer = document.getElementById("uml-mode-container");

  if (mode === "quiz") {
    tabQuiz.classList.add("active");
    tabUml.classList.remove("active");
    
    // Show quiz container, hide UML container
    quizContainer.style.setProperty("display", "contents", "important");
    umlContainer.style.setProperty("display", "none", "important");
    
    // Show mobile quiz grid button if on mobile
    document.getElementById("drawer-toggle-btn").style.display = "";
  } else {
    tabQuiz.classList.remove("active");
    tabUml.classList.add("active");
    
    // Show UML container, hide quiz container
    quizContainer.style.setProperty("display", "none", "important");
    umlContainer.style.setProperty("display", "grid", "important");
    
    // Hide mobile quiz grid button as it is irrelevant for UML
    document.getElementById("drawer-toggle-btn").style.display = "none";
    
    // Initialize active UML exercise
    selectUmlExercise(activeUmlIndex);
  }
}

// Update UML tab visibility based on Serious Study Mode
function updateUmlTabVisibility() {
  const tabUml = document.getElementById("tab-uml-btn");
  const tabBar = document.querySelector(".tab-bar");
  
  // Read value from app.js or localStorage
  const isSeriousMode = typeof isTrollDisabled !== "undefined" ? isTrollDisabled : (localStorage.getItem("onthi_quiz_troll_disabled") === "true");
  
  if (tabUml) {
    if (isSeriousMode) {
      tabUml.style.display = "";
      if (tabBar) tabBar.style.display = "flex";
    } else {
      tabUml.style.display = "none";
      if (tabBar) tabBar.style.display = "none";
      
      // If we are currently showing UML mode, force back to quiz mode
      const umlContainer = document.getElementById("uml-mode-container");
      if (umlContainer && umlContainer.style.display !== "none") {
        switchMode("quiz");
      }
    }
  }
}

// ----------------------------------------------------
// EVENT SETUP
// ----------------------------------------------------
window.addEventListener("DOMContentLoaded", () => {
  // Load drafts
  loadUmlDrafts();

  // Initial tab visibility update
  updateUmlTabVisibility();

  // Bind tab buttons
  const tabQuiz = document.getElementById("tab-quiz-btn");
  const tabUml = document.getElementById("tab-uml-btn");

  if (tabQuiz && tabUml) {
    tabQuiz.addEventListener("click", () => switchMode("quiz"));
    tabUml.addEventListener("click", () => switchMode("uml"));
  }

  // Bind editor input
  const editor = document.getElementById("uml-editor");
  if (editor) {
    editor.addEventListener("input", (e) => {
      const code = e.target.value;
      saveUmlDraft(activeUmlIndex, code);
      renderUserDiagram(code);
    });
  }

  // Initialize Mermaid Library if loaded
  if (typeof mermaid !== "undefined") {
    mermaid.initialize({
      startOnLoad: false,
      suppressErrorRendering: true,
      theme: 'dark',
      securityLevel: 'loose',
      themeVariables: {
        background: '#1e293b',
        primaryColor: '#3b82f6',
        primaryTextColor: '#f8fafc',
        lineColor: '#64748b',
        secondaryColor: '#1e1b4b',
        tertiaryColor: '#0f172a'
      }
    });
  }
});
