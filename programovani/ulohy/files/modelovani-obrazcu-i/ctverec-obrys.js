// Deklarace a inicializace
const vel = 4; // Inicializace velikosti ctverce

// Vnejsi cyklus pro radky
for(var i = 1; i <= vel; i++) {

    // Inicalizujeme promennou pro vypsani radky
    var rad = "";

    // Vnitrni cyklus pro jednotlive hvezdicky
    for(var j = 1; j <= vel; j++) {            

        // Pridame do textoveho retezce hvezdicku
        if(i == 1 || i == vel) {
            rad += "* ";
        }
        else if(j == 1 || j == vel) {
            rad += "* ";
        }

        // Pro vnitrek pridame do textoveho retezce hvezdicku
        else {
            rad += "  ";
        }

    }

    // Vypiseme radku
    console.log(rad);

}