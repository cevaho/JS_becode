/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
	
	function ajoutMessage(message){
            //var contentAdd = document.getElementsByClassName("material");
            var contentAdd = document.querySelector('.material');
            var tempDiv = document.createElement('div');
            tempDiv.setAttribute("id", "message");
            tempDiv.innerHTML = message;
            if (contentAdd) {
                contentAdd.insertAdjacentElement('beforeend',tempDiv);
            }

            var messager = document.getElementById("message");
            messager.style.fontSize = "1.5em";
        };


	document.getElementById("run").addEventListener("click", function() {
		var pomInIt=fruits.indexOf("fraise");
		var message="";
		if (pomInIt!=-1){
			message="il y a bien une pomme dans le tableau";
				}
		else{
			message="il n'y a pas de pomme dans le tableau";
			}

		ajoutMessage(message);
		console.log(message);


	});	

	

})();
