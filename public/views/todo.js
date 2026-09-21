export default function todo() {
  return `
    <style>
      .todo-wrapper, .todo-wrapper * {
        box-sizing: border-box;
      }

      .todo-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 50px;
      }

      .todo-header {
        margin-bottom: 30px;
        text-align: center;
      }

      .todo-header h1 {
        color: var(--heading-color);
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 8px;
      }

      .todo-header p {
        color: var(--text-color);
        font-size: 15px;
      }

      .todo-input-section {
        background-color: var(--bg-color);
        border-radius: 20px;
        padding: 25px;
        margin-bottom: 25px;
        width: 100%;
      }

      .todo-input-group {
        display: flex;
        gap: 12px;
        width: 100%;
      }

      #todoInput {
        flex: 1;
        width: 100%;
        background-color: var(--secondary-bg-color);
        color: var(--heading-color);
        border: 2px solid transparent;
        padding: 15px 20px;
        border-radius: 15px;
        font-size: 15px;
        font-family: var(--font-primary);
        transition: all 0.2s ease;
      }

      #todoInput::placeholder {
        color: var(--text-color);
        opacity: 0.7;
      }

      #todoInput:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-color), transparent 85%);
      }

      #addTodoBtn {
        background-color: var(--primary-color);
        color: var(--bg-color);
        border: none;
        padding: 15px 35px;
        border-radius: 15px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        font-family: var(--font-primary);
        white-space: nowrap;
      }

      #addTodoBtn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px color-mix(in srgb, var(--primary-color), transparent 60%);
      }

      #addTodoBtn:active {
        transform: translateY(0);
      }

      .todo-list-container {
        background-color: var(--bg-color);
        border-radius: 20px;
        padding: 25px;
        flex: 1;
        overflow-y: auto;
        width: 100%;
      }

      .todo-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 0;
        margin: 0;
      }

      .todo-item {
        background-color: var(--secondary-bg-color);
        border-radius: 15px;
        padding: 18px 22px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.2s ease;
        animation: slideIn 0.3s ease;
        width: 100%;
      }

      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .todo-item:hover {
        transform: translateX(4px);
      }

      .todo-item span {
        color: var(--heading-color);
        font-size: 15px;
        flex: 1;
        transition: all 0.2s ease;
        word-break: break-word;
        padding-right: 15px;
      }

      .todo-item.completed span {
        text-decoration: line-through;
        opacity: 0.5;
      }

      .todo-actions {
        display: flex;
        gap: 10px;
        flex-shrink: 0;
      }

      .todo-actions button {
        border: none;
        padding: 8px 18px;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        font-family: var(--font-primary);
      }

      .toggle-btn {
        background-color: color-mix(in srgb, var(--primary-color), transparent 85%);
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
      }

      .toggle-btn:hover {
        background-color: var(--primary-color);
        color: var(--bg-color);
        transform: translateY(-2px);
      }

      .delete-btn {
        background-color: color-mix(in srgb, #ff6b6b, transparent 85%);
        color: #ff6b6b;
        border: 2px solid #ff6b6b;
      }

      .delete-btn:hover {
        background-color: #ff6b6b;
        color: white;
        transform: translateY(-2px);
      }

      .todo-item.completed .toggle-btn {
        background-color: var(--secondary-bg-color);
        color: var(--text-color);
        border-color: var(--text-color);
      }

      .empty-state {
        text-align: center;
        padding: 60px 20px;
        color: var(--text-color);
      }

      .empty-state svg {
        width: 80px;
        height: 80px;
        margin-bottom: 20px;
        opacity: 0.5;
        color: var(--primary-color);
      }

      .empty-state h3 {
        color: var(--heading-color);
        font-size: 20px;
        margin-bottom: 8px;
      }

      .empty-state p {
        font-size: 14px;
      }

      .error {
        text-align: center;
        padding: 40px 20px;
        background-color: color-mix(in srgb, #ff6b6b, transparent 90%);
        color: #ff6b6b;
        border-radius: 15px;
        margin: 20px;
      }

      .error a {
        color: var(--primary-color);
        font-weight: 600;
        text-decoration: none;
      }

      .error a:hover {
        text-decoration: underline;
      }

      .todo-list-container::-webkit-scrollbar {
        width: 8px;
      }

      .todo-list-container::-webkit-scrollbar-track {
        background: transparent;
      }

      .todo-list-container::-webkit-scrollbar-thumb {
        background: var(--secondary-bg-color);
        border-radius: 10px;
      }

      .todo-list-container::-webkit-scrollbar-thumb:hover {
        background: color-mix(in srgb, var(--primary-color), transparent 70%);
      }

      @media (max-width: 768px) {
        .todo-wrapper {
          padding: 20px;
        }

        .todo-header h1 {
          font-size: 26px;
        }
        
        .todo-input-section {
          padding: 20px;
        }

        .todo-input-group {
          flex-direction: column;
        }

        #addTodoBtn {
          width: 100%;
        }

        .todo-list-container {
          padding: 15px;
        }

        .todo-item {
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
          padding: 15px;
        }

        .todo-item:hover {
          transform: none;
        }

        .todo-item span {
          padding-right: 0;
          width: 100%;
        }

        .todo-actions {
          width: 100%;
          justify-content: flex-end;
        }
      }

      @media (max-width: 480px) {
        .todo-wrapper {
          padding: 15px;
        }
        
        .todo-actions button {
          flex: 1;
        }
      }
    </style>
    <div class="todo-wrapper">
      <div class="todo-header">
        <h1>Study Tasks</h1>
      </div>
      <div class="todo-input-section">
        <div class="todo-input-group">
          <input type="text" id="todoInput" placeholder="What do you need to study today?" />
          <button id="addTodoBtn">Add Task</button>
        </div>
      </div>
      <div class="todo-list-container">
        <ul id="todoList" class="todo-list"></ul>
      </div>
    </div>
  `;
}

