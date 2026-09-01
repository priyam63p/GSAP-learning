# GSAP Learning Journey 🚀

Welcome to my GSAP (GreenSock Animation Platform) learning repository. I started learning GSAP on August 31, 2026, and this space serves as a personal tracker for my progress, code snippets, and animation experiments.

## 📁 Repository Structure

The repository is organized chronologically by lectures and concepts to document my progression:

*   **`Lec_1/`**: Introduction to GSAP, basic tweens (`gsap.to()`, `gsap.from()`), and gsap.timeline().
*   **`Lec_2/`**: ScrollTrigger - used to animate elements on the basis of scrolling.
  * **Properties of ScrollTrigger:**
    * `trigger`: Select the element you want to trigger.
    * `scroller`: Body most of the time.
    * `start`: Animation start point.
    * `end`: Animation end point.
    * `markers`: Boolean (helps us perfectly align the animation; can be removed later).
    * `scrub`: Boolean or a number between 1-5 (makes the animation go back and forth with the scroll).
    * `pin`: Pins the page while animating elements.
  * **Note:** When using the `pin` property, make sure the trigger is the parent element.
