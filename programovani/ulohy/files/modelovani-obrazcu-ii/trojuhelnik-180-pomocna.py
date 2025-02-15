# Deklarace a inicializace
vel = 6 # Inicializace velikosti trojuhelniku
pom = 0 # Inicializace pomocne promenne

# Vnejsi cyklus pro radky
for i in range(1, vel + 1):
    
    # Vnitrni cyklus pro jednotlive hvezdicky
    for j in range(1, vel + 1):

        # V pripade, ze budeme v limitu
        if(pom >= j):

            # Vypiseme mezeru
            print("  ", sep="", end="")

        # V opacnem pripade
        else:

            # Vypiseme hvezdicky
            print("* ", sep="", end="")

    # Inkrementujeme pomocnou promennou
    pom += 1

    # Vypiseme novou radku
    print(end="\n")
