describe('Chain locators demo', function() {

	function calc(a, b, c) {
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);

		element.all(by.tagName("option")).each(function(item) {
			item.getAttribute("value").then(function(values) {

				if (values == c) {
					item.click();
				}

			})
		});

		element(by.id("gobutton")).click();
	}

	// functions should be inside describe

	it('open angular js website', function() {

		browser.get('http://juliemr.github.io/protractor-demo/');
		calc(3, 5, "ADDITION");
//		calc(3, 5, "DIVISION");
//		calc(3, 5, "MULTIPLICATION");
//		calc(3, 5, "SUBTRACTION");
//		calc(3, 5, "MODULO");
//		
		
		
		
		element.all(by.repeater("result in memory")).each(
				function(item) {
					item.element(by.css("td:nth-child(3)")).getText().then(
							function(text) {
								console.log("result is: " + text);
							});
				});

	});
	
	
	//below chain doesnot work
	it('chain for oprationse', function() {

		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys(5);
		element(by.model("second")).sendKeys(7);
		//BELOW LINE SHOULD CHANGE THE OPERATION
		element(by.model("operator")).element(by.css("option:nth-child(3)")).click;
		element(by.id("gobutton")).click();
		
		
		element.all(by.repeater("result in memory")).each(
				function(item) {
					item.element(by.css("td:nth-child(3)")).getText().then(
							function(text) {
								console.log("result is: " + text);
							});
				});

	});

});
