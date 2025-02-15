# Deklarace a inicializace
vel = 4 # Inicializace velikosti ctverce

# Vnitrni cyklus pro jednotlive hvezdicky
for j in range(1, vel * vel + 1):           

    # Vypiseme hvezdicky
    print("* ", sep="", end="")

    # Pokud jsme dosli na konec radky 
    if(j % vel == 0):

        # Vypiseme novou radku    
        print(end="\n")