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

Personne.prototype.getInitiales=function(){console.log(this.prenom.charAt(0),this.nom.charAt(0))};
jules.getInitiales();

rober=new Personne();
rober.prenom="Robert";
rober.nom="LEPREFET";
rober.pseudo="robert77";
afficherPersonne(rober);

function Client(nom, prenom ,psd, numeroClient){
    Personne.call(this,nom, prenom ,psd);
    this.numeroClient=numeroClient;
    this.getInfos=()=>console.log(this.numeroClient,this.nom,this.prenom);
}

var steve =new Client("LUCAS","Steve","steve44","A01");
afficherPersonne(steve);

console.log(steve.numeroClient);

steve.getInfos();