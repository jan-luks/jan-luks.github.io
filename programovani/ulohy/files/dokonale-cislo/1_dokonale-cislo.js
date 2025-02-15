// Deklarace a inicializace
n = 10000; // Inicializujeme posledni zkousene cislo

// Cyklus pro testovani jednotlivych cisel
for(i = 1; i <= n; i++) {

    // Deklarace a inicializace
    pom = 0; // Inicializujeme pomocnou promennou

    // Vnitrni cyklus pro testovani danneho cisla
    for(j = Math.floor(i/2); j > 0; j--) {

        // Pokud je cislo delitelne
        if(i % j == 0) {

            // Pridame do pomocne delitele
            pom += j;

        }

        // Otestujeme jestli je jiz cislo vetsi
        if(pom > i) {

            // Prerusime vnitrni cyklus
            break;

        }

    }

    // Pokud soucet delitelu se rovna cislu
    if(pom == i) {

        // Vypiseme ho
        console.log(i);
        
    }
    
}
