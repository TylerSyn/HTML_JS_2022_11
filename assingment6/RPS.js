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

document.getElementById("rock").addEventListener('click', function (e){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText("You picked, " + rps[0], 125, 200);
    playGame(rps[0]);
});

document.getElementById("paper").addEventListener('click', function (e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText("You picked, " + rps[1], 125, 200);
    playGame(rps[1]);
});

document.getElementById("scissors").addEventListener('click', function (e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText("You picked, " + rps[2], 125, 200);
    playGame(rps[2]);
});


function playGame(playerChoice) {
    var cpuChoice = Math.floor(Math.random() * 2.99)
    console.log(cpuChoice, playerChoice)

    switch (playerChoice) {
        case "rock":
            if (cpuChoice == 0) {
                //rock
                ctx.fillText("cpu chose rock, It's a tie",250,350)
            }
            else if (cpuChoice == 1) {
                //paper
                ctx.fillText("cpu chose paper, you lose",250, 350)
            }
            else {
                ctx.fillText("cpu chose scissors, you win", 250, 350)
                }
                break; 
    

  


        case "paper":
            if (cpuChoice == 0) {
                //rock
                ctx.fillText("cpu chose rock, you win",250,350)
            }
            else if (cpuChoice == 1) {
                //paper
                ctx.fillText("cpu chose paper, its a tie",250,350)
            }
            else {
                ctx.fillText("cpu chose scissors, you lose",250,350)
            }
            break; 
    

    


        case "scissors":
            if (cpuChoice == 0) {
                //rock
                ctx.fillText("cpu chose rock, you lose",250,350)
            }
            else if (cpuChoice == 1) {
                //paper
                ctx.fillText("cpu chose paper, you win",250,350)
            }
            else {
                ctx.fillText("cpu chose scissors, its a tie",250,350)
                 }
                break; 
    

   
            }}
