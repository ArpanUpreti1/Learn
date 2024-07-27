// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    // Get the value of the input field
    const taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Del';
        deleteBtn.onclick = function() {
            li.remove();
        };
        li.appendChild(deleteBtn);

        // Append the new list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value ='';
}
}
