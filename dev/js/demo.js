import {gsap} from "gsap";




gsap.to(".pink-box",{duration: 3, x: 400, borderRadius: "50px" });
gsap.to(".pink-box",{duration: .5, y: 400, borderRadius: "100px", delay: 1, rotation:360 });
gsap.to(".pink-box",{duration: 3, x: 700, borderRadius: "50px" });

gsap.from(".teal-box",{duration: 3, x: 200, y:200, borderRadius: "50px" });
gsap.to(".teal-box",{duration: .5, y: 200, delay: 1, rotation:360, borderRadius: "50px"});

gsap.to(".yellow-box",{duration: 3, x: 200, y:200, borderRadius: "50px" });
gsap.to(".yellow-box",{duration: .5, y: 10, delay: 1, rotation:90 });

