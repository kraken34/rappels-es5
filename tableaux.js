console.log('** TP 02 - LES TABLEAUX **')


// Créer un tableau de villes
var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans']


// Afficher tous les éléments d'un tableau avec un forEach
function afficher(element) {
    console.log(element)
}

villes.forEach(afficher)


// Afficher les villes commençant par A
function lettreADansToutesLesVilles(element) {
    return element.includes('a')
}
console.log(villes.every(lettreADansToutesLesVilles))



// Déterminer si au moins une ville contient '-'
function auMoinsUneVilleAvecUnTiret(element) {
    return element.includes('-')
}
console.log(villes.some(auMoinsUneVilleAvecUnTiret))



// renvoyer un tableau dont les villes n'ont ni espace ni tiret
function villesSansTiretSansEspace(element) {
    return !element.includes('-') && !element.includes(' ')
}
console.log(villes.filter(villesSansTiretSansEspace))



// Construire un tableau avec la première et dernière lettre du prénom
var resultat4 = villes.
                        filter(function(el) {
                           return el.endsWith('s')
                        })
                        .map(function(el) {
                            return el.toUpperCase()
                        })
console.log(resultat4)