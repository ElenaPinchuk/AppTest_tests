import { browser, by, element } from 'protractor';


export class RecordsPage {
  
    /**
	 * Filter button element locator.
	 */
	public readonly filterButton = element(by.css('button[class="btn btn-default"]'));

    /**
	 * Brand field element locator.
	 */
    public readonly brandField = element.all(by.css('[class=table] input'));

    /**
	 * Remove button element locator.
	 */
    public readonly removeButton = element(by.css('[class="btn btn-warning"]'));

    /**
	 * Recors table element locator.
	 */
    public recordsTable = element(by.css('[class=success]'));
     /**
	 * Filter column element locator.`
	 */
    public readonly brandColumn = element.all(by.css('[class="active brand"]'));

    /**
	 * Performs search by specified name.
	 */
    public async fillBrandField(brandName: string): Promise<void> {
		await this.brandField.get(0).clear();
        await this.brandField.get(0).sendKeys(brandName);
        await this.filterButton.click();
    }

    public async removeBrandField(brandName: string): Promise<void> {
        await this.removeButton.click();
    }
}