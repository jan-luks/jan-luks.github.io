// Deklarace a inicializace
const vel = 7; // Inicializace velikosti trojuhelniku
pom = Math.floor(vel/2); // Inicializace pomocne promenne

// Vnejsi cyklus pro radky
for(var i = 1; i <= vel; i = i + 2) {

    // Inicalizujeme promennou pro vypsani radky
    var rad = "";
    
    // Vnitrni cyklus pro jednotlive hvezdicky
    for(var j = 1; j <= i + pom; j++) {

        // Pro zacatecni prazdne bunky
        if(pom >= j) {

            // Pridame do textoveho retezce mezeru
            rad += "  ";

        }

        // Pokud jsme jiz v limitu
        else {

            // Pridame do textoveho retezce hvezdicku
            rad += "* ";

        }

    }            

    // Vypiseme radku
    console.log(rad);

    // Pridame sloupec pocitadlu
    pom--;

}

// Vyresetujeme pomocnou promennou
pom = 1;

// Vnejsi cyklus pro radky
for(var i = vel - 2; i >= 1; i = i - 2) {

    // Inicalizujeme promennou pro vypsani radky
    var rad = "";
    
    // Vnitrni cyklus pro jednotlive hvezdicky
    for(var j = 1; j <= i + pom; j++) {

        // Pro zacatecni prazdne bunky
        if(pom >= j) {

            // Pridame do textoveho retezce mezeru
            rad += "  ";

        }

        // Pokud jsme jiz v limitu
        else {

            // Pridame do textoveho retezce hvezdicku
            rad += "* ";

        }

    }            

    // Vypiseme radku
    console.log(rad);

    // Pridame sloupec pocitadlu
    pom++;

}
