exports.httpConstants = {
	METHOD_TYPE: {
		POST: "POST",
		GET: "GET",
		PUT: "PUT",
	},
	HEADER_TYPE: {
		URL_ENCODED: "application/x-www-form-urlencoded",
		APPLICATION_JSON: "application/json",
	},
	HEADER_KEYS: {
		DEVICE_TYPE: "device-type",
		DEVICE_ID: "device-id",
		SESSION_TOKEN: "session-token",
		PUSH_TOKEN: "push-token",
	},
	DEVICE_TYPE: {
		ANDROID: "android",
		IOS: "ios",
		WEB: "web",
	},
	CONTENT_TYPE: {
		URL_ENCODE: "application/x-www-form-urlencoded",
	},
	WEBSERVICE_PATH: {
		SYNC_ATTENDANCE: "sync-attendance/",
		GET_USER_PERMISSION: "/get-user-permission",
	},

	RESPONSE_STATUS: {
		SUCCESS: true,
		FAILURE: false,
	},
	RESPONSE_CODES: {
		UNAUTHORIZED: 401,
		SERVER_ERROR: 500,
		NOT_FOUND: 404,
		OK: 200,
		NO_CONTENT_FOUND: 204,
		BAD_REQUEST: 400,
		FORBIDDEN: 403,
		GONE: 410,
		UNSUPPORTED_MEDIA_TYPE: 415,
		TOO_MANY_REQUEST: 429,
	},
	LIMB_SVC_END_POINT: {},
	LOG_LEVEL_TYPE: {
		INFO: "info",
		ERROR: "error",
		WARN: "warn",
		VERBOSE: "verbose",
		DEBUG: "debug",
		SILLY: "silly",
		FUNCTIONAL: "functional",
		HTTP_REQUEST: "http request",
	},
};

exports.apiSuccessMessage = {
	ADD_SUCCESS: "Invoice added successfully",
	GET_SUCCESS: "Invoice get successfully",
	UPDATE_SUCCESS: "Invoice updated successfully",
};

exports.apiFailureMessage = {
	INVALID_PARAMS: "Invalid Parameters",
	INVALID_REQUEST: "Invalid Request",
	INVALID_SESSION_TOKEN: "Invalid session token",
	INTERNAL_SERVER_ERROR: "Internal server Error",
	BAD_REQUEST: "Bad Request!",
	DEVICE_ID_OR_SESSION_TOKEN_EMPTY: "Device id or session token can't be empty or null",
	SESSION_GENERATION: "Unable to generate session!",
	SESSION_EXPIRED: "Session Expired!",
	USER_NOT_FOUND: "User not found!",
	ADD_FAIL: "Unable to add invoice",
	GET_FAIL: "Unable to get invoice",
	UPDATE_FAIL: "Unable to update invoice",
};

exports.OpenAIPath = "/api/openai";
exports.OpenAIAPIEndPoints = {
	analyzeTextIntent: "/analyze-text-intent",
};
