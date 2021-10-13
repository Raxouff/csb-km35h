/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Heart extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("heart red", "./Heart/costumes/heart red.svg", {
        x: 65,
        y: 56
      }),
      new Costume("heart purple", "./Heart/costumes/heart purple.svg", {
        x: 66,
        y: 62
      })
    ];

    this.sounds = [new Sound("pop", "./Heart/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(231, 132);
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.visible = true;
      if (this.stage.vars.vie == 0) {
        this.visible = false;
        yield* this.wait(1);
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.size = 15;
      yield;
    }
  }
}
