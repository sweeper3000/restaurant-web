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

var usernames = ["demo", "demo1"];
var passwords = ["2a97516c354b68848cdbd8f54a226a0a55b21ed138e207ad6c5cbb9c00aa5aea", "61ea51136a1eb39db39c889c9c53ebd21e5ce9e78721a6c2c40f8e16b782a879"];

function checkLogin() {
	/* USERNAMES, PASSWORDS
		demo, demo
		demo1, demo2
	*/
	
	var totalUsers = usernames.length;
	var un = document.getElementById("username").value;
	var pw = document.getElementById("password").value;
	var valid = false;

	var pwHash = sha256_digest(pw);

	for (i = 0; i < totalUsers; i++) {
		if (un == usernames[i]) {
			if (pwHash == passwords[i]) {
				valid = true;
				break;
			}
		}
	}

	if (valid) {
		console.log("Login successful!");
		window.location = "order.html";
		return false;
	} else {
		console.log("Login failed!");
		Materialize.toast("Incorrect username/password", 4000);
		$("#password").val('');
	}
}
