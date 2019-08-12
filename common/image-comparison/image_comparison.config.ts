/**
 * Documentation about default settings for image comparison
 */
class ImageComparisonConfig {
	/**
	 * Default options for save screen function
	 */
 public saveScreenConfig = {
		/**
		 * En/Disable all css animations in the application.
		 * If set to true all animations will be disabled before taking a screenshot and reset when done
		 */
  disableCSSAnimation: false,
		/**
		 * Hide scrollbars in the application. If set to true all scrollbars will be disabled before taking a screenshot.
		 * This is set to default true to prevent extra issues.
		 */
  hideScrollBars: true,
		/**
		 * This methods can hide 1 or multiple elements by adding the property visibility: hidden to them by providing an array of elements.
		 */
  hideElements: [],
		/**
		 * This methods can remove 1 or multiple elements by adding the property display: none to them by providing an array of elements.
		 */
  removeElements: []
 };
	/**
	 * Default options for save screen of element function
	 */
 public saveElementScreenConfig = {
		/**
		 * En/Disable all css animations in the application.
		 * If set to true all animations will be disabled before taking a screenshot and reset when done
		 */
  disableCSSAnimation: false,
		/**
		 * Hide scrollbars in the application. If set to true all scrollbars will be disabled before taking a screenshot.
		 * This is set to default true to prevent extra issues.
		 */
  hideScrollBars: true,
		/**
		 * This methods can hide 1 or multiple elements by adding the property visibility: hidden to them by providing an array of elements.
		 */
  hideElements: [],
		/**
		 * This methods can remove 1 or multiple elements by adding the property display: none to them by providing an array of elements.
		 */
  removeElements: [],
		/**
		 * An object that need to hold a top, right, bottom and a left amount of pixels that need to make the element cutout bigger.
		 */
  resizeDimensions: { top: 0, right: 0, bottom: 0, left: 0 }
 };

	/**
	 * Default options for save screen of element function
	 */
 public saveFullPageScreenConfig = {
		/**
		 * En/Disable all css animations in the application.
		 * If set to true all animations will be disabled before taking a screenshot and reset when done
		 */
  disableCSSAnimation: false,
		/**
		 * The timeout in milliseconds to wait after a scroll. This might help identifying pages with lazy loading.
		 */
  fullPageScrollTimeout: 1500,
		/**
		 * Hide scrollbars in the application. If set to true all scrollbars will be disabled before taking a screenshot.
		 * This is set to default true to prevent extra issues.
		 */
  hideScrollBars: true,
		/**
		 * This methods can hide 1 or multiple elements by adding the property visibility: hidden to them by providing an array of elements.
		 */
  hideElements: [],
		/**
		 * This methods can remove 1 or multiple elements by adding the property display: none to them by providing an array of elements.
		 */
  removeElements: [],
		/**
		 * This methods will hide 1 or multiple elements by adding the property visibility: hidden
		 * to them by providing an array of elements.
		 * This will be handy when a page for example holds sticky elements that will scroll with the page
		 * if the page is scrolled but will give an anoying effect when a fullpage screenshot is made
		 */
  hideAfterFirstScroll: []
 };

 /**
	 * Default options for check screen
	 */
 public checkScreenConfig = {
		/**
		 * Block out array with x, y, width and height values.
   * These block outs will be black areas on both images that will be excluded during comparison.
   * The values will automatically be transformed to the correct DPR-values.
		 */
  blockOut: [{height: 10, width: 5, x: 40, y: 65}, {height: 250, width: 500, x: 0, y: 35}],
		/**
		 * En/Disable all css animations in the application.
		 * If set to true all animations will be disabled before taking a screenshot and reset when done
		 */
  disableCSSAnimation: false,
		/**
		 * Hide scrollbars in the application. If set to true all scrollbars will be disabled before taking a screenshot.
		 * This is set to default true to prevent extra issues.
		 */
  hideScrollBars: true,
		/**
		 * This methods can hide 1 or multiple elements by adding the property visibility: hidden to them by providing an array of elements.
		 */
  hideElements: [],
		/**
		 * This methods can remove 1 or multiple elements by adding the property display: none to them by providing an array of elements.
		 */
  removeElements: []
 };

