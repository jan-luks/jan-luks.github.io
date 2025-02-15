# Deklarace a inicializace    
a = 6 # Inicializace strany obdelnika
b = 4 # Inicializace strany obdelnika

# Vnejsi cyklus pro radky
for i in range(1, b + 1):

    for j in range(1, a + 1):   

        # Vypiseme hvezdicky
        print("* ", sep="", end="")        

    # Vypiseme novou radku
    print(end="\n")