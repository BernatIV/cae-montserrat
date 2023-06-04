
/*

coses que haurà de fer l'script:

coses post script
- borrar amb l'intellij els \n
 */

export const concertDates = [
    // {
    //     title: '75 aniversari',
    //     place: 'Basílica de Montserrat',
    //     town: 'Montserrat',
    //     date: new Date(2023, 5, 18), // el mes és entre 0 i 11
    //     observations: ''
    // },
    {
        title: 'Acte en memo.de Sra. Roser, activista del barri, morta el març 2020',
        place: 'Parròquia de la Bonanova',
        town: 'Barcelona',
        date: new Date(2021, 10, 24), // tots els mesos son entre 0 i 11 !!!
        observations: 'Nigra Sum, O Cel Blau i Cançó de la Moreneta'
    },
    {
        title: 'Missa de difuns, cantem quatre peces de gegorià',
        place: 'Parròquia de la Bonanova',
        town: 'Barcelona',
        date: new Date(2021, 10, 2),
        observations: ''
    },
    {
        title: 'Cors del Francesc Pugès + Coral A.E.M.',
        place: 'Basílica de Montserrat',
        town: 'Montserrat',
        date: new Date(2019, 9, 20),
        observations: 'Concert homenatge al Pere Pagès'
    },
    {
        title: 'Participació a la missa de 12\n',
        place: 'Parroquia de la Bonanova\n',
        town: 'Barcelona\n',
        date: new Date(2019, 9, 20),
        observations: 'Festa de la Mare de Deu de la Bonanova\n'
    },
    {
        title: 'Graduació MBA\n',
        place: 'IESE\n',
        town: 'Barcelona\n',
        date: new Date(2019, 4, 10),
        observations: ''
    },
    {
        title: 'Himne a la M. Déu de Montserrat i Ave Maria, del P. Anselm Ferrer\n',
        place: 'Basílica de Montserrat\n',
        town: 'Montserrat\n',
        date: new Date(2019, 3, 27),
        observations: 'Esco.i antics escol. 50 anys mort del P. Anselm\n'
    },
    {
        title: 'Requiem de Cherubini i Vespres de Felix Mendelsson\n',
        place: 'Parròquia de Santa Eulàlia\n',
        town: 'Vilanova de la Muga\n',
        date: new Date(2019,3 , 13),
        observations: 'Cicle de Concerts del Mil·lenari\n'
    },
    {
        title: 'Amb l\'Escolania cants en la Missa conventual i la Salve d\'ecos\n',
        place: 'Basílica de Montserrat\n',
        town: 'Montserrat\n',
        date: new Date(2018, 5, 3),
        observations: ''
    },
    {
        title: 'Graduació MBA\n',
        place: 'IESE\n',
        town: 'Barcelona\n',
        date: new Date(2018,4 , 11),
        observations: ''
    },
    {
        title: 'Festa del Monestir\n',
        place: 'Església parroquial\n',
        town: 'Breda\n',
        date: new Date(2018, 3, 21),
        observations: 'Polifonia religiosa i Montserratina\n'
    },
    {
        title: '426 anys de la dedicació de la Basílica de Montserrat\n',
        place: 'Basílica de Montserrat\n',
        town: 'Montserrat\n',
        date: new Date(2018, 1, 3),
        observations: 'Cants a la missa amb l\'escolanía\n'
    },
    {
        title: 'Vespres, cantar amb l\'Escolanía\n',
        place: 'Basílica de Montserrat\n',
        town: 'Montserrat\n',
        date: new Date(2017, 11, 10),
        observations: ''
    },
    {
        title: 'Cantem parts de la missa\n',
        place: 'Ermita del Roser de Pallerols\n',
        town: 'Pallerols\n',
        date: new Date(2017, 11, 2),
        observations: 'Festa de la Rosa Opus Dei\n'
    },
    {
        title: 'Homenatge al pare Ireneu Segarra\n',
        place: 'Palau de la Música Catalana\n',
        town: 'Barcelona\n',
        date: new Date(2017, 10, 19),
        observations: 'Cors,orquestra i directors antics escolans Salv.Mas\n'
    },
    {
        title: 'Cantar l\'Ave Maria del P. Anselm Ferrer\n',
        place: 'Basílica de Montserrat\n',
        town: 'Montserrat\n',
        date: new Date(2017, 10, 17),
        observations: 'Amb l\'Escolanía\n'
    },
    {
        title: 'Cants a la missa de 12\n',
        place: 'Parroquia de la Bonanova\n',
        town: 'Barcelona\n',
        date: new Date(2017, 9, 29),
        observations: ''
    },
    {
        title: 'Concert conjunt amb la coral Cromàtica de Sant Celoni\n',
        place: 'Torre de la Força\n',
        town: 'Sant Celoni\n',
        date: new Date(2017, 5, 18),
        observations: 'Marinada i .......   Cor mixte\n'
    },
    {
        title: 'Peces musicals religioses i populars catalanes\n',
        place: 'Parroquia de Santa María\n',
        town: 'Llerona\n',
        date: new Date(2017, 5, 2),
        observations: ''
    },
    {
        title: 'Vespres, cantar amb l\'Escolanía\n',
        place: 'Basílica de Montserrat\n',
        town: 'Montserrat\n',
        date: new Date(2017, 4, 21),
        observations: ''
    },
    {
        title: 'Graduació MBA\n',
        place: 'IESE\n',
        town: 'Barcelona\n',
        date: new Date(2017, 4, 12),
        observations: ''
    },
    {
        title: 'Concert i populars catalanes\n',
        place: 'Església del Monestir\n',
        town: 'Breda\n',
        date: new Date(2017, 4, 6),
        observations: 'Festa de l\'Agust, reforsos de quatre joves\n'
    },
    {
        title: '425 anys de la dedicació de la basílica\n',
        place: 'Basílica de Montserrat\n',
        town: 'Montserrat\n',
        date: new Date(2017, 1, 3),
        observations: 'A l\'ofertari "Virgo ..." i la salve a la 1 del migdía\n'
    },
];



