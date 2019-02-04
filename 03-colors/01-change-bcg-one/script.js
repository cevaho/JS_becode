/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

	function colorBGchange (colori){
		document.body.style.backgroundColor= colori;
	};

	/*document.getElementById("red").addEventListener("click", function() {
		//var color2=this.getElementById();console.log(color2);
		var ider=document.getElementById("red").id;console.log(ider);
		var colori = "red";
		colorBGchange(colori);
    	});*/

	document.getElementById("red").addEventListener("click", function() {
		
		//var ider=document.getElementById("red").id;
		document.body.style.backgroundColor= "red";
		
    	});





	document.getElementById("green").addEventListener("click", function() {
		var colori = "green";
		colorBGchange(colori);
    	});

	document.getElementById("yellow").addEventListener("click", function() {
		var colori = "yellow";
		colorBGchange(colori);
    	});

	document.getElementById("blue").addEventListener("click", function() {
		var colori = "blue";
		colorBGchange(colori);
    	});

})();
