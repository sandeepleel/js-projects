const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color ="#";
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let intervalId;
//console.log(randomColor());
const changeBgcolor=function(){
    document.body.style.backgroundColor = randomColor();
    
};
 const startChangingColor=   function(){
    if(!intervalId){
        intervalId =setInterval(changeBgcolor,1000);
        }
    };
const stopChangingColor=function(){
    if(intervalId){
    clearInterval(intervalId);
    intervalId=null;
    }
};
document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);