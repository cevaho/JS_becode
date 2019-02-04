/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
var i=0;
/*
function confirmation(){
	var age=prompt("Quel est ton age");
	var sexe=prompt("Quel est ton sexe");
	var ville=prompt("Où habites-tu ?");
	var boleaner= confirm("Ton age est "+age+" ans, ton sexe est "+sexe+", et tu habites à "+ville);
        return boleaner;
}*/


while(i<1){
	//confirmation();
	//alert(boleaner);
		
	var age=prompt("Quel est ton age");
	var sexe=prompt("Quel est ton sexe");
	var ville=prompt("Où habites-tu ?");
	var boleaner= confirm("Ton age est "+age+" ans, ton sexe est "+sexe+", et tu habites à "+ville);
	//alert("boleaner egal :"+boleaner);
	if (boleaner){i++;}
	else {i=0;}
}

})();
