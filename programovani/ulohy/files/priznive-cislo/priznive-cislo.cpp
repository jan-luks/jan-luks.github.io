#include <iostream>
using namespace std;


int main() {

    // Deklarace a inicializace
    int n = 300; // Inicializujeme pocet cisel
    int pole[n + 1]; // Deklarujeme pole o spravne velikosti
    int poc = 0; // Inicializujeme pocitadlo
    int vym = 2; // Inicializujeme pozici cisla, podle ktereho budeme vymazavat

    // Pole pro prvotni naplneni, provedeme jiz prvni krok, kdy se zbavime vsech sudych cisel
    for(int i = 0; i <= n; i++) {

        // Pokud je index lichy
        if(i % 2 == 1) {

            // Pridame cislo na index
            pole[i] = i;

        }

        // Pokud je sude
        else {

            // Vynulujeme
            pole[i] = 0;

        }

    }    
    
    // Vnejsi cyklus pro opakovani 
    for(int i = 2; i <= n; i++) {

        // Vnitrni cyklus pro nalezeni cisla, ktere nam urci jaka cisla vymazat
        for(int j = 1; j <= n; j++) {

            // Pokud se jedna o jakekoliv cislo
            if(pole[j] != 0) {

                // Pricteme k pocitadlu 1
                poc++;

            }

            // Pokud se jsme nasli hledane cislo
            if(poc == i) {

                // Ulozime cislo, podle ktereho budeme vymazavat
                vym = pole[j];

                // Resetujeme pocitadlo
                poc = 0;

                // Prerusime vnitrni cyklus
                break;

            }

            // Pokud jsme dosli na konec, mame hotovo
            if(j == n) {

                // Ulozime si cislo, podle ktereho ukoncime vnejsi cyklus
                vym = -1;

                // Prerusime vnitrni cyklus
                break;
            }
        }

        // Pokud jsme na konci programu
        if(vym == -1) {

            // Prerusime vnejsi cyklus
            break;
        }

        // Cyklus pro mazani cisel
        for(int j = 1; j <= n; j++) {

            // Pokud je jakekoliv cislo
            if(pole[j] != 0) {

                // Zvedneme pocitadlo o 1
                poc++;

                // Pokud dojdeme k zadanemu poctu
                if(poc == vym) {

                    // Vymazeme cislo v poli
                    pole[j] = poc = 0;

                }

            }

        }

        // Vyresetujeme pocitadlo
        poc = 0;

    }

    // Cyklus pro vypsani priznivych cisel
    for(int i = 1; i <= n; i++) {

        // Pokud se na indexu nachazi cislo
        if(pole[i] != 0) {

            // Vypiseme ho
            cout << i << ", ";

        }

    }

}
