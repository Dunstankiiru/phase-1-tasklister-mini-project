document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const input = document.querySelector("#new-task-description");
  const prioritySelect = document.querySelector("#task-priority");
  const dueDateInput = document.querySelector("#task-due-date");
  const taskList = document.querySelector("#tasks");
  const sortButton = document.querySelector("#sort-tasks");

  let tasks = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = input.value.trim();
    const priority = prioritySelect.value;
    const dueDate = dueDateInput.value;

    if (!taskText) return;

    const taskObj = {
      text: taskText,
      priority: priority,
      dueDate: dueDate,
      id: Date.now()
    };

    tasks.push(taskObj);
    renderTasks();

    input.value = "";
    dueDateInput.value = "";
  });

  function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(task => {
      const listItem = document.createElement("li");
      listItem.classList.add(task.priority);

      const taskSpan = document.createElement("span");
      taskSpan.textContent = `${task.text} ${task.dueDate ? ` (Due: ${task.dueDate})` : ""}`;

      // Edit button
      const editBtn = document.createElement("button");
      editBtn.textContent = "✏️ Edit";
      editBtn.addEventListener("click", () => editTask(task.id));

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "❌ Delete";
      deleteBtn.addEventListener("click", () => {
        tasks = tasks.filter(t => t.id !== task.id);
        renderTasks();
      });

      listItem.append(taskSpan, editBtn, deleteBtn);
      taskList.appendChild(listItem);
    });
  }

  function editTask(taskId) {
    const taskToEdit = tasks.find(task => task.id === taskId);
    if (!taskToEdit) return;

    input.value = taskToEdit.text;
    prioritySelect.value = taskToEdit.priority;
    dueDateInput.value = taskToEdit.dueDate;

    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
  }

  sortButton.addEventListener("click", () => {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    renderTasks();
  });
});
