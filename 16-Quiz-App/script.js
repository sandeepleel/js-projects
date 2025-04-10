const data=[

    {
        id:1,
        question:"which of these fish is actually a fish?",
        answer:[
            {answer:"swordfish",isCorrect:true},
            {answer:"jellyfish",isCorrect:false},
            {answer:"starfish",isCorrect:false},
            {answer:"crayfish",isCorrect:false},
        ],
    },
    {
        id:2,
        question:"A flutter is a group of:",
        answer:[
            {answer:"bees",isCorrect:true},
            {answer:"penguins",isCorrect:false},
            {answer:"butterflies",isCorrect:false},
            {answer:"camels",isCorrect:false},
        ],
    },
    {
        id: 3,
        question: "What is the capital of France?",
        answer: [
            { answer: "Berlin", isCorrect: false },
            { answer: "Madrid", isCorrect: false },
            { answer: "Paris", isCorrect: true },
            { answer: "Lisbon", isCorrect: false },  ],
    },
    {
        id: 4,
        question: "Which planet is known as the Red Planet?",
        answer: [
            { answer: "Earth", isCorrect: false },
            { answer: "Venus", isCorrect: false },
            { answer: "Mars", isCorrect: true },
            { answer: "Jupiter", isCorrect: false },
        ],
    },

];
const questionText=document.querySelector(".question");
const options=document.querySelectorAll(".answer input");
const labels=document.querySelectorAll(".answer label");
const submitBtn=document.querySelector(".submit");
const resultBox=document.querySelector(".result");
const correctBox=document.querySelector(".correct");
const wrongBox=document.querySelector(".wrong");
const scoreBox=document.querySelector(".score");
const playAgainBtn=document.querySelector(".play");
const gameBox=document.querySelector(".game");


let index=0;
let correct=0;
let wrong=0;
function loadQuestion()
{
    const currentQuestion=data[index];
    questionText.textContent=currentQuestion.question;
    options.forEach((input,i)=>
    {
        input.checked=false;
        input.value=currentQuestion.answer[i].isCorrect;
        labels[i].innerText=currentQuestion.answer[i].answer;
    });

}

submitBtn.addEventListener("click",()=>
{
    const selected = Array.from(options).find(input =>input.checked);
    if(!selected){
        alert("please select an answer!");
        return;
    }
    if(selected.value==="true"){
        correct++;

    }
    else{
        wrong++;
    }
    index++;
    if(index<data.length){
        loadQuestion();
    }
    else{
        gameBox.style.display="none";
        resultBox.style.display="block";
        correctBox.innerText=`Correct Answers:${correct}`;
        wrongBox.innerText=`wrong answers:${wrong}`;
        scoreBox.innerText=`score:${correct*10}`;
    }
});

   
    playAgainBtn.addEventListener("click",()=>
    {
        index=0;
        correct=0;
        wrong=0;
        gameBox.style.display="block";
        resultBox.style.display="none";
        
        loadQuestion();
    });
    loadQuestion();
