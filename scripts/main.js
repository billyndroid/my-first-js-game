const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
draw(ctx);
//ctx.fillStyle = 'rgb(201, 223, 242, .75)';
ctx.fillStyle = "rgb(124, 252, 0, .5)";
124, 252, 0
ctx.fillRect(0, 0, width, height);

//ctx.fillStyle = 'rgb(255, 0, 0)';
//ctx.fillRect(50, 50, 100, 150);
ctx.fillStyle = 'rgba(243, 6, 89, 0.75)';
ctx.fillRect(25, 400, 175, 50);
ctx.fillStyle = 'rgba(255, 0, 255, 0.75)';
ctx.fillRect(250, 400, 175, 50);
//road descriptionm
ctx.fillStyle = 'rgba(47,79,79, 0.75)';
ctx.fillRect(0, 200, width, 200);
ctx.fillStyle = 'rgba(255, 255, 255)';
ctx.fillRect(20, 220, 50, 5);
//end road render
//frog description
// First path
ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.stroke();

// Second path
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(20, 20);
ctx.lineTo(120, 120);
ctx.stroke();
//converts degrees to radians
function degToRad(degrees) {
    return degrees * Math.PI / 180;
  };
//triangle
ctx.lineTo(150, 50);
let triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 50+triHeight);
ctx.lineTo(50, 50);
ctx.fill();
//circle
ctx.fillStyle = 'rgb(0, 0, 255)';
ctx.beginPath();
ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill();
//arc
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
ctx.lineTo(200, 106);
ctx.fill();
//stroke text
ctx.strokeStyle = 'white';
ctx.lineWidth = 2;
ctx.textAlign = 'left';
ctx.font = '72px helvetica';
ctx.strokeText('Start', 550, 380);
// fill text
ctx.fillStyle = 'red';
ctx.textAlign = 'center';
ctx.font = '48px georgia';
ctx.fillText('Nutty Squirrel', 350, 150);
ctx.fillText('center', 500, 40);
//drawing images
let image = new Image();
image.src = "assets/FAVicon.png";
image.onload = function() {
    ctx.drawImage(image, 450, 350);
    ctx.drawImage(image, 20, 20, 185, 175, 540, 450, 285, 225);
  }
  /*tree Created with Ai->Canvas Export Plug-In Version 1.6 (PC/64) By Mike Swanson (http://blog.mikeswanson.com/)*/
  function draw(ctx) {

    ctx.save(465, 34);
      ctx.beginPath(200, 100);
      ctx.moveTo(107.0, 63.5);
      ctx.bezierCurveTo(107.0, 83.1, 91.1, 99.0, 71.5, 99.0);
      ctx.bezierCurveTo(64.9, 99.0, 58.8, 97.2, 53.5, 94.1);
      ctx.bezierCurveTo(48.2, 97.2, 42.1, 99.0, 35.5, 99.0);
      ctx.bezierCurveTo(15.9, 99.0, 0.0, 83.1, 0.0, 63.5);
      ctx.bezierCurveTo(0.0, 50.6, 6.8, 39.4, 17.1, 33.1);
      ctx.bezierCurveTo(18.3, 14.6, 33.7, 0.0, 52.5, 0.0);
      ctx.bezierCurveTo(70.9, 0.0, 86.1, 14.0, 87.8, 32.0);
      ctx.bezierCurveTo(99.2, 37.9, 107.0, 49.8, 107.0, 63.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(23, 238, 126)";
      ctx.fill();
      ctx,
      ctx.restore();
  }
//ctx.strokeStyle = 'rgb(255, 255, 255)';
//ctx.lineWidth = 5;
//ctx.strokeRect(25, 25, 175, 200);