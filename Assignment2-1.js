var number = 5000;                              
var size = 100;                                 
var stepSize = 1;                               
var opacity = 50;                                                         
var time = 0;

function setup() {
  createCanvas(750, 750);                      
  noStroke();                                  
}

function draw() {
  background(0);                               
                        
  translate(width / 2, height / 2)              
  number = frameCount;             

  var goldenAngle = PI * (3.0 - sqrt(5));        
  rotate(time);
  for (var i = 0; i < number; i++) {
    translate(0, i * stepSize);                     
    rotate(goldenAngle);      
      fill(135,23,43,opacity);  
    triangle(-size, 0, 0, size, size, 0);
    fill(250,233,22, 70);
    ellipse(0, 0, size);
    fill(129,135,234, 20);
    rect(0, 0, size, size); 					
  }
  time += 0.0001*map(mouseX,0,width,0,1000);                                
}