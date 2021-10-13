/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("arrière plan1", "./Stage/costumes/arrière plan1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("arrière plan2", "./Stage/costumes/arrière plan2.svg", {
        x: 230.7187,
        y: 146
      }),
      new Costume("Neon Tunnel", "./Stage/costumes/Neon Tunnel.png", {
        x: 480,
        y: 360
      }),
      new Costume("Neon Tunnel3", "./Stage/costumes/Neon Tunnel3.svg", {
        x: 242,
        y: 181
      }),
      new Costume("Neon Tunnel2", "./Stage/costumes/Neon Tunnel2.png", {
        x: 480,
        y: 360
      }),
      new Costume("Neon Tunnel4", "./Stage/costumes/Neon Tunnel4.png", {
        x: 480,
        y: 360
      }),
      new Costume("Neon Tunnel5", "./Stage/costumes/Neon Tunnel5.png", {
        x: 480,
        y: 360
      }),
      new Costume("Neon Tunnel7", "./Stage/costumes/Neon Tunnel7.png", {
        x: 480,
        y: 360
      }),
      new Costume("Neon Tunnel6", "./Stage/costumes/Neon Tunnel6.png", {
        x: 480,
        y: 360
      }),
      new Costume("arrière plan5", "./Stage/costumes/arrière plan5.svg", {
        x: 240,
        y: 180
      }),
      new Costume("arrière plan10", "./Stage/costumes/arrière plan10.svg", {
        x: 315,
        y: 179.33999633789062
      }),
      new Costume("arrière plan9", "./Stage/costumes/arrière plan9.svg", {
        x: 315,
        y: 179.33999633789062
      }),
      new Costume("arrière plan6", "./Stage/costumes/arrière plan6.svg", {
        x: 0,
        y: 0
      }),
      new Costume("Castle 2", "./Stage/costumes/Castle 2.png", {
        x: 480,
        y: 360
      }),
      new Costume("arrière plan7", "./Stage/costumes/arrière plan7.svg", {
        x: 0,
        y: 0
      }),
      new Costume("arrière plan3", "./Stage/costumes/arrière plan3.svg", {
        x: 0,
        y: 0
      }),
      new Costume("arrière plan4", "./Stage/costumes/arrière plan4.svg", {
        x: 0,
        y: 0
      }),
      new Costume("Nebula", "./Stage/costumes/Nebula.png", { x: 480, y: 360 }),
      new Costume("arrière plan8", "./Stage/costumes/arrière plan8.svg", {
        x: 0,
        y: 0
      }),
      new Costume("arrière plan11", "./Stage/costumes/arrière plan11.svg", {
        x: 0,
        y: 0
      }),
      new Costume("arrière plan12", "./Stage/costumes/arrière plan12.svg", {
        x: 0,
        y: 0
      }),
      new Costume("arrière plan13", "./Stage/costumes/arrière plan13.svg", {
        x: 0,
        y: 0
      }),
      new Costume("arrière plan14", "./Stage/costumes/arrière plan14.svg", {
        x: 0,
        y: 0
      }),
      new Costume("arrière plan15", "./Stage/costumes/arrière plan15.svg", {
        x: 0,
        y: 0
      }),
      new Costume("arrière plan16", "./Stage/costumes/arrière plan16.svg", {
        x: 0,
        y: 0
      }),
      new Costume("arrière plan17", "./Stage/costumes/arrière plan17.svg", {
        x: 0,
        y: 0
      }),
      new Costume("arrière plan18", "./Stage/costumes/arrière plan18.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.score = 2;
    this.vars.vie = 0;
  }
}
