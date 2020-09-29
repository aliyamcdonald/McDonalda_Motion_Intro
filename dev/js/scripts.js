// import * as Demo from './demo.js';

import {gsap} from "gsap";

import {pinkBoxAnimation} from "./pinkBox.js"
import {tealBoxAnimation} from "./tealBox.js"
import {yellowBoxAnimation} from "./yellowBox.js"

// console.log(Demo);

const mainTL = gsap.timeline({paused:true});

    mainTL.add(pinkBoxAnimation())
        .add(tealBoxAnimation())
        .add(yellowBoxAnimation())
        .play();


