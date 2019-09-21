/*color changing animation from website https://discourse.processing.org/t/fade-between-random-colours-for-a-background/1433/4*/

//declaring color changing specifications
let amt1, startColor1, newColor1;
let amt2, startColor2, newColor2;

function setup() 
  {
    createCanvas(400, 400);
  
    //setting starting color, ending color and speed of change for ball1
    startColor1 = color(255,255,255);
    newColor1 = color(random(255),random(255),random(255));
    amt1 = 0;

    fill(startColor1);
    
    //setting starting color, ending color and speed of change for ball2
    startColor2 = color(0, 0, 0);
    newColor2 = color(random(255),random(255),random(255));
    amt2 = 0;

    fill(startColor2);
  }

    var ballY = 50;
    var ballSpeed = 3;

    var ballY2 = 150;
    var ballSpeed2 = 5;

function draw() 
  {
    background(220);

    //color changing ball1
    fill(lerpColor(startColor1, newColor1, amt1));
    amt1 += 0.1;
    
    if(amt1 >= 1)
      {
        amt1 = 0.0;
        startColor1 = newColor1;
        newColor1 = color(random(255),random(255),random(255));
      }
    
    ellipse(100, ballY, 50, 50);
  
    //color changing ball2
    fill(lerpColor(startColor2, newColor2, amt2));
    amt2 += 0.01;
    
    if(amt2 >= 1)
      {
        amt2 = 0.1;
        startColor2 = newColor2;
        newColor2 = color(random(255),random(255),random(255));
      }
    
    ellipse(250, ballY2, 25, 25);

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
