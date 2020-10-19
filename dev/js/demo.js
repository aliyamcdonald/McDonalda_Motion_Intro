/* =============
    Demo
============= */

import {gsap} from "gsap";

gsap.set("#finalbox",{transformOrigin: "center"});

const iconTL = gsap.timeline();

iconTL.from("#finalbox",{duration: 2, scale:0, alpha:0})

export function iconAnimation(){
    return iconTL;
}