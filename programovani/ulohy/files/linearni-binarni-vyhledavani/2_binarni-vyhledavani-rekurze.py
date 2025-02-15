# Funkce pro nalezeni indexu
def binarneNajdi(pole, hodnota, zacatek, konec):

    # Pokud je konec vetsi nez zacatek
    if(zacatek > konec):

        # Vratime -1
        return -1
    
    # Deklarujeme a inicializujeme
    stred = int((zacatek + konec) / 2) # Inicializujeme stredovou hodnotu

    # Pokud se hledana hodnota rovna stredu
    if(pole[stred] == hodnota):

        # Vratime stred (index)
        return stred

    # Pokud je hledana hodnota mensi, nez ta na stredu
    if(pole[stred] > hodnota):

        # Zavolame funkci se zmenenou koncovou hodnotou
        return binarneNajdi(pole, hodnota, zacatek, stred - 1)

    # Pokud je hledana hodnota vetsi, nez ta na stredu
    else:

        # Zavolame funkci se zmenenou zacatecni hodnotou
        return binarneNajdi(pole, hodnota, stred + 1, konec)


# Deklarace a inicializace
pole = [10, 20, 30, 35, 40, 45, 50, 70, 80, 120, 140, 141, 150, 160] # Inicializujeme serazene pole s nahodnym poctem prvku
hle = 141 # Inicializujeme hledane cislo
vel = len(pole) # Inicializujeme velikost pole

index = binarneNajdi(pole, hle, 0, vel) # Inicializujeme index, na kterem se cislo naleza

# Pokud jsme nenasli nic    
if(index == -1):

    # Vypiseme hlasku
    print("Hodnota", hle, "se nenachazi v poli!")

# Pokud jsme nasli nejakou hodnotu
else:

    # Vypiseme hlasku
    print("Hodnota", hle, "se nachazi v poli na indexu", index)

