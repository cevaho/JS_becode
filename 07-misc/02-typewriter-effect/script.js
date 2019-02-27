/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

	var targeter = document.querySelector("#target");
	var nouveauTexte = "je vais vous supprimer les uns après les autres à coup de cuillère !";
	var tailleTexte = nouveauTexte.length;//egal 68
	var arrayString = [];
	var newChar ="";



	function getRandomInt(max) {
	  		//return Math.floor(Math.random() * max);
			return (Math.round(Math.random()*max))*20;
	}


	//placer chaque lettre dans une case de tableau
	for( let i = 0; i < tailleTexte ; i++){
						arrayString[i]=nouveauTexte.charAt(i);
						}

	/* chaque lettre doit s'afficher l'une après l'autre. 
	   Bonus : fais en sorte que le délai entre chaque lettre soit aléatoire. */

	var seconds = 0;
	var rand = getRandomInt(100);
	var timing = setInterval(function(){
						newChar = newChar + arrayString[seconds];
						targeter.innerHTML = newChar;
						seconds++;
						rand = getRandomInt(50);
						console.log("rand = "+rand);
						if (seconds === 68) {
									clearInterval(timing); 
									}
					    }, rand);



})();
