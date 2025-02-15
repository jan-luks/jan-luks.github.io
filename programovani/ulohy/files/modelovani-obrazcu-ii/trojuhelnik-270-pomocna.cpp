#include <iostream>
using namespace std;


int main() {

    // Deklarace a inicializace
    const int vel = 6; // Inicializace velikosti trojuhelniku
    int pom = vel; // Inicializace pomocne promenne

    // Vnejsi cyklus pro radky
    for(int i = 1; i <= vel; i++) {
        
        // Vnitrni cyklus pro jednotlive hvezdicky
        for(int j = 1; j <= vel; j++) {

            // V pripade, ze budeme v limitu
            if(j < pom)

                // Vypiseme mezery
                cout << "  ";

            // V opacnem pripade
            else

                // Vypiseme hvezdicky
                cout << "* ";

        }            

        // Inkrementujeme pomocnou promennou
        pom--;

        // Vypiseme novou radku
        cout << endl;

    }

}
