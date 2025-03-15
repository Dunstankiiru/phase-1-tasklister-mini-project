document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //form
  const form = document.getElementById("create-task-form");
  //input field 
  const taskInput = document.getElementById("new-task-description");
  //tasks append
  const taskList =document.getElementById("tasks");

  //form submission

  form.addEventListener("submit", function (event){
    event.preventDefault();

    const taskText = taskInput.value.trim();

    //new list item
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;


    //delete button

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.color = "red";

    deleteButton.addEventListener("click", function(){
      taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    taskInput.value = "";

  })
});
