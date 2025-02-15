# Deklarace a incializace
n = 30 # Inicializujeme velikost Fibonacciho posloupnosti
c1 = 0 # Inicializujeme prvni Fibonacciho clen
c2 = 1 # Inicializujeme druhy Fibonacciho clen
pom = 0 # Inicializujeme pomocnou promennou

# Cyklus pro plneni pole do n 
for i in range(2, n):

    # Do pomocne promenne vlozim aktualni clen
    pom = c2

    # Do aktualniho clenu vlozim soucet
    c2 = c1 + c2

    # Do predposledniho clenu vlozim clen z pomocne (posledni)
    c1 = pom

    # Vypiseme n-ty clen
    if i == n - 1:
        print(c2)
    

