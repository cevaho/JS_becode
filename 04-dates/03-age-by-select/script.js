/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

			function myDay(){
				var dayer = Number(document.getElementById("dob-day").value);
						return dayer;
			};

			function myMonth(){
				var monther = document.getElementById("dob-month").value;
						return monther;
			};

			function myYear(){
				var yearer = document.getElementById("dob-year").value;
						return yearer;
			};

	document.getElementById("run").addEventListener("click", function() {

		var dater   	= 	new Date();
		var newYear 	= 	dater.getFullYear();
		var newMonth	=	  dater.getMonth()+1;
		var newDay  	= 	dater.getDate();

		var yearNumber  = 	newYear  - myYear();
		var monthNumber = 	newMonth - myMonth();
		var dayNumber   =	  newDay   - myDay();

		if(monthNumber<0){
			yearNumber = yearNumber-1;
			monthNumber = 12 + monthNumber;
		}

		if(dayNumber<0){
			monthNumber = monthNumber-1;

			switch(newMonth){
						case 1:
						case 3:
						case 5:
						case 7:
						case 8:
						case 10:
						case 12: dayNumber = 31 + dayNumber;
							break;
						case 2: dayNumber = 28 + dayNumber;
							break;
						case 4:
						case 6:
						case 9:
						case 11: dayNumber = 30 + dayNumber;
			}

		}

		console.log("tu as "+yearNumber+" ans, "+monthNumber+" mois, "+dayNumber+" jour");



	});

})();
