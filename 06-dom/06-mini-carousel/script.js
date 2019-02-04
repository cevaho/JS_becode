/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
	
	//not to show the same image after the first click, reverse the case order of the first array:
	var newGallery = gallery.reverse();
	var monImage = document.querySelector(".material figure img");
	var nbrRef=0;

	function changeImage(){
		
		maSource=newGallery[nbrRef];
		monImage.setAttribute("src",maSource);
		nbrRef++;

		if (nbrRef > 4){
				nbrRef=0;
				}

	};
		
	document.getElementById("next").addEventListener("click", function() {

			changeImage();
				
				
	});

})();
