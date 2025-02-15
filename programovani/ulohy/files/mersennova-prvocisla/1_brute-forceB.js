// Deklarace a inicializace
const i = 20; // Inicializujeme posledni testovane cislo

// Cyklus pro testovani cisel
for(var j = 2; j <= i; j++) {

    // Inicializujeme mocninu v poradi
    var k = mocnina(2, j) - 1;

    // Pokud se jedna o prvocislo
    if(jePrvocislo(k)) {

        // Vypiseme ho
        console.log(k);

    }

}

// Funkce pro testovani prvocisla
function jePrvocislo(i) {

    // Projdeme kazdy prvek pole az do odmocniny z velikosti zaokrouhlene dolu
    for(var j = 2; j <= Math.sqrt(i + 1); j++) {

        // Pokud najdeme jakehokoliv delitele
        if(i % j == 0) {

            // Vratime false
            return false;

        }   

    }

    // Po uspesnem projiti vratime true
    return true;
    
}

// Funkce pro vypocet mocniny
function mocnina(i, j) {

    // Vratime jednicku, pokud je exponent 0
    if(j == 0) {
        return 1;
    }

    // V opacnem pripade
    else {

        // Deklarujeme a inicializujeme pomocnou promennou
        var pom = 1;

        // Pomoci cyklu provedeme umocneni
        for(var k = 1; k <= j; k++) {
            pom *= i;
        }

        // Vratime pomocnou promennou
        return pom;

    }

}