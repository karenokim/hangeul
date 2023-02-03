let typef; // the TYPEFACE being used
let pts1 = []; // WARP
let pts2 = []; // WEFT
let pts3 = [];
let typeS; // the fontSize
var colors;
let speed = 2;
let num = 0;

function preload() {
  typef = loadFont("almandra.ttf"); // ALMANDRA is the font to be used
}

function setup() {
  createCanvas(windowWidth, 750);
  colors = [color(65, 105, 185), color(245, 95, 80), color(15, 233, 118)];
  textFont(typef);
  textSize(typeS);
  typeS = 200;
  pts1 = typef.textToPoints("warp", random(0,300), random(100,400), typeS, {
    sampleFactor: 0.1,
    simplifyThreshold: 0.0,
  });
  pts2 = typef.textToPoints("weft", random(500,windowWidth), random(100,300), typeS, {
    sampleFactor: 0.1165,
    simplifyThreshold: 0.0,
  });
  pts3 = typef.textToPoints("warp", random(200,500), random(300,500), typeS, {
    sampleFactor: 0.1,
    simplifyThreshold: 0.0,
  });
    pts4 = typef.textToPoints("weft", random(800,windowWidth), random(400,700), typeS, {
    sampleFactor: 0.1165,
    simplifyThreshold: 0.0,
  });
  pts5 = typef.textToPoints("warp", random(400,700), random(500,700), typeS, {
    sampleFactor: 0.1,
    simplifyThreshold: 0.0,
  });
  
      pts6 = typef.textToPoints("weft", 310, random(500,600), typeS, {
    sampleFactor: 0.1165,
    simplifyThreshold: 0.0,
  });
  print(pts1.length, pts2.length, pts3.length,pts4.length, pts5.length, pts6.length);
}

function draw() {
  background(0, 0);
  strokeWeight(1.5);
  beginShape();

  for (var x = 0; x < width; x += width / 25) {
    stroke(150, 190, 200, 60);
    strokeWeight(1);
    line(x, 0, x, height);
    line(0, y, width, y);
  }

  for (var y = 0; y < height; y += height / 25) {
    stroke(180, 170, 225, 60);
    strokeWeight(1);
    line(x, 0, x, height);
    line(0, y, width, y);
  }

  for (let i = 0; i < pts1.length; i = i + 2) {
    const d = 10 + sin(frameCount / 50) * 10 - 12;
    const angle = frameCount / 100;
    fill(90,100,240);
ellipse(pts1[i].x,pts1[i].y,4,4);
    push();
    translate(pts1[i].x, pts1[i].y);
    rotate(angle);
    stroke(150, 190, 200, 60);
    line(-d, -d, +d, +d);
    stroke(180, 170, 225, 60);
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
      
      case 4:
      morph4();
      break;

    case 5:
      morph5();
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
function morph5() {
  for (let i = 0; i < pts6.length; i++) {
    if (pts1[i].x <= pts6[i].x) {
      pts1[i].x += speed;
    }

    if (pts1[i].x >= pts6[i].x) {
      pts1[i].x -= speed;
    }

    if (pts1[i].y <= pts6[i].y) {
      pts1[i].y += speed;
    }

    if (pts1[i].y >= pts6[i].y) {
      pts1[i].y -= speed;
    }
  }
}
function mousePressed() {
  num++;

  if (num > 3) {
    num = Math.round(random(0, 5));
  }

  print(num);
}
