let needle;
let pts1;
let pts2;
let pts3;
let pts4;
let pts5;

function preload() {
  needle = loadFont("Ghanachocolate.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  strokeWeight(1);
  pts1 = needle.textToPoints("불난 집에 부채질", 32, 140, 140, {
    sampleFactor: 0.17,
  });
  pts2 = needle.textToPoints("썩소", 32, 330, 150, {
    sampleFactor: 0.6524,
  });
  pts3 = needle.textToPoints("하늘의 별 따기", -20, 160, 150, {
    sampleFactor: 0.1984,
  });
  pts4 = needle.textToPoints("아리송", 350, 330, 150, {
    sampleFactor: 0.4354,
  });
  pts5 = needle.textToPoints("부들부들", 820, 330, 150, {
    sampleFactor: 0.2757,
  });
  
  print(pts1.length,pts2.length,pts3.length,pts4.length,pts5.length)
}

function draw() {
  background(0, 0, 0, 10);

  for (let i = 0; i < pts1.length; i = i + 2) {
    stroke(255, 100);
    line(
      pts1[i].x + 10,
      pts1[i].y + 10,
      pts1[i].x * 1 + random(-15, 15),
      pts1[i].y + random(10, 15)
    );
    noFill();
  }

  for (let i = 0; i < pts2.length; i++) {
    fill(255, 100);
    let xoff = ns(pts2[i].x, pts2[i].y, xz, 0.005, -50, 50);
    let yoff = ns(pts2[i].y, pts2[i].x, yz, 0.005, -50, 50);
    ellipse(pts2[i].x + xoff, pts2[i].y + yoff, 5, 5);
  }
  xz += 3;
  yz += 3;

  const d = sin(frameCount / 50) * 2;
  const angle = frameCount / 100;
  push();
  translate(60, height / 2);
  for (let i = 0; i < pts3.length; i++) {
    push();
    translate(pts3[i].x, pts3[i].y);
    rotate(angle);
    line(-d, -d, +d, +d);
    line(+d, -d, -d, +d);
    pop();
  }
  pop();

  //아리송
  beginShape(POINTS);
  // stroke(255);
  for (let i = 0; i < pts4.length; i++) {
      push()
        translate(pts4[i].x.mouseX,pts4[i].y.mouseY);

    vertex(
      pts4[i].x + sin(frameCount * 0.05 + pts4[i].y * 0.1) * 10,
      pts4[i].y );
    
    pop()
   
  }
  endShape();
  


for (let i = 0; i < pts5.length; i++) {
  let xoff = ns(pts5[i].x, pts5[i].y, xz, 0.005, -80, 80);
  let yoff = ns(pts5[i].y, pts5[i].x, yz, 0.005, -80, 80);
  rect(pts5[i].x + xoff, pts5[i].y + yoff, 2, 2);
}

xz += 15;
yz += 5;
}

function ns(x, y, z, scale_, min_, max_) {
  return map(noise(x * scale_, y * scale_, z * scale_), 0, 1, min_, max_);
}

let xz = 0;
let yz = 1000;
