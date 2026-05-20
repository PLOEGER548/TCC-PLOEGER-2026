<?php
class User {
    private $conn;
    private $table = "users";

    public function __construct($db) {
        $this->conn = $db;
    }

    public function create($name, $email, $password) {
        $query = "INSERT INTO {$this->table} (name, email, password)
                  VALUES (:name, :email, :password)";

        $stmt = $this->conn->prepare($query);

        $password = password_hash($password, PASSWORD_DEFAULT);

        return $stmt->execute([
            ":name" => $name,
            ":email" => $email,
            ":password" => $password
        ]);
    }

    public function login($email, $password) {
        $query = "SELECT * FROM {$this->table} WHERE email = :email";
        $stmt = $this->conn->prepare($query);
        $stmt->execute([":email" => $email]);

        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password'])) {
            return $user;
        }

        return false;
    }
}