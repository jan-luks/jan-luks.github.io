#include <iostream>
using namespace std;


int main() {

    // Deklarace a inicializace
    const int vel = 4; // Inicializace velikosti ctverce

    // Vnejsi cyklus pro radky
    for(int i = 1; i <= vel; i++) {

        // Vnitrni cyklus pro jednotlive hvezdicky
        for(int j = 1; j <= vel; j++) {            

            // Vypiseme hvezdicky
            if(i == 1 || i == vel) {
                cout << "* ";
            }
            else if(j == 1 || j == vel) {
                cout << "* ";
            }

            // Pro vnitrek vypiseme pouze mezery
            else {
                cout << "  ";
            }

        }

        // Vypiseme novou radku
        cout << endl;

    }

}
