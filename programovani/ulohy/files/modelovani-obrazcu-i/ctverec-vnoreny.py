# Deklarace a inicializace
vel = 4 # Inicializace velikosti ctverce

# Vnejsi cyklus pro radky
for i in range(1, vel + 1):

    # Vnitrni cyklus pro jednotlive hvezdicky
    for j in range(1, vel + 1):           

        # Vypiseme hvezdicky
        print("* ", sep="", end="")

    # Vypiseme novou radku    
    print(end="\n")
