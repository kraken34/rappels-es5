console.log("03 - Les Objets");
function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function() {
        return this.nom+" "+this.prenom+" "+this.pseudo;
    }
}

function afficherPersonne(personne) {
    console.log(personne.getNomComplet());
}

//Fonction constructeur
var jules = new Personne("LEMAIRE", "Jules", "jules77");
var paul = new Personne("LEMAIRE", "Paul", "paul44");
console.log(jules.nom, jules.prenom, jules.pseudo);
console.log(jules.getNomComplet());
afficherPersonne(paul);

//Modifier un objet
jules.pseudo = "jules44";
afficherPersonne(jules);

//Ajouter une propriété à Personne
console.log(jules.age);
Personne.prototype.age = "NON RENSEIGNE";
console.log(jules.age);
jules.age = 30;
console.log(jules.age);

//Ajouter une méthode à Personne
Personne.prototype.getInitiales = function() {
    return this.prenom.charAt(0) + this.nom.charAt(0);
}
console.log(jules.getInitiales());

//Objet sans fonction constructeur
var robert = Personne();
robert.prenom = "Robert";
robert.nom = "LEPREFET";
robert.pseudo = "robert77";
robert.getNomComplet = function() {
    return this.nom+" "+this.prenom+" "+this.pseudo;
}
afficherPersonne(robert);

//Héritage via une fonction constructeur
function Client (nom, prenom, pseudo, numeroClient) {
    Personne.call(this, nom, prenom ,pseudo);
    this.numeroClient = numeroClient;

    this.getInfos = function() {
        return this.numeroClient+" "+this.nom+" "+this.prenom;
    }
}

var steve = new Client("LUCAS", "Steve", "steve44", "A01");
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());