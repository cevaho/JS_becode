/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    
   
	function myValorA(){
			   var inputa = Number(document.getElementById("op-one").value);
				return inputa;
			   }

	function myValorB(){
			   var inputb = Number(document.getElementById("op-two").value);
				return inputb;
			   }
 

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
	alert(myValorA()+myValorB());
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
	alert(myValorA()-myValorB());
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
	alert(myValorA()*myValorB());
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        alert(myValorA()/myValorB());
    });
})();
