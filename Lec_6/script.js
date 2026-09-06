// let head1 = document.querySelector("h1").textContent;
// console.log(head1)
// let head1Text=head1.textContent
// let splittedText = head1.split("");
// console.log(head1)
// console.log(splittedText)
// let clutter = "";
// splittedText.forEach((elem) => {
// console.log("Hello")
//   clutter += elem;
// });
// console.log(clutter)
// head1.innerHTML = clutter;

function breakText() {
  let head1 = document.querySelector("h1");
  let headText = head1.textContent.split("");
  let clutter = "";
  let halfValue = Math.floor(headText.length / 2);
  console.log(halfValue);
  headText.forEach((elem, id) => {
    // clutter += `<span class="">${elem}</span>`;
    if (id < halfValue) clutter += `<span class="start">${elem}</span>`;
    else clutter += `<span class="end">${elem}</span>`;
  });
  head1.innerHTML = clutter;
}
breakText();

gsap.from("h1 .start", {
  y: 70,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
  //   stagger: -0.15,
});

gsap.from("h1 .end", {
  y: 70,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
});
