let font1;
let font2;
let fontSize1 = 250; // font size
let fontSize2 = 30;
let word1; // text Korean
let word2; // text English
let pts1 = []; // store path data
let pts2 = [];

function preload() {
  font1 = loadFont("GUNG.otf");
  font2 = loadFont("GHANA.otf");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  // textFont(font1);
  textSize(fontSize1);

  pts1 = font1.textToPoints("하늘의 별 따기", -20, 0, fontSize1, {
    sampleFactor: 0.0979,
    simplifyThreshold: 0.0,
  });

  // textFont(font2);

  pts2 = font2.textToPoints("식은 죽 먹기", -20, 0, fontSize1, {
    sampleFactor: 0.13697,
    simplifyThreshold: 0.0,
  });

  print(pts1.length, pts2.length);

  stroke(255);

}

function draw() {
  background(0);
  textSize(fontSize2);
  fill(255);
  const d = sin(frameCount / 50) * 3;
  const angle = frameCount / 100;
  push();
  translate(100, 200);
  word2 = " ";
  text(word2, 100, 100, 100);

  // beginShape();
  for (let i = 0; i < pts1.length; i++) {
    push();
    translate(pts1[i].x, pts1[i].y);
    rotate(angle);
    line(-d, -d, +d, +d);
    line(+d, -d, -d, +d);

    pop();
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
  // endShape();
  pop();
}
