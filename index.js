const computerchoice = document.getElementById("computer-choice");
const yourchoice = document.getElementById("your-choice");
const resultgame = document.getElementById("result");
let btn = document.querySelectorAll("button");
let user;
let computer;
let result;

btn.forEach((btns) => {
    btns.addEventListener("click" , (e)=>{
        if(e.target.id === "rock"){
            user = "✊"
        }
        if(e.target.id === "paper"){
            user = "✋"
        }
        if(e.target.id === "scissors"){
            user = "✌"
        }
        yourchoice.innerHTML = user;
        random();
        getResult();
    })
    
})

function random() {
    let randomnum = Math.floor(Math.random() * 3)+ 1  ;
    if(randomnum === 1){
        computer= "✊";
    }
    if(randomnum === 2){
        computer= "✋";
    }
    if(randomnum === 3){
        computer= "✌";
    }
    computerchoice.innerHTML = computer;
}
function getResult() {
    if(computer === user){
        result = "Its draw"
    }
    if(computer === "✊" && user ==="✋"){
        result = "you win";
    }
    if(computer === "✊" && user ==="✌"){
        result = "you lose";
    }
    if(computer === "✋" && user ==="✌"){
        result = "you win";
    }
    if(computer === "✋" && user ==="✊"){
        result = "you lose";
    }
    if(computer === "✌" && user ==="✊"){
        result = "you win";
    }
    if(computer === "✌" && user ==="✋"){
        result = "you lose";
    }
    resultgame.innerHTML = result;
}
