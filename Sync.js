describe('Protractor Syncronization steps', function() {

	it('open angula js website', function() {

		browser.waitForAngularEnabled(false);
		browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');

		element(by.css("a[href*='loadAjax']")).click();

		//to wait for specific condition
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.invisibilityOf(element(by.id("loader"))), 5000);

		element(by.id("results")).getText().then(function(text) {
			console.log("expected text is: " + text);
		});

	});

});