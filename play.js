var x = Math.floor(Math.random()*6) + 1;
var






var x = Math.floor(Math.random()*6) + 1;





if (x===y){
    document.querySelector(".results").innerHTML="IT IS A DRAW";
}
else if (x>y){
    document.querySelector(".results").innerHTML="PLAYER 1 WINS THE MATCH";
}
else{
    document.querySelector(".results").innerHTML="PLAYER 2 WINS THE MATCH";
}