document.addEventListener("DOMContentLoaded", function() {
  // your code here

  //form
  const form = document.getElementById("create-task-form");
  //input field 
  const formInput = document.getElementById("new-task-description");
  //tasks append
  const taskList =document.getElementById("tasks");

  //form submission

  form.addEventListener("submit", function (event){
    event.preventDefault();

    const taskText = formInput.value.trim();


    if (taskText === "") return;
    
    //new list item
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
    taskInput.value =""


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
