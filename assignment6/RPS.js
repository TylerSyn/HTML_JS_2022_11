//canvas stuff
var canvas = document.getElementById("c")
var ctx = canvas.getContext("2d")

var rock = new Image()
var paper = new Image()
var scissors = new Image()
var carl = new Image()
var hrock = new Image()
var hpaper = new Image()
var hscissors = new Image()

var playerScore = 0
function playerScoreMore (){
playerScore += 1
}
var cpuScore = 0
function cpuScoreMore(){
cpuScore += 1
}

rock.src = "images/Earth.png"
paper.src = "images/fire.png"
scissors.src = "images/windy.png"

carl.src="images/carledWheezy.png"

hrock.src = "images/EarthH.png"
hpaper.src = "images/fireH.png"
hscissors.src = "images/windyH.png"

hscissors.onload = function(){
    draw(rock,paper,scissors,rock,paper,scissors)
}


document.addEventListener("keydown", onKeyDown)
document.addEventListener("keyup", onkeyup)

var gameOver = true;
var results = "select EARTH, WIND, or FIRE above"

function onKeyDown(e) {
    console.log(e.keyCode);

}
function onkeyup(e) {
    if (e.keyCode == 32) {
        console.log("you pressed the spacebar")
        gameOver = false;
        draw(rock,paper,scissors,rock,paper,scissors)
    }
}


function draw(rock,paper,scissors,crock,cpaper,cscissors) {
    if(gameOver == true)  {
    //drawing the fonts
    ctx.font = "40px ariel";
    ctx.fillStyle = "pink"
    ctx.strokeStyle = "pink"
    ctx.textAlign = "center"
    ctx.fillText("Welcome to the EWF game!", canvas.width/2, 280)
    ctx.fillText("Press space to start", canvas.width/2, 320)
    ctx.strokeText("Welcome to the EWF game!", canvas.width/2, 280)
    }
    else{

        ctx.save()
        ctx.clearRect(0,0,canvas.width,canvas.height)
     
        ctx.font = "30px arial "
        ctx.textAlign = "center"
        ctx.fillStyle = "pink"
        ctx.fillText("Player choice", canvas.width/2, 100)
        ctx.drawImage(rock, canvas.width/2 -rock.width/2 - 100, 150)
        ctx.drawImage(paper, canvas.width/2 -paper.width/2, 150)
        ctx.drawImage(scissors, canvas.width/2 -scissors.width/2 + 100, 150)
        //cpu choice
        ctx.drawImage(carl,canvas.width/2 - carl.width/2 + 350, 375)
        ctx.fillText("CPU choice", canvas.width/2, 325)
        ctx.drawImage(crock, canvas.width/2 -rock.width/2 - 100, 375)
        ctx.drawImage(cpaper, canvas.width/2 -paper.width/2 , 375)
        ctx.drawImage(cscissors, canvas.width/2 -scissors.width/2 + 100, 375)
        
        ctx.fillText(results, canvas.width/2,525)
        ctx.fillText ("player score: "+playerScore + "CPU score: " + cpuScore, canvas.width/2,500)

        ctx.restore()
    }
    if(cpuScore >= 5){
   ctx.fillText("I won haha", 700,400)
    cpuScore = 0
    playerScore = 0
    }
    if(playerScore >= 5){
    ctx.fillText("I lost awww", 700,400)
    cpuScore=0
    playerScore=0
    }
}



//alert("Select rock, paper, or scissors!!! :)");
var rps = ["rock", "paper", "scissors"];
//console.log(rps[2])

document.getElementById("rock").addEventListener('click', function (e) {
  //  alert("You picked, " + rps[0]);
    playGame(rps[0]);
    ctx.restore()
});

document.getElementById("paper").addEventListener('click', function (e) {
   // alert("You picked, " + rps[1]);
    playGame(rps[1]);
    ctx.restore()
});

document.getElementById("scissors").addEventListener('click', function (e) {
  //  alert("You picked, " + rps[2]);
    playGame(rps[2]);
    ctx.restore()
});


function playGame(playerChoice) {
    if(gameOver == true){
        return;
    }
    else{ 
        var cpuChoice = Math.floor(Math.random() * 2.99)
    console.log(cpuChoice, playerChoice)

    switch (playerChoice) {
        case "rock":
            if (cpuChoice == 0) {
                //rock
              //  alert("cpu chose rock, It's a tie")
              results ="cpu chose rock, It's a tie"
              draw(hrock,paper,scissors,hrock,paper,scissors)
            }
            else if (cpuChoice == 1) {
                //paper
               // alert("cpu chose paper, you lose")
               results ="cpu chose paper, you lose"
                draw(hrock,paper,scissors,rock,hpaper,scissors)
                cpuScoreMore()
            }
            else {
                //alert("cpu chose scissors, you win")
                results ="cpu chose scissors, you win"
                draw(hrock,paper,scissors,rock,paper,hscissors)
                playerScoreMore()
            }
            break;





        case "paper":
            if (cpuChoice == 0) {
                //rock
             //   alert("cpu chose rock, you win")
             results ="cpu chose rock, you win"
                draw(rock,hpaper,scissors,hrock,paper,scissors)
                playerScoreMore()
            }
            else if (cpuChoice == 1) {
                //paper
              //  alert("cpu chose paper, its a tie")
              results ="cpu chose paper, its a tie"
                draw(rock,hpaper,scissors,rock,hpaper,scissors)
            }
            else {
              //  alert("cpu chose scissors, you lose")
              results ="cpu chose scissors, you lose"
                draw(rock,hpaper,scissors,rock,paper,hscissors)
                cpuScoreMore()
            }
            break;





        case "scissors":
            if (cpuChoice == 0) {
                //rock
              //  alert("cpu chose rock, you lose")
              results ="cpu chose rock, you lose"
                draw(rock,paper,hscissors,hrock,paper,scissors)
                cpuScoreMore()
            }
            else if (cpuChoice == 1) {
                //paper
               // alert("cpu chose paper, you win")
               results ="cpu chose paper, you win"
                draw(rock,paper,hscissors,rock,hpaper,scissors)
                playerScoreMore()
            }
            else {
              //  alert("cpu chose scissors, its a tie")
              results ="cpu chose scissors, its a tie"
                draw(rock,paper,scissors,rock,paper,hscissors)
            }
            break;
    }

}
   
    
}
