        document.addEventListener('DOMContentLoaded', function () {
            const todoForm = document.getElementById('todo-form');
            const todoList = document.getElementById('todo-list');
            const clearAllButton = document.getElementById('clear-all');

            todoForm.addEventListener('submit', function (event) {
                event.preventDefault();
                const newTodoInput = document.getElementById('new-todo');
                const todoText = newTodoInput.value.trim();

                if (todoText !== '') {
                    addTodoItem(todoText);
                    newTodoInput.value = '';
                }
            });

            clearAllButton.addEventListener('click', function () {
                todoList.innerHTML = '';
            });

            function addTodoItem(todoText) {
                const todoItem = document.createElement('li');
                todoItem.className = 'todo-item';

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';

                const todoTextElement = document.createElement('label');
                todoTextElement.textContent = todoText;

                const deleteButton = document.createElement('button');
                deleteButton.className = 'delete-button';
                deleteButton.textContent = 'Удалить';
                deleteButton.addEventListener('click', function () {
                    todoItem.remove();
                });

                todoItem.appendChild(checkbox);
                todoItem.appendChild(todoTextElement);
                todoItem.appendChild(deleteButton);

                todoList.appendChild(todoItem);
            }
        });