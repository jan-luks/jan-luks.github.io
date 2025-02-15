# Deklarace a inicializace
vel = 6 # Inicializace velikosti trojuhelniku

# Vnejsi cyklus pro radky
for i in range(1, vel + 1):
    
    # Vnitrni cyklus pro jednotlive hvezdicky
    for j in range(1, vel + 1):

        # V pripade, ze budeme v limitu
        if(vel - i >=j):

            # Vypiseme mezeru
            print("  ", sep="", end="")

        # V opacnem pripade
        else:

            # Vypiseme hvezdicky
            print("* ", sep="", end="")

    # Vypiseme novou radku
    print(end="\n")
