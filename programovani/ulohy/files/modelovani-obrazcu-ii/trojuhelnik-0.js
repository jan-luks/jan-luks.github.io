// Deklarace a inicializace
const vel = 6; // Inicializace velikosti trojuhelniku

// Vnejsi cyklus pro radky
for(var i = 1; i <= vel; i++) {

    // Inicalizujeme promennou pro vypsani radky
    var rad = "";
    
    // Vnitrni cyklus pro jednotlive hvezdicky
    for(var j = 1; j <= i; j++)

        // Pridame do textoveho retezce hvezdicku
        rad += "* ";

    // Vypiseme radku
    console.log(rad);

}
