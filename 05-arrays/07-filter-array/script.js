/* becode/javascript
 *
 * /05-arrays/07-filter-array/script.js - 5.7: filtrer un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var people = [
        {
            firstname: "Dreddy",
            lastname: "Nussgen",
            age: 70,
        },
        {
            firstname: "Yves",
            lastname: "Sear",
            age: 49,
        },
        {
            firstname: "Marcel",
            lastname: "Cowderay",
            age: 59,
        },
        {
            firstname: "Dag",
            lastname: "Binnall",
            age: 31,
        },
        {
            firstname: "Horten",
            lastname: "Claesens",
            age: 75,
        },
        {
            firstname: "Charmian",
            lastname: "Harnes",
            age: 10,
        },
        {
            firstname: "Sean",
            lastname: "Littlejohns",
            age: 37,
        },
        {
            firstname: "Hazlett",
            lastname: "Sprouls",
            age: 87,
        },
        {
            firstname: "Marcel",
            lastname: "Hasted",
            age: 66,
        },
        {
            firstname: "Cary",
            lastname: "Summerson",
            age: 15,
        },
        {
            firstname: "Feodor",
            lastname: "Ollett",
            age: 56,
        },
        {
            firstname: "Kelly",
            lastname: "Ranahan",
            age: 62,
        },
        {
            firstname: "Madelene",
            lastname: "Davie",
            age: 14,
        },
        {
            firstname: "Bent",
            lastname: "Karpe",
            age: 82,
        },
        {
            firstname: "Reinaldo",
            lastname: "Grimbleby",
            age: 81,
        },
    ];

    // your code here
    function ajoutMessage(message){
            //var contentAdd = document.getElementsByClassName("material");
            var contentAdd = document.querySelector('.material');
            var tempDiv = document.createElement('div');
            tempDiv.setAttribute("id", "message");
            tempDiv.innerHTML = message;
            if (contentAdd) {
                contentAdd.insertAdjacentElement('beforeend',tempDiv);
            }

            var messager = document.getElementById("message");
            messager.style.fontSize = "1.5em";
        };



    // your code here
    document.getElementById("run").addEventListener("click", function() {

          //fait une copie du tableau
          var newPeople=people.slice();
          //console.log(newPeople[1].firstname);
          console.log(newPeople[1]);

          var tailleArray=people.length;

          for (i=0;i<tailleArray;i++){

                var ager = newPeople[i].age;

                if(ager<=18){
                            //console.log(ager);
                            //obligé d'utilisé delete car splice ne reconnait pas le i
                            delete newPeople[i];
                            //var newer = newPeople.splice(i,1);
                          }
          }

          //obligé de filtrer l'array car delete supprime le contenu de case maisles case vide existent encore
          var peopleFilter = newPeople.filter(function(val){return val !== ''});

          console.table(peopleFilter);

          //ajoutMessage(message);
          /*var message="";
          for(i=0;i<tailleArray;i++){
            message= message + peopleFilter[i].firstname + ",";
          }
          console.log(message);
          ajoutMessage(message);*/

    });



})();
