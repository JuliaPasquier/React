React fournit plusieurs hooks intégrés qui permettent d'utiliser différentes fonctionnalités de React au sein de vos composants. Voici une liste des principaux hooks intégrés à React :

useState : Permet d'ajouter un état local à des composants fonctionnels. Il renvoie une paire de valeurs : l'état actuel et une fonction pour le mettre à jour 1.

useEffect : Permet d'effectuer des effets secondaires dans les composants fonctionnels. Il est similaire aux méthodes de cycle de vie componentDidMount, componentDidUpdate, et componentWillUnmount dans les composants de classe 1.

useContext : Permet d'accéder à la valeur actuelle d'un contexte. Il renvoie la valeur du contexte actuellement en cours pour ce contexte 1.

useReducer : Une alternative à useState qui est plus adaptée pour gérer des états plus complexes. Il prend une fonction de réducteur et un état initial, et renvoie l'état actuel et une fonction dispatch pour mettre à jour l'état 1.

useCallback : Renvoie une version mémorisée d'une fonction qui ne change que si une de ses dépendances change 1.

useMemo : Renvoie une valeur mémorisée qui ne change que si une de ses dépendances change. Il est utilisé pour optimiser les performances en évitant des calculs coûteux 1.

useRef : Crée une référence mutable qui peut être utilisée pour accéder directement à un élément du DOM ou pour garder une valeur mutable qui persiste tout au long de la durée de vie du composant 1.

useImperativeHandle : Personnalise l'instance qui est exposée aux composants parents lorsqu'ils utilisent ref 1.

useLayoutEffect : Semblable à useEffect, mais il s'exécute de manière synchrone après tous les modifications du DOM. Il est généralement utilisé pour lire la mise à jour du layout à partir du DOM et synchroniser les mises à jour de l'état 1.

useDebugValue : Vous permet de personnaliser le libellé que les outils de développement React affichent pour votre propre Hook 1.

useId : Permet à un composant de s’associer un ID unique. Généralement utilisé avec les API d’accessibilité 1.

useSyncExternalStore : Permet à un composant de s’abonner à une source de données extérieure 1.

