#include <iostream>
using namespace std;


int main() {

    // Deklarace a inicializace
    const int vel = 4; // Inicializace velikosti pyramidy
    int pom = vel - 1; // Inicializace pomocne promenne

    // Vnejsi cyklus pro radky
    for(int i = 1; i <= vel; i++) {
        
        // Vnitrni cyklus pro jednotlive hvezdicky
        for(int j = 1; j <= vel + i - 1; j++) {

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

}
