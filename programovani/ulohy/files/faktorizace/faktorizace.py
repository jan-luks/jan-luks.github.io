# Importujeme matematickou knihovnu
import math

# Funkce pro vypocet jednotlivych delitelu
def faktorizace(n):

    # Deklarace a inicializace
    pole = [] # Inicializujeme vysledne pole

    # Cyklus pro testovani delitelu
    for i in range(2, n):

        # Dokud je zbytek cisla delitelny beze zbytku
        while n % i == 0:

            # Appendujeme (pridame) do pole prvek o hodnote aktualniho delitele
            pole.append(i)

            # Vydelime
            n /= i

    # Pokud je cislo prvocislem, tak jediny delitel je krome jednicky samotne cislo
    if n != 1:

        # Proto ho zapiseme
        pole.append(n)

    # Vratime pole
    return pole

# Faktorizuj
print(faktorizace(2772))