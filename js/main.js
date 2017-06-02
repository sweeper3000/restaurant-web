function rotateSpecials() {
		var pizzas = ["Large Pepperoni Pizza", "One Medium", "Vegetarian Pizza", "Meat Lover's Pizza", "Two Medium Pizzas and 2 Drinks", "Party Size with 4 Drinks", "Small Pizza"];
		var specialText = "Today's special is ";
		var imgs = ["imgs/large-pepperoni.png", "imgs/medium-pizza.jpg", "imgs/vegetarian.jpg", "imgs/meat-lovers.jpg", "imgs/2-medium-with-2-drinks.jpg", "imgs/party-size-with-4-drinks.png", "imgs/small.jpg"];
		
		var date = new Date();
		var currentDate = date.getDay();
		
		$("#special-img").attr("src", imgs[currentDate]);
		document.getElementById("special-img-txt").innerHTML = pizzas[currentDate];
		document.getElementById("special").innerHTML = specialText + pizzas[currentDate];

		// change text colour based on image colour

		if (currentDate == 3 || currentDate == 4) {
			$("#special-img-txt").addClass("black-text");
		}	
}

function takeOrder() {
	Materialize.toast('Order Taken. Thanks!', 4000);
	console.log("order taken");	
}