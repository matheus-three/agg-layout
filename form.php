<?php 

$name = $_POST['nome'];
$email = $_POST['email'];
$texto = $_POST['texto'];
$assunto = $_POST['assunto'];

$para = "matheusraj5@gmail.com";

$mensagem = "<strong> Nome: ".$name;
$mensagem .="<br/>E-mail: ".$email;
$mensagem .="<br/>Mensagem: ".$texto;

$headers = "Content-Type: text/html charset=UTF-8";
$headers .= "From: file:///home/user/lab/projects/freelances/agg-layout/index.html";
$headers .= "X-sender: <localhost>";
$headers .= "MIME-Version: 1.0";

mail($para,$assunto,$mensagem,$headers);

?>