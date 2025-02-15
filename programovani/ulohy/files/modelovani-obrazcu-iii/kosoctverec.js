// Deklarace a inicializace
const vel = 4; // Inicializace velikosti kosoctverce    
pom = vel - 1; // Inicializace pomocne promenne

// Vnejsi cyklus pro radky
for(var i = 1; i <= vel; i++) {

    // Inicalizujeme promennou pro vypsani radky
    var rad = "";
    
    // Vnitrni cyklus pro jednotlive hvezdicky
    for(var j = 1; j <= vel + pom; j++) {

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
