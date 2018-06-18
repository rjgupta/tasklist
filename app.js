// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListener();

// Load all event Listeners
function loadEventListener() {
    // Add task event
    form.addEventListener('submit', addTask);

    // remove tasks event
    taskList.addEventListener('click', removeTask);

    // clear all tasks event
    clearBtn.addEventListener('click', clearTasks);

    // filter tasks event
    filter.addEventListener('keyup', filterTasks);
 }

 // Add task function
 function addTask(e) {
     if(taskInput.value === '') {
         alert('Add a Task First');
     }

     // create list element to add task
     const li = document.createElement('li');
     // Add  class
     li.className = 'collection-item';
     // create text node and append to li
     li.appendChild(document.createTextNode(taskInput.value));
     // create new link element
     const link = document.createElement('a');
    // add class to link
     link.className = 'delete-item secondary-content';
     // Add icon html
     link.innerHTML = '<i class="fa fa-remove"></i>';
     // Append the link to li
     li.appendChild(link);
     // append li to ul
     taskList.appendChild(li);
     // clear input
     taskInput.value = '';

    e.preventDefault();
 }

 function removeTask(e) {
     if(e.target.parentElement.classList.contains('delete-item')) {
         if(confirm('Are you sure?')){
             e.target.parentElement.parentElement.remove();
         }    
     }
 }

 // Clear Tasks
 function clearTasks() {
    //  taskList.innerHTML = '';

    // Faster approach (removeChild)
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

 }

 function filterTasks(e) {
     const text = e.target.value.toLowerCase();

     document.querySelectorAll('.collection-item').forEach(function(task){
         const item = task.firstChild.textContent;
         if(item.toLowerCase().indexOf(text) != -1) {
             task.style.display = 'block';
         } else {
             task.style.display = 'none';
         }
     });
 }