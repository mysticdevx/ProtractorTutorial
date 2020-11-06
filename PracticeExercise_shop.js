describe('Protractor Exercise', function () {

	function selectItem(itemName) {
		// take 4 cards into the list, and click the given one
		element.all(by.css(".card.h-100")).each(function (item) {
			item.element(by.css("h4 a")).getText().then(function (txt) {
				if (txt == itemName) {
					item.element(by.buttonText("Add")).click();
				}
				;
			});

		});
	}





	it('shop checkout count test', function () {

		browser.get('https://qaclickacademy.github.io/protocommerce/');
		element(by.linkText("Shop")).click();

		selectItem("Nokia Edge");
		selectItem("Samsung Note 8");

		element(by.partialLinkText("Checkout")).getText().then(function (txt) {
			console.log(txt);
			// below is with split and charat
			// var res = txt.split("(");
			// res = res[1].trim().charAt(0);
			// console.log("res: "+res)

			//below is with  replace regex
			txt = txt.replace(/\D/gi, '');
			console.log("after replace text: " + txt);

			expect(txt).toBe("2", " ... TEXT number of items in the shopping cart");

			//lets convert str to number
			var int = Number(txt);
			expect(int).toBe(2, " ... INTEGER number of items in the shopping cart");

		});




	});


	it('shop shopping cart total amount test', async function () {
		browser.get('https://qaclickacademy.github.io/protocommerce/');
		element(by.linkText("Shop")).click();
		selectItem("Nokia Edge");
		selectItem("Samsung Note 8");
		selectItem("Blackberry");

		element(by.partialLinkText("Checkout")).click(); //.then(function(){browser.sleep(3000)});


		var totalExpected = 0;
		await element.all(by.css("tr>td[class*='col-sm-1 col-md-1 text-center']:nth-child(4)")).each(function (item) {

			item.getText().then(function (txt) {

				txt = Number(txt.replace(/\D/gi, ''));
				console.log("after replace text: " + txt);
				totalExpected += txt;
			});

		});

		console.log("\ntotal Expected: " + totalExpected);


		var totalActual =
			await element(by.css("tr>td[class*='text-right']")).getText().then(function (txt) {
				txt = Number(txt.replace(/\D/gi, ''));
				return Number(txt);
			});

		console.log("total Actual : " + totalActual);


	});






});