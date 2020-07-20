// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

let backgroundColor, marcoPosition, rectPosition, mousePosition, gameOver;

function setup() {
  // Canvas & color settings
  createCanvas(500, 400);
  backgroundColor = 0;
  // This variable contains a JSON object
  marcoPosition = {
    x: random(width),
    y: random(height)
  };
  mousePosition = {
    x: mouseX,
    y: mouseY
  };
  gameOver = false;
}

function draw() {
  background(backgroundColor);
  fill(255);
  textSize(20);
  text("Click around to find the invisible dot!", 80, 30);
  mousePosition = {
    x: mouseX,
    y: mouseY
  };
  fill(0);
  ellipse(marcoPosition.x, marcoPosition.y, 20, 20);
  if (mouseIsPressed) {
    let com = compute(mousePosition, marcoPosition);
    fill(255);
    text(`${com}`, 80, 50);
  }
  if (gameOver) {
    background(40, 50, 100);
    textSize(40);
    fill(255);
    text("YOU FOUND THE DOT!", 30, height / 2);
    fill(255);
    ellipse(marcoPosition.x, marcoPosition.y, 20, 20);
  }
}

function computeDistance(point1, point2) {
  let deltaX = point1.x - point2.x;
  let deltaY = point1.y - point2.y;
  let distance = Math.round((deltaX ** 2 + deltaY ** 2) ** 0.5);
  return distance;
}
function compute(point1, point2) {
  let distance = computeDistance(point1, point2);
  textSize(20);
  if (distance > 200) {
    return "You are cold";
  } else if (distance > 50) {
    return "You are warmer";
  } else if (distance > 10) {
    return "You are red hot";
  } else if (distance <= 10) {
    gameOver = true;
  }
}
