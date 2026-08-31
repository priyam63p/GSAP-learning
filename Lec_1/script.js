// gsap.to("#box", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "yellow",
//   borderRadius:"50%",
//   scale:"0.5",
//   rotate:360,
//   repeat:2,
//   yoyo:true
// });

// gsap.from("#box2", {
//   x: 400,
//   y: 500,
//   duration: 2,
//   delay: 1,
//   rotate: 270,
// });

// gsap.from("h1",{
//     color:"pink",
//     duration:2,
//     delay:1,
//     opacity:0,
//     stagger:0.8

// })

// gsap.to("h1",{
//     color:"pink",
//     duration:2,
//     delay:3,
   

// })


// const tl=gsap.timeline()

// tl.to("#box1",{
//     x:1200,
//     rotate:360,
//     duration:2,
//     delay:1.2

// })

// tl.to("#box2",{
//     x:1200,
//     duration:2,
//     delay:1.2,
//     backgroundColor:"pink"

// })

// tl.to("#box3",{
//     x:1200,
//     rotate:360,
//     duration:2,
//     delay:1.2

// })



const tl=gsap.timeline()

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5

})

tl.from("h4",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.8

})

tl.from("h1",{
    y:30,
    duration:0.8,
    opacity:0,
    scale:0.2
})

tl.to("h1",{
   color:"pink"
})
