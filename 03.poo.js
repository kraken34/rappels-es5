function Personne(nom, prenom ,psd){
    this.nom=nom;
    this.prenom=prenom;
    this.pseudo=psd;
    this.getNomComplet=()=>console.log(this.nom,this.prenom,this.pseudo);
}

function afficherPersonne(Personne){
    for(variable in Personne){
        console.log('Personne [' + variable + '] = ' + Personne[variable]);
        
    }    
}

var jules=new Personne("Jules","LEMAIRE","jules77");

var paul=new Personne("Paul","Paul","paul44");

afficherPersonne(jules);
jules.getNomComplet();
paul.getNomComplet();

jules.pseudo="jules44";
jules.getNomComplet();

console.log(jules.age);
Personne.prototype.age="NON RENSEIGNE";
console.log(jules.age);
jules.age=30;
afficherPersonne(jules);