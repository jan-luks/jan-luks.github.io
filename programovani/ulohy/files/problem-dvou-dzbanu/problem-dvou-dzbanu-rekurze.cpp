#include <iostream>
using namespace std;

// Deklarace a inicializace funkci
void najdiLitr(int dz1_obj, int dz2_obj, int dz1, int dz2); // Funkce pro nalezeni litru a vypsani kroku


int main() {

    // Deklarace a inicializace
    int dz1_obj = 3; // Inicializujeme objem prvniho dzbanu, objem je vzdy mensi nez dz2_obj
    int dz2_obj = 7; // Inicializujeme objem druheho dzbanu

    // Zavolame funkci 
    najdiLitr(dz1_obj, dz2_obj, 0, 0);
    
}

// Funkce pro nalezeni litru a vypsani kroku
void najdiLitr(int dz1_obj, int dz2_obj, int dz1, int dz2) {
    
    // Vypiseme hlasku
    cout << "Dzban 1: " << dz1 << " --- dzban 2: " << dz2 << endl;

    // Pokud je dzban 2 naplnen
    if(dz2 == dz2_obj) {

        // Zavolame funkci s vylitym druhym dzbanem
        return najdiLitr(dz1_obj, dz2_obj, dz1, 0);

    }
    
    // Pokud je ve dzbanu 1 pozadovany jeden litr kapaliny 
    if(dz1 == 1) {

        // Vratime se z funkce, mame hotovo
        return;

    }

    // Pokud je dzban 1 prazdny 
    else if(dz1 == 0) {

        // Zavolame funkci s naplnenym prvnim dzbanem
        return najdiLitr(dz1_obj, dz2_obj, dz1_obj, dz2);

    }

    // V ostatnich pripadech
    else {

        // Pokud jsou objemy obou dzbanu vyssi, nez je maximalni objem dzbanu 2
        if(dz1 + dz2 > dz2_obj) {
            
            // Naplnime druhy dzban a v prvnim nam zustane zbytek
            return najdiLitr(dz1_obj, dz2_obj, - dz2_obj + dz1 + dz2, dz2_obj);

        }

        // V ostatnich pripadech
        else {

            // Vylijeme dzban 1 do dzbanu 2
            return najdiLitr(dz1_obj, dz2_obj, 0, dz2 + dz1);
            
        }

    }      

}