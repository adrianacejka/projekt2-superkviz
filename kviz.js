const otazky = [
    {
        cislo: 1,
        otazka: 'Co je ikonická hračka z 80. let?',
        obrazek: 'obrazky/moncicak.jpg',
        moznosti: [
            'kočičák', 'mončičák', 'opičák' 
        ],
        spravnaOdpoved: 1
    },
    {
        cislo: 2,
        otazka: 'Jaké je Matějovo nejoblíbenější ovoce?',
        obrazek: 'obrazky/ovoce.jpg',
        moznosti: [
            'kokos', 'jahoda', 'meloun', 'ani jedno'
        ],
        spravnaOdpoved: 2
    },
    {
        cislo: 3,
        otazka: 'Pro absolvování kurzu je potřeba ...',
        obrazek: 'obrazky/pivo.jpg',
        moznosti: [
            'Umět JavaScript', 'Chodit po kurzu do hospody'
        ],
        spravnaOdpoved: 0
    }
];

let poleOdpovedi = [];

// obalující div celého kvízu
let kviz = document.querySelector('.kviz');
// pořadí otázky
let poradi = document.querySelector('#poradi');
// znění otázky
let otazka = document.querySelector('#otazka');
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
let vybranaOdpoved;
let a = 1;
let odpoved;


// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení
function zobrazOtazku(currentQuestionIndex = 0) {  
    poradi.textContent = 'Otázka ' + otazky[currentQuestionIndex].cislo +'/' + otazky.length;
    otazka.textContent = otazky[currentQuestionIndex].otazka;
    obrazek.id = 'obrazek';
    obrazek.src = otazky[currentQuestionIndex].obrazek;
    foto.appendChild(obrazek);

    otazky[currentQuestionIndex].moznosti.forEach(function(odpoved, idx) {  
        console.log(odpoved);
        odpoved = document.createElement('li');
        odpoved.textContent = otazky[currentQuestionIndex].moznosti[idx];
        odpoved.dataset.odpoved = idx;
        odpovedi.appendChild(odpoved);
        odpoved.addEventListener('click', klikNaOdpoved);   
    });
}


// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())
function klikNaOdpoved(udalost) {
    vybranaOdpoved = udalost.target.dataset.odpoved;
    console.log(udalost.target.dataset.odpoved);

    // pošle označenou odpověď do pole odpovědí
    poleOdpovedi.push(vybranaOdpoved);
    console.log(poleOdpovedi); 

    // vymazat předešlé odpovedi
    let odpovedi = document.querySelectorAll('li');
    console.log(odpovedi);
    odpovedi.forEach(function(odpoved) {
        odpoved.classList.add('vybrane');
    })    

    // vygenerovat novou otázkou
    if (a < otazky.length) {
        zobrazOtazku(a++);
    } else {
        zobrazVyhodnoceni();
    };
}


// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazit výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML
// Touto funkcí končí můj program (budu se rozhodovat, zda ji zavolat v rámci klikNaOdpoved())
function zobrazVyhodnoceni() {
    console.log('Budeme vyhodnocovat...');
}

// spuštění programu
zobrazOtazku();




