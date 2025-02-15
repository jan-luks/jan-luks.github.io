// Deklarace a inicializace    
const a = 6; // Inicializace strany obdelnika
const b = 4; // Inicializace strany obdelnika

// Vnejsi cyklus pro radky
for(var i = 1; i <= b; i++) {

    // Inicalizujeme promennou pro vypsani radky
    var rad = "";

    // Vnitrni cyklus pro jednotlive hvezdicky
    for(var j = 1; j <= a; j++) {            

        // Pridame do textoveho retezce hvezdicku
        if(i == 1 || i == b) {
            rad += "* ";
        }
        else if(j == 1 || j == a) {
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
