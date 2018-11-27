var villes = new Array ('nantes', 'paris', 'saint-nazaire', 'angers', 'le mans')


//forEach()
villes.forEach(function(element) {
    console.log(element);
});


//every()

var lettreA = function (element) {
if (element.includes('a')) {
    return true;
}
else {
    return false;
}
};

console.log("lettreADansToutesLesVilles =", villes.every(lettreA));

//Avec une lambda
console.log(villes.every(ville => ville.includes('a')));

//some()
var tiretVilles = function (element) {

    if (element.includes('-')) {
        return true;
    }
    else {
        return false;
    }
    }
    console.log("auMoinsUneVilleAvecUnTiret=", villes.some(tiretVilles));

    //Avec une lambda
console.log(villes.some((ville)=>ville.includes('-')));




    //filter()
var sansRien = function(element) {
    if (!element.includes("-")) {
        if (!element.includes(" "))
        {
            return true;
        }
    }
}
var villesSansTiretSansEspace = villes.filter(sansRien);


console.log(villesSansTiretSansEspace);

//Chainer les Fonctions
var villesMajusculeSeTerminantParS = villes.filter(function(ville) {
    // return ville.lastIndexOf("s") == ville.length - 1 
    return ville.endsWith('s')
}).map(function(ville) {
    return ville.toUpperCase()
});
console.log(villesMajusculeSeTerminantParS);

