#include <iostream>
using namespace std;


int main() {

    // Deklarace a inicializace
    const int vel = 6; // Inicializace velikosti trojuhelniku

    // Vnejsi cyklus pro radky
    for(int i = 1; i <= vel; i++) {
        
        // Vnitrni cyklus pro jednotlive hvezdicky
        for(int j = 1; j <= i; j++)

            // Vypiseme hvezdicky
            cout << "* ";

        // Vypiseme novou radku
        cout << endl;

    }

}
