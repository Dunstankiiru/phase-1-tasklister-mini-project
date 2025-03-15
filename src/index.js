document.addEventListener("DOMContentLoaded", function () {
  // Select form, input field, and task list elements
  const form = document.querySelector("#create-task-form");
  const formInput = document.querySelector("#new-task-description");
  const taskList = document.querySelector("#tasks");

  // Form submission event listener
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    const taskText = formInput.value.trim();
    if (taskText === "") return; // Ignore empty input

    // Create a new list item
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.color = "red";

    // Delete task when button is clicked
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(taskItem);
    });

    // Append delete button to task item
    taskItem.appendChild(deleteButton);

    // Append task item to task list
    taskList.appendChild(taskItem);

    // Clear input field
    formInput.value = "";
  });
});
