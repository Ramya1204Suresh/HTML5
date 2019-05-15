var canvasref= document.getElementById("myCanvas1")
var canvas= document.getElementById("myCanvas")
var ctx = canvasref.getContext("2d")
var ctxclock = canvas.getContext("2d")
//draw line
ctx.moveTo(0,0)
ctx.lineTo(400,400)
ctx.stroke()
//write Hello world
ctx.font = "45px Comic Sans MS"
ctx.fillStyle = "red"
ctx.textAlign = "center"
ctx.fillText("Hello Canvas", canvasref.width/2, canvasref.height/2)

//draw rectangle
ctx.fillStyle="rgba(200,0,0,0.5)"
ctx.fillRect(50,50,100,100)

ctx.fillStyle="rgba(0,200,0,0.5)"
ctx.fillRect(100,100,150,200)

//draw circle
ctx.lineWidth="10"
ctx.strokeStyle="purple"
ctx.beginPath()
ctx.arc(325, 100, 50,0, 2*Math.PI,false)
ctx.stroke()

//draw rectangle
ctx.lineWidth="10"
ctx.strokeStyle="orange"
ctx.beginPath()
ctx.fillStyle="rgba(10,130,100,0.5)"
ctx.fillRect(270,200,100,100)
ctx.stroke()

//draw animation
window.requestAnimationFrame(animation())
var x=canvasref.width/2
var y=canvasref.height/2
var animation=function()
{
ctx.restore()
ctx.font = "25px Comic Sans MS"
ctx.fillStyle = "orange"
ctx.textAlign = "center"
ctx.StrokeText("Hello Canvas Animation",x , y)
(canvasref.height/2)+40
window.requestAnimationFrame(animation())
}

//draw clock
var radius = canvas.height / 2;
ctxclock.translate(radius, radius);

radius = radius * 0.90
drawClock();

function drawClock() {
  drawFace(ctxclock, radius);
  drawNumbers(ctxclock, radius);
  drawTime(ctxclock, radius)
}

function drawFace(ctxclock, radius) {
  var grad;
  ctxclock.beginPath();
  ctxclock.arc(0, 0, radius, 0, 2*Math.PI);
  ctxclock.fillStyle = 'pink';
  ctxclock.fill();
  grad = ctxclock.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctxclock.strokeStyle = grad;
  ctxclock.lineWidth = radius*0.1;
  ctxclock.stroke();
  ctxclock.beginPath();
  ctxclock.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctxclock.fillStyle = '#333';
  ctxclock.fill();
}

function drawNumbers(ctxclock, radius) {
    var ang;
    var num;
    ctxclock.font = radius * 0.15 + "px arial";
    ctxclock.textBaseline = "middle";
    ctxclock.textAlign = "center";
    for(num = 1; num < 13; num++){
      ang = num * Math.PI / 6;
      ctxclock.rotate(ang);
      ctxclock.translate(0, -radius * 0.85);
      ctxclock.rotate(-ang);
      ctxclock.fillText(num.toString(), 0, 0);
      ctxclock.rotate(ang);
      ctxclock.translate(0, radius * 0.85);
      ctxclock.rotate(-ang);
    }
}
function drawTime(ctxclock, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour = hour%12;
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctxclock, hour, radius*0.5, radius*0.07);
    //minute
    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctxclock, minute, radius*0.8, radius*0.07);
    // second
    second = (second*Math.PI/30);
    drawHand(ctxclock, second, radius*0.9, radius*0.02);
  }
  
  function drawHand(ctxclock, pos, length, width) {
    ctxclock.beginPath();
    ctxclock.lineWidth = width;
    ctxclock.lineCap = "round";
    ctxclock.moveTo(0,0);
    ctxclock.rotate(pos);
    ctxclock.lineTo(0, -length);
    ctxclock.stroke();
    ctxclock.rotate(-pos);
  }
  

