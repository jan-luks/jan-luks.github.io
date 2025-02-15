# Deklarace a inicializace
vel = 4 # Inicializace velikosti ctverce

# Vnejsi cyklus pro radky
for i in range(1, vel + 1):

    # Vnitrni cyklus pro jednotlive hvezdicky
    for j in range(1, vel + 1):           

        # Vypiseme hvezdicky
        if(i == 1 or i == vel):
            print("* ", sep="", end="")
        

        elif(j == 1 or j == vel):
            print("* ", sep="", end="")
       

        # Pro vnitrek vypiseme pouze mezery
        else:
            print("  ", sep="", end="")

    # Vypiseme novou radku    
    print(end="\n")
