/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Heart2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("heart red", "./Heart2/costumes/heart red.svg", {
        x: 65,
        y: 56
      }),
      new Costume("heart purple", "./Heart2/costumes/heart purple.svg", {
        x: 66,
        y: 62
      })
    ];

    this.sounds = [new Sound("pop", "./Heart2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(230, 108);
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.visible = true;
      if (this.stage.vars.vie == 1) {
        this.visible = false;
      }
      if (this.stage.vars.vie == 0) {
        this.visible = false;
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
