#include <iostream>
using namespace std;


int main() {

    // Deklarace a inicializace
    const int vel = 7; // Inicializace velikosti trojuhelniku
    int pom = vel/2; // Inicializace pomocne promenne

    // Vnejsi cyklus pro radky
    for(int i = 1; i <= vel; i = i + 2) {
        
        // Vnitrni cyklus pro jednotlive hvezdicky
        for(int j = 1; j <= i + pom; j++) {

            // Pro zacatecni prazdne bunky
            if(pom >= j) {

                // Vypiseme pouze mezeru
                cout << "  ";

            }

            // Pokud jsme jiz v limitu
            else {

                // Vypiseme hvezdicku
                cout << "* ";

            }

        }            

        // Vypiseme novou radku
        cout << endl;

        // Pridame sloupec pocitadlu
        pom--;

    }

    // Vyresetujeme pomocnou promennou
    pom = 1;

    // Vnejsi cyklus pro radky
    for(int i = vel - 2; i >= 1; i = i - 2) {
        
        // Vnitrni cyklus pro jednotlive hvezdicky
        for(int j = 1; j <= i + pom; j++) {

            // Pro zacatecni prazdne bunky
            if(pom >= j) {

                // Vypiseme pouze mezeru
                cout << "  ";

            }

            // Pokud jsme jiz v limitu
            else {

                // Vypiseme hvezdicku
                cout << "* ";

            }

        }            

        // Vypiseme novou radku
        cout << endl;

        // Pridame sloupec pocitadlu
        pom++;

    }

}
