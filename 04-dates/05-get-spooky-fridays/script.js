/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    function myValorA(){
			  var inputa = Number(document.getElementById("year").value);
				return inputa;
		};

    function IsBissextile(bissexYear){
          if ((bissexYear%4===0) && ((bissexYear%100!=0) || (bissexYear%400===0))) return true;
          else return false;
    };

    function switchBissexYes(dayDater){
        console.log(dayDater+"est bissextile");
        var message="";

        switch (dayDater) {
              //dimanche
              case 0: message="il y a 3 vrendredi 13, en janvier, avril et juillet";
                  break;
              //lundi
              case 1: message="il y a 2 vrendredi 13, en septembre et decembre";
                  break;
              //mardi
              case 2: message="il y a 1 vrendredi 13, en juin";
                  break;
              //mercredi
              case 3: message="il y a 2 vrendredi 13, en mars et novembre";
                  break;
              //jeudi
              case 4: message="il y a 2 vrendredi 13, en fevrier et août";
                  break;
              //vendredi
              case 5: message="il y a 1 vrendredi 13, en mai";
                  break;
              //samedi
              case 6: message="il y a 1 vrendredi 13, en octobre";
        }
      return message;
    };

    function switchBissexNo(dayDater){
        console.log(dayDater+"n'est pas bissextile");
        var message="";

        switch (dayDater) {
              //dimanche
              case 0: message="il y a 2 vrendredi 13, en janvier et octobre";
                  break;
              //lundi
              case 1: message="il y a 2 vrendredi 13, en avril et juillet";
                  break;
              //mardi
              case 2: message="il y a 2 vrendredi 13, en septembre et décembre";
                  break;
              //mercredi
              case 3: message="il y a 1 vrendredi 13, en juin";
                  break;
              //jeudi
              case 4: message="il y a 3 vrendredi 13, en février, mars et novembre";
                  break;
              //vendredi
              case 5: message="il y a 1 vrendredi 13, en août";
                  break;
              //samedi
              case 6: message="il y a 1 vrendredi 13, en mai";
        }
        return message;
    };

    function ajoutMessage(displayMessage){
        //var contentAdd = document.getElementsByClassName("material");
        var contentAdd = document.querySelector('.material');
        var tempDiv = document.createElement('div');
        tempDiv.setAttribute("id", "message");
        tempDiv.innerHTML = displayMessage;
        if (contentAdd) {
            contentAdd.insertAdjacentElement('beforeend',tempDiv);
        }

        var messager = document.getElementById("message");
        messager.style.fontSize = "3em";
        //var tempDiv = document.createElement("div");
        //contentAdd.insertAdjacentElement("beforeend",tempDiv);
        //console.log(displayMessage);
        //console.log(contentAdd);
        //contentAdd.insertAdjacentHTML("afterend", "<div id='contentAdd'>"+displayMessage+"</div>");
        //contentAdd.insertAdjacentHTML("beforeend", "<div>youplaa</div>");
    };

    document.getElementById("run").addEventListener("click", function() {

        //créa d'une variable de type date
        var dater = new Date();
        //la date indiquée sera la base du calcul, on assigne la date indiquée à dater
        dater.setYear(myValorA());
        //on assigne le mois de janvier egal à 0, les mois vont de 0 à 11
        dater.setMonth(0);
        //on assigne le premier jour du mois
        dater.setDate(1);
        //on garde le jour de la semaine dans une variable, 0 étant dimanche, 6 un samedi
        var dayDater = dater.getDay();

        //trouver année bissextile
        var bissexYear=dater.getFullYear();
        //lance la fonction pour checker si bissextile ou pas
        var bissexOrNo = IsBissextile();


        if (bissexOrNo===true){
            var displayMessage=switchBissexYes(dayDater);
        }
        else{
            var displayMessage=switchBissexNo(dayDater);
        }

        ajoutMessage(displayMessage);


    });

/*
Toutes les années normales commençant par un jeudi ont 3 vendredis 13.
Toutes les années bissextiles commençant par un dimanche ont 3 vendredis 13.

Un mois qui commence un dimanche 1er aura un vendredi 13.

voir ces liens pour info sur les vendredis 13
http://cosmos2000.chez.com/Vendredi13/Chap4_fr.html
http://villemin.gerard.free.fr/Wwwgvmm/Esoteris/Vendre13.htm

*/

/*

Arguments :
- int annee : année à tester (ex: 2008)

Retour :
- bool : true = l'année est bissextile, false = l'année n'est pas bissextile

function IsBissextile(annee)
{
if ((annee%4==0) && ((annee%100!=0) || (annee%400==0))) return true;
else return false;
}

*/


})();
