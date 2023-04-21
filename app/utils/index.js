"use strict";
const Config = require("../../config");
const cryptoRandomString = require("crypto-random-string");

class Utils {
	static response(res, data, message, success, code = 200) {
		let messageObj = {
			msg: message,
		};

		let responseObj = {
			responseData: data,
			message: [messageObj],
			success: success,
			code: code,
		};
		res.format({
			json: () => {
				res.send(responseObj);
			},
		});
	}

	static webLog(message, payload = {}, methodName, requestID = 0, developerName = "Developer", type = "info", tags, service) {
		if (Config.IS_CONSOLE_LOG === "true") {
			console.log({
				message: message,
				developerAlias: developerName,
				requestID: requestID,
				type: type,
				timestamp: new Date(),
				payload: payload,
				tags: tags,
				methodName: methodName,
				service: service,
			});
		}
	}

	static async parseResponse(promise) {
		return promise
			.then((data) => {
				return [null, data];
			})
			.catch((err) => [err]);
	}

	static handleError(err, req, res) {
		if (!res) return false;
		err = err || {};
		console.log(err);
		const msg = err.message ? err.message : "error message";
		const code = err.code ? err.code : 502;
		this.response(res, {}, msg, false, code);
	}

	static trimCharsfromBegining = (invoiceNo) => {
		let char_arr = [...invoiceNo];

		for (let [index, val] of char_arr.entries()) {
			if (!/[A-Za-z]/.test(val)) {
				return char_arr.splice(index).join("");
			}
		}
	};

	static removespaces = (text) => {
		if (text === undefined) return `Unknown${Date.now()}`;

		let newText = "";

		for (let char of text) {
			if (char === " ") {
				continue;
			} else {
				newText += char;
			}
		}

		if (newText === "") return `Unknown${Date.now()}`;
		else return newText;
	};

	static getRandomAlphaNumericId(length) {
		return cryptoRandomString(Number(length));
	}
}
exports.Utils = Utils;
