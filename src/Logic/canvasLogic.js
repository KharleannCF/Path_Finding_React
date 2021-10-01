import Map from "./Map";
import Cell from "./Cell";
import { UpdateMap } from "../Redux/Actions/Map";
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
	map.draw_Map();
	map.draw_Rect();
	return map;
}

function breadthFirst(start, map, mapRef, dispatch) {
	const reach = [];
	const visited = [];
	const cells = Array(map.length)
		.fill(null)
		.map(() => Array(map[0].length));
	for (let y = 0; y < map.length; y++) {
		for (let x = 0; x < map[y].length; x++) {
			cells[x][y] = new Cell(null, -1, x, y);
		}
	}
	cells[start[0]][start[1]].set_Prev(null, 0);
	visited.push(cells[start[0]][start[1]]);
	reach.push(cells[start[0] + 1][start[1]]);
	reach.push(cells[start[0] - 1][start[1]]);
	reach.push(cells[start[0]][start[1] + 1]);
	reach.push(cells[start[0]][start[1] - 1]);
	reach.forEach((elem) => {
		dispatch(UpdateMap(elem.x, elem.y, 4));
	});
	mapRef.current.draw_Map();
	return reach;
}

export { start, breadthFirst };
