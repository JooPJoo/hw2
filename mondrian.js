function setup() 
  {
    createCanvas(500, 700);
    strokeCap(SQUARE);
  }

function draw() 
  {
    background(220);
    noStroke();
    
    //Red square
    fill(255, 0, 0);
    rect(0, 70, 350, 370);
    
    // Yellow square
    fill(255, 215, 0);
    rect(350, 0, 150, 250);
    
    // Blue square
    fill(0, 0, 255);
    rect(350, 530, 150, 140);
    
    // Black square mid bottom
    fill(0, 0, 0);
    rect(160, 605, 190, 65);
    
    // Black square left bottom
    fill(0, 0, 0);
    rect(0, 440, 160, 175);
    
    //line specifications
    stroke(0);
    strokeWeight(11);
    
    //vertical line 1
    line(50, 20, 50, 70);
    
    //vertical line 2
    line(155, 440, 155, 700);
    
    //vertical line 3 long
    line(355, 10, 350, 670);
    
    //vertical line 4
    line(455, 250, 455, 440);
    
    //horizontal line 1
    line(0, 65, 500, 65);
    
    //horizontal line 2
    line(355, 245, 500, 245);
    
    //horizontal line 3
    line(0, 440, 500, 440);
