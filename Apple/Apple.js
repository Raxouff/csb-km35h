/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Apple extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("apple", "./Apple/costumes/apple.svg", { x: 31, y: 31 })
    ];

    this.sounds = [new Sound("Chomp", "./Apple/sounds/Chomp.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.visible = false;
      if (this.stage.vars.vie == 1) {
        this.visible = true;
        if (this.touching(this.sprites["Giga"].andClones())) {
          this.stage.vars.vie += 2;
          this.visible = false;
          yield* this.startSound("Chomp");
          return;
        }
      }
      yield;
    }
  }
}
