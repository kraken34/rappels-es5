console.log("01 - Fonctions");

var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1, nb2) {
    return nb1 + nb2;
}

var resultat1 = additionner(nombre1, nombre2);
console.log(resultat1);

var somme = additionner();
var resultat2 = somme(nombre1, nombre2);
console.log(resultat2);
