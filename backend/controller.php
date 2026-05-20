<?php
require_once "../models/User.php";

class AuthController {

    public static function login($db) {
        $data = json_decode(file_get_contents("php://input"));

        $user = new User($db);
        $result = $user->login($data->email, $data->password);

        if ($result) {
            echo json_encode(["success" => true, "user" => $result]);
        } else {
            echo json_encode(["success" => false, "message" => "Login inválido"]);
        }
    }

    public static function register($db) {
        $data = json_decode(file_get_contents("php://input"));

        $user = new User($db);
        $user->create($data->name, $data->email, $data->password);

        echo json_encode(["success" => true]);
    }
}