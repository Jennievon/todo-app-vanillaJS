const todos = document.querySelector('#todos'),
  form = document.querySelector('form'),
  newItem = document.querySelector('#newItem');

form.addEventListener('submit',
  function (event) {
    event.preventDefault();
    todos.innerHTML += '<li>' + newItem.value + '</li>';
    store();
    newItem.value = "";
  }, false);

todos.addEventListener('click',
  function (e) {
    let todo = e.target;
    if (todo.classList.contains('checked')) {
      todo.parentNode.removeChild(todo);
    }
    else {
      todo.classList.add('checked');
    }
    store();
  }, false);

function store() {
  window.localStorage.myitems = todos.innerHTML;
}

function addTodos() {
  var todoStored = window.localStorage.myitems;
  if (!todoStored) {
    todos.innerHTML = '<li>Park the car</li>' +
      '<li>Mow the lawn</li>' +
      '<li>Study</li>';
  } else {
    todos.innerHTML = todoStored;
  }
}
addTodos();