# Importujeme matematickou knihovnu
import math

# Deklarace a inicializace
vel = 100 # Inicializace limitu - do kolika cisel hledame
pole = [] # Deklarujeme pole
pole.extend([False, False]) # Do pole pridame na indexy 0 a 1 false - nejsou prvocisla

# Pripravime si pole
for i in range(2, vel + 1):

    # Pridame pokazde novy prvek pole, ktery nastavime na True
    pole.append(True)

# Projdeme kazdy prvek pole az do odmocniny z velikosti zaokrouhlene dolu
for i in range(2, int(math.sqrt(vel + 1)) + 1):

    # Pokud najdeme prvocislo
    if pole[i] == True:

        # Projdeme si pole vzdy o nasobky prvocisla
        for k in range(i * i, vel + 1, i):

            # Kazdy nasobek je delitelny prvocislem
            pole[k] = False

# Projdeme pole
for i in range(vel + 1):

    # Pokud je cislo prvocislem
    if pole[i] == True:

        # Vypiseme ho
        print(i)