import { Particle } from "./Particle/Particle";
import { Canvas } from "./util/CanvasUtil";

let particleList = [];
let canvas;
function start(params) {
	//runs single time
	canvas = new Canvas(400, 400);
	for (let i = 0; i <= 100; i++) {
		particleList.push(
			new Particle(
				10 + 50 * Math.random(),
				10 + 80 * Math.random(),
				10 * Math.random() + 10,
				canvas,
			),
		);
	}
}

function update(params) {
	//runs continuosly
	canvas.background(200, 0, 100);
	for (let particle of particleList) particle.update();
}

start();
setInterval(update, 10);
