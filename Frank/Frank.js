/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Frank extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("frank-a", "./Frank/costumes/frank-a.svg", { x: 97, y: 63 }),
      new Costume("frank-b", "./Frank/costumes/frank-b.svg", { x: 105, y: 63 }),
      new Costume("frank-c", "./Frank/costumes/frank-c.svg", { x: 159, y: 59 }),
      new Costume("frank-d", "./Frank/costumes/frank-d.png", { x: 211, y: 214 })
    ];

    this.sounds = [
      new Sound("wolf howl", "./Frank/sounds/wolf howl.wav"),
      new Sound("Scrambling Feet", "./Frank/sounds/Scrambling Feet.wav"),
      new Sound("Pop", "./Frank/sounds/Pop.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      if (this.stage.vars.score == 7) {
        this.visible = true;
      }
      if (this.touching(this.sprites["Giga"].andClones())) {
        this.stage.vars.vie += -1;
      }
      if (this.touching(this.sprites["Ball"].andClones())) {
        this.stage.vars.score += 4;
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      for (let i = 0; i < 160; i++) {
        this.move(2);
        yield;
      }
      for (let i = 0; i < 160; i++) {
        this.move(-2);
        yield;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    if (this.touching(Color.rgb(255, 217, 99))) {
      yield* this.startSound("Pop");
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      this.x = -180;
      this.y = -148;
      return;
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    if (this.stage.vars.score == 7) {
      yield* this.startSound("wolf howl");
      yield* this.wait(5);
      yield* this.playSoundUntilDone("Scrambling Feet");
    }
  }
}
