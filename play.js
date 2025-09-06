var player;
var player1Name = "";
var player2Name = "";
var p1=Math.floor(Math.random()*6)+1;
var p2=Math.floor(Math.random()*6)+1;
function play_type(select){
    var nameDiv=document.querySelector('.name');
    console.log(select);
    if(select.value=="2") {
        player=2;
        nameDiv.innerHTML=`
            <input type="text" placeholder="input name of 1st player" class="p1">
            <input type="text" placeholder="input the name of the 2nd player" class="p2">
        `;
    }
    else if(player=="1"){
        player=1;
        nameDiv.innerHTML=`
            <input type="text" placeholder="input name of player" class="p1">
        `;
    }
}
console.log("player is"+ player)
if(!player){ 
    player=1;  //default values 
    player1Name="User";
}
var s;  //series
function series(select){
    if(select.value===1) s=1;
    else if(select.value===3) s=3;
    else if(select.value===5) s=5;
    else if(select.value===7) s=7;
    else if(select.value===9) s=9;
}
if(!s) s=1;

var result=document.querySelector('.result');
// for series roll
var btn=document.querySelector('button');
btn.addEventListener('click',function(){
    saveNames();
    var c1=0;  //series win rates
    var c2=0;
    for (let i = 1; i <= s; i++) {         //why rushing to if
        let p1 = Math.floor(Math.random() * 6) + 1;
        let p2 = Math.floor(Math.random() * 6) + 1;
        gamezone(p1,p2);
        if(p1>p2){
            //result.innerHTML=`${player1name || "Player 1 "} WINS THE ROLL `;  
            c1=c1+1;
            console.log(c1);  
        }
        else if(p1<p2){
            //result.innerHTML=`${player2name || "Player 2 "} WINS THE ROLL `;
            c2=c2+1;
            console.log(c2);
        }
        else{
            result.innerHTML="It's a draw";
        }
    }
    if(c1>c2){
        result.innerHTML="Player 1 wins the Series";
    }
    else if(c1<c2)  result.innerHTML="Player 2 wins the Series";
    else  result.innerHTML="Guys It's a Series Draw";
});


function gamezone(x, y) {
    var diceImages = document.querySelectorAll('.game img');
    diceImages[0].src = `images/dice${x}.png`; // First dice
    diceImages[1].src = `images/dice${y}.png`; // Second dice
}

function saveNames() {
    var p1Input = document.querySelector('.p1');
    player1Name = p1Input ? p1Input.value : "";
    var p2Input = document.querySelector('.p2');
    player2Name = p2Input ? p2Input.value : "";
    // You can now use player1Name and player2Name in your game logic
    //alert("Player 1: " + player1Name + (player2Name ? "\nPlayer 2: " + player2Name : ""));
}


