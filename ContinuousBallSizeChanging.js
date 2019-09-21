/*continuously changing ball size while in motion from website https://editor.p5js.org/enickles/sketches/BJFD1cuRQ*/

//declaring ball1 specifications
let size1 = 10;
//minimum size
let minSize1 = 10;
//maximum size
let maxSize1 = 150;
//change speed for size (how much will the size increase/decrease each frame)
let sizeSpeed1 = 0.025;

//declaring ball2 specifications
let size2 = 10;
//minimum size
let minSize2 = 20;
//maximum size
let maxSize2 = 50;
//change speed for size (how much will the size increase/decrease each frame)
let sizeSpeed2 = 0.1;

function setup() 
  {
    createCanvas(400, 400);
  }

var ballY = 50;
var ballSpeed = 3;

var ballY2 = 150;
var ballSpeed2 = 5;

function draw() 
  {
    size1 = map(sin(frameCount * sizeSpeed1),-1.0,1.0,minSize1,maxSize1);
    
    size2 = map(sin(frameCount * sizeSpeed2),-1.0,1.0,minSize2,maxSize2);  
    
    background(220);

  
    fill(255, 0, 0);
    ellipse(100, ballY, size1, size1);
  
    fill(0, 0, 255);
    ellipse(250, ballY2, size2, size2);

    ballY = ballY + ballSpeed;
    ballY2 = ballY2 + ballSpeed2;

    if (ballY >= 400) 
      {
        ballSpeed = -3;
      }

    if (ballY2 >= 400) 
      {
        ballSpeed2 = -5;
      }

    if (ballY <= 0) 
      {
        ballSpeed = 3;
      }

    if (ballY2 <= 0) 
      {
        ballSpeed2 = 5;
      }

  }
