// rock, paper, scissors! again***
/*
let playGame = confirm("shall we play rock,paper,scissors?");
if (playGame) {
    let playerChoice = prompt("please enter rock, paper, or scissors");
    if (playerChoice) {
        let playerOne = playerChoice;
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") { 
            let computerChoice = Math.floor(Math.random()*3 + 1);
            let computer = 
             computerChoice === 1? "rock"
            : computerChoice === 2 ? "paper" 
            : "scissors";
///////////////////////////////////////////////////////////////////////////
             let game = 
             playerOne === computer? `playerOne: ${playerOne}\n computer: ${computer}\n Tie`
             : playerOne === "rock" && computer === "paper"? `playerOne: ${playerOne}\n computer: ${computer}\n computer wins!`
             : playerOne === "paper" && computer === "scissors"? `playerOne: ${playerOne}\n computer: ${computer}\n computer wins!`
             : playerOne === "scissors" && computer === "rock"? `playerOne: ${playerOne}\n computer: ${computer}\n computer wins!`
             : `playerOne: ${playerOne}\n computer: ${computer}\n playerOne wins!`;
             alert(game);
             console.log(game);
            let playAgain = confirm("wanna play again?");
            playAgain ? location.reload() : alert ("Thanks for playing.")             
        } else {
            console.log("you did'nt enter rock, paper, or scissors :(");
        }
        
    } else {
        console.log("I guess you changed your mind! no problem we'll play next time!");
    }
} else {
    console.log("Ok, maybe next time!");
}
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// rock, paper, scissors
/*
let playGame = confirm("shall we play rock, paper, scissors?");
if (playGame) {
    let playerChoice = prompt("enter rock, paper, scissors");
    if (playerChoice) {
    let playerOne = playerChoice;
    if (playerOne == "rock" || playerOne == "paper" || playerOne == "scissors") {
        let computerChoice = Math.floor(Math.random()*3 + 1);
        let computer = 
        computerChoice === 1? "rock"
        : computerChoice === 2? "paper"
        : "scissors";
        let game = 
        playerOne === computer ? `playerOne: ${playerOne} \n computer: ${computer} \n Tie`
        : playerOne === "rock" && computer === "paper" ? `playerOne: ${playerOne} \n computer: ${computer} \n Computer wins!`
        : playerOne === "paper" && computer === "scissors" ? `playerOne: ${playerOne} \n computer: ${computer} \n Computer wins!`
        : `playerOne: ${playerOne} \n computer: ${computer} \n PlayerOne wins!`;
        alert(game);
        console.log(game);
        let playAgain = confirm("wanna play again?");
        playAgain ? location.reload() : alert("Thanks for playing :)");
    } else {
        alert("you did'nt enter rock, paper, scissors!");
        console.log("you did'nt enter rock, paper, scissors!");
    }
    } else {
        alert("I guess you changed your mind, maybe next time!");
        console.log("I guess you changed your mind, maybe next time!");
    }    
} else {
    alert("Ok maybe next time!");
    console.log("Ok maybe next time!");
}

//////////////////////////////////////////////////////////////////////////////
/*
let randomNum = Math.ceil(Math.random()*3);
console.log(randomNum);
let randomNum2 = Math.floor(Math.random()*3 + 1);
console.log(randomNum2);
*/
///////////////////////////////////////////////////////////////////////////////////
// class  passing parameters and values
/*
class vehicle {
    constructor(numWheels,numDoors,whatColor) {
        this.wheels = numWheels;
        this.doors = numDoors;
        this.color = whatColor;
    }
    typeOfVehicle() {
        `${this.wheels}` === 4 ? console.log("car")
        : `${this.wheels}` === 10 ? console.log("truck")
        : `${this.wheels}` === 2 ? console.log("motorCycle")
        : console.log("not a land vehicle");
    }
}
myVehicle = new vehicle(4,2,"red");
myVehicle.typeOfVehicle();
*/







































