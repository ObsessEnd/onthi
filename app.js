// ----------------------------------------------------
// STATE MANAGEMENT
// ----------------------------------------------------
let questions = []; // Working copy initialized from QUESTIONS_DATA
let currentIndex = 0; // Index in the active questions array

// User answers map: { [originalQuestionId]: { selectedKey: string, isCorrect: boolean } }
let userAnswers = {};
// Bookmarked question IDs set: { [originalQuestionId]: boolean }
let bookmarks = {};
// Questions that have been resurrected (given a second chance)
let resurrectedQuestions = {};

// Active filters: "all", "unanswered", "answered", "correct", "incorrect", "bookmarked"
let activeFilter = "all";

// Shuffle configurations (permanently enabled)
const isShuffleQuestions = true;
const isShuffleOptions = true;

// Easter egg counters
let consecutiveIncorrectCount = 0;
let consecutiveCorrectCount = 0;
let logoClicks = 0;
let proctorTimer = null;
let isTrollDisabled = false; // State to disable all trolls & easter eggs

// ----------------------------------------------------
// LOCAL STORAGE KEYS
// ----------------------------------------------------
const STORAGE_PREFIX = "onthi_quiz_";
const KEYS = {
  ANSWERS: STORAGE_PREFIX + "answers",
  BOOKMARKS: STORAGE_PREFIX + "bookmarks",
  THEME: STORAGE_PREFIX + "theme",
  SHUFFLE_Q: STORAGE_PREFIX + "shuffle_q",
  SHUFFLE_O: STORAGE_PREFIX + "shuffle_o",
  CURRENT_INDEX: STORAGE_PREFIX + "current_index",
  SHUFFLED_STATE: STORAGE_PREFIX + "shuffled_state",
  TROLL_DISABLED: STORAGE_PREFIX + "troll_disabled"
};

// ----------------------------------------------------
// CORE FUNCTIONS
// ----------------------------------------------------

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Load state from local storage
function loadState() {
  // 1. Theme
  const savedTheme = localStorage.getItem(KEYS.THEME) || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  // 2. User answers & bookmarks
  try {
    userAnswers = JSON.parse(localStorage.getItem(KEYS.ANSWERS)) || {};
    bookmarks = JSON.parse(localStorage.getItem(KEYS.BOOKMARKS)) || {};
  } catch (e) {
    userAnswers = {};
    bookmarks = {};
  }

  // Initialize the working copy of questions
  initializeQuestions();

  // 3. Saved Index
  const savedIndex = parseInt(localStorage.getItem(KEYS.CURRENT_INDEX), 10);
  if (!isNaN(savedIndex) && savedIndex >= 0 && savedIndex < questions.length) {
    currentIndex = savedIndex;
  } else {
    currentIndex = 0;
  }

  // 4. Serious study mode (trolls disabled)
  isTrollDisabled = localStorage.getItem(KEYS.TROLL_DISABLED) === "true";
  if (typeof updateUmlTabVisibility === "function") {
    updateUmlTabVisibility();
  }
}

// Initialize questions list based on shuffle and options settings
function initializeQuestions() {
  if (typeof QUESTIONS_DATA === "undefined") {
    console.error("QUESTIONS_DATA is not defined. Make sure questions.js is loaded first.");
    return;
  }

  // Check if we have a saved shuffled state in localStorage to prevent reload mismatch bugs
  let savedState = null;
  try {
    savedState = JSON.parse(localStorage.getItem(KEYS.SHUFFLED_STATE));
  } catch (e) {
    savedState = null;
  }

  if (savedState && Array.isArray(savedState) && savedState.length === QUESTIONS_DATA.length) {
    let reconstructedQuestions = [];
    savedState.forEach(stateItem => {
      const originalQ = QUESTIONS_DATA.find(q => q.id === stateItem.id);
      if (originalQ) {
        let qClone = JSON.parse(JSON.stringify(originalQ));
        let reorderedOptions = [];
        stateItem.optionKeys.forEach(key => {
          const opt = qClone.options.find(o => o.key === key);
          if (opt) {
            reorderedOptions.push(opt);
          }
        });
        if (reorderedOptions.length === qClone.options.length) {
          qClone.options = reorderedOptions;
        }
        reconstructedQuestions.push(qClone);
      }
    });

    if (reconstructedQuestions.length === QUESTIONS_DATA.length) {
      questions = reconstructedQuestions;
      return;
    }
  }

  // Start with original dataset
  let baseQuestions = JSON.parse(JSON.stringify(QUESTIONS_DATA));

  // Shuffle questions if enabled
  if (isShuffleQuestions) {
    shuffleArray(baseQuestions);
  }

  // Shuffle options for each question if enabled
  if (isShuffleOptions) {
    baseQuestions.forEach(q => {
      shuffleArray(q.options);
    });
  }

  questions = baseQuestions;

  // Save the newly generated shuffled state
  const stateToSave = questions.map(q => ({
    id: q.id,
    optionKeys: q.options.map(opt => opt.key)
  }));
  localStorage.setItem(KEYS.SHUFFLED_STATE, JSON.stringify(stateToSave));
}

// Save working state to local storage
function saveState() {
  localStorage.setItem(KEYS.ANSWERS, JSON.stringify(userAnswers));
  localStorage.setItem(KEYS.BOOKMARKS, JSON.stringify(bookmarks));
  localStorage.setItem(KEYS.CURRENT_INDEX, currentIndex.toString());
}

// Reset everything
function resetQuiz() {
  if (Object.keys(userAnswers).length > 0 && !confirm("Bạn có chắc chắn muốn xóa toàn bộ tiến trình làm bài và làm lại từ đầu không?")) {
    return;
  }
  userAnswers = {};
  bookmarks = {};
  resurrectedQuestions = {};
  currentIndex = 0;
  activeFilter = "all";
  document.getElementById("filter-select").value = "all";
  
  localStorage.removeItem(KEYS.SHUFFLED_STATE);
  initializeQuestions();
  saveState();
  
  renderAll();
  showNotification("Đã đặt lại tiến trình và xáo trộn lại câu hỏi!");
}

// ----------------------------------------------------
// RENDERING LOGIC
// ----------------------------------------------------

