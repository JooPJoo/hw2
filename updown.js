function setup() 
  {
    createCanvas(400, 400);
  }

//setting ball1 start point and movement speed
var ballY = 50;
var ballSpeed = 3;

//setting ball2 start point and movement speed
var ballY2 = 50;
var ballSpeed2 = 5;

function draw() 
  {
    background(220);

    //ball1 color and shape
    fill(255, 0, 0);
    ellipse(100, ballY, 50, 50);
  
    //ball2 color and shape
    fill(0, 0, 255);
    ellipse(250, ballY2, 25, 25);

    //setting the balls to move in the vertical position
    ballY = ballY + ballSpeed;
    ballY2 = ballY2 + ballSpeed2;

    //telling the ball1 to move down once it reaches top of canvas
    if (ballY >= 400) 
      {
        ballSpeed = -3;
      }

    //telling the ball2 to move down once it reaches top of canvas
    if (ballY2 >= 400) 
      {
        ballSpeed2 = -5;
      }

    //telling the ball1 to move up once it reaches bottom of canvas
    if (ballY <= 0) 
      {
        ballSpeed = 3;
      }

    //telling the ball2 to move up once it reaches bottom of canvas
    if (ballY2 <= 0) 
      {
        ballSpeed2 = 5;
      }

  }
