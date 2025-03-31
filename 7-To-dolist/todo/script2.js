const inputBox=document.getElementById('inputBox');
const addBtn=document.getElementById('addBtn');
const todoList=document.getElementById('todoList');

let editTodo=null;

function addTodo(){
  
  //  alert("hello");
  const inputText=inputBox.value.trim();
  if(inputText.length<=0){
    alert("please write something");
    return false;
  }

if(addBtn.value==="Edit")
{
    editTodo.target.previousElementSibling.innerHTML=inputText;
    editLocalTodos(inputText);
    addBtn.value="Add";
    inputBox.value="";

}
else{
  const li=document.createElement("li");
  const p=document.createElement("p");
  p.innerHTML=inputText;
  li.appendChild(p);

  todoList.appendChild(li);
  inputBox.value="";

  const editBtn=document.createElement("button");
  editBtn.classList.add('btn','editBtn');
  editBtn.innerText="Edit";
  li.appendChild(editBtn);

  const deleteBtn=document.createElement("button");
  deleteBtn.classList.add("btn",'deleteBtn');
  deleteBtn.innerText="Remove";
  li.appendChild(deleteBtn);
saveLocalTodos(inputText);
}
}


const updateTodo=(e)=>{
//console.log(e.target.innerHTML);
if(e.target.innerHTML==="Remove"){
   //console.log( e.target.parentElement);
   todoList.removeChild(e.target.parentElement);
   deleteLocalTodos(e.target.parentElement);
}
if(e.target.innerHTML==="Edit"){
    inputBox.value=e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addBtn.value="Edit";
    editTodo=e;
}
}

const saveLocalTodos=(todo)=>{
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
else{
    todos=JSON.parse(localStorage.getItem("todos"));
}
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
   // console.log(todos);
}

const getLocalTodos=(todo)=>{
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

    todos.forEach(todo=>{

       
  const li=document.createElement("li");
  const p=document.createElement("p");
  p.innerHTML=todo;
  li.appendChild(p);

 // todoList.appendChild(li);
  inputBox.value="";

  const editBtn=document.createElement("button");
  editBtn.classList.add('btn','editBtn');
  editBtn.innerText="Edit";
  li.appendChild(editBtn);

  const deleteBtn=document.createElement("button");
  deleteBtn.classList.add("btn",'deleteBtn');
  deleteBtn.innerText="Remove";
  li.appendChild(deleteBtn); 
  todoList.appendChild(li);
    });
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
//console.log(todoText.children[0].innerHTML);
let todoIndex=todos.indexOf(todoText);
console.log(todoIndex);
todos.splice(todoIndex,1);
localStorage.setItem("todos",JSON.stringify(todos));
}

const editLocalTodos=(todo)=>{

let todos=JSON.parse(localStorage.getItem("todos"));
let todoIndex=todos.indexOf(todo);
todos[todoIndex]=inputBox.value;
localStorage.setItem("todos",JSON.stringify(todos));
}


document.addEventListener('DOMContentLoaded',getLocalTodos);
addBtn.addEventListener('click',addTodo);
todoList.addEventListener('click',updateTodo);