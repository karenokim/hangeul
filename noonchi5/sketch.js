let needle;
let pts;
let xz = 0;
let yz = 1000;

function preload() {
  needle = loadFont("GUNG.otf");
}

function setup() { 
  createCanvas(windowWidth, windowHeight);
  pts2 = needle.textToPoints('썩    소', windowWidth/2, windowHeight/2, 250,
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
  textFont(caslon);
  fill(255);
  text("썩소 is a shortened word with two words combined: 썩은, meaning rotten, and 미소, meaning a smile. Combined together, this word refers to a smile that is sarcastic or empty. ",windowWidth/2,900,400,400);
 
  
  for (let i = 0; i < pts2.length; i++) {
    let xoff = ns(pts2[i].x, pts2[i].y, xz, 0.005, -50, 50);
    let yoff = ns(pts2[i].y, pts2[i].x, yz, 0.005, -50, 50);
    ellipse(pts2[i].x + xoff, pts2[i].y + yoff, 5, 5);
  }

  xz += 2;
  yz += 2;
}