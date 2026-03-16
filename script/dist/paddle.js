import { V_WIDTH } from "./constants.js";
export class Paddle {
    x;
    y;
    width;
    height;
    // dy:number;
    speed;
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        // this.dy=dy
        this.speed = 120;
    }
    // update(dt:number){
    //     if (this.dy< 0){
    //         this.y = Math.max(0,this.y+this.dy*dt)
    //     }else{
    //         this.y = Math.min(V_HEIGHT - this.height, this.y + this.dy*dt)
    //     }
    // }
    moveLeft(dt, moveL) {
        if (moveL === true) {
            this.x -= this.speed * dt;
        }
        if (this.x <= 0) {
            this.x = 0;
        }
    }
    moveRight(dt, moveR) {
        if (moveR === true) {
            this.x += this.speed * dt;
            // console.log("pad= ",(this.x+this.width).toFixed(1)," screen= ", V_WIDTH)
        }
        if ((this.x + this.width) >= V_WIDTH) {
            this.x = V_WIDTH - this.width;
        }
    }
    render(ctx) {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
//# sourceMappingURL=paddle.js.map