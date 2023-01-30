let font;
let pts;
let msg;

function preload() {
font = loadFont('GUNG.otf');
console.log(font)
}

function setup() { 
createCanvas(displayWidth, displayHeight);
msg ='부    들    부    들'
pts = font.textToPoints(msg, 0, 0, 140,
                        {sampleFactor: 0.1,
                         simplifyThreshold: 0});
} 

function ns(x, y, z, scale_, min_, max_) {
return map(
  noise(x*scale_, y*scale_, z*scale_),
  0, 1, min_, max_);
}

let xz = 0;
let yz = 200;

function draw() { 
background(0);
noStroke();
fill(255);
push();
translate(10, height/2);
for (let i = 0; i < pts.length; i++) {
  let xoff = ns(pts[i].x, pts[i].y, xz, 0.005, -80, 80);
  let yoff = ns(pts[i].y, pts[i].x, yz, 0.005, -80, 80);
  ellipse(pts[i].x + xoff, pts[i].y + yoff, 5, 5);
}
pop();
xz += 5;
yz += 5;
}