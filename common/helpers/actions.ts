import { browser, by, element, ElementFinder, promise } from 'protractor';
import { config } from '../../config';
import { Waits } from './waits';

/**
 * Wrappers for common used actions.
 */
export class Actions {
	/**
	 * Click to the element, when he is ready in DOM.
	 * @param locator Element finder on the page.
	 */
	public static async clickWhenElementClickable(locator: ElementFinder): Promise<void> {
		await Waits.waitForElementVisible(locator, config.defaultExplicitTimeouts.small);
		await Waits.waitForElementClickable(locator, config.defaultExplicitTimeouts.small);
		await locator.click();
	}

	/**
	 * Click to the DOM element by selector.
	 * @param selector Element selector.
	 */
	public static async clickDomElement(selector: string): Promise<void> {
		const locator = element(by.css(selector));
		await Waits.waitForElementVisible(locator, config.defaultExplicitTimeouts.small);
		await Waits.waitForElementClickable(locator, config.defaultExplicitTimeouts.small);
		await browser.executeScript(`document.querySelector('${selector}').click();`);
	}

	/**
	 * Clear filed and type value into filed
	 * @param locator Element finder on the page.
	 * @param value Value into field
	 */
	public static async clearAndSetValue(locator: ElementFinder, value: string): Promise<void> {
		await Waits.waitForElementVisible(locator, config.defaultExplicitTimeouts.small);
		await locator.clear();
		await locator.sendKeys(value);
	}

	/**
	 * Checks whether the element is visible on page. Returns true or false.
	 * @param elementToCheck Selector or ElementFinder instance of the element to check.
	 * @param containedText Text containing in element.
	 */
	public static isElementDisplayed(
		elementToCheck: string | ElementFinder,
		containedText?: string | RegExp
	): promise.Promise<boolean> {
		let elementFinder: ElementFinder;
		if (typeof elementToCheck === 'string') {
			elementFinder = containedText
				? element(by.cssContainingText(elementToCheck, containedText))
				: element(by.css(elementToCheck));
		} else {
			elementFinder = elementToCheck;
		}
		return elementFinder.isDisplayed().then(undefined, () => false);
	}
}
