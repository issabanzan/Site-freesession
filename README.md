# Documentation Technique - Site de Prise de Rendez-vous

## Introduction
Ce document sert de documentation technique pour le site de prise de rendez-vous. Le site permet aux utilisateurs de réserver des rendez-vous avec des praticiens en cours de formation. La réservation de base est gratuite, mais les utilisateurs ont la possibilité de prolonger leur rendez-vous pour un coût supplémentaire de 50$. Après la réservation, les utilisateurs peuvent gérer leurs rendez-vous à travers leur profil utilisateur, y compris modifier ou annuler un rendez-vous.

## Procédure de Déploiement
**Versionnage** : Le code est d'abord poussé vers un repository sur Bitbucket.
**CI/CD avec CircleCI** :
- À chaque push, CircleCI exécute les tests automatisés pour assurer la qualité du code.
- CircleCI procède au déploiement en utilisant Docker.
- Un script docker-compose up est exécuté pour lancer l'application sur le serveur Hostinger.

## Architecture du Projet

### Technologies Utilisées
- **Frontend** : React.js (JSX), tailwindcss, vite
- **Backend** : Node.js, TypeScript, Express.js
- **Base de Données** : MySQL
- **Paiement** : Stripe pour la gestion des paiements supplémentaires
- **Authentification** : Email et mot de passe Bcrypt
- **Hébergement** : Le site est hébergé sur Hostinger, offrant performance et fiabilité.
- **DNS et Sécurité** : Cloudflare est utilisé pour la gestion du domaine, fournissant des services de sécurité et d'optimisation.
- **Versionnage et Stockage de Code** : Bitbucket pour le contrôle de version et le stockage sécurisé du code source.
- **Containerisation** : Docker pour la containerisation de l'application, facilitant le déploiement et la portabilité.
- **Intégration et Déploiement Continus** : CircleCI
