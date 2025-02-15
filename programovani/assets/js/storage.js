/* !Storage (Author: jan@luks.sk) */

var json = {
    "ulohy": [
      {
        "name": "Hledání prvočísel, Eratosthenovo síto",
        "excerpt": "Tato úloha vychází z populární a intuitivní metody hledání všech prvočísel v poli o určité velikosti. Studenti nejprve vymýšlí vlastní metody, jakými by dosáhli výčtu všech prvočísel v zadaném limitu. Poté jsou navedeni na princip Eratosthenovo síta a jeho následnou implementaci.",
        "url": "ulohy/hledani-prvocisel.html",
        "params": {
          "difficulty": "medium",
          "time": "short",
          "theme": [
            "array",
            "loop",
            "nested_loop",
            "library_function"
          ]
        }
      },
      {
        "name": "Mersennova prvočísla",
        "excerpt": "V této úloze budou studenti hledat Mersennova prvočísla. Jedná se o prvočísla, která jsou o jedna menší, než je mocnina dvojky. Samotná koncepce příkladu je složitější, než se může na první pohled zdát. V průběhu plnění úlohy si studenti procvičí hlavně práci s psaním vlastních funkcí a vyhledávání na internetu.",
        "url": "ulohy/mersennova-prvocisla.html",
        "params": {
          "difficulty": "medium",
          "time": "short",
          "theme": [
            "loop",
            "recursion",
            "function",
            "library_function"
          ]
        }
      },
      {
        "name": "Faktorizace",
        "excerpt": "V této úloze budeme rozkládat přirozená čísla na součin prvočinitelů. Jedná se o matematický postup, který se vyučuje na druhém stupni ZŠ. Princip by studenti tudíž měli znát. Příklad se svojí obtížností zařazuje mezi ty těžké. Složitější je si uvědomit, jak přesně aplikovat princip rozkladu, aby byl univerzálně použitelný na každé přirozené číslo.",
        "url": "ulohy/faktorizace.html",
        "params": {
          "difficulty": "medium",
          "time": "short",
          "theme": [
            "loop",
            "nested_loop",
            "library_function"
          ]
        }
      },
      {
        "name": "Nejmenší společný násobek, největší společný dělitel, Euklidův algoritmus",
        "excerpt": "V této úloze budou studenti hledat nejmenší společný násobek a největší společný dělitel dvou různých čísel. Nejdříve budou studenti hledat NSN a NSD pomocí vlastních metod (testování hrubou silou), následně pomocí Euklidova algoritmu. Součástí je i vyhledávání na internetu.",
        "url": "ulohy/eukliduv-algoritmus.html",
        "params": {
          "difficulty": "easy",
          "time": "short",
          "theme": [
            "array",
            "loop",
            "function",
            "recursion"
          ]
        }
      },
      {
        "name": "Pascalův trojúhelník",
        "excerpt": "V tomto příkladu budou studenti vymýšlet program na vytvoření Pascalova trojúhelníku. Jedná se o jednofázovou úlohu, ve které dochází k procvičení cyklů a také víceúrovňového pole.",
        "url": "ulohy/pascaluv-trojuhelnik.html",
        "params": {
          "difficulty": "easy",
          "time": "short",
          "theme": [
            "loop",
            "nested_loop",
            "array",
            "multidimensional_array"
          ]
        }
      },
      {
        "name": "Náhodné zamíchání pole – Fisher-Yates Shuffle",
        "excerpt": "Úloha má za cíl demonstrovat jednu z nejznámějších a nejpoužívanějších metod sloužící k náhodnému zamíchání pole známou jako Fisher-Yates Shuffle. Metoda je velice jednoduchá k pochopení i naprogramování. Proto se hodí k procvičení cyklů.",
        "url": "ulohy/nahodne-zamichani-pole.html",
        "params": {
          "difficulty": "easy",
          "time": "short",
          "theme": [
            "array",
            "loop"
          ]
        }
      },
      {
        "name": "Lineární vyhledávání, binární vyhledávání",
        "excerpt": "V této úloze budou studenti pomocí lineární metody a vyhledávání půlením intervalu zjišťovat, zda se hledaná hodnota nachází v poli. V případě úspěšného nalezení prvku dojde k vypsání indexu, na kterém se hodnota nachází, v opačném situaci vypíšeme hlášku, že zadaná hodnota se nenachází v poli. V diskusi debatujeme nad tím, co je to rozděl a panuj metoda a její využití v praxi.",
        "url": "ulohy/linearni-binarni-vyhledavani.html",
        "params": {
          "difficulty": "hard",
          "time": "long",
          "theme": [
            "loop",
            "recursion",
            "function"
          ]
        }
      },
      {
        "name": "Problém dvou džbánů",
        "excerpt": "V úloze Problém dvou džbánů budou studenti vymýšlet algoritmus, jehož cílem bude pomocí přelévání vody mezi dvěma džbány o různých objemech docílit situace, že v prvním džbánu zůstane jeden litr vody. Výhodou úlohy je možnost rekurzivního i iterativního přístupu k řešení.",
        "url": "ulohy/problem-dvou-dzbanu.html",
        "params": {
          "difficulty": "medium",
          "time": "short",
          "theme": [
            "loop",
            "recursion",
            "function"
          ]
        }
      },
      {
        "name": "Fibonacciho posloupnost",
        "excerpt": "Fibonacciho posloupnost se skvěle hodí k triviálnímu testování různých dovedností. Jednoduchost výpočtu této posloupnosti nám zároveň dává velký prostor k osobní manipulaci s celkovým průběhem výuky. V prvním příkladu budou studenti tvořit program, který vypíše celou posloupnost o N členech a v druhém program vypíše právě N-tý člen.",
        "url": "ulohy/fibonacciho-posloupnost.html",
        "params": {
          "difficulty": "easy",
          "time": "short",
          "theme": [
            "array",
            "loop",
            "recursion"
          ]
        }
      },
      {
        "name": "Příznivé číslo",
        "excerpt": "V této úloze budou studenti vypisovat příznivá čísla (v angličtině Lucky numbers) do limitu N. Jedná se o úlohu, která se svou obtížností zařazuje mezi ty těžké, a to z důvodu provedení mnoha početních operací. Obtížnější je také pro studenty pochopit, jak poskládat jednotlivé úkony tak, aby tvořily funkční celek. Příznivá čísla sama o sobě nemají žádný význam a slouží pouze pro procvičení.",
        "url": "ulohy/priznive-cislo.html",
        "params": {
          "difficulty": "hard",
          "time": "short",
          "theme": [
            "array",
            "loop",
            "nested_loop"
          ]
        }
      },
      {
        "name": "Dokonalé číslo",
        "excerpt": "V této úloze budou mít studenti za úkol najít všechna dokonalá čísla v limitu N. Nejdříve studenti pouze vypisují dokonalá čísla, poté v dalším příkladu třídí všechna čísla podle určitého kritéria. Jedná se o matematický konstrukt, který nemá přesah do reálného světa a slouží pouze k procvičení práce s polem a cykly.",
        "url": "ulohy/dokonale-cislo.html",
        "params": {
          "difficulty": "medium",
          "time": "short",
          "theme": [
            "array",
            "loop",
            "nested_loop",
            "library_function"
          ]
        }
      },
      {
        "name": "Modelování obrazců I",
        "excerpt": "Úloha Modelování obrazců I je první úloha, ve které studenti pomocí zástupného znaku (v našem případě hvězdičky) tvoří obrazce. Tyto příklady jsou vhodné zejména k procvičení práce s cyklem for a vnořenými cykly.",
        "url": "ulohy/modelovani-obrazcu-i.html",
        "params": {
          "difficulty": "easy",
          "time": "short",
          "theme": [
            "loop",
            "nested_loop"
          ]
        }
      },
      {
        "name": "Modelování obrazců II",
        "excerpt": "V této úloze budou studenti tvořit rovnostranné trojúhelníky pomocí zástupného znaku hvězdičky. Tyto příklady jsou vhodné zejména k procvičení práce s cyklem for a vnořenými cykly.",
        "url": "ulohy/modelovani-obrazcu-ii.html",
        "params": {
          "difficulty": "medium",
          "time": "short",
          "theme": [
            "loop",
            "nested_loop"
          ]
        }
      },
      {
        "name": "Modelování obrazců III",
        "excerpt": "V této úloze budou studenti tvořit nejprve pyramidy, které následně spojí do obrazce tvaru diamantu. Pro zpestření byl jako poslední obrazec vybrán kosočtverec, který je odvozen od pyramid. Tyto příklady jsou vhodné zejména k procvičení práce s cyklem for a vnořenými cykly.",
        "url": "ulohy/modelovani-obrazcu-iii.html",
        "params": {
          "difficulty": "medium",
          "time": "short",
          "theme": [
            "loop",
            "nested_loop"
          ]
        }
      },
    ],
    "translator": {
      "difficulty": {
        "easy": "1-2 (lehká)",
        "medium": "3 (střední)",
        "hard": "4-5 (těžká)"
      },
      "time": {
        "short": "Krátká (do 2 hodin včetně)",
        "long": "Dlouhá (nad 2 hodiny)"
      },
      "theme": {
        "array": "Pole",
        "multidimensional_array": "Víceúrovňové pole",
        "loop": "Cykly",
        "nested_loop": "Vnořené cykly",
        "recursion": "Rekurze",
        "function": "Funkce vlastní",
        "library_function": "Funkce knihovní",
      }
    }
  }