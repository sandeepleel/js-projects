const clock=document.getElementById('clock')
//const clock=document.querySelector('#clock')

setInterval(function (){
let date = new Date();
//console.log(date.toLocaleTimeString());
clock.innerHTML=date.toLocaleTimeString();
//setInterval(function(){},1000) two parametres 
},1000);
