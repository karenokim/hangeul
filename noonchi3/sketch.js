let pts;
let needle;
let caslon;
// var t;

function preload(){
  needle = loadFont('Ghanachocolate.otf');
  caslon = loadFont('BigCaslon.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(16);
  textAlign(CENTER,CENTER);
    // t = 0;

  pts = needle.textToPoints('부들부들', windowWidth/2-200, windowHeight/2, 140,{
    sampleFactor: 0.3,
    simplifyThreshold: 0
  });
}

function draw() {
  //  var x = width * noise(t);
  // var y = height * noise(t+5);
  // var r = 255 * noise(t+40)+100;
  // var g = 255 * noise(t+15)+100;
  // var b = 255 * noise(t+20)+100;
  textFont(caslon);

  background(0,0,0);
    fill(255);
  text("부들부들 is an onomatopoeia used when caught in a nerve wracking situation",windowWidth/2,900,400,400);
  
  stroke(255);
    // t += 0.01;
  for(let i =0; i< pts.length; i=i+2){
   line(pts[i].x+10, pts[i].y+10, pts[i].x*1 + random(-15,15), pts[i].y + random(10,15));
    
  }
  
}