arr = ['a0','a1','a2',
       'b0','b1','b2',
       'c0','c1','c2'];
const buttonarr = []
let status = document.getElementById('status')

arr.forEach(element => {
    buttonarr.push(document.getElementById(element))
});
let turn=true
let playable = true
const checkwin = (index) => {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Check each winning combination
    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true; // There's a win
        }
    }

    // If no winner found
    return false;
    
}

let board = [0,0,0,0,0,0,0,0]
const maketurn = (index) => {
    thisturn = turn?'O':'X';
    if (!buttonarr[index].textContent && playable){
        buttonarr[index].textContent = thisturn;
        board[index] = turn?1:-1
        if(turn){
            buttonarr[index].style.backgroundColor = 'hsl(120, 100%, 15%)';
        }
        else{
            buttonarr[index].style.backgroundColor =  'hsl(0, 100%, 30%)';
        }
        turn = !turn;
        playable = !checkwin(index)
        console.log(board);
        updatenews()
    }

}

function updatenews(){
    if(playable){
        status.textContent = `${turn?'O':'X'}'s turn`;
    }
    else{
        status.textContent = `${turn?'X':'O'} won`;
    }
}

function resetall(){
    buttonarr.forEach(element => {
        element.textContent = '';
        element.style.backgroundColor = 'hsl(0,0%,60%)';
        board = [0,0,0,0,0,0,0,0]
        playable = true;
        status.textContent = `${turn?'O':'X'}'s turn`
    });
}