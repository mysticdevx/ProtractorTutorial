//repeater, chain locators, and css for identical tags

describe('Chain locators demo', function() {

	it('open angular js website', function() {

		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("5");
		element(by.id("gobutton")).click();
		element(by.repeater("result in memory")).element(
				by.css("td:nth-child(3)")).getText().then(function(text) {
			console.log(text);
		});
		
	

	});

});


//below how to convert get text to int?

function add(a,b){
	
	browser.get('http://juliemr.github.io/protractor-demo/');
	element(by.model("first")).sendKeys(a);
	element(by.model("second")).sendKeys(b);
	element(by.id("gobutton")).click();
	
	expect(element(by.repeater("result in memory")).element(
			by.css("td:nth-child(3)")).getText()).toBe(a+b);
	
	
	element(by.repeater("result in memory")).element(
			by.css("td:nth-child(3)")).getText().then(function(text) {
		console.log(text);
	});
	
	
}