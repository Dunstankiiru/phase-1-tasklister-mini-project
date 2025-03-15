// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Get references to form, input field, and task list
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  // Listen for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    const taskText = taskInput.value.trim();
    if (taskText === "") return; // Ensure input isn't empty

    // Create list item
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.color = "red";

    // Add event listener for delete button
    deleteButton.addEventListener("click", function () {
      taskItem.remove();
    });

    // Append elements
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Clear input field
    taskInput.value = "";

    // Dispatch event to signal task addition (useful for testing)
    const taskAddedEvent = new Event("task-added");
    document.dispatchEvent(taskAddedEvent);
  });
});
