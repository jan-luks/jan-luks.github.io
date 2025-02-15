#include <iostream>
using namespace std;


int main() {

    // Deklarace a inicializace
    const int vel = 6; // Inicializace velikosti trojuhelniku

    // Vnejsi cyklus pro radky
    for(int i = vel; i >= 1; i--) {
        
        // Vnitrni cyklus pro jednotlive hvezdicky
        for(int j = i; j >= 1; j--)

            // Vypiseme hvezdicky
            cout << "* ";

        // Vypiseme novou radku
        cout << endl;

    }

}
