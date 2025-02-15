// Deklarace a inicializace
var n = 30; // Inicializujeme kolikate cislo posloupnosti hledame

// Vypiseme N-ty clen
console.log(fibonaccihoPosloupnost(n - 1));


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