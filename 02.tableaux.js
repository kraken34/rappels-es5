let villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans']
villes.forEach(v => console.log(v))

console.log(villes.every(v => v.includes("a")))

console.log(villes.some(v => v.includes("-")))

let villesSansTiretSansEspace = villes.filter(v => !v.includes(" ") && !v.includes("-"))

console.log(villesSansTiretSansEspace)

let villesMajusculeSeTerminantParS = villes.filter(v => v.substring(v.length - 1) == "s").map(v => v.toLocaleUpperCase())

console.log(villesMajusculeSeTerminantParS)