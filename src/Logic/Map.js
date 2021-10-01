import { UpdateMap } from '../Redux/Actions/Map';
class Map {
  
	constructor(
		cellsX = 40,
		cellsY = 40,
		cellWidth = 10,
		cellHeight = 10,
		ctx,
		canvas
	) {
		this.cellsX = cellsX;
		this.cellsY = cellsY;
		this.cellWidth = cellWidth;
		this.cellHeight = cellHeight;
		this.ctx = ctx ?? undefined;
		this.canvas = canvas ?? undefined;
		this.map = Array(cellsX)
			.fill(null)
			.map(() => Array(cellsY));
    this.goal = [-1,-1]
    this.start = [-1,-1]
	}

	set_Canvas_Properties(canvas, ctx, cellWidth, cellHeight) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.cellWidth = cellWidth;
		this.cellHeight = cellHeight;
	}

	draw_Rect() {
		this.ctx.lineWidth = 1;
		this.ctx.fillStyle = 'rgb(0, 0, 0)';
		for (let y = 0; y < this.cellsY; y++) {
			for (let x = 0; x < this.cellsX; x++) {
				this.ctx.strokeRect(
					x * this.cellWidth,
					y * this.cellHeight,
					this.cellWidth,
					this.cellHeight
				);
			}
		}
	}
  set_Goal(x,y){
    this.goal = [x,y];
  }
  set_Start(x,y){
    this.start = [x,y];
  }
	draw_Map() {
		for (let y = 0; y < this.cellsY; y++) {
			for (let x = 0; x < this.cellsX; x++) {
				if (this.map[x][y] == 1) {
					this.ctx.fillStyle = 'rgb(0, 100, 0)';
				} else if (this.map[x][y] == 0) {
					this.ctx.fillStyle = 'rgb(255, 255, 255)';
				} else if (this.map[x][y] == 2) {
					this.ctx.fillStyle = 'rgb(150,150,0)';
				} else if (this.map[x][y] == 3) {
					this.ctx.fillStyle = 'rgb(150,0,150)';
				}else if (this.map[x][y] == 4) {
					this.ctx.fillStyle = 'rgb(250,150,0)';
				}else if (this.map[x][y] == 5) {
					this.ctx.fillStyle = 'rgb(0,100,200)';
				}
				this.ctx.fillRect(
					x * this.cellWidth,
					y * this.cellHeight,
					this.cellWidth,
					this.cellHeight
				);
				this.ctx.strokeRect(
					x * this.cellWidth,
					y * this.cellHeight,
					this.cellWidth,
					this.cellHeight
				);
			}
		}
	}

	empty_Map() {
		for (let y = 0; y < this.cellsY; y++) {
			for (let x = 0; x < this.cellsX; x++) {
				this.map[x][y] = 0;
			}
		}
	}
	print() {
		console.log(
			this.canvas,
			this.ctx,
			this.cellHeight,
			this.cellWidth,
			this.cellsY,
			this.cellsY,
			this.map
		);
	}
	get_Click(clientX, clientY) {
		const rect = this.canvas.getBoundingClientRect();
		const x = clientX - rect.left;
		const y = clientY - rect.top;
		const cellX =
			Math.floor(x / this.cellWidth) >= 0
				? Math.floor(x / this.cellWidth)
				: 0;
		const cellY =
			Math.floor(y / this.cellHeight) >= 0
				? Math.floor(y / this.cellHeight)
				: 0;
    return [cellX, cellY]
	}
}

export default Map;
