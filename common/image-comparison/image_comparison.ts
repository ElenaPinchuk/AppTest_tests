			import * as fs from 'fs';
			import * as log4js from 'log4js';
			import { $, browser } from 'protractor';
			import { config } from '../../config';
			declare const allure: any;
			const logger = log4js.getLogger('Visual tests');

			/**
				* Image comparison functions
				*/
			export default class ImageComparison {
				/**
					* Save screen
					* @param name Name of screen
					* @param options Options for screen
					*/
				public saveScreen(name: string, options?: object) {
					return browser.imageComparison.saveScreen(name, options);
				}

				/**
					* Save element screen
					* @param elm selector of element
					* @param name Name of screen
					* @param options Options for screen
					*/
				public saveElementScreen(elm: string, name: string, options?: object) {
					return browser.imageComparison.saveElement($(elm), name, options);
				}

				/**
					* Save full page screen
					* @param name Name of screen
					* @param options Options for screen
					*/
				public saveFullPageScreen(name: string, options?: object) {
					return browser.imageComparison.saveFullPageScreen(name, options);
				}

				/**
					* Check screen
					* @param name Name of screen
					* @param options Options for screen
					*/
				public checkScreen(name: string, options?: object) {
					return browser.imageComparison.checkScreen(name, options);
				}

				/**
					* Check screen of element
					* @param elm selector of element
					* @param name Name of screen
					* @param options Options for screen
					*/
				public checkElement(elm: string, name: string, options?: object) {
					return browser.imageComparison.checkElement($(elm), name, options);
				}

				/**
					* Check full page screen
					* @param name Name of screen
					* @param options Options for screen
					*/
				public checkFullPageScreen(name: string, options?: object) {
					return browser.imageComparison.checkFullPageScreen(name, options);
				}

				/**
					* Attach screenshots to allure reporter for visual tests
					* @param screenshotFileName Name of screen
					*/
				public async attachScreenToAllure(screenshotFileName: string): Promise<void> {
					const actualScreen = `${config.screenshotPath}/actual/desktop_chrome/${screenshotFileName}--${config.imageExtension}`;
					const diffScreen = `${config.screenshotPath}/diff/desktop_chrome/${screenshotFileName}--${config.imageExtension}`;
					const expectedScreen = `${config.screenshotPath}/expected/desktop_chrome/${screenshotFileName}--${config.imageExtension}`;
					await this.attachScreen(expectedScreen, screenshotFileName);
					await this.attachScreen(actualScreen, screenshotFileName);
					await this.attachScreen(diffScreen, screenshotFileName);
				}

				/**
					* Check screenshots in folder and attach
					* @param path Path to screenshot
					* @param screenshotFileName Name of screen
					*/
				public attachScreen(path: string, name: string): Promise<void> {
					return new Promise((resolve, reject) => {
						if (fs.existsSync(path)) {
							fs.readFile(path, 'base64', (error, data) => {
								try {
									(allure.createAttachment(name, () => {
										return new Buffer(data, 'base64');
									},                       'image/png'))();
									logger.info('attached----------' + path);
									resolve();
								} catch (error) {
									logger.error(error);
									reject();
								}
							});
						} else {
							logger.info('is not exist-----------' + path);
							resolve();
						}
					});
				}

				/**
					* Get element coordinates by selector
					* @param selector querySelector
					*/
				public getBoundingClientRect(selector: string) {
					return browser.executeScript(`return document.querySelector("${selector}").getBoundingClientRect()`);
				}

				/**
					* Click via executeScript
					* @param selector querySelector
					*/
				public clickElementByScript(selector: string) {
						return browser.executeScript(`return document.querySelector("${selector}").click()`);
					}
			}
