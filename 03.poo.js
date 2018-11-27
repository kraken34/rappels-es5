function personne (nom,prnom,pseudo){

    this.nom = "nom";
    this.prenom = "prenom";
    this.pseudo  =" pseudo";

    this.getNomComplet = function() { 
        
        return this.nom+" "+this.prenom+" "+this.pseudo;
 
    } 

}

// création d'objet jules et paul 

var jules = new Personne("LEMAIRE", "Jules", "jules77"); 

var paul = new Personne("LEMAIRE", "Paul", "paul44"); 


console.log(jules.nom, jules.prenom, jules.pseudo); 
 
console.log(jules.getNomComplet()); 

// afficher Paul
afficherPersonne(paul); 

console.log(personne);

jules.pseudo = "jules44"; 
 
afficherPersonne(jules); 


 