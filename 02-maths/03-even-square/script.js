/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        // your code here
	var myArray=[];

	for(i=1;i<22;i++){
		

		if(i%2==0){
			myArray[i]=i*i;
			
			}
	
	}
	var orray=myArray.filter(function(val){return val !== ''});
	alert(orray);

    });

})();