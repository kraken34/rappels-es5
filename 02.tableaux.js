var lg = console.log;

villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes
    .forEach(ville => lg(ville));


lg('lettreADansToutesLesVilles = '+villes.every(ville => ville.includes('a')));    
