function setup() {
   pts = font.textToPoints('아리송', width/10, 200, 170,{
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
  

}