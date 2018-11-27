console.log("--------------------------TP 02 TABLEAUX----------------------------")

var villes = ['Nantes', 'Paris', 'Saint-Nazaire', 'Angers', 'Le Mans']


// afficher les villes avec un forEach
villes.forEach(function(element){
    console.log(element);
})


// Avec every() déterminer si toutes les villes de la variable "villes" contiennent la lettre A
var lettreA = function(element, index, array) {
    a.include(element);
}

villes.every(lettreA);