import {loadFonts, Ball, Paddle, V_WIDTH, V_HEIGHT,  ctx} from "./index.js";

    
let scoreTop:number = 0;
let scoreBottom:number = 0;

    export function wallCheck(ball: Ball){
        if (ball.x+ball.width >= V_WIDTH-1 || ball.x <= 0){
            ball.dx *= -1;
            // ball.dy += 1;
        }
    }
    
    export function paddleCheck(ball: Ball, paddle:Paddle){
        if( 
        ball.x < paddle.x + paddle.width &&
        ball.x + ball.width > paddle.x &&
        ball.y < paddle.y + paddle.height &&
        ball.y + ball.height > paddle.y){
            ball.dy*=-1;
        }            
    }
    export function scorePoint(ball: Ball){
        if(ball.y+ball.height>=V_HEIGHT ){
            scoreBottom +=1;
            ball.reset();
            // ball.dy*=-1;
        }else if(ball.y<0){
            scoreTop += 1;
            ball.reset();
        }
    }
    export function winLose(ball:Ball){
        if(scoreTop >= 10 || scoreBottom >= 10){
            ball.reset();
            ball.speed = 0;
            // if()
        }
    }


    // USE FONT
    // loadFonts([
    //     { name: 'retro', url: './fonts/retro.ttf', format: 'truetype' },
    // ]);

    async function getFont() {
        // document.fonts.load('retro')
        ctx.fillStyle = "white";
        ctx.font = "20px retro";
        ctx.textAlign = "left";
    }

    export async function drawInstrution() {
        // console.log("CTX:", ctx);

      await document.fonts.ready;

    ctx.fillStyle = "white";
    ctx.font = "20px retro";
    ctx.textAlign = "left";
        ctx.fillText("Move paddle with ⬅ ➡ keys",1 , V_HEIGHT+40, V_WIDTH)
    }
    export async function drawScore() {
        getFont();
        ctx.fillText(scoreTop.toString(), V_WIDTH+5 , 50);
        ctx.fillText(scoreBottom.toString(), V_WIDTH+5, V_HEIGHT - 30);
    }
    // export async function drawStart(){
    //     getFont();
    //     ctx.fillRect(V_WIDTH/2,V_HEIGHT/2,50,50)
    // }
