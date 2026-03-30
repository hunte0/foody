-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 30, 2026 at 09:52 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `foody`
--

-- --------------------------------------------------------

--
-- Table structure for table `ingredient`
--

CREATE TABLE `ingredient` (
  `id_ingredient` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `other_details` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `macros`
--

CREATE TABLE `macros` (
  `id` int(11) NOT NULL,
  `ingredient_id` int(11) NOT NULL,
  `calories` float DEFAULT 0,
  `proteins` float DEFAULT 0,
  `fats` float DEFAULT 0,
  `carbs` float DEFAULT 0,
  `other_nutrients` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `recette`
--

CREATE TABLE `recette` (
  `id_recette` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `state` enum('public','private') DEFAULT 'private'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `recette_ingredient`
--

CREATE TABLE `recette_ingredient` (
  `id` int(11) NOT NULL,
  `recette_id` int(11) NOT NULL,
  `ingredient_id` int(11) NOT NULL,
  `quantity` float NOT NULL,
  `unit` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','normal') DEFAULT 'normal'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ingredient`
--
ALTER TABLE `ingredient`
  ADD PRIMARY KEY (`id_ingredient`);

--
-- Indexes for table `macros`
--
ALTER TABLE `macros`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_macros_ingredient` (`ingredient_id`);

--
-- Indexes for table `recette`
--
ALTER TABLE `recette`
  ADD PRIMARY KEY (`id_recette`),
  ADD KEY `fk_recette_user` (`owner_id`);

--
-- Indexes for table `recette_ingredient`
--
ALTER TABLE `recette_ingredient`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_recetteingredient_recette` (`recette_id`),
  ADD KEY `fk_recetteingredient_ingredient` (`ingredient_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ingredient`
--
ALTER TABLE `ingredient`
  MODIFY `id_ingredient` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `macros`
--
ALTER TABLE `macros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `recette`
--
ALTER TABLE `recette`
  MODIFY `id_recette` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `recette_ingredient`
--
ALTER TABLE `recette_ingredient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `macros`
--
ALTER TABLE `macros`
  ADD CONSTRAINT `fk_macros_ingredient` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredient` (`id_ingredient`) ON DELETE CASCADE;

--
-- Constraints for table `recette`
--
ALTER TABLE `recette`
  ADD CONSTRAINT `fk_recette_user` FOREIGN KEY (`owner_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `recette_ingredient`
--
ALTER TABLE `recette_ingredient`
  ADD CONSTRAINT `fk_recetteingredient_ingredient` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredient` (`id_ingredient`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_recetteingredient_recette` FOREIGN KEY (`recette_id`) REFERENCES `recette` (`id_recette`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
