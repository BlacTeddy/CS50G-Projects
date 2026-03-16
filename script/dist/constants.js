const canvas = document.getElementById("pong");
export const ctx = canvas.getContext("2d");
export const V_WIDTH = Number(((canvas.width + 1) / 1.15).toFixed(0));
export const V_HEIGHT = Number(((canvas.height + 1) / 1.15).toFixed(0));
console.log("canvas.w,h= ", canvas.width, " ", canvas.height, "\nV=", V_WIDTH, " ", V_HEIGHT);
export function randomOne() {
}
//# sourceMappingURL=constants.js.map