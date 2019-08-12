module.exports = {
	appenders: {
		out: { type: 'log4js-protractor-appender' },
		app: { type: 'file', filename: './logs/Log4jsExecution.log' },
	},
	categories: {
		default: { appenders: ['out', 'app'], level: 'debug' },
	},
};
