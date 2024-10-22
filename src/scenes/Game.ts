import { Scene } from "phaser";

export class Game extends Scene {
  background: Phaser.GameObjects.Image;
  sprite: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  text: Phaser.GameObjects.Text;

  constructor() {
    super("Game");
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

    this.add.image(50, 50, "meteor_large");
    this.add.image(this.scale.width - 30, 30, "meteor_small");
    this.add.image(
      this.scale.width - 50,
      this.scale.height - 50,
      "meteor_large",
    );
    this.add.image(30, this.scale.height - 30, "meteor_small");

    this.sprite = this.physics.add.image(
      this.scale.width / 2,
      this.scale.height / 2,
      "player",
    );
    this.sprite.setDamping(true);
    // this.sprite.setDrag(0.99);
    this.sprite.setDrag(0.50);
    this.sprite.setMaxVelocity(200);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.text = this.add.text(10, 10, "", {
      font: "16px Courier",
      fill: "#00ff00",
    });

    // this.input.once("pointerdown", () => {
    //   this.scene.start("GameOver");
    // });
  }

  update() {
    if (this.cursors.up.isDown) {
      this.physics.velocityFromRotation(
        this.sprite.rotation,
        200,
        this.sprite.body.acceleration,
      );
    } else {
      this.sprite.setAcceleration(0);
    }

    if (this.cursors.left.isDown) {
      this.sprite.setAngularVelocity(-300);
    } else if (this.cursors.right.isDown) {
      this.sprite.setAngularVelocity(300);
    } else {
      this.sprite.setAngularVelocity(0);
    }

    this.text.setText(`Speed: ${this.sprite.body.speed}`);

    this.physics.world.wrap(this.sprite, 32);
  }
}
