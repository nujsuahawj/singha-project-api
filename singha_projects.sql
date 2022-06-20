-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 20, 2022 at 03:39 AM
-- Server version: 8.0.28
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `singha_projects`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`) VALUES
(1, 'nujsua', '$2a$12$joSzDtidHY2koiIj8hEJn.qVy1bYS3ymwe5RH0avRhEukX2nWZZrG'),
(2, 'nujsua hawj', '$2a$12$tGdmS0j83cTetAEZLI3tLOhQGU5Gv9ROdoKwUnnyT1kbRj8aNzYA2'),
(6, 'nas', '$2a$12$.BqnuhUkxwWE40UAQ951yuM25giOiwX61eYS2/UYx.ebTkaHp8IiC'),
(7, 'yoglawm', '$2a$12$vqiyKQGUueZgadWZRqwtM.MdpOOTX9DYlOLS9WTAM2Hi2B2nocC6q'),
(8, 'admin', '$2a$12$dkp2jTgkdRzq29NbRVU1e.uT/9LJWArLRlW70bGZbTY5/9cRsbY5S'),
(9, 'admin2', '$2a$12$Ua4O/nU4W9KaW497Sz5TBO9bbSlU8UP3s13cgLiefNH.2IVuCpfVy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
