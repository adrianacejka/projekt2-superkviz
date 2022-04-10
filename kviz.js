// Nejdříve si vytvoř objekt, který bude držet voje super otázky :-)

const otazky = [
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
];

// Dále budeš potřebovat další proměnné - jaké?

// bílá plocha uprostřed stránky, obalující div
let kviz = document.querySelector('.kviz');

// pořadí otázky
let poradi = document.querySelector('#poradi'); // <!--Sem můžeš zapsat pořadí otázky. opět pomocí JS-->

// znění otázky
let otazka = document.querySelector('#otazka'); // <!--A sem už přijde samotná otázka-->

// obalujíci div, uvnitř obrázek + možnosti odpovědí
let obsah = document.querySelector('.obsah');


// vytvořím div pro obrázek k otázce
let foto = document.createElement('div');
foto.className = 'foto';

// vytvořím element pro jednotlivé odpovědi
let moznosti = document.createElement('div');
moznosti.id = 'moznosti';

// <!--A nakonci bude tady výsledek - nejdřív vidět není a poté ano. U otázek je to opačně.-->
let vysledek = document.querySelector('.vysledek');
let hodnoceni = document.querySelector('#hodnoceni');




// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení
function zobrazOtazku() {}

// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())
function klikNaOdpoved() {}

// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazi výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML
// Touto funkcí končí můj program (budu se rozhodovat, zda ji zavolat v rámci klikNaOdpoved())
function zobrazVyhodnoceni() {}