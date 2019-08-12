import { browser, ElementFinder, ExpectedConditions as EC } from 'protractor';

import { config } from '../../config';

/**
 * Waits for different cases on page.
 */
export class Waits {

	/**
	 * Wait for element visible on the page.
	 * @param element Element finder on the page.
	 * @param ms Time for condition.
	 */
	public static async waitForElementVisible(
		element: ElementFinder,
		ms: number = config.defaultExplicitTimeouts.medium
	): Promise<boolean> {
		return browser.wait(EC.visibilityOf(element), ms, `Element "${element.locator()}" is not visible on the page`);
	}

	/**
	 * Wait for element is not visible on the page.
	 * @param element Element finder on the page.
	 * @param ms Time for condition.
	 */
	public static async waitForElementIsNotVisible(
		element: ElementFinder,
		ms: number = config.defaultExplicitTimeouts.medium
	): Promise<boolean> {
		return browser.wait(EC.invisibilityOf(element), ms, `Element "${element.locator()}" stays visible on the page`);
	}

	/**
	 * Wait for element present in DOM.
	 * @param element Element finder on the page.
	 * @param ms Time for condition.
	 */
	public static async waitForElementPresentInDom(
		element: ElementFinder,
		ms: number = config.defaultExplicitTimeouts.medium
	): Promise<boolean> {
		return browser.wait(EC.presenceOf(element), ms, `Element "${element.locator()}" is not present in DOM`);
	}

	/**
	 * Wait for element clickable.
	 * @param element Element finder on the page.
	 * @param ms Time for condition.
	 */
	public static async waitForElementClickable(
		element: ElementFinder,
		ms: number = config.defaultExplicitTimeouts.medium
	): Promise<boolean> {
		return browser.wait(EC.elementToBeClickable(element), ms, `Element "${element.locator()}" is not clickable in DOM`);
	}

	/**
	 * Wait for element selected.
	 * @param element Element finder on the page.
	 * @param ms Time for condition.
	 */
	public static async waitForElementSelected(
		element: ElementFinder,
		ms: number = config.defaultExplicitTimeouts.medium
	): Promise<boolean> {
		return browser.wait(EC.elementToBeSelected(element), ms, `Element "${element.locator()}" is not selected in DOM`);
	}

	/**
	 * Wait for url contains.
	 * @param url url or it's part.
	 * @param ms Time for condition.
	 */
	public static async waitForUrlContains(
		url: string,
		ms: number = config.defaultExplicitTimeouts.medium
	): Promise<boolean> {
		return browser.wait(EC.urlContains(url), ms, `Url "${url}" is not contained`);
	}

	/**
	 * Wait for text to be present in element's value.
	 * @param element Element finder on the page.
	 * @param text Text in element's value
	 * @param ms Time for condition.
	 */
	public static async waitForTextToBePresentInElementValue(
		element: ElementFinder,
		text: string,
		ms: number = config.defaultExplicitTimeouts.medium
	): Promise<boolean> {
		const message = `Value ${text} is not present in element ${element.locator()}`;
		return browser.wait(EC.textToBePresentInElementValue(element, text), ms, message);
	}

}
