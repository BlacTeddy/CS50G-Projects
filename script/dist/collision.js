import { V_WIDTH, V_HEIGHT } from "./index.js";
let scoreTop = 0;
let scoreBottom = 0;
export function wallCheck(ball) {
    if (ball.x + ball.width >= V_WIDTH - 1 || ball.x <= 0) {
        ball.dx *= -1;
        // ball.dy += 1;
    }
}
export function paddleCheck(ball, paddle) {
    if (ball.x < paddle.x + paddle.width &&
        ball.x + ball.width > paddle.x &&
        ball.y < paddle.y + paddle.height &&
        ball.y + ball.height > paddle.y) {
        ball.dy *= -1;
    }
}
export function winLose(ball) {
    if (ball.y + ball.height >= V_HEIGHT || ball.y < 0) {
        scoreBottom += 1;
        ball.reset();
        // ball.dy*=-1;
    }
    else if (ball.y < 0) {
        scoreTop += 1;
        ball.reset();
    }
}
//# sourceMappingURL=collision.js.map