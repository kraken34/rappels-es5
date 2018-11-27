console.log('** TP 01 - LES FONCTIONS **')


// Créer deux variables 
var nombre1 = 10
var nombre2 = 20

function additionner(nombre1, nombre2) {
    return nombre1 + nombre2
}

var resultat1 = additionner(nombre1, nombre2)
console.log('resultat1 = ' + resultat1)


// Créer une variable somme
var somme = additionner

var resultat2 = somme(nombre1, nombre2)
console.log('resultat2 = ' + resultat2)



// Créer une variable multiplication
function multiplication(nombre1, nombre2) {
    return nombre1 * nombre2
}
var resultat3 = multiplication(nombre1, nombre2)
console.log('resultat3 = ' + resultat3)



// Créer une variable 'afficherOpération"
function afficherOperation(nomOperation, operation, nombre1, nombre2) {
    console.log(nomOperation + '(' + nombre1 + ', ' + nombre2 + ')' + ' = ' + operation(nombre1, nombre2))
}

afficherOperation('Somme', somme, nombre1, nombre2)
afficherOperation('Multiplication', multiplication, nombre1, nombre2)



// Afficher "afficherOperation" avec une soustraction et de nouvelles valeurs aux nombre1 et nombre2
afficherOperation('soustraction', function(nombre1, nombre2){
    return nombre1 - nombre2
}, 15, 5);
console.log('soustraction = ' + soustraction)