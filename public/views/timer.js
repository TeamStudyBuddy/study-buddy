const timerState = {
  workMinutes: 25,
  shortBreakMinutes: 5,
  longBreakMinutes: 15,
  workSeconds: 25 * 60,
  breakSeconds: 15 * 60,
  workInterval: null,
  breakInterval: null,
};

function updateTimerDisplay() {
  update(document.getElementById("workTimer"), timerState.workSeconds);
  update(document.getElementById("breakTimer"), timerState.breakSeconds);
}

export function timerInit() {
  const style = document.createElement("style");
  style.textContent = `
  .timer-center {
  min-height: 100%;
  display: flex;
  align-items: center;     /* vertical center */
  justify-content: center; /* horizontal center */
  }
  .timer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  
  
  padding: 1.5rem; 
  margin: 1rem auto;
  
  
  width: 90%; 
  max-width: 500px; 
  
  background-color: transparent;
  border-radius: 20px;
  
  
  box-sizing: border-box; 
}


@media (min-width: 600px) {
  .timer-container {
    padding: 2rem 4rem;
    margin: 2rem auto;
    border-radius: 30px;
    background-color: var(--bg-color);
  }
}

  .tabs {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    background-color: var(--secondary-bg-color);
    padding: 0.5rem;
    border-radius: 12px;
  }

  .tab-btn {
    background-color: transparent;
    border: none;
    color: var(--text-color);
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 500;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-family: var(--font-primary);
  }

  .tab-btn:hover {
    color: var(--heading-color);
  }

  .tab-btn.active-tab {
    background-color: var(--primary-color);
    color: var(--bg-color);
  }

  /* ===== CONTENT TOGGLING ===== */
  .timer-set {
    display: none; /* Hidden by default */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    animation: fadeIn 0.4s ease;
  }

  .timer-set.active-content {
    display: flex; /* Shown when active */
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }

  h1, h3 {
    color: var(--heading-color);
    margin: 0;
  }

  h3 {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: var(--heading-color);
  }

  .timer {
    font: var(--font--text);
    font-size: 3.5rem;
    margin: 0.5rem 0;
    color: var(--heading-color);
    font-variant-numeric: tabular-nums;
  }

  .controls {
    text-align: center;
  }

  /* ===== CONTROLS & INPUTS ===== */
  .controls button, .settings button {
    transition: background-color 0.25s ease, transform 0.2s ease;
    font: var(--font--text);
    margin: 0.2rem 0.4rem;
    padding: 0.5rem 1.2rem;
    cursor: pointer;
    border: 1px solid var(--primary-color);
    border-radius: 8px;
    background-color: transparent; /* Outline style */
    color: var(--primary-color);
    font-weight: bold;
  }
  
  button:hover {
    background-color: rgba(220, 247, 99, 0.1);
  }

  button.active {
    background-color: var(--primary-color);
    color: var(--bg-color); /* Dark text on bright button */
  }

  .settings {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .settings input { 
    width: 70px;
    height: 35px;
    font: var(--font--text);
    border: 1px solid var(--text-color);
    border-radius: 8px;
    background-color: var(--bg-color);
    color: var(--heading-color);
    text-align: center;
    font-weight: bold;
  }

  .settings input:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  /* ===== Tomato ===== */
  .tomato-svg {
    width: 140px;
    height: 140px;
    margin: 0.2rem auto;
    display: block;
    opacity: 0.8;
    transform-origin: center;
  }
  .tomato-svg.visible { opacity: 1; }
  .tomato-svg.active { animation: tomatoPulse 1.6s ease-in-out infinite; }
  .tomato-svg.active #leaf {
    transform-origin: 100px 55px;
    animation: leafSway 1.4s ease-in-out infinite;
  }

  /* ===== Clock ===== */
  .clock {
    width: 120px;
    height: 120px;
    border: 6px solid var(--secondary-color); /* Updated to match theme */
    border-radius: 50%;
    margin: 0.5rem auto;
    position: relative;
    opacity: 0.8;
    transform-origin: center;
  }
  .clock.visible { opacity: 1; }
  .clock.active { animation: clockPulse 1.5s ease-in-out infinite; }
  .clock::before, .clock::after {
    content: "";
    position: absolute;
    background: var(--secondary-color); /* Updated to match theme */
    top: 50%;
    left: 50%;
    transform-origin: bottom center;
  }
  @media (max-width: 768px) {
    .tabs {
      background-color: var(--bg-color);
    }
  }

  .clock::before { width: 4px; height: 35px; transform: translate(-50%, -100%); }
  .clock::after { width: 2px; height: 45px; transform: translate(-50%, -100%); }
  
  .clock.active::before { animation: hourHand 20s linear infinite; }
  .clock.active::after { animation: minuteHand 6s linear infinite; }

  /* Animations */
  @keyframes tomatoPulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
  @keyframes leafSway { 0% { transform: rotate(0deg); } 25% { transform: rotate(6deg); } 50% { transform: rotate(0deg); } 75% { transform: rotate(-6deg); } 100% { transform: rotate(0deg); } }
  @keyframes clockPulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
  @keyframes hourHand { from { transform: translate(-50%, -100%) rotate(0deg); } to { transform: translate(-50%, -100%) rotate(360deg); } }
  @keyframes minuteHand { from { transform: translate(-50%, -100%) rotate(0deg); } to { transform: translate(-50%, -100%) rotate(360deg); } }
  `;
  document.head.appendChild(style);

  /* ---------------- Defining Variables---------------- */
  const workTimer = document.getElementById("workTimer");
  const breakTimer = document.getElementById("breakTimer");
  const workAnim = document.getElementById("workAnim");
  const breakAnim = document.getElementById("breakAnim");

  update(workTimer, timerState.workSeconds);
  update(breakTimer, timerState.breakSeconds);
  if (timerState.workInterval) {
    workAnim.classList.add("visible", "active");
  }
  if (timerState.breakInterval) {
    breakAnim.classList.add("visible", "active");
  }

  /* ---------------- TAB SYSTEM LOGIC ---------------- */
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".timer-set");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // 1. Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active-tab"));
      // 2. Add active class to clicked tab
      tab.classList.add("active-tab");

      // 3. Hide all content
      contents.forEach((c) => c.classList.remove("active-content"));

      // 4. Show target content
      const targetId = tab.dataset.target;
      document.getElementById(targetId).classList.add("active-content");
    });
  });

  /* ---- Buttons (Set Time Only) ---- */

  document.getElementById("applyWork").onclick = () => {
    timerState.workMinutes = +document.getElementById("workInput").value;
    timerState.workSeconds = timerState.workMinutes * 60;
    update(workTimer, timerState.workSeconds);
    workAnim.classList.add("visible");
  };

  document.getElementById("applyShort").onclick = () => {
    timerState.shortBreakMinutes = +document.getElementById("shortInput").value;
    timerState.breakSeconds = timerState.shortBreakMinutes * 60;
    update(breakTimer, timerState.breakSeconds);
    breakAnim.classList.add("visible");
  };

  document.getElementById("applyLong").onclick = () => {
    timerState.longBreakMinutes = +document.getElementById("longInput").value;
    timerState.breakSeconds = timerState.longBreakMinutes * 60;
    update(breakTimer, timerState.breakSeconds);
    breakAnim.classList.add("visible");
  };

  document.querySelectorAll(".controls").forEach((controlGroup) => {
    const buttons = controlGroup.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
      });
    });
  });

  /* ---- Work Timer ---- */
  document.getElementById("workStart").onclick = () => {
    if (timerState.workInterval) return;
    workAnim.classList.add("visible", "active");
    timerState.workInterval = setInterval(() => {
      timerState.workSeconds--;
      updateTimerDisplay();
      if (timerState.workSeconds <= 0) stopWork();
    }, 1000);
  };

  document.getElementById("workPause").onclick = () => {
    clearInterval(timerState.workInterval);
    timerState.workInterval = null;
    workAnim.classList.remove("active");
  };

  document.getElementById("workReset").onclick = () => {
    clearInterval(timerState.workInterval);
    timerState.workInterval = null;
    timerState.workSeconds = timerState.workMinutes * 60;
    update(workTimer, timerState.workSeconds);
    workAnim.classList.remove("active", "visible");
  };

  /* ---- Break Timer ---- */

  document.getElementById("breakStart").onclick = () => {
    if (timerState.breakInterval) return;
    breakAnim.classList.add("visible", "active");
    timerState.breakInterval = setInterval(() => {
      timerState.breakSeconds--;
      updateTimerDisplay();
      if (timerState.breakSeconds <= 0) stopBreak();
    }, 1000);
  };

  document.getElementById("breakPause").onclick = () => {
    clearInterval(timerState.breakInterval);
    timerState.breakInterval = null;
    breakAnim.classList.remove("active");
  };

  document.getElementById("breakReset").onclick = () => {
    clearInterval(timerState.breakInterval);
    timerState.breakInterval = null;
    timerState.breakSeconds = timerState.longBreakMinutes * 60;
    update(breakTimer, timerState.breakSeconds);
    breakAnim.classList.remove("active", "visible");
  };

  /* ---- Timer End ---- */

  function stopWork() {
    clearInterval(timerState.workInterval);
    timerState.workInterval = null;
    workAnim.classList.remove("active", "visible");
    notify("Now it's the time to take a break!");
  }

  function stopBreak() {
    clearInterval(timerState.breakInterval);
    timerState.breakInterval = null;
    breakAnim.classList.remove("active", "visible");
    notify("Now it's the time to work!");
  }
}

