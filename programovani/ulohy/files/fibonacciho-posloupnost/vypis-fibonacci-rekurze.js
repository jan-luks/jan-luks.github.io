// Deklarace a inicializace
var n = 30; // Inicializujeme kolikate cislo posloupnosti hledame

// Vypiseme posloupnost
for(var i = 0; i < n; i++) {
    console.log(fibonaccihoPosloupnost(i));
}


// Funkce pro najiti N-teho Fibonacciho cisla pomoci rekurze
function fibonaccihoPosloupnost(n) {

    // Pokud je jsme u jednicky
    if(n <= 1) {

        // Vratime 1
        return n;

    }

    // V odstatnich pripadech vratime soucet dvou predchozich cisel posloupnosti
    return fibonaccihoPosloupnost(n - 1) + fibonaccihoPosloupnost(n - 2);
    
}