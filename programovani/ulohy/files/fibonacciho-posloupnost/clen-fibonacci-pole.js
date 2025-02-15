// Deklarace a incializace
n = 30; // Inicializujeme velikost Fibonacciho posloupnosti
pole = []; // Inicializujeme pole
pole[0] = 0; // Inicializujeme prvni Fibonacciho clen
pole[1] = 1; // Inicializujeme druhy Fibonacciho clen

// Cyklus pro plneni pole do n 
for(i = 2; i < n; i++) {

    // Na klic vlozime hodnoty dvou predchozich klicu
    pole[i] = pole[i-2] + pole[i-1];

}

// Vypiseme n-ty clen
console.log(pole[n - 1]);