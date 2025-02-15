// Deklarace a inicializace
var pole = [10, 20, 30, 35, 40, 45, 50, 70, 80, 120, 140, 141, 150, 160]; // Inicializujeme serazene pole s nahodnym poctem prvku
var hle = 141; // Inicializujeme hledane cislo
var vel = pole.length; // Inicializujeme velikost pole

ind = linearneNajdi(pole, hle, vel); // Inicializujeme index, na kterem se cislo naleza

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
function linearneNajdi(pole, hodnota, velikost) {

     // Cyklus pro nalezeni hodnoty
     for(i = 0; i < velikost; i++) {

        // Pokud jsme nasli hodnotu
        if(pole[i] == hodnota) {
            
            // Vratime index na kterem se nachazi
            return i;

        }

    }    

    // Vratime -1, pokud jsme zadnou hodnotu nenasli
    return -1;

}