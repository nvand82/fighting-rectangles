// Import stylesheets
import './style.css';
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
c.fillRect(0, 0, canvas.width, canvas.height);
const gravity = .1
class Sprite {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.height = 64;
    this.snoBlob = {
      position : this.position,
      height : 10,
      width : 40
    }
  }
  draw() {
    c.fillRect(this.position.x, this.position.y, 32, this.height);
    c.fillRect(this.snoBlob.position.x, this.snoBlob.position.y, this.snoBlob.width, this.snoBlob.height)
  }
  update(color){
    c.fillStyle = color;
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    // right border
    if (this.position.x >= 1000) {
      this.velocity.x = 0;
      this.position.x = 1000
    }
    // left border
    if (this.position.x <= 0) {
      this.velocity.x = 0;
      this.position.x = 0;
    }
    if(this.position.y + this.height  + this.velocity.y >= canvas.height){
    this.velocity.y = 0 
    }
    else{
      this.velocity.y += gravity
    }
  }
}
const player = new Sprite({
  position: { x: 100, y: 300 },
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
window.addEventListener("keydown",(event) =>{
  switch(event.key){
case'd':
player.velocity.x=10
break
case'a':
player.velocity.x=-10
break 
case'w':
if (player.position.y >= canvas.height - player.height){
player.velocity.y=-100
}
break
case'ArrowRight':
rival.velocity.x=10
break
case'ArrowLeft':
rival.velocity.x=-10
break 
case'ArrowDown':
rival.velocity.y=10
break
case'ArrowUp':
if (player.position.y >= canvas.height - player.height){
  rival.velocity.y=-100
  }
break
}
 console.log(event.key)
})
window.addEventListener("keyup",(event) =>{
  switch(event.key){
case'd':
player.velocity.x=0
break
case'a':
player.velocity.x=0
break 
case's':
player.velocity.y=0
break
case'w':
player.velocity.y=0
break
case'ArrowRight':
rival.velocity.x=0
break
case'ArrowLeft':
rival.velocity.x=0
break 
case'ArrowDown':
rival.velocity.y=0
break
case'ArrowUp':
rival.velocity.y=-0
break
}
 console.log(event.key)
})