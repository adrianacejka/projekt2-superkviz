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

// bílá plocha uprostřed stránky (div) pod ndpisem "Superkvíz"
let obsah = document.createElement('div');
obsah.className = 'obsah';

// vytvořím div pro pořadí 
let poradi = document.createElement('div');
poradi.id = 'poradi';

// vytvořím div pro znění otázky
let otazka = document.createElement('div');
otazka.id = 'otazka';

// vytvořím div pro obrázek k otázce
let obrazekKOtazce = document.createElement('img');
obrazekKOtazce.className = 'foto';

// vytvořím element pro jednotlivé odpovědi
let odpoved = document.createElement('li');







