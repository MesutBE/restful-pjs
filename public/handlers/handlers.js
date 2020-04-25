class UI {
    constructor(){

    }

    addTodo() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
    }
    changeTodo() {
        var changeTodoPositionInput = document.getElementById(
            "changeTodoPositionInput"
        );
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(
            changeTodoPositionInput.valueAsNumber,
            changeTodoTextInput.value
        );
        changeTodoTextInput.value = "";
        changeTodoPositionInput.value = "";
    }
    deleteTodos (position) {
        todoList.deleteTodo(position);
    }
    toggleCompleted () {
        var toggleCompletedPositionInput = document.getElementById(
            "toggleCompletedPositionInput"
        );
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
    }
    toggleAll () {
        debugger
        todoList.toggleAll();
    }
}

// var handlers = {
//     addTodo: function () {
//         var addTodoTextInput = document.getElementById("addTodoTextInput");
//         todoList.addTodo(addTodoTextInput.value);
//         addTodoTextInput.value = "";
//     },
//     changeTodo: function () {
        
//         var changeTodoPositionInput = document.getElementById(
//             "changeTodoPositionInput"
//         );
//         var changeTodoTextInput = document.getElementById("changeTodoTextInput");
//         todoList.changeTodo(
//             changeTodoPositionInput.valueAsNumber,
//             changeTodoTextInput.value
//         );
//         changeTodoTextInput.value = "";
//         changeTodoPositionInput.value = "";
//     },
//     deleteTodos: function (position) {
//         todoList.deleteTodo(position);
//     },
//     toggleCompleted: function () {
//         var toggleCompletedPositionInput = document.getElementById(
//             "toggleCompletedPositionInput"
//         );
//         todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
//         toggleCompletedPositionInput.value = "";
//     },
//     toggleAll: function () {
//         debugger    
//         todoList.toggleAll();
//     }
// };