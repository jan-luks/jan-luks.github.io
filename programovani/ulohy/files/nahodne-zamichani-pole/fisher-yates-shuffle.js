// Deklarace a inicializace
const vel = 7; // Inicializujeme velikost pole
var pole = []; // Deklarujeme pole

// Cykls pro nauplneni pole cisly
for(var i = 0; i < vel; i++) {

    // Na index vlozime hodnotu
    pole[i] = i * 10;

    // Vypiseme ve tvaru klic - hodnota
    console.log(i + " - " + pole[i]);

}

// Vypiseme oddelovac
console.log("-----");

// Cyklus pro randomizaci
for (var i = vel - 1; i > 0 ;i--) {

    // Deklarujeme a inicializujeme
    var j = Math.floor(Math.random() * (i + 1)); // Inicializujeme, ziskame nahodnou pozici

    // Prohodime hodnoty
    [pole[j], pole[i]] = [pole[i], pole[j]];

}


// Cyklus pro vypsani pole
for(var i = 0; i < vel; i++) {

    // Vypiseme ve tvaru klic - hodnota
    console.log(i + " - " + pole[i]);

}