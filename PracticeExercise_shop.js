describe('Protractor Exercise', function() {

	function selectItem(itemName) {
		// take 4 cards into the list, and click the given one
		element.all(by.css(".card.h-100")).each(function(item) {
			item.element(by.css("h4 a")).getText().then(function(txt) {
				if (txt == itemName) {
					item.element(by.buttonText("Add")).click();
				}
				;
			});

		});
	}

	
	
	
	
	it('shop test', function() {

		browser.get('https://qaclickacademy.github.io/protocommerce/');
		element(by.linkText("Shop")).click();

		selectItem("Nokia Edge");
		selectItem("Samsung Note 8");

		element(by.partialLinkText("Checkout")).getText().then(function(txt) {
			console.log(txt);
			txt.split(" ")
		})

	});
	
	
	
	
	
	
	

});