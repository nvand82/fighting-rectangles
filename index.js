// Import stylesheets
import './style.css';
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var playerDirect = 0
var rivalDirect = 1
var pHealth = 450;
var rHealth = 450;
c.fillRect(0, 0, canvas.width, canvas.height);
const gravity = .2
class Sprite {
  constructor({ position, velocity }) {
    //carhicter size
    this.position = position;
    this.velocity = velocity;
    this.height = 64;
  }
  draw() {
    //draw constant
    c.fillRect(this.position.x, this.position.y, 32, this.height);
    c.fillStyle = "white"
    c.fillRect(canvas.width/2, canvas.height/2, 64, 32);
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
    //gravity this.position.x - this.width <= canvas.width/2
    if(this.position.y + this.height  + this.velocity.y >= canvas.height){
    this.velocity.y = 0 
    }
    else if(this.position.y + this.height < canvas.height/2 - 2 && this.position.y + this.height > canvas.height/2 - 32 && this.position.x >= canvas.width/2-32 &&
      this.position.x <= canvas.width/2+64){
        this.velocity.y = 0
    }
    else{
      this.velocity.y += gravity
      console.log(this.position.x)
    }
  }
}
class SnoBlob {
  constructor({ position, velocity }) {
    //carhicter size
    this.position = position;
    this.velocity = velocity;
  }
  draw() {
    //draw constant
    c.fillStyle = ("white")
    c.fillRect(this.position.x, this.position.y, 32, 16)
  }
  update(color){
    //what color are they
    c.fillStyle = color;
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    // right border
    //gravity this.position.x - this.width <= canvas.width/2
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
const PlayerSnoBlob = new SnoBlob({
  position: { x: -30, y: 0},
  velocity: { x:0, y:0}
});
 PlayerSnoBlob.draw();
 const RivalSnoBlob = new SnoBlob({
  position: { x: -30, y: 0},
  velocity: { x:0, y:0}
});
 RivalSnoBlob.draw();
function animate(){
  window.requestAnimationFrame(animate);
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update('blue');
  rival.update('red');
  PlayerSnoBlob.update('blue')
  RivalSnoBlob.update('red')
  //detect coilsion
  if(PlayerSnoBlob.position.x >= rival.position.x && 
    PlayerSnoBlob.position.x <= rival.position.x + 32 && 
     PlayerSnoBlob.position.y == rival.position.y){
console.log("Player-hit")
pHealth -= 45;
    document.getElementById('enemyHealth').style.width =
      pHealth.toString() + 'px';
  }
if(RivalSnoBlob.position.x  >= player.position.x && RivalSnoBlob.position.x    <= player.position.x + 32 &&
   RivalSnoBlob.position.y == player.position.y){
    console.log("rival-hit")
    rHealth -= 45;
    document.getElementById('playerHealth').style.width =
      rHealth.toString() + 'px';
      }
}
animate();
window.addEventListener("keydown",(event) =>{
  //movement
  switch(event.key){
case'd':
player.velocity.x=10
playerDirect = 0
break
case'a':
player.velocity.x=-10
playerDirect = 1
break 
case'w':
if (player.position.y >= canvas.height - player.height){//player.velocity.y < gravity
  // object not falling
player.velocity.y=-10.68
console.log(player.velocity.y)
}
break
case's':
if(playerDirect == 0){ 
  PlayerSnoBlob.position.y = player.position.y
  PlayerSnoBlob.position.x = player.position.x
  PlayerSnoBlob.velocity.x = 15
}
else{
  PlayerSnoBlob.position.y = player.position.y
  PlayerSnoBlob.position.x = player.position.x
  PlayerSnoBlob.velocity.x = -15
}
break
case'ArrowRight':
rival.velocity.x=10
rivalDirect = 0
break
case'ArrowLeft':
rival.velocity.x=-10
rivalDirect = 1
break 
case'ArrowUp':
if (rival.position.y >= canvas.height - rival.height){
  rival.velocity.y=-10.7
  }
break
case'ArrowDown':
  if(rivalDirect == 0){
    RivalSnoBlob.position.y = rival.position.y
    RivalSnoBlob.position.x = rival.position.x
    RivalSnoBlob.velocity.x = 15
  }
  else{
    RivalSnoBlob.position.y = rival.position.y
    RivalSnoBlob.position.x = rival.position.x
    RivalSnoBlob.velocity.x = -15
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