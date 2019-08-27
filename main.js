var form = document.getElementById('form'),
  todoTitle = document.getElementById('todoTitle')
todoDetails = document.getElementById('todoDetails')
savedTodos = document.getElementById('savedTodos');


//form.addEventListener('submit', addTodo);
function addTodo(event) {
  event.preventDefault();
  var todo = {}

  todo.title = todoTitle.value
  todo.details = todoDetails.value

  console.log(todo)

  if (localStorage.getItem('todos') == null) {
    var todo = [];
    todo.push('todo');
    localStorage.setItem('todo', JSON.stringify(todo));
  } else {
    var myTodo = localStorage.getItem(todo, JSON.parse('todo'));
    myTodo.push('todo');
    localStorage.setItem('todo', JSON.stringify(myTodo));
  }
}

function loadApp() {
  var todo = JSON.parse(localStorage.getItem('todo'));
  savedTodos.innerHTML = "";
  if (localStorage.getItem('todos') !== null) {
    for (let i = 0; i < todo.length; i++) {
      const title = todo[i].title;
      const details = todo[i].details;
      savedTodos.innerHTML += '<div> <h4>' + title + ' ' + details + ' </h4> </div>'
    }
  }

}