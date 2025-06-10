var n; //the events contuining
function event(){
    switch(value){
        case 1:
            n=1
            break;
        case 3:
            n=3
            break;
        case 5:
            n=5
            break;
        case 7:
            n=7
            break;
        case 9:
            n=9 
            break;
        case _:
            n=1;
    }  
}
if(!n) n=1;
var i = 1;
var x;
var y;
function rollme(){
    x = Math.floor(Math.random() * 6) + 1;
    r=document.querySelector(".player1img").src= `images/dice${x}.png`;;
    
    y = Math.floor(Math.random() * 6) + 1;
    p=document.querySelector(".player2img").src = `images/dice${y}.png`;

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
var scoreboard=document.querySelector(".scoreboard");
const table = document.createElement("table");
table.style.border = "1px solid black";
const headerRow = table.insertRow();
const header1 = headerRow.insertCell();
header1.textContent = "Header 1";
const header2 = headerRow.insertCell();
header2.textContent = "Header 2";

while(i<=n){
    document.querySelector("button").addEventListener("click",rollme());
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    if(x>y){
        cell1.textcontent="W";
        cell2.textContent="L";
        c+=1;
    }
    else if(y>x){
        cell1.textcontent="L";
        cell2.textContent="W";
        d+=1;
    }
    else if(x===y){
        cell1.textcontent="D";
        cell2.textContent="D";
    }
    else{
        cell1.textcontent="Not Working";
        cell2.textContent="Not Working";
    }
    document.body.appendChild(table);
}
/*
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
}
scoreboard.innerHTML=gridContent;*/
// Adding CSS for the grid


/*var style = document.createElement("style");
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
*/
if(c>d){
    document.querySelector(".results").innerHTML = "PLAYER 1 WINS THE SERIES";
}
else{
    document.querySelector(".results").innerHTML = "PLAYER 2 WINS THE SERIES";
}