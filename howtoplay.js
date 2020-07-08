// Youngho Kim
// cs099
// Final Project
// Spring 2020







class howto {
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
fill('White');
textSize(30);
text('⬆ or W = Up', 20, 70)
text('⬇ or S = Down', 20, 140)
text('⬅ or A = Left', 20, 210)
text('➡ or D = Right', 20, 280);
text('Violet Attack = 20damage' , 20, 370);
text('Black Attack = 10damage', 20, 440)
text('Red Attack = 30damage', 20, 510)
text('Attack Timing Time', 280, 70)
text('Red < Black < Violet', 280, 140)
text('hp 0 = gameover', 300, 250)
pop()
}
}