// actions and window handles

describe('Actions demo', function() {

	it('open posse website', function() {
		// JS is asynchronous, therefore console.log will execute all below
		// simultaneously
		browser.get('https://posse.com');
		element(by.model("userInputQuery")).sendKeys("river");
		
		//sendkeys should be inside mousemove
		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();
		
		
		//i am not sure is it working
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
		browser.sleep(3000);
		
		expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
		element(by.css("a[href*='/London/River Island']")).click;
		
		// after this go to windowhandles website

		
	
		});
		
	});
	
});