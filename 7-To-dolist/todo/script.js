const inputBox=document.getElementById('inputBox');
const addBtn=document.getElementById('addBtn');
const todoList=document.getElementById('todoList');
//copy shift alt downarrow
let editTodo=null;
function addTodo(){
    //alert("Hello");
   const inputText=inputBox.value.trim();
   if(inputText.length<=0){
    alert("you must write something in your todo");
    return false;
   }

   if(addBtn.value==="Edit"){
      editLocalTodos(inputText);
    editTodo.target.previousElementSibling.innerHTML=inputText;
    
    addBtn.value="Add";
    inputBox.value="";

   }
else{
   //create li and p
   const li=document.createElement("li");
   const p=document.createElement("p");
   p.innerHTML=inputText;
   li.appendChild(p);
  
//creating edit Button
   const editBtn=document.createElement("button");
   editBtn.innerText="Edit";
   editBtn.classList.add("btn","editBtn");
   li.appendChild(editBtn);

    //creating dlt button
    const deleteBtn=document.createElement("button");
    deleteBtn.innerText="Remove";
    deleteBtn.classList.add("btn","deleteBtn");
    li.appendChild(deleteBtn)

//append li in todolist
   todoList.appendChild(li);
   inputBox.value="";
   saveLocalTodos(inputText);
}
}
//function to update: edit/delete
const updateTodo=(e)=>{
//console.log(e.target.innerHTML);
if(e.target.innerHTML==="Remove"){
  // console.log( e.target.parentElement);
  todoList.removeChild(e.target.parentElement);
  deleteLocalTodos(e.target.parentElement);
}
if(e.target.innerHTML==="Edit"){
    console.log(inputBox.value=e.target.previousElementSibling.innerHTML);
    inputBox.focus();
    addBtn.value="Edit";
    editTodo=e;
}
}

const saveLocalTodos=(todo)=>
{
let todos;
if(localStorage.getItem("todos")===null){
   todos=[];
}
else{
   todos=JSON.parse(localStorage.getItem("todos"));
}
if(!Array.isArray(todos)){
   todos=[];
}
todos.push(todo);

localStorage.setItem("todos",JSON.stringify(todos));


}
const getLocalTodos=(todo)=>
   {
   let todos;
   if(localStorage.getItem("todos")===null){
      todos=[];
   }
   else{
      todos=JSON.parse(localStorage.getItem("todos"));
   }
   if(!Array.isArray(todos)){
      todos=[];
   }
   todos.push(todo);
   
   localStorage.setItem("todos",JSON.stringify(todos));
   todos.forEach(todo =>
   {
   
      const li=document.createElement("li");
      const p=document.createElement("p");
      p.innerHTML=todo;
      li.appendChild(p);
     
   //creating edit Button
      const editBtn=document.createElement("button");
      editBtn.innerText="Edit";
      editBtn.classList.add("btn","editBtn");
      li.appendChild(editBtn);
   
       //creating dlt button
       const deleteBtn=document.createElement("button");
       deleteBtn.innerText="Remove";
       deleteBtn.classList.add("btn","deleteBtn");
       li.appendChild(deleteBtn)
   
   //append li in todolist
      todoList.appendChild(li);
   
   }
   );
   }

const deleteLocalTodos=(todo)=>{
   let todos;
   if(localStorage.getItem("todos")===null){
      todos=[];
   }
   else{
      todos=JSON.parse(localStorage.getItem("todos"));
   }
   if(!Array.isArray(todos)){
      todos=[];
   }
   let todoText=todo.children[0].innerHTML;
   let todoIndex=todos.indexOf(todoText)
   //slice/splice
   todos.splice(todoIndex,1);
   localStorage.setItem("todos",JSON.stringify(todos));
   //console.log(todoIndex)
 //  console.log(todoText.children[0].innerHTML);
}

const editLocalTodos=(todo)=>{
let todos=JSON.parse(localStorage.getItem("todos"));
let todoIndex=todos.indexOf(todo);
todos[todoIndex]=inputBox.value;
localStorage.setItem("todos",JSON.stringify(todos));
}

document.addEventListener('DOMContentLoaded',getLocalTodos)
addBtn.addEventListener("click",addTodo);
todoList.addEventListener("click",updateTodo);
//console.log(localStorage.getItem("todos"));

//console.log(JSON.parse(localStorage.getItem("todos")));
