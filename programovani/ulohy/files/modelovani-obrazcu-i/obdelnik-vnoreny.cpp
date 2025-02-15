#include <iostream>
using namespace std;


int main() {

    // Deklarace a inicializace    
    const int a = 6; // Inicializace strany obdelnika
    const int b = 4; // Inicializace strany obdelnika

    // Vnejsi cyklus pro radky
    for(int i = 1; i <= b; i++) {

        // Vnitrni cyklus pro jednotlive hvezdicky
        for(int j = 1; j <= a; j++) {            

            // Vypiseme hvezdicky
            cout << "* ";

        }

        // Vypiseme novou radku
        cout << endl;

    }

}