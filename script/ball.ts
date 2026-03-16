import {V_WIDTH, V_HEIGHT } from "./constants.js";

export class Ball{
    x:number;
    y:number;
    width:number;
    height:number;

    // visual circle
    radius: number;

    // movement
    dx:number;
    dy:number;
    // speed
    speed:number;

    constructor( x:number, y:number, width:number, height:number, ) {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.radius=width/2;
        this.speed=60;
        this.dx=this.speed*2;
        this.dy=this.speed*2.5;

        
    // collides(paddle: { x: number; y: number; width: number; height: number }): boolean {
    // //  first, check to see if the left edge of either is farther to the right
    // //  than the right edge of the other

    //     // check horizontal separation
    //     if (this.x > paddle.x + paddle.width || paddle.x > this.x + this.width) {
    //         return false;
    //     }
    // // then check to see if the bottom edge of either is higher than the top
    // // edge of the other
    //     // check vertical separation
    //     if (this.y > paddle.y + paddle.height || paddle.y > this.y + this.height) {
    //         return false;
    //     }

    //     // otherwise, they overlap
    //     return true;
    }    
    reset(){
        this.x = V_WIDTH / 2 - this.width;
        this.y = V_HEIGHT / 2 - this.height;
        // reverse direction so it doesn’t always go the same way
        this.dx = (Math.random() > 0.5 ? 1 : -1) *this.speed*2;
        this.dy = (Math.random() > 0.5 ? 1 : -1) *this.speed*2;
        return(this.dx)
    }
    update(dt:number){
        this.x=this.x+this.dx* dt;
        this.y=this.y+this.dy* dt;
        
    }
    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

/*Rendering uses the circle in box

    render(ctx: CanvasRenderingContext2D) {
        const cx = this.x + this.width / 2;
        const cy = this.y + this.height / 2;

        ctx.beginPath();
        ctx.arc(cx, cy, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
*/
}