// Import stylesheets
import './style.css';
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
c.fillRect(0, 0, canvas.width, canvas.height);
const gravity = .2
class Sprite {
  constructor({ position, velocity }) {
    //carhicter size
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
    //draw constant
    c.fillRect(this.position.x, this.position.y, 32, this.height);
    c.fillRect(this.snoBlob.position.x, this.snoBlob.position.y, this.snoBlob.width, this.snoBlob.height)
  }
  update(color){
    //what color are they
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
    //gravity
    if(this.position.y + this.height  + this.velocity.y >= canvas.height){
    this.velocity.y = 0 
    }
    else{
      this.velocity.y += gravity
    }
  }
}
//draw charicters
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
  //detect coilsion
  if(player.snoBlob.position.x + player.snoBlob.width == rival.position.x && player.snoBlob.position.y == rival.position.y){
console.log("Player-hit")
  }
  if(rival.snoBlob.position.x + rival.snoBlob.width == player.position.x && rival.snoBlob.position.y == player.position.y){
    console.log("rival-hit")
      }
}
animate();
window.addEventListener("keydown",(event) =>{
  //movement
  switch(event.key){
case'd':
player.velocity.x=10
break
case'a':
player.velocity.x=-10
break 
case'w':
if (player.position.y >= canvas.height - player.height){//player.velocity.y < gravity
  // object not falling
player.velocity.y=-10
console.log(player.velocity.y)
}
break
case'ArrowRight':
rival.velocity.x=10
break
case'ArrowLeft':
rival.velocity.x=-10
break 
case'ArrowUp':
if (rival.position.y >= canvas.height - rival.height){
  rival.velocity.y=-10
  }
break
}

})
window.addEventListener("keyup",(event) =>{
  switch(event.key){
case'd':
player.velocity.x=0
console.log(event.key)
break
case'a':
player.velocity.x=0
console.log(event.key)
break 
case's':
player.velocity.y=0
console.log(event.key)
break
console.log(event.key)
break
case'ArrowRight':
rival.velocity.x=0
console.log(event.key)
break
case'ArrowLeft':
rival.velocity.x=0
console.log(event.key)
break 
case'ArrowDown':
rival.velocity.y=0
console.log(event.key)
break
console.log(event.key)
break
}
 console.log(event.key)
})