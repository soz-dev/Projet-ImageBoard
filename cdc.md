# Cahier des charges

-----
-----
## Présentation de l'équipe:

### - Eva (barbaro.eva@outlook.fr):
- Project Manager
- Git Master

### - Gilles (gillespothieu.pro@outlook.fr):
- Product Owner

### - Sofyan (sofyan.devpro@gmail.com) : 
- Lead Front

### - Thibaud (thibaud.darre@gmail.com) :
- Lead Back

----

## Présentation du projet:

Création d’une Image-Board claire, user friendly, responsive, avec des fonctionnalités permettant de modeler le confort de navigation, contrairement à l’essentiel des images board déjà présentes.  
Nous souhaitons pour celà conserver ce qui fait le caractère d’une image board tel que la possibilité d’être anonyme, l'obligation de démarer un fil avec une image ou la non persistances des données.

### Objectifs:

- Créer une plateforme de divertissement et de communication
- Donner envie au visiteur de rester grace à des fonctionnalités simples, accessibles et un site qui attire le regard par son esthétisme
- Créer un site mobile first
- Succiter l'intérêt avec les vieux concepts de l'image board, comme l'éphémérité, chez un public français peu habitué au concept

### Public visé:

Toute tranche d'âge.

### Context:

Projet de fin de formation O'Clock.

### Nom du projet: 

O'Board

### Budget

Nul.

### Arborescence:

- page d'accueil
- page d'ajout d'une nouvelle board
- page d'inscription et de connexion
- page d'une Board
    - page d'un topic
    - commentaires et images de ce topic
- page de la vue d'ensemble d'une board
- page contact
- page mentions légales
- page d'erreurs
- page développeurs
- espace personnel
    - page des options de confort
    - page de changement info perso
    - page Board personnelle
- espace admin/modérateur
    - page liste des utilisateurs et option de modération des utilisateurs
    - page création/suppression/modification de Board
    - page création/suppression/modification tags

### Apparence:

Une apparence épurée, avec des couleurs légères et complémentaires.  
Une apparence qui engloberait tout type d'utilisateur et qui serait non-orientée vers une catégorie de personne.  
Utilisation d'effets avec parcimonie.

### Technologies:

#### Côté front:

- HTML/CSS
- Javascript
- React
- Frameworks CSS envisagés

#### Côté back:

- Node JS (expressjs)
- MongoDB
- Mongoose

### Contenu:

Nous fournissons un espace de divertissement vierge ou chacun visiteur/utilisateur pourra s'exprimer en créant lui-même le contenu du site à travers la soumission de topic qui auront tous comme point de départ une image. Chaque utilisateur ou visiteur pourra participer à l'échange et à l'alimentation des débats autour de chaque topic.  
Nous fournissons également des fonctionnalités supplémentaires aux utilisateurs enregistrés afin d'améliorer son expérience.  
Nous fournissons de même la garantie d'un espace de discussion qui sera modéré afin de limiter les débordements inhérents à toute espace de discussion.  
Nous ne fournissons, en revanche, aucun contenu en lui-même. Uniquement les outils.

### Langue:

Anglais/Français

----

## Fonctionnalités attendues:

### Site fini:

- Site responsive
- Accessibilité et simplicité d'utilisation
- Pas d'accueil avec suggestion et topic populaires
- Page 404
- Possibilité de créer un compte
- Logo et typographies personnels
- Plusieurs Boards catégorisées
- "J'ai perdu mon mot de passe" possible au login d'un utilisateur
- Bloquer accès temporairement à la connexion d'un utilisteur après trop d'échec dans les inputs
- Prévenir sur son adresse personnel de tous ces echecs et de la suspension temporaire du compte
- Possibilité de changer la langue du site en anglais ou français
- Fonctionnalités basiques pour le visiteur qui n'a pas de compte:
    - Poster et commenter un fil, avec ajout de tags et drag and drop d'images
    - Liker, Disliker un fil ou des posts
    - Suggérer une modération d'un fil, ou d'un post
    - Se renseigner sur les conditions d'utilisation
    - Entrer en contact avec l'équipe du site
    - Filtrer les topics à l'aide des tags
    - Avoir connaissance des topics populaires
    - Partager des topics/images/commentaires sur les réseaux sociaux
    - Selection des Boards selon les catégories
    - accéder à la page d'information des créateurs du site
- Fonctionnalités plus larges pour l'utilisateur ayant un compte, les même que le visiteur avec en plus:
    - L'accès à un compte perso permettant:
        - modification du profil (avatar, petite descritpion, changement de mot de passe)
        - visualisé ses statistiques perso (nombre de topics créer, commentaires, valeur de la réputation...)
        - Si bonne réputation, accès aux options de modération
        - avoir accès aux topics archivés
        - accéder égalements à différentes options pour modeler son confort de navigation (timing de l'auto-refresh, activé ou non popup d'information...)
        - gestion de boards personnelles
    - Accéder à des fonctionnalités particulières:
        - Utilisation du mini-paint en réponse
        - l'auto-refresh avec timer
        - Suivre un topic
        - Archiver un topic
        - Suggestions personnalisées de topics ou catégories, en fonction de l'utilisation
        - Possibilité de créer une Board personnelle privé et vierge avec invitation d'amis.
        - Accéder à un système de réputation permettant d'avoir le droit à la modération d'une board favorite, de manière limitée.
- Fonctionnalités modérateur/admin
    - Front back office permettant:
        - Ajout/suppression de tags
        - Consultation des statistiques
        - Droit à la suppression/modification/création des boards/topics/commentaires
        - Accès à la liste et aux statistiques de tous les utilisateurs
        - Possibilité de supprimer/bannir un temps des utilisateurs
        - Possibilité de rappeler à l'ordre un utilisateur
        - Possibilité d'envoyer des mails aux utilisateurs
        - Accès à la modération des boards personnelles
    - Directement sur le site:
        - Mêmes fonctionnalité que dans l'espace back office, mais "à la volée"
        - Mêmes fonctionnalité que l'utilisateur enregistré.

### MVP:

- Site responsive
- Site esthétique et simple d'utilisation
- Navigation fluide
- Page d'accueil
- Page 404
- Site en français
- Pour les visiteurs:
    - possibilité de créer un compte
    - possibilité de céer un post/commenté et liké/disliké
    - création, utilisation des tags comme filtre
    - signaler un post/commentaire comme innaproprié
    - accéder aux conditions utilisation
    - accéder à la page d'information des créateurs du site
    - pouvoir écrire aux modérateurs
- Pour les utilisateurs; accès aux mêmes fonctionnalités que les visiteurs avec en plus:
    - accéder à la page perso
    - pouvoir créer/modifier avatar
    - change description
    - réinitialiser son mot de passe
    - changer ses informations personnelles
- Pour les modérateurs; accès aux même fonctionnalités que les utilisateurs avec en plus:
    - Accès à un front back office visuellement basique permettant:
        - Ajout/suppression de tags
        - Droit à la suppression/modification/création des boards/topics/commentaires
        - Accès à la liste et aux statistiques de tous les utilisateurs
        - Possibilité de supprimer/bannir un temps des utilisateurs
        - Possibilité de rappeler à l'ordre un utilisateur
        - Possibilité d'envoyer des mails aux utilisateurs
