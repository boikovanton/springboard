const todoList = document.querySelector("#todo-list");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const newTodo = document.querySelector("#newtodo");
    if (newTodo.value === "") {
        alert("Please enter TODO");
        return;
    }
    const newTodoLi = document.createElement("li");
    const removeButton = document.createElement("button");
    newTodoLi.innerText = newTodo.value;
    removeButton.innerText = "Remove";
    todoList.append(newTodoLi);
    newTodoLi.append(removeButton);
    newTodo.value = "";
    removeButton.style.marginLeft = "20px";
});

todoList.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      event.target.parentElement.remove();
    }
});

ul.addEventListener("click", function(e) {
    const selectedTodo = e.target;
    selectedTodo.style.textColor = 'red';
    selectedTodo.style.textDecoration = 'line-through';
  });