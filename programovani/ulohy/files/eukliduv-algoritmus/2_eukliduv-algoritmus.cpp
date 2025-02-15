#include <iostream>
using namespace std;

// Deklarace a inicializace funkci
int nejvetsiDelitel(int i, int j); // Funkce pro nalezeni nejvetsiho spolecneho delitele
int nejmensiNasobek(int i, int j); // Funkce pro nalezeni nejmensiho spolecneho nasobku


int main() {

    // Demonstrace
    cout << "Nejvetsi spolecny delitel cisel 77 a 28 je: " << nejvetsiDelitel(77, 28) << ", nejmensi spolecny nasobek je: " << nejmensiNasobek(77, 28) << endl; 
    cout << "Nejvetsi spolecny delitel cisel 1517 a 2952 je: " << nejvetsiDelitel(1517, 2952) << ", nejmensi spolecny nasobek je: " << nejmensiNasobek(1517, 2952) << endl; 

}

// Funkce pro nalezeni nejvetsiho spolecneho delitele
int nejvetsiDelitel(int i, int j) {

    // Otestujeme nejprve cisla na nuly
    if (i == 0 || j == 0) {

        // Vratime nulu
        return 0

    }
    
    // Pokud najdu cislo, ktere je delitelem
    if(i % j == 0) {

        // Vratim ho
        return j;

    }

    // Jinak
    else {

        // Zavolam funkci s prohozenymi parametry
        return nejvetsiDelitel(j, i % j);

    }
    
}

// Funkce pro nalezeni nejmensiho spolecneho nasobku
int nejmensiNasobek(int i, int j) {

    // Vratime nasobek pomoci vzorecku
    return (i * j) / (nejvetsiDelitel(i, j));

}