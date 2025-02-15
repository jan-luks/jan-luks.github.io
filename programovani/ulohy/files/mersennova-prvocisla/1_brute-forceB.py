# Importujeme matematickou knihovnu
import math

# Funkce pro vypocet mocniny
def mocnina(i, j):

    # Vratime jednicku, pokud je exponent 0
    if(j == 0):
        return 1

    # V opacnem pripade
    else:

        # Deklarujeme a inicializujeme pomocnou promennou
        pom = 1

        # Pomoci cyklu provedeme umocneni
        for k in range(j):
            pom *= i

        # Vratime pomocnou promennou
        return pom

# Funkce pro testovani prvocisla
def jePrvocislo(i):

    # Projdeme kazdy prvek pole az do odmocniny z velikosti zaokrouhlene dolu
    for j in range(2, int(math.sqrt(i + 1)) + 1):

        # Pokud najdeme jakehokoliv delitele
        if i % j == 0:

            # Vratime False
            return False

    # Po uspesnem projiti vratime true
    return True


# Deklarace a inicializace
i = 20 # Inicializujeme posledni testovane cislo

# Cyklus pro testovani cisel
for j in range(2, i + 1):

    # Pokud je exponent prvocislo
    if jePrvocislo(j):

        # Inicializujeme mocninu v poradi
        k = mocnina(2, j) - 1

        # Pokud se jedna o prvocislo
        if jePrvocislo(k):

            # Vypiseme ho
            print(k)