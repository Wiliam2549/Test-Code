var test = 0
var a

function setup() {
  createCanvas(400,400);
  test = 5;
  sprite = createSprite(200, 200, 10, 10);
  sprite.shapeColor = "blue";
  a = createEdgeSprites();
}

function draw() {
  background("red");
  console.log(test);
  //first edge in array a is the left edge
  //second edge is the right edge
  //third edge is the top edge
  //fourth edge is the bottom edge
  sprite.bounceOff(a);
  if(keyDown(LEFT_ARROW)) {
    sprite.velocityX = -5
  }
  if(keyDown(RIGHT_ARROW)) {
      sprite.velocityX = 5
  }
  if(keyDown(DOWN_ARROW)) {
    sprite.velocityY = 5
  }
  if(keyDown(UP_ARROW)) {
    sprite.velocityY = -5
  }

  drawSprites();
}




