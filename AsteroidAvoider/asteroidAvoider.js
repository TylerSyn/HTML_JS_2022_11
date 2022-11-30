var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var timer = requestAnimationFrame(main)

//asteroid vars
var numAsteroids =40
var Asteroids = []



//asteroid class
function Asteroid(){
    //properties to draw the asteroid
    this.radius = randomRange(15,2)
    this.x = randomRange(canvas.width- this.radius, this.radius)
    this.y = randomRange(canvas.height- this.radius, this.radius)-canvas.height
    this.vy = randomRange(15,2)
    this.color = "green"

    //methods (functions)to draw asteroid
    this.drawAsteroid = function(){
        ctx.save()
      ctx.beginPath()
      ctx.fillStyle = this.color
      ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,true)
      ctx.closePath()
      ctx.fill()

      
      
        ctx.restore()

    }
}

//for loop to instantiate ateroid for game
for(i = 0; i<numAsteroids; i++){
    Asteroids[i]=new Asteroid()
}


function main(){
    //clear canvas
    ctx.clearRect(0,0,canvas.width,canvas.height)

    for(var i = 0; i< Asteroids.length; i++){
        if(Asteroids[i].y>canvas.height + Asteroids[i].radius){
            Asteroids[i].y=randomRange(canvas.height - Asteroids[i].radius, Asteroids[i].radius)-canvas.height
            Asteroids[i].x=randomRange(canvas.width - Asteroids[i].radius, Asteroids[i].radius)
        }
        Asteroids[i].y += Asteroids[i].vy
        Asteroids[i].drawAsteroid()
    }

    //refresh screen
    timer = requestAnimationFrame(main)
}


//utility function

function randomRange(high,low){
    return Math.random()*(high-low) + low
}