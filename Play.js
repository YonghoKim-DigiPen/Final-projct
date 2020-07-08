// Youngho Kim
// cs099
// Final Project
// Spring 2020










class playScreen {
constructor() {
ship_x = 260
ship_y = 360
Jship_x = 555
Jship_y = 550
ship_hp = 200
this.alien = new monster(0);
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
image(spaceshipg, ship_x, ship_y, 80, 80);
stroke(255);
strokeWeight(10);
line(575, 360, 575, 540);
image(Jam, 545, 330, 60, 60);
image(spaceshipg, Jship_x, Jship_y, 40, 40);
noStroke();
fill('red')
rect(5, 350, 40, ship_hp);
fill('White')
text('HP', 5, 580);
this.alien.Update()
this.alien.Attack()
if (Jship_y >= 340) {
    Jship_y -= 0.042
}
}
Control1() {
switch(keyCode) {
  case 37:
    if (ship_x > 60 && ship_x <= 460) {
    ship_x -=100
    }
  break;
  case 39:
    if (ship_x >= 60 && ship_x < 460) {
    ship_x += 100
    }
  break;
  case 38:
    if (ship_y > 360 && ship_y < 480) {
    ship_y -=100
    }
  break;
  case 40:
    if (ship_y >= 360 && ship_y < 460) {
    ship_y += 100
    }
  break;
}
}
Control2() {
  switch(keyCode) {
  case 65:
    if (ship_x > 60 && ship_x <= 460) {
    ship_x -=100
    }
  break;
  case 68:
    if (ship_x >= 60 && ship_x < 460) {
    ship_x += 100
    }
  break;
  case 87:
    if (ship_y > 360 && ship_y < 480) {
    ship_y -=100
    }
  break;
  case 83:
    if (ship_y >= 360 && ship_y < 460) {
    ship_y += 100
    }
  break;
}
}
}