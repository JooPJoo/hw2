/*guidance from website https://editor.p5js.org/icm/sketches/BJKWv5Tn*/

//declares first ball size, speed and starting position
let x1 = 25;
let y1 = 25;
let xspeed1 = 5;
let yspeed1 = 2;
let r1 = 25;

//declares second ball size, speed and starting position
let x2 = 375;
let y2 = 25;
let xspeed2 = 2;
let yspeed2 = 10;
let r2 = 25;

//declares third ball size, speed and starting position
let x3 = 200;
let y3 = 25;
let xspeed3 = 7;
let yspeed3 = 7;
let r3 = 25;


function setup() 
  {
    createCanvas(400, 400);
  }



function draw() 
  {
    background(220);
  
    //first ball color, shape and reaction to canvas boundaries
    fill(255, 0, 0);
    ellipse(x1, y1, r1*2, r1*2);
    x1 += xspeed1;
    y1 += yspeed1;
    
    if (x1 > width - r1 || x1 < r1) 
      {
        xspeed1 = -xspeed1;
      }
    if (y1 > height - r1 || y1 < r1) 
      {
        yspeed1 = -yspeed1;
      }
  
    //second ball color, shape and reaction to canvas boundaries
    fill(0, 0, 255);
    ellipse(x2, y2, r2*2, r2*2);
    x2 += xspeed2;
    y2 += yspeed2;
    
    if (x2 > width - r2 || x2 < r2) 
      {
        xspeed2 = -xspeed2;
      }
    if (y2 > height - r2 || y2 < r2) 
      {
        yspeed2 = -yspeed2;
      }
  
    //third ball color, shape and reaction to canvas boundaries
    fill(0, 255, 0);
    ellipse(x3, y3, r3*2, r3*2);
    x3 += xspeed3;
    y3 += yspeed3;
    
    if (x3 > width - r3 || x3 < r3) 
      {
        xspeed3 = -xspeed3;
      }
    if (y3 > height - r3 || y3 < r3) 
      {
        yspeed3 = -yspeed3;
      }
  }
