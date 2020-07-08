// Youngho Kim
// cs099
// Final Project
// Spring 2020











class credit {
constructor() {
this.Main = new Button(310, 580, "Mainmenu");
}
Click() {
if(this.Main.DidClickButton()) {
    Scene = 0
  }
}
Draw() {
this.Main.DrawButton()
push()
fill('White')
textSize(30)
text("Credit", 230, 100)
text("Made by Youngho Kim", 50, 170)
image(madeby, 50, 210, 170, 170);
textSize(20)
text("Special Thanks", 330, 250)
text("Professor Rudy", 330, 280)
text("Idea provision", 330, 330)
text("My Older Sister", 330, 360);
text("Game-making Interference", 330, 410)
text("Steam Summer Discount", 330, 440);
pop()
}
}