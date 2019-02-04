/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

	var monImage = document.querySelector(".material figure img");


	var maSource = monImage.getAttribute("src");
	var monHover = monImage.getAttribute("data-hover");
/*
	console.log(maSource);
	console.log(monHover);
	
	function zover(){
		console.log("niqueueueueueue");
		//console.log(monHover);
		//document.querySelector(".material figure img").setAttribute("src",monHover);
	};

	function zout(maSource){
		console.log(maSource);
		//document.querySelector(".material figure img").setAttribute("src",maSource);
	};


	document.querySelector(".material figure img").addEventListener("mouseover", function() {
			document.querySelector(".material figure img").setAttribute("src",monHover);
	});

	document.querySelector(".material figure img").addEventListener("mouseout", function() {
			document.querySelector(".material figure img").setAttribute("src",maSource);
	});
*/

	monImage.addEventListener("mouseover", function() {
			monImage.setAttribute("src",monHover);
	});

	monImage.addEventListener("mouseout", function() {
			monImage.setAttribute("src",maSource);
	});
	

	

	//document.querySelector(".material figure img").addEventListener("click", zover());
	//monImage.addEventListener("click", zover(null,monHover), false);
	//monImage.addEventListener("click", zout(null,maSource), false);

	


})();
