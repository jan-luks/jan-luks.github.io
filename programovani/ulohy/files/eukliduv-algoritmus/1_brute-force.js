// Demonstrace
console.log("Nejvetsi spolecny delitel cisel 77 a 28 je: " + nejvetsiDelitel(77, 28) + ", nejmensi spolecny nasobek je: " + nejmensiNasobek(77, 28));
console.log("Nejvetsi spolecny delitel cisel 1517 a 2952 je: " + nejvetsiDelitel(1517, 2952) + ", nejmensi spolecny nasobek je: " + nejmensiNasobek(1517, 2952));

// Funkce pro nalezeni nejvetsiho spolecneho delitele
function nejvetsiDelitel(i, j) {

    // Otestujeme nejprve cisla na nuly
    if (i == 0 || j == 0) {

        // Vratime nulu
        return 0

    }

    // Cyklus na testovani delitele
    for(var k = j; k >= 1; k--) {

        // Pokud najdu cislo, ktere je delitelem
        if(i % k == 0 && j % k == 0) {

            // Vratim ho
            return k;

        }

    }

    // Kontrolni vraceni 0
    return 0;

}

// Funkce pro nalezeni nejmensiho spolecneho nasobku
function nejmensiNasobek(i, j) {

    // Cyklus na testovani nasobku
    for(var k = i; k <= i*j; k++) {

        // Pokud najdu cislo, ktere je nasobkem
        if(k % i == 0 && k % j == 0) {

            // Vratim ho
            return k;

        }

    }

    // Kontrolni vraceni 0
    return 0;
    
}