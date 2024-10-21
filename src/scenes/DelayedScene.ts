import { Scene } from "phaser";

export class DelayedScene extends Scene {
  constructor() {
    super("DelayedScene");
  }

  init() {
    this.cameras.main.setBackgroundColor("#000000");
  }

  create() {
    this.time.addEvent({
      delay: 5000,
      callback: () => {
        this.scene.start("MainMenu");
      },
      repeat: 0,
    });
  }
}
