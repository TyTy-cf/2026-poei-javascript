
# Chess

## 1. Préparation

### 1.1 Les classes

- `Cell`, attributs :
  - x
  - y
  - color
  - piece?

- `Piece`, attributs :
  - color
  - img

- Prévoir un héritage pour chaque pièce qui définie quelle image choisir pour la piece...

- `Board`, attributs :
  - cells[] (un tableau de l'objet Cell)

- Le constructeur de `Board` doit créer les 64 cases de la bonne couleur et placer les pièces au bon endroit, comme pour commencer une nouvelle partie


## 2. Afficher le plateau


- Ajouter un container "board-chess" permettant d'afficher les cases du jeu
- Le plateau sera entièrement généré en JS et intégré à l'intérieur de ce container


## 3. Les déplacements


- Modifier votre code précédent pour ajouter un event "click" sur les cases du jeu
- Si une Piece existe sur la case
- Alors on peut cliquer sur une autre case, vide ou ayant une pièce d'une couleur différente
- La piece de la case initiale va venir remplacer celle de la nouvelle case
