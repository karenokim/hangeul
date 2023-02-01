let font1;
let font2;
let fontSize1 = 250; // font size
let fontSize2 = 30;
let word1; // text Korean
let word2; // text English
let pts1 = []; // store path data
let pts2 = [];
let pts3 = [];


function preload() {
  font1 = loadFont("GUNG.otf");
  font2 = loadFont("GHANA.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // textFont(font1);
  textSize(fontSize1);
  textAlign(CENTER);

  pts1 = font1.textToPoints("하늘의 별 따기", width/2, height/2, fontSize1, {
    sampleFactor: 0.0979,
  });

  pts2 = font2.textToPoints("식은 죽 먹기", width/2, height/2, fontSize1, {
    sampleFactor: 0.13638,
  });

   pts3 = font2.textToPoints("계란으로 바위치기", width/2, height/2, fontSize1, {
    sampleFactor: 0.08528,
  });
  
  print(pts1.length, pts2.length,pts3.length);

  stroke(255);
}

function draw() {
  background(0);
  textSize(fontSize2);
  fill(255, 255, 255, 80);
  const d = sin(frameCount / 90) * 1.6;
  const angle = frameCount / 150;
  push();
  translate(100, 200);
  word2 = " ";
  text(word2, 100, 100, 100);

  for (let i = 0; i < pts1.length; i++) {
    push();
    translate(pts1[i].x, pts1[i].y);
    rotate(angle);
    line(-d, -d, +d, +d);
    line(+d, -d, -d, +d);

    pop();
    if (mouseIsPressed) {
      if (pts1[i].x <= pts2[i].x) {
        pts1[i].x++;
      }

      if (pts1[i].x >= pts2[i].x) {
        pts1[i].x--;
      }

      if (pts1[i].y <= pts2[i].y) {
        pts1[i].y++;
      }

      if (pts1[i].y >= pts2[i].y) {
        pts1[i].y--;
      }
    }
    
    if (keyIsPressed) {
      if (pts2[i].x <= pts3[i].x) {
        pts2[i].x++;
      }

      if (pts2[i].x >= pts3[i].x) {
        pts2[i].x--;
      }

      if (pts2[i].y <= pts3[i].y) {
        pts2[i].y++;
      }

      if (pts2[i].y >= pts3[i].y) {
        pts2[i].y--;
      }
    }
  }

  pop();

  if (mouseY < 200) {
    text("drinking a cold porridge", 300, 300, 10);
  } else {
    text("", 100, 20, 20);
  }
}
