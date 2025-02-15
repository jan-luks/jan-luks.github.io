#include <iostream>
using namespace std;

// Deklarace a inicializace funkci
void faktorizace(int n); // Funkce pro vypocet jednotlivych delitelu 


int main() {

    // Faktorizuj
    faktorizace(2772);

}

// Funkce pro vypocet jednotlivych delitelu
void faktorizace(int n) {

    // Deklarace a inicializace
    int pole[10000] = {0}; // Inicializujeme vysledne pole
    int poc = 0; // Pocitadlo, na jake hodnote pole se nachazime

    // Cyklus pro testovani delitelu
    for(int i = 2; i < n; i++) {

        // Dokud je zbytek cisla delitelny beze zbytku
        while(n % i == 0) {

            // Nasli jsme delitele, ktereho zapiseme
            pole[poc] = i;

            // Pricteme k pocitadlu 1
            poc++;

            // Vydelime
            n = n / i;
            
        }

    }

    // Pokud je cislo prvocislem, tak jediny delitel je krome jednicky samotne cislo
    if(n != 1) {

        // Proto ho zapiseme
        pole[poc] = n;

    }

    // Projdeme si pole
    for(int i = 0; i <= poc; i++) {

        // Pokud neni index prazdny - nula
        if(pole[i] != 0) {

            // Vypiseme delitele
            cout << pole[i] << ", ";
        }
        
    }

}