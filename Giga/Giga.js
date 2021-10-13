/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Giga extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("giga-a", "./Giga/costumes/giga-a.svg", { x: 72, y: 96 }),
      new Costume("giga-b", "./Giga/costumes/giga-b.svg", { x: 72, y: 96 }),
      new Costume("giga-c", "./Giga/costumes/giga-c.svg", { x: 73, y: 96 }),
      new Costume("giga-d", "./Giga/costumes/giga-d.svg", { x: 73, y: 96 })
    ];

    this.sounds = [
      new Sound("Xylo4", "./Giga/sounds/Xylo4.wav"),
      new Sound(
        "Classical Piano font ",
        "./Giga/sounds/Classical Piano font .wav"
      ),
      new Sound(
        "Dance Celebrate2 music de font",
        "./Giga/sounds/Dance Celebrate2 music de font.wav"
      ),
      new Sound("Hip Hop font ", "./Giga/sounds/Hip Hop font .wav"),
      new Sound(
        "Drum Boing mur colision ",
        "./Giga/sounds/Drum Boing mur colision .wav"
      ),
      new Sound("Screech", "./Giga/sounds/Screech.wav"),
      new Sound("Chomp manger ", "./Giga/sounds/Chomp manger .wav"),
      new Sound("Oops fin du jeux ", "./Giga/sounds/Oops fin du jeux .wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked9),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked10),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked11),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked12),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked13),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked14),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked15),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked16),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked17),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked18),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked19),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked20),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked21),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked22),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked23),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked24),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked25),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked26),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked27),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked28),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked29),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked30),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked31),
      new Trigger(Trigger.KEY_PRESSED, { key: "any" }, this.whenKeyAnyPressed)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching(this.sprites["Frank"].andClones())) {
        this.direction += 180;
        this.move(10);
      }
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(Color.rgb(0, 27, 255))) {
        this.stage.vars.vie += -1;
        yield* this.startSound("Screech");
        yield* this.wait(2);
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching(Color.rgb(0, 27, 255))) {
        yield* this.playSoundUntilDone("Drum Boing mur colision ");
        yield* this.wait(2);
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.touching(Color.rgb(255, 0, 0))) {
        this.stage.vars.vie += -1;
        yield* this.startSound("Screech");
        yield* this.wait(2);
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.touching(Color.rgb(0, 79, 101))) {
        this.stage.vars.vie += -1;
        yield* this.startSound("Screech");
        yield* this.wait(2);
      }
      yield;
    }
  }

  *whenKeySpacePressed() {
    while (true) {
      this.x = 199;
      this.direction = 90;
      this.y = 15;
      return;
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.stage.vars.score == 7) {
        yield* this.sayAndWait("tué le monstre ", 10);
      }
      yield;
    }
  }

  *whenGreenFlagClicked7() {
    while (true) {
      this.stage.vars.vie = 3;
      return;
      yield;
    }
  }

  *whenGreenFlagClicked8() {
    while (true) {
      if (this.touching(this.sprites["Bat2"].andClones())) {
        this.direction += 180;
        this.move(10);
      }
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenGreenFlagClicked9() {
    while (true) {
      if (this.touching(this.sprites["Bat3"].andClones())) {
        this.stage.vars.vie += -1;
        yield* this.startSound("Screech");
        yield* this.wait(4);
      }
      yield;
    }
  }

  *whenGreenFlagClicked10() {
    while (true) {
      if (this.stage.vars.score == 13) {
        yield* this.sayAndWait("victoire", 10);
      }
      if (this.stage.vars.score == 13) {
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }

  *whenGreenFlagClicked11() {
    while (true) {
      if (this.touching(this.sprites["Bat6"].andClones())) {
        this.stage.vars.vie += -1;
        yield* this.startSound("Screech");
        yield* this.wait(4);
      }
      yield;
    }
  }

  *whenGreenFlagClicked12() {
    while (true) {
      this.stage.vars.score = 0;
      return;
      yield;
    }
  }

  *whenGreenFlagClicked13() {
    while (true) {
      if (this.touching(this.sprites["Bat3"].andClones())) {
        this.direction += 180;
        this.move(10);
      }
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenGreenFlagClicked14() {
    while (true) {
      if (this.touching(this.sprites["Bat"].andClones())) {
        this.stage.vars.vie += -1;
        yield* this.startSound("Screech");
        yield* this.wait(4);
      }
      yield;
    }
  }

  *whenGreenFlagClicked15() {
    while (true) {
      if (this.touching(this.sprites["Bat5"].andClones())) {
        this.direction += 180;
        this.move(10);
      }
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenGreenFlagClicked16() {
    while (true) {
      this.x = 199;
      this.direction = 90;
      this.y = 15;
      return;
      yield;
    }
  }

  *whenGreenFlagClicked17() {
    while (true) {
      if (this.touching(this.sprites["Bat4"].andClones())) {
        this.stage.vars.vie += -1;
        yield* this.startSound("Screech");
        yield* this.wait(4);
      }
      yield;
    }
  }

  *whenGreenFlagClicked18() {
    while (true) {
      if (this.touching(this.sprites["Bat5"].andClones())) {
        this.stage.vars.vie += -1;
        yield* this.startSound("Screech");
        yield* this.wait(4);
      }
      yield;
    }
  }

  *whenGreenFlagClicked19() {
    while (true) {
      if (this.touching(this.sprites["Bat4"].andClones())) {
        this.direction += 180;
        this.move(10);
      }
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenGreenFlagClicked20() {
    while (true) {
      if (this.stage.vars.vie == 0) {
        yield* this.sayAndWait("Game over ", 10);
        yield* this.startSound("Oops fin du jeux ");
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }

  *whenGreenFlagClicked21() {
    while (true) {
      if (this.touching(this.sprites["Bat3"].andClones())) {
        this.direction += 180;
        this.move(10);
      }
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenGreenFlagClicked22() {
    while (true) {
      if (this.touching(Color.rgb(255, 0, 0))) {
        this.direction += 180;
        this.move(10);
      }
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenGreenFlagClicked23() {
    while (true) {
      if (this.touching(this.sprites["Bat5"].andClones())) {
        this.direction += 180;
        this.move(10);
      }
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenGreenFlagClicked24() {
    while (true) {
      if (this.touching(this.sprites["Bat2"].andClones())) {
        this.direction += 180;
        this.move(10);
      }
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenGreenFlagClicked25() {
    while (true) {
      if (this.touching(Color.rgb(0, 79, 101))) {
        this.direction += 180;
        this.move(10);
      }
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenGreenFlagClicked26() {
    while (true) {
      if (this.touching(Color.rgb(0, 27, 255))) {
        this.direction += 180;
        this.move(10);
      }
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenGreenFlagClicked27() {
    while (true) {
      if (this.touching(this.sprites["Bat2"].andClones())) {
        this.stage.vars.vie += -1;
        yield* this.startSound("Screech");
        yield* this.wait(4);
      }
      yield;
    }
  }

  *whenGreenFlagClicked28() {
    while (true) {
      yield* this.playSoundUntilDone("Dance Celebrate2 music de font");
      yield;
    }
  }

  *whenGreenFlagClicked29() {
    while (true) {
      if (this.touching(Color.rgb(255, 0, 0))) {
        yield* this.playSoundUntilDone("Drum Boing mur colision ");
        yield* this.wait(2);
      }
      yield;
    }
  }

  *whenGreenFlagClicked30() {
    while (true) {
      if (this.stage.vars.vie == 0) {
        yield* this.startSound("Oops fin du jeux ");
        yield* this.wait(2);
      }
      yield;
    }
  }

  *whenGreenFlagClicked31() {
    while (true) {
      if (this.touching(Color.rgb(0, 79, 101))) {
        yield* this.playSoundUntilDone("Drum Boing mur colision ");
        yield* this.wait(2);
      }
      yield;
    }
  }

  *whenKeyAnyPressed() {
    while (true) {
      if (this.keyPressed("w")) {
        this.direction = 0;
        this.move(5);
        /* TODO: Implement motion_ifonedgebounce */ null;
      }
      if (this.keyPressed("s")) {
        this.direction = 180;
        this.move(5);
        /* TODO: Implement motion_ifonedgebounce */ null;
      }
      if (this.keyPressed("d")) {
        this.direction = 90;
        this.move(5);
        /* TODO: Implement motion_ifonedgebounce */ null;
      }
      if (this.keyPressed("a")) {
        this.direction = -90;
        this.move(5);
        /* TODO: Implement motion_ifonedgebounce */ null;
      }
      yield;
    }
  }
}
