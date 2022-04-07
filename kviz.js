// let obsah = document.createElement('div');
// kviz.className = 'obsah';

let otazky = [
    {
        otazka: 'Co je ikonická hračka z 80. let?',
        obrazek: 'obrazky/moncicak.jpg',
        moznosti: [
            'kočičák', 'mončičák', 'opičák' 
        ],
        spravnaOdpoved: 'moznosti.indexOf("mončičák")'
    },
    {
        otazka: 'Jaké je Adriany nejoblíbenější ovoce?',
        obrazek: 'obrazky/ovoce.jpg',
        moznosti: [
            'kokos', 'jahoda', 'meloun', 'ani jedno'
        ],
        spravnaOdpoved: 'moznosti.indexOf("meloun")'
    },
    {
        otazka: 'Pro absolvování kurzu je potřeba ...',
        obrazek: 'obrazky/pivo.jpg',
        moznosti: [
            'Umět JavaScript', 'Chodit po kurzu do hospody'
        ],
        spravnaOdpoved: 'moznosti.indexOf("Umět JavaScript")'
    }
]
