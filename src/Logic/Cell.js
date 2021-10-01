class Cell {
	constructor(prev, weight, x, y, visited = false) {
		this.prev = prev;
		this.weight = weight;
		this.x = x;
		this.y = y;
		this.visited = visited;
	}
	set_Prev(cell, weight) {
		this.prev = cell;
		this.weight = weight;
		this.visited = true;
	}
}

export default Cell;
