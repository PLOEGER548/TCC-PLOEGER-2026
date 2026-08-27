<?php
require_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

$query = "SELECT * FROM servicos";
$stmt = $db->prepare($query);
$stmt->execute();

$servicos = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($servicos);
?>