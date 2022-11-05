var canvas = document.getElementById("canvas");

var ctx = canvas.getContext('2d');

//square//
ctx.fillStyle = "yellow"
ctx.strokeStyle = "black"
ctx.lineWidth = "5"
ctx.fillRect(85,302,100,100);
ctx.strokeRect(85,302,100,100);

//line//
ctx.strokeStyle = "rgb(255,0,0)";
ctx.beginPath();
ctx.moveTo(85,683);
ctx.lineTo(279,549);
ctx.stroke();

//circle//
ctx.fillStyle = "#ffff00"
ctx.strokeStyle = "red"
ctx.beginPath();
ctx.arc(385,442,67,0, (3*Math.PI), false);
ctx.closePath();
ctx.fill();
ctx.stroke()

//pentagon//
ctx.fillStyle = "#ff00ff"
ctx.strokeStyle = "#00ffff";
ctx.beginPath();
ctx.moveTo(558,309);
ctx.lineTo(668,284);
ctx.lineTo(724,380);
ctx.lineTo(650,464);
ctx.lineTo(548,420);
ctx.lineTo(558,309);
ctx.closePath();
ctx.fill()
ctx.stroke();

//star//
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "rgb(32,32,32)";
ctx.beginPath();
ctx.moveTo(636,496)
ctx.lineTo(667,554)
ctx.lineTo(732,567)
ctx.lineTo(732,567)
ctx.lineTo(687,615)
ctx.lineTo(695,680)
ctx.lineTo(637,654)
ctx.lineTo(576,680)
ctx.lineTo(585,616)
ctx.lineTo(540,568)
ctx.lineTo(605,556)

ctx.closePath()
ctx.fill()
ctx.stroke()
