# Deklarace a inicializace    
a = 6 # Inicializace strany obdelnika
b = 4 # Inicializace strany obdelnika

# Vnejsi cyklus pro radky
for i in range(1, a * b + 1):

    # Vypiseme hvezdicky
    print("* ", sep="", end="")        

    # Pokud jsme dosli na konec radky 
    if(i % a == 0):

        # Vypiseme novou radku
        print(end="\n")