var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var timer = requestAnimationFrame(main)
var gameOver = true
var score = 0
var highScore = 0
var currentState = 0
var gameState = []

//asteroid vars
var numAsteroids = 20
var Asteroids = []

//player ship vars
var ship = new playerShip()


//create keyboard even handlers
document.addEventListener("keydown", pressKeyDown)
document.addEventListener("keyup", pressKeyUp)

function pressKeyDown(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            //code for up w
            ship.up = true
        }
        if (e.keyCode == 65) {
            //code for left a
            ship.left = true
        }
        if (e.keyCode == 68) {
            //code for  right d
            ship.right = true
        }
        if (e.keyCode == 83) {
            //code for down s
            ship.down = true
        }
        if (e.keyCode == 38) {
            //code for up up arr
            ship.up = true
        }
        if (e.keyCode == 37) {
            //code for left arr
            ship.left = true
        }
        if (e.keyCode == 39) {
            //code for  right right arr
            ship.right = true
        }
        if (e.keyCode == 40) {
            //code for down down arr
            ship.down = true
        }
    }
    if (gameOver) {
        if (e.keyCode == 32) {
            if (currentState == 2) {
                //game over screen inputs
                currentState = 0
                numAsteroids = 20
                Asteroids = []
                score = 0
                //start game here
                main()

            } else {
                //miain menu screen inputs
                gameStart()
                currentState = 1
                gameOver = false
                main()
                scoreTimer()
            }
        }
    }
}

function pressKeyUp(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            //code for up w
            ship.up = false
        }
        if (e.keyCode == 65) {
            //code for left a
            ship.left = false
        }
        if (e.keyCode == 68) {
            //code for  right d
            ship.right = false
        }
        if (e.keyCode == 83) {
            //code for down s
            ship.down = false
        }
        if (e.keyCode == 38) {
            //code for up arr
            ship.up = false
        }
        if (e.keyCode == 37) {
            //code for left arr
            ship.left = false
        }
        if (e.keyCode == 39) {
            //code for  right arr
            ship.right = false
        }
        if (e.keyCode == 40) {
            //code for down arr
            ship.down = false
        }
    }






}



//arrow keys





//asteroid class
function Asteroid() {
    //properties to draw the asteroid
    this.radius = randomRange(15, 2)
    this.x = randomRange(canvas.width - this.radius, this.radius)
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height
    this.vy = randomRange(10, 5)
    this.color = "green"

    //methods (functions)to draw asteroid
    this.drawAsteroid = function () {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fill()



        ctx.restore()

    }
}

//for loop to instantiate ateroid for game


function playerShip() {
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    this.width = 20
    this.height = 20
    this.up = false
    this.down = false
    this.left = false
    this.right = false
    this.vx = 0
    this.vy = 0
    this.flameLength = 30



    this.drawShip = function () {
        ctx.save()
        ctx.translate(this.x, this.y)
        //draw flame
        if(this.up || this.left || this.right){
            ctx.save()
            if(this.flameLength = 30){
                this.flameLength = 20
                ctx.fillStyle = "yellow"
            }else{
                this.flameLength = 30
                this.fillStyle = "orange"
            }
            //draw the flame
            ctx.beginPath()
            ctx.moveTo(0,this.flameLength)
            ctx.lineTo(5,5)
            ctx.lineTo(-5,5)
            ctx.lineTo(0,this.flameLength)
            ctx.closePath()
            ctx.fill()
            ctx.restore()
        }

        //draw ship
        ctx.fillStyle = "red"
        ctx.beginPath()
        ctx.moveTo(0, -10)
        ctx.lineTo(10, 10)
        ctx.lineTo(-10, 10)
        ctx.lineTo(0, -10)
        ctx.closePath()
        ctx.fill()
        ctx.restore()


    }

    this.moveShip = function () {
        this.x += this.vx
        this.y += this.vy
        //bottom boundry
        if (this.y > canvas.height - this.height / 2) {
            this.y = canvas.height - this.height / 2
            this.vy = 0
        }

        //top boundry
        if (this.y < this.height / 2) {
            this.y = this.height / 2
            this.vy = 0
        }

        //left boundry
        if (this.x < this.width / 2) {
            this.x = this.width / 2
            this.vx = 0
        }
        //right boundry
        if (this.x > canvas.width - this.width / 2) {
            this.x = canvas.width - this.width / 2
            this.vx = 0
        }
    }

}


