import quote, { quoteInit } from "./quote.js";

export function dashboardInit() {
  const quoteContainer = document.querySelector(".feature-item.quote");

  if (quoteContainer) {
    quoteContainer.innerHTML = quote();
    quoteInit();
  }
}

export default function dashboard() {
  return `
  <style>
  .dash-full {
    display: grid;
    place-items: center;
    height: 100%;
    padding: 50px;
  } 
  #welcome {
    background-color: color-mix(in srgb, var(--primary-color), transparent 90%);
    display: flex; 
    justify-content: space-between;
    align-items: center;
    border-radius: 25px; 
    width: 100%;
    padding: 20px 50px; 
    /* FIX: Use heading-color so it adapts to light/dark mode */
    color: var(--heading-color); 
  }
  #welcome img {
    width: 200px;
    align-self: flex-end;
  } 
  .feature-container {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin:  auto;
  }
  .feature-item {
    background: var(--bg-color);
    border-radius: 25px;
    padding: 20px;
  }
  .feature-item:first-child {
    grid-column: span 2;
  }
  .feature-icon {
    width: 60px;
    height: 60px;
    border-radius: 15px;
    background-color: var(--secondary-bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-color);
  }
  .feature-row {
    display: flex;
    gap: 20px;
  }
  h2 {
    color: var(--heading-color);
    font-size: 20px;
    font-weight: 600;
  }
  .feature-icon svg {
    width: 30px;
    height: 30px;
  }
  .btn-row {
    margin-top: 15px;
  }
  .btn-feature {
    padding: 10px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* FIX: Use a new variable for readable text/borders, fallback to primary */
    color: var(--primary-text-color, var(--primary-color));
    font-size: 15px;
    border-radius: 12px;
    font-weight: 600;
    /* FIX: Apply the same variable to the border */
    border: solid 2px var(--primary-text-color, var(--primary-color));
    text-decoration: none;
  }
  .btn-feature:hover {
  background: var(--primary-color);
  color: var(--bg-color);
  transform: translateY(-2px);
}

  @keyframes fadeEffect {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  </style>
  <div class="dash-full">
     <div id="welcome">
      <div>
        <h1>👋 Hey there, Welcome back!</h1>
        <p>How can we help boost your learning productivity today?</p>
      </div>
      <img src="../images/welcome.svg"> 
    </div>
    <div class="feature-container">
      <div class="feature-item quote"></div>
      <div class="feature-item">
        <div class="feature-row">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.75 2.001a2.25 2.25 0 0 1 2.245 2.096L20 4.25v10.128q-.181.12-.341.28l-3.409 3.408l-.908-.91a2.24 2.24 0 0 0-1.5-.657h2.408a.75.75 0 1 0 0-1.5h-5.004a.75.75 0 0 0 0 1.5h2.413a2.25 2.25 0 0 0-1.5 3.839l1.659 1.66H6.25a2.25 2.25 0 0 1-2.245-2.096L4 19.75V4.251a2.25 2.25 0 0 1 2.096-2.245l.154-.005zM9 7.751a1 1 0 1 0-2 0a1 1 0 0 0 2 0M11.246 7a.75.75 0 0 0 0 1.5h5.004a.75.75 0 1 0 0-1.5zm-.75 4.75c0 .414.336.75.75.75h5.004a.75.75 0 1 0 0-1.5h-5.004a.75.75 0 0 0-.75.75M9 11.75a1 1 0 1 0-2 0a1 1 0 0 0 2 0m0 3.998a1 1 0 1 0-2 0a1 1 0 0 0 2 0m7.25 4.441l4.47-4.47a.75.75 0 1 1 1.06 1.061l-5 5l-.051.047a.75.75 0 0 1-1.01-.047l-2.5-2.501a.75.75 0 0 1 1.062-1.06z"/></svg>
          </div>
          <div>
            <h2>Manage your tasks</h2>
            <p>Organize your study tasks</p>
          </div>
        </div>
        <div class="btn-row">
          <a href="/todo" class="btn-feature" data-link>View Todo List</a>
        </div>
      </div>
      <div class="feature-item">
      <div class="feature-row">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M7.398 12.809a1.04 1.04 0 0 0 1.204-.003c.178-.13.313-.31.387-.518l.447-1.373a2.34 2.34 0 0 1 1.477-1.479l1.391-.45a1.045 1.045 0 0 0-.044-1.98l-1.375-.448a2.34 2.34 0 0 1-1.48-1.477l-.452-1.388a1.044 1.044 0 0 0-1.973.017l-.457 1.4a2.34 2.34 0 0 1-1.44 1.45l-1.39.447a1.045 1.045 0 0 0 .016 1.974l1.374.445a2.33 2.33 0 0 1 1.481 1.488l.452 1.391c.072.204.206.38.382.504m6.137 4.042a.806.806 0 0 0 1.226-.398l.248-.762a1.1 1.1 0 0 1 .26-.42c.118-.12.262-.208.42-.26l.772-.252a.8.8 0 0 0-.023-1.52l-.764-.25a1.08 1.08 0 0 1-.68-.678l-.252-.773a.8.8 0 0 0-1.518.01l-.247.762a1.07 1.07 0 0 1-.665.679l-.773.252a.8.8 0 0 0 .008 1.518l.763.247c.16.054.304.143.422.261c.119.119.207.263.258.422l.253.774a.8.8 0 0 0 .292.388"/></svg>
          </div>
          <div>
            <h2>AI Study Assistant</h2>
            <p>Ask questions, get explanations</p>
          </div>
        </div>
        <div class="btn-row">
          <a href="/ai-chat" class="btn-feature" data-link>Start Chatting</a>
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-row">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M10 3h4v2h-4zm2 11a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1m0 8a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9"
              />
            </svg>
          </div>
          <div>
            <h2>Study Timer</h2>
            <p>Stay focused with everytime</p>
          </div>
        </div>
        <div class="btn-row">
          <a href="/timer" class="btn-feature" data-link>Start Timer</a>
        </div>
      </div>
    <div class="feature-item">
      <div class="feature-row">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v336c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147l-256 76.8V432c0 44.2-43 80-96 80S0 476.2 0 432s43-80 96-80c11.2 0 22 1.6 32 4.6V128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5"/></svg>
        </div>
        <div>
          <h2>Lofi Music</h2>
          <p>Relaxing beats to help you focus</p>
        </div>
      </div>
      <div class="btn-row">
        <a href="/lofi-music" class="btn-feature" data-link>Play Music</a>
      </div>
    </div>
    </div>
  </div>
  `;
}
