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
//road render
ctx.fillStyle = 'rgba(47,79,79, 0.75)';
ctx.fillRect(0, 200, width, 200);
ctx.fillStyle = 'rgba(255, 255, 255)';
ctx.fillRect(20, 220, 50, 5);
//end road render
//ctx.strokeStyle = 'rgb(255, 255, 255)';
//ctx.lineWidth = 5;
//ctx.strokeRect(25, 25, 175, 200);