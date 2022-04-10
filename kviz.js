// Nejdříve si vytvoř objekt, který bude držet voje super otázky :-)

const otazky = [
    {
        cislo: 1,
        otazka: 'Co je ikonická hračka z 80. let?',
        obrazek: 'obrazky/moncicak.jpg',
        moznosti: [
            'kočičák', 'mončičák', 'opičák' 
        ],
        spravnaOdpoved: 'otazky[0].moznosti.indexOf("mončičák")'
    },
    {
        cislo: 2,
        otazka: 'Jaké je Adriany nejoblíbenější ovoce?',
        obrazek: 'obrazky/ovoce.jpg',
        moznosti: [
            'kokos', 'jahoda', 'meloun', 'ani jedno'
        ],
        spravnaOdpoved: 'otazky[1].moznosti.indexOf("meloun")'
    },
    {
        cislo: 3,
        otazka: 'Pro absolvování kurzu je potřeba ...',
        obrazek: 'obrazky/pivo.jpg',
        moznosti: [
            'Umět JavaScript', 'Chodit po kurzu do hospody'
        ],
        spravnaOdpoved: 'otazky[2].moznosti.indexOf("Umět JavaScript")'
    }
];

// obalující div celého kvízu
let kviz = document.querySelector('.kviz');

// pořadí otázky
let poradi = document.querySelector('#poradi'); // <!--Sem můžeš zapsat pořadí otázky. opět pomocí JS-->

// znění otázky
let otazka = document.querySelector('#otazka'); // <!--A sem už přijde samotná otázka-->

// obalujíci div, uvnitř obrázek + možnosti odpovědí
let obsah = document.querySelector('.obsah');


// vyberu div pro obrázek
let foto = document.querySelector('.foto');

// vytvořím img element, budu přiřazovat src
let obrazek = document.createElement('img');

// vyberu ul pro jednotlivé odpovědi
let odpovedi = document.querySelector('#odpovedi');


// <!--A nakonci bude tady výsledek - nejdřív vidět není a poté ano. U otázek je to opačně.-->
let vysledek = document.querySelector('.vysledek');
let hodnoceni = document.querySelector('#hodnoceni');



// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení

function zobrazOtazku(x) {  
    
    poradi.textContent = 'Otázka ' + otazky[x].cislo +'/' + otazky.length;
    otazka.textContent = otazky[x].otazka;
    
    obrazek.id = 'obrazek';
    obrazek.src = otazky[x].obrazek;
    foto.appendChild(obrazek);

    for (let i = 0; i < otazky[x].moznosti.length; i++) {
    
        let odpoved = document.createElement('li');
        odpoved.dataset.odpoved = i;
        odpoved.textContent = otazky[x].moznosti[i];

        odpovedi.appendChild(odpoved);

        odpoved.addEventListener('click', function() {
            console.log('test');
        });
        
    }

}

for (let x = 0; x < otazky.length; x++) {
    zobrazOtazku(x);
    break;
    
};



// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())
function klikNaOdpoved() {

};

// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazit výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML
// Touto funkcí končí můj program (budu se rozhodovat, zda ji zavolat v rámci klikNaOdpoved())
function zobrazVyhodnoceni() {}