/* récupération des éléments dans une variable */
let elements = document.getElementsByTagName("p");

/* fonction pour créer un nombre aléatoire entre 1 et 100 */
function number () {
    return Math.ceil(Math.random() * 100);
}

/* boucle qui permet de placer un nombre aléatoire dans le innerHTML de chaque élément */
for (let i = 0; i < elements.length ; i++) {
    elements [i].innerHTML = number().toString();
}

/* autre façon

let elements = document.querySelectorAll('p');

function getRandom() {
    return Math.Ceil(Math.random()) * 100;
}

for (let i = 0; i < elements.length ; i++) {
    elements [i].innerHTML = getRandom();
    
 */