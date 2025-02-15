# Funkce pro testovani prvocisla
def fibonaccihoPosloupnost(n):

    # Pokud je jsme u jednicky
    if(n <= 1):

        # Vratime 1
        return n

    # V odstatnich pripadech vratime soucet dvou predchozich cisel posloupnosti
    return fibonaccihoPosloupnost(n - 1) + fibonaccihoPosloupnost(n - 2)


# Deklarace a incializace
n = 30 # Inicializujeme kolikate cislo posloupnosti hledame

# Vypiseme N-ty clen
print(fibonaccihoPosloupnost(n - 1))