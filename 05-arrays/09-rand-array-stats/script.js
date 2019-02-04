/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    	// your code here

	//function qui génére un nombre aléatoire de 1 à 100
	function rendomNumber(){
		var number1 = Math.floor(Math.random() * Math.floor(99));
		return number1;
	};


	//function qui génère un tableau de 10 cases avec des valeurs aléatoir de 1 à 100
	function createArray(){
		var myArray=[];
		for(i=0;i<10;i++){
				myArray[i]=rendomNumber();
	  			}
		return myArray;
	};

	//function qui ajoute le contenu de l'array dans le tableau html
	function ajoutContentCase(croupouc){

	        var tailler = croupouc.length;

		for(i=0;i<tailler;i++){
			var ider="n-"+(i+1);
			var tdCase=document.getElementById(ider);
	    		console.log(tdCase);
			tdCase.innerHTML=croupouc[i];
		}
        };

	//function qui affiche la valeur minimum du tableau
	function minVal(croupouc){
		var miner = Math.min.apply(null,croupouc);
		console.log(miner);
		document.getElementById("min").innerHTML = miner;
	};

	//function qui affiche la valeur maximum du tableau
	function maxVal(croupouc){
		var maxer = Math.max.apply(null,croupouc);
		console.log(maxer);
		document.getElementById("max").innerHTML = maxer;
	};

	//function qui affiche la somme des valeurs du tableau
	function sumVal(croupouc){
		var summer = croupouc.reduce((a, b) => a + b, 0);
		console.log(summer);
		document.getElementById("sum").innerHTML = summer;
	};

	//function qui affiche la moyenne des valeurs du tableau
	function moyenVal(croupouc){
		var moyener = (croupouc.reduce((a, b) => a + b, 0)) / 10;
		console.log(moyener);
		document.getElementById("average").innerHTML = moyener;
	};

	document.getElementById("run").addEventListener("click", function() {

		var croupouc = createArray();

		ajoutContentCase(croupouc);

		maxVal(croupouc);

		minVal(croupouc);

		sumVal(croupouc);

		moyenVal(croupouc);

	});


})();
