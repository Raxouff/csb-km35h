import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Bat from "./Bat/Bat.js";
import Giga from "./Giga/Giga.js";
import Bat2 from "./Bat2/Bat2.js";
import Bat3 from "./Bat3/Bat3.js";
import Bat4 from "./Bat4/Bat4.js";
import Bat5 from "./Bat5/Bat5.js";
import Bat6 from "./Bat6/Bat6.js";
import Heart from "./Heart/Heart.js";
import Heart2 from "./Heart2/Heart2.js";
import Heart3 from "./Heart3/Heart3.js";
import Apple from "./Apple/Apple.js";
import Apple2 from "./Apple2/Apple2.js";
import Apple3 from "./Apple3/Apple3.js";
import Bananas3 from "./Bananas3/Bananas3.js";
import Bananas4 from "./Bananas4/Bananas4.js";
import Bananas5 from "./Bananas5/Bananas5.js";
import Bananas7 from "./Bananas7/Bananas7.js";
import Bananas8 from "./Bananas8/Bananas8.js";
import Bananas9 from "./Bananas9/Bananas9.js";
import Bananas10 from "./Bananas10/Bananas10.js";
import Bananas11 from "./Bananas11/Bananas11.js";
import Bananas12 from "./Bananas12/Bananas12.js";
import Bananas2 from "./Bananas2/Bananas2.js";
import Bananas6 from "./Bananas6/Bananas6.js";
import Bananas13 from "./Bananas13/Bananas13.js";
import Frank from "./Frank/Frank.js";
import Ball from "./Ball/Ball.js";

const stage = new Stage({ costumeNumber: 8 });

const sprites = {
  Bat: new Bat({
    x: -185.11536139381892,
    y: 65.45455485733481,
    direction: -58,
    costumeNumber: 1,
    size: 16,
    visible: true
  }),
  Giga: new Giga({
    x: -26,
    y: -3.13092041015625,
    direction: 180,
    costumeNumber: 1,
    size: 16,
    visible: true
  }),
  Bat2: new Bat2({
    x: 127,
    y: -95,
    direction: 90,
    costumeNumber: 1,
    size: 16,
    visible: true
  }),
  Bat3: new Bat3({
    x: 67,
    y: -63,
    direction: 0,
    costumeNumber: 1,
    size: 16,
    visible: true
  }),
  Bat4: new Bat4({
    x: 7,
    y: -35,
    direction: 90,
    costumeNumber: 1,
    size: 16,
    visible: true
  }),
  Bat5: new Bat5({
    x: 7,
    y: -35,
    direction: 90,
    costumeNumber: 1,
    size: 16,
    visible: true
  }),
  Bat6: new Bat6({
    x: 7,
    y: -35,
    direction: 90,
    costumeNumber: 1,
    size: 16,
    visible: true
  }),
  Heart: new Heart({
    x: 231,
    y: 132,
    direction: 90,
    costumeNumber: 1,
    size: 15,
    visible: false
  }),
  Heart2: new Heart2({
    x: 230,
    y: 108,
    direction: 90,
    costumeNumber: 1,
    size: 15,
    visible: false
  }),
  Heart3: new Heart3({
    x: 231,
    y: 86,
    direction: 90,
    costumeNumber: 1,
    size: 15,
    visible: false
  }),
  Apple: new Apple({
    x: 208.99994346491624,
    y: 31.000000000000007,
    direction: 90,
    costumeNumber: 1,
    size: 32,
    visible: false
  }),
  Apple2: new Apple2({
    x: -5.000030086519408,
    y: 30.999999999999996,
    direction: 90,
    costumeNumber: 1,
    size: 32,
    visible: false
  }),
  Apple3: new Apple3({
    x: -136.00001355616672,
    y: -152,
    direction: 90,
    costumeNumber: 1,
    size: 32,
    visible: false
  }),
  Bananas3: new Bananas3({
    x: -18.000027543388217,
    y: 28.000000000000007,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: false
  }),
  Bananas4: new Bananas4({
    x: -133.0000134290101,
    y: 38.999999999999986,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: false
  }),
  Bananas5: new Bananas5({
    x: -8.000028942110369,
    y: 100,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: false
  }),
  Bananas7: new Bananas7({
    x: 140.99995198440573,
    y: 45.00000000000001,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: false
  }),
  Bananas8: new Bananas8({
    x: -11.000029577893184,
    y: -102.00000000000001,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: false
  }),
  Bananas9: new Bananas9({
    x: 196.99994473648184,
    y: -152,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: false
  }),
  Bananas10: new Bananas10({
    x: -203.0000047823641,
    y: -151,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: false
  }),
  Bananas11: new Bananas11({
    x: -12.00002805201445,
    y: 150,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: false
  }),
  Bananas12: new Bananas12({
    x: -15.00002894211036,
    y: -160,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: false
  }),
  Bananas2: new Bananas2({
    x: -202.00000465520753,
    y: -96.00000000000001,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: false
  }),
  Bananas6: new Bananas6({
    x: -199.00000427373783,
    y: 83,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: false
  }),
  Bananas13: new Bananas13({
    x: 10.216800765693623,
    y: 39.55412682484766,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: true
  }),
  Frank: new Frank({
    x: -180,
    y: -148,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Ball: new Ball({
    x: -56,
    y: -152,
    direction: 90,
    costumeNumber: 1,
    size: 10.869565217391305,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
