let n = 50;
let space1 = 10;
let arr=[];

function setup() {
  createCanvas(800, 555);
  stroke(0, 50);
  noLoop();
  for (let i = 0; i < n; i++) {
    arr[i] = [];
    arr[i][0] = random(space1, width-space1);
    arr[i][1] = random(space1, height-space1);
  }
}

function draw() {
  background(255);
  for (let i = 0; i < n; i++) {
    for (let j = i+1; j <n; j++) {
      line(arr[i][0], arr[i][1], arr[j][0], arr[j][1]);
    }
  }
}