Jeu d'echec:

Pas une version finale, mais elle fonctionne bien. Il y aura des modifications a venir

Ce jeu a ete realise dans le cadre du cours IFT 3225 - Technologie Internet (Juillet 2020). Le jeu jeu est base sur les caracteristiques du vrai jeu d'echec.
On a un vainqueur lorsqu'un ROI a ete mange (noir ou blanc).

Logique:
On clique sur la piece qu'on veut bouger et ensuite on clique sur la case ou on veut le deplacer . Je sauvegarde les coordonnees des cases cliquees dans mes variables: firstCaseClicked et secondCaseClicked.
La fonction isMoveGood(...) est ensuite appele pour verifier si le deplacement fait est valide. Si le deplacement est valide, on redessine la grille qui resulte du deplacement(On verifie en meme temps si le deplacement a engendre un vainqueur ou pas).

Affichage du tableau:

Au depart je cree les differentes pieces(nom,couleur,x,y); je les stocke dans un tableau;
Je represente ma grille de jeu a l'aide d'un tableau double. Je parcours ce tableau double 
et je place les pieces a leurs coordonnees respectives. 

Alternance de couleur dans ma grille:

- Pour les lignes paires , les colonnes paires ont la couleur blanche et les colonnes impaires ont la couleur verte
- Pour les lignes impaires, les colonnes paires ont la couleur verte et les colonnes impaires ont la couleur blanche 

Exemple [[1,2,3], [4,5,6]] : 2 lignes et 3 colonnes 
Ligne paire : index pair de mon tableau double 
Colonne paire : index pair des sous tableaux

Recherche du vainqueur:

Apres chaque deplacement avant de redessiner la grille de jeu, je verifie combien de rois il y a sur la grille, si le nb de roi < 2 alors on a 
un vainqueur.

Gestion deplacement des pieces: Fonction isMoveGood(...)



Chaque piece et chaque case ont un attribut x et y qui sont sa position par rapport a la grille . On clique sur une premiere case pour selectionner la piece qu on veut deplacer et on clique sur un deuxieme pour selectionner la case ou on veut aller; Comme on a les x et y des deux cases cliques on peut alors verifier avec ma fonction:(isMoveGood()) si le deplacer est faisable.

Toutes mes pieces sont sauvegardes dans le tableau allPiecesInPlay; et a chaque deplacement on parcours ce tableau et on affiche chaque piece a la position qui lui correspond

Idee que j'ai eu mais j'ai pas pu realiser:

C'etait d'avoir pour chaque component la fonction qui gere son deplacement(dans le pion on a la fonction qui gere son deplacement mais aussi verifie si le deplacement est faisable ). Mais j'ai eu beaucoup de misere pour appeler une fonction qui fait partie du component enfant a partir du parent!!!

Pour debuter le programme: npm start dans votre console
