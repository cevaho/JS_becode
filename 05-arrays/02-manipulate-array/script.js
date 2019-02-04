/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
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
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here

    function ajoutMessage(fruits){
        var contentAdd = document.querySelector('.material');
        var tempDiv = document.createElement('div');
        tempDiv.setAttribute("id", "message");
        tempDiv.innerHTML = fruits;
        if (contentAdd) {
            contentAdd.insertAdjacentElement('beforeend',tempDiv);
        }
        var messager = document.getElementById("message");
        messager.style.fontSize = "2em";
    };


    document.getElementById("run").addEventListener("click", function() {

      //delete the first element of an array
      fruits.shift();
      //delete the last array element
      fruits.pop();
      //add element at the beginning of an array
      fruits.unshift('banane');
      //add element at the end of the array
      fruits.push('kiwi');

      //display array
      ajoutMessage(fruits);

    });


})();
