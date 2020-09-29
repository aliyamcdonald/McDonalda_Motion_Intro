import {gsap} from "gsap";
import {boxSpeed} from "./animationSpeed.js"

export function pinkBoxAnimation(){


    var tl = gsap.timeline();
    tl.to(".pink-box",{duration:boxSpeed,x:400},"startBoxes");

    return tl;
}


     

