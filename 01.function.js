console.log("01 - Fonctions");

var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1,nb2){

    return nb1+nb2;

}

var resultat1 = additionner  (nombre1,nombre2)
console.log('resultat1 =', resultat1);


var somme = additionner(nombre1,nombre2)

console.log('somme = ' +somme);

var resultat2 =  additionner (nombre1,nombre2) 

console.log('resultat2 = '+ resultat2);

var multiplication =  function multiplication(nombre1,nombre2){

    return nombre1*nombre2;
}

var resultat3 = multiplication (nombre1,nombre2)
console.log( "resultat 3 = " + resultat3);

  var afficherOperation =function ( nomOperation,operation, nb1,nb2){
this.nom = nomOperation;
this.function = operation;
this.number1 = nb1;
this.number2=nb2;

    console.log( this.nom + this.number1+ this.number2 + "=<resultat invocation operation>")

}

afficherOperation("somme = " , somme ,20+40);
afficherOperation("multiplication = ", multiplication, 10*20);
afficherOperation("soustraction = " , function(nb1,nb2){
    return nb1-nb2;

}
