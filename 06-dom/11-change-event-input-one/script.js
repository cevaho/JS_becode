/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    	// your code here

	function myValorA(){	
			var inputVal = document.getElementById("pass-one").value;
			return inputVal;
	}

	document.getElementById("pass-one").addEventListener("keyup", function() {
			myValorA();
			var nbrCaractere = myValorA().length;console.log(nbrCaractere);
			var displayCount = document.getElementById("counter");console.log(displayCount);
				//para.appendChild(document.createTextNode('Hello, '));
			    displayCount.innerHTML= nbrCaractere +" / 10"

			if(nbrCaractere>=10){
				document.getElementById("pass-one").setAttribute("maxlength","10");
				}
			
	});

})();
