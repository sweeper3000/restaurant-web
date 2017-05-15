function rotateSpecials() {
	var pizzas = ["Large Pepperoni Pizza", "One Medium", "Vegetarian Pizza", "Meat Lover's Pizza", "Two Medium Pizzas and 2 Drinks", "Party Size with 4 Drinks", "Small Pizza"];

	var date = new Date();

	var finalDate = date.getDay();

	var specialText = "Today's special is ";

	// Sunday
	if (finalDate == 0) {
		document.getElementById("special").innerHTML = specialText + pizzas[0];
                document.getElementById("special-img-txt").innerHTML = pizzas[0];
                $("#special-img").attr("src", "imgs/large-pepperoni.png");
	} 

	// Monday
	else if (finalDate == 1) {
		document.getElementById("special-img-txt").innerHTML = pizzas[1];
		document.getElementById("special").innerHTML = specialText + pizzas[1];
		$("#special-img").attr("src", "imgs/medium-pizza.jpg");
	}
 
	// Tuesday
	else if (finalDate == 2) {
               document.getElementById("special-img-txt").innerHTML = pizzas[2];
               document.getElementById("special").innerHTML = specialText + pizzas[2];
               $("#special-img").attr("src", "imgs/vegetarian.jpg");
        }

	// Wednesday 
	else if (finalDate == 3) {
                document.getElementById("special-img-txt").innerHTML = pizzas[3];
                document.getElementById("special").innerHTML = specialText + pizzas[3];
                $("#special-img").attr("src", "imgs/meat-lovers.jpg");
        } 

	// Thursday
	else if (finalDate == 4) {
                document.getElementById("special-img-txt").innerHTML = pizzas[4];
                document.getElementById("special").innerHTML = specialText + pizzas[4];
		$("#special-img").attr("src", "imgs/2-medium-with-2-drinks.jpg");
        }

	// Friday
	else if (finalDate == 5) {
                document.getElementById("special-img-txt").innerHTML = pizzas[5];
                document.getElementById("special").innerHTML = specialText + pizzas[5];
                $("#special-img").attr("src", "imgs/party-size-with-4-drinks.png");
        }

	// Saturday
	else if (finalDate == 6) {
               document.getElementById("special-img-txt").innerHTML = pizzas[6];
               document.getElementById("special").innerHTML = specialText + pizzas[6];
               $("#special-img").attr("src", "imgs/small.jpg");
        }
}
}
