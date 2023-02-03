let typef; // the TYPEFACE being used
let pts1 = []; // WARP
let pts2 = []; // WEFT
let pts3 = [];
let pts4 = [];
let typeS; // the fontSize
var colors;
let speed = 2;
let num = 0;

function preload() {
  typef = loadFont("Heir.otf"); // ALMANDRA is the font to be used
}

function setup() {
  createCanvas(1500, 800);
 
  colors = [color(65, 105, 185), color(245, 95, 80), color(15, 233, 118)];
  textFont(typef);
  textSize(typeS);
  textAlign(CENTER,CENTER);
  typeS = 200;
 pts1 = typef.textToPoints("눈치", 455, 400, 300, {
    sampleFactor: 0.2,
  });
  pts2 = typef.textToPoints("썩소", 455, 400, 300, {
    sampleFactor: 0.1968,
  });
  pts3 = typef.textToPoints("부들부들", 130, 400, 300, {
    sampleFactor: 0.0814,
  });
  pts4 = typef.textToPoints("아리송", 165, 400, 300, {
    sampleFactor: 0.1325,
  });
  // pts5 = needle.textToPoints("부들부들", 820, 330, 150, {
  //   sampleFactor: 0.2757,
  // });
  print(pts1.length, pts2.length,pts3.length,pts4.length);
}

function draw() {
  background(0, 0);
  strokeWeight(0.3);
  beginShape();

  for (let i = 0; i < pts1.length; i = i + 2) {
    const d =sin(frameCount / 50) * 11 - 12;
    const angle = frameCount / 100;
stroke(random(100,130),random(100,150),random(200,255),random(50,80));

     fill(255, 200, 225, 20);
    ellipse(pts1[i].x+random(0,5), pts1[i].y, 4, 4);
    
    
    push();
    translate(pts1[i].x, pts1[i].y);
    rotate(angle);
   
    line(-d, -d, +d, +d);
    stroke(random(100,120),random(180,255),random(150,255),random(50,80));
    line(+d, -d, -d, +d);
    pop();
  }
  
  
   switch (num) {
    case 1:
      morph1();
      break;

    case 2:
      morph2();
      break;

    case 3:
      morph3();
      break;

    default:

}
  }

function morph1() {
  for (let i = 0; i < pts2.length; i++) {

    if (pts1[i].x <= pts2[i].x) {

      pts1[i].x += speed;
    }


    if (pts1[i].x >= pts2[i].x) {

      pts1[i].x -= speed;
    }


    if (pts1[i].y <= pts2[i].y) {

      pts1[i].y += speed;
    }

    if (pts1[i].y >= pts2[i].y) {

    pts1[i].y -= speed;
    }

  }



}


function morph2() {
  for (let i = 0; i < pts3.length; i++) {

    if (pts1[i].x <= pts3[i].x) {

  pts1[i].x += speed;
    }


    if (pts1[i].x >= pts3[i].x) {

    pts1[i].x -= speed;
    }


    if (pts1[i].y <= pts3[i].y) {

pts1[i].y += speed;
    }

    if (pts1[i].y >= pts3[i].y) {

     pts1[i].y -= speed;
    }

  }



}

function morph3() {
  for (let i = 0; i < pts4.length; i++) {

    if (pts1[i].x <= pts4[i].x) {

      pts1[i].x += speed;
    }


    if (pts1[i].x >= pts4[i].x) {

      pts1[i].x -= speed;
    }


    if (pts1[i].y <= pts4[i].y) {

     pts1[i].y += speed;
    }

    if (pts1[i].y >= pts4[i].y) {

      pts1[i].y -= speed;
    }

  }



}




function mousePressed() {

  num++;

  if (num > 3) {
    num = Math.round(random(0,3));;
  }

  print(num);
}


