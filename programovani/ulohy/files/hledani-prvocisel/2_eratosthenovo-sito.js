// Deklarace a inicializace
const vel = 100; // Inicializace limitu - do kolika cisel hledame
var pole = []; // Deklarujeme velikost pole 
pole[0] = pole[1] = false; // 0 a 1 nejsou prvocisla

// Pripravime si pole - projdeme ho
for(var i = 2; i <= vel; i++) {

    // Naplnime ho hodnotou true
    pole[i] = true;

}

// Projdeme kazdy prvek pole az do odmocniny z velikosti zaokrouhlene dolu
for(var i = 2; i <= Math.sqrt(vel + 1); i++) {

    // Pokud najdeme prvocislo
    if(pole[i] == true) {

        // Projdeme si pole vzdy o nasobky prvocisla
        for(var j = i * i; j <= vel; j += i) {

            // Kazdy nasobek je delitelny prvocislem
            pole[j] = false;

        }

    }

}    

// Projdeme pole
for(var i = 0; i <= vel; i++) {

    // Pokud je cislo prvocislem
    if(pole[i] == true) {

        // Vypiseme ho
        console.log(i);

    }

}