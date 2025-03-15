document.addEventListener("DOMContentLoaded", () => {
  selectTag()
  let form = document.querySelector('form')
  handleTask(form)
});


function createNewTask(newTask, color) {

  const li = document.createElement('li')
  const btn = document.createElement('button')

  deleteTask(btn)

  btn.textContent = 'X'
  li.textContent = `${newTask}  `
  li.style = `color: ${color}`

  document.querySelector('ul').appendChild(li).appendChild(btn)
}

function deleteTask(element) {
  element.addEventListener('click', (e) => {
    e.target.parentNode.remove()
  })
}

function handleTask(element) {
  element.addEventListener('submit', (e) => {
    e.preventDefault()
    const newTask = e.target['new-task-description'].value
    const select = e.target[1]
    const color = select.options[select.selectedIndex].value
    console.log(color);
    createNewTask(newTask, color)
    element.reset()
  })
}

function selectTag() {
  const select = document.getElementById('colors')
  const colors = ['', 'red', 'orange', 'green']
  for (let color of colors) {
    let option = document.createElement('option')
    option.textContent = color
    option.style = `background-color:${color}`
    select.appendChild(option)
  }
  return select
}