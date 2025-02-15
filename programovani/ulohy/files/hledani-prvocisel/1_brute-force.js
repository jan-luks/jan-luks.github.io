// Deklarace a inicializace
const vel = 100; // Inicializace limitu - do kolika cisel hledame
var pole = []; // Deklarujeme pole
pole[0] = pole[1] = false; // 0 a 1 nejsou prvocisla

// Pripravime si pole - projdeme ho
for(var i = 2; i <= vel; i++) {

    // Naplnime ho hodnotou true
    pole[i] = true;

}

// Projdeme pole
for(var i = 2; i <= vel; i++) {

    // Kazde cislo budeme zkouset delit cisly mensimi nez je ono samotne a vetsi nez nebo rovno 2
    for(var k = i - 1; k >= 2; k--) {

        // Pokud najdeme delitele jakehokoliv delitele
        if(i % k == 0) {

            // Cislo neni prvocislo
            pole[i] = false;

        }      

    }

}

// Projdeme pole
for(var i = 0; i <= vel; i++) {

    // Pokud je cislo prvocislem
    if(pole[i] == true) {

        // Vypiseme ho
        console.log(i); 

    }

}