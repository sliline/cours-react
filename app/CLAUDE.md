# Cours react

exercices d'apprentissage en React + typescript, projet vite.

## Commandes

##

-`npm run dev`: lance le projet -`npm run lint`: vérifie le code -`npm run build`:compile et vérifie les types

## Règles

-React nu : pas de librairie de composants, pas de router, pas de redux ni de zustand.
-un composant par fichier, propos typées avec une interface.

- Pour les exercices, tu écris uniquement dans src/exos-claude/ et tu ne lis pas src/exos/. Exception : pour l'étape 3, tu modifies la todo list de src/exos/ (TodoApp et ses composants), et rien d'autre.
- Pour un id qui ne doit jamais être réutilisé, utilise un compteur avec useRef.
- Passe directement les fonctions en props (onAdd={add}) au lieu d'ajouter une fonction intermédiaire inutile.
  -Le state contient le minimum: tout ce qui peut se calculer à partir d'un state est une simple variable, jamais un autre useState.
  -pas de useEffect pour calculer ou synchroniser des données.
  -on ne modifie jamais un state directement : on crée toujours un nouveau tablea uou un nouvel objet.
  -les key des listes utilisent un id, jamais l'index.
  -dans un onClick ou un onChange, on passe une fonction (() => ...)on n'appelle pas la fonction directement.
  -quand tu as finis, lance npm run lint.
