const path = require("path");
module.exports = {
	entry: {
		main: "./src/index.js",
	},
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "public"),
	},
	mode: process.env.NODE_ENV === "production" ? "production" : "development",
};