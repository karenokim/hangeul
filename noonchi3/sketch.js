let pts;
let needle;
var t;

function preload(){
  needle = loadFont('Ghanachocolate.otf');
}

function setup() {
  createCanvas(1000, 600);
  frameRate(16);
  textAlign(CENTER,CENTER);
    t = 0;

  pts = needle.textToPoints('부들부들', 32, height/2, 140,{
    sampleFactor: 0.3,
    simplifyThreshold: 0
  });
}

function draw() {
   var x = width * noise(t);
  var y = height * noise(t+5);
  var r = 255 * noise(t+40)+100;
  var g = 255 * noise(t+15)+100;
  var b = 255 * noise(t+20)+100;
  
  
  background(0,0,0);
  // background (r,g,b,50);
  stroke(r,g,b);
    t += 0.01;
  for(let i =0; i< pts.length; i=i+2){
   line(pts[i].x+10, pts[i].y+10, pts[i].x*1 + random(-15,15), pts[i].y + random(10,15));
    
  }
  
}