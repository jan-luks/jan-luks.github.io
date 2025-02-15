# Deklarace a inicializace
vel = 7 # Inicializace velikosti trojuhelniku
pom = int(vel/2) # Inicializace pomocne promenne

# Vnejsi cyklus pro radky
for i in range(1, vel + 1, 2):
    
    # Vnitrni cyklus pro jednotlive hvezdicky
    for j in range(1, i + pom + 1):

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
    pom -= 1

# Vyresetujeme pomocnou promennou
pom = 1


# Vnejsi cyklus pro radky
for i in range(vel - 2, 0, -2):
    
    # Vnitrni cyklus pro jednotlive hvezdicky
    for j in range(1, i + pom + 1):

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
