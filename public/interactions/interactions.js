function eventListeners() {
    const btnToggleAll = document.getElementById("toggle-all");
    const btnAddTodo = document.getElementById("add-todo");
    const btnChangeTodo = document.getElementById("change-todo");
    const btnToggleCompleted = document.getElementById("toggle-completed");

    const todoUl = document.querySelector("ul");
    
    const ui = new UI();

    btnToggleAll.addEventListener('click', ui.toggleAll);
    btnAddTodo.addEventListener('click', ui.addTodo);
    btnChangeTodo.addEventListener('click', ui.changeTodo);
    btnToggleCompleted.addEventListener('click', ui.toggleCompleted);

    todoUl.addEventListener("click", function (event) {
        let elementClicked = event.target;

        if (elementClicked.className === "deleteButton") {
            ui.deleteTodos(parseInt(elementClicked.parentNode.id));
        }
    });
    
}