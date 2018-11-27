console.log("01 - Fonctions");

/////////////////////////// Defintion d'une fonction /////////////////////////////

var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1, nb2) {
    return nb1 + nb2
}

var resultat1 = additionner(nombre1, nombre2);
console.log(resultat1);


////////////////////////////// Variable de type function ////////////////////////////////

var somme = additionner;

var resultat2 = somme(nombre1, nombre2);
console.log("le resultat est " + resultat2);

var multiplication = function multiplier(nombre1, nombre2) {
    return nombre1 * nombre2
}

var resultat3 = multiplication(nombre1, nombre2);
console.log(resultat3);

/////////////////////// Fonction comme element du 1er order ///////////////////////

function afficherOperation(nomOperation, operation, nb1, nb2) {
    console.log(nomOperation + '(' +nb1+ ', ' +nb2+ ') = ' +operation(nb1, nb2))
}

afficherOperation('somme', somme, nombre1, nombre2)

afficherOperation('multiplication', multiplication, nombre1, nombre2)

afficherOperation('Soustraction', function(nombre1, nombre2){
 return nombre1 - nombre2;   
}, 15, 5)


