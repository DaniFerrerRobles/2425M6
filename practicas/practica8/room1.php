<?php

session_start();

if () {
    $_SESSION['username'] = $_POST['username'];

    $_SESSION['dificultat'] = $_POST['dificultat'];

}

include 'arrayDificultad.php'

if ($_SESSION['dificultat' ]== 'facil'){
   $pregunta = $preguntas['facil']['pregunta']
   $respuesta = $preguntas['facil']['resposta']
}
else{
    if ($_SESSION['dificultat']== 'mig'){
        $pregunta = $preguntas['mig']['pregunta']
        $respuesta = $preguntas['mig']['resposta']
     }
     else{
        if ($_SESSION['dificultat' ]== 'dificil'){
            $pregunta = $preguntas['dificil']['pregunta']
            $respuesta = $preguntas['dificil']['resposta']
         }
     }

     if ($_POST['answer']==$respuesta){
        echo '
        <h1>BIEN</h1
        '
        header(Location: room2.php)
     }
     else {
        echo '
        <h1>BIEN</h1
        '
        header(Location: room1.php)
     }
     }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Habitación</title>
</head>
<body class="d-flex justify-content-center align-items-center vh-100">
    <header>
        <h3>Bienvenido <?php $_SESSION['username']?> </h3>
    </header>
    <div class="card p-4" style="width: 22rem;">
        <h2 class="card-title text-center">Habitación</h2>
        <p class="card-text"><?php $_SESSION['username']?><</p>
        <form method="POST">
            <div class="mb-3">
                <input type="text" name="answer" class="form-control" required placeholder="Respuesta">
            </div>
            <button type="submit" class="btn btn-success w-100">Enviar</button>
        </form>
        <?= $message; ?> <!-- Muestra el mensaje de éxito o error -->
    </div>
</body>
</html>




