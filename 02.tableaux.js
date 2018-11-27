console.log("01 - Les tableaux");
var villes = ["nantes", "paris", "saint-nazaire", "angers", "le mans"]

villes.forEach(v => console.log(v));
var lettreAdansToutesLesVilles = villes.every(v => v.includes('a'));
console.log("lettreAdansToutesLesVilles = ",lettreAdansToutesLesVilles);
var auMoinsUneVilleAvecUnTiret = villes.some(v => v.includes('-'));
console.log("auMoinsUneVilleAvecUnTiret = ",auMoinsUneVilleAvecUnTiret);
var villesSansTiretSansEspace = villes.filter(v => (!v.includes(' ')&&!v.includes('-')));
console.log("villesSansTiretSansEspace  = ",villesSansTiretSansEspace);

//Chainer les fonctions (tab -> fin par s, mise maj)
var villesMajusculeSeTerminantParS = villes.filter(v=>v.lastIndexOf("s")).map(v=> v.toUpperCase());
console.log("villesMajusculeSeTerminantParS  = ",villesMajusculeSeTerminantParS);