Le jeu en fait joue parfaitement bien ; le deplacement des pieces, la victoire d'une equipe se fait selon les regles du jeu.Ma page web affiche l'equique gagnante de lorsque le roi d'une equipe a ete mange par l'equipe adverse. 


Logique:

Chaque piece et chaque case  ont  un attribut x et y qui sont sa position par rapport a la grille . On clique sur une premiere 
case pour selectionner la piece qu on veut deplacer et on clique sur un deuxieme pour selectionner la case ou on veut aller;
Comme on a les x et y des deux cases cliques on peut alors verifier avec ma fonction:(isMoveGood()) si le deplacer est faisable.

Toutes mes pieces sont sauvegardes dans le tableau allPiecesInPlay; et a chaque deplacement on parcours ce tableau et on affiche 
chaque piece a la position qui lui correspond

Idee que j'ai eu mais j'ai pas pu realiser:

C'etait d'avoir pour chaque component la fonction qui gere son deplacement(dans le pion on a la fonction qui gere son deplacement mais aussi verifie si le deplacement est faisable ). Mais j'ai eu beaucoup de misere pour appeler une fonction qui fait partie du component enfant a partir du parent!!!

Pour debuter le programme: npm start dans votre console
