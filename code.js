const goldA = 1 + Math.sqrt(5);
const goldB = 3 + Math.sqrt(5);

var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

myIcon(canvas.getContext('2d'));


function myIcon(ctx, d=400){
    let x=0;
    ctx.beginPath();
    ctx.moveTo(0,0);

    ctx.lineTo( d,0);
    ctx.lineTo( d/2, d);
    ctx.lineTo(0, 0);

    ctx.moveTo( d/2,0);
    ctx.lineTo( d/2, d);
    x = d/goldB;
    console.log(x);
    ctx.moveTo(x,0);
    ctx.lineTo(x, d/2);
    x += d/2;
    ctx.moveTo(x,0);
    ctx.lineTo(x, d/2);

    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.fillStyle = "#619"
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.stroke();
}


