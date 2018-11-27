var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];
villes.forEach((ville)=>console.log(ville));
villes.every((ville)=>console.log("lettre 'a' dans toutes les villes = "+ville.includes('a')));
console.log("Au moins une ville avec un tiret = "+villes.some((ville)=>ville.includes('-')));
var villesSansTiretSansEspace = villes.filter((ville)=>!ville.includes('-')&& !ville.includes(' '));
console.log(villesSansTiretSansEspace);
var villesMajusculeSeTerminantParS = villes.map((ville)=>ville.toUpperCase()).filter((ville)=>ville.endsWith('S')); // Inverser le tri et le UpperCase serait plus logique
console.log(villesMajusculeSeTerminantParS);
