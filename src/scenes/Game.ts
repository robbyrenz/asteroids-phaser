import { Scene } from "phaser";

export class Game extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  msg_text: Phaser.GameObjects.Text;

  constructor() {
    super("Game");
  }

  create() {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor(0x00ff00);

    this.background = this.add.image(512, 384, "background");
    this.background.setAlpha(0.5);

    this.msg_text = this.add.text(
      512,
      384,
      "Make something fun!\nand share it with us:\nsupport@phaser.io",
      {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      },
    );
    this.msg_text.setOrigin(0.5);

    this.add.image(this.scale.width / 2, this.scale.height / 2, "player");
    this.add.image(50, 50, "meteorLarge");
    this.add.image(this.scale.width - 30, 30, "meteorSmall");
    this.add.image(
      this.scale.width - 50,
      this.scale.height - 50,
      "meteorLarge",
    );
    this.add.image(30, this.scale.height - 30, "meteorSmall");

    this.input.once("pointerdown", () => {
      this.scene.start("GameOver");
    });
  }
}
