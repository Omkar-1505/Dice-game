var n;
function c1(){
    n=1;
}
function c3(){
    n=3;
}
function c5(){
    n=5;
}
function c7(){
    n=7;
}
function c9(){
    n=9;
}
var i = 1;
var x;
var y;
function rollme(){
    x = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".player1img").innerHTML = '<img src="images/dice' + x + '.png">';

    y = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".player2img").innerHTML = '<img src="images/dice' + y + '.png">';

    if (x === y) {
        document.querySelector(".results").innerHTML = "IT IS A DRAW";
    } else if (x > y) {
        document.querySelector(".results").innerHTML = "PLAYER 1 WINS THE MATCH !!!";
    } else {
        document.querySelector(".results").innerHTML = "PLAYER 2 WINS THE MATCH !!!";
    }
}
var c;
var d;
// Adding a grid under the class scoreboard
var scoreboard = document.querySelector(".scoreboard");
var gridContent=`
    <div class="grid">
        <div class="cell">Player 1</div>
        <div class="cell">Player 2</div> 
`;
while(i<=n){
    document.querySelector("button").addEventListener("click",rollme());
    if (x>y){
        gridContent +=`
            <div class="cell">W</div>
            <div class="cell">L</div>
        `;
        c+=1;
    }
    else if(y>x){
        gridContent +=`
            <div class="cell">L</div>
            <div class="cell">w</div>
        `;
        d+=1;
    }
    if(x===y){
        gridContent +=`
            <div class="cell">D</div>
            <div class="cell">D</div>
        `;
    }
    else{
        gridContent+=`
            <div class="cell">Not Working</div>
            <div class="cell">Not Working</div>
        `;
    }
    gridContent += `</div>`
    i++;
}
/*for( var i = 0; i<4 ; i++){
    if (x>y){
        gridContent +=`
            <div class="cell">W</div>
            <div class="cell">L</div>
        `;
        c+=1;
    }
    else if(y>x){
        gridContent +=`
            <div class="cell">L</div>
            <div class="cell">w</div>
        `;
        d+=1;
    }
    if(x===y){
        gridContent +=`
            <div class="cell">D</div>
            <div class="cell">D</div>
        `;
    }
    else{
        gridContent+=`
            <div class="cell">Not Working</div>
            <div class="cell">Not Working</div>
        `;
    }
    gridContent += `</div>`
}*/
scoreboard.innerHTML=gridContent;
// Adding CSS for the grid
var style = document.createElement("style");
style.innerHTML = `
    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        margin-top: 20px;
    }
    .cell {
        padding: 10px;
        border: 1px solid #ccc;
        text-align: center;
        font-weight: bold;
    }
`;
document.head.appendChild(style);
if(c>d){
    document.querySelector(".results") = "PLAYER 1 WINS THE SERIES";
}
else{
    document.querySelector(".results") = "PLAYER 2 WINS THE SERIES";
}