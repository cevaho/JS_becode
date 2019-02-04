/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
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
	
	

    var performOperation = function(operation) {
        // perform the operation
	
	switch (operation){
		case "addition":
			alert(myValorA()+myValorB());
			break;
		case "substraction":alert(myValorA()-myValorB());
			break;
		case "multiplication":alert(myValorA()*myValorB());
			break;
		case "division":alert(myValorA()/myValorB());
			break;
		default:alert("error");
	}
	
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
