/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bananas3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bananas", "./Bananas3/costumes/bananas.svg", {
        x: 39,
        y: 38
      })
    ];

    this.sounds = [
      new Sound("Chomp", "./Bananas3/sounds/Chomp.wav"),
      new Sound("Bite", "./Bananas3/sounds/Bite.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.visible = false;
      if (this.stage.vars.score == 3) {
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
