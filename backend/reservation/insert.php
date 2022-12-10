<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


if ($_SERVER['REQUEST_METHOD'] !== 'POST') :
    http_response_code(405); // method not allowed
    echo json_encode([
        'success' => 0,
        'message' => 'Invalid Request Method. HTTP method should be POST',
    ]); // change an array to json format
    exit;
endif;

require 'database.php';
$database = new Database();
$conn = $database->dbConnection();

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->email) || !isset($data->password) || !isset($data->fullname) || !isset($data->phone)) :

    echo json_encode([
        'success' => 0,
        'message' => 'Please fill all the fields | title, body, author.',
    ]);
    exit;

elseif (empty(trim($data->email)) || empty(trim($data->password)) || empty(trim($data->fullname)) || empty(trim($data->phone))) :

    echo json_encode([
        'success' => 0,
        'message' => 'Oops! empty field detected. Please fill all the fields.',
    ]);
    exit;

endif;

try {

    $email = htmlspecialchars(trim($data->email));
    $password = htmlspecialchars(trim($data->password));
    $fullname = htmlspecialchars(trim($data->fullname));
    $phone = htmlspecialchars(trim($data->phone));

    $query = "INSERT INTO `user`(email,password,fullname,phone) VALUES(:email,:password,:fullname,:phone)";

    $stmt = $conn->prepare($query);

    $stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $stmt->bindValue(':password', $password, PDO::PARAM_STR);
    $stmt->bindValue(':fullname', $fullname, PDO::PARAM_STR);
    $stmt->bindValue(':phone', $phone, PDO::PARAM_STR);

    if ($stmt->execute()) {

        http_response_code(201);
        echo json_encode([
            'success' => 1,
            'message' => 'Data Inserted Successfully.'
        ]);
        exit;
    }
    
    echo json_encode([
        'success' => 0,
        'message' => 'Data not Inserted.'
    ]);
    exit;

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage()
    ]);
    exit;
}