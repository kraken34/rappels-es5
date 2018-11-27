var lg = console.log;

villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes
    .forEach(ville => lg(ville));

lettreADansToutesLesVilles = villes.every(ville => ville.includes('a'));
lg('lettreADansToutesLesVilles = '+lettreADansToutesLesVilles);    

auMoinsUneVilleAvecUnTiret = villes.some((ville) => ville.includes('-'));
lg('auMoinsUneVilleAvecUnTiret = '+auMoinsUneVilleAvecUnTiret);

villesSansTiretSansEspace = villes.filter(ville => (!ville.includes(' '))&&(!ville.includes('-')) );

lg('villesSansTiretSansEspace : ');
lg(villesSansTiretSansEspace);

villesMajusculeSeTerminantParS = villes
                                        .map(ville => ville = ville.toUpperCase())
                                        .map(ville=> !ville.endsWith('S')? ville+'S' :ville);

lg('villesMajusculeSeTerminantParS :');
lg(villesMajusculeSeTerminantParS);                                        
                                        