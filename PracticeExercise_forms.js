describe('Protractor Exercise', function() {

	it('tutorial website test', function() {

		browser.get('https://qaclickacademy.github.io/protocommerce/');
		element(by.name("name")).sendKeys("Student");
		element(by.name("email")).sendKeys("any@email.com");
		element(by.id("exampleInputPassword1")).sendKeys("password1");
		element(by.id("exampleCheck1")).click();

		element(
				by.cssContainingText("[id='exampleFormControlSelect1'] option",
						"Female")).click();

		// get index start from 0
		element.all(by.name("inlineRadioOptions")).get(1).click();

		element(by.buttonText("Submit")).click();

		
		var mesaj;
		element(by.css("[class*='alert-success']")).getText().then(
				function(successMsg) {
					mesaj= successMsg;
					console.log("icerisi: "+mesaj);
				});
		
		// below function will wait for 3 seconds and then execute the command
//		setTimeout(()=> {
//			console.log("bas belasixxx:"+mesaj);	
//		}, 3000);
	
		
		console.log("bas belasi:"+mesaj);

		var msg = "Success! The Form has been submitted successfully!.";
		
		// verify the success message
		expect(element(by.css("[class*='alert-success']")).getText())
				.toContain(msg,'.... here goes the failure message...');
		
		
		//lets get error with 2 fields and print the,
		element(by.name("name")).clear().sendKeys("a");
		element(by.name("email")).clear().sendKeys("a").sendKeys(protractor.Key.BACK_SPACE);
		
		
		element(by.id("exampleInputPassword1")).clear().sendKeys("password1").then(function(){browser.sleep(100);});
		
		
		//below how to grab number out of promise
		element.all(by.css(".alert.alert-danger")).count().then(function(cnt){
			console.log("number of errors: "+cnt);
		});
		
		//print all the warnings
		element.all(by.css(".alert.alert-danger")).each(function(alrt){
			alrt.getText().then(function(txt){
				console.log(txt);
			})
		});
		
		//verify the number of alerts. should be 0
		expect(element.all(by.css(".alert.alert-danger")).count()).toBe(0,' ... here goes the failure message...');
		

	});
});