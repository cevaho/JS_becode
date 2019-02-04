/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here


	var maSource = document.getElementById("source");		
  	var monAttribut = maSource.getAttribute("data-image");

	var maTarget = document.getElementById("target");
	var monImg = document.createElement("img");
		monImg.setAttribute("src", monAttribut);
	

	maTarget.insertAdjacentElement("beforeend",monImg);

	function removeElement(maSource) {
    		return maSource.parentNode.removeChild(maSource);
	}

	removeElement(maSource);

})();
