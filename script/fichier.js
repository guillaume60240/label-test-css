
// en mettant // je pêux mettre des commentaires dans un fichier javascript

// je demande à la console de m'afficher une chaine de caractères en accédant à sa méthode .log() et en mettant ce qu'il y a à afficher entre " "
console.log("Je suis dans un fichier JS")

// je peux demander au document d'aller chercher un élément du DOM par son ID en utilisant sa méthode getElementById()
// pour pouvoir utiliser l'élément on le stocke dans une constante
const header = document.getElementById("my-header")

// Ici je demande au document d'aller cherher un élément qui a un ID site-logo
const logo = document.getElementById('site-logo')
// Et je peux demander à la console de m'afficher des propriétés de cet élément comme par exemple ses propriétés de style
console.log(logo.style)

// On peut ajouter un écouteur d'évènement en utilisant une méthode d'un élément addEventListener()
/* 
Ici on écoute le click sur cet élément que je passe en premier paramètre puis je lui donne l'action à réaliser en deuxième paramètre
en ajoutant une virgule pour séparer les deux paramètres 
Pour lui donner une action on utilise une fonction anonyme qui s'écrit comme ça () => {  /*mon code ici   }
*/
logo.addEventListener("click", ()=> {
    // dans l'action je peux demander à la console d'afficher quelque chose
    console.log("Je suis cliqué")
    // je peux donner une nouvelle valeur à une propriété de l'élément comme par exemple la couleur en accédant à color depuis style
    logo.style.color = "white"
    // Et je peux même utiliser une méthode native de JS pour afficher une alerte dans le navigateur
    alert("Je suis le logo du site")
})


/**
 * Maintenant qu'on a vu comment sélectionner un élément, comment ajouter un écouteur d'évènement et comment modifier une propriété de l'élément
 * essayons de modifier le type de l'input qui a un ID form-password grâce au clique sur un bouton qui aura l'ID change-type-input
 * Si l'input est de type text on lui assignera la valeur password
 * Mais si le type est password on lui assignera le type text
 */

// ATTENTION => Il faut ajouter un bouton dans le fichier HTML (il est ligne 68)

// Je commence par demander au document d'aller me chercher l'élément par son ID
const btn = document.getElementById("change-type-input")

// Maintenant je peux ajouter un écouteur d'évènement de type click
btn.addEventListener("click", ()=> {
    // Dans l'action je demande au document d'aller me chercher l'input par son ID
    const input = document.getElementById("form-password")
    // Je fais une condition sur le type de l'input si le type est password JS exécutera le code entre {}
    if(input.type === "password") {
        // JS n'accède à ce code que si input.type est de type password

        // Je change le type de l'input en lui assignant une nouvelle valeur
        input.type = "text"
        // Et je change le texte du bouton
        btn.textContent = "Cacher mon mdp"

        // Ici je vérifie si l'input est de type text
    } else if (input.type === "text") {
        // JS n'accède à ce code que si l'input est de type text

        // Je change le type de l'input
        input.type = "password"
        // Je change le texte du bouton
        btn.textContent = "Voir mon mdp"
    }
})
