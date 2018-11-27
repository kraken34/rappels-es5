console.log("01 - Les fonctions");
//Definition d'une fonction
var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1, nb2) {
    return nb1+nb2;
}

var resultat1 = additionner(nombre1, nombre2);
console.log("resultat1 = ",resultat1);

//Variable de type fonction
var somme = additionner;
var resultat2 = somme(nombre1,nombre2);
console.log("resultat2 = ",resultat2);

var multiplication = function(nb1, nb2){
    return nb1*nb2;
}
var resultat3 = multiplication(nombre1,nombre2);
console.log("resultat3 = ",resultat3);

//Fonction comme élément du 1er Ordre
var afficherOperation = function(operationName, operation, nb1, nb2){
    this.nom = operationName;
    this.fonction = operation;
    this.nombre1 = nb1;
    this.nombre2 = nb2;

    this.result = operation(nb1,nb2);

    console.log(this.nom+"("+this.nombre1+","+this.nombre2+") = "+this.result);
}

afficherOperation("Somme", somme, 20,40);
afficherOperation("Multiplication", multiplication, 10,20);
afficherOperation("Soustraction", function(nb1,nb2){return nb1 - nb2}, 15, 5);