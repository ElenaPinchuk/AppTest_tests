/* tslint:disable:variable-name no-empty */

process.env.TS_NODE_FILES = 'true';
require('ts-node').register();

Object.defineProperty(exports, '__esModule', { value: true });
const jasmineSpecReporter = require('jasmine-spec-reporter');
const protractor = require('protractor');
const HtmlReporter = require('protractor-beautiful-reporter');
const path = require('path');
const join = require('path').join;
const fs = require('fs');
const log4js = require('log4js');
const loggerConfig = require('./logger.config');
let downloadsPath = path.resolve(__dirname, './downloads');
const CustomDisplaySpecProcessor = require('./common/helpers/custom-display-spec-processor').CustomDisplaySpecProcessor;
let nodeIp = '';
let config = {
	/**
	 * Base URL.
	 * Override it with run_config_custom.js
	 */
	baseUrl: 'http://localhost:5555/webpack-dev-server/',

	suites: {
		'all-tests': './Specs/**/*.ts'
	},

	framework: 'jasmine2',

	directConnect: true,

	capabilities: {
		browserName: 'chrome',
		version: '76',
		chromeOptions: {
			args: [
				'--test-type',
				'--use-fake-ui-for-media-stream',
				'--use-fake-device-for-media-stream',
				'--disable-popup-blocking',
				'--disable-notifications',
				'--unsafely-treat-insecure-origin-as-secure={urlOrigin}',
				'--no-default-browser-check',
				'--disable-infobars',
				'--no-proxy-server',
				'--disable-desktop-notifications',
				'--disable-geolocation',
				'--disable-web-security',
				'--allow-file-access',
				'--disable-extensions',
				'--ignore-certificate-errors',
				'--lang=en-GB',
				'--window-size=1920,1080',
				'--no-first-run',
				'--disable-default-apps',
				'--disable-translate',
				'--disable-background-timer-throttling',
				'--disable-renderer-backgrounding',
				'--disable-device-discovery-notifications',
				'--no-sandbox',
				'--disable-setuid-sandbox'
			],
			binary: '',
		},
		loggingPrefs: {
			browser: 'ALL',
		},
	},

	/**
	 * A callback function called once configs are read but before any
	 * environment setup. This will only run once, and before onPrepare.
	 */
	beforeLaunch: () => {
		if (fs.existsSync('./logs/Log4jsExecution.log')) {
			fs.unlinkSync('./logs/Log4jsExecution.log');
		}
		log4js.configure(loggerConfig);
	},


	onPrepare: async () => {
		await protractor.browser
			.manage()
			.timeouts()
			.implicitlyWait(1000);
		// Method for upload/download files using headless Chrome mode
		// TODO: Remove after fix chromium bug https://bugs.chromium.org/p/chromium/issues/detail?id=696481
		await browser.driver.sendChromiumCommand('Page.setDownloadBehavior', {
			behavior: 'allow',
			downloadPath: downloadsPath,
		});
		jasmine.getEnv().addReporter(
			new jasmineSpecReporter.SpecReporter({
				spec: { displayStacktrace: true },
				customProcessors: [CustomDisplaySpecProcessor],
				customOptions: {
					hostIp: nodeIp,
				},
			})
		);
		// TeamCity HTML reporter.
		jasmine.getEnv().addReporter(
			new HtmlReporter({
				baseDirectory: './reporter',
				takeScreenShotsForSkippedSpecs: false,
				takeScreenShotsOnlyForFailedSpecs: true,
			}).getJasmine2Reporter()
		);
	},

	logLevel: 'INFO',
	getPageTimeout: 10000,
	allScriptsTimeout: 30000,

	/**
	 * Sets timeout (ms) for every waits.
	 * @example
	 * public waitForElementVisible(locator: ElementFinder, ms: number = config.defaultExplicitTimeouts.small): promise.Promise<void> {
	 * return browser.wait(EC.visibilityOf(locator), ms, `Element "${locator.locator()}" is not visible on the page`);}
	 */
	defaultExplicitTimeouts: {
		small: 5000,
		medium: 15000,
		large: 30000,
	},

	/*
	Promise manager should be FALSE. https://www.protractortest.org/#/async-await
	*/
	SELENIUM_PROMISE_MANAGER: false,

	noGlobals: false,

	restartBrowserBetweenTests: false,

	jasmineNodeOpts: {
		showColors: true,
		displaySpecDuration: true,
		silent: true,
		defaultTimeoutInterval: 70000,
	},

	plugins: [
		{
			package: 'protractor-image-comparison',
			options: {
				baselineFolder: join(process.cwd(), 'screenshots/expected/'),
				formatImageName: `{tag}-{logName}-{width}x{height}`,
				screenshotPath: join(process.cwd(), 'screenshots/'),
				savePerInstance: true,
				autoSaveBaseline: false,
				clearRuntimeFolder: false,
				debug: false,
			},
		},
	],
};

exports.config = config;
