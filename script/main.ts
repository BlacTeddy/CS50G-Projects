import { paddleCheck, wallCheck, winLose } from "./collision.js";
import { V_WIDTH, V_HEIGHT, ctx } from "./constants.js";
import { Ball, Paddle} from "./index.js";


console.log(ctx);

const offsetX = 50;
const offsetY = 190;
ctx.setTransform(1, 0, 0, 1, offsetX, offsetY);

console.log("width = ",V_WIDTH,"height = ",V_HEIGHT,"scale = ",offsetX, "sety= ", offsetY)

let p_width = V_WIDTH/3

const ball = new Ball(V_WIDTH/2-10,V_HEIGHT/2-10,20,20);
const paddletop = new Paddle(V_WIDTH/2-p_width/2, 10/2, p_width, 10);
const paddlebtm = new Paddle(V_WIDTH/2-p_width/2, V_HEIGHT-15, p_width, 10);
paddletop.width

ball.render(ctx);   // ball.x and ball.y are in virtual space
paddletop.render(ctx); // same but for paddle
paddlebtm.render(ctx); // same but for paddle
// ctx.setTransform(1, 0, 0, 1, 0, 0);

for (let x = 0; x < V_WIDTH; x += 50) {
    ctx.fillStyle = "white";
    ctx.fillRect(x, 0, 2, V_HEIGHT);
}

for (let y = 0; y < V_HEIGHT; y += 100) {
    ctx.fillStyle = "white";
    ctx.fillRect(0, y, V_WIDTH, 2);
}

function inc_t(time:number){
let track_t = (time/1000);
    if (track_t>=1 && track_t<=1.1){
        ball.speed*=1.01
    }else if(track_t>=2 && track_t<=2.1){
        ball.speed*=1.1
    }
}

let lastTime = 0;

function gameLoop(time:number) {
    ctx.clearRect(0, 0, V_WIDTH+1, V_HEIGHT+1);

    // ball.x += ball.dx;
    // ball.y += ball.dy;
    const dt = (time-lastTime)/1000;
    lastTime = time;
    ball.update(dt);
    // inc_t(time);
    
// console.log("num = ",ball.dx, ball.dy)
 
// console.log(track_t.toFixed(4))

    wallCheck(ball);
    // paddleCheck(ball, paddletop)
    // paddleCheck(ball, paddlebtm)
    winLose(ball);

    ball.render(ctx);

    paddletop.render(ctx)
    paddlebtm.render(ctx)
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

