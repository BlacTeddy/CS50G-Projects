// MAP INPUT ##############################################################
let moveLeft = false;
let moveRight = false;
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        moveLeft = true;
    }
    if (event.key === "ArrowRight") {
        moveRight = true;
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowLeft") {
        moveLeft = false;
    }
    if (event.key === "ArrowRight") {
        moveRight = false;
    }
});
export {};
//# sourceMappingURL=input.js.map