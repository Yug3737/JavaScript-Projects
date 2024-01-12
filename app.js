//
// file: script.js
// author: Yug Patel
// last modified: 9 January 2024

let boxes = document.querySelectorAll(".box");
let message = document.querySelector(".message");
let newGameButton = document.querySelector(".newGameButton");
let resetButton = document.querySelector(".resetButton");
let messageContainer = document.querySelector(".messageContainer");
let turnO = true;

const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled= true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    message.innerText = `Congratulations, Winner is ${winner}`;
    messageContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winningPatterns){
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;
        
        if(pos1Value!="" && pos2Value!="" && pos3Value!=""){
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                // console.log("Winner");
                showWinner(pos1Value);
                return true;
            }
        } 
    }
};

const resetGame = () =>{
    for(let box of boxes){
        box.innerText="";
    }
    messageContainer.classList.add("hide");
    enableBoxes();
}

resetButton.addEventListener("click",resetGame);
newGameButton.addEventListener("click",resetGame);
