let hum = prompt("Type 'rock' 'paper' or 'scissor'");
let com = ["rock","paper","scissor"];

let comChoice = com[Math.floor(Math.random() * com.length )];


if ( hum !== "rock" && hum !== "paper" && hum !== "scissor" ){
    alert("You entered a wrong word, Please re-enter the only one ot this choices 'rock' 'paper' or 'scissor");
}

else if ( hum === "rock" ){
    if ( comChoice === hum ){
        alert("No body win");
    }
    else if ( comChoice === "paper" ){
        alert("Computer wins");
    }
    else {
        alert("You Win");
    }
}
else if ( hum === "paper" ){
    if ( comChoice === hum ){
        alert("No body win");
    }
    else if ( comChoice === "scissor" ){
        alert("Computer wins");
    }
    else {
        alert("You Win");
    }
}
else {
    if ( comChoice === hum ){
        alert("No body win");
    }
    else if ( comChoice === "rock" ){
        alert("Computer wins");
    }
    else {
        alert("You Win");
    }
}

console.log("Human Choice is " + hum);
console.log("Computer Choice is " + comChoice);