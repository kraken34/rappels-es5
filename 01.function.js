console.log("01 - Fonctions");
function cl(message ,affichage){
    console.log(message,affichage);
}

var nombre1=10;
var nombre2=20;

function additionner(nb1, nb2){
    return nb1+nb2;
}

var resultat1 = additionner(nombre1,nombre2);
cl("resultat1 =",resultat1)

var somme = additionner;
var resultat2 = somme(nombre1,nombre2);
cl("resultat2 =",resultat2);

var multiplication = function(nb1,nb2){
    return nb1*nb2;
}

// var multiplicationl =(nb1,nb2)=>nb1*nb2;

var resultat3=multiplication(nombre1,nombre2);
cl("resultat3 =",resultat3)