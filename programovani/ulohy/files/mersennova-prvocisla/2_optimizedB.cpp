#include <iostream>
#include <cmath>
using namespace std;

// Deklarace a inicializace funkci
bool jePrvocislo(int i); // Funkce pro testovani prvocisla
int mocnina(int i, int j); // Funkce pro vypocet mocniny


int main() {

	// Deklarace a inicializace 
	const int i = 20; // Inicializujeme posledni testovane cislo

	// Cyklus pro testovani cisel
	for(int j = 2; j <= i; j++) {

        // Pokud je exponent prvocislo
        if(jePrvocislo(j)) {

            // Inicializujeme mocninu v poradi
            int k = mocnina(2, j) - 1;

            // Pokud se jedna o prvocislo
            if(jePrvocislo(k)) {

                // Vypiseme ho
                cout << k << endl;
                
            }

        }	

	}

}

// Funkce pro testovani prvocisla
bool jePrvocislo(int i) {

	// Projdeme kazdy prvek pole az do odmocniny z velikosti zaokrouhlene dolu
	for(int j = 2; j <= sqrt(i); j++) {

		// Pokud najdeme jakehokoliv delitele
		if(i % j == 0) {

			// Vratime false
			return false;

		} 

	}

	// Po uspesnem projiti vratime true
	return true;  

}

// Funkce pro vypocet mocniny
int mocnina(int i, int j) {

	// Vratime jednicku, pokud je exponent 0
    if(j == 0) {
        return 1;
    }

    // V opacnem pripade
    else {

        // Deklarujeme a inicializujeme pomocnou promennou
        int pom = 1;

        // Pomoci cyklu provedeme umocneni
        for(int k = 1; k <= j; k++) {
            pom *= i;
        }

        // Vratime pomocnou promennou
        return pom;

    }

}