// Deklarace a inicializace
var pole = [10, 20, 30, 35, 40, 45, 50, 70, 80, 120, 140, 141, 150, 160]; // Inicializujeme serazene pole s nahodnym poctem prvku
var hle = 141; // Inicializujeme hledane cislo
var vel = pole.length; // Inicializujeme velikost pole

ind = binarneNajdi(pole, hle, 0, vel); // Inicializujeme index, na kterem se cislo naleza

// Pokud jsme nenasli nic
if(ind == -1) {

    // Vypiseme hlasku
    console.log("Hodnota " + hle + " se nenachazi v poli!");

}

// Pokud jsme nasli nejakou hodnotu
else {

    // Vypiseme hlasku
    console.log("Hodnota " + hle + " se nachazi v poli na indexu " + ind);

}

// Funkce pro nalezeni indexu
function binarneNajdi(pole, hodnota, zacatek, konec) {

    // Dokud jsme nedosli na konec pole
    while(zacatek <= konec) {
        
        // Deklarujeme a inicializujeme
        var stred = parseInt((zacatek + konec) / 2); // Inicializujeme stredovou hodnotu
        
        // Pokud se hledana hodnota rovna stredu
        if(pole[stred] == hodnota) {

            // Vratime stred (index)
            return stred;

        }

        // Pokud je hledana hodnota mensi, nez ta na stredu
        if(pole[stred] > hodnota) {

            // Bude konecna hodnota stred o jedna mensi
            konec = stred - 1;

        }

        // Pokud je hledana hodnota vetsi, nez ta na stredu
        else {

            // Bude zacatecni hodnota stred o jedna vetsi
            zacatek = stred + 1;

        }

    }

    // Vratime -1, pokud jsme zadnou hodnotu nenasli
    return -1;

}