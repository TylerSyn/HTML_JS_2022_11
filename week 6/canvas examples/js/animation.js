var camvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main)
var x = 100
var speedx = 1
var y = 100
var speedy = 1

var mario = new Image()
mario.src="images/mario2.png"
mario.onload = function(){
    main()
}

var bg = new Image()
bg.src="images/mariogalaxy.jpg"
bg.onload = function(){
    main()
}

function main() {
    
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(bg,0,0, canvas.width, canvas.height)
    // ctx.fillStyle = "red"
    // ctx.beginPath();
    // ctx.arc(x, 300, 20, 0, 2 * Math.PI, true)
    // ctx.fill()
    
//draw sprite image//
ctx.drawImage(mario, x, y, 100,110)


x += speedx
y += speedy
    if(x > canvas.width -85 || x < 0 ){
        speedx *= -1.01
        
    }
    if(y > canvas.height - 110 || y < 0){
        speedy *= -1.01
        
    }
    console.log(speedx)
    console.log(speedy)
    timer = requestAnimationFrame(main)
}



