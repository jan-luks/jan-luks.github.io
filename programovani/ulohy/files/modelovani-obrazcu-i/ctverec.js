// Deklarace a inicializace
const vel = 4; // Inicializace velikosti ctverce
var rad = ""; // Inicalizujeme promennou pro vypsani radky 

// Cyklus pro namalovani obrazce
for(var i = 1; i <= vel * vel; i++) {

    // Pridame do textoveho retezce hvezdicku
    rad += "* ";

    // Pokud jsme dosli na konec radky 
    if(i % vel == 0) {

        // Vypiseme radku
        console.log(rad);

        // Smazeme textovy retezec
        rad = "";

    }

}