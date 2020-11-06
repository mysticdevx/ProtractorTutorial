describe('Protractor alert steps', function() {

	it('open non angular js website Alerts', function() {

		browser.manage().window().maximize();
		
		// below is used to zoom in/out
		//browser.executeScript("document.body.style.zoom='50%'");
		
		// website is not angular thats why add below code.
		browser.waitForAngularEnabled(false);

		browser.get('https://rahulshettyacademy.com/AutomationPractice/').then(function(){
			browser.sleep(5000);
		});
		
		
		browser.switchTo().frame("iframe-name");
		
		//if id or name creates problem below can be used.
		browser.switchTo().frame(element(by.css("iframe[id='courses-iframe']")).getWebElement());
	
		//below code is no working because login is not seen.
		element(by.css("a[href*='/sign_in']")).getText().then(function(value) {
			console.log(value);
		})
		
		
		

	});

});