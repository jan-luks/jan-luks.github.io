// Deklarace a inicializace
n = 30; // Inicializujeme posledni zkousene cislo
pole = []; // Inicializujeme pole
pole.push(0); // Pushneme na nulovy index nulu

// Cyklus pro zjisteni souctu delitelu
for(i = 1; i <= n; i++) {

    // Pridame do pole prvek o nulove hodnote
    pole.push(0);

    // Vnitrni cyklus pro testovani kazdeho cisla
    for(j = Math.floor(Math.sqrt(i)); j > 0; j--) {

        // Pokud je dane cislo delitel
        if(i % j == 0) {              

            // Pricteme ho do pole
            pole[i] += j;

            // Pokud druhy delitel odvozeny od prvniho neni stejny jako prvni
            if (j != i / j && i / j != i) {

                // Pricteme ho do pole
                pole[i] += i / j;

            }

        }

    }

}

// Vypis cisel, kde soucet jeho delitelu je mensi, nez cislo
console.log("Abundantni cisla jsou: ");

// Cyklus pro vypsani cisel
for(i = 2; i <= n; i++) {

    // Pokud je hodnota v poli (soucet delitelu) mensi nez cislo
    if(pole[i] > i) {

        // Vypiseme ho
        console.log(i);

    }

}

// Vypis cisel, kde soucet jeho delitelu je vetsi, nez cislo
console.log("Deficientni cisla jsou: ");

// Cyklus pro vypsani cisel
for(i = 2; i <= n; i++) {

    // Pokud je hodnota v poli (soucet delitelu) vetsi nez cislo
    if(pole[i] < i) {

        // Vypiseme ho
        console.log(i);

    }

}

// Vypis cisel, kde soucet jeho delitelu je rovna cislu
console.log("Dokonala cisla jsou: ");

// Cyklus pro vypsani cisel
for(i = 2; i <= n; i++) {

    // Pokud je hodnota v poli (soucet delitelu) rovna cislu
    if(pole[i] == i) {

        // Vypiseme ho
        console.log(i);

    }
    
}