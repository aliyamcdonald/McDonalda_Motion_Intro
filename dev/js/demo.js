/* =============
    Demo
============= */

import {gsap} from "gsap";

gsap.set("finalbox",{transformOrigin: "center"});

const iconTL = gsap.timeline();

iconTL.from("finalbox",{duration: 0.5, scale:3, alpah:0})

export function iconAnimation(){
    return iconTL;
}