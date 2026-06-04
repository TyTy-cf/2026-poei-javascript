
### 1.

- Récupérer les noms des étudiants (en utilisant un querySelector)
- Pour chacun des éléments récupérés, leur ajouter la classe CSS : "fw-bold"


### 2.


- Trouver un moyen de récupérer les notes des étudiants
- Pour chacun des éléments récupérés, leur ajouter la classe css "ranks"


### 3.


- Trouver un moyen de récupérer le titre principal de la page
- Modifier son contenu, pour qu'il ai la valeur "TP Javascript POEI"


### 4.


- Récupérer les notes des étudiants
- Afficher leur moyenne dans la troisième colonne


### 5.


- Par défaut, on va CACHER la table des étudiants
- Dorénavant le clic sur le bouton "Click me !" doit afficher la table, si elle est cachée ou la cacher, si elle est visible


### 6.


Sur la page "form.html", faire en sorte que le clic sur le bouton "oeil" affiche le mot de passe ou le masque

Bonus : pour un changement d'icône adéquat...



### 7. 


- Faire un lien depuis la page "index.html" qui mène à la page "form.html"
- Cette page doit avoir un formulaire avec les champs suivants :
  - input: text avec le nom "search"
  - input: text avec le nom "number"
- Ajouter un évènement sur chacun des input qui affiche le contenu saisie par l'utilisateur dans un `<p>`, situé en dessous des input
- L'utilisateur peut aussi valider le form, s'il le fait on ouvre une alerte JS affichant les informations saisies


### 8.


- Objectif : simuler un lancé de dé, et afficher l'image du bon dé à l'écran
- Voici la formule pour obtenir un résultat aléatoire entre 1 et 6 : `Math.floor(Math.random() * 6) + 1`
- Vous intégrerez l'image du dé correspondant au lancé dans la div ayant la classe "dice"


### 9.


- Objectif : créer un bouton, qui permet de faire un lancé de dé au clic
- Le résultat s'affichera dans la div ayant la classe "dice"
- Si la div a déjà du contenu, il sera écrasé


### 10.


- Simuler 5 lancés de dés, au chargement et au lancé de dé

### 11.


- Objectif : afficher les images des Pokémons des numéros 1 à 151
- Il faudra créer une balise HTML de type 'div' qui contiendra une balise HTML de type 'img'
- On doit avoir cette structure de balise :

<div class="col-4">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/681.png">
</div> 


- Chaque balise ayant 'col-4' doit être insérée dans la balise de classe 'row block-pokemons', existant sur la page index.html

Astuce :
- Les images ont toutes le même nom, la seule chose qui change est le numéro du pokémon en fin d'URL : https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/681.png
- Il faut donc le remplacer la valeur de 'i' dans une itération de boucle...


12. 

 
- Faire un form de recherche
- Le form aura un "input" type "number" qui permettra de filtrer et d'afficher seulement l'image du pokémon corespondant


13. 


- Prévoir pour ajouter plusieurs boutons qui permettent de gérer plusieurs Pokédex, par exemple 
  - Gen 1 : 1 à 151
  - Gen 2 : 152 à 251
  - Gen 3 : 252 à 386
  - Gen 4 : 387 à 493
  - Gen 5 : 494 à 649
  - Gen 6 : 650 à 721
  - Gen 7 : 722 à 809
  - Gen 8 : 810 à 905
  - Gen 9 : 906 à 1025

- En cliquant sur le bouton on affiche le pokédex adéquat