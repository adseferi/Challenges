-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2015 at 11:14 AM
-- Server version: 5.6.21
-- PHP Version: 5.5.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE IF NOT EXISTS `book` (
`id` int(11) NOT NULL,
  `book_title` varchar(30) NOT NULL,
  `serie_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `book_title`, `serie_id`) VALUES
(1, 'Harry Potter and the Philosoph', 1),
(2, 'Harry Potter and the Chamber o', 1),
(3, 'Harry Potter and the Prisoner ', 1),
(4, 'Harry Potter and the Goblet of', 1),
(5, 'Harry Potter and the Order of ', 1),
(6, 'Harry Potter and the Half-Bloo', 1),
(7, 'Harry Potter and the Deathly H', 1),
(8, 'Book 1: De motu corporum', 2),
(9, 'Book 2', 2),
(10, 'Book 3: De mundi systemate', 2),
(11, 'Love in the time of cholera', 3),
(12, '100 years of solitude', 3),
(13, 'A brief history of time', 4);

-- --------------------------------------------------------

--
-- Table structure for table `series`
--

CREATE TABLE IF NOT EXISTS `series` (
`id` int(11) NOT NULL,
  `series_title` varchar(30) NOT NULL,
  `series_author` varchar(30) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `series`
--

INSERT INTO `series` (`id`, `series_title`, `series_author`) VALUES
(1, 'Harry Potter series', 'J. K. Rowling'),
(2, 'Philosophiae Naturalis Princip', 'Isaac Newton'),
(3, 'No_Series', 'Gabriel Garcia Marquez'),
(4, 'No_Series', 'Stephen Hawking');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `series`
--
ALTER TABLE `series`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `series`
--
ALTER TABLE `series`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
