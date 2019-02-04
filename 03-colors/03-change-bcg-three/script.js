/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    	// your code here

	function getRandomInt() {
		// expected output: 0, 1 to 9
		//math.floor arrondi au nombre entier: sans virgule
		//math random donne un chiffre aléatoire entre 0 et 1
	  	return Math.floor(Math.random() * Math.floor(9));
	};
	
	
	
	function changeColor(){

			var monNombre = getRandomInt();
			
			switch(monNombre){

				case 0: document.body.style.backgroundColor= "red";
					break;

				case 1: document.body.style.backgroundColor= "yellow";
					break;

				case 2: document.body.style.backgroundColor= "green";
					break;

				case 3: document.body.style.backgroundColor= "blue";
					break;

				case 4: document.body.style.backgroundColor= "pink";
					break;

				case 5: document.body.style.backgroundColor= "grey";
					break;

				case 6: document.body.style.backgroundColor= "black";
					break;

				case 7: document.body.style.backgroundColor= "lime";
					break;

				case 8: document.body.style.backgroundColor= "aqua";
					break;

				case 9: document.body.style.backgroundColor= "purple";
					break;
				}

	};

	document.getElementById("run").addEventListener("click", function() {
		
		changeColor();
    	});


	

})();
