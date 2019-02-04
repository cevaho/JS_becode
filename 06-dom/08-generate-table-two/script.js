/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
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

	for(i=1;i<11;i++){
		var maColonne = document.createElement("tr");
		monTableau.insertAdjacentElement("beforeend",maColonne);
		for(j=1;j<11;j++){
			var maRangee = document.createElement("td");
			maColonne.insertAdjacentElement("beforeend",maRangee);
			maRangee.innerHTML=i*j;
		}
			
	}


})();
