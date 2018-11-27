console.log("--------------------------TP 02 TABLEAUX----------------------------")

var villes = ['Nantes', 'Paris', 'Saint-Nazaire', 'Angers', 'Le Mans']


// afficher les villes avec un forEach
villes.forEach(function(element){
    console.log(element);
})


// Avec every() déterminer si toutes les villes de la variable "villes" contiennent la lettre A
var lettreA = function(element, index, array) {
    return element.toLowerCase().includes('a');
}
var result = villes.every(lettreA);
console.log(result)



// déterminer avec "some()" si au moins une ville de la variables "villes" contient le caractère -
var auMoinsUneVilleAvecUnTiret = function(element, index, array) {
    return element.includes('-');
}

var result2 = villes.some(auMoinsUneVilleAvecUnTiret)
console.log(result2)




// Afficher tableaux des villes sans tiret ni espace
var villesSansTiretSansEspace = function(element) {
    return !element.includes('-') && !element.includes(' ')
}

var result3 = villes.filter(villesSansTiretSansEspace)
console.log(result3)



// Chainer les fonctions
var result4 = villes.
                    // garder ceux qui ont 's' à la fin
                    filter(function(el) {
                        return el.endsWith('s')
                    })
                    // transformer en majuscule
                    .map(function(el) {
                        return el.toUpperCase()
                    })
console.log(result4)