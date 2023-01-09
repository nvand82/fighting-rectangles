// Import stylesheets
import './style.css';
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
c.fillRect(0, 0, canvas.width, canvas.height);
class Sprite {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.height = 64;
  }
  draw() {
    c.fillRect(this.position.x, this.position.y, 32, this.height);
  }
  update(color){
    c.fillStyle = color;
    this.draw();
    this.position.y += this.velocity.y;
  }
}
const player = new Sprite({
  position: { x: 0, y: 300 },
  velocity: { x: 0, y: 10},
});
player.draw();
const rival = new Sprite({
  position: { x:992, y: 300 },
  velocity: { x: 0, y: 10},
});
rival.draw();
function animate(){
  window.requestAnimationFrame(animate);
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update('blue');
  rival.update('red');
}
animate();