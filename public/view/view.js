var view = {
    displayTodos: function(){
        var todosUl = document.getElementById("fetch-results");
        todosUl.innerHTML = "";

        Todos.findAll().then(todos => {
            console.log(todos);

            for (let todo of todos) {
                var todoLi = document.createElement("li");
                var todoTextWithCompletion = "";

                if (todo.completed === true) {
                    todoTextWithCompletion = "(x) " + todo.todoText;
                } else {
                    todoTextWithCompletion = "( ) " + todo.todoText;
                }

                todoLi.id = todo.id;
                todoLi.textContent = todoTextWithCompletion;
                todoLi.appendChild(view.createDeleteButton());
                todosUl.appendChild(todoLi);
            }
        })
            .catch(err => console.log(err));

        // fetch('/todos', {
        //     method: 'GET',
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
                
        //         for (let todo of data) {
        //             var todoLi = document.createElement("li");
        //             var todoTextWithCompletion = "";

        //             if (todo.completed === true) {
        //                 todoTextWithCompletion = "(x) " + todo.todoText;
        //             } else {
        //                 todoTextWithCompletion = "( ) " + todo.todoText;
        //             }

        //             todoLi.id = todo.id;
        //             todoLi.textContent = todoTextWithCompletion;
        //             todoLi.appendChild(view.createDeleteButton());
        //             todosUl.appendChild(todoLi);
        //         }
        //     })
        //     .catch(err => console.log(err));

        
    },
    createDeleteButton: function () {
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        return deleteButton;
    },
};

class Todos {
    static findAll() {
        return fetch('/todos').then(res => res.json());
    }
}