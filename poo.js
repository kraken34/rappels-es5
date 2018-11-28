console.log('** TP 03 - POO **')


function personne(nom, prenom, pseudo) {
    this.nom = nom
    this.prenom = prenom
    this.pseudo = pseudo
    this.getNomComplet = function() {
        return nom + ' ' + prenom + ' ' + pseudo
    }
}


// Créer deux personnes et les afficher
var jules = new personne('lemaire'.toUpperCase(), 'Jules', 'jules77')
var paul = new personne('lemaire'.toUpperCase(), 'Paul', 'paul44')
console.log(jules.getNomComplet() + ' et ' + paul.getNomComplet())


function afficherPersonne(unePersonne) {
    console.log(unePersonne.nom)
    console.log(unePersonne.prenom)
    console.log(unePersonne.pseudo)
}

console.log('\r\n')

afficherPersonne(jules)
afficherPersonne(paul)
console.log('\r\n')


// Modifier le pseudo de jules
jules.pseudo = 'jules44'
afficherPersonne(jules)

console.log('\r\n')



// Ajouter la propriété âge à la personne
console.log(jules.age)
personne.prototype.age = 'NON RENSEIGNE'
console.log(jules.age)

jules.age = '30'
console.log(jules, ' age : ', jules.age)


// Ajouter une méthode à une personne
personne.prototype.getInitiales = function() {
    return this.prenom.charAt(0) + this.nom.charAt(0)
}

console.log(jules.getInitiales(), ' ', paul.getInitiales())


// Créer 'Robert' sans fonction constructeur
var robert = {
    nom: 'leprefet'.toUpperCase(),
    prenom: 'Robert',
    pseudo: 'robert77',
    getNomComplet: function() {
        return nom + prenom + pseudo
    }
}
afficherPersonne(robert)


// Créer une fonction constructeur 'client' qui possède les mêmes caractéristiques qu'une personne
function client(nom, prenom, pseudo, numeroClient) {

    personne.call(this, nom, prenom, pseudo)
    this.getInfos = function() {
        return numeroClient + ' ' + this.nom + ' ' + this.prenom + ' ' + this.pseudo
    }
}


// Créer un client 'Steve'
var steve = new client('Lucas'.toUpperCase(), 'Steve', 'steve44', 'A01')
afficherPersonne(steve)

console.log(steve.getInfos())