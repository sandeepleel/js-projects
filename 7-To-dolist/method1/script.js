//Get The elements
const addTaskButton= document.getElementById('addtaskbutton');
const taskInput=document.getElementById('newtask');
const taskList=document.getElementById('tasklist');
addTaskButton.addEventListener('click',function(){
    let task=taskInput.value;
    let newTask=document.createElement('li');
    newTask.innerHTML=task;

    //add delete button
    let deleteButton= document.createElement("button");
    deleteButton.innerHTML="Delete";
    deleteButton.classList.add('mybtn');
    
    deleteButton.classList.add("delete-button");

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
    taskInput.value="";
});
taskList.addEventListener("click",function(event){
    if(event.target.classList.contains('delete-button')){
        event.target.parentNode.remove();
    }
});