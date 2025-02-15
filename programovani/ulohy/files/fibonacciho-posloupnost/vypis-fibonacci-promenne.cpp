#include <iostream>
using namespace std;


int main() {

    // Deklarace a incializace
    int n = 30; // Inicializujeme velikost Fibonacciho posloupnosti
    int c1 = 0; // Inicializujeme prvni Fibonacciho clen
    int c2 = 1; // Inicializujeme druhý Fibonacciho clen
    int pom = 0; // Inicializujeme pomocnou promennou

    // Vypiseme prvni dva cleny
    cout << c1 << ", " << c2 << ", ";

    // Cyklus pro vypis posloupnosti do n 
    for(int i = 2; i < n; i++) {

        // Do pomocne promenne vlozim aktualni clen
        pom = c2;

        // Do aktualniho clenu vlozim soucet
        c2 = c1 + c2;

        // Do predposledniho clenu vlozim clen z pomocne (posledni)
        c1 = pom;

        // Vypiseme nove vypocitany clen
        cout << c2 << endl;

    }
    
}