// Get currently visible questions based on the active filter
function getFilteredQuestions() {
  return questions.filter(q => {
    const answer = userAnswers[q.id];
    const isBookmarked = !!bookmarks[q.id];
    const isAnswered = !!answer;
    
    switch (activeFilter) {
      case "unanswered":
        return !isAnswered;
      case "answered":
        return isAnswered;
      case "correct":
        return isAnswered && answer.isCorrect;
      case "incorrect":
        return isAnswered && !answer.isCorrect;
      case "bookmarked":
        return isBookmarked;
      default: // "all"
        return true;
    }
  });
}

// Render Stats
function renderStats() {
  if (typeof QUESTIONS_DATA === "undefined") return;

  const totalCount = QUESTIONS_DATA.length;
  const answeredCount = Object.keys(userAnswers).length;
  
  let correctCount = 0;
  let incorrectCount = 0;
  
  Object.values(userAnswers).forEach(ans => {
    if (ans.isCorrect) correctCount++;
    else incorrectCount++;
  });
  
  const bookmarkCount = Object.keys(bookmarks).filter(id => bookmarks[id]).length;
  const progressPercent = Math.round((answeredCount / totalCount) * 100);

  // DOM updates
  document.getElementById("stat-progress").textContent = `${progressPercent}%`;
  document.getElementById("stat-correct").textContent = correctCount;
  document.getElementById("stat-incorrect").textContent = incorrectCount;
  document.getElementById("stat-bookmarked").textContent = bookmarkCount;

  document.getElementById("progress-text").textContent = `${answeredCount} / ${totalCount} câu`;
  document.getElementById("progress-fill").style.width = `${progressPercent}%`;
}

// Render Sidebar Question Grid
function renderGrid() {
  const gridContainer = document.getElementById("question-grid");
  gridContainer.innerHTML = "";
  
  const filtered = getFilteredQuestions();
  const activeQuestion = filtered[currentIndex];

  // We render ALL questions in the grid, but dim or style them based on whether they match the filter
  questions.forEach((q, index) => {
    const cell = document.createElement("button");
    cell.className = "grid-item";
    
    // Find index of this question in filtered list (if it exists)
    const filteredIndex = filtered.findIndex(fq => fq.id === q.id);
    const matchesFilter = filteredIndex !== -1;
    
    // Display number matching the shuffled position index + 1
    cell.textContent = index + 1;

    // Styling based on state
    const answer = userAnswers[q.id];
    if (answer) {
      cell.classList.add(answer.isCorrect ? "correct" : "incorrect");
    }
    
    if (bookmarks[q.id]) {
      cell.classList.add("bookmarked");
    }

    // Active state (if it is the currently selected question in the filtered list)
    if (activeQuestion && activeQuestion.id === q.id) {
      cell.classList.add("active");
    }

    // Behavior on click
    if (matchesFilter) {
      cell.onclick = () => {
        currentIndex = filteredIndex;
        saveState();
        renderQuestionCard();
        renderGrid();
        closeMobileDrawer();
      };
    } else {
      cell.style.opacity = "0.25";
      cell.style.cursor = "not-allowed";
      cell.title = "Không khớp bộ lọc hiện tại";
    }

    gridContainer.appendChild(cell);
  });
}

