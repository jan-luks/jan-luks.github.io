#include <iostream>
#include <cmath>
using namespace std;

// Deklarace a inicializace funkci
bool jePrvocislo(int i); // Funkce pro testovani prvocisla


int main() {

	// Deklarace a inicializace 
	const int i = 20; // Inicializujeme posledni testovane cislo

	// Cyklus pro testovani cisel
	for(int j = 2; j <= i; j++) {

        // Pokud je exponent prvocislo
        if(jePrvocislo(j)) {

            // Inicializujeme mocninu v poradi
            int k = pow(2, j) - 1;

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