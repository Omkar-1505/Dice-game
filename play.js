var player;
var player1Name = "";
var player2Name = "";
var p1=Math.floor(Math.random()*6)+1;
var p2=Math.floor(Math.random()*6)+1;
function play_type(select){
    var nameDiv=document.querySelector('.name');
    if(select.value=="2") {
        player=2;
        nameDiv.innerHTML=`
            <input type="text" placeholder="input name of 1st player" class="p1">
            <input type="text" placeholder="input the name of the 2nd player" class="p2">
            <button onclick="saveNames()" type="button">Start Game</button>
        `;
    }
    else {
        player=1;
        nameDiv.innerHTML=`
            <input type="text" placeholder="input name of player" class="p1">
            <button onclick="saveNames()" type="button">Start Game</button>
        `;
    }
}

function saveNames() {
    var p1Input = document.querySelector('.p1');
    player1Name = p1Input ? p1Input.value : "";
    var p2Input = document.querySelector('.p2');
    player2Name = p2Input ? p2Input.value : "";
    gamezone(p1,p2);
    // You can now use player1Name and player2Name in your game logic
    //alert("Player 1: " + player1Name + (player2Name ? "\nPlayer 2: " + player2Name : ""));
}

function gamezone(x, y) {
    var diceImages = document.querySelectorAll('.game img');
    diceImages[0].src = `images/dice${x}.png`; // First dice
    diceImages[1].src = `images/dice${y}.png`; // Second dice
}

var result=document.querySelector('.result');
if(p1>p2){
    result.innerHTML=`${player1name || "Player 1 "} WINS THE ROLL `;
}
else if(p1<p2){
    result.innerHTML=`${player2name || "Player 2 "} WINS THE ROLL `;
}
else{
    result.innerHTML="It's a draw";
}