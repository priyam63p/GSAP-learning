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
- **Lec_3/** : Scalable Vector Graphic (SVG) - used to make 2D graphics.
  - **SVG Elements:**
    - `svg` : Treated like a container and it has attributes `height` and `width`.
    - `path` : Child of `svg` element, it can be used to create lines, curves, arcs, and more.
      - `stroke` : Attribute used to provide color to the line or path.
      - `d` : Attribute containing a series of commands and parameters used by these commands.
      - *Example:* `<path d="M x y Q x1 y1 x2 y2" stroke="black" fill="transparent" />`
  - **Path Commands & Curves:**
    - `M` : "Move to" command taking `x` and `y` axis coordinates.
    - `C` : Used for Cubic Curves (complex, requires two control points).
    - `Q` : Used for Quadratic Curves (simpler than cubic, requires one control point).
  - **GSAP Properties:**
    - `attr: {key: value}` : Used to manipulate attributes of an HTML element. It contains a value as an object in which the key is the attribute itself and the value is the new value of the attribute.
    - `ease` : Used to provide easing to an element. There are multiple predefined easing functions you can check out on the GSAP official website.
