// Youngho Kim
// cs099
// Final Project
// Spring 2020














class playScreen2 {
constructor() {
this.Bossailen = new Boss(0)
}
Draw() {
fill(200);
stroke(0);
strokeWeight(1);
for(let T = 50; T < 550;) {
square(T, 350, 100);
  T += 100
}
for(let I = 50; I < 550;) {
square(I, 450, 100);
  I += 100
}
image(spaceshipb, ship_x2, ship_y2, 80, 80);
stroke(255);
strokeWeight(10);
line(575, 360, 575, 540);
image(earth, 555, 530, 40, 40);
image(spaceshipb, Jship_x2, Jship_y2, 40, 40);
noStroke();
fill('red')
rect(5, 350, 40, ship_hp);
fill('White')
text('HP', 5, 580);
if (Jship_y2 <= 520) {
    Jship_y2 += 0.02
}
this.Bossailen.Draw()
this.Bossailen.Update()
this.Bossailen.Attack()
}
Control1() {
switch(keyCode) {
  case 37:
    if (ship_x2 > 60 && ship_x2 <= 460) {
    ship_x2 -=100
    be -=5
    }
  break;
  case 39:
    if (ship_x2 >= 60 && ship_x2 < 460) {
    ship_x2 += 100
    be += 5
    }
  break;
  case 38:
    if (ship_y2 > 360 && ship_y2 <= 460) {
    ship_y2 -=100
    }
  break;
  case 40:
    if (ship_y2 >= 360 && ship_y2 < 460) {
    ship_y2 += 100
    }
  break;
}
}
Control2() {
switch(keyCode) {
  case 65:
    if (ship_x2 > 60 && ship_x2 <= 460) {
    ship_x2 -=100
    be -= 5
    }
  break;
  case 68:
    if (ship_x2 >= 60 && ship_x2 < 460) {
    ship_x2 += 100
    be += 5
    }
  break;
  case 87:
    if (ship_y2 > 360 && ship_y2 <= 460) {
    ship_y2 -=100
    }
  break;
  case 83:
    if (ship_y2 >= 360 && ship_y2 < 460) {
    ship_y2 += 100
    }
  break;
}
}
}