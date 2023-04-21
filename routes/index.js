const { OpenAIPath, OpenAIAPIEndPoints } = require("../app/common/constants");
const OpenAIController = require("../app/modules/openai/controller");
require("dotenv").config();

module.exports = function (app) {
	app.get("/", function (req, res) {
		res.send(
			`<html><head><title>Novus Server</title></head><body style="font-family: Poppins !important; background-color: black; padding: 0; margin:0;">` +
				`<div style="display: flex; flex:1; height: 100% ; justify-content: center; align-items: center; min-height: 100vh !important; font-size: 28px !important; color: #ff6e41 !important;">` +
				`Novus ${process.env.VERCEL_ENV} server is running...</div></body></html>`
		);
	});

	// OpenAI Endpoints
	app.post(OpenAIPath + OpenAIAPIEndPoints.analyzeTextIntent, (req, res) => {
		OpenAIController.analyzeTextIntent(req, res);
	});
};
