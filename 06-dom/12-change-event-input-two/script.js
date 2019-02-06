/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


//https://stackoverflow.com/questions/5778020/check-whether-an-input-string-contains-a-number-in-javascript

(function() {

    // your code here
    function myValorA(){	
			var inputVal = document.getElementById("pass-one").value;
			return inputVal;
	}


    function checkStringForNumbers(inuputValue){
			    var countNumber = 0;
			    let str = String(inuputValue);
			    for( let i = 0; i < str.length; i++){
				      console.log(str.charAt(i));
				if(!isNaN(str.charAt(i))){           //if the string is a number, do the following
				    countNumber++;
				}
			    }
			    console.log(countNumber);
			if(countNumber>=2){return true;}
			else{return false;}
			}


    document.getElementById("pass-one").addEventListener("keyup", function() {
			var inuputValue = myValorA();
			var nbrCaractere = myValorA().length;console.log(nbrCaractere);
			var displayCount = document.getElementById("validity");console.log(displayCount);

			//var letters = /^[A-Za-z]+$/;
			//var numbers = /^[0-9]+$/;
      			//if(inputtxt.value.match(letters)){}

			var decompteDigit = checkStringForNumbers(inuputValue);
			console.log(decompteDigit);


			if(nbrCaractere>=8 && decompteDigit===true){
					displayCount.innerHTML= "ok";
					document.getElementById("pass-one").setAttribute("maxlength","10");
				}

			else{displayCount.innerHTML= "Pas ok";}
			
	});

})();
