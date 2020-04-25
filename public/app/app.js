// LOGIC
var todoList = {
    
    todos: entries,

    addTodo: async function (inputTodoText) {
        
        fetch('/todos', {
            method: 'POST',
            body: JSON.stringify({ todoText: inputTodoText, completed: false }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(data => console.log('Adding Todo.. results: \n', data))
            .then(view.displayTodos)
            .catch(err => console.log(err));
    },
    changeTodo: async function (position, newValue) {

        fetch(`/todos/${position}`, {
            method: 'PATCH',
            body: JSON.stringify({ todoText: newValue }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(data => console.log('Updating Todo.. results: \n', data))
            .then(view.displayTodos)
            .catch(err => console.log(err));
    },
    deleteTodo: async function (position) {
        // debugger
        fetch(`/todos/${position}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log('Deleting Todo.. results: \n', data)) //.then(view.displayTodos)
            .then(view.displayTodos)
            .catch(err => console.log(err));
    },
    toggleCompleted: async function (position) {

        let currentCompleted = null;
        
        await fetch(`/todos?id=${position}`)
            .then(res => res.json())
            .then(data => {
                // debugger
                currentCompleted = data[0].completed;
            })
            .catch(err => console.log(err));

        await fetch(`/todos/${position}`, {
            method: 'PATCH',
            body: JSON.stringify({ completed: !currentCompleted }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(data => console.log('Updating Todo.. results: \n', data))
            .then(view.displayTodos)
            .catch(err => console.log(err));
    },
    makeCompletedAllTrueOrFalse: async function (position, newValue) {

        const response = await fetch(`/todos/${position}`, {
            method: 'PATCH',
            body: JSON.stringify({ completed: newValue }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const json = await response.json();
        return json;

        // THE CODE BELOW WORKING AS WELL..

        // fetch(`/todos/${position}`, {
        //     method: 'PATCH',
        //     body: JSON.stringify({ completed: newValue }),
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     }
        // })
        //     .then(res => res.json())
        //     .catch(err => console.log(err));
    },
    toggleAll: async function() {

        fetch('/todos', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(async data => {
            // console.log(data.length);
            // debugger
            if (data.every(obj => obj.completed === true)){
                for (const obj of data){
                    await todoList.makeCompletedAllTrueOrFalse(obj.id, false)
                        .catch(err => console.log(err));
                }
                // data.forEach(async obj => await todoList.makeCompletedAllTrueOrFalse(obj.id, false));
            } else {
                for (const obj of data) {
                    await todoList.makeCompletedAllTrueOrFalse(obj.id, true)
                        .catch(err => console.log(err));
                }
                // data.forEach(async obj => await todoList.makeCompletedAllTrueOrFalse(obj.id, true));
            }
        })
        .then(view.displayTodos)
        .catch(err => console.log(err));
    }
};

// The code below will be updated soon..
class Todos {
    id = null;
    completed = null;
    todoText = '';

    constructor(body, completed = false) {
        this.todoText = body;
        this.completed = completed;
    }
    addTodo(todo) {

    }
    changeTodo(position, newValue) {

    }
    deleteTodo(position) {

    }
    toggleCompleted(position) {

    }
    toggleAll() {

    }
}


