<?php
require_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->email) && !empty($data->senha)) {
    $query = "SELECT id, nome, email FROM usuarios WHERE email = :email AND senha = :senha LIMIT 1";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":email", $data->email);
    $stmt->bindParam(":senha", $data->senha);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode(["status" => "sucesso", "usuario" => $user]);
    } else {
        echo json_encode(["status" => "erro", "message" => "E-mail ou senha incorretos."]);
    }
} else {
    echo json_encode(["status" => "erro", "message" => "Preencha todos os campos."]);
}
?>