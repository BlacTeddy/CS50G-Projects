export declare class Paddle {
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;
    constructor(x: number, y: number, width: number, height: number);
    moveLeft(dt: number, moveL: boolean): void;
    moveRight(dt: number, moveR: boolean): void;
    render(ctx: CanvasRenderingContext2D): void;
}
//# sourceMappingURL=paddle.d.ts.map