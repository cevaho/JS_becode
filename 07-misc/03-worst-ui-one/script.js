/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // récupérer et afficher la valeur du range dans #target 
    // au onInput (pour avoir le résultat directement) de l'input type=range
	var ranger = document.querySelector("#slider");
	var targeter = document.querySelector("#target");

	ranger.addEventListener('input', function(){
			console.log(ranger.value);
			targeter.innerHTML = ranger.value;
	});

})();
