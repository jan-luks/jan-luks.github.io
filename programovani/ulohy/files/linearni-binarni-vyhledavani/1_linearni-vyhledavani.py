# Funkce pro nalezeni indexu
def linearneNajdi(pole, hodnota, velikost):

    # Cyklus pro nalezeni hodnoty
    for i in range(velikost):

        # Pokud jsme nasli hodnotu
        if(pole[i] == hodnota):

            # Vratime index na kterem se nachazi
            return i

    # Vratime -1, pokud jsme zadnou hodnotu nenasli
    return -1


# Deklarace a inicializace
pole = [10, 20, 30, 35, 40, 45, 50, 70, 80, 120, 140, 141, 150, 160] # Inicializujeme serazene pole s nahodnym poctem prvku
hle = 141 # Inicializujeme hledane cislo
vel = len(pole) # Inicializujeme velikost pole

index = linearneNajdi(pole, hle, vel) # Inicializujeme index, na kterem se cislo naleza

# Pokud jsme nenasli nic    
if(index == -1):

    # Vypiseme hlasku
    print("Hodnota", hle, "se nenachazi v poli!")

# Pokud jsme nasli nejakou hodnotu
else:

    # Vypiseme hlasku
    print("Hodnota", hle, "se nachazi v poli na indexu", index)
