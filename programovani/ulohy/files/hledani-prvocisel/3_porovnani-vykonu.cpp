#include <iostream>
#include <cmath>
#include <chrono>
using namespace std;


int main() {


    // Priprava programu
    const int vel = 10000;
    bool pole[vel + 1];
    pole[0] = pole[1] = 0;
    for(int i = 2; i <= vel; i++) {
        pole[i] = 1;
    }

    // Zaznamenani casu zacatku
    chrono::steady_clock::time_point begin = chrono::steady_clock::now();

    // Pocitani
    for(int i = 2; i <= vel; i++) {
        for(int k = i - 1; k >= 2; k--) {
            if(i % k == 0) {
                pole[i] = 0;
            }          
        }
    }

    // Zaznamenani casu konce
    chrono::steady_clock::time_point end = chrono::steady_clock::now();

    // Vypsani rozdilu casu
    cout << "Cas nutny k vypoctu prvocisel v rozsahu <2, " << vel << "> pomoci prvniho programu = " << chrono::duration_cast<chrono::microseconds>(end - begin).count() << " mikrosekund" << endl;


    // Pripraveni pole znovu
    for(int i = 2; i <= vel; i++) {
        pole[i] = 1;
    }

    // Zaznamenani casu zacatku
    chrono::steady_clock::time_point begin2 = chrono::steady_clock::now();

    // Pocitani
    for(int i = 2; i <= sqrt(vel); i++) {
        if(pole[i] == true) {
            for(int k = i * i; k <= vel; k += i) {
                pole[k] = false;
            }
        }
    }

    // Zaznamenani casu konce
    chrono::steady_clock::time_point end2 = chrono::steady_clock::now(); 

    // Vypsani rozdilu casu   
    cout << "Cas nutny k vypoctu prvocisel v rozsahu <2, " << vel << "> pomoci druheho programu (Eratosthenovo sito) = " << chrono::duration_cast<chrono::microseconds>(end2 - begin2).count() << " mikrosekund" << endl;
    
    // Podil dvou vyslednych casu
    cout << "Druhy program je priblizne " << (end - begin)/(end2 - begin2) << "x rychlejsi" << endl;

    // Prevence uzavreni exe po vykonani mereni
    system("pause");

}
