# Deklarace a inicializace
i = 13 # Inicializujeme velikost trojuhelniku
pole = [] # Deklarujeme pole

# Cyklus pro radky
for j in range(i):

    # Deklarujeme a inicializujeme
    rad = [] # Prazdne pole, ktere pak budeme vkladat do promenne pole

    # Cyklus pro sloupce (jednotlive hodnoty) 
    for k in range(j + 1):

        # Pokud se jedna o prvni nebo posledni cislo
        if(k == 0 or k == j):

            # Vzdy je 1
            rad.append(1)

        # Pro ostatni cisla mezi prvnim a poslednim
        else:

            # Vlozime hodnoty podle vzorecku
            rad.append(pole[j-1][k-1] + pole[j-1][k])
    
    # Do vysledneho pole appendujeme (vlozime) celou radku
    pole.append(rad)

# Vypiseme Pascaluv trojuhelnik, cyklus pro radky
for j in range(i):

    # Cyklus pro sloupce (jednotlive hodnoty) 
    for k in range(len(pole[j])):

        # Vypiseme jednotlive hodnoty, ktere oddelime tabulatorem
        print(pole[j][k], end="\t")

    # Na konci vlozime novou radku
    print("")