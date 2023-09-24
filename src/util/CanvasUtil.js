export class Canvas {
	constructor(height, width, canvasContainerId = "canvas") {
		this.CANVAS_HEIGHT = height;
		this.CANVAS_WIDTH = width;
		const canvasDiv = document.getElementById(canvasContainerId);
		const canvas = document.createElement("canvas");
		canvas.width = width; // Set width in pixels
		canvas.height = height; // Set height in pixels
		canvasDiv.appendChild(canvas);
		this.CANVAS_REF = canvas;
	}

	background(r = 255, g = 255, b = 255, a = 1) {
		this.fill(r, g, b, a);
		this.rect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
	}

	getContext() {
		if (!this.CANVAS_REF) return null;
		return this.CANVAS_REF.getContext("2d");
	}

	rect(x, y, _breadh, _length) {
		const cntx = this.getContext();
		cntx.fillRect(x, y, _length, _breadh);
	}

	fill(r = 255, g = 255, b = 255, a = 1) {
		const cntx = this.getContext();
		cntx.fill();
		cntx.fillStyle = `rgb(${r}, ${g}, ${b}, ${a})`;
	}

	square(x, y, side) {
		this.rect(x, y, side, side);
	}

	circle(x, y, r) {
		const ctx = this.getContext();
		ctx.beginPath();
		ctx.arc(x, y, r, 0, 2 * Math.PI);
	}
}
