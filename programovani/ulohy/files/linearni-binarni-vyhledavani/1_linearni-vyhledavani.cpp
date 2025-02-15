#include <iostream>
using namespace std;

// Deklarace a inicializace funkci
int linearneNajdi(int pole[], int hodnota, int velikost); // Funkce pro nalezeni indexu

int main() {

    // Deklarace a inicializace
    int pole[] = {10, 20, 30, 35, 40, 45, 50, 70, 80, 120, 140, 141, 150, 160}; // Inicializujeme serazene pole s nahodnym poctem prvku
    int hle = 141; // Inicializujeme hledane cislo
    int vel = sizeof(pole) / sizeof(pole[0]); // Inicializujeme velikost pole
    
    int ind = linearneNajdi(pole, hle, vel); // Inicializujeme index, na kterem se cislo naleza
    
    // Pokud jsme nenasli nic
    if(ind == -1) {

        // Vypiseme hlasku
        cout << "Hodnota " << hle << " se nenachazi v poli!";

    }

    // Pokud jsme nasli nejakou hodnotu
    else {

        // Vypiseme hlasku
        cout << "Hodnota " << hle << " se nachazi v poli na indexu " << ind;

    }

}

// Funkce pro nalezeni indexu
int linearneNajdi(int pole[], int hodnota, int velikost) {

    // Cyklus pro nalezeni hodnoty
    for(int i = 0; i < velikost; i++) {

        // Pokud jsme nasli hodnotu
        if(pole[i] == hodnota) {
            
            // Vratime index na kterem se nachazi
            return i;

        }

    }

    // Vratime -1, pokud jsme zadnou hodnotu nenasli
    return -1;

}