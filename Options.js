// Youngho Kim
// cs099
// Final Project
// Spring 2020









class Option {
constructor() {
  this.Control1 = new Button(125, height * 4/5, "Control1");
  this.Control2 = new Button(475, height * 4/5, "Contorl2");
  this.Main = new Button(310, 580, "Mainmenu");
  this.SoundU = new Button(200, height * 2/5, "SoundUp")
  this.SoundD = new Button(400, height * 2/5, "SoundDown")
  this.v = 3
  this.Credit = new Button(width /2, height * 3/5, "Credit")
}
Click() {
  if(this.Control1.DidClickButton()) {
    Control = 1
  } else if(this.Control2.DidClickButton()) {
    Control = 2
  }
  if(this.SoundU.DidClickButton()) {
  if( volume < 0.6) {
  this.v += 1
  volume += 0.1
  }
  }
  if(this.SoundD.DidClickButton()) {
  if(volume > 0.1 && volume <= 0.6) {
  this.v -= 1
  volume -= 0.1
  }
  }
  if(this.Main.DidClickButton()) {
    Scene = 0
  }
  if(this.Credit.DidClickButton()) {
    Scene = 21
  }
}
Draw() {
  push()
  fill('White')
  textSize(50);
  text("Option", 230, 50);
  text(this.v, 290, 250);
  text("Volume", 220, 150);
  pop();
  this.Control1.DrawButton()
  this.Control2.DrawButton()
  this.Main.DrawButton()
  this.SoundU.DrawButton()
  this.SoundD.DrawButton()
  this.Credit.DrawButton()
  image(Control1, 50, 300, 150, 150);
  image(Control2, 400, 300, 150, 150);
  
}
}