// Deklarace a inicializace
const vel = 6; // Inicializace velikosti trojuhelniku
pom = 0; // Inicializace pomocne promenne

// Vnejsi cyklus pro radky
for(var i = 1; i <= vel; i++) {

    // Inicalizujeme promennou pro vypsani radky
    var rad = "";

    // Vnitrni cyklus pro jednotlive hvezdicky
    for(var j = 1; j <= vel; j++) {

        // V pripade, ze budeme v limitu
        if(j <= pom)

            // Vypiseme mezery
            rad += "  ";

        // V opacnem pripade
        else

            // Vypiseme hvezdicky
            rad += "* ";

    }            

    // Inkrementujeme pomocnou promennou
    pom++;

    // Vypiseme radku
    console.log(rad);

}
