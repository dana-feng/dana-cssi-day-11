// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions. 
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

let backgroundColor, marcoPosition, rectPosition, mousePosition

function setup() {
  // Canvas & color settings
  createCanvas(500, 400);
  backgroundColor = 0;
  // This variable contains a JSON object
  marcoPosition = {
    "x": random(width),
    "y": random(height)
  }
  mousePosition ={
    "x" : mouseX,
    "y" : mouseY
  }
}

function draw() {
  background(backgroundColor);
  ellipse(marcoPosition.x, marcoPosition.y, 20, 20); 
  if(mouseIsPressed){
    let com = compute(mousePosition, marcoPosition);
    fill(255);
    text(`you are ${com}`, 20, 20);
  }
}


function computeDistance(point1, point2){
  let deltaX = point1.x - point2.x;
  console.log(deltaX);
  let deltaY = point1.y - point2.y;
  console.log(deltaY);
  let distance = (deltaX **2 + deltaY **2)**0.5;
  return distance;
  
}
function compute(point1, point2){
  let distance = computeDistance(point1, point2);
  fill(255);
  text(`distance: ${distance}`, 20, 60);
  if(distance > 200){
    fill(255);
    text("cold", 20, 50);
    return "colder";
  }
  else if (distance > 50){
    fill(255);
    text("warm", 20, 50);
    return "warmer";
    
  }
  else{
    fill(255);
    text("hot", 20, 50);
    return "red hot";
  }
}
