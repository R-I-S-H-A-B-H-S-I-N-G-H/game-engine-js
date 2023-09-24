export class Particle {
	constructor(_x, _y, _size, _canvas) {
		this.canvas = _canvas;
		this.maxWidth = this.canvas.CANVAS_WIDTH;
		this.maxHeight = this.canvas.CANVAS_HEIGHT;
		this.color = {
			r: Math.random() * 200,
			g: Math.random() * 200,
			b: Math.random() * 200,
			a: Math.random() * 200,
		};

		this.x = _x;
		this.y = _y;
		this.size = _size;
		this.xSpeed = Math.random() * 5;
		this.ySpeed = Math.random() * 6;
	}

	updatePos = (otherParticles = []) => {
		if (this.x > this.maxWidth - this.size || this.x < 0 + this.size)
			this.xSpeed = this.xSpeed * -1;
		if (this.y > this.maxHeight - this.size || this.y < 0 + this.size)
			this.ySpeed = this.ySpeed * -1;

		for (let other of otherParticles) {
			if (other === this) continue;
		}

		this.x = this.x + this.xSpeed;
		this.y = this.y + this.ySpeed;
	};
	update = () => {
		this.canvas.fill(this.color.r, this.color.g, this.color.b);
		this.updatePos();
		this.canvas.circle(this.x, this.y, this.size);
	};
}
