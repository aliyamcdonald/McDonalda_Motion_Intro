/* =============
    Demo
============= */

import {gsap} from "gsap";

gsap.set("#petals",{transformOrigin: "center"});

const iconTL = gsap.timeline();

iconTL.from("#center",{duration: 1, scale:0, alpha:0})
iconTL.from("#petals",{duration: 2, scale:0, alpha:0})
iconTL.from("#petals",{rotate: 360, duration: 2})




export function iconAnimation(){
    return iconTL;
}