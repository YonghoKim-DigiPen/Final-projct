// Youngho Kim
// cs099
// Final Project
// Spring 2020







let time = 0;
let timeElapsed = 0;
let timeElapsed2 = 0;

class monster {
constructor(pattern) {
this.p = pattern
this.p2 = 0;
this.c = color(random(255), random(255), random(255))
this.c1 = color(random(255), random(255), random(255))
this.c2 = color(random(255), random(255), random(255))
this.mx = 150
this.my = 10
this.mx2 = 450
}
Update() {
timeElapsed += (millis() - time) / 1000;
timeElapsed2 += (millis() - time) / 1000;

  switch(this.p) {
  case 0:
     
    if (timeElapsed > 1) {
    
      this.p = round(random(1,3));
      timeElapsed = 0
      timeElapsed2 = 0
    }
    break;
    case 1:
    if (timeElapsed > 1) {
    this.p = 0
    timeElapsed = 0
    if (ship_x == 60 && ship_y == 360 || ship_x == 160 && ship_y == 360 || ship_x == 160 && ship_y == 460 || ship_x == 360 && ship_y == 360 || ship_x == 360 && ship_y == 460 || ship_x == 460 && ship_y == 360) {
    ship_hp -= 10
    }
    }
    break;
  case 2:
    if (timeElapsed > 1) {
    this.p = 0
    timeElapsed = 0
    if (ship_x == 60 && ship_y == 360 || ship_x == 160 && ship_y == 460 || ship_x == 260 && ship_y == 460 || ship_x == 360 && ship_y == 460 || ship_x == 460 && ship_y == 360) {
    ship_hp -= 10
    }
    }
    break;
     case 3:
      if (timeElapsed > 1) {
      this.p = 0
      timeElapsed = 0
      this.my = 10
      if (ship_x == 60 && ship_y == 360 || ship_x == 60 && ship_y == 460 || ship_x == 160 && ship_y == 360 || ship_x == 160 && ship_y == 460 || ship_x == 360 && ship_y == 360 || ship_x == 360 && ship_y == 460 || ship_x == 460 && ship_y == 360 || ship_x == 460 && ship_y == 460) {
      ship_hp -= 30
      }
      }
    break;
}
switch (this.p2) {
  case 0:
    timeElapsed2 = 0
    if(this.p == 1) {
    this.p2 = 1
    }
    if(this.p == 2) {
    this.p2 = 2
    }
    if(this.p == 3) {
    this.p2 = 3
    }
    break;
  case 1:
    if (timeElapsed2 > 1.5) {
    this.p2 = 0
    timeElapsed2 = 0
      if (ship_x == 60 && ship_y == 460 || ship_x == 260 && ship_y == 360 ||ship_x == 260 && ship_y == 460 || ship_x == 460 && ship_y == 460) {
    ship_hp -= 20
      }
    }
    break;
  case 2:
    if (timeElapsed2 > 1.5) {
    this.p2 = 0
    timeElapsed2 = 0
    if (ship_x == 60 && ship_y == 460 || ship_x == 160 && ship_y == 360 || ship_x == 260 && ship_y == 360 || ship_x == 360 && ship_y == 360 || ship_x == 460 && ship_y == 460) {
    ship_hp -= 20
    }
    }
    break;
  case 3:
    if (timeElapsed2 > 1.5) {
    this.p2 = 0
    timeElapsed2 = 0
    if (ship_x == 260 && ship_y == 360 || ship_x == 260 && ship_y == 460){
    ship_hp -= 10
    }
    }
    break;
}
  time = millis();
}
Attack() {
if (this.p2 == 1) {
noFill();
stroke('DarkViolet')
strokeWeight(10);
circle(100, 500, 80);
point(100, 500)
circle(300, 400, 80);
point(300, 400);
circle(300, 500, 80);
point(300, 500);
circle(500, 500, 80);
point(500, 500)
push()
fill(this.c1);
translate(100, 100)
rotate(PI / -3.0);
ellipse(0, 0, 200, 100);
pop()
push()
strokeWeight(5);
fill('White')
ellipse(170, 100, 40, 40);
ellipse(130, 170, 40, 40);
fill('Black');
noStroke();
ellipse(175, 110, 20, 20);
ellipse(135, 160, 20, 20);
pop()
}
if (this.p == 1) {
noFill()
stroke('Black')
strokeWeight(10);
circle(100, 400, 80);
point(100, 400);
circle(200, 400, 80);
point(200, 400);
circle(200, 500, 80);
point(200, 500);
circle(400, 400, 80);
point(400, 400);
circle(400, 500, 80);
point(400, 500);
circle(500, 400, 80);
point(500, 400);
push()
fill(this.c2);
translate(500, 100)
rotate(PI / 3.0);
ellipse(0, 0, 200, 100);
pop()
push()
strokeWeight(5);
fill('White')
ellipse(430, 100, 40, 40);
ellipse(470, 170, 40, 40);
fill('Black');
noStroke();
ellipse(435, 110, 20, 20);
ellipse(475, 160, 20, 20);
pop()
}
if (this.p2 == 2) {
noFill()
stroke('DarkViolet')
strokeWeight(10);
circle(100, 500, 80);
point(100, 500);
circle(200, 400, 80);
point(200, 400);
circle(300, 400, 80);
point(300, 400);
circle(400, 400, 80);
point(400, 400);
circle(500, 500, 80);
point(500, 500);
push()
fill(this.c1);
translate(100, 100)
rotate(PI / -3.0);
ellipse(0, 0, 200, 100);
pop()
push()
strokeWeight(5);
fill('White')
ellipse(170, 100, 40, 40);
ellipse(130, 170, 40, 40);
fill('Black');
noStroke();
ellipse(175, 110, 20, 20);
ellipse(135, 160, 20, 20);
pop()
}
if (this.p == 2) {
noFill()
stroke('Black');
strokeWeight(10);
circle(100, 400, 80);
point(100, 400);
circle(200, 500, 80);
point(200, 500);
circle(300, 500, 80);
point(300, 500);
circle(400, 500, 80);
point(400, 500);
circle(500, 400, 80);
point(500, 400);
push()
fill(this.c2);
translate(500, 100)
rotate(PI / 3.0);
ellipse(0, 0, 200, 100);
pop()
push()
strokeWeight(5);
fill('White')
ellipse(430, 100, 40, 40);
ellipse(470, 170, 40, 40);
fill('Black');
noStroke();
ellipse(435, 110, 20, 20);
ellipse(475, 160, 20, 20);
pop()
}
if (this.p == 3){
noFill()
stroke('Red')
strokeWeight(10);
circle(100, 400, 80);
point(100, 400);
circle(100, 500, 80);
point(100, 500);
circle(200, 400, 80);
point(200, 400);
circle(200, 500, 80);
point(200, 500);
circle(400, 400, 80);
point(400, 400);
circle(400, 500, 80);
point(400, 500);
circle(500, 400, 80);
point(500, 400);
circle(500, 500, 80);
point(500, 500);
fill(this.c);
ellipse(this.mx, this.my , 200, 150);
ellipse(this.mx2, this.my , 200, 150);
fill('White');
strokeWeight(5);
circle(115, this.my + 80, 40);
circle(185, this.my + 80, 40);
circle(415, this.my + 80, 40);
circle(485, this.my + 80, 40);
fill('Black');
noStroke();
circle(125, this.my + 80, 20);
circle(190, this.my + 70, 20);
circle(420, this.my + 70, 20);
circle(495, this.my + 80, 20);
this.my += 5.5
}
if (this.p2 == 3) {
noFill()
stroke('Black');
strokeWeight(10);
circle(300, 400, 80);
point(300, 400);
circle(300, 500, 80);
point(300, 500);
push()
fill(this.c1);
translate(100, 100)
rotate(PI / -3.0);
ellipse(0, 0, 200, 100);
pop()
push()
strokeWeight(5);
fill('White')
ellipse(170, 100, 40, 40);
ellipse(130, 170, 40, 40);
fill('Black');
noStroke();
ellipse(175, 110, 20, 20);
ellipse(135, 160, 20, 20);
pop()
}
}
}