const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const pscore = document.getElementById("pscore")
const xscore = document.getElementById("cscore")
const choices = ['rock','paper','scissors']

let [p,c] = [0,0];

function playChoice(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)]
    playerDisplay.textContent = `PLAYER: ${playerChoice.toUpperCase()}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice.toUpperCase()}`;
    let result = ''
    if(playerChoice==computerChoice){
        result = "It's a tie";
    }
    else{
        switch(playerChoice){
            case 'rock':
                result = (computerChoice==="scissors")?"You won":"You lost"
                break;
            case 'paper':
                result = (computerChoice==="rock")?"You won":"You lost"
                break;
            case 'scissors':
                result = (computerChoice==="paper")?"You won":"You lost"
                break;
                        
        }
    }
    if (result==="You won"){
        resultDisplay.style.color = "Green";
        resultDisplay.textContent = result.toUpperCase();
        p++;
        pscore.textContent = `Player Score :${p}`
        }
    else if(result==="You lost"){
        resultDisplay.style.color = "red";
        resultDisplay.textContent = result.toUpperCase();
        c++;
        cscore.textContent = `Computer Score :${c}`
    }
    else{
        resultDisplay.style.color = 'black';
        resultDisplay.textContent = result.toUpperCase();
    }
    
    
}