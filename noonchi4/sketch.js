let pts;
let pts02;
let arisong;

function preload(){
  arisong = loadFont('Ghanachocolate.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pts = arisong.textToPoints('아리송', width/2, 250, 170,{
    sampleFactor: 0.3, //density of dots 
    simplifyThreshold: 0
  });
  }

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
  
  textFont(caslon);
  fill(255);
  text("아리송 is an adjective used to describe a feeling that is ambiguous, vague, almost dreamy. ",windowWidth/2,900,400,400);
  
}