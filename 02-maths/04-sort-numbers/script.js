/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        	// your code here

		
		var valueDepart = document.getElementById("numbers").value;
		var valuesSansEspace = valueDepart.match(/\d+/g);
		//var tailleArrayValue = valuesSansEspace.length;

		valuesSansEspace.sort(function(a,b) {
		  				      return a - b;
						     })

		/*for(i=0;i<tailleArrayValue;i++){

			var valCase = valuesSansEspace[i];
			//var valCasePrev = valuesSansEspace[i-1];

			if(valCase<valCasePrev){
				valuesSansEspace[i]=valCasePrev;
				valuesSansEspace[i-1]=valCase;
			    }
			//else{}
		}*/

		alert(valuesSansEspace);


    });

})();
