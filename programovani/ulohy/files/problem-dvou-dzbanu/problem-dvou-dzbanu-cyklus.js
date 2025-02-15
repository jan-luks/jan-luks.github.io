// Deklarace a inicializace
var dz1_obj = 3; // Inicializujeme objem prvniho dzbanu, objem je vzdy mensi nez dz2_obj
var dz2_obj = 7; // Inicializujeme objem druheho dzbanu

// Zavolame funkci 
najdiLitr(dz1_obj, dz2_obj, 0, 0);

// Funkce pro nalezeni litru a vypsani kroku
function najdiLitr(dz1_obj, dz2_obj, dz1, dz2) {
	
	while(dz1 != 1) {

		// Pokud je dzban 2 naplnen
        if(dz2 == dz2_obj) {

            // vylijeme vodu
            dz2 = 0;

            // Vypiseme hlasku			
			console.log("Dzban 1: " + dz1 + " --- dzban 2: " + dz2);

        }

        // Pokud je dzban 1 prazdny
        else if(dz1 == 0) {

            // Naplnime ho
            dz1 = dz1_obj;

            // Vypiseme hlasku
    		console.log("Dzban 1: " + dz1 + " --- dzban 2: " + dz2);

        }

        // V ostatnich pripadech
        else {

            // Pokud jsou objemy obou dzbanu vyssi, nez je maximalni objem dzbanu 2
            if(dz1 + dz2 > dz2_obj) {

                // Ve dzbanu nam zbyde zustatek
                dz1 = - dz2_obj + dz1 + dz2;

                // Dzban 2 naplnime
                dz2 = dz2_obj;

                // Vypiseme hlasku
    			console.log("Dzban 1: " + dz1 + " --- dzban 2: " + dz2);

            }

            // Pokud nejsou objemy vyssi, nez maximalni objem dzbanu 2
            else {

                // Objem dzbanu 1 prelejeme do 2
                dz2 += dz1;

                // Dzban 1 vylijeme
                dz1 = 0;

                // Vypiseme hlasku
    			console.log("Dzban 1: " + dz1 + " --- dzban 2: " + dz2);

            }

        }

        // Pokud je ve dzbanu 1 pozadovany jeden litr kapaliny
        if(dz1 == 1) {

            // Vylijeme, co zustalo ve dzbanu 0
            dz2 = 0;

            // Vypiseme hlasku
    		console.log("Dzban 1: " + dz1 + " --- dzban 2: " + dz2);

        } 

	}

}