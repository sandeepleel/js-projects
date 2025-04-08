const timer= document.querySelector('.timer');
const title= document.querySelector('.title');
const startBtn= document.querySelector('.startBtn');
const pauseBtn= document.querySelector('.pauseBtn');
const resumeBtn= document.querySelector('.resumeBtn');
const resetBtn= document.querySelector('.resetBtn');
const promoCountsDisplay = document.querySelector('.promoCountsDisplay');
//making variables
const WORK_TIME= 25*60;
const BREAK_TIME=5*60;
let timerID=null;
let totalCount=0;
let paused =false;
let oneRoundCompleted=false;

const updateTitle= (msg)=>
{
title.textContent=msg;
}


//save in local storage
const saveLocalCounts =()=> 
   { let counts = JSON.parse(localStorage.getItem("promoCounts"));
if (counts !== null) {
    counts++;
} else {
    counts = 1;
}
localStorage.setItem("promoCounts", JSON.stringify(counts));

   }
const countDown= (time)=>{
    return ()=> {
        const mins=Math.floor(time/60).toString().padStart(2,"0");
        const secs= Math.floor(time%60).toString().padStart(2,"0");
   // timer.textContent=time;
   timer.textContent= `${mins}:${secs}`;
    time--;
    if(time <0){
        stopTimer();
        if(!oneRoundCompleted)
        {
        timerID=startTimer(BREAK_TIME);
            oneRoundCompleted = true;
            updateTitle("Its Break time");
        }
        else{
           updateTitle("Completed 1 round completed") ;
           setTimeout(() =>
            updateTitle("Start timer again"),2000);
            
               
                totalCount++;
               // console.log(totalCount)
               saveLocalCounts();
               showPromoCounts();
            }
        }
    }
}

    
const startTimer=(startTime)=>
{
    if(timerID!==null)
    {
        stopTimer();
    }
// alert("hii")
return setInterval(countDown(startTime), 1000);
}

const stopTimer=()=>{
    clearInterval(timerID);
    timerID=null;
}

const getTimeInSeconds =(timeString)=>
{
const[minutes,seconds]=timeString.split(":");
return parseInt(minutes*60) + parseInt(seconds);
}

startBtn.addEventListener('click',()=>
{
   timerID= startTimer(WORK_TIME);
   updateTitle("Its a work Time!");
})

resetBtn.addEventListener('click',()=>
{
stopTimer();
timer.textContent="25:00";
updateTitle("Timer Reset");
});
pauseBtn.addEventListener('click',()=>
    {
    stopTimer();
    paused=true;
    updateTitle("timer paused");
    });

resumeBtn.addEventListener('click',()=>
{
    if(paused){
        const currentTime= getTimeInSeconds(timer.textContent);
        timerID=startTimer(currentTime);
        paused=false;
        (!oneRoundCompleted? updateTitle("it s work time") :updateTitle("its break time") )
    }
})


const showPromoCounts =()=>
{
    const counts=JSON.parse(localStorage.getItem("promoCounts"));
    if(counts>0)
    {
        promoCountsDisplay.style.display="flex";
    }
    promoCountsDisplay.firstElementChild.textContent=counts;
}
showPromoCounts();

