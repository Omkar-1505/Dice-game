var x = Math.floor(Math.random()*6) + 1;
document.querySelector(".player1img").innerHTML = '<img src="images/dice' + x + '.png">';

var y = Math.floor(Math.random()*6) + 1;
document.querySelector(".player2img").innerHTML = '<img src="images/dice' + y + '.png">';

if (x===y){
    document.querySelector(".results").innerHTML="IT IS A DRAW";
}
else if (x>y){
    document.querySelector(".results").innerHTML="PLAYER 1 WINS THE MATCH";
}
else{
    document.querySelector(".results").innerHTML="PLAYER 2 WINS THE MATCH";
}