// Render the Active Question Card
function renderQuestionCard() {
  const card = document.getElementById("question-card");
  const filtered = getFilteredQuestions();
  
  if (filtered.length === 0) {
    card.innerHTML = `
      <div style="text-align: center; padding: 40px 0; color: var(--text-muted);">
        <div style="font-size: 48px; margin-bottom: 16px;">🔍</div>
        <h3>Không có câu hỏi nào khớp với bộ lọc!</h3>
        <p style="margin-top: 8px;">Vui lòng đổi bộ lọc hoặc làm thêm câu hỏi.</p>
      </div>
    `;
    document.getElementById("prev-btn").disabled = true;
    document.getElementById("next-btn").disabled = true;
    document.getElementById("bookmark-btn").disabled = true;
    return;
  }

  // Safely bound currentIndex
  if (currentIndex >= filtered.length) {
    currentIndex = filtered.length - 1;
  }
  if (currentIndex < 0) {
    currentIndex = 0;
  }

  const q = filtered[currentIndex];
  const answer = userAnswers[q.id];
  const isAnswered = !!answer;
  
  // Clear and start strict proctor timer (if trolls not disabled)
  if (proctorTimer) {
    clearTimeout(proctorTimer);
  }
  if (!isTrollDisabled && !isAnswered) {
    proctorTimer = setTimeout(triggerStrictProctor, 30000);
  }

  // Update Navigation Buttons
  document.getElementById("prev-btn").disabled = currentIndex === 0;
  document.getElementById("bookmark-btn").disabled = false;
  
  const nextBtn = document.getElementById("next-btn");
  if (currentIndex === filtered.length - 1) {
    nextBtn.textContent = "Hoàn Thành 🎉";
    nextBtn.classList.remove("btn-primary");
    nextBtn.style.background = "linear-gradient(135deg, var(--success), #3b82f6)";
    nextBtn.style.color = "white";
  } else {
    nextBtn.textContent = "Câu Tiếp Theo →";
    nextBtn.classList.add("btn-primary");
    nextBtn.style.background = "";
  }

  // Update Bookmark button style
  const bookmarkBtn = document.getElementById("bookmark-btn");
  if (bookmarks[q.id]) {
    bookmarkBtn.classList.add("active");
    bookmarkBtn.innerHTML = "★ Đã Đánh Dấu";
  } else {
    bookmarkBtn.classList.remove("active");
    bookmarkBtn.innerHTML = "☆ Đánh Dấu";
  }

  // Construct Options HTML
  let optionsHTML = "";
  // 0.5% chance per question that one of the buttons runs away/trolls (only if not answered yet and trolls not disabled)
  const runAwayIndex = (!isTrollDisabled && !isAnswered && Math.random() < 0.005) ? Math.floor(Math.random() * q.options.length) : -1;

  // 1.5% chance per question that a ghost appears saying "Chọn nhanh đê!" (only if not answered yet and trolls not disabled)
  if (!isTrollDisabled && !isAnswered && Math.random() < 0.015) {
    setTimeout(triggerChooseQuicklyGhost, 800);
  }

  q.options.forEach((opt, idx) => {
    // Map display badge label (a, b, c, d)
    const badgeLabel = String.fromCharCode(97 + idx); // a, b, c, d...
    
    let buttonClass = "";
    
    if (isAnswered) {
      const isSelected = answer.selectedKey === opt.key;
      const isCorrectOpt = Array.isArray(q.correct) ? q.correct.includes(opt.key) : opt.key === q.correct;
      
      if (isSelected) {
        buttonClass = answer.isCorrect ? "selected-correct" : "selected-incorrect";
      } else if (isCorrectOpt) {
        buttonClass = "revealed-correct";
      }
    }

    const isRunAway = idx === runAwayIndex;

    optionsHTML += `
      <button class="option-btn ${buttonClass} ${isRunAway ? 'run-away-btn' : ''}" 
              onclick="selectAnswer('${q.id}', '${opt.key}')" 
              ${isAnswered ? 'disabled' : ''}
              ${isRunAway ? 'onmouseenter="handleRunAway(this)" onmouseleave="handleRunAwayRestore(this)"' : ''}>
        <span class="option-badge">${badgeLabel}</span>
        <span class="option-text-span">${escapeHTML(opt.text)}</span>
      </button>
    `;
  });

  // Construct Explanation Box HTML
  let explanationHTML = "";
  if (isAnswered) {
    const isCorrect = answer.isCorrect;
    const boxClass = isCorrect ? "correct" : "incorrect";
    const titleText = isCorrect ? "🎉 Chính Xác!" : "❌ Chưa Chính Xác!";
    
    let correctLabels = [];
    let correctOptTexts = [];
    if (Array.isArray(q.correct)) {
      q.correct.forEach(key => {
        const idx = q.options.findIndex(opt => opt.key === key);
        if (idx !== -1) {
          correctLabels.push(String.fromCharCode(65 + idx));
          correctOptTexts.push(q.options[idx].text);
        }
      });
    } else {
      const idx = q.options.findIndex(opt => opt.key === q.correct);
      if (idx !== -1) {
        correctLabels.push(String.fromCharCode(65 + idx));
        correctOptTexts.push(q.options[idx].text);
      }
    }
    const correctLabel = correctLabels.join(", ");
    const correctOptText = correctOptTexts.map((txt, i) => `${correctLabels[i]}. ${txt}`).join(" và ");

    const selectedOptText = q.options.find(o => o.key === answer.selectedKey)?.text || "";

    const selectedIndex = q.options.findIndex(opt => opt.key === answer.selectedKey);
    const selectedLabel = String.fromCharCode(65 + selectedIndex); // A, B, C, D

    // Formulate feedback
    let feedbackDetail = "";
    if (isCorrect) {
      feedbackDetail = `Bạn đã chọn phương án đúng: <strong>${selectedLabel}. ${escapeHTML(selectedOptText)}</strong>.`;
    } else {
      feedbackDetail = `Bạn đã chọn phương án <strong>${selectedLabel}. ${escapeHTML(selectedOptText)}</strong>. <br>Đáp án đúng là <strong>${correctOptText}</strong>.`;
    }

    // Construct explanations detail
    let explanationHTMLDesc = "";
    const firstCorrectKey = Array.isArray(q.correct) ? q.correct[0] : q.correct;
    const correctExplanation = q.explanations[firstCorrectKey] || "";
    
    if (isCorrect) {
      explanationHTMLDesc = `
        <div class="explanation-desc">
          <strong>Giải thích chi tiết:</strong> ${escapeHTML(correctExplanation)}
        </div>
      `;
    } else {
      const selectedExplanation = q.explanations[answer.selectedKey] || "";
      
      explanationHTMLDesc = `
        <div class="explanation-desc" style="margin-bottom: 8px;">
          <strong>Giải thích đáp án đúng (${correctLabel}):</strong> ${escapeHTML(correctExplanation)}
        </div>
      `;
      const isActuallyCorrect = Array.isArray(q.correct) ? q.correct.includes(answer.selectedKey) : answer.selectedKey === q.correct;
      if (selectedExplanation && !isActuallyCorrect) {
        explanationHTMLDesc += `
          <div class="explanation-desc" style="opacity: 0.95; font-size: 0.95em; border-top: 1px dashed var(--border); padding-top: 8px; margin-top: 8px; font-style: normal;">
            <strong>Giải thích phương án bạn chọn (${selectedLabel}):</strong> ${escapeHTML(selectedExplanation)}
          </div>
        `;
      }
    }

    explanationHTML = `
      <div class="explanation-box ${boxClass}">
        <div class="explanation-title">
          <span>${isCorrect ? '✓' : '✗'}</span>
          <span>${titleText}</span>
        </div>
        <div class="explanation-body">
          <p style="margin-bottom: 12px;">${feedbackDetail}</p>
          ${explanationHTMLDesc}
        </div>
      </div>
    `;
  }

  // Card Content Setup
  card.innerHTML = `
    <div class="q-meta">
      <span class="q-number">Câu hỏi ${currentIndex + 1} / ${filtered.length}</span>
    </div>
    <div class="q-text">
      ${escapeHTML(q.question)}
    </div>
    <div class="options-list">
      ${optionsHTML}
    </div>
    ${explanationHTML}
  `;
}

