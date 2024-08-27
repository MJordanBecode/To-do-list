 function headerJs() {
    const header = document.createElement('header');
    const navToDoList = document.createElement('nav');
    const divImg = div('divImage');
    const image = document.createElement('img');

    // Appeler la fonction div() avec la classe 'divImage'
    navToDoList.appendChild(divImg);

    // Créer l'élément img et l'ajouter à la div avec la classe 'divImage'
    // Ajouter les attributs src, alt, etc. à l'image si nécessaire
    divImg.appendChild(image);
    

    header.appendChild(navToDoList);
    document.body.appendChild(header);
}

// Appel de la fonction headerJs pour exécuter le code
headerJs();
