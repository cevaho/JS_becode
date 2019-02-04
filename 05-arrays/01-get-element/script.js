/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
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


    function ajoutMessage(displayMessage){
        var contentAdd = document.querySelector('.material');
        var tempDiv = document.createElement('div');
        tempDiv.setAttribute("id", "message");
        tempDiv.innerHTML = displayMessage;
        if (contentAdd) {
            contentAdd.insertAdjacentElement('beforeend',tempDiv);
        }
        var messager = document.getElementById("message");
        messager.style.fontSize = "3em";
    };


    document.getElementById("run").addEventListener("click", function() {

      var displayMessage=fruits[3];
      ajoutMessage(displayMessage);
    });

})();
