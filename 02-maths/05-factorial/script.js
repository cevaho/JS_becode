/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here

	var valueDepart = Number(document.getElementById("number").value);

	console.log(valueDepart);


	// factoriel d'un nombre egal a sa multiplication par ce nombre -1 puis ce nombre - 2 jusqu'à multiplier ce nombre par 1

	var factoriel = valueDepart;

	for (i = valueDepart-1 ; i > 0 ; i--){
		factoriel= factoriel * i;
		//console.log(factoriel);
	      }

	alert(factoriel);
    });

})();
