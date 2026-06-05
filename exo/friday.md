
# Exos du vendredi


## 1. Exos algo


### 1.1. Le jeu du "Plus ou Moins"


- Le programme génère un nombre aléatoire
- L'utilisateur doit le deviner
- À chaque tentative, l'algorithme compare la saisie avec le nombre mystère et affiche "Plus", "Moins" ou un message de victoire
- Vous pouvez limiter le nombre de tentatives (à 5 par exemple)


### 1.2. Manipulation de chaîne de caractères


- Créer une fonction qui prend en paramètre une chaîne de caractère
- La fonction doit renvoyer la chaîne avec le nombre de lettres augmentés de 1, par occurrence de celle-ci, par exemple :
  - Le mot "ici" va renvoyer "icii"
    - Le deuxième "i" est doublé car c'est la deuxième fois où il apparaît
  - Le mot "pomme" va renvoyer "pommme"
    - Le deuxième "m" est doublé car c'est la deuxième fois où il apparaît
  - Le mot "verriere" va renvoyer "verrrieerrreee"
    - Le deuxième "r" est doublé car c'est la deuxième fois où il apparaît
    - Le troisème "r" est doublé car c'est la troisième fois où il apparaît
    - Le deuxième "e" est doublé car c'est la deuxième fois où il apparaît
    - Le troisème "e" est doublé car c'est la troisième fois où il apparaît


## 2. Manipulation du DOM - QuerySelector


- Voir l'HTML mis à disposition dans le fichier "friday.html"
- Objectifs :
  - Le formulaire de modification doit être masqué par défaut
  - Ajouter un évènement "click" sur le bouton "Modifier", qui permet de :
    - Afficher le form de modification
    - Si l'utilisateur reclique sur le bouton "Modifier", alors le formulaire est de nouveau masqué
    - Les "input" présent dans le formulaire doivent avir les mêmes valeurs que celles par défaut du profil utilisateur, elles sont visibles dans la balise "section"
    - Si l'utilisateur valide le formulaire, il faut interrompre le comportement par défaut du formulaire et venir modifier les valeurs des "noms" et "fonctions" définies dans le form, directement dans l'HTML