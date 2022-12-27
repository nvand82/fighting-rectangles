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
    c.fillStyle = 'green';
    c.fillRect(this.position.x, this.position.y, 32, this.height);
  }
}
const player = new Sprite({
  position: { x: 0, y: 0 },
  velocity: { x: 0, y: 0 },
});

