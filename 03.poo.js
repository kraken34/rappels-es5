lg = console.log;

function Personne(prenom, nom, pseudo){
    this.prenom = prenom;
    this.nom = nom;
    this.pseudo = pseudo;
    this.getNomComplet= function(){
        return this.nom+ ', '+this.prenom+', '+this.pseudo;
    }
}

var jules = new Personne('Jules', 'LEMAIRE', 'jules77');
var paul = new Personne('Paul', 'LEMAIRE', 'paule44');

function afficherPersonne(personne){

    lg('Le nom de la personne est : '+personne.nom);
    lg('Le prénom de la personne est : '+personne.prenom);
    lg('Le pseudo de la personne est : '+personne.pseudo);
    lg('Le nom complet de la personne est : '+personne.getNomComplet()+'\n');
    
}

lg('\nAffichage de jules : \n')
afficherPersonne(jules);
lg('\nAffichage de paul : \n')
afficherPersonne(paul);

jules.pseudo='jules44';
lg(jules.getNomComplet());

lg('La propriété age de jules est : '+jules.age);

Personne.prototype.age ='NON RENSEIGNE';

lg('La propriété age de jules est : '+jules.age)
lg('La propriété age de paul est : '+paul.age);

jules.age = 30;

lg('La propriété age de jules est : '+jules.age)

Personne.prototype.getInitiales = function(){
    return this.prenom.charAt(0)+this.nom.substr(0, 1);
}

lg('Les initiales de Jules sont : '+jules.getInitiales());

var robert = {
    prenom : 'Robert',
    nom : 'LEVENDU',
    pseudo :'robert77',
    getNomComplet : function(){
        return this.nom+ ', '+this.prenom+', '+this.pseudo;
    }
}

lg('\nAffichage de robert : \n')
afficherPersonne(robert);


function Client(prenom,nom,pseudo,numeroClient){
    Personne.call(this,prenom,nom,pseudo);
    this.numeroClient = numeroClient;
    this.getInfos=function(){
        lg('Numéro client : '+this.numeroClient);
        lg('Nom client : '+this.nom);
        lg('Prénom client : '+this.prenom);
    }
}

var steve =new Client("Steve", "LUCAS", "steve44", "A01");
afficherPersonne(steve);
lg(steve.numeroClient);
steve.getInfos();