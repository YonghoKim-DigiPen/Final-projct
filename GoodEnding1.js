// Youngho Kim
// cs099
// Final Project
// Spring 2020










let timeElapsed3 = 0

class Jemfind {
constructor() {
this.t = 0
}
Draw() {
timeElapsed3 += (millis() - time) / 1000;

switch(this.t) {
  case 0:
    image(Jam, 150, 50, 300, 300);
    if (timeElapsed3 > 3) {
    this.t = 1
    timeElapsed3 = 0
    }
    break;
  case 1:
    image(Jam, 150, 50, 300, 300);
    noStroke();
    fill('White')
    textSize(50);
    text('SpaceShip:', 50, 400)
    text('We have the Jem!', 50, 470);
    if (timeElapsed3 > 3) {
    this.t = 2
    timeElapsed3 = 0
    }
    break;
  case 2:
    image(Jam, 150, 50, 300, 300);
    noStroke();
    fill('White')
    textSize(50);
    text('Command Center:', 50, 400)
    text('Well done SpaceShip.', 50, 470);
    if (timeElapsed3 > 3) {
    this.t = 3
    timeElapsed3 = 0
    }
    break;
  case 3:
    image(Jam, 150, 50, 300, 300);
    noStroke();
    fill('White')
    textSize(50);
    text('Command Center:', 50, 400)
    text('Now your mission is...', 50, 470);
    if (timeElapsed3 > 3.5) {
    this.t = 4
    timeElapsed3 = 0
    }
    break;
  case 4:
    image(Jam, 150, 50, 300, 300);
    noStroke();
    fill('White')
    textSize(50);
    text('Command Center:', 50, 400)
    text('return to Earth!', 50, 470);
    if (timeElapsed3 > 2) {
    this.t = 5
    timeElapsed3 = 0
    }
    break;
  case 5:
    image(Jam, 150, 50, 300, 300);
    noStroke();
    fill('White')
    textSize(50);
    text('Command Center:', 50, 400)
    text('We belive you', 50, 470);
    text('will do well', 50, 540);
    if (timeElapsed3 > 4.5) {
    this.t = 6
    timeElapsed3 = 0
    }
    break;
  case 6:
    noStroke();
    fill('White')
    textSize(50);
    text('Command Center:', 50, 300)
    text('Wait! What was th...', 50, 370);
    if (timeElapsed3 > 2) {
    this.t = 7
    timeElapsed3 = 0
    }
    break;
  case 7:
    noStroke();
    fill('White')
    textSize(50);
    text('Ailen:', 50, 300)
    text('☟✌☟✌☟✌☟✌', 50, 370);
    textSize(30);
    text('✡⚐🕆 👍✌☠🕯❄ ☝⚐ ❄⚐ ☜✌☼❄☟✏', 50, 440);
    if (timeElapsed3 > 2.5) {
    Scene = 4
    timeElapsed3 = 0
    this.t = 0
    }
}
time = millis()
}
}