/* ---------------- Notifications ---------------- */

function update(el, seconds) {
  if (!el) return;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  el.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function notify(msg) {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(msg);
  } else {
    alert(msg);
  }
}

export default function timer() {
  return ` 
  <div class="timer-center">
  <section class="timer-container">

  <div class="tabs">
    <button class="tab-btn active-tab" data-target="pomodoroSet">Pomodoro</button>
    <button class="tab-btn" data-target="breakSet">Break</button>
  </div>

  <div class="timer-set active-content" id="pomodoroSet">
    <h1>Pomodoro Timer</h1>
    <svg id="workAnim" class="tomato-svg" viewBox="0 0 200 200">
      <circle cx="100" cy="110" r="60" fill="#e53935" />
      <ellipse cx="75" cy="90" rx="15" ry="25" fill="rgba(255,255,255,0.2)" />
      <path id="leaf"
            d="M100 30 C70 20, 60 50, 90 55 C100 40, 110 40, 110 55 C140 50, 130 20, 100 30"
            fill="#2e7d32"/>
    </svg>
    <div class="timer" id="workTimer">25:00</div>

    <div class="controls">
      <button id="workStart">Start</button>
      <button id="workPause">Pause</button>
      <button id="workReset">Reset</button>
    </div>

    <h3>Work Time Settings</h3>
    <div class="settings">
      <input type="number" id="workInput" value="25" min="1">
      <button id="applyWork">Set</button>
    </div>
  </div>

  <div class="timer-set" id="breakSet">
    <h1>Break Timer</h1>
    <div class="clock" id="breakAnim"></div>
    <div class="timer" id="breakTimer">15:00</div>

    <div class="controls">
      <button id="breakStart">Start</button>
      <button id="breakPause">Pause</button>
      <button id="breakReset">Reset</button>
    </div>

    <h3>Break Time Settings</h3>
    <div class="settings">
      <input type="number" id="shortInput" value="5" min="1">
      <button id="applyShort">Short Break</button>
    </div>

    <div class="settings">
      <input type="number" id="longInput" value="15" min="1">
      <button id="applyLong">Long Break</button>
    </div>
  </div>
</section></div>`;
}