// Select Answer handler
function selectAnswer(questionId, selectedKey, bypassCheck = false) {
  questionId = parseInt(questionId, 10);
  const q = questions.find(item => item.id === questionId);
  if (!q || userAnswers[questionId]) return; // Guard clause

  // Clear proctor timer on selection
  if (proctorTimer) {
    clearTimeout(proctorTimer);
  }

  // 5% chance of Confidence Checker dialog (if not bypassed and question is not answered yet and trolls not disabled)
  if (!isTrollDisabled && !bypassCheck && Math.random() < 0.05) {
    showConfidenceCheck(questionId, selectedKey, (finalKey) => {
      selectAnswer(questionId, finalKey, true);
    });
    return;
  }

  const isCorrect = Array.isArray(q.correct) ? q.correct.includes(selectedKey) : selectedKey === q.correct;
  
  // Resurrection Easter Egg: when the user gets the question wrong for the first time
  if (!isCorrect && !resurrectedQuestions[questionId]) {
    resurrectedQuestions[questionId] = true;
    
    // Find the clicked option button and style it as wrong and disabled
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(btn => {
      if (btn.getAttribute("onclick") && btn.getAttribute("onclick").includes(`'${selectedKey}'`)) {
        btn.classList.add("selected-incorrect");
        btn.disabled = true;
      }
    });
    
    // Trigger the premium phoenix resurrection screen
    triggerPhoenixResurrection(() => {
      // Keep options interactive so they can pick again
    });
    return;
  }

  userAnswers[questionId] = {
    selectedKey: selectedKey,
    isCorrect: isCorrect
  };

  saveState();
  renderQuestionCard();
  renderStats();
  renderGrid();

  if (isTrollDisabled) {
    playFeedbackSound(isCorrect);
    return; // Skip streak checking and supernatural events
  }

  if (isCorrect) {
    consecutiveIncorrectCount = 0;
    consecutiveCorrectCount++;
    playFeedbackSound(true);
    if (consecutiveCorrectCount === 10) {
      triggerLegendEaster();
      consecutiveCorrectCount = 0;
    }
  } else {
    consecutiveCorrectCount = 0;
    consecutiveIncorrectCount++;
    playFeedbackSound(false);
    if (consecutiveIncorrectCount === 5) {
      triggerLaughingEaster();
      consecutiveIncorrectCount = 0;
    }
  }

  // 0.5% chance to trigger a random supernatural event (shaking screen glitch or force reset prank)
  const randomRoll = Math.random();
  if (randomRoll < 0.005) {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        triggerGlitchEvent();
      } else {
        triggerForceResetEvent();
      }
    }, 1200); // 1.2s delay so correct/incorrect rendering shows first
  }
}

// Toggle bookmark status
function toggleBookmark() {
  const filtered = getFilteredQuestions();
  if (filtered.length === 0) return;
  const q = filtered[currentIndex];
  
  bookmarks[q.id] = !bookmarks[q.id];
  saveState();
  
  renderQuestionCard();
  renderStats();
  renderGrid();
  showNotification(bookmarks[q.id] ? "Đã đánh dấu câu hỏi này!" : "Đã hủy đánh dấu.");
}

// Navigation triggers
function navigateNext() {
  const filtered = getFilteredQuestions();
  if (currentIndex < filtered.length - 1) {
    currentIndex++;
    saveState();
    renderQuestionCard();
    renderGrid();
  } else {
    // Finished last question
    const answeredCount = Object.keys(userAnswers).length;
    const totalCount = QUESTIONS_DATA.length;
    if (answeredCount === totalCount) {
      showNotification("🎉 Chúc mừng! Bạn đã hoàn thành tất cả các câu hỏi!");
    } else {
      showNotification(`Bạn đã đi hết bộ câu hỏi lọc. (Đã làm ${answeredCount}/${totalCount} câu gốc).`);
    }
  }
}

function navigatePrev() {
  if (currentIndex > 0) {
    currentIndex--;
    saveState();
    renderQuestionCard();
    renderGrid();
  }
}



// Filter Change Handler
function handleFilterChange(e) {
  activeFilter = e.target.value;
  currentIndex = 0; // Reset index to first question in filtered view
  renderQuestionCard();
  renderGrid();
}

// ----------------------------------------------------
// UTILITIES & HELPER FUNCTIONS
// ----------------------------------------------------
function escapeHTML(str) {
  if (typeof str !== "string") return "";
  let escaped = str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  // Restore safe HTML tags for styling/formatting
  escaped = escaped
    .replace(/&lt;sup&gt;/gi, "<sup>")
    .replace(/&lt;\/sup&gt;/gi, "</sup>")
    .replace(/&lt;sub&gt;/gi, "<sub>")
    .replace(/&lt;\/sub&gt;/gi, "</sub>")
    .replace(/&lt;u&gt;/gi, "<u>")
    .replace(/&lt;\/u&gt;/gi, "</u>")
    .replace(/&lt;code&gt;/gi, "<code>")
    .replace(/&lt;\/code&gt;/gi, "</code>")
    .replace(/&lt;br\s*\/?&gt;/gi, "<br>");

  return escaped;
}

// Custom toast notifications
function showNotification(msg) {
  // Remove any existing notification
  const existing = document.querySelector(".toast-notification");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "toast-notification";
  toast.textContent = msg;
  
  // Styling toast dynamically
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '24px',
    left: '50%',
    transform: 'translateX(-50%) translateY(20px)',
    background: 'rgba(15, 23, 42, 0.95)',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '8px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
    fontSize: '14px',
    fontWeight: '600',
    zIndex: '9999',
    opacity: '0',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255,255,255,0.1)'
  });

  document.body.appendChild(toast);
  
  // Force repaint & animate
  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  }, 50);

  // Hide and destroy
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Play subtle synthetic audio feedback (using Web Audio API)
function playFeedbackSound(isCorrect) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (isCorrect) {
      // Positive sound: 2 quick ascending notes
      osc.type = "sine";
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
      gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
      osc.start();
      osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.08); // E5
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
      osc.stop(audioCtx.currentTime + 0.25);
    } else {
      // Negative sound: low buzz
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(150, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
      osc.start();
      osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.25);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
      osc.stop(audioCtx.currentTime + 0.25);
    }
  } catch (e) {
    // Web Audio not supported
  }
}

// ----------------------------------------------------
// EASTER EGGS LOGIC
// ----------------------------------------------------

// Comic laugh primary URL
const LAUGH_SOUND_URL = "https://www.soundjay.com/human/sounds/laughter-comic-1.mp3";
// Victory applause primary URL
const VICTORY_SOUND_URL = "https://www.soundjay.com/human/sounds/applause-1.mp3";

function playBeepSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);
  } catch (e) {}
}

