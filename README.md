## On teste le CSS et JS

### CSS

J'ai placé tous les fichiers de style dans un dossier `style`
J'ai donc corrigé l'import de ces fichiers dans le `head` du fichier `.html`
Ces fichiers ont un ordre, à chaque fois une nouvelle notion est abordée. Vous pouvez les décommenter en retirant le `<!-- -->` qui entoure le nom du fichier que vous voulez essayer et en commentant celui qui est déjà importé.

- Le fichier `style.css` permet d'ajouter des `backgroud-color`
- Le fichier `style-2.css` permet de mettre le `body`en mode flex avec `display: flex` mais aussi de lui demander de prendre toute la hauteur de l'ecran avec `min-height: 100vh`
  On delande au `main` de prendre toute la place restante en lui ajoutant la propriété `flex: 1`
- Le fichier `style-3.css`permet de donner la même hauteur au `header` et au `footer`
  (ligne 7 du fichier)
  On ajoute également un peu de `padding` au `header` et on lui ajoute la propriété `flex`
  Le `ul` passe en `flex` aussi et on retire le style par défaut des `li`
  **_À vous de trouver quelle est la propriété qui le permet_**
- Le fichier `style-4.css` permet d'utiliser les propriétés du `grid` pour les sections.
  On en profite pour dessiner la grille et placer les éléments enfants dans cette grille
- Le fichier `style-5.css` permet de rajouter du responsive grâce aux media queries `@media`

### JavaScript

J'ai placé tous les fichiers JS dans un dossier `script`
Le fait de ranger des fichiers de même type dans des dossiers dédiés permet d'avoir une structure de projet plus propre et dans laquelle on peut se retrouver plus facilement.

- Dans le fichier `fichier.js` vous trouverez toutes les explications vues pendant mon intervention avec des tonnes de commentaires
- Je vous invite à décommenter l'import du fichier `script.js` et d'essayer de comprendre le code et tout ce qui est fait.

### Conclusion

Amusez vous avec tout ça, pratiquez au max et bon courage pour la suite!!!!
