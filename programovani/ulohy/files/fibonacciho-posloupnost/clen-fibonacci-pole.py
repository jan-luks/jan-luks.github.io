# Deklarace a incializace
n = 30 # Inicializujeme velikost Fibonacciho posloupnosti
pole = [] # Inicializujeme pole
pole.append(0) # Inicializujeme prvni Fibonacciho clen
pole.append(1) # Inicializujeme druhy Fibonacciho clen

# Cyklus pro plneni pole do n 
for i in range(2, n):

    # Na klic vlozime hodnoty dvou predchozich klicu
    pole.append(pole[i-2] + pole[i-1])


# Vypiseme n-ty clen
print(pole[n - 1])