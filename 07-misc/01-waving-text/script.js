/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
	var balise = document.getElementById("target");
	var newContent = prompt("mon nouveau texte à afficher");
	var contentLength = newContent.length;
	var divizCinq = Math.floor(contentLength/5);
	var arrayString = [];
	var contentAfterArray = "";
	var part1 = "";var part2 = "";var part3 = "";var part4 = "";var part5 = "";
	

	for( let i = 0; i < contentLength ; i++){
				      //console.log(newContent.charAt(i));
				      arrayString[i]=newContent.charAt(i);
					
					//part1 [i] between 0 and length/5
					if(i<=divizCinq){
						part1 = part1 + arrayString[i];	
						}

					//part2 [i] > divizCinq and [i]=divizCinq*2
					else if(i>divizCinq && i<=(divizCinq*2)){
						part2 = part2 + arrayString[i];		
						}

					//part3 [i] > divizCinq*2 and [i]=divizCinq*3
					else if(i>(divizCinq*2) && i<=(divizCinq*3)){
						part3 = part3 + arrayString[i];
						}

					//part4 [i] > divizCinq*3 and [i]=divizCinq*4
					else if(i>(divizCinq*3) && i<=(divizCinq*4)){
						part4 = part4 + arrayString[i];
						}

				        //part5 [i] > divizCinq*4 and [i]=contentLength-1
					else if(i>(divizCinq*4) && i<=(contentLength-1)){
						part5 = part5 + arrayString[i];
						}
			
				    contentAfterArray = contentAfterArray +  arrayString[i]; 
			    }



	//console.table(arrayString);
	/*console.log(contentAfterArray);
	console.log("part1 "+part1);console.log("part2 "+part2);console.log("part3 "+part3);
	console.log("part4 "+part4);console.log("part5 "+part5);*/
	
	var tempSpan1 = document.createElement("span");
	    tempSpan1.setAttribute("id", "tempSpan1");
	    tempSpan1.innerHTML=part1;
	    balise.insertAdjacentElement("beforeend",tempSpan1);
		document.querySelector("#tempSpan1").setAttribute("style","font-size:25px;");


	var tempSpan2 = document.createElement("span");
	    tempSpan2.setAttribute("id", "tempSpan2");
	    tempSpan2.innerHTML=part2;
	    balise.insertAdjacentElement("beforeend",tempSpan2);
		document.querySelector("#tempSpan2").setAttribute("style","font-size:40px;");


	var tempSpan3 = document.createElement("span");
	    tempSpan3.setAttribute("id", "tempSpan3");
	    tempSpan3.innerHTML=part3;
	    balise.insertAdjacentElement("beforeend",tempSpan3);
		document.querySelector("#tempSpan3").setAttribute("style","font-size:12px;");


	var tempSpan4 = document.createElement("span");
	    tempSpan4.setAttribute("id", "tempSpan4");
	    tempSpan4.innerHTML=part4;
	    balise.insertAdjacentElement("beforeend",tempSpan4);
		document.querySelector("#tempSpan4").setAttribute("style","font-size:30px;");


	var tempSpan5 = document.createElement("span");
	    tempSpan5.setAttribute("id", "tempSpan5");
	    tempSpan5.innerHTML=part5;
	    balise.insertAdjacentElement("beforeend",tempSpan5);
		document.querySelector("#tempSpan5").setAttribute("style","font-size:15px;");


/*
(function() { 
// your code here 

var paragraph = document.getElementById( "target" ); 
var text = paragraph.innerHTML; 
function sizeChange () { 
	var wave = ""; 
	for ( var i = 0; i < text.length; i++ ) { 
		wave += "<span style="font-size: " + rng( 1, 4 ) + "em">" + text[ i ] + "</span>"; 
		} 

	paragraph.innerHTML = wave; 
	} 

function rng ( min, max ) { 
	return ( Math.random() * ( max - min ) ) + min; 
	} 

setInterval( function () { 
		sizeChange(); 
		}, 175 ); 

})();
*/

	

})();