function playSyntheticLaugh() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const now = audioCtx.currentTime;
    for (let i = 0; i < 6; i++) {
      const t = now + i * 0.15;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.type = "sawtooth";
      const freq = 200 - i * 18;
      osc.frequency.setValueAtTime(freq, t);
      osc.frequency.exponentialRampToValueAtTime(freq - 15, t + 0.1);
      
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.06, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
      
      osc.start(t);
      osc.stop(t + 0.12);
    }
  } catch (e) {}
}

function playSyntheticVictory() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const now = audioCtx.currentTime;
    const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
    notes.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + idx * 0.15);
      
      gain.gain.setValueAtTime(0, now + idx * 0.15);
      gain.gain.linearRampToValueAtTime(0.08, now + idx * 0.15 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.15 + 0.4);
      
      osc.start(now + idx * 0.15);
      osc.stop(now + idx * 0.15 + 0.4);
    });
  } catch (e) {}
}

function triggerLaughingEaster() {
  // Screen shake effect
  document.body.classList.add("screen-shake");
  setTimeout(() => document.body.classList.remove("screen-shake"), 600);

  // Play sound
  const audio = new Audio(LAUGH_SOUND_URL);
  audio.volume = 0.5;
  audio.play().catch(() => {
    // Fallback if blocked/offline
    playSyntheticLaugh();
  });

  // Create overlay
  const overlay = document.createElement("div");
  overlay.className = "easter-overlay";
  overlay.innerHTML = `
    <div class="easter-title" style="color: var(--error); font-family: monospace;">HAHAHA! 😈</div>
    <div class="easter-subtitle">Bạn đã làm sai liên tiếp 5 câu rồi đó!<br>Làm ơn hãy ôn tập thật kỹ, đừng đoán mò nữa nhé!</div>
    <button class="easter-btn" id="close-easter-btn" style="background: var(--error);">Tôi sẽ học chăm hơn 🙇‍♂️</button>
  `;
  document.body.appendChild(overlay);

  // Trigger fade-in
  setTimeout(() => overlay.classList.add("active"), 50);

  // Close hook
  document.getElementById("close-easter-btn").onclick = () => {
    overlay.classList.remove("active");
    setTimeout(() => overlay.remove(), 500);
  };

  // Run emoji rain
  startEmojiRain(['😂', '🤣', '🤡', '💀']);
}

function triggerLegendEaster() {
  // Play Victory sound
  const audio = new Audio(VICTORY_SOUND_URL);
  audio.volume = 0.5;
  audio.play().catch(() => {
    // Fallback if blocked/offline
    playSyntheticVictory();
  });

  // Create overlay
  const overlay = document.createElement("div");
  overlay.className = "easter-overlay";
  overlay.innerHTML = `
    <div class="easter-title" style="color: var(--success); text-shadow: 0 0 20px rgba(16, 185, 129, 0.4);">HUYỀN THOẠI! 👑</div>
    <div class="easter-subtitle">Đỉnh cao! Bạn đã trả lời đúng liên tiếp 10 câu hỏi!<br>Cứ giữ vững phong độ này thì điểm A+ nằm chắc trong tay rồi!</div>
    <button class="easter-btn" id="close-easter-btn">Tiếp Tục Phát Huy! 🔥</button>
  `;
  document.body.appendChild(overlay);

  // Trigger fade-in
  setTimeout(() => overlay.classList.add("active"), 50);

  // Close hook
  document.getElementById("close-easter-btn").onclick = () => {
    overlay.classList.remove("active");
    setTimeout(() => overlay.remove(), 500);
  };

  // Run emoji rain
  startEmojiRain(['🎉', '🔥', '✨', '👑', '💯']);
}

function startEmojiRain(emojis) {
  const container = document.createElement("div");
  container.className = "emoji-rain";
  document.body.appendChild(container);

  const duration = 3000; // 3 seconds of spawn
  const spawnInterval = setInterval(() => {
    const emoji = document.createElement("div");
    emoji.className = "floating-emoji";
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.fontSize = (Math.random() * 1.5 + 1.5) + "rem";
    
    const fallDuration = Math.random() * 1.5 + 1.5; // 1.5s to 3s fall time
    emoji.style.animationDuration = fallDuration + "s";
    
    container.appendChild(emoji);
    
    // Auto-remove emoji after it falls
    setTimeout(() => emoji.remove(), fallDuration * 1000);
  }, 60);

  // Stop spawning and remove container
  setTimeout(() => {
    clearInterval(spawnInterval);
    setTimeout(() => container.remove(), 3000); // Wait for the last ones to finish falling
  }, duration);
}

function triggerGlitchEvent() {
  // Play glitch sound using Web Audio API
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(350, audioCtx.currentTime);
    osc.frequency.linearRampToValueAtTime(70, audioCtx.currentTime + 0.6);
    
    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.6);
  } catch (e) {}

  // Apply visual glitch / shake
  document.body.classList.add("screen-shake");
  document.documentElement.style.filter = "invert(100%) hue-rotate(180deg) contrast(150%)";
  
  // Flash ghost emoji
  const flash = document.createElement("div");
  Object.assign(flash.style, {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0.5)",
    fontSize: "140px",
    zIndex: "99999",
    transition: "transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.25s",
    opacity: "0",
    pointerEvents: "none"
  });
  flash.textContent = "👻";
  document.body.appendChild(flash);
  
  setTimeout(() => {
    flash.style.transform = "translate(-50%, -50%) scale(1.2)";
    flash.style.opacity = "1";
  }, 50);

  setTimeout(() => {
    document.body.classList.remove("screen-shake");
    document.documentElement.style.filter = "";
    flash.style.opacity = "0";
    setTimeout(() => flash.remove(), 250);
    showNotification("Hệ thống vừa bị nhiễu sóng tâm linh nhẹ... 📶👻");
  }, 650);
}

