# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- REACT que savoir :  -->

Concept de Composants :

    React est basé sur des composants réutilisables. Ces composants représentent des parties de l'interface utilisateur et peuvent être réutilisés dans toute l'application. Par exemple, vous pouvez avoir un composant distinct pour une barre de navigation, un autre pour le pied de page, un autre pour le contenu principal, et ainsi de suite. Cela simplifie le développement car vous n'avez pas à répéter le code.

État Local:

    Un composant React peut maintenir un état local, accessible via this.state. Lorsque l'état local d'un composant change, son affichage est mis à jour en appelant render() une nouvelle fois.

JSX : 

    La syntaxe utilisée pour construire des applications React est appelée JSX (JavaScript XML). JSX vous permet de combiner la logique JavaScript et la logique de l'interface utilisateur d'une manière unique. Avec JSX, vous éliminez le besoin d'interagir avec le DOM en utilisant des méthodes comme document.getElementById, querySelector, et d'autres méthodes de manipulation du DOM.

Propriétés des Composants (Props) : 

    Les props sont des arguments passés aux composants React. Elles permettent de passer des données d'un composant parent à un composant enfant.

Hooks : 

    Les hooks sont des fonctions spéciales qui permettent d'utiliser l'état et d'autres fonctionnalités de React sans écrire de classes. Certains des hooks les plus couramment utilisés incluent useState, useEffect, useContext, et useReducer .

Utilisation par des Entreprises :

     React est utilisé par de nombreuses grandes entreprises comme Facebook, Netflix, Instagram, Yahoo, Uber, The New York Times, et bien d'autres. Cela témoigne de la fiabilité et de l'évolutivité de React.

Performance : 
    
    Grâce au DOM virtuel de React, le rendu des pages peut se faire plus rapidement. En utilisant une bibliothèque de routage comme React Router, vous pouvez avoir différentes pages rendues sans aucun rechargement de page.

Extensibilité : 

    React est une bibliothèque qui assure uniquement le rendu de l'interface utilisateur de l'application. C'est au développeur de choisir les outils avec lesquels il souhaite travailler, comme les bibliothèques de rendu de différentes pages, les bibliothèques de conception, etc.