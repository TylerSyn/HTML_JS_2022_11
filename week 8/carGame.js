var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var timer = requestAnimationFrame(main)

var start = 50
var finish = 750
var carPos = 2
function randomRange(high, low){
    return Math.random() * (high - low) + low}
    var carWidth=50


var startFuel = randomNumber(canvas.width, 600)
var fuel = startFuel
var fuelBarWidth = 300
var gameOver = true

var seconds = 3
var fps = 60
var frames=fps

//load game sprite
var carSprite = new Image()
carSprite.src = "images/carSprite.png"

carSprite.onload = function(){
    main()
}


//add some listeners
document.addEventListener("keydown",keyPressDown)
function keyPressDown(e){
    if(e.keyCode == 32 && gameOver ){
        gameOver = false
    }
    if(fuel <= 0 ){
restartGame()
    }
}

function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (gameOver) {
        ctx.fillStyle = "white"
        ctx.font = "30px ariel"
        ctx.textAlign = "center"
        ctx.fillText("Press Space to Start",canvas.width/2,canvas.height/2)

    }
    else {

        if(!gameOver && seconds > 0){
            runStartTimer()
            drawStartTimer()
        }
        else{
            if (fuel > 0) {
            carPos++
            fuel--
        }
        }
        drawStartFinsih()
        drawCar()

        
        drawFuelBar()
        if (carPos + carWidth > finish || fuel<=0){
            drawResults()
        }

    }

    timer = requestAnimationFrame(main)

    function drawStartFinsih() {
        ctx.fillStyle = "white"
        //starting line
        ctx.fillRect(start, 50, 10, 500)
        //finish line
        ctx.fillRect(finish, 50, 10, 500)
    }

    

}

function drawCar() {
    
    //draw car
  //  ctx.fillStyle = `rgb(${randomRange(255,0)},${randomRange(255,0)},${randomRange(255,0)})`
   // ctx.fillRect(carPos, canvas.height / 2, carWidth, 20)
    ctx.drawImage(carSprite,carPos,canvas.height/2,carWidth,20)
}

function drawFuelBar() {
    var currentBarWidth = fuelBarWidth * (fuel / startFuel)
    ctx.fillStyle = "white"
    ctx.fillRect(start, 30, fuelBarWidth, 10)
    if (fuel > 300) {
        ctx.fillStyle = "green"
        ctx.fillRect(start, 30, currentBarWidth, 10)
        ctx.font = "25px ariel"
        ctx.textAlign = "left"
        ctx.fillText("Fuel " + fuel + " / " + startFuel, start, 25)
    }

    else {
        ctx.fillStyle = "red"
        ctx.fillRect(start, 30, currentBarWidth, 10)
      ctx.fillText("Fuel " + fuel + " / " + startFuel, start, 25)
    }
}
function drawResults(){
    if(carPos +carWidth >finish){
        ctx.fillStyle = "white"
        ctx.font = "25px ariel"
        ctx.textAlign = "center"
        ctx.fillText("You made it to the finish... You win",canvas.width/2,canvas.height/2)
    }
    else
    {
        ctx.fillStyle = "white"
        ctx.font = "25px ariel"
        ctx.textAlign = "center"
        ctx.fillText("You ran out of fuel... You lose",canvas.width/2,canvas.height/2)
    }
}

function randomNumber(high, low) {
    return Math.round(Math.random() * (high - low) + low)
}

function restartGame(){
    location.reload()
}
function runStartTimer(){
frames-=1
if(frames<0){
    frames = fps
    seconds -= 1
}
}
function drawStartTimer(){
    ctx.fillStyle = "white"
    ctx.font = "25px ariel"
    ctx.textAlign = "center"
    ctx.fillText(seconds,canvas.width/2,canvas.height/2)
}
