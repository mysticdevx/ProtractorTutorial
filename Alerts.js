describe('Protractor alert steps', function() {

	it('open non angular js website Alerts', function() {

		// website is not angular thats why add below code.
		browser.waitForAngularEnabled(false);

		browser.get('https://rahulshettyacademy.com/AutomationPractice/');
		element(by.id("confirmbtn")).click().then(function() {
			browser.sleep(3000);
		});
		
		browser.switchTo().alert().accept().then(function() {
			browser.sleep(3000);
		});
		//dismiss for reject, cancel to close

	});

});