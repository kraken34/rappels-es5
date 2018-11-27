function Personne(nom, prenom, pseudo) {
    this.nom = nom
    this.prenom = prenom
    this.pseudo = pseudo
    this.getNomComplet = function () { return "nom : " + nom + "\nprenom : " + prenom + "\npseudo : " + pseudo }
}

let juju = new Personne("Jules", "LEMAITRE", "jules77")

let popol = new Personne("Paul", "LEMAITRE", "popol34")

let afficherPersonne = function (pers) {
    console.log(pers.nom + "\n" + pers.prenom + "\n" + pers.pseudo)
}

afficherPersonne(juju)
afficherPersonne(popol)

juju.pseudo = "jules44"
afficherPersonne(juju)

console.log(juju.age)

Personne.prototype.age = "NON RENSEIGNE"
console.log(juju.age)

juju.age = 45
console.log(juju.age)

Personne.prototype.afficherInitiales = function () { console.log(this.nom.charAt(0) + " " + this.prenom.charAt(0)) }

juju.afficherInitiales()

let robert = {
    nom: "Robert",
    prenom: "LEPREFET",
    pseudo: "bebert57",
    afficherPersonne: function () { console.log(this.nom + "\n" + this.prenom + "\n" + this.pseudo) }
}

robert.afficherPersonne()

function Client(nom, prenom, pseudo, numeroClient) {
    Personne.call(this, nom, prenom, pseudo)
    this.numeroClient = numeroClient
    this.getInfos = function () { return "nom : " + nom + "\nprenom : " + prenom + "\nnumeroClient : " + numeroClient }
}

let steve=new Client("steve","machin","stiti",1)

afficherPersonne(steve)
console.log(steve.numeroClient)
console.log(steve.getInfos())