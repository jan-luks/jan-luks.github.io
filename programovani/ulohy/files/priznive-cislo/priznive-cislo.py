# Deklarace a inicializace
n = 300 # Inicializujeme pocet cisel
pole = [] # Deklarujeme pole o spravne velikosti
poc = 0 # Inicializujeme pocitadlo
vym = 2 # Inicializujeme pozici cisla, podle ktereho budeme vymazavat

# Pole pro prvotni naplneni, provedeme jiz prvni krok, kdy se zbavime vsech sudych cisel
for i in range(n + 1):

    # Pokud je index lichy
    if(i % 2 == 1):

        # Pridame cislo na index
        pole.append(i)

    # Pokud je sude
    else:

        # Vynulujeme
        pole.append(0)    

# Vnejsi cyklus pro opakovani 
for i in range(2, n + 1):

    # Vnitrni cyklus pro nalezeni cisla, ktere nam urci jaka cisla vymazat
    for j in range(n + 1):

        # Pokud se jedna o jakekoliv cislo
        if(pole[j] != 0):

            # Pricteme k pocitadlu 1
            poc += 1

        # Pokud se jsme nasli hledane cislo
        if(poc == i):

            # Ulozime cislo, podle ktereho budeme vymazavat
            vym = pole[j]

            # Resetujeme pocitadlo
            poc = 0

            # Prerusime vnitrni cyklus
            break

        # Pokud jsme dosli na konec, mame hotovo
        if(j == n):

            # Ulozime si cislo, podle ktereho ukoncime vnejsi cyklus
            vym = -1

            # Prerusime vnitrni cyklus
            break

    # Pokud jsme na konci programu
    if(vym == -1):

        # Prerusime vnejsi cyklus
        break

    # Cyklus pro mazani cisel
    for j in range(n + 1):

        # Pokud je jakekoliv cislo
        if(pole[j] != 0):

            # Zvedneme pocitadlo o 1
            poc += 1

            # Pokud dojdeme k zadanemu poctu
            if(poc == vym):

                # Vymazeme cislo v poli
                pole[j] = poc = 0

 

    # Vyresetujeme pocitadlo
    poc = 0

# Cyklus pro vypsani priznivych cisel
for i in range(n + 1):

    # Pokud se na indexu nachazi cislo
    if(pole[i] != 0):

        # Vypiseme ho
        print(i, end=", ")