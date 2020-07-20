// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions. 
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

let backgroundColor, spherePosition, rectPosition, mousePosition

function setup() {
  // Canvas & color settings
  createCanvas(500, 400);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  // This variable contains a JSON object
  spherePosition = {
    "x": 100,
    "y": 100
  }
  rectPosition = {
    "x" : 130,
    "y" : 140
  };
  
  mousePosition ={
    "x" : mouseX,
    "y" : mouseY
  }
}

function draw() {
  background(backgroundColor);
  ellipse(spherePosition.x, spherePosition.y, 20, 20);
  rect(rectPosition.x, rectPosition.y, 20, 20);
  line(spherePosition.x, spherePosition.y, rectPosition.x, rectPosition.y);
  
  let distance1 = computeDistance(spherePosition, rectPosition);
  text(`the circle and the rectangle are ${Math.round(distance1)} units apart.`, 20,20);
  
  let distance2 = computeDistance(mousePosition, spherePosition);
  text(`the circle and your mouse are ${Math.round(distance2)} units apart; you're ${computeCategoryOfDistance(mousePosition, spherePosition)} `, 20, 20);
}

function mousePressed() {
  spherePosition.x = random(width);
  spherePosition.y = random(height);
}
function computeDistance(point1, point2){
  let deltaX = point1.x - point2.x;
  let deltaY = point1.y - point2.y;
  let distance = (deltaX **2 + deltaY **2)**0.5;
  return distance;
  
}
function computeCategoryOfDistance(point1, point2){
  let distance = computeDistance(point1, point2);
  if(distance > 200){
    backgroundColor = color(240,10,100);
    return "cold";
  }
  else if (distance > 50){
    backgroundColor = color(120,10,100);
    return "warmer";
    
  }
  else{
    backgroundColor = color(0,10,100);
    return "red hot";
  }
}
