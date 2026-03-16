import {V_WIDTH, V_HEIGHT } from "./constants.js";


export class Paddle{
    x:number;
    y:number;
    width:number;
    height:number;
    // dy:number;
    speed:number;

    constructor( x:number, y:number, width:number, height:number, ) {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        // this.dy=dy
        this.speed=120;
    }
    // update(dt:number){
    //     if (this.dy< 0){
    //         this.y = Math.max(0,this.y+this.dy*dt)
    //     }else{
    //         this.y = Math.min(V_HEIGHT - this.height, this.y + this.dy*dt)
    //     }
    // }
     moveLeft(dt: number, moveL:boolean) {
        if(moveL===true){
            this.x -= this.speed * dt;
        }if(this.x<=0){
            this.x = 0;
        }
     }

    moveRight(dt: number, moveR:boolean) {
        if(moveR===true){
            this.x += this.speed * dt;
            // console.log("pad= ",(this.x+this.width).toFixed(1)," screen= ", V_WIDTH)
        }
        if((this.x+this.width) >= V_WIDTH){
            this.x =  V_WIDTH - this.width;
        }
    }
    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle="green"
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    
}



