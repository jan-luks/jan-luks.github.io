#include <iostream>
using namespace std;

// Deklarace a inicializace funkci
int fibonaccihoPosloupnost(int n); // Funkce pro najiti N-teho Fibonacciho cisla pomoci rekurze


int main() {

    // Deklarace a inicializace
    int n = 30; // Inicializujeme kolikate cislo posloupnosti hledame

    // Vypiseme n-ty clen
    cout << fibonaccihoPosloupnost(n - 1) << endl;
    
}

// Funkce pro najiti N-teho Fibonacciho cisla pomoci rekurze
int fibonaccihoPosloupnost(int n) {

    // Pokud je jsme u jednicky
    if(n <= 1) {

        // Vratime 1
        return n;

    }

    // V odstatnich pripadech vratime soucet dvou predchozich cisel posloupnosti
    return fibonaccihoPosloupnost(n - 1) + fibonaccihoPosloupnost(n - 2);
    
}

