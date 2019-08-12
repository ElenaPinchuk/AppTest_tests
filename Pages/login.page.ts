import { browser, by, element, ExpectedConditions as EC  } from 'protractor';
import * as faker from 'faker';
import { config } from '../config';

export class LoginPage {
	/**
	 * User name field element locator.
	 */
	public readonly usernameField = element.all(by.css('input[class*="form-control"]'));

	/**
	 * Password field element locator.
	 */
	public readonly passwordField = element(by.css('input[type = "password"]'));

	/**
	 * Login button element locator.
	 */
	public readonly loginButton = element(by.css('[type="button"]'));

	async openUrlLoginPage(): Promise<void> {
		browser.waitForAngularEnabled(false);
		browser.get(config.baseUrl);
	}

	async clearLoginPageValuesFields() {
		const iframe = element(by.css('[id="iframe"]'));
		await browser.wait(EC.visibilityOf(iframe), 10000, `Element "${iframe.locator()}" is not visible on the page`);
		browser.driver.switchTo().frame(0);
		const elementFinder = await this.usernameField.get(0);
		await browser.wait(EC.visibilityOf(elementFinder), 10000, `Element "${elementFinder.locator()}" is not visible on the page`);
		await elementFinder.clear();
		await this.passwordField.clear();
	}

	public async uniqueValue() {
		let text = "";
		let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		for (let i = 0; i < 4; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		return text;
	}

	public async loginByCredentials(): Promise<void> {
		const email = faker.internet.email();
		const password = faker.random.uuid();
		await this.clearLoginPageValuesFields();
		await this.usernameField.sendKeys(email);
		console.log(email);
		await this.passwordField.sendKeys(password);
		console.log(password);
		await this.loginButton.click();
	}
}