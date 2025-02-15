# Deklarace a inicializace
vel = 6 # Inicializace velikosti trojuhelniku

# Vnejsi cyklus pro radky
for i in range(vel + 1, 1, -1):
    
    # Vnitrni cyklus pro jednotlive hvezdicky
    for j in range(i, 1, -1):

        # Vypiseme hvezdicky
        print("* ", sep="", end="")

    # Vypiseme novou radku
    print(end="\n")
