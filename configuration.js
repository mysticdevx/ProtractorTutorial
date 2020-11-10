var Jasmine2HTMLReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

	// below selenium adress is necessary if we start selenium webdriver manager
	// server is necessary for the different browsers and consistency
	// otherwise we dont need it.

	//seleniumAddress : 'http://localhost:4444/wd/hub',
	specs : [ 'PracticeExercise_shop.js' ],

	//before method   - executes also report
	onPrepare : function() {
		browser.manage().window().maximize();
		jasmine.getEnv().addReporter(new Jasmine2HTMLReporter({
			savePath : 'target/screenshots',
			screenshotsFolder: 'images',
			//below eliminates the passed results from the report
			showPassed: true
		})
		);

	},

	capabilities : {
		'browserName' : 'chrome',
		'goog:chromeOptions' : {
			w3c : false
		}

	}

};