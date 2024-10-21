import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.add.image(this.scale.width / 2, this.scale.height / 2, "player");
    this.add.image(50, 50, "meteor_large");
    this.add.image(this.scale.width - 30, 30, "meteor_small");
    this.add.image(
      this.scale.width - 50,
      this.scale.height - 50,
      "meteor_large",
    );
    this.add.image(30, this.scale.height - 30, "meteor_small");

    this.input.once("pointerdown", () => {
      this.scene.start("GameOver");
    });
  }
}
