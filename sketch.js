let type1; // GHANA font for korean
let type2; // ALMANDRA font for english
let type3; // HEIR font for definition
let pts0 = [];
let pts1 = []; // WARP
let pts2 = []; // WEFT
let pts3 = [];
let typeA = 140; // the fontSize
let typeB = 25;
let typeC = 16;
var colors;
let speed = 2;
let num = 0;
let xz = 0;
let yz = 1000;

function preload() {
  type1 = loadFont("Ghana.otf"); // GHANA is the font to be used
  type2 = loadFont("almandra.ttf"); // ALMANDRA is the font to be used
  type3 = loadFont("Heir.otf");
}

function setup() {
  createCanvas(800, 2000);
  textAlign(CENTER, CENTER);
  colors = [color(65, 105, 185), color(245, 95, 80), color(15, 233, 118)];
  // textFont(type1);
  textSize(typeA);

  pts0 = type2.textToPoints("LOST in WORDS", 32, 200, typeA, {
    sampleFactor: 0.7,
    // simplifyThreshold: 0.001
  });

  pts1 = type1.textToPoints("눈치", 32, 600, 200, {
    sampleFactor: 0.4418,
  });
  pts2 = type1.textToPoints("하늘의 별 따기", 100, 1000, 140, {
    sampleFactor: 0.1874,
  });
  pts3 = type1.textToPoints("가시방석", 100, 1800, 140, {
    sampleFactor: 0.3261,
  });
  pts4 = type1.textToPoints("계란으로 바위치기", 100, 2600, 140, {
    sampleFactor: 0.15775,
  });
   pts5 = type1.textToPoints("불난 집에 부채질", 32, 600, typeA, {
    sampleFactor: 0.15,
  });
  print(pts1.length, pts2.length, pts3.length, pts4.length,pts5.length);
}

function draw() {
  background(255, 10);
  strokeWeight(1.5);

  // push();
  // translate(75, 275);
  for (let i = 0; i < pts0.length; i = i + 2) {
    const z = 10 + sin(frameCount / 50) * 10 - 12;
    const ang = frameCount / 150;

    push();
    translate(pts0[i].x, pts0[i].y);
    rotate(ang);
    strokeWeight(0.9);
    stroke(255, 210, 225, 10);
    line(-z, -z, +z, +z);

    stroke(255, 190, 200, 20);
    line(+z, -z, -z, +z);
    pop();
  }
  
  //intro on top 
   textFont(type2);
  textSize(typeB);
  text("a selection of Korean words and phrases that do not translate into any other languages", 130, 230, 400, 100);

   //pts1=noonchi
  textSize(typeB);
  text("noon-chi", 50, 670, 400, 100);
  textSize(typeC);
  textFont(type3);
  text(
    "눈 means eye, and 치 means to mesure. Together, this word refers to sensitively gauging the atmosphere of a place. It is common to describe someone as having good or bad 눈치, depending on whether they know how to properly gauge and react in a situation.",
    50,
    750,
    400,
    100
  );

  //pts2=하늘의별따기
  textSize(typeB);
  textFont(type2);
  text("ha-neul-e-byul-dda-gee", 100, 1000, 400, 100);
  textSize(typeC);
   textFont(type3);
  text(
    "하늘 means sky, 별 means stars, and 따기 means to pluck. Together, this words means to plucking stars from the sky. It is used when referring to a very difficult situation, also as impossible as plucking the stars from the sky.",
    100,
    1080,
    400,
    100
  );

  //pts3: 가시방석
  textSize(typeB);
  textFont(type2);
  text("ga-si-bang-seok", -100, 1300, 400, 100);
  textSize(typeC);
    textFont(type3);
  text(
    "가시 means splinter, and 방석 means cushion; making this to translate literally to a cushion with splinters. This word is used to describing when caught in a uncomfortable or unpleasant situation, making it feel like sitting on a cushion full of splinters.",
    -100,
    1380,
    400,
    100
  );
  
   //pts4: 계란으로 바위 치기
  textSize(typeB);
  textFont(type2);
  text("gae-ran-eun-ro-ba-yu-chi-gi", -100, 1600, 1000, 100);
  textSize(typeC);
     textFont(type3);
  text(
    "계란 means egg, and 바위 means rock, 치기 means to strike; this phrase translates literally to strike a rock with an egg. It is used in instances where the chances of losing are much higher than gaining.",
    -100,
    1680,
    1000,
    100
  );
  
  //pts5: 불 난 집에 부채질 
    textFont(type2);
  textSize(typeB);
  text("bull-nan-jib-e-but-che-jil", -100, 1800, 1500, 100);
  textSize(typeC);
  text(
    "a phrase used to describe when a problem is made worse",
    -100,
    1880,
    1000,
    100
  );

  
  beginShape();
  for (let i = 0; i < pts1.length; i = i + 2) {
    const d = 5 + cos(frameCount / 100) * 4;
    const angle = frameCount / 100;

    push();
    translate(pts1[i].x, pts1[i].y);
    rotate(angle);
    stroke(150, 200, 200, 40);
    line(-d, -d, +d, +d);
    stroke(180, 190, 225, 40);
    line(+d, -d, -d, +d);
    stroke(255, 200, 225, 20);
    fill(255, 200, 225, 20);
    ellipse(pts1[i].x, mouseY, 4, 4);
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
      
       case 4:
      morph4();
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

function morph4() {
  for (let i = 0; i < pts5.length; i++) {
    if (pts1[i].x <= pts5[i].x) {
      pts1[i].x += speed;
    }

    if (pts1[i].x >= pts5[i].x) {
      pts1[i].x -= speed;
    }

    if (pts1[i].y <= pts5[i].y) {
      pts1[i].y += speed;
    }

    if (pts1[i].y >= pts5[i].y) {
      pts1[i].y -= speed;
    }
  }
}

function mousePressed() {
  num++;

  if (num > 4) {
    num = 1;
  }

  print(num);
}

// function ns(x, y, z, scale_, min_, max_) {
//   return map(noise(x * scale_, y * scale_, z * scale_), 0, 1, min_, max_);
// }

 
