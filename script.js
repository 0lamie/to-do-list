
// Get elements from HTML
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Add a task when the button is clicked
addButton.addEventListener("click", function() {

    const task = taskInput.value;

    if (task !== "") {

        const listItem = document.createElement("li");

        listItem.textContent = task;

        taskList.appendChild(listItem);

        taskInput.value = "";

    } else {
        alert("Please enter a task!");
    }

});
