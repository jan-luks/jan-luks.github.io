# Deklarace a inicializace
vel = 4 # Inicializace velikosti pyramidy
pom = 0 # Inicializace pomocne promenne

# Vnejsi cyklus pro radky
for i in range(vel, 0, -1):
    
    # Vnitrni cyklus pro jednotlive hvezdicky
    for j in range(1, vel + i):

        # Pro zacatecni prazdne bunky
        if(pom >= j):

            # Vypiseme mezeru
            print("  ", sep="", end="")

        # Pokud jsme jiz v limitu
        else:

            # Vypiseme hvezdicku
            print("* ", sep="", end="")           

    # Vypiseme novou radku
    print(end="\n")

    # Pridame sloupec pocitadlu
    pom += 1