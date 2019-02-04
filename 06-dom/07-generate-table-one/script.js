/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    	// your code here
	var maTarget = document.querySelector("#target");

	var monTableau = document.createElement("table");
	    monTableau.id="rower";
		
	maTarget.insertAdjacentElement("beforeend",monTableau);

	for(i=0;i<10;i++){
		var maColonne = document.createElement("tr");
		monTableau.insertAdjacentElement("beforeend",maColonne);
		var maRangée = document.createElement("td");
		maColonne.insertAdjacentElement("beforeend",maRangée);	
	}


})();
