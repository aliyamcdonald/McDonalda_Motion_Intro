/* =============
    Demo
============= */

import {gsap} from "gsap";

gsap.set("#petals",{transformOrigin: "center"});

const iconTL = gsap.timeline();

iconTL.from("#center",{duration: 1, scale:0, alpha:0})
iconTL.from("#petals",{duration: 2, scale:0, alpha:0})
iconTL.from("#petals",{rotate: 360, duration: 2})
iconTL.to("#petal1",{scale: 1.2})
iconTL.to("#petal1",{scale: 1})
iconTL.to("#petal2",{scale: 1.2})
iconTL.to("#petal2",{scale: 1})
iconTL.to("#petal3",{scale: 1.2})
iconTL.to("#petal3",{scale: 1})
iconTL.to("#petal4",{scale: 1.2})
iconTL.to("#petal4",{scale: 1})
iconTL.to("#petal5",{scale: 1.2})
iconTL.to("#petal5",{scale: 1})
iconTL.to("#petal6",{scale: 1.2})
iconTL.to("#petal6",{scale: 1})
iconTL.to("#center",{scale: 1.2})
iconTL.to("#center",{scale: 1})





export function iconAnimation(){
    return iconTL;
}