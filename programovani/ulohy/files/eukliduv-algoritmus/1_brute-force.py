# Funkce pro nalezeni nejvetsiho spolecneho delitele
def nejvetsiDelitel(i, j):

    # Otestujeme nejprve cisla na nuly
    if i == 0 or j == 0:
        
        # Vratime nulu
        return 0

    # Cyklus na testovani delitele
    for k in range(i, 0, -1):

        # Pokud najdu cislo, ktere je delitelem
        if i % k == 0 and j % k == 0:

            # Vratim ho
            return k
    
    # Kontrolni vraceni 0
    return 0

# Funkce pro nalezeni nejmensiho spolecneho nasobku
def nejmensiNasobek(i, j):

    # Otestujeme nejprve cisla na nuly
    if i == 0 or j == 0:
        
        # Vratime nulu
        return 0

    # Cyklus na testovani nasobku
    for k in range(i, i*j+1):

        # Pokud najdu cislo, ktere je nasobkem
        if k % i == 0 and k % j == 0:

            # Vratim ho
            return k
    
    # Kontrolni vraceni 0
    return 0


# Demonstrace
print("Nejvetsi spolecny delitel cisel 77 a 28 je:", nejvetsiDelitel(77, 28), ", nejmensi spolecny nasobek je:", nejmensiNasobek(77, 28))
print("Nejvetsi spolecny delitel cisel 77 a 28 je:", nejvetsiDelitel(1517, 2952), ", nejmensi spolecny nasobek je:", nejmensiNasobek(1517, 2952))

