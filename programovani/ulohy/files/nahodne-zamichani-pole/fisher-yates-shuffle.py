# Importujeme knihovnu pseudonahodnych cisel
import random

# Deklarace a inicializace
vel = 7 # Inicializujeme velikost pole
pole = [] # Deklarujeme pole

# Cyklus pro naplneni pole cisly
for i in range(vel):

    # Na index vlozime hodnotu
    pole.append(i * 10)

    # Vypiseme ve tvaru klic - hodnota
    print(i, "-", pole[i])

# Vypiseme oddelovac
print("-----")

# Cyklus pro randomizaci
for i in range(vel-1, -1, -1):

    # Deklarujeme a inicializujeme
    j = random.randrange(i + 1) # Inicializujeme, ziskame nahodnou pozici

    # Prohodime hodnoty
    pole[i], pole[j] = pole[j], pole[i]

# Cyklus pro vypsani pole
for i in range(vel):

    # Vypiseme ve tvaru klic - hodnota
    print(i, "-", pole[i])