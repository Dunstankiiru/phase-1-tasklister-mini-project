document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form')
  const taskList = document.getElementById('tasks')

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskDescription = document.getElementById('new-task-description').value.trim();

    const taskItem = document.createElement('li')
    taskItem.textContent = taskDescription
    taskItem.style.color = 'blue'
    taskItem.style.fontWeight = 'bold'

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = ' 10px'
    deleteButton.addEventListener('click', () => {
      taskItem.remove();
    }
    )
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem)

    taskList.style.listStyleType = 'none'
    taskList.style.padding = '0'
    taskList.style.margin = '0'

    form.reset();


  })

})