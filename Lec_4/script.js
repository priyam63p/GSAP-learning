let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let image=document.querySelector("#image")

main.addEventListener("mousemove", function (dets) {
  //   console.log("Event Performed");
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:1,
    ease:"back.out",
    
  });
});

image.addEventListener("mouseenter",()=>{
    cursor.innerHTML="View More"
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"#ffffff8a"

    })
})

image.addEventListener("mouseleave",()=>{
    cursor.innerHTML="View More"
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#ffffff"

    })
})
