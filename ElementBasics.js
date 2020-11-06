describe('Protractor Element Demo', function() {

	it('Locators', function() {

		
		//below line is required for safari only. but doesnt create any problem for others.
		//this test doesnt run on safari at the moment. will check  later
		browser.resetUrl = 'about:blank';
	
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys("3");
		// just added sleep to see the action
		element(by.model("second")).sendKeys("5"); // .then(function(){browser.sleep(3000);});
		element(by.id("gobutton")).click();
		// if we stop here website immediately close after go button, so we need
		// to get the result.

		
		//jasmine takes care of promises, so in assertion no need to resolve promises.
		// all assertion methods on:https://jasmine.github.io/2.0/introduction
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");
		expect(element(by.css("h2[class='ng-binding']")).getText()).not.toBe("10");
		expect(element(by.css("h2[class='ng-binding']")).getText()).not.toBeNull();
		
		//this part is to print the result
		// before we print getText, we need to resolve the promise with then(). otherwise we
		// can not get the real result
		// see the then method below
		//*** how to convert string to int.??????????
		element(by.css("h2[class='ng-binding']")).getText().then(
				function(anyParametername) {
					console.log("the result is " + anyParametername);
				});
	});

});
