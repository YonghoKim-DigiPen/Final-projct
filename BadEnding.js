// Youngho Kim
// cs099
// Final Project
// Spring 2020











class Die {
constructor() {
this.Main = new Button(width / 2, 520, "Mainmenu");
}
Click() {
if(this.Main.DidClickButton()) {
  Scene = 0
  Failmusic = false
  Badending.stop();
  strokeWeight(1);
  textSize(12);
}
}
Draw() {
strokeWeight(1);
textSize(12)
this.Main.DrawButton()
push()
fill('White');
textSize(80)
text('Mission Failed', 50, 250)
pop()
}
}