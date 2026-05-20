<?php
class AppointmentController {

    public static function create($db) {
        $data = json_decode(file_get_contents("php://input"));

        $query = "INSERT INTO appointments 
        (user_id, service_id, barber_id, date, time, status)
        VALUES (:user_id, :service_id, :barber_id, :date, :time, 'scheduled')";

        $stmt = $db->prepare($query);

        $stmt->execute([
            ":user_id" => $data->user_id,
            ":service_id" => $data->service_id,
            ":barber_id" => $data->barber_id,
            ":date" => $data->date,
            ":time" => $data->time
        ]);

        echo json_encode(["success" => true]);
    }

    public static function list($db, $user_id) {
        $query = "SELECT * FROM appointments WHERE user_id = :user_id";
        $stmt = $db->prepare($query);
        $stmt->execute([":user_id" => $user_id]);

        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    }
}