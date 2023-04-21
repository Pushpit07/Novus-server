module.exports = {
	DB: process.env.DB || "",
	IS_CONSOLE_LOG: "true",
	ENV: process.env.ENV || "dev",
	AMQP_HOST_REQUIRED: true,
};
