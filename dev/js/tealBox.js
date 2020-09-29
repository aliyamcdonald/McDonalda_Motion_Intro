import {gsap} from "gsap";
import {boxSpeed} from "./animationSpeed.js"

export function tealBoxAnimation(){


    var tl = gsap.timeline();
    tl.to(".teal-box",{duration:boxSpeed,x:400},"startBoxes");

    return tl;
}


     

