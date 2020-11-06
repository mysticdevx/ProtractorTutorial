describe('Protractor baby steps', function() {

	it('open angula js website', function() {
		// JS is asynchronous, therefore console.log will execute all below
		// simultaneously
		browser.get('https://angularjs.org');
		browser.get('http://juliemr.github.io/protractor-demo/');
		browser.sleep(9000);
		console.log("i am the last step to execute");
	});
	

	// lets make above code synchronous
	it('open angula js website', function() {
	// chain them by adding all with then method.
		
		browser.get('https://angularjs.org');
		browser.get('http://juliemr.github.io/protractor-demo/').then(
				function() {
					console.log("i am the last step to execute");
				});
	});
	

	it('should add one and two', function() {
		// %90 of protractor methods, means all the actions are synchronous
		// (promise is handled in the method itself)
		// if you wantf to retrieve data from browser then it is asynchronous.
		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model('first')).sendKeys(1);
		element(by.model('second')).sendKeys(2);

		element(by.id('gobutton')).click();

		expect(element(by.binding('latest')).getText()).toEqual('5'); // This
		// is
		// wrong!
	});
});
