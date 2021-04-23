class Star
{
  constructor(x,y,z){
    this.x=x;
    this.y=y;
    this.z=z;
    this.prev=z;
  }
  update(){
    let speed=map(mouseX,0,width,0,24);
    this.z=this.z-speed;
    if(this.z<1){
      this.x=random(-width,width);
      this.y=random(-height,height);
      this.z=width;
      
    }
  }
  show(){
   fill(255);
   noStroke();
   let sx=map(this.x/this.z,0,1,0,width);
   let sy=map(this.y/this.z,0,1,0,height);
   let sz=map(this.z,0,width,12,0);
    
    let strokeW=map(this.z,0,width,0,2);
   ellipse(sx,sy,sz,sz);
    stroke(30);
    strokeWeight(strokeW);
    line(sx,sy,this.x,this.y);
   
  }
}
let stars=[];
function setup() {
  createCanvas(800, 800);
  for(let i=0;i<1200;i++){
    stars.push(new Star(random(-width,width),random(-height,height),random(width)));
  }
}

function draw() {
  background(0);
  translate(width/2,height/2);
  for(let i=0;i<stars.length;i++){
    stars[i].show();
    stars[i].update();
  }
}

