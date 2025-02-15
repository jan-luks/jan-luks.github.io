#include <iostream>
using namespace std;


int main() {

    // Deklarace a incializace
    int n = 30; // Inicializujeme velikost Fibonacciho posloupnosti
    int pole[n - 1]; // Inicializujeme pole
    pole[0] = 0; // Inicializujeme prvni Fibonacciho clen
    pole[1] = 1; // Inicializujeme druhy Fibonacciho clen

    // Cyklus pro plneni pole do n 
    for(int i = 2; i < n; i++) {

        // Na klic vlozime hodnoty dvou predchozich klicu
        pole[i] = pole[i-2] + pole[i-1];

    }

    // Cyklus pro vypsani posloupnosti
    for(int i = 0; i < n; i++) {

        // Vypiseme ve tvaru klic - hodnota
        cout << i << " - " << pole[i] << endl;

    }
    
}