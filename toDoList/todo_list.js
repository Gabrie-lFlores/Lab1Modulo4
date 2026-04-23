const taskInput=document.getElementById("taskInput");
const taskList=document.getElementById("taskList");
const clearCompletedBtn=document.getElementById("clearCompletedBtn");
const bottonAddTask=document.getElementById("addTaskBtn");
const bottonClearAll=document.getElementById("clearAllBtn");

let tasks=[];
//Function to add a new task to array tasks

bottonAddTask.addEventListener("click",addTask);
function addTask(){
    const taskText=taskInput.value.trim();  
    console.log("Adding task:", taskText);
    if(taskText!==""){
        tasks.push({text:taskText});
        taskInput.value="";
        displayTasks();
    }
}
function displayTasks() {
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                <label for="task-${index}">${task.text}</label>`;
                               
                li.querySelector("input").addEventListener("change", () => toggleTask(index));
                taskList.appendChild(li);
            });
        }
 function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            console.log(`Toggled task ${index}:`, tasks[index].completed);
            displayTasks();
        }
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
    function clearCompletedTasks() {
            tasks = tasks.filter(task => !task.completed);
            
            displayTasks();
        }
bottonClearAll.addEventListener("click", clearAllTasks);
function clearAllTasks() {
            tasks = [];
            displayTasks();
        }