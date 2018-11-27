var villes =["nantes","paris","saint-nazaire","angers","le mans"];

villes.forEach(function(element){
    console.log(element);
});


///every()////
var villeCommencantParA = villes.every(v => v.includes('a'));
console.log(villeCommencantParA);

//some()//
var villeContenantUnTiret = villes.some(v=>v.includes("-"));
console.log(villeContenantUnTiret);

var villeSansTiretSansEspace = villes.filter(v=> !v.includes(" ")&& !v.includes("-"));

console.log(villeSansTiretSansEspace);

var villesMajusculeSeTerminantParS = villes.filter(v=>v.lastIndexOf("s")).map(v=>v.toUpperCase());
console.log(villesMajusculeSeTerminantParS);