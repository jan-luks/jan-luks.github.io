// Deklarace a inicializace
const i = 13; // Inicializujeme velikost trojuhelniku
var pole = []; // Deklarujeme pole

// Cyklus pro radky
for(var j = 0; j < i; j++) {

    // Do pole vlozime vlozime dalsi pole
    pole[j] = [];

    // Cyklus pro sloupce (jednotlive hodnoty)
    for(var k = 0; k <= j; k++) {

        // Pokud se jedna o prvni nebo posledni cislo
        if(k == 0 || k == j) {

            // Vzdy je 1
            pole[j][k] = 1;

        }

        // Pro ostatni cisla mezi prvnim a poslednim
        else {

            // Vlozime hodnoty podle vzorecku
            pole[j][k] = pole[j-1][k-1] + pole[j-1][k];

        }

    }

}

// Vypiseme Pascaluv trojuhelnik, cyklus pro radky
for(var j = 0; j < pole.length; j++) {

    // Deklarujeme a incializujeme
    var rad = ""; // Vypisovat musime radku jako text

    // Cyklus pro sloupce (jednotlive hodnoty) 
    for(var k = 0; k < pole[j].length; k++) {

        // Kazdou hodnotu pridame jako string do textu a oddelime tabulatorem
        rad += pole[j][k] + "\t";

    }

    // Vypiseme radku
    console.log(rad);
    
}