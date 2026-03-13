export declare class Ball {
    x: number;
    y: number;
    width: number;
    height: number;
    radius: number;
    dx: number;
    dy: number;
    speed: number;
    constructor(x: number, y: number, width: number, height: number);
    reset(): number;
    update(dt: number): void;
    render(ctx: CanvasRenderingContext2D): void;
}
//# sourceMappingURL=ball.d.ts.map