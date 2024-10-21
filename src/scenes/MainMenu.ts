import { GameObjects, Scene } from "phaser";

export class MainMenu extends Scene {
  background: GameObjects.Image;
  title: GameObjects.Text;

  constructor() {
    super("MainMenu");
  }
  init() {
    // this.cameras.main.fadeIn(1000, 0, 0, 0);
    // Make the title screen suddenly appear, along with a big sci-fi sound, a la Alien: Romulus
  }

  create() {
    // Add background image
    this.background = this.add.image(
      0,
      0,
      "background",
    );
    this.background.setOrigin(0, 0);

    // Fill the background to the entire width and height of the canvas container
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;

    this.title = this.add.text(512, 460, "Asteroids\nClick to Start", {
      fontFamily: "Arial Black",
      fontSize: 38,
      color: "#ffffff",
      stroke: "#000000",
      strokeThickness: 8,
      align: "center",
    }).setOrigin(0.5);

    this.input.once("pointerdown", () => {
      this.scene.start("Game");
    });
  }
}
