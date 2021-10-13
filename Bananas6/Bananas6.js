/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bananas6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bananas", "./Bananas6/costumes/bananas.svg", {
        x: 39,
        y: 38
      })
    ];

    this.sounds = [
      new Sound("Chomp", "./Bananas6/sounds/Chomp.wav"),
      new Sound("Bite", "./Bananas6/sounds/Bite.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.visible = false;
      if (this.stage.vars.score == 1) {
        this.visible = true;
      }
      if (this.touching(this.sprites["Giga"].andClones())) {
        yield* this.startSound("Bite");
        this.stage.vars.score += 1;
      }
      yield;
    }
  }
}
