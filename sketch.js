// Youngho Kim
// cs099
// Final Project
// Spring 2020





let Scene = 0
let Control = 1
let v = 0.8
let ship_hp = 200
let Jship_x = 555
let Jship_y = 525
let ship_x = 260
let ship_y = 360
let ship_x2 = 260
let ship_y2 = 460
let Jship_x2 = 555
let Jship_y2 = 340
let be = 150
let volume = 0.3

let Failmusic = false
let Gendingmusic1 = false
let mainmusic = false
let playmusic = false
let Gendingmusic2 = false
let Gendingmusic3 = false



function setup() {
  createCanvas(600, 600);
  time = millis()
  
  playgo = new playScreen()
  MainScene = new Main_Scene()
  OptionScene = new Option()
  BadendingScene = new Die()
  Gending1Scene = new Jemfind()
  playback = new playScreen2()
  Gending2Scene = new maybeEnd()
  Gending3Scene = new realEnd()
  howtoScene = new howto()
  creditScene = new credit()
}

function draw() {
  
  masterVolume(volume)
  image(bg, 0, 0, 600, 600);
switch(Scene) {
  case 0:
  MainScene.Click();
  MainScene.Draw();
  break;
  case 1:
  playgo.Draw()
  if (ship_hp <= 0 ) {
  Scene = 11
  PlaySound.stop()
  playmusic = false
  } else if (Jship_y <= 340) {
  Scene = 12
  PlaySound.stop()
  playmusic = false
  }
  break;
  case 2:
  OptionScene.Click();
  OptionScene.Draw();
  break;
  case 21:
  creditScene.Click()
  creditScene.Draw()
  break
  case 3:
  howtoScene.Click()
  howtoScene.Draw()
  break
  case 11:
  BadendingScene.Click();
  BadendingScene.Draw();
  break;
  case 12:
  Gending1Scene.Draw()
  break;
  case 4:
  playback.Draw()
  if (ship_hp <= 0) {
  Scene = 11
  Gending.stop()
  Gendingmusic1 = false
  }
  if (Jship_y2 >= 520) {
  Scene = 41
  Gending.stop()
  Gendingmusic1 = false
  }
  break
  case 41:
  Gending2Scene.Draw()
  break
  case 42:
  Gending3Scene.Click()
  Gending3Scene.Draw()
}
  if (Scene == 0 && mainmusic == false) {
  MainSound.loop()
  mainmusic = true
  }
  if (Scene == 1 && playmusic == false) {
  PlaySound.play()
  playmusic = true
  }
  if (Scene == 11 && Failmusic == false) {
  Badending.play();
  Failmusic = true
  }
  if (Scene == 12 && Gendingmusic1 == false) {
  Gending.play();
  Gendingmusic1 = true
  }
  if (Scene == 41 && Gendingmusic2 == false) {
  Gending2.play()
  Gendingmusic2 = true
  }
  if (Scene == 42 && Gendingmusic3 == false) {
  Gending3.play()
  Gendingmusic3 = true
  }

}
function keyPressed() {
if (Scene == 1 && Control == 1) {
playgo.Control1();
}
if (Scene == 1 && Control == 2) {
playgo.Control2();
}
if (Scene == 4 && Control == 1) {
playback.Control1();
}
if (Scene == 4 && Control == 2) {
playback.Control2();
}
}






function preload() {
spaceshipg = loadImage('spaceship2.png');
Jam = loadImage('Jam (1).png')
bg = loadImage('star-2539245_1920.jpg');
Control1 = loadImage('Control1.png');
Control2 = loadImage('Control2.png');
Badending = loadSound('Creature_Distortion_White_Noise.mp3')
Gending = loadSound('15 Howdy! and... Good-Die!.mp3')
spaceshipb = loadImage('spaceship3.png');
earth = loadImage('earth-11015_640.jpg');
MainSound = loadSound('game_maoudamashii_4_vehicle01.mp3')
PlaySound = loadSound('08 Tanchiky - Unbelievable surrounded by Blue.mp3')
Gending2 = loadSound('02 Fallen Down (Reprise) Butterscotch cinnamon mix.mp3')
Gending3 = loadSound('10 s-don - Dogdance.mp3')
madeby = loadImage('KakaoTalk_20200327_210739020.jpg')
}