import { LoginPage } from '../pages/login.page';
import { RecordsPage } from '../pages/records.page';
import { browser } from 'protractor';

describe('Login to testApp', () => {
	let loginPage: LoginPage;
	let recordsPage: RecordsPage;

	beforeAll(() => {
		loginPage = new LoginPage();
		recordsPage = new RecordsPage();
		browser.ignoreSynchronization = true;
		browser.waitForAngularEnabled(false);
		loginPage.openUrlLoginPage();
	});

	it('should login to testApp with any credentials', async () => {
		await loginPage.loginByCredentials();
		expect(await recordsPage.recordsTable.isDisplayed()).toBe(true);
	});
});
