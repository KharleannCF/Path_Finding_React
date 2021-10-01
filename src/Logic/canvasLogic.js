import Map from "./Map";
const numX = 50;
const numY = 50;
/* 
const map = Array(numX)
  .fill(null)
  .map(() => Array(numY));
 */
const map = new Map(numX, numY);

function start(canvas) {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const cellHeight = canvas.height / numY;
  const cellWidth = canvas.width / numX;
  map.set_Canvas_Properties(canvas, ctx, cellWidth, cellHeight);
  map.empty_Map();
  map.map[23][21] = 1;
  map.map[24][24] = 1;
  map.map[15][24] = 4;
  map.map[16][24] = 5;
  map.draw_Map();
  map.draw_Rect();
  return map;
}

export { start };