export const todoInit = async () => {
  const token = localStorage.getItem("token");
  const todoList = document.getElementById("todoList");
  const addBtn = document.getElementById("addTodoBtn");
  const input = document.getElementById("todoInput");

  if (!token) {
    todoList.innerHTML = `<p class="error">Please <a href="/login" data-link>login</a> to manage your tasks.</p>`;
    return;
  }

  const fetchTodos = async () => {
    const res = await fetch("/api/todos", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.ok) {
      const tasks = await res.json();

      if (tasks.length === 0) {
        todoList.innerHTML = `
          <div class="empty-state">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 2a1 1 0 0 0-1 1v1H4a1 1 0 0 0-1 1v1h18V5a1 1 0 0 0-1-1h-4V3a1 1 0 0 0-1-1H9zm0 2h6v1H9V4zm-7 4v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8H2zm7 2h6v2H9v-2z"/>
            </svg>
            <h3>No tasks yet!</h3>
            <p>Add your first study task to get started</p>
          </div>
        `;
        return;
      }

      todoList.innerHTML = tasks
        .map(
          (task) => `
        <li class="todo-item ${task.is_completed ? "completed" : ""}" data-id="${task.id}">
          <span>${task.task}</span>
          <div class="todo-actions">
            <button class="toggle-btn">${task.is_completed ? "Undo" : "Done"}</button>
            <button class="delete-btn">Delete</button>
          </div>
        </li>
      `,
        )
        .join("");
    }
  };

  addBtn.onclick = async () => {
    const task = input.value.trim();
    if (!task) return;

    const res = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ task }),
    });

    if (res.ok) {
      input.value = "";
      fetchTodos();
    }
  };

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addBtn.click();
    }
  });

  todoList.onclick = async (e) => {
    const listItem = e.target.closest("li");
    if (!listItem) return;

    const id = listItem.dataset.id;

    if (e.target.classList.contains("delete-btn")) {
      await fetch(`/api/todos/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTodos();
    } else if (e.target.classList.contains("toggle-btn")) {
      const isCompleted = !listItem.classList.contains("completed");
      await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ is_completed: isCompleted }),
      });
      fetchTodos();
    }
  };

  fetchTodos();
};
