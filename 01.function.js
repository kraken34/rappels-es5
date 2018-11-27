console.log("01 - Fonctions");

var lg = console.log;

var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1, nb2) {
    return nb1 + nb2;
}

var resultat1 = additionner(nombre1, nombre2);

lg("Le resultat 1 est : " + resultat1);

var somme = additionner;

var resultat2 = somme(nombre1, nombre2);

lg("Le resultat 2 est : " + resultat2);

function multiplication(nb1, nb2) {
    return nb1 * nb2;
}

var resultat3 = multiplication(nombre1, nombre2);

lg("Le resultat 3 est : " + resultat3);

function afficherOperation(nomOperation, operation, nb1, nb2) {
    lg(nomOperation+" ("+nb1+", "+nb2+") = "+operation(nb1,nb2));
    return operation(nb1,nb2);
}

var retourFonctionAffich = afficherOperation('Somme',somme, 20,40);
lg("Le retour de la fonction afficherOperation est : "+retourFonctionAffich);

var retourFonctionAffich = afficherOperation('Multiplication',multiplication, 10,20);
// lg("Le retour de la fonction afficherOperation est : "+retourFonctionAffich);


lg('Soustraction avec fonction anonyme à la volée :');
var retourFonctionAffich = afficherOperation('Soustraction',function (nb1,nb2){return nb1-nb2}, 15,5);

lg('Soustraction avec méthode fléchée :');
var retourFonctionAffich = afficherOperation('Soustraction',((nb1,nb2)=>nb1-nb2), 15,5);