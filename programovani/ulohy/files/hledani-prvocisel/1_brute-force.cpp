#include <iostream>
using namespace std;


int main() {

    // Deklarace a inicializace
    const int vel = 100; // Inicializace limitu - do kolika cisel hledame
    bool pole[vel + 1]; // Deklarujeme velikost pole 
    pole[0] = pole[1] = 0; // 0 a 1 nejsou prvocisla

    // Pripravime si pole - projdeme ho
    for(int i = 2; i <= vel; i++) {

        // Naplnime ho hodnotou true
        pole[i] = 1;

    }

    // Projdeme pole
    for(int i = 2; i <= vel; i++) {

        // Kazde cislo budeme zkouset delit cisly mensimi nez je ono samotne a vetsi nez nebo rovno 2
        for(int k = i - 1; k >= 2; k--) {

            // Pokud najdeme delitele jakehokoliv delitele
            if(i % k == 0) {

                // Cislo neni prvocislo
                pole[i] = 0;
                
            }

        }

    }
    
    // Projdeme pole
    for(int i = 0; i <= vel; i++) {

        // Pokud je cislo prvocislem
        if(pole[i] == 1) {

            // Vypiseme ho
            cout << i << endl;

        }

    }

}
