"use strict";
const btn = document.getElementById("btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    alert("clicked!!");
});
// ? is needed because otherwise TS will complain. What if #btn is null? i.e. no element #btn exists
// ? is shorthand for "if it exists,..."
// ANOTHER APPROACH
const btn2 = document.getElementById("btn");
// ! tells TS not to worry, there DEFINITELY is a #btn object. 
// Check type vs. first btn, it's just HTMLElement, no more "| null";
btn2.addEventListener("click", function () {
    alert("cliked 2!!!");
});
// ? is no longer needed.
// This approach is riskier, as it ignores the possibility of null
let mystery = "Hello World!!";
// const numChars = mystery.length; // TS will complain. length is not on type unknown
const numChars = mystery.length;
const input = document.getElementById("todoinput");
const inputBtn = document.getElementById("inputbtn");
inputBtn === null || inputBtn === void 0 ? void 0 : inputBtn.addEventListener("click", function () {
    // alert(input.value);
    // input.value = "";
});
// Alternative syntax
const input2 = document.getElementById("todoinput");
input2.value; // less common. doesn't work in jsx (i.e. with React).
const form = document.querySelector("form");
const list = document.getElementById("todolist");
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    else
        return JSON.parse(todosJSON);
}
const todos = readTodos();
todos.forEach(createTodo);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    todos.push(newTodo);
    createTodo(newTodo);
    saveTodos();
    input.value = "";
});
function createTodo(todo) {
    const newTodoText = todo.text;
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(newTodoText);
    newLI.append(checkbox);
    list.append(newLI);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
