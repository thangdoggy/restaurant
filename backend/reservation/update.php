<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] !== 'PUT') :
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Invalid Request Method. HTTP method should be PUT',
    ]);
    exit;
endif;

require 'database.php';
$database = new Database();
$conn = $database->dbConnection();

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->post_id)) {
    echo json_encode([
        'success' => 0, 
        'message' => 'Please provide the post ID.'
    ]);
    exit;
}

try {

    $fetch_post = "SELECT * FROM `user` WHERE user_id=:post_id";
    $fetch_stmt = $conn->prepare($fetch_post);
    $fetch_stmt->bindValue(':post_id', $data->post_id, PDO::PARAM_INT);
    $fetch_stmt->execute();

    if ($fetch_stmt->rowCount() > 0) :

        $row = $fetch_stmt->fetch(PDO::FETCH_ASSOC);
        $post_email = isset($data->email) ? $data->email : $row['email'];
        $post_password = isset($data->password) ? $data->password : $row['password'];
        $post_fullname = isset($data->fullname) ? $data->fullname : $row['fullname'];
        $post_phone = isset($data->phone) ? $data->phone : $row['phone'];

        $update_query = "UPDATE `user` SET email = :email, password = :password, fullname = :fullname, phone = :phone 
        WHERE user_id = :id";

        $update_stmt = $conn->prepare($update_query);

        $update_stmt->bindValue(':email', htmlspecialchars(strip_tags($post_email)), PDO::PARAM_STR);
        $update_stmt->bindValue(':password', htmlspecialchars(strip_tags($post_password)), PDO::PARAM_STR);
        $update_stmt->bindValue(':fullname', htmlspecialchars(strip_tags($post_fullname)), PDO::PARAM_STR);
        $update_stmt->bindValue(':phone', htmlspecialchars(strip_tags($post_phone)), PDO::PARAM_STR);
        $update_stmt->bindValue(':id', $data->post_id, PDO::PARAM_INT);


        if ($update_stmt->execute()) {

            echo json_encode([
                'success' => 1,
                'message' => 'Post updated successfully'
            ]);
            exit;
        }

        echo json_encode([
            'success' => 0,
            'message' => 'Post Not updated. Something is going wrong.'
        ]);
        exit;

    else :
        echo json_encode(['success' => 0, 'message' => 'Invalid ID. No posts found by the ID.']);
        exit;
    endif;
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage()
    ]);
    exit;
}