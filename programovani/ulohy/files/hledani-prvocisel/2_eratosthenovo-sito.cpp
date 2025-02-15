#include <iostream>
#include <cmath>
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

    // Projdeme kazdy prvek pole az do odmocniny z velikosti zaokrouhlene dolu
    for(int i = 2; i <= sqrt(vel); i++) {

        // Pokud najdeme prvocislo
        if(pole[i] == 1) {

            // Projdeme si pole vzdy o nasobky prvocisla
            for(int j = i * i; j <= vel; j += i) {

                // Kazdy nasobek je delitelny prvocislem
                pole[j] = 0;

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