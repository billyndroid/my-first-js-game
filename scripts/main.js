const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(201, 223, 242, .75)';
ctx.fillRect(0, 0, width, height);

//ctx.fillStyle = 'rgb(255, 0, 0)';
//ctx.fillRect(50, 50, 100, 150);
ctx.fillStyle = 'rgba(243, 6, 89, 0.75)';
ctx.fillRect(25, 100, 175, 50);
ctx.fillStyle = 'rgba(255, 0, 255, 0.75)';
ctx.fillRect(250, 100, 175, 50);
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
    ctx.drawImage(image, 150, 150);
    ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
  }
  
//ctx.strokeStyle = 'rgb(255, 255, 255)';
//ctx.lineWidth = 5;
//ctx.strokeRect(25, 25, 175, 200);