/* becode/javascript
 *
 * /06-dom/02-select-two/script.js - 6.2: sélection par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
	document.getElementsByClassName("target")[0].innerHTML = "owned";


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

})();
