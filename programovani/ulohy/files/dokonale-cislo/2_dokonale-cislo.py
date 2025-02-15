# Importujeme matematickou knihovnu
import math

# Deklarace a inicializace
n = 30 # Inicializujeme posledni zkousene cislo
pole = [] # Inicializujeme pole
pole.append(0) # Pridame na nulovy index nulu

# Cyklus pro zjisteni souctu delitelu
for i in range(n + 1):

    # Pridame do pole prvek o nulove hodnote
    pole.append(0)

    # Vnitrni cyklus pro testovani kazdeho cisla
    for j in range(int(math.sqrt(i)), 0, -1):

        # Pokud je dane cislo delitel
        if(i % j == 0):            

            # Pricteme ho do pole
            pole[i] += j

            # Pokud druhy delitel odvozeny od prvniho neni stejny jako prvni
            if (j != i / j and i / j != i):

                # Pricteme ho do pole
                pole[i] += i / j


# Vypis cisel, kde soucet jeho delitelu je mensi, nez cislo
print("Abundantni cisla jsou: ", end="")

# Cyklus pro vypsani cisel
for i in range (2, n + 1):

    # Pokud je hodnota v poli (soucet delitelu) mensi nez cislo
    if(pole[i] > i):

        # Vypiseme ho
        print(i, ', ', sep="", end="")


# Vypis cisel, kde soucet jeho delitelu je vetsi, nez cislo
print("\nDeficientni cisla jsou: ", end="")

# Cyklus pro vypsani cisel
for i in range (2, n + 1):

    # Pokud je hodnota v poli (soucet delitelu) vetsi nez cislo
    if(pole[i] < i):

        # Vypiseme ho
        print(i, ', ', sep="", end="")


# Vypis cisel, kde soucet jeho delitelu je rovna cislu
print("\nDokonala cisla jsou: ", end="")

# Cyklus pro vypsani cisel
for i in range (2, n + 1):

    # Pokud je hodnota v poli (soucet delitelu) rovna cislu
    if(pole[i] == i):

        # Vypiseme ho
        print(i, ', ', sep="", end="")