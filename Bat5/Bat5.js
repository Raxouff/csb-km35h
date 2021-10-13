/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bat5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bat-a", "./Bat5/costumes/bat-a.svg", { x: 80, y: 60 }),
      new Costume("bat-b", "./Bat5/costumes/bat-b.svg", { x: 39, y: 61 }),
      new Costume("bat-c", "./Bat5/costumes/bat-c.svg", { x: 68, y: 66 }),
      new Costume("bat-d", "./Bat5/costumes/bat-d.svg", { x: 29, y: 62 })
    ];

    this.sounds = [new Sound("owl", "./Bat5/sounds/owl.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.direction = 90;
    this.x = 7;
    this.y = -35;
    return;
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(45);
    while (true) {
      for (let i = 0; i < 40; i++) {
        this.move(-2);
        yield;
      }
      this.direction += 90;
      for (let i = 0; i < 35; i++) {
        this.move(-2);
        yield;
      }
      this.direction += 90;
      for (let i = 0; i < 70; i++) {
        this.move(-2);
        yield;
      }
      this.direction += 90;
      for (let i = 0; i < 65; i++) {
        this.move(-2);
        yield;
      }
      this.direction += 90;
      for (let i = 0; i < 100; i++) {
        this.move(-2);
        yield;
      }
      this.direction += 90;
      for (let i = 0; i < 95; i++) {
        this.move(-2);
        yield;
      }
      this.direction += 90;
      for (let i = 0; i < 135; i++) {
        this.move(-2);
        yield;
      }
      this.direction += 90;
      for (let i = 0; i < 95; i++) {
        this.move(-2);
        yield;
      }
      this.direction += 90;
      for (let i = 0; i < 135; i++) {
        this.move(-2);
        yield;
      }
      this.direction += 90;
      for (let i = 0; i < 90; i++) {
        this.move(-2);
        yield;
      }
      this.direction -= 90;
      for (let i = 0; i < 35; i++) {
        this.move(-2);
        yield;
      }
      this.direction -= 90;
      for (let i = 0; i < 120; i++) {
        this.move(-2);
        yield;
      }
      this.direction -= 90;
      for (let i = 0; i < 205; i++) {
        this.move(-2);
        yield;
      }
      this.direction -= 90;
      for (let i = 0; i < 155; i++) {
        this.move(-2);
        yield;
      }
      this.direction -= 90;
      for (let i = 0; i < 205; i++) {
        this.move(-2);
        yield;
      }
      this.direction -= 90;
      for (let i = 0; i < 35; i++) {
        this.move(-2);
        yield;
      }
      this.direction += 90;
      for (let i = 0; i < 35; i++) {
        this.move(2);
        yield;
      }
      this.direction += 90;
      for (let i = 0; i < 90; i++) {
        this.move(2);
        yield;
      }
      this.direction -= 90;
      for (let i = 0; i < 100; i++) {
        this.move(2);
        yield;
      }
      this.direction -= 90;
      for (let i = 0; i < 65; i++) {
        this.move(2);
        yield;
      }
      this.direction -= 90;
      for (let i = 0; i < 75; i++) {
        this.move(2);
        yield;
      }
      this.direction -= 90;
      for (let i = 0; i < 30; i++) {
        this.move(2);
        yield;
      }
      this.direction -= 90;
      for (let i = 0; i < 35; i++) {
        this.move(2);
        yield;
      }
      this.direction = 90;
      this.x = 7;
      this.y = -35;
      yield;
    }
  }
}
