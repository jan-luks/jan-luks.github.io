// Deklarace a inicializace
const vel = 6; // Inicializace velikosti trojuhelniku

// Vnejsi cyklus pro radky
for(var i = vel; i >= 1; i--) {

    // Inicalizujeme promennou pro vypsani radky
    var rad = "";

    // Vnitrni cyklus pro jednotlive hvezdicky
    for(var j = 1; j <= vel; j++) {

        // V pripade, ze budeme v limitu
        if(j + i <= vel)

            // Vypiseme mezery
            rad += "  ";

        // V opacnem pripade
        else

            // Vypiseme hvezdicky
            rad += "* ";

    }            

    // Vypiseme radku
    console.log(rad);

}
