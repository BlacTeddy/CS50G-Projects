export declare class Paddle {
    x: number;
    y: number;
    width: number;
    height: number;
    dy: number;
    constructor(x: number, y: number, width: number, height: number, dy?: number);
    update(dt: number): void;
    render(ctx: CanvasRenderingContext2D): void;
}
//# sourceMappingURL=paddle.d.ts.map