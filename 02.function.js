var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans']

////////////////////// Utilisation de la méthode forEach ////////////////////////

villes.forEach(function(el) {

    console.log(el)

})

/////////////////// Utilisation de la méthode every() ///////////////////////

var lettreA = function(element) {
    return element.includes('a');
}

console.log(villes.every(lettreA))


//////////////////////// Utilisation d ela méthode some() /////////////////////////


var tiret = function(i) {
    return i.includes('-');
}

console.log(villes.some(tiret))

//////////////////////// Utilisation de la méthode filter() ///////////////////////////

var sansTiretEspace = function(elt) {
    return !elt.includes('-') && !elt.includes(' ')
}

console.log(villes.filter(sansTiretEspace))

////////////////////// Chainer des fonctions //////////////////////////

var tab = function(e) {
    return e.endsWith('s')
}

var tabFiltrer = villes.filter(tab)

var maj = tabFiltrer.map(function(e) {
    
    return e.toUpperCase()
})

console.log(maj)

