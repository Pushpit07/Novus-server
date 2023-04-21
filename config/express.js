const cors = require("cors");
const compression = require("compression");
const express = require("express");

module.exports = function (app) {
	app.use(express.urlencoded({ limit: "50mb", extended: true }));
	app.use(express.json({ limit: "50mb", extended: true }));
	app.use(cors());
	app.use(compression(9));
	app.set("etag", false);
};
