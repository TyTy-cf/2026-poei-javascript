
## Exercices

### Faire une classe "Hero"

- Le constructor doit recevoir les stats de base en "Strength", "Agility" et "Intelligence"
- Sa force de base détermine ses points de vie, le ratio est : 1 Force = 25 HP
- Son agilité de base détermine sa défense / armure : 1 Agilité = 0.25 Defense
- Son intelligence détermine sa quantité de mana : 1 Intelligence = 20 mana
- Chaque hero a une statistique principale, parmi les 3 ci-dessus, c'est elle qui détermine ses dégâts min et max
  - minDamage : 1.8 * primary stats 
  - maxDamage : 2 * primary stats
- Chaque hero a une chance de réaliser un coup critique fixe : 15%
- Chaque coup critique inflige 1.5 fois les dégâts normaux
- Chaque hero a un niveau

### Faire une classe "Warrior"

- Le "Warrior" hérite de Hero
- Il possède les stats de base suivantes :
  - Strength : 24
  - Agility : 13
  - Intelligence : 16
- Le Warrior par défaut a une base de défense de 1
- Le Warrior calcule sa plage de dégâts min/max par :
  - minDamage : 1.7 * primary stats
  - maxDamage : 2.1 * primary stats

### Faire une classe "Rogue"

- Le "Rogue" hérite de Hero
- Il possède les stats de base suivantes :
    - Strength : 16
    - Agility : 23
    - Intelligence : 17
- Le Rogue calcule sa plage de dégâts min/max par :
    - minDamage : 2 * primary stats
    - maxDamage : 2.3 * primary stats
- Chaque Rogue a une chance de réaliser un coup critique fixe : 17.5%
- Chaque Rogue critique inflige 1.75 fois les dégâts normaux

### Faire une classe "Mage"

- Le "Mage" hérite de Hero
- Il possède les stats de base suivantes :
    - Strength : 17
    - Agility : 12
    - Intelligence : 30
- Le Mage calcule sa plage de dégâts min/max par :
    - minDamage : 1.9 * primary stats
    - maxDamage : 2.1 * primary stats
- Les dégâts du mage réduisent la défense de 3


