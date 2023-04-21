const UtilityService = require("../subModule/tenantManagement/utils/index");
const { Utils } = require("../app/utils/index");
const HttpService = require("../app/services/http-service");
const { httpConstants } = require("../app/common/constants");
const Config = require("../config");

const getUserNameFromCustomRole = (customrole) => {
	let custom_role = JSON.parse(customrole);
	return custom_role;
};

const getUserName = async (req, res, next) => {
	try {
		const auth_access_token = req.headers["auth-access-token"];
		const auth_id_token = req.headers["auth-id-token"];

		if (!auth_access_token || !auth_id_token) {
			Utils.webLog("tenant Id", {}, "getUserName", 0, "Shivansh", "info");
			Utils.response(res, {}, "Token Not found", false, 401);
		}

		const accesstoken = auth_access_token.split(" ")[1];
		const idtoken = auth_id_token.split(" ")[1];

		let accessjwtResponse = UtilityService.decodeToken(accesstoken);
		let idjwtResponse = UtilityService.decodeToken(idtoken);

		let userName = idjwtResponse["cognito:username"];
		req.email = idjwtResponse.email;
		req.userName = userName;

		next();
	} catch (err) {
		console.log(err);
		Utils.response(res, {}, err, false, 401);
	}
};
module.exports = {
	getUserName,
};
