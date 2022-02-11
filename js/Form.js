class Form {
  constructor() {
   // this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("");
    this.titleImg = createImg("../images/title.png");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120, 50);
   // this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.size(500, 150);
    this.titleImg.class("resetText");
   // this.input.class("customInput");
    this.playButton.class("playButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    //this.input.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      //this.input.hide();
      this.playButton.hide();
      gameState = 1;
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}