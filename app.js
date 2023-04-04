// Get references to the relevant DOM elements
const form = document.querySelector('form');
const input = document.querySelector('#new-task');
const taskList = document.querySelector('#task-list');

// Add event listener to form to add a new task to the list
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Check if the input has a value
    if (input.value) {
        // Create new elements for the task, edit button, and delete button
        const li = document.createElement('li');
        const taskText = document.createElement('span');
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        // Set the text content of the task and buttons
        taskText.textContent = input.value;
        editBtn.textContent = 'Edit';
        deleteBtn.textContent = 'Delete';

        // Append the task and buttons to the list item, and append the list item to the task list
        li.appendChild(taskText);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Clear the input field
        input.value = '';

        // Add event listeners to the edit and delete buttons
        editBtn.addEventListener('click', () => {
            const newTask = prompt('Edit task:', taskText.textContent);
            if (newTask) {
                taskText.textContent = newTask;
            }
        });

        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });
    }
});