function triggerForceResetEvent() {
  // Screen shake
  document.body.classList.add("screen-shake");
  setTimeout(() => document.body.classList.remove("screen-shake"), 800);

  // Play synthetic cheeky laugh
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const now = audioCtx.currentTime;
    for (let i = 0; i < 5; i++) {
      const t = now + i * 0.12;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.type = "sine";
      const freq = 600 + (i % 2 === 0 ? 150 : 0);
      osc.frequency.setValueAtTime(freq, t);
      
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.06, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
      
      osc.start(t);
      osc.stop(t + 0.1);
    }
  } catch (e) {}

  // Create overlay
  const overlay = document.createElement("div");
  overlay.className = "easter-overlay";
  overlay.innerHTML = `
    <div class="easter-title" style="color: var(--warning); font-family: monospace; animation: pulseGlow 0.8s infinite alternate;">HEHEHE! 👻</div>
    <div class="easter-subtitle" style="font-size: 1.3rem;">Một thế lực tâm linh tinh nghịch đã can thiệp...<br>Toàn bộ kết quả bài thi của bạn đã bị "phong ấn" và xóa bỏ!</div>
    <button class="easter-btn" id="force-reset-btn" style="background: var(--warning); color: #000; font-weight: 800;">Chấp Nhận Số Phận & Làm Lại Từ Đầu 🔄</button>
  `;
  document.body.appendChild(overlay);

  // Trigger fade-in
  setTimeout(() => overlay.classList.add("active"), 50);

  // Handle force reset
  document.getElementById("force-reset-btn").onclick = () => {
    userAnswers = {};
    bookmarks = {};
    currentIndex = 0;
    activeFilter = "all";
    document.getElementById("filter-select").value = "all";
    localStorage.removeItem(KEYS.SHUFFLED_STATE);
    initializeQuestions();
    saveState();
    renderAll();
    
    // Close overlay
    overlay.classList.remove("active");
    setTimeout(() => overlay.remove(), 500);
    showNotification("👻 Trận địa đã được thiết lập lại!");
  };
}

function handleRunAway(btn) {
  if (btn.disabled) return;
  
  // Randomly pick between text change and movement
  const type = Math.random() < 0.5 ? 'text' : 'move';
  
  if (type === 'text') {
    const textSpan = btn.querySelector(".option-text-span");
    if (textSpan && !btn.dataset.originalText) {
      btn.dataset.originalText = textSpan.textContent;
      const funnyTexts = ["Đề nghị đừng bấm tớ 🥺", "Bạn định chọn bừa à? 🤔", "Né ra nè! 🏃‍♂️", "Sai đấy đừng bấm! ❌"];
      textSpan.textContent = funnyTexts[Math.floor(Math.random() * funnyTexts.length)];
      btn.style.borderColor = "var(--error)";
    }
  } else {
    // Translate randomly
    const randomX = (Math.random() - 0.5) * 80; // -40px to 40px
    const randomY = (Math.random() - 0.5) * 30; // -15px to 15px
    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    btn.style.transition = "transform 0.15s ease-out";
  }
}

function handleRunAwayRestore(btn) {
  // Restore text
  const textSpan = btn.querySelector(".option-text-span");
  if (textSpan && btn.dataset.originalText) {
    textSpan.textContent = btn.dataset.originalText;
    delete btn.dataset.originalText;
    btn.style.borderColor = "";
  }
  // Restore translation
  btn.style.transform = "";
}

