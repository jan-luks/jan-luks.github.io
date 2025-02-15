#include <iostream>
using namespace std;


int main() {

    // Deklarace a inicializace
    const int a = 6; // Inicializace strany obdelnika
    const int b = 4; // Inicializace strany obdelnika

    // Cyklus pro namalovani obrazce
    for(int i = 1; i <= a * b; i++) {

        // Vypiseme hvezdicky
        cout << "* ";

        // Pokud jsme dosli na konec radky 
        if(i % a == 0)

            // Vypiseme novou radku
            cout << endl;

    }

}
