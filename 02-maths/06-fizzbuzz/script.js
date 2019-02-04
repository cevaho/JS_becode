/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    

    for(i=1;i<=100;i++){

	switch(true){

		/*case i multiple de 3 et de 5 affiche fizzbuzz*/
		case (i%3===0 && i%5===0) : console.log("fizzbuzz");
			break;	

		/*case i multiple de 3 affiche fizz*/
		case i%5===0 :console.log("fizz");
			break;
		
		/*case i multiple de 5 affiche buzz*/
		case i%3===0 :console.log("buzz");
			break;	
		
		default:console.log(i);
		}
    }

})();