function showConfidenceCheck(questionId, selectedKey, callback) {
  const q = questions.find(item => item.id === questionId);
  if (!q) return;

  // Create overlay
  const overlay = document.createElement("div");
  overlay.className = "easter-overlay";
  overlay.innerHTML = `
    <div class="easter-title" style="color: var(--primary); font-size: 2.5rem; text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);">CÂU HỎI THỬ THÁCH 🧠</div>
    <div class="easter-subtitle" style="font-size: 1.3rem; max-width: 500px;">
      Hệ thống nhận thấy bạn chọn đáp án khá nhanh...<br>
      <strong>Bạn có chắc chắn 100% với lựa chọn này không?</strong>
    </div>
    <div style="display: flex; gap: 16px; justify-content: center; margin-top: 16px;">
      <button class="easter-btn" id="conf-yes-btn">Chắc Chắn 100%! 💪</button>
      <button class="easter-btn" id="conf-no-btn" style="background: var(--error); box-shadow: 0 4px 20px rgba(244, 63, 94, 0.4);">Không chắc lắm... 🥺</button>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add("active"), 50);

  document.getElementById("conf-yes-btn").onclick = () => {
    overlay.classList.remove("active");
    setTimeout(() => overlay.remove(), 500);
    callback(selectedKey); // Normal select
  };

  document.getElementById("conf-no-btn").onclick = () => {
    overlay.classList.remove("active");
    setTimeout(() => overlay.remove(), 500);
    
    // Get other options
    const otherOpts = q.options.filter(opt => opt.key !== selectedKey);
    const randomOpt = otherOpts[Math.floor(Math.random() * otherOpts.length)];
    
    showNotification(`👻 Hệ thống đã tráo lựa chọn sang phương án khác giúp bạn!`);
    callback(randomOpt.key); // Swapped select
  };
}

function triggerStrictProctor() {
  // Play subtle proctor warning sound
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(440, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.3);
  } catch(e) {}

  const quotes = [
    "Nghĩ lâu thế bạn ơi, sắp hết giờ rồi! ⏳",
    "Nhìn bài bạn bên cạnh đúng không? Tôi đang theo dõi đấy! 👁️",
    "Câu dễ thế này mà cũng đứng hình à? 👨‍🏫",
    "Định tra cứu Google đúng không? Đừng hòng! 🔍",
    "Học hành kiểu gì mà câu này nhìn mãi không ra vậy? 🙄"
  ];
  const text = quotes[Math.floor(Math.random() * quotes.length)];

  // Check if proctor element already exists
  let proctor = document.querySelector(".strict-proctor");
  if (proctor) proctor.remove();

  proctor = document.createElement("div");
  proctor.className = "strict-proctor";
  Object.assign(proctor.style, {
    position: "fixed",
    bottom: "80px",
    right: "24px",
    background: "rgba(15, 23, 42, 0.95)",
    color: "var(--warning)",
    border: "1px solid var(--warning)",
    borderRadius: "12px",
    padding: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    zIndex: "9999",
    maxWidth: "280px",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "1.4",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    opacity: "0",
    transform: "translateY(20px)",
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    backdropFilter: "blur(5px)"
  });
  
  proctor.innerHTML = `
    <div style="font-size: 28px;">👨‍🏫</div>
    <div>${text}</div>
  `;

  document.body.appendChild(proctor);

  // Fade in
  setTimeout(() => {
    proctor.style.opacity = "1";
    proctor.style.transform = "translateY(0)";
  }, 50);

  // Auto fade out
  setTimeout(() => {
    proctor.style.opacity = "0";
    proctor.style.transform = "translateY(20px)";
    setTimeout(() => proctor.remove(), 300);
  }, 5000);
}

// Theme switching
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem(KEYS.THEME, newTheme);
  updateThemeIcon(newTheme);
  showNotification(`Đã chuyển sang giao diện ${newTheme === 'dark' ? 'Tối' : 'Sáng'}`);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("theme-icon");
  if (theme === "dark") {
    icon.textContent = "☀"; // Show Sun in dark mode to switch to light
    icon.parentElement.title = "Chuyển sang giao diện Sáng";
  } else if (theme === "hacker") {
    icon.textContent = "👾"; // Alien icon for hacker theme
    icon.parentElement.title = "Chuyển sang giao diện Sáng";
  } else {
    icon.textContent = "🌙"; // Show Moon in light mode to switch to dark
    icon.parentElement.title = "Chuyển sang giao diện Tối";
  }
}

// Mobile Drawer navigation
function openMobileDrawer() {
  document.getElementById("sidebar-panel").classList.add("open");
  document.getElementById("sidebar-overlay").classList.add("open");
}

function closeMobileDrawer() {
  document.getElementById("sidebar-panel").classList.remove("open");
  document.getElementById("sidebar-overlay").classList.remove("open");
}

// ----------------------------------------------------
// KEYBOARD NAVIGATION
// ----------------------------------------------------
window.addEventListener("keydown", (e) => {
  if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "SELECT") {
    return;
  }

  const key = e.key.toLowerCase();
  const filtered = getFilteredQuestions();
  if (filtered.length === 0) return;
  const q = filtered[currentIndex];
  const isAnswered = !!userAnswers[q.id];

  if (e.key === "ArrowRight") {
    navigateNext();
  } else if (e.key === "ArrowLeft") {
    navigatePrev();
  } else if (key === "m" || key === "b") {
    toggleBookmark();
  } else if (key === "r") {
    resetQuiz();
  } else if (!isAnswered) {
    // Choose option via keys A, B, C, D or 1, 2, 3, 4
    let optIndex = -1;
    if (key === "a" || key === "1") optIndex = 0;
    else if (key === "b" || key === "2") optIndex = 1;
    else if (key === "c" || key === "3") optIndex = 2;
    else if (key === "d" || key === "4") optIndex = 3;

    if (optIndex >= 0 && optIndex < q.options.length) {
      selectAnswer(q.id, q.options[optIndex].key);
    }
  }
});

// ----------------------------------------------------
// INITIALIZATION & EVENT BINDINGS
// ----------------------------------------------------
function renderAll() {
  renderStats();
  renderQuestionCard();
  renderGrid();
}

window.addEventListener("DOMContentLoaded", () => {
  loadState();
  
  // Night Owl Check (11 PM - 4 AM)
  const currentHour = new Date().getHours();
  if (currentHour >= 23 || currentHour < 4) {
    const banner = document.createElement("div");
    banner.className = "night-owl-banner";
    banner.innerHTML = `
      <span class="night-owl-icon">🦉</span>
      <div class="night-owl-text">
        Khuya rồi, đi ngủ giữ sức...
        <span>Học tập quá khuya có thể ảnh hưởng đến khả năng tiếp thu và sức khỏe của bạn. Hãy nghỉ ngơi đầy đủ nhé!</span>
      </div>
    `;
    const progressBar = document.querySelector(".progress-bar-container");
    if (progressBar) {
      progressBar.parentNode.insertBefore(banner, progressBar);
    }
  }

  renderAll();

  // Bind events
  document.getElementById("prev-btn").addEventListener("click", navigatePrev);
  document.getElementById("next-btn").addEventListener("click", navigateNext);
  document.getElementById("bookmark-btn").addEventListener("click", toggleBookmark);
  document.getElementById("theme-toggle-btn").addEventListener("click", toggleTheme);
  document.getElementById("reset-btn").addEventListener("click", resetQuiz);
  document.getElementById("filter-select").addEventListener("change", handleFilterChange);

  // Hacker theme trigger removed

  // Secret 3-click trigger on brand-icon to toggle Serious Study Mode
  let iconClicks = 0;
  const brandIcon = document.querySelector(".brand-icon");
  if (brandIcon) {
    brandIcon.addEventListener("click", (e) => {
      e.stopPropagation(); // Avoid triggering logo click theme change
      iconClicks++;
      if (iconClicks >= 3) {
        iconClicks = 0;
        isTrollDisabled = !isTrollDisabled;
        localStorage.setItem(KEYS.TROLL_DISABLED, isTrollDisabled.toString());
        playBeepSound();
        if (isTrollDisabled) {
          // Clear any active proctor timer
          if (proctorTimer) {
            clearTimeout(proctorTimer);
            const proctor = document.querySelector(".strict-proctor");
            if (proctor) proctor.remove();
          }
          showNotification("Chế độ Học Tập Nghiêm Túc đã kích hoạt! 📖 (Đã tắt Easter Eggs & Trolls)");
        } else {
          showNotification("Chế độ Học Tập Vui Vẻ đã kích hoạt! 🎉 (Đã bật lại Easter Eggs & Trolls)");
          // Restart proctor timer if current question is unanswered
          const filtered = getFilteredQuestions();
          if (filtered.length > 0 && currentIndex < filtered.length) {
            const q = filtered[currentIndex];
            if (!userAnswers[q.id]) {
              proctorTimer = setTimeout(triggerStrictProctor, 30000);
            }
          }
        }
        if (typeof updateUmlTabVisibility === "function") {
          updateUmlTabVisibility();
        }
        renderQuestionCard(); // Re-render to clear runaway buttons if active
      }
    });
  }

  // Mobile Drawer hooks
  document.getElementById("drawer-toggle-btn").addEventListener("click", openMobileDrawer);
  document.getElementById("sidebar-overlay").addEventListener("click", closeMobileDrawer);
});

// Random Spooky Troll Event: Ghost appearing and telling user to choose quickly
function triggerChooseQuicklyGhost() {
  if (document.querySelector(".quickly-ghost") || isTrollDisabled) return;

  // Sound feedback (subtle spooky beep/wail)
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = "triangle";
    osc.frequency.setValueAtTime(880, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.5);
    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.5);
  } catch (e) {}

  const ghost = document.createElement("div");
  ghost.className = "quickly-ghost";
  Object.assign(ghost.style, {
    position: "fixed",
    bottom: "-150px",
    right: "32px",
    zIndex: "99999",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    pointerEvents: "none"
  });

  ghost.innerHTML = `
    <div style="background: rgba(15, 23, 42, 0.95); border: 1px solid var(--border); padding: 8px 12px; border-radius: 12px; font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.35); position: relative; text-align: center; white-space: nowrap; animation: floatBubble 1.5s infinite ease-in-out alternate;">
      Chọn nhanh đê! ⚡
      <div style="position: absolute; bottom: -6px; right: 24px; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 6px solid rgba(15, 23, 42, 0.95);"></div>
    </div>
    <div style="font-size: 64px; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.3)); animation: hoverGhost 2s infinite ease-in-out alternate;">👻</div>
  `;

  // Add bubble floating animations to document style if not exists
  if (!document.getElementById("ghost-animations")) {
    const style = document.createElement("style");
    style.id = "ghost-animations";
    style.innerHTML = `
      @keyframes floatBubble {
        from { transform: translateY(0); }
        to { transform: translateY(-4px); }
      }
      @keyframes hoverGhost {
        from { transform: translateY(0) scale(1); }
        to { transform: translateY(-8px) scale(0.95); }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(ghost);

  // Animate in (slide up)
  setTimeout(() => {
    ghost.style.transform = "translateY(-180px)";
  }, 50);

  // Animate out (slide down) and remove
  setTimeout(() => {
    ghost.style.transform = "translateY(0)";
    setTimeout(() => ghost.remove(), 400);
  }, 2800);
}

// ----------------------------------------------------
// PHOENIX RESURRECTION EASTER EGG
// ----------------------------------------------------

function triggerPhoenixResurrection(callback) {
  let overlay = document.getElementById("phoenix-resurrection-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "phoenix-resurrection-overlay";
    overlay.className = "phoenix-overlay";
    document.body.appendChild(overlay);
  }
  
  overlay.innerHTML = `
    <div class="phoenix-container">
      <div class="phoenix-bird">
        <svg width="160" height="160" viewBox="0 0 100 100" fill="url(#fireGradientResurrect)">
          <defs>
            <linearGradient id="fireGradientResurrect" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#ef4444" />
              <stop offset="30%" stop-color="#f97316" />
              <stop offset="70%" stop-color="#eab308" />
              <stop offset="100%" stop-color="#fff" />
            </linearGradient>
            <filter id="glowResurrect" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path d="M50 15 C42 32 25 38 2 32 C22 42 38 52 42 75 C45 62 47 52 50 46 C53 52 55 62 58 75 C62 52 78 42 98 32 C75 38 58 32 50 15 Z" filter="url(#glowResurrect)" />
          <path d="M50 32 C46 39 40 42 32 45 C41 48 46 52 46 58 C47 52 49 48 50 42 Z" opacity="0.95" fill="#fff" />
          <path d="M25 38 C14 46 3 43 0 40 C10 48 20 50 24 53 Z" />
          <path d="M75 38 C86 46 97 43 100 40 C90 48 80 50 76 53 Z" />
        </svg>
      </div>
      <div class="phoenix-particles" id="phoenix-fire-particles"></div>
    </div>
    <div class="phoenix-text">PHƯỢNG HOÀNG LỬA HỒI SINH! 🔥</div>
    <div class="phoenix-subtext">Bạn được trao cơ hội thứ hai để làm lại câu này!</div>
  `;
  
  const particlesContainer = overlay.querySelector("#phoenix-fire-particles");
  const particleSymbols = ["🔥", "✨", "☄️", "💥"];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement("span");
    p.className = "phoenix-fire-particle";
    p.textContent = particleSymbols[Math.floor(Math.random() * particleSymbols.length)];
    p.style.left = `${Math.random() * 260 + 20}px`;
    p.style.animationDelay = `${Math.random() * 1.5}s`;
    p.style.animationDuration = `${Math.random() * 1.2 + 0.8}s`;
    p.style.fontSize = `${Math.random() * 20 + 16}px`;
    particlesContainer.appendChild(p);
  }
  
  playResurrectionSound();
  overlay.classList.add("active");
  
  setTimeout(() => {
    overlay.classList.remove("active");
    setTimeout(() => {
      overlay.innerHTML = "";
      if (callback) callback();
    }, 500);
  }, 2600);
}

function playResurrectionSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const now = audioCtx.currentTime;
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();
    
    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(1100, now + 1.6);
    
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(350, now);
    filter.frequency.exponentialRampToValueAtTime(3200, now + 1.6);
    
    gainNode.gain.setValueAtTime(0.01, now);
    gainNode.gain.linearRampToValueAtTime(0.06, now + 0.6);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 2.0);
    
    osc.start(now);
    osc.stop(now + 2.0);
    
    // Play ascending major chord arpeggio
    const chordNotes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
    chordNotes.forEach((freq, idx) => {
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.connect(g);
      g.connect(audioCtx.destination);
      o.type = "triangle";
      o.frequency.setValueAtTime(freq, now + 0.3 + idx * 0.1);
      o.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 1.6);
      
      g.gain.setValueAtTime(0, now + 0.3 + idx * 0.1);
      g.gain.linearRampToValueAtTime(0.04, now + 0.3 + idx * 0.1 + 0.2);
      g.gain.exponentialRampToValueAtTime(0.001, now + 2.0);
      
      o.start(now + 0.3 + idx * 0.1);
      o.stop(now + 2.0);
    });
  } catch (e) {}
}
