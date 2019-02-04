/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
	function myValorA(){
			   var inputa = document.getElementById("pass-one").value;
				return inputa;
			   }

	function myValorB(){
			   var inputb = document.getElementById("pass-two").value;
				return inputb;
			   }

	function validation(wronger){
				var inputer = document.querySelectorAll("input");

				for (const inputo of inputer) {
					console.log("ok inputo");
					if(wronger===1){
						inputo.className="error";
						}
  					else{
						inputo.classList.remove("error");
						}
				}
			   }


	document.getElementById("run").addEventListener("click", function() {

			var password = myValorA();
			var confirmPassword = myValorB();

			if(password!=confirmPassword){
							wronger=1;
							validation(wronger);
						    }
			else{
				wronger=0;
				validation(wronger);
				}
	});

})();
