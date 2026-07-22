CREATE DATABASE IF NOT EXISTS workshop_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS 'workshop'@'localhost' IDENTIFIED BY 'workshop_local_password';
GRANT ALL PRIVILEGES ON workshop_db.* TO 'workshop'@'localhost';
FLUSH PRIVILEGES;
