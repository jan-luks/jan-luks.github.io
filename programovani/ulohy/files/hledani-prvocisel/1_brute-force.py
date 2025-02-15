# Deklarace a inicializace
vel = 100 # Inicializace limitu - do kolika cisel hledame
pole = [] # Deklarujeme pole
pole.extend([False, False]) # Do pole pridame na indexy 0 a 1 false - nejsou prvocisla

# Pripravime si pole
for i in range(2, vel + 1):

    # Pridame pokazde novy prvek pole, ktery nastavime na True
    pole.append(True)

# Projdeme pole
for i in range(2, vel + 1):

    # Kazde cislo budeme zkouset delit cisly mensimi nez je ono samotne a vetsi nez nebo rovno 2
    for k in range(i - 1, 2, -1):

        # Pokud najdeme delitele jakehokoliv delitele
        if i % k == 0:

            # Cislo neni prvocislo
            pole[i] = False

# Projdeme pole
for i in range(0, vel + 1):

    # Pokud je cislo prvocislem
    if pole[i] == True:

        # Vypiseme ho
        print(i)
