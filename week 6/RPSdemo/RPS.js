//canvas stuff
var canvas = document.getElementById("c")
var ctx = canvas.getContext("2d")

//drawing the fonts
ctx.font = "40px ariel";
ctx.fillStyle = "blue"
ctx.strokeStyle = "green"
ctx.fillText("Welcome to the RPS game!", 125, 280)
ctx.strokeText("Welcome to the RPS game!", 125, 280)


//alert("Select rock, paper, or scissors!!! :)");
var rps = ["rock", "paper", "scissors"];
//console.log(rps[2])

document.getElementById("rock").addEventListener('click', function (e) {
    alert("You picked, " + rps[0]);
    playGame(rps[0]);
});

document.getElementById("paper").addEventListener('click', function (e) {
    alert("You picked, " + rps[1]);
    playGame(rps[1]);
});

document.getElementById("scissors").addEventListener('click', function (e) {
    alert("You picked, " + rps[2]);
    playGame(rps[2]);
});


function playGame(playerChoice) {
    var cpuChoice = Math.floor(Math.random() * 2.99)
    console.log(cpuChoice, playerChoice)

    switch (playerChoice) {
        case "rock":
            if (cpuChoice == 0) {
                //rock
                alert("cpu chose rock, It's a tie")
            }
            else if (cpuChoice == 1) {
                //paper
                alert("cpu chose paper, you lose")
            }
            else {
                alert("cpu chose scissors, you win")
                }
                break; 
    

  


        case "paper":
            if (cpuChoice == 0) {
                //rock
                alert("cpu chose rock, you win")
            }
            else if (cpuChoice == 1) {
                //paper
                alert("cpu chose paper, its a tie")
            }
            else {
                alert("cpu chose scissors, you lose")
            }
            break; 
    

    


        case "scissors":
            if (cpuChoice == 0) {
                //rock
                alert("cpu chose rock, you lose")
            }
            else if (cpuChoice == 1) {
                //paper
                alert("cpu chose paper, you win")
            }
            else {
                alert("cpu chose scissors, its a tie")
                 }
                break; 
    

   
            }}
