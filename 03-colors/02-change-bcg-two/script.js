/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
	

	function checkColor(){
				var valueColor = document.getElementById("color").value;

				switch(valueColor){
						case "red":document.body.style.backgroundColor= valueColor;
						break;
						
						case "green":document.body.style.backgroundColor= valueColor;
						break;

						case "yellow":document.body.style.backgroundColor= valueColor;
						break;

						case "blue":document.body.style.backgroundColor= valueColor;
						break;

						default:alert("you have to choose between red, yellow, green or blue");
						}

				};

	document.getElementById("run").addEventListener("click", function() {
		
		checkColor();
    	});

})();