function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)


    gameState[currentState]()

    //refresh screen
    if (!gameOver) {
        timer = requestAnimationFrame(main)
    }
    while (Asteroids.length < numAsteroids) {
        Asteroids.push(new Asteroid())
    }

}


//game state machine

//main menu state
gameState[0] = function () {
    //code for main menu
    ctx.save()
    ctx.font = "50px ariel"
    ctx.fillStyle = "green"
    ctx.textAlign = "center"
    ctx.fillText("Asteroid Avoider", canvas.width / 2, canvas.height / 2 - 30)
    ctx.font = "25px ariel"
    ctx.fillText("Press Space to Start", canvas.width / 2, canvas.height / 2 + 20)
    ctx.restore()


}
//play game state
gameState[1] = function () {
    //code for the asteroid game
    //clear canvas


    //draw score to screen
    ctx.save()
    ctx.font = "15px ariel"
    ctx.fillStyle = "white"
    ctx.fillText(`Score: ${score}`, canvas.width - 150, 30)
    ctx.restore()

    if (ship.up) {
        ship.vy = -10
    } else {
        ship.vy = 3
    }

    if (ship.left) {
        ship.vx = -10

    } else {
        ship.vx = 0
    }
    if (ship.right) {
        ship.vx = 10

    }
    if (ship.down) {
        ship.vy = 10
    }




    for (var i = 0; i < Asteroids.length; i++) {
        var dX = ship.x - Asteroids[i].x
        var dY = ship.y - Asteroids[i].y
        var distance = Math.sqrt((dX * dX) + (dY * dY))

        //collision detection happens here
        if (detectCollision(distance, (ship.height / 2 + Asteroids[i].radius))) {
            // console.log("hit asteroid")
            // alert("hit Asteroids")
            gameOver = true
            currentState = 2
            main()
            return;
        }


        if (Asteroids[i].y > canvas.height + Asteroids[i].radius) {
            Asteroids[i].y = randomRange(canvas.height - Asteroids[i].radius, Asteroids[i].radius) - canvas.height
            Asteroids[i].x = randomRange(canvas.width - Asteroids[i].radius, Asteroids[i].radius)
        }
        Asteroids[i].y += Asteroids[i].vy
        Asteroids[i].drawAsteroid()
    }

    //draw ship
    ship.moveShip()
    ship.drawShip()

    // adds asteroid to game as time goes on


}
//game over state
gameState[2] = function () {
    if (score > highScore) {
        highScore = score

        ctx.save()
        ctx.font = "35px ariel"
        ctx.fillStyle = "green"
        ctx.textAlign = "center"
        ctx.fillText("Game over, your score was " + score.toString(), canvas.width / 2, canvas.height / 2 - 65)
        ctx.fillText("Your new highscore is " + highScore.toString(), canvas.width / 2, canvas.height / 2 - 30)
        ctx.fillText("New RECORD", canvas.width / 2, canvas.height / 2 + 5)
        ctx.font = "20px ariel"
        ctx.fillText("Press Space to try again ", canvas.width / 2, canvas.height / 2 + 30)
        ctx.restore()
    } else {

        //code for game over

        ctx.save()
        ctx.font = "35px ariel"
        ctx.fillStyle = "green"
        ctx.textAlign = "center"
        ctx.fillText("Game over, your score was " + score.toString(), canvas.width / 2, canvas.height / 2 - 65)
        ctx.fillText("Your new highscore is " + highScore.toString(), canvas.width / 2, canvas.height / 2 - 30)
        ctx.font = "20px ariel"
        ctx.fillText("Press Space to try again ", canvas.width / 2, canvas.height / 2 + 25)
        ctx.restore()
    }


}


//utility function

function gameStart() {
    for (i = 0; i < numAsteroids; i++) {
        Asteroids[i] = new Asteroid()
    }

    ship = new playerShip()
}



function randomRange(high, low) {
    return Math.random() * (high - low) + low
}

function detectCollision(distance, calcDistance) {
    return distance < calcDistance

}


function scoreTimer() {
    if (!gameOver) {
        score++

        if (score % 5 == 0) {
            numAsteroids += 5
            console.log(numAsteroids)
        }

        //calls scoreTimer every sec
        setTimeout(scoreTimer, 1000)
    }
}
