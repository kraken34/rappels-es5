var villes = new Array("Nantes","Paris","Angers","Lemans" ,"saint-nazaire");

villes.forEach(function(element){
    console.log(element);
})

var villeCommenceParA = function(element){
    if (element.includes('a')){
        return true;
    }
    else {
        return false;
    }
  
}

console.log(villes.every(villeCommenceParA));


var villeAvecTiret = function(element){

    if (element.includes ('-')){
        return true;
    }
    else {
        return false;
    }
}
;
console.log(villes.some(villeAvecTiret));


var villesSans = function(element){

    if( !element.includes ('-')){
        if( !element.includes (' ')){
            return true;
        }
    }
    
    
}

console.log(villes.filter(villesSans));

var villesMajuscule = function (element){
    if(element.lastIndexOf('s')){
        element.toUpperCase();
        return true;
    }
   
}
console.log(villes.filter(villesMajuscule));