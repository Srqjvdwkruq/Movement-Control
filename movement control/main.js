console.log('main.js loaded');

const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let vx = 0;
let vy = 0;

function update() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
    x += vx;
    y += vy;
    ctx.fillRect(x, y, 50, 50)
    requestAnimationFrame(update)
}
update()