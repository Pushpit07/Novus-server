const path = require("path");
const extend = require("util")._extend;
const local = require("./env/local");
const development = require("./env/development");
const preview = require("./env/preview");
const test = require("./env/test");
const production = require("./env/production");
const defaults = {
	root: path.normalize(__dirname + "/.."),
};

/**
 * Expose
 */

module.exports = {
	development: extend(development, defaults),
	preview: extend(preview, defaults),
	test: extend(test, defaults),
	production: extend(production, defaults),
	local: extend(local, defaults),
}[process.env.VERCEL_ENV || "development"];
