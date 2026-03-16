import { paddleCheck, wallCheck, scorePoint, drawScore, drawInstrution, winLose } from "./collision.js";
import { V_WIDTH, V_HEIGHT, ctx } from "./constants.js";
import { Ball, Paddle, loadFonts } from "./index.js";
const offsetX = 1;
const offsetY = 0;
// ctx.setTransform(1, 0, 0, 1, offsetX, offsetY);
ctx.translate(offsetX, offsetY);
// console.log(ctx);
// console.log("width = ",V_WIDTH,"height = ",V_HEIGHT,"scale = ",offsetX, "sety= ", offsetY)
let p_width = V_WIDTH / 4; //divid by larger num, makes paddle smaller
// MAKE MY ITEMS
const ball = new Ball(V_WIDTH / 2 - 5, V_HEIGHT / 2 - 5, 10, 10);
const paddletop = new Paddle(V_WIDTH / 2 - p_width / 2, 10 / 2, p_width, 6);
const paddlebtm = new Paddle(V_WIDTH / 2 - p_width / 2, V_HEIGHT - 10, p_width, 6);
// TEST RENDER ITEMS
ball.render(ctx); // ball.x and ball.y are in virtual space
paddletop.render(ctx); // same but for paddle
paddlebtm.render(ctx); // same but for paddle
drawInstrution();
// LOAD FONT ##############################################################
// document.fonts.ready.then(() => {
//     requestAnimationFrame(gameLoop);
// });
// loadFonts([
//   { name: 'retro', url: './fonts/retro.ttf', format: 'truetype' },
// ]);
// MAP INPUT ##############################################################
const startBtn = document.getElementById("startPong");
startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    requestAnimationFrame(gameLoop);
});
// MAP INPUT ##############################################################
let moveLeft = false;
let moveRight = false;
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        moveLeft = true;
    }
    if (event.key === "ArrowRight") {
        moveRight = true;
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowLeft") {
        moveLeft = false;
    }
    if (event.key === "ArrowRight") {
        moveRight = false;
    }
});
//#######################################################################
//TEST V_SPACE LAYOUT
/*
for (let x = 0; x < V_WIDTH; x += 50) {
    ctx.fillStyle = "white";
    ctx.fillRect(x, 0, 2, V_HEIGHT);
}
for (let y = 0; y < V_HEIGHT; y += 100) {
    ctx.fillStyle = "white";
    ctx.fillRect(0, y, V_WIDTH, 2);
}*/
// TEST INCRENSE SPEED 
function inc_t(time) {
    let track_t = Number((time / 1000).toFixed(5));
    if (track_t >= 1 && track_t <= 1.1) {
        ball.speed *= 1.01;
    }
    else if (track_t >= 2 && track_t <= 2.1) {
        ball.speed *= 1.1;
    }
}
// FOR SYNC TIME WITH LAST TIME
let lastTime = 0;
// let start = true;
// START GAME ##############################################################
async function startGame() {
    await loadFonts([
        { name: 'retro', url: './fonts/retro.ttf', format: 'truetype' }
    ]);
    // 2. Wait for browser to register fonts
    await document.fonts.ready;
    console.log("Fonts loaded. Waiting for player...");
    await new Promise(resolve => window.onload = resolve);
    // 3. Now attach the Start button listener
    startBtn.addEventListener("click", () => {
        // Hide the button if you want
        startBtn.style.display = "none";
        // Start the game loop
        requestAnimationFrame(gameLoop);
    });
}
// GAME LOOP ###############################################################
function gameLoop(time) {
    ctx.clearRect(-1, 0, V_WIDTH + 100, V_HEIGHT + 50);
    ctx.fillStyle = "white";
    ctx.fillRect(0, V_HEIGHT, V_WIDTH + 1, 1); // LINE ATT THE BOTTOM
    ctx.fillRect(V_WIDTH, 0, 1, V_HEIGHT + 1); //LINE AT THE RIGHT – GOING DOWN
    // ctx.fillRect(0, 1, 1, 1);
    // DISPLAY SCORE AS NUMBER
    drawScore();
    drawInstrution();
    //UPDATE TIME 
    const dt = (time - lastTime) / 1000;
    lastTime = time;
    ball.update(dt);
    // inc_t(time); // TEST
    // console.log("num = ",ball.dx, ball.dy)
    // console.log(track_t.toFixed(4))
    // Check list 
    wallCheck(ball);
    paddleCheck(ball, paddletop);
    paddleCheck(ball, paddlebtm);
    scorePoint(ball);
    winLose(ball);
    paddlebtm.moveLeft(dt, moveLeft);
    paddlebtm.moveRight(dt, moveRight);
    // paddletop.x+=1;
    // RENDER ITEMS
    ball.render(ctx);
    paddletop.render(ctx);
    paddlebtm.render(ctx);
    // RUN GAME LOOP
    requestAnimationFrame(gameLoop);
} // ########################################################################
startGame();
// requestAnimationFrame(gameLoop);
//# sourceMappingURL=main.js.map