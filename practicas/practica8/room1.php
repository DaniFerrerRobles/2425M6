<?php

session_start();

if (isset($_POST['username']) && isset($_POST['dificultat'])) {
    $_SESSION['username'] = $_POST['username'];
    $_SESSION['dificultat'] = $_POST['dificultat'];

}

include 'arrayDificultad.php';

if ($_SESSION['dificultat'] == 'facil') {
    $pregunta = $preguntas['facil'][0]['pregunta'];
    $respuesta = $preguntas['facil'][0]['resposta'];

} elseif ($_SESSION['dificultat'] == 'mig') {
    $pregunta = $preguntas['mig'][0]['pregunta'];
    $respuesta = $preguntas['mig'][0]['resposta'];

} elseif ($_SESSION['dificultat'] == 'dificil') {
    $pregunta = $preguntas['dificil'][0]['pregunta'];
    $respuesta = $preguntas['dificil'][0]['resposta'];
}

if(isset($_POST['answer'])) {
    if($_POST['answer'] == $respuesta){
        $message = "BIEN";
        header("Location: room2.php");

    }else{
        $message = "MAL";
        echo '<a href="room1.php" class="btn btn-danger w-10">PRUEBA DE NUEVO</a>';
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
        <h2 class="card-title text-center">Habitación 1</h2>

        <form  method="POST">
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