 /**
	 * Default options for check screen of element
	 */
 public checkElementConfig = {
		/**
		 * Block out array with x, y, width and height values.
   * These block outs will be black areas on both images that will be excluded during comparison.
   * The values will automatically be transformed to the correct DPR-values.
		 */
  blockOut: [{height: 10, width: 5, x: 40, y: 65}, {height: 250, width: 500, x: 0, y: 35}],
		/**
		 * En/Disable all css animations in the application.
		 * If set to true all animations will be disabled before taking a screenshot and reset when done
		 */
  disableCSSAnimation: false,
		/**
		 * Hide scrollbars in the application. If set to true all scrollbars will be disabled before taking a screenshot.
		 * This is set to default true to prevent extra issues.
		 */
  hideScrollBars: true,
		/**
		 * This methods can hide 1 or multiple elements by adding the property visibility: hidden to them by providing an array of elements.
		 */
  hideElements: [],
		/**
		 * This methods can remove 1 or multiple elements by adding the property display: none to them by providing an array of elements.
		 */
  removeElements: [],
  /**
		 * An object that need to hold a top, right, bottom and a left amount of pixels that need to make the element cutout bigger.
		 */
  resizeDimensions: { top: 0, right: 0, bottom: 0, left: 0 }
 };

 /**
	 * Default options for check full page screen
	 */
 public checkFullPageConfig = {
		/**
		 * Block out array with x, y, width and height values.
   * These block outs will be black areas on both images that will be excluded during comparison.
   * The values will automatically be transformed to the correct DPR-values.
		 */
 blockOut: [{height: 10, width: 5, x: 40, y: 65}, {height: 250, width: 500, x: 0, y: 35}],
		/**
		 * En/Disable all css animations in the application.
		 * If set to true all animations will be disabled before taking a screenshot and reset when done
		 */
 disableCSSAnimation: false,
  /**
		 * The timeout in milliseconds to wait after a scroll. This might help identifying pages with lazy loading.
		 */
 fullPageScrollTimeout: 1500,
		/**
		 * Hide scrollbars in the application. If set to true all scrollbars will be disabled before taking a screenshot.
		 * This is set to default true to prevent extra issues.
		 */
 hideScrollBars: true,
		/**
		 * This methods can hide 1 or multiple elements by adding the property visibility: hidden to them by providing an array of elements.
		 */
 hideElements: [],
		/**
		 * This methods can remove 1 or multiple elements by adding the property display: none to them by providing an array of elements.
		 */
 removeElements: [],
		/**
		 * This methods will hide 1 or multiple elements by adding the property visibility: hidden
		 * to them by providing an array of elements.
		 * This will be handy when a page for example holds sticky elements that will scroll with the page
		 * if the page is scrolled but will give an anoying effect when a fullpage screenshot is made
		 */
 hideAfterFirstScroll: []
	};

	/**
	 * Compare options for checkElement(),checkScreen() and checkFullPageScreen()
	 */
 public compareOptions = {
	/**
		* Compare images and discard alpha
		*/
		ignoreAlpha: false,

	/**
		* Automatically blockout the status and address bar during comparions.
		* This prevents failures on time, wifi or battery status. This is mobile only.
		*/
		blockOutStatusBar: false,

	/**
		* Automatically blockout the tool bar. This is mobile only.
		*/
		blockOutToolBar: false,

	/**
		* Compare images and discard anti aliasing.
		*/
		ignoreAntialiasing: false,

	/**
		* Even though the images are in colour, the comparison wil compare 2 black/white images
		*/
		ignoreColors: false,

	/**
		* Compare images and compare with red = 16, green = 16, blue = 16, alpha = 16, minBrightness=16, maxBrightness=240
		*/
		ignoreLess: false,

	/**
		* Compare images and compare with red = 0, green = 0, blue = 0, alpha = 0, minBrightness=0, maxBrightness=255
		*/
		ignoreNothing: false,

	/**
		* Compare images and it will ignore all pixels that have some transparency in one of the images
		*/
		ignoreTransparentPixel: false,

	/**
		* If true the return percentage will be like 0.12345678, default is 0.12
		*/
		rawMisMatchPercentage: false,

	/**
		* This will retun all compare data, not only the mismatch percentage
		*/
		returnAllCompareData: false,

	/**
		* Allowable value of misMatchPercentage that prevents saving image with differences
		*/
		saveAboveTolerance: false,

	/**
		* Comparing large images can lead to performance issues. When providing a number for the amount of pixels here (higher then 0),
		* the comparison algorithm skips pixels when the image width or height is larger than largeImageThreshold pixels.
		*/
		largeImageThreshold: 0
	};
}
