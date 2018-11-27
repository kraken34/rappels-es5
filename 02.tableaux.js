function cl(message ,affichage){
    console.log(message,affichage);
}
var villes=["nantes","paris","saint-nazaire","angers","le mans"];
villes.forEach(function(lieu){
    console.log(lieu);
})

var lettreADansToutesLesVilles =villes.every((lieu)=>lieu.includes('a'))
cl("lettreADansToutesLesVilles =",lettreADansToutesLesVilles);

var auMoinsUneVilleAvecUnTiret=villes.some((lieu)=>lieu.includes("-"))
cl("auMoinsUneVilleAvecUnTiret =",auMoinsUneVilleAvecUnTiret)

var villesMajusculeSeTerminantParS=villes.filter((lieu)=>lieu.charAt(lieu.length-1)=='s').map((lieu)=>lieu.toUpperCase())
cl("villesMajusculeSeTerminantParS =",villesMajusculeSeTerminantParS)