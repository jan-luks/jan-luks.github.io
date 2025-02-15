#include <iostream>
using namespace std;


int main() {

    // Deklarace a inicializace
    const int vel = 4; // Inicializace velikosti ctverce

    // Cyklus pro namalovani obrazce
    for(int i = 1; i <= vel * vel; i++) {

        // Vypiseme hvezdicky
        cout << "* ";

        // Pokud jsme dosli na konec radky 
        if(i % vel == 0)

            // Vypiseme novou radku
            cout << endl;

    }

}
