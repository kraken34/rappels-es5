var villes=["nantes","paris","saint-nazaire","angers","le mans"];
villes.forEach(function(lieu){
    console.log(lieu);
})

var lettreADansToutesLesVilles =villes.every((lieu)=>lieu.includes('a'))
console.log(lettreADansToutesLesVilles);
