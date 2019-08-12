import {LoginPage} from '../pages/login.page';
import { RecordsPage } from '../pages/records.page';
import { browser } from 'protractor';


describe('Remove records filtered by brand', () => {
        let loginPage: LoginPage;
        let recordsPage: RecordsPage;

        beforeEach(async () => {
                loginPage = new LoginPage();
                recordsPage = new RecordsPage();
                browser.ignoreSynchronization = true;
		browser.waitForAngularEnabled(false);
                await loginPage.openUrlLoginPage();
                await loginPage.loginByCredentials();
        });

        it('should remove records by selected filter', async () => {
                await recordsPage.fillBrandField('Хозяин');
                const column = recordsPage.brandColumn;
                expect(await column.last().getText()).toBe('Хозяин СРК-21В');
                await recordsPage.removeBrandField('Хозяин СРК-21В');
                expect(await recordsPage.brandColumn).not.toContain('Хозяин СРК-21В');
        });
});