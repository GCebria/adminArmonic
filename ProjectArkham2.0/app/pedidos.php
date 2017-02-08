<?php

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "armonic";

$listaProductos = json_decode($_GET['listaCarrito']);
$usuario = json_decode($_GET['usuario']);
$idPedido = json_decode($_GET['idPedido']);
$fecha = json_decode($_GET['fecha']);

// Create connection
//$conn = new mysqli_connect($servername, $username, $password, $dbname);
$conn = new mysqli("localhost","root","root","armonic");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO pedidos (idCliente, fecha) VALUES ($usuario,$fecha);";

//$sql .= "INSERT INTO detallePedidos (firstname, lastname, email)
//VALUES ('Mary', 'Moe', 'mary@example.com');";
//$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
//VALUES ('Julie', 'Dooley', 'julie@example.com')";

if (mysqli_multi_query($conn, $sql)) {
    echo "New records created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>