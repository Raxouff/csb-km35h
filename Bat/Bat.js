/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bat extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bat-a", "./Bat/costumes/bat-a.svg", { x: 80, y: 60 }),
      new Costume("bat-b", "./Bat/costumes/bat-b.svg", { x: 39, y: 61 }),
      new Costume("bat-c", "./Bat/costumes/bat-c.svg", { x: 68, y: 66 }),
      new Costume("bat-d", "./Bat/costumes/bat-d.svg", { x: 29, y: 62 })
    ];

    this.sounds = [new Sound("owl", "./Bat/sounds/owl.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching(Color.rgb(0, 79, 101))) {
        this.direction += 90;
        this.move(10);
      }
      if (this.touching(this.sprites["Giga"].andClones())) {
        this.direction += 180;
      }
      this.move(10);
      yield;
    }
  }
}
