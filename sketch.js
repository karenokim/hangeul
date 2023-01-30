let pts;
let pts02;
let arisong;

function preload(){
  arisong = loadFont('Ghanachocolate.otf');
}

function setup() {
  createCanvas(600, 600);
  pts = arisong.textToPoints('아리송', width/10, 350, 170,{
    sampleFactor: 0.3, //density of dots 
    simplifyThreshold: 0
  });
  pts02 = arisong.textToPoints('하늘의 별 따기', width/10, 100, 170,{
    sampleFactor: 0.3, //density of dots 
    simplifyThreshold: 0
  });
  }


// function ns(x, y, z, scale_, min_, max_) {
// return map(
//   noise(x*scale_, y*scale_, z*scale_),
//   0, 1, min_, max_);
// }

// let xz = 0;
// let yz = 200;
// function draw() { 
// push();
// translate(10, height/2);
// for (let i = 0; i < pts02.length; i++) {
//   let xoff = ns(pts02[i].x, pts02[i].y, xz, 0.005, -80, 80);
//   let yoff = ns(pts02[i].y, pts02[i].x, yz, 0.005, -80, 80);
//   ellipse(pts02[i].x + xoff, pts02[i].y + yoff, 5, 5);
// }
// pop();
// xz += 5;
// yz += 5;
// }


function draw() {
  background(0);  
  translate(0, 100);
  textSize(122);
  beginShape(POINTS);
  stroke(255);
  for(let i =0; i< pts.length; i++){
   vertex(pts[i].x + sin(frameCount*0.05 + pts[i].y*0.1)*10, pts[i].y);
  }
  endShape();
  
  beginShape(POINTS);
  stroke(255);
  for(let i =0; i< pts02.length; i++){
   vertex(pts02[i].x + tan(frameCount*0.005 + pts02[i].y*0.1)*2, pts02[i].y);
  }
  endShape();
  
}