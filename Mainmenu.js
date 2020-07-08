









class Main_Scene {
constructor() {
  const center_x = width / 2;
  this.play = new Button(center_x, height * 2/5, "Play Start!");
  this.option = new Button(center_x, height * 3/5, "Option");
  this.howto = new Button(center_x, height * 4/5, "How to Play");
}
Click() {
  if(this.play.DidClickButton()){
    Scene = 1
    mainmusic = false
    MainSound.stop()
    ship_hp = 200
    Jship_y = 525
    Jship_y2 = 340
  } else if(this.option.DidClickButton()) {
    Scene = 2
  } else if(this.howto.DidClickButton()) {
    Scene = 3
  }
}
Draw() {
  push()
  fill('White');
  textSize(50);
  text("Escape", 220, 100);
  pop()
  this.play.DrawButton()
  this.option.DrawButton()
  this.howto.DrawButton()
}
}