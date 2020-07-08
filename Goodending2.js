// Youngho Kim
// cs099
// Final Project
// Spring 2020













let timeElapsed7 = 0



class maybeEnd {
constructor() {
this.e = 0
}
Draw() {
timeElapsed7 += (millis() - time) / 1000;

switch (this.e) {
  case 0:
    image(Jam, 150, 50, 300, 300);
    if (timeElapsed7 > 2) {
    this.e = 1
    timeElapsed7 = 0
    }
    break
  case 1:
    image(Jam, 150, 50, 300, 300);
    push()
    noStroke();
    fill('White')
    textSize(50);
    text('Command Center:', 50, 400)
    text("Thank God we're", 50, 470);
    text('not late!', 50, 540)
    pop()
    if (timeElapsed7 > 4) {
    this.e = 2
    timeElapsed7 = 0
    }
    break
  case 2:
    image(Jam, 150, 50, 300, 300);
    push()
    noStroke();
    fill('White')
    textSize(50);
    text('Command Center:', 50, 400)
    text("We've defeated aliens", 50, 470);
    text("with missiles!", 50, 540);
    pop()
    if (timeElapsed7 > 4) {
    this.e = 3
    timeElapsed7 = 0
    }
    break
  case 3:
    image(Jam, 150, 50, 300, 300);
    push()
    noStroke();
    fill('White')
    textSize(50);
    text('Command Center:', 50, 400)
    text("We've defeated aliens", 50, 470);
    text("with missiles!", 50, 540);
    pop()
    if (timeElapsed7 > 4) {
    this.e = 4
    timeElapsed7 = 0
    }
    break
  case 4:
    image(Jam, 150, 50, 300, 300);
    push()
    noStroke();
    fill('White')
    textSize(50);
    text('Command Center:', 50, 400)
    text("We believed you would", 50, 470);
    text("accomplish the mission!", 50, 540);
    pop()
    if (timeElapsed7 > 4) {
    this.e = 5
    timeElapsed7 = 0
    }
    break
  case 5:
    image(Jam, 150, 50, 300, 300);
    push()
    noStroke();
    fill('White')
    textSize(50);
    text('Command Center:', 50, 400)
    textSize(30)
    text("The reward for the success", 50, 470);
    text("of this mission is...", 50, 540);
    pop()
    if (timeElapsed7 > 4) {
    this.e = 0
    timeElapsed7 = 0
    Scene = 42
    Gending2.stop()
    Gendingmusic2 = false
    }
}
time = millis()
}
}