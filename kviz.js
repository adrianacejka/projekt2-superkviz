// Nejdříve si vytvoř objekt, který bude držet voje super otázky :-)

const otazky = [
    {
        cislo: 1,
        otazka: 'Co je ikonická hračka z 80. let?',
        obrazek: 'obrazky/moncicak.jpg',
        moznosti: [
            'kočičák', 'mončičák', 'opičák' 
        ],
        spravnaOdpoved: 'moznosti.indexOf("mončičák")'
    },
    {
        cislo: 2,
        otazka: 'Jaké je Adriany nejoblíbenější ovoce?',
        obrazek: 'obrazky/ovoce.jpg',
        moznosti: [
            'kokos', 'jahoda', 'meloun', 'ani jedno'
        ],
        spravnaOdpoved: 'moznosti.indexOf("meloun")'
    },
    {
        cislo: 3,
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


// vyberu div pro obrázek
let foto = document.querySelector('.foto');

// vyberu ul pro jednotlivé odpovědi
let odpovedi = document.querySelector('#odpovedi');


// <!--A nakonci bude tady výsledek - nejdřív vidět není a poté ano. U otázek je to opačně.-->
let vysledek = document.querySelector('.vysledek');
let hodnoceni = document.querySelector('#hodnoceni');


// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení
function zobrazOtazku() {
         
    poradi.textContent = 'Otázka ' + otazky[0].cislo +'/' + otazky.length;
    otazka.textContent = otazky[0].otazka;
    
    let obrazek = document.createElement('img');
    obrazek.id = 'obrazek';
    obrazek.src = otazky[0].obrazek;

    foto.appendChild(obrazek);

    // vytvořím virtuální li pro možnosti odpovědí
    

    for (i = 0; i < otazky[0].moznosti.length; i++) {

        let odpoved = document.createElement('li');
        odpoved.textContent = otazky[0].moznosti[i];

        odpovedi.appendChild(odpoved);
   }

}

zobrazOtazku();




// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())
function klikNaOdpoved() {}

// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazi výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML
// Touto funkcí končí můj program (budu se rozhodovat, zda ji zavolat v rámci klikNaOdpoved())
function zobrazVyhodnoceni() {}