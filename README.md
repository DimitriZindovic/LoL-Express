# Projet Express LoL

### Rendu de cours Node.js

## Description :

Ce projet consiste à créer un système de gestion de champions pour le jeu "League of Legends". L'application permettra d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur les champions. Voici un aperçu des fonctionnalités :

## Fonctionnalités principales :

1. **Créer un champion** :

   - Endpoint : `POST /champions`
   - Description : Permet de créer un nouveau champion en fournissant son nom et son type.

2. **Récupérer tous les champions** :

   - Endpoint : `GET /champions`
   - Description : Récupère la liste de tous les champions disponibles dans la base de données.

3. **Récupérer un seul champion** :

   - Endpoint : `GET /champions/:id`
   - Description : Récupère les informations d'un champion spécifique en fonction de son ID.

4. **Modifier un champion** :

   - Endpoint : `PUT /champions/:id`
   - Description : Modifie les informations d'un champion spécifique en fonction de son ID.

5. **Supprimer un champion** :
   - Endpoint : `DELETE /champions/:id`
   - Description : Supprime un champion spécifique en fonction de son ID.

## Informations sur un champion :

Chaque champion est caractérisé par deux informations principales :

- Son nom.
- Son type (combattant, assassin, mage, etc.).

## Fonctionnalités supplémentaires :

En plus des opérations CRUD, l'application propose également des fonctionnalités de recherche de champions. Un fichier JSON rempli de champions de League of Legends est fourni pour peupler la base de données. Pour importer ces champions dans la base de données, l'utilisateur peut appuyer sur un bouton dans l'interface ou exécuter la commande `npm run seed`.

Avec cette application, les utilisateurs pourront gérer facilement les champions de League of Legends, en effectuant des opérations CRUD et en recherchant des champions spécifiques selon leurs besoins.

## Technologies :

- Express
- Prisma

## Auteur :

Dimitri Zindovic
