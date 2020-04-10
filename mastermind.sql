-- MySQL Script generated by MySQL Workbench
-- Wed Apr  8 11:34:02 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema soycreac_mind
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema soycreac_mind
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `soycreac_mastermind` DEFAULT CHARACTER SET utf8 ;
USE `soycreac_mind` ;

-- -----------------------------------------------------
-- Table `soycreac_mind`.`Formulario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soycreac_mastermind`.`Formulario` (
  `ID` INT NOT NULL,
  `Nombre` VARCHAR(60) NOT NULL,
  `Email` VARCHAR(50) NOT NULL,
  `Telefono` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
