<<<<<<< HEAD
console.log("01 - Functions");

var nombre1 = 10;
var nombre2 = 20;


function additionner(nb1, nb2) {
    return nb1 + nb2;
}
var resultat1 = additionner(nombre1, nombre2);
console.log("resultat1 =", resultat1);


var somme = function (nb1, nb2) {
    return nb1 + nb2;
}
var resultat2 = somme(nombre1, nombre2);
console.log("resultat2 =", resultat2);


var multiplication = function (nb1, nb2) {
    return nb1 * nb2;
}
var resultat3 = multiplication(nombre1, nombre2);
console.log("resultat3 =", resultat3);


var afficherOperation = function (nomOperation, operation, nb1, nb2) {
    this.nom = nomOperation;
    this.function = operation;
    this.nombre1 = nb1;
    this.nombre2 = nb2;
    console.log(this.nom + "(" + this.nombre1 + "," + this.nombre2 + ")", "=", this.function);
}

afficherOperation("Somme", somme(nombre1, nombre2), nombre1, nombre2);
afficherOperation("Multiplication", multiplication(nombre1, nombre2), nombre1, nombre2);
//afficherOperation("Soustraction",((nb1, nb2) => nb1 - nb2), 15, 5);
=======
console.log("01 - Functions");

var nombre1 = 10;
var nombre2 = 20;


function additionner(nb1, nb2) {
    return nb1 + nb2;
}
var resultat1 = additionner(nombre1, nombre2);
console.log("resultat1 =", resultat1);


var somme = function (nb1, nb2) {
    return nb1 + nb2;
}
var resultat2 = somme(nombre1, nombre2);
console.log("resultat2 =", resultat2);


var multiplication = function (nb1, nb2) {
    return nb1 * nb2;
}
var resultat3 = multiplication(nombre1, nombre2);
console.log("resultat3 =", resultat3);


function afficherOperation(nomOperation, operation, nombre1, nombre2) {
    console.log(nomOperation + "(" + nombre1 + "," + nombre2 + ")", "=", operation);
}


>>>>>>> 1d0b024045bb728b6217a8438cceb572547cd17a
