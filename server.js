const app = require("express")();
const { Utils } = require("./app/utils/index.js");

global.webLog = Utils.webLog;
global.basedir = __dirname;

const PORT = process.env.PORT || 3001;

require("dotenv").config();
require("./config/express")(app);
require("./routes")(app);

Promise.all([])
	.then(listen)
	.catch((err) => {
		webLog("Error", err, "listening to server");
	});

function listen() {
	try {
		app.listen(PORT);
		console.log(`\nNovus server is running on port: ${PORT}\n`);
	} catch (err) {
		webLog("Error", err, "listen");
	}
}
