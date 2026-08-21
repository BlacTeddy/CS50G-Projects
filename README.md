# CS50G-Clone-Projects

## CS50’s Introduction to Game Development

"Focusing on the development of 2D and 3D interactive games. Students explore the design of such childhood games as Super Mario Bros., Legend of Zelda, and Portal in a quest to understand how video games themselves are implemented."

---

# Classic Pong Clone in TypeScript

A retro-style, two-player arcade Pong game built from scratch using TypeScript and the HTML5 Canvas API. This project implements strict type safety, a real-time game loop, smooth keyboard event handling, dynamic physics, and precise collision detection.

---

## Features
* **Strict Type Safety:** Leverages TypeScript interfaces and custom types for game entities (paddles, ball, scorekeeper) to prevent runtime bugs and ensure robust code architecture.
* **Custom Game Loop:** Utilizes `requestAnimationFrame` for smooth, high-performance rendering and consistent frame rates.
* **Physics & Collision Detection:** Features accurate ball-paddle and wall-bouncing logic with dynamic angle adjustments based on impact coordinates.
* **Responsive Controls:** Fluid keyboard event listeners for smooth simultaneous paddle movement.
* **Scoreboard Management:** Real-time tracking and rendering of player scores directly onto the canvas context.

---

## Tech Stack
* **Language:** TypeScript
* **Graphics API:** HTML5 Canvas (`CanvasRenderingContext2D`)
* **Build Tool / Bundler:** Vite / Webpack (or tsc compiler)
* **Styling:** CSS3

---

## Project Structure
```text
pong-typescript/
│
├── src/
│   ├── types.ts     # Interfaces and type definitions for game objects
│   ├── ball.ts      # Ball physics and movement logic
│   ├── collision.ts # Checks for collisions on paddles, ball, walls
│   ├── constants.ts # Game configurations and settings
│   ├── input.ts     # Track arrow keys to move paddle
│   ├── paddle.ts    # Paddle controls and rendering
│   ├── myFonts.ts   # Custom font loading and styling
│   └── main.ts      # Core game loop and canvas context management
├── index.html       # Main HTML file hosting the canvas
├── tsconfig.json    # TypeScript compiler configuration
└── README.md        # Project documentation
