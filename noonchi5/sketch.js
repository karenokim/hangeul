let needle;
let pts2 =[];
let xz = 0;
let yz = 1000;

function preload() {
  needle = loadFont("GUNG.otf");
}

function setup() { 
  createCanvas(600, 400);
  pts2 = needle.textToPoints('썩    소', 0, 0, 250,
                          {sampleFactor: 0.9,
                           simplifyThreshold: 0});
} 

function ns(x, y, z, scale_, min_, max_) {
  return map(
    noise(x*scale_, y*scale_, z*scale_),
    0, 1, min_, max_);
}



function draw() { 
  background(0);
  noStroke();
  fill(255);
  push();
  translate(75, 275);
  for (let i = 0; i < pts2.length; i++) {
    let xoff = ns(pts2[i].x, pts2[i].y, xz, 0.005, -50, 50);
    let yoff = ns(pts2[i].y, pts2[i].x, yz, 0.005, -50, 50);
    ellipse(pts2[i].x + xoff, pts2[i].y + yoff, 5, 5);
  }
  pop();
  xz += 2;
  yz += 2;
}