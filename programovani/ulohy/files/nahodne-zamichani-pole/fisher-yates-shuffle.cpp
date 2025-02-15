#include <iostream>
#include <time.h>
#include <stdlib.h>
using namespace std;


int main() {

    // Deklarace a inicializace 
    const int vel = 7; // Inicializujeme velikost pole 
    int pole[vel]; // Deklarujeme pole o velikosti

    // Cyklus pro naplneni pole cisly
    for(int i = 0; i < vel; i++) {

        // Na index vlozime hodnotu
        pole[i] = i * 10;

        // Vypiseme ve tvaru klic - hodnota
        cout << i << " - " << pole[i] << endl;

    }

    cout << "-----" << endl;

    // Nastavime seed pro generovani pseudonahodneho cisla
    srand(time(NULL));

    // Cyklus pro randomizaci
    for (int i = vel - 1; i > 0; i--) {

        // Deklarujeme a inicializujeme
        int j = rand() % (i + 1); // Inicializujeme, ziskame nahodnou pozici

        // Provedeme vymenu
        swap(pole[i], pole[j]);

    }

    // Cyklus pro vypsani pole
    for(int i = 0; i < vel; i++) {

        // Vypiseme ve tvaru klic - hodnota
        cout << i << " - " << pole[i] << endl;

    }
    

}