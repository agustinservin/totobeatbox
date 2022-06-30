<?php
$destino = "agustinmuller86@gmail.com";
$nombre = $_POST['nombre'];
$correo = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];
$contenido = "Nombre: ".$nombre."\nCorreo: ".$correo."\nTeléfono: ".$telefono."\nMensaje: ".$mensaje;
mail($destino,"Contacto",$contenido);
header("location:index.html");
?>