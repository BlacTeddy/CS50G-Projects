import {V_WIDTH, V_HEIGHT } from "./constants.js";

export class Paddle{
    x:number;
    y:number;
    width:number;
    height:number;
    dy:number;
    

    constructor( x:number, y:number, width:number, height:number, dy:number=0) {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.dy=dy
    }
    update(dt:number){
     // math.max here ensures that we're the greater of 0 or the player's current calculated Y position when pressing up so that we don't
     // go into the negatives; the movement calculation is simply our previously-defined paddle speed scaled by dt
        if (this.dy< 0){
            this.y = Math.max(0,this.y+this.dy*dt)
        }else{
            this.y = Math.min(V_HEIGHT - this.height, this.y + this.dy*dt)
        }
    }
    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle="green"
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }


}



