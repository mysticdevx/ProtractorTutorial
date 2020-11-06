describe('Chain locators demo', function() {

	function add(a, b) {
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	}
	
	//functions should be inside describe
	
	
	
	it('open angular js website', function() {

		browser.get('http://juliemr.github.io/protractor-demo/');
		add(3, 5);
		add(5, 7);
		add(7, 9);

		// finding all elements and counting the numbers
		// since count is grabbing value from browser, we need to resolve the
		// promise.
		// resolving promise means adding then and defining function by sending
		// parameter in it
		element.all(by.repeater("result in memory")).count().then(
				function(count) {
					console.log("number of rows : " + count);
				});

		// after finding elements, loop over them by each method
		// all-> count gives the count
		// all-> each iterates over the elements
		//below console log iterates 3 times because there are three rows on the table
		element.all(by.repeater("result in memory")).each(
				function(item) {
					item.element(by.css("td:nth-child(3)")).getText().then(
							function(text) {
								console.log("result is: " + text);
							});
				});

		// below we get the last result on the table
		element.all(by.repeater("result in memory")).last().element(
				by.css("td:nth-child(3)")).getText().then(function(text) {
			console.log("last result is: " + text);
		});

		// below we get the second result - index 1- on the table
		element.all(by.repeater("result in memory")).get(1).element(
				by.css("td:nth-child(3)")).getText().then(function(text) {
			console.log("second result is: " + text);
		});

	});

});


