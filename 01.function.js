console.log("01 - Fonctions");

var nombre1 = 10;
var nombre2 = 20;

/////Définition d'une fonction/////////////

function additonner(nb1,nb2){
    return nb1+nb2;
}

var resultat1 = additonner(nombre1,nombre2);
console.log("resultat1 = "+resultat1);

///////Variables de type fonction////////

var somme = additonner;
var resultat2 = somme(nombre1,nombre2);
console.log("resultat2 = "+resultat2);

var multiplication = function (nombre1,nombre2){
    return nombre1*nombre2;
}

resultat3 = multiplication(nombre1,nombre2);
console.log("resultat3 = "+resultat3);

////Fonction comme élément du 1er ordre ////////

var afficherOperation = function afficherOperation(nomOperation,operation,nb1,nb2){
    var nom = nomOperation;
    this.nb1 = nb1;
    this.nb2 = nb2;
    this.fonction = operation;

    result = operation(nb1,nb2);
console.log(nomOperation+" ("+ nb1+","+nb2+") = "+result) ;
}

afficherOperation("Somme",somme,20,40);
afficherOperation("Multiplication",multiplication,10,20);
afficherOperation("Soustraction", function(nb1,nb2){return nb1-nb2},15,5);