console.log("01 - Fontions");


// Créer deux variables et une fonction qui retourne l'addition
var nombre1 = 10;
var nombre2 = 20;

function additionner(nombre1, nombre2) {
    return nombre1 + nombre2
}

// Créer une variable "resultat1" dont le résultat est l'invocation de la fonction additionner avec les paramètres nb1 et nb2
var resultat1 = additionner(nombre1, nombre2);
console.log('resultat1 =', resultat1)

// Créer une variable somme dont la valeur est une référence à la fonction additionner
var somme = additionner;

var resultat2 = somme(nombre1, nombre2);
console.log('resultat2 = ', resultat2)


// Créer une variable "multiplication" dont la valeur est une fonction qui effectue la multiplication entre 2 nombres
function multiplication(nombre1, nombre2) {
    return nombre1 * nombre2
}

var resultat3 = multiplication(nombre1, nombre2)
console.log('résultat3 = ', resultat3)


// Créer une variable afficherOpération
function afficherOpération(nomOperation, operation, nb1, nb2) {
    console.log(nomOperation + '('+nb1 +', ' + nb2 + ') = ' + operation(nb1, nb2))
}

afficherOpération('Somme', somme, nombre1, nombre2 )

afficherOpération('Multiplication', multiplication, nombre1, nombre2)


// Afficher soustraction
afficherOpération('Soustraction', function(nb1, nb2) {
    return nb1 - nb2;
}, 15, 5)

