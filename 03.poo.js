console.log('---------------------------TP 03-------------------------------------')


// Créer une personne ayant caractéristques "nom", "prenom", "pseudo" et méthode getNomComplet
function personne(prenom, nom, pseudo) {
    this.nom = nom
    this.prenom = prenom
    this.pseudo = pseudo
    this.getNomComplet = function() {
        return nom + prenom + pseudo
    }
}

var jules = new personne('Jules', 'Lemaire'.toUpperCase(), 'jules77')
console.log(jules)

var paul = new personne('Paul', 'Lemaire'.toUpperCase(), 'paul44')
console.log(paul)


// Afficher les deux personnes crées
function afficherPersonne(unePersonne) {
    console.log(unePersonne.nom)
    console.log(unePersonne.prenom)
    console.log(unePersonne.pseudo)
}

afficherPersonne(jules)
afficherPersonne(paul)



// Modifier le pseudo de l'objet Jules
jules.pseudo = 'jules44'
afficherPersonne(jules)


// Ajouter une propriété à Personne
console.log(jules.age)
personne.prototype.age = 'NON RENSEIGNE'
console.log(jules.age)

jules.age = '30'
console.log(jules, " age : " + jules.age)


// Ajouter une méthode à une personne (afficher première et dernière lettre du prénom)
personne.prototype.initiales = function() {
    return this.prenom.charAt(0) + this.prenom.substr(-1, 1)
}
console.log(jules.initiales())


// Afficher première lettre nom et prénom de la personne
personne.prototype.initiales2 = function() {
    return this.prenom.charAt(0) + this.nom.charAt(0)
}
console.log(jules.initiales2())




// créer un objet sans fonction constructeur
var robert = {
    prenom : 'Robert',
    nom : 'Leprefet'.toUpperCase(),
    pseudo : 'robert77',
    getNomComplet : function(){
        return prenom + nom + pseudo
    }
}

afficherPersonne(robert)



// Héritage via une fonction constructeur
function client(prenom, nom, pseudo, numeroClient) {
    personne.call(this, prenom,nom,pseudo)
   
    this.numeroClient = numeroClient
    this.getInfos = function() {
        return numeroClient + this.prenom + this.nom + this.pseudo
    }
}

var steve = new client('Steve', 'Lucas'.toUpperCase(), 'steve44', 'A01')
afficherPersonne(steve)

console.log(steve.getInfos())


