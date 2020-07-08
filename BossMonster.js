// Youngho Kim
// cs099
// Final Project
// Spring 2020











let time2 = 0
let timeElapsed4 = 0
let timeElapsed5 = 0
let timeElapsed6 = 0


class Boss {
constructor(pattern) {
this.bp = pattern
this.bp2 = 0
this.bp3 = 0
this.ay = 30
}
Update() {
timeElapsed4 += (millis() - time2) / 1000;
timeElapsed5 += (millis() - time2) / 1000;
timeElapsed6 += (millis() - time2) / 1000;

switch(this.bp) {
  case 0:
    if (timeElapsed4 > 1.5) {
    this.bp = round(random(1,4))
    timeElapsed4 = 0
    timeElapsed5 = 0
    }
  break;
  case 1:
    if (timeElapsed4 > 1) {
    this.bp3 = 1
    this.bp = 0
    this.ay = 30
    timeElapsed4 = 0
    if (ship_x2 == 60 || ship_x2 == 260 || ship_x2 == 460) {
    ship_hp -= 30
    }
    }
    break;
  case 2:
    if (timeElapsed4 > 1) {
    this.bp = 21
    this.ay = 30
    timeElapsed4 = 0
    if (ship_x2 == 60 || ship_x2 == 160 || ship_x2 == 260) {
    ship_hp -= 30
    }
    }
    break;
  case 21:
    if (timeElapsed4 > 2) {
    this.bp = 0
    timeElapsed4 = 0
    if (ship_x2 == 60 || ship_x2 == 160) {
    ship_hp -= 10
    }
    }
    break;
  case 3:
    if (timeElapsed4 > 1) {
    this.bp = 31
    timeElapsed4 = 0
    if (ship_y2 == 360) {
    ship_hp -= 10
    }
    }
    break;
  case 31:
    if (timeElapsed4 > 1) {
    this.bp = 0
    timeElapsed4 = 0
    if (ship_y2 == 460) {
    ship_hp -= 10
    }
    }
    break;
  case 4:
    if (timeElapsed4 > 1.5) {
    this.bp = 41
    timeElapsed4 = 0
    if (ship_x2 == 260) {
    ship_hp -= 20
    }
    }
    break
  case 41:
    if (timeElapsed4 > 1.5) {
    this.bp = 0
    timeElapsed4 = 0
    if (ship_x2 == 160 || ship_x2 == 360) {
    ship_hp -= 20
    }
    }
}
switch(this.bp2) {
  case 0:
    timeElapsed5 = 0
    if(this.bp == 1) {
    this.bp2 = 1
    }
    if(this.bp == 2) {
    this.bp2 = 2
    }
    if(this.bp == 4) {
    this.bp2 = 4
    }
    break;
  case 1:
    if (timeElapsed5 > 1.5) {
    timeElapsed5 = 0
    this.bp2 = 0
    if (ship_x2 == 160 || ship_x2 == 360) {
    ship_hp -= 10
    }
    }
    break;
  case 2:
    if(timeElapsed5 > 1.5) {
    timeElapsed5 = 0
    this.bp2 = 21
    if (ship_x2 == 360 || ship_x2 == 460) {
    ship_hp -= 10
    }
    }
    break;
  case 21:
    if(timeElapsed5 > 1) {
    timeElapsed5 = 0
    this.bp2 = 0
    this.ay = 30
    if(ship_x2 == 260 || ship_x2 == 360 || ship_x2 == 460) {
    ship_hp -= 30
    }
    }
    break
  case 4:
    if(timeElapsed5 > 1) {
    timeElapsed5 = 0
    this.bp2 = 41
    if (ship_x2 == 160 || ship_x2 == 360) {
    ship_hp -= 10
    }
    }
    break
    case 41:
    if(timeElapsed5 > 1.5) {
    timeElapsed5 = 0
    this.bp2 = 0
    if (ship_x2 == 260) {
    ship_hp -= 10
    }
    }
}
switch(this.bp3) {
  case 0:
    timeElapsed6 = 0
    if (this.bp == 3) {
    this.bp3 = 3
    }
    if (this.bp == 4) {
    this.bp3 = 4
    }
    break;
  case 1:
    if (timeElapsed6 > 1) {
    timeElapsed6 = 0
    this.bp3 = 0
    if (ship_x2 == 60 || ship_x2 == 260 || ship_x2 == 460) {
    ship_hp -= 20
    }
    }
    break;
  case 3:
    if (timeElapsed6 > 1.5) {
    timeElapsed6 = 0
    this.bp3 = 31
    if (ship_y2 == 460) {
    ship_hp -= 20
    }
    }
    break;
  case 31:
    if (timeElapsed6 > 1) {
    timeElapsed6 = 0
    this.bp3 = 0
    if (ship_y2 == 360) {
    ship_hp -= 20
    }
    }
    break
  case 4:
    if (timeElapsed6 > 1) {
    timeElapsed6 = 0
    this.bp3 = 41
    this.ay = 30
    if (ship_x2 == 60 || ship_x2 == 460) {
    ship_hp -= 30
    }
    }
    break
  case 41:
    if (timeElapsed6 > 1) {
    timeElapsed6 = 0
    this.bp3 = 0
    this.ay = 30
    if (ship_x2 == 60 || ship_x2 == 460) {
    ship_hp -= 30
    }
    }
}
time2 = millis()
}
Draw() {
fill('MidnightBlue')
ellipse(300, 150, 400, 200);
fill('White');
for(let U = 150; U < 470;) {
circle(U, 120, 30)
circle(U, 150, 30)
circle(U, 180, 30)
U += 30
}
fill('Black')
for(let E = 120; E < 210;) {
circle(be, E, 10);
circle(be+30, E, 10);
circle(be+60, E, 10);
circle(be+90, E, 10);
circle(be+120, E, 10);
circle(be+150, E, 10);
circle(be+180, E, 10);
circle(be+210, E, 10);
circle(be+240, E, 10);
circle(be+270, E, 10);
circle(be+300, E, 10);
E += 30
}
}
Attack() {
if (this.bp == 1) {
noFill()
stroke('Red')
strokeWeight(10);
circle(100, 400, 80);
point(100, 400, 80);
circle(100, 500, 80)
point(100, 500, 80)
circle(300, 400, 80)
point(300, 400, 80)
circle(300, 500, 80)
point(300, 500, 80)
circle(500, 400, 80)
point(500, 400, 80)
circle(500, 500, 80)
point(500, 500, 80);
fill('DarkRed')
strokeWeight(5)
ellipse(100, this.ay, 80, 50);
ellipse(300, this.ay, 80, 50)
ellipse(500, this.ay, 80, 50)
fill('White')
circle(75, this.ay + 30, 15)
circle(125, this.ay + 30, 15)
circle(275, this.ay + 30, 15)
circle(325, this.ay + 30, 15)
circle(475, this.ay + 30, 15)
circle(525, this.ay + 30, 15)
noStroke()
fill('Black')
circle(75, this.ay + 30, 5)
circle(125, this.ay + 30, 5)
circle(275, this.ay + 30, 5)
circle(325, this.ay + 30, 5)
circle(475, this.ay + 30, 5)
circle(525, this.ay + 30, 5)
this.ay += 6
}
if (this.bp2 == 1) {
noFill()
strokeWeight(10)
stroke('Black')
circle(200, 400, 80)
point(200, 400)
circle(200, 500, 80)
point(200, 500)
circle(400, 400, 80)
point(400, 400, 80)
circle(400, 500, 80)
point(400, 500)
}
if (this.bp3 == 1) {
noFill()
strokeWeight(10)
stroke('DarkViolet')
circle(100, 400, 80);
point(100, 400, 80);
circle(100, 500, 80)
point(100, 500, 80)
circle(300, 400, 80)
point(300, 400, 80)
circle(300, 500, 80)
point(300, 500, 80)
circle(500, 400, 80)
point(500, 400, 80)
circle(500, 500, 80)
point(500, 500, 80);
}
if (this.bp == 2) {
noFill()
strokeWeight(10)
stroke('Red')
circle(100, 400, 80);
point(100, 400, 80);
circle(100, 500, 80)
point(100, 500, 80)
circle(200, 400, 80);
point(200, 400, 80)
circle(200, 500, 80)
point(200, 500, 80);
circle(300, 400, 80)
point(300, 400, 80)
circle(300, 500, 80)
point(300, 500, 80)
fill('DarkRed')
strokeWeight(5)
ellipse(200, this.ay, 300, 200)
fill('White')
circle(155, this.ay + 100, 40)
circle(245, this.ay + 100, 40)
noStroke()
fill('Black')
circle(155, this.ay + 100, 20)
circle(245, this.ay + 100, 20)
this.ay += 5
}
if (this.bp2 == 2) {
noFill()
strokeWeight(10)
stroke('Black')
circle(400, 400, 80)
point(400, 400, 80)
circle(400, 500, 80)
point(400, 500)
circle(500, 400, 80)
point(500, 400, 80)
circle(500, 500, 80)
point(500, 500, 80)
}
if (this.bp == 21) {
noFill()
strokeWeight(10)
stroke('Black')
circle(100, 400, 80)
point(100, 400, 80)
circle(100, 500, 80)
point(100, 500)
circle(200, 400, 80)
point(200, 400, 80)
circle(200, 500, 80)
point(200, 500, 80)
}
if (this.bp2 == 21) {
noFill()
strokeWeight(10)
stroke('Red')
circle(300, 400, 80);
point(300, 400, 80);
circle(300, 500, 80)
point(300, 500, 80)
circle(400, 400, 80);
point(400, 400, 80)
circle(400, 500, 80)
point(400, 500, 80);
circle(500, 400, 80)
point(500, 400, 80)
circle(500, 500, 80)
point(500, 500, 80)
fill('DarkRed')
strokeWeight(5)
ellipse(400, this.ay, 300, 200)
fill('White')
circle(355, this.ay + 100, 40)
circle(445, this.ay + 100, 40)
noStroke()
fill('Black')
circle(355, this.ay + 100, 20)
circle(445, this.ay + 100, 20)
this.ay += 5
}
if (this.bp == 3) {
noFill()
strokeWeight(10)
stroke('Black')
for(let K = 100; K < 600;) {
circle(K, 400, 80);
point(K, 400)
  K += 100
}
}
if (this.bp == 31) {
noFill()
strokeWeight(10)
stroke('Black')
for(let P = 100; P < 600;) {
circle(P, 500, 80);
point(P, 500)
  P += 100
}
}
if (this.bp3 == 3) {
noFill()
strokeWeight(10)
stroke('DarkViolet')
for(let M = 100; M < 600;) {
circle(M, 500, 80);
point(M, 500)
  M += 100
}
}
if (this.bp3 == 31) {
noFill()
strokeWeight(10)
stroke('DarkViolet')
for(let N = 100; N < 600;) {
circle(N, 400, 80);
point(N, 400)
  N += 100
}
}
if (this.bp == 4) {
noFill()
strokeWeight(10)
stroke('DarkViolet')
circle(300, 400, 80)
point(300, 400)
circle(300, 500, 80)
point(300, 500)
}
if (this.bp == 41) {
noFill()
strokeWeight(10)
stroke('DarkViolet')
circle(200, 400, 80)
point(200, 400)
circle(200, 500, 80)
point(200, 500)
circle(400, 400, 80)
point(400, 400)
circle(400, 500, 80)
point(400, 500)
}
if (this.bp2 == 4) {
noFill()
strokeWeight(10)
stroke('Black')
circle(200, 400, 80)
point(200, 400)
circle(200, 500, 80)
point(200, 500)
circle(400, 400, 80)
point(400, 400)
circle(400, 500, 80)
point(400, 500)
}
if (this.bp2 == 41) {
noFill()
strokeWeight(10)
stroke('Black')
circle(300, 400, 80)
point(300, 400)
circle(300, 500, 80)
point(300, 500)
}
if (this.bp3 == 4) {
noFill()
strokeWeight(10)
stroke('Red')
circle(100, 400, 80);
point(100, 400, 80);
circle(100, 500, 80)
point(100, 500, 80)
circle(500, 400, 80)
point(500, 400, 80)
circle(500, 500, 80)
point(500, 500, 80);
fill('DarkRed')
strokeWeight(5)
ellipse(100, this.ay, 80, 50);
ellipse(500, this.ay, 80, 50)
fill('White')
circle(75, this.ay + 30, 15)
circle(125, this.ay + 30, 15)
circle(475, this.ay + 30, 15)
circle(525, this.ay + 30, 15)
noStroke()
fill('Black')
circle(75, this.ay + 30, 5)
circle(125, this.ay + 30, 5)
circle(475, this.ay + 30, 5)
circle(525, this.ay + 30, 5)
this.ay += 6
}
if (this.bp3 == 41) {
noFill()
strokeWeight(10)
stroke('Red')
circle(100, 400, 80);
point(100, 400, 80);
circle(100, 500, 80)
point(100, 500, 80)
circle(500, 400, 80)
point(500, 400, 80)
circle(500, 500, 80)
point(500, 500, 80);
fill('DarkRed')
strokeWeight(5)
ellipse(100, this.ay, 80, 50);
ellipse(500, this.ay, 80, 50)
fill('White')
circle(75, this.ay + 30, 15)
circle(125, this.ay + 30, 15)
circle(475, this.ay + 30, 15)
circle(525, this.ay + 30, 15)
noStroke()
fill('Black')
circle(75, this.ay + 30, 5)
circle(125, this.ay + 30, 5)
circle(475, this.ay + 30, 5)
circle(525, this.ay + 30, 5)
this.ay += 6
}
}
}