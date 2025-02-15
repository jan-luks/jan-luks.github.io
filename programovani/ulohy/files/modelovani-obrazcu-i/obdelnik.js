// Deklarace a inicializace
const a = 6; // Inicializace strany obdelnika
const b = 4; // Inicializace strany obdelnika
var rad = ""; // Inicalizujeme promennou pro vypsani radky

// Cyklus pro namalovani obrazce
for(var i = 1; i <= a * b; i++) {

    // Pridame do textoveho retezce hvezdicku
    rad += "* ";

    // Pokud jsme dosli na konec radky 
    if(i % a == 0) {

        // Vypiseme radku
        console.log(rad);

        // Smazeme textovy retezec
        rad = "";

    }

}
