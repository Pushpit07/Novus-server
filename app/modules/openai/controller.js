const { BLManager } = require("./blManager");
const { Utils } = require("../../utils/index");
const { httpConstants } = require("../../common/constants");

module.exports = {
	analyzeTextIntent: async (request, response) => {
		Utils.webLog(
			"analyzeTextIntent Entry",
			request.body,
			"analyzeTextIntent",
			1.0,
			"Pushpit",
			httpConstants.LOG_LEVEL_TYPE.INFO,
			[process.pid || null],
			"novus/AnalyzeTextIntentMicroService"
		);

		const [error, data] = await Utils.parseResponse(new BLManager().analyzeTextIntent(request.body));

		if (error) {
			Utils.webLog(
				"analyzeTextIntent Error",
				{ error: error },
				"analyzeTextIntent",
				1.0,
				"Pushpit",
				httpConstants.LOG_LEVEL_TYPE.ERROR,
				[process.pid || null],
				"novus/AnalyzeTextIntentMicroService"
			);
			return Utils.handleError(error, request, response);
		}

		Utils.webLog(
			"analyzeTextIntent Success",
			{ data },
			"analyzeTextIntent",
			1.0,
			"Pushpit",
			httpConstants.LOG_LEVEL_TYPE.VERBOSE,
			[process.pid || null],
			"novus/AnalyzeTextIntentMicroService"
		);

		return Utils.response(response, data, "analyzeTextIntent succeeded", true, 200);
	},
};
