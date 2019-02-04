/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
	var dater = new Date();
	var hour = dater.getHours();
	var minutes = dater.getMinutes();

	function leJour(){
		document.getElementById("target").innerHTML = "Bonjour";
	};

	function leSoir(){
		document.getElementById("target").innerHTML = "Bonsoir";	
	};

	if( (hour<18 && minutes<30) || hour<7 ){
	//if(hour<18 && minutes<30){
		leJour();
		}
	else{
		leSoir();		
		}

})();
