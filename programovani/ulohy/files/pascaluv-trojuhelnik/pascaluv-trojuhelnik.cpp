#include <iostream>
using namespace std;


int main() {

    // Deklarace a inicializace 
    const int i = 8; // Inicializujeme velikost trojuhelniku
    int pole[i][i]; // Deklarujeme dvourozmerne pole

    // Cyklus pro radky
    for (int j = 0; j < i; j++) {

        // Cyklus pro sloupce (jednotlive hodnoty)
        for (int k = 0; k < i; k++) {

            // Pokud se jedna o prvni nebo posledni cislo
            if(k == 0 || k == j) {

                // Vzdy je 1
                pole[j][k] = 1;

            }

            // Pro ostatni cisla mezi prvnim a poslednim
            else if(k > 0 && k < j) {

                // Vlozime hodnoty podle vzorecku
                pole[j][k] = pole[j-1][k-1] + pole[j-1][k];

            }

            // Pokud jsou mimo rozsah
            else {

                // Vynulujeme
                pole[j][k] = 0;

            }

        }

    }

    // Vypiseme Pascaluv trojuhelnik, cyklus pro radky
    for (int j = 0; j < i; j++) {

        // Cyklus pro sloupce (jednotlive hodnoty)
        for (int k = 0; k < i; k++) {

            // Pokud neni hodnota nula
            if(pole[j][k] != 0) {

                // Vypiseme ji
                cout << pole[j][k] << "\t";

            }

        }

        // Na konci vlozime novy radek
        cout << endl;

    }    

}