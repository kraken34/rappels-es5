var villes = new Array("nantes", "paris", "saint-nazaire", "angers", "le mans");

//foreach
villes.forEach(function (element) {
    console.log(element);
})

//every()
var contientA = function (element) {
    if (element.includes('a')) {
        return true;
    } else {
        return false;
    }

}
console.log("lettreADansToutesLesVilles =", villes.every(contientA));

console.log(villes.every((ville) => ville.includes('a')));

//some()
var auMoinsUnTiret = function (element) {
    if (element.includes('-')) {
        return true;
    } else {
        return false;
    }
}
console.log("auMoinsUneVilleAvecUnTiret =", villes.some(auMoinsUnTiret));
console.log(villes.some((ville) => ville.includes('-')));

//filter()
var niTiretNiEspace = function (element) {
    if (!element.includes('-')) {
        if (!element.includes(' ')) {
            return true;
        }
    }
}
console.log("villesSansTiretSansEspace =", villes.filter(niTiretNiEspace));

var S_et_Uppercase = villes.filter(function(element) {
        return element.lastIndexOf("s") == element.length -1;
}).map(function (element){
    return element.toUpperCase();
});
console.log("villesMajusculeSeTerminantParS =", S_et_Uppercase);





