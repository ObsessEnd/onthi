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
    title: "Vẽ Sơ đồ dòng điều khiển (CFG) cho hàm maxAm 📊",
    description: `<p><strong>Mô tả bài toán:</strong> Trong kiểm thử cấu trúc (White-Box Testing), Sơ đồ dòng điều khiển (Control Flow Graph - CFG) được sử dụng để phân tích các đường đi trong code và tính toán độ phức tạp chu trình. Hãy vẽ sơ đồ CFG dạng Flowchart Mermaid cho hàm tìm số âm lớn nhất <code>maxAm</code> sau:</p>
    <pre style="background: var(--bg-surface); padding: 12px; border-radius: 4px; font-family: monospace; font-size: 12px; color: #94a3b8; margin-top: 8px;">
int maxAm(int a[], int n){
    int max = 0; // Node 1 (Khởi tạo)
    for (int i = 0; i &lt; n; i++) // Node 2 (Điều kiện lặp)
        if (a[i] &lt; 0 &amp;&amp; (max == 0 || a[i] &gt; max)) // Node 3 &amp; 4 (Điều kiện if)
            max = a[i]; // Node 5 (Gán giá trị)
    return max; // Node 6 (Trả về)
}</pre>
    <p style="margin-top: 8px;"><strong>Yêu cầu:</strong> Vẽ sơ đồ dạng đồ thị có hướng (flowchart) kết nối từ điểm bắt đầu đến điểm kết thúc của hàm.</p>`,
    analysis: `<p>Phân tích dòng điều khiển (Control Flow Graph) và độ phức tạp:</p>
    <ul style="margin-left: 20px; margin-top: 8px;">
      <li><strong>Các nút (Nodes):</strong>
        <ul>
          <li><code>Node 1</code>: Khởi tạo <code>max = 0</code>.</li>
          <li><code>Node 2</code>: Điều kiện lặp <code>i &lt; n</code>.</li>
          <li><code>Node 3</code>: Điều kiện <code>a[i] &lt; 0</code>.</li>
          <li><code>Node 4</code>: Điều kiện <code>(max == 0 || a[i] &gt; max)</code>.</li>
          <li><code>Node 5</code>: Gán <code>max = a[i]</code>.</li>
          <li><code>Node 6</code>: Trả về kết quả <code>return max</code>.</li>
        </ul>
      </li>
      <li><strong>Các cạnh dòng chảy (Edges):</strong>
        <ul>
          <li>Node 1 chạy đến Node 2 để kiểm tra vòng lặp.</li>
          <li>Từ Node 2, nếu vòng lặp đúng (True), chuyển sang Node 3. Nếu sai (False), nhảy đến Node 6 (trả về).</li>
          <li>Từ Node 3, nếu <code>a[i] &lt; 0</code> đúng (True), kiểm tra điều kiện tiếp theo ở Node 4. Nếu sai (False), tăng biến lặp <code>i++</code> và quay lại Node 2.</li>
          <li>Từ Node 4, nếu điều kiện đúng (True), chạy dòng lệnh gán ở Node 5. Nếu sai (False), quay lại Node 2.</li>
          <li>Từ Node 5 (sau khi gán xong), quay lại Node 2.</li>
        </ul>
      </li>
      <li><strong>Độ phức tạp chu trình (Cyclomatic Complexity):</strong>
        <ul>
          <li>Số vùng đóng của đồ thị: V = 3 vùng (hoặc tính bằng công thức: E - N + 2P = 8 cạnh - 6 nút + 2 = 4).</li>
        </ul>
      </li>
    </ul>`,
    initialCode: `flowchart TD
    %% Hãy vẽ sơ đồ dòng điều khiển CFG của bạn ở đây!
    N1[Node 1: Khởi tạo max = 0]
    N2{"Node 2: i < n"}
    
    N1 --> N2`,
    modelCode: `flowchart TD
    N1[Node 1: Khởi tạo max = 0]
    N2{"Node 2: Vòng lặp i < n"}
    N3{"Node 3: a[i] < 0"}
    N4{"Node 4: max == 0 OR a[i] > max"}
    N5[Node 5: Gán max = a[i]]
    N6[Node 6: Trả về return max]
    
    N1 --> N2
    N2 -- True --> N3
    N2 -- False --> N6
    
    N3 -- True --> N4
    N3 -- False --> N2
    
    N4 -- True --> N5
    N4 -- False --> N2
    
    N5 --> N2`
  },
  {
    title: "Vẽ Sơ đồ chuyển trạng thái: Vòng đời của Vé máy bay (Flight Ticket) 🎫",
    description: `<p><strong>Mô tả bài toán:</strong> Trong kiểm thử hộp đen, Sơ đồ chuyển trạng thái (State Transition Diagram) giúp xác định các kịch bản kiểm thử dựa trên các sự kiện làm thay đổi trạng thái của đối tượng. Hãy vẽ sơ đồ chuyển trạng thái mô tả vòng đời của một Vé máy bay (Flight Ticket) trong hệ thống với các quy tắc sau:</p>
    <ul style="margin-left: 20px; margin-top: 8px;">
      <li>Trạng thái ban đầu khi khách hàng chọn vé và đặt chỗ là <strong>Created (Đã tạo)</strong>.</li>
      <li>Từ <strong>Created</strong>, nếu khách hàng thanh toán thành công trong vòng 15 phút, vé chuyển sang trạng thái <strong>Paid (Đã thanh toán)</strong>. Nếu quá thời gian hoặc hủy đặt chỗ, vé chuyển sang trạng thái <strong>Canceled (Đã hủy)</strong>.</li>
      <li>Từ <strong>Paid</strong>, khi khách hàng thực hiện check-in trực tuyến hoặc tại quầy, vé chuyển sang trạng thái <strong>CheckedIn (Đã làm thủ tục)</strong>. Khách hàng cũng có thể chọn Hủy vé trước chuyến bay 24 giờ để nhận hoàn tiền, lúc này vé chuyển sang trạng thái <strong>Canceled</strong>.</li>
      <li>Từ <strong>CheckedIn</strong>, khi khách hàng lên máy bay (Boarding), vé chuyển sang trạng thái cuối cùng là <strong>Used (Đã sử dụng)</strong>. Nếu khách hàng không lên máy bay (No-show), vé chuyển sang trạng thái <strong>Expired (Đã hết hạn)</strong>.</li>
    </ul>`,
    analysis: `<p>Sơ đồ chuyển trạng thái của Vé máy bay bao gồm các trạng thái và các sự kiện chuyển dịch:</p>
    <ul style="margin-left: 20px; margin-top: 8px;">
      <li><strong>Các trạng thái (States):</strong> Created, Paid, CheckedIn, Used, Expired, Canceled.</li>
      <li><strong>Điểm bắt đầu & Kết thúc:</strong>
        <ul>
          <li>Điểm bắt đầu kết nối tới <code>Created</code>.</li>
          <li><code>Used</code>, <code>Expired</code>, và <code>Canceled</code> là các trạng thái kết thúc (end states).</li>
        </ul>
      </li>
      <li><strong>Các chuyển dịch tiêu biểu:</strong>
        <ul>
          <li>Created --> Paid via <code>Thanh toán thành công</code></li>
          <li>Created --> Canceled via <code>Hủy / Quá giờ</code></li>
          <li>Paid --> CheckedIn via <code>Làm thủ tục (Check-in)</code></li>
          <li>Paid --> Canceled via <code>Hủy vé (hoàn tiền)</code></li>
          <li>CheckedIn --> Used via <code>Lên máy bay (Boarding)</code></li>
          <li>CheckedIn --> Expired via <code>Trễ chuyến (No-show)</code></li>
        </ul>
      </li>
    </ul>`,
    initialCode: `stateDiagram-v2
    [*] --> Created
    Created --> Paid : Thanh toán thành công
    
    %% Hãy vẽ tiếp sơ đồ chuyển trạng thái ở đây!`,
    modelCode: `stateDiagram-v2
    [*] --> Created
    Created --> Paid : Thanh toán thành công
    Created --> Canceled : Quá giờ / Hủy
    Paid --> CheckedIn : Check-in
    Paid --> Canceled : Hủy vé (hoàn tiền)
    CheckedIn --> Used : Lên máy bay (Boarding)
    CheckedIn --> Expired : Trễ chuyến (No-show)
    
    Used --> [*]
    Expired --> [*]
    Canceled --> [*]`
  },
  {
    title: "Vẽ Sơ đồ tuần tự: Tích hợp API và Kiểm thử tích hợp (Checkout Flow) 💳",
    description: `<p><strong>Mô tả bài toán:</strong> Vẽ sơ đồ tuần tự (Sequence Diagram) để mô tả kịch bản kiểm thử tích hợp (Integration Testing) lỗi không đủ số dư giữa các thành phần khi đặt hàng và thanh toán trực tuyến:</p>
    <ul style="margin-left: 20px; margin-top: 8px;">
      <li><strong>Khách hàng (Customer)</strong> nhấn đặt hàng trên <strong>Giao diện (CartUI)</strong>.</li>
      <li><strong>CartUI</strong> gửi yêu cầu thanh toán kèm thông tin giỏ hàng sang <strong>Hệ thống (CheckoutService)</strong>.</li>
      <li><strong>CheckoutService</strong> gửi yêu cầu trừ tiền sang <strong>Cổng thanh toán (PaymentGateway)</strong>.</li>
      <li><strong>PaymentGateway</strong> thực hiện giao dịch và phát hiện số dư tài khoản không đủ. Nó trả về mã lỗi <code>402 Payment Required</code> cho <strong>CheckoutService</strong>.</li>
      <li><strong>CheckoutService</strong> ghi nhận lỗi, yêu cầu <strong>Cơ sở dữ liệu (Database)</strong> cập nhật trạng thái đơn hàng thành <code>FAILED</code>.</li>
      <li><strong>Database</strong> phản hồi cập nhật thành công, sau đó <strong>CheckoutService</strong> trả lỗi và thông điệp cảnh báo "Thanh toán thất bại: Số dư tài khoản không đủ" về cho <strong>CartUI</strong> hiển thị lên cho <strong>Customer</strong>.</li>
    </ul>`,
    analysis: `<p>Sơ đồ tuần tự thể hiện các tương tác tích hợp giữa hệ thống nội bộ và bên thứ ba:</p>
    <ul style="margin-left: 20px; margin-top: 8px;">
      <li><strong>Các tác nhân (Lifelines):</strong>
        <ul>
          <li><code>Customer</code> (Khách hàng)</li>
          <li><code>CartUI</code> (Giao diện)</li>
          <li><code>CheckoutService</code> (Dịch vụ đặt hàng)</li>
          <li><code>PaymentGateway</code> (Cổng thanh toán)</li>
          <li><code>Database</code> (Cơ sở dữ liệu)</li>
        </ul>
      </li>
      <li><strong>Quy trình thông điệp lỗi:</strong>
        <ul>
          <li>Customer gọi CartUI (click đặt hàng).</li>
          <li>CartUI gọi CheckoutService (yêu cầu đặt hàng).</li>
          <li>CheckoutService gọi PaymentGateway (yêu cầu trừ tiền).</li>
          <li>PaymentGateway trả về lỗi <code>402 Payment Required</code> cho CheckoutService.</li>
          <li>CheckoutService ghi log đơn hàng thất bại vào Database.</li>
          <li>Database phản hồi lại.</li>
          <li>CheckoutService trả lỗi về CartUI.</li>
          <li>CartUI hiển thị thông báo "Số dư không đủ" cho Customer.</li>
        </ul>
      </li>
    </ul>`,
    initialCode: `sequenceDiagram
    actor Customer as Khách hàng
    participant UI as CartUI
    participant Service as CheckoutService
    participant GW as PaymentGateway
    participant DB as Database
    
    Customer->>UI: Nhấn Đặt hàng & Thanh toán
    UI->>Service: Yêu cầu thanh toán(CartID)
    
    %% Hãy vẽ tiếp sơ đồ tương tác lỗi ở đây!`,
    modelCode: `sequenceDiagram
    actor Customer as Khách hàng
    participant UI as CartUI
    participant Service as CheckoutService
    participant GW as PaymentGateway
    participant DB as Database
    
    Customer->>UI: Nhấn Đặt hàng & Thanh toán
    UI->>Service: Yêu cầu thanh toán(CartID)
    Service->>GW: Yêu cầu trừ tiền(CardInfo, Amount)
    GW-->>Service: Trả lỗi 402 Payment Required (Số dư không đủ)
    Service->>DB: Cập nhật đơn hàng (Status = FAILED)
    DB-->>Service: Cập nhật thành công
    Service-->>UI: Báo lỗi thanh toán thất bại (Số dư không đủ)
    UI-->>Customer: Hiển thị cảnh báo số dư không đủ`
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
