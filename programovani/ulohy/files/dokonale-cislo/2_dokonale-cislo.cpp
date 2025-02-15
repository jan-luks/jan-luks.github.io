#include <iostream>
#include <cmath>
using namespace std;

int main() {

    // Deklarace a inicializace
    int n = 30; // Inicializujeme posledni zkousene cislo
    int pole[n+1] = {0}; // Inicializujeme resetovane pole

    // Cyklus pro zjisteni souctu delitelu
    for(int i = 1; i <= n; i++) {

        // Vnitrni cyklus pro testovani kazdeho cisla
        for(int j = sqrt(i); j > 0; j--) {

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
    cout << "Abundantni cisla jsou: ";

    // Cyklus pro vypsani cisel
    for(int i = 2; i <= n; i++) {

        // Pokud je hodnota v poli (soucet delitelu) mensi nez cislo
        if(pole[i] > i) {

            // Vypiseme ho
            cout << i << ", ";

        }

    }

    // Oddelime novou radkou
    cout << endl;
    
    // Vypis cisel, kde soucet jeho delitelu je vetsi, nez cislo
    cout << "Deficientni cisla jsou: ";

    // Cyklus pro vypsani cisel
    for(int i = 2; i <= n; i++) {

        // Pokud je hodnota v poli (soucet delitelu) vetsi nez cislo
        if(pole[i] < i) {

            // Vypiseme ho
            cout << i << ", ";

        }

    }

    // Oddelime novou radkou
    cout << endl;

    // Vypis cisel, kde soucet jeho delitelu je rovna cislu
    cout << "Dokonala cisla jsou: ";

    // Cyklus pro vypsani cisel
    for(int i = 2; i <= n; i++) {

        // Pokud je hodnota v poli (soucet delitelu) rovna cislu
        if(pole[i] == i) {

            // Vypiseme ho
            cout << i << ", ";

        }
        
    }

}
