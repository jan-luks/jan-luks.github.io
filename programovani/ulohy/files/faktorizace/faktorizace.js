// Faktorizuj
console.log(faktorizace(2772));

// Funkce pro vypocet jednotlivych delitelu
function faktorizace(n) {

    // Deklarace a inicializace
    pole = []; // Inicializujeme vysledne pole

    // Cyklus pro testovani delitelu
    for(var i = 2; i < n; i++) {

        // Dokud je zbytek cisla delitelny beze zbytku
        while(n % i == 0) {

            // Pushneme (pridame) do pole prvek o hodnote aktualniho delitele
            pole.push(i);

            // Vydelime
            n /= i;

        }

    }

    // Pokud je cislo prvocislem, tak jediny delitel je krome jednicky samotne cislo
    if(n != 1) {

        // Proto ho zapiseme
        pole.push(n);

    }

    // Vratime pole
    return pole; 

}