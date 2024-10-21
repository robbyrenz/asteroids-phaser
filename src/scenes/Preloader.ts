import { Scene } from "phaser";

export class Preloader extends Scene {
  loading_text: Phaser.GameObjects.Text;

  constructor() {
    super("Preloader");
  }

  init() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    //  A simple progress bar. This is the outline of the bar.
    this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

    //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
    const bar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);

    //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
    this.load.on("progress", (progress: number) => {
      //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
      bar.width = 4 + (460 * progress);
    });
  }

  preload() {
    this.load.setPath("assets");

    this.load.image("logo", "logo.png");
    this.load.image("background", "background.png");
    this.load.image("player", "player/player.png");
    this.load.image("meteor_small", "enemies/meteor_small.png");
    this.load.image("meteor_large", "enemies/meteor_large.png");
  }

  create() {
    //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
    //  For example, you can define global animations here, so we can use them in other scenes.

    this.loading_text = this.add.text(
      this.scale.width / 2 - 140,
      this.scale.height / 2 - 120,
      "Loading",
      {
        fontFamily: "Arial Black",
        fontSize: 64,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      },
    );

    this.time.addEvent({
      delay: 1000,
      callback: () => {
        const main_camera = this.cameras.main.fadeOut(1000, 0, 0, 0);
        // Fadeout complete
        main_camera.once("camerafadeoutcomplete", () => {
          this.scene.start("SplashScene");
        });
      },
    });
  }
}
