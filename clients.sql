-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 07 fév. 2024 à 13:48
-- Version du serveur : 11.2.0-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `clients`
--

-- --------------------------------------------------------

--
-- Structure de la table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
CREATE TABLE IF NOT EXISTS `appointments` (
  `appointment_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `appointment_type_id` int(11) DEFAULT NULL,
  `calendar_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  PRIMARY KEY (`appointment_id`),
  KEY `user_id` (`user_id`),
  KEY `appointment_type_id` (`appointment_type_id`),
  KEY `calendar_id` (`calendar_id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `appointments`
--

INSERT INTO `appointments` (`appointment_id`, `user_id`, `appointment_type_id`, `calendar_id`, `date`, `time`) VALUES
(39, 1, 23715014, 8758616, '2024-01-27', '10:00:00'),
(52, 1199896419, 23715014, 8758616, '2024-02-08', '09:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `appointment_types`
--

DROP TABLE IF EXISTS `appointment_types`;
CREATE TABLE IF NOT EXISTS `appointment_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `duration` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23715015 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `appointment_types`
--

INSERT INTO `appointment_types` (`id`, `name`, `duration`) VALUES
(23715014, 'RDV visio gratuit de 15 minutes', 15);

-- --------------------------------------------------------

--
-- Structure de la table `calendars`
--

DROP TABLE IF EXISTS `calendars`;
CREATE TABLE IF NOT EXISTS `calendars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8758617 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `calendars`
--

INSERT INTO `calendars` (`id`, `name`, `email`) VALUES
(8758616, 'ik en télé-présentiel', 'ibk@itk.com');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `password_hash` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `email`, `phone`, `password_hash`) VALUES
(1, 'IS', 'K', 'is@yahoo.fr', '0768636902', '66'),
(1199896419, 'Darkou', 'Darkou', 'Darkou@gmail.com', '07-17-34-59-32', 'Darkou');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `appointments_ibfk_2` FOREIGN KEY (`appointment_type_id`) REFERENCES `appointment_types` (`id`),
  ADD CONSTRAINT `appointments_ibfk_3` FOREIGN KEY (`calendar_id`) REFERENCES `calendars` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
