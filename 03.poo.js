
function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function() {
        return this.nom + this.prenom + this.pseudo;
    }
}

jules = new Personne('Jules', 'LEMAIRE', 'jules77');
paul = new Personne('Paul', 'LEMAIRE', 'paul44');

function afficherPersonne(personne){

    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
}

afficherPersonne(jules);
afficherPersonne(paul);

jules.pseudo = 'jules44';
console.log(jules);
console.log(jules.getNomComplet());

// Undefined
console.log(jules.age);

 Personne.prototype.age = "non renseigne";
 console.log(jules.age);

 jules.age = '30';
 console.log(jules);

 Personne.prototype.initiales = function() {
    return this.nom.charAt(0), this.prenom.charAt(0);
 }