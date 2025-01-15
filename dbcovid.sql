-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 15 Jan 2025 pada 09.00
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbcovid`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `status` enum('Positive','Recovered','Dead','Rawat Jalan','Rawat Inap','Selesai') DEFAULT NULL,
  `in_date_at` date DEFAULT NULL,
  `out_date_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `patients`
--

INSERT INTO `patients` (`id`, `name`, `phone`, `address`, `status`, `in_date_at`, `out_date_at`) VALUES
(2, 'Alya Rahma', '081234567890', 'Jl. Sakura No. 12', 'Recovered', '2025-01-01', '2025-01-10'),
(3, 'Budi Santoso', '082345678901', 'Jl. Mawar No. 13', 'Dead', '2025-01-02', '2025-01-03'),
(4, 'Clara Dewi', '083456789012', 'Jl. Cempaka No. 14', 'Positive', '2025-01-03', NULL),
(5, 'Dedi Syahputra', '084567890123', 'Jl. Anggrek No. 15', 'Recovered', '2025-01-04', '2025-01-12'),
(6, 'Eka Prasetyo', '085678901234', 'Jl. Melati No. 16', 'Dead', '2025-01-06', '2025-01-07'),
(7, 'Fina Amelia', '086789012345', 'Jl. Teratai No. 17', 'Positive', '2025-01-08', NULL),
(8, 'Gilang Maulana', '087890123456', 'Jl. Dahlia No. 18', 'Recovered', '2025-01-09', '2025-01-17'),
(9, 'Hana Kartika', '088901234567', 'Jl. Tanjung No. 19', 'Dead', '2025-01-10', '2025-01-11'),
(10, 'Ilham Yusuf', '089012345678', 'Jl. Kamboja No. 20', 'Positive', '2025-01-12', NULL),
(11, 'Ilyas Abdul Aziz', '08123456789', '123 Main Street, Jakarta', 'Positive', '2025-01-01', '2025-01-10');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
