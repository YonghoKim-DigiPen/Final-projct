// Youngho Kim
// cs099
// Final Project
// Spring 2020













let timeElapsed8 = 0


class realEnd {
constructor() {
this.re = 0
this.Main = new Button(width / 2, height / 2, "Mainmenu")
}
Click() {
if(this.Main.DidClickButton()) {
  Scene = 0
  Gending3.stop()
  Gendingmusic3 = false
  strokeWeight(1)
  textSize(12)
}
}

Draw() {
timeElapsed8 += (millis() - time) / 1000
switch(this.re) {
  case 0:
    push()
    noStroke();
    fill('White')
    textSize(50);
    text('Nothing!!!!!', 50, 200)
    text('HAHAHA!!!', 50, 300)
    text('It just game yo!', 50, 400)
    text('Thanks for playing!', 50, 500)
    pop()
    if (timeElapsed8 > 10) {
    this.re = 1
    timeElapsed8 = 0
    }
    break
  case 1:
    strokeWeight(1)
    textSize(12)
    this.Main.DrawButton()
}
time = millis()
}
}