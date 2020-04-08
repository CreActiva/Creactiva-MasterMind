<?php
define('db_host', 'localhost');
define('db_name', 'soycreac_mastermind');
define('db_user', 'soycreac_mind');
define('db_pass', 'nDzoAVR=urN$');
define('db_table', 'Formulario');
$nombre = 'Miguel Ángel Peña Sánchez';
$telefono = '04242343960';
$email = 'miguelangel1074.gc@gmail.com';

$insert = 'INSERT INTO '.db_table.' (Nombre, Email, Telefono) ';
$insert .= `VALUES (?, ?, ?)`;

try {
  $con = new PDO('mysqlhost:'.db_host.';dbname='.db_name.';charset=utf8',db_user,db_pass);
} catch (PDOException $error){
  die($error->getMessage());
}
$query = $con->prepare($insert);

$result = $query->execute([$nombre, $telefono, $email]);

if($result){ 
  echo "Agregado Correctamente a la base de datos"; 
} else{
  echo "Ha ocurrido un error.";
}
?>  