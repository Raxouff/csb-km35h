/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ball extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ball-a", "./Ball/costumes/ball-a.svg", { x: 22, y: 22 }),
      new Costume("ball-b", "./Ball/costumes/ball-b.svg", { x: 22, y: 22 }),
      new Costume("ball-c", "./Ball/costumes/ball-c.svg", { x: 22, y: 22 }),
      new Costume("ball-d", "./Ball/costumes/ball-d.svg", { x: 22, y: 22 }),
      new Costume("ball-e", "./Ball/costumes/ball-e.svg", { x: 22, y: 22 })
    ];

    this.sounds = [
      new Sound("Boing", "./Ball/sounds/Boing.wav"),
      new Sound("Pop", "./Ball/sounds/Pop.wav"),
      new Sound("Scrambling Feet", "./Ball/sounds/Scrambling Feet.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "q" }, this.whenKeyQPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      if (this.stage.vars.score == 7) {
        this.visible = true;
      }
      yield;
    }
  }

  *whenKeyQPressed() {
    while (true) {
      yield* this.glide(1e-8, this.mouse.x, this.mouse.y);
      yield* this.wait(2);
      this.visible = false;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    for (let i = 0; i < 1e29; i++) {
      if (this.keyPressed("q")) {
        yield* this.glide(1e-8, this.sprites["Giga"].x, this.sprites["Giga"].y);
        return;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching(this.sprites["Frank"].andClones())) {
        yield* this.startSound("Pop");
      }
      yield;
    }
  }
}
