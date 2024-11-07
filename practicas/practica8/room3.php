<?php

session_start();

include 'arrayDificultad.php';

if ($_SESSION['dificultat'] == 'facil') {
    $pregunta = $preguntas['facil'][2]['pregunta'];
    $respuesta = $preguntas['facil'][2]['resposta'];

} elseif ($_SESSION['dificultat'] == 'mig') {
    $pregunta = $preguntas['mig'][2]['pregunta'];
    $respuesta = $preguntas['mig'][2]['resposta'];

} elseif ($_SESSION['dificultat'] == 'dificil') {
    $pregunta = $preguntas['dificil'][2]['pregunta'];
    $respuesta = $preguntas['dificil'][2]['resposta'][2];
}


if(isset($_POST['answer'])) {
    if($_POST['answer'] == $respuesta){
        $message = "BIEN, HAS COMPLETADO EL JUEFO, FELICIDADES!!!";

    }else{
        $message = "MAL";

        echo '<a href="room3.php" class="btn btn-danger w-100">PRUEBA DE NUEVO</a>';

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
        <h3>Bienvenido <?php echo $_SESSION['username']; ?></h3>
        <img src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-
wearing-suit-with-red-tie-png-image_5809521.png" alt="img">
    </header>
    <div class="card p-4" style="width: 22rem;">
        <h2 class="card-title text-center">Habitación 3</h2>

        <form method="POST">
            <div class="mb-3">
                <label for="question"><?php echo $pregunta; ?></label>
                <input type="text" name="answer" class="form-control" required placeholder="Respuesta">
            </div>
            <button type="submit" class="btn btn-success w-100">Enviar</button>
        </form>

        <div class="mt-3 text-center">
            <h4><?php echo $message; ?></h4>
        </div>
    </div>
</body>
</html>