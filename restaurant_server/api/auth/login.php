<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');
header('Content-Type: application/json');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

require_once("../../config/Database.php");

// DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));


// Now we check if the data from the login form was submitted, isset() will check if the data exists.
if ( !isset($data->email, $data->password) ) {
	// Could not get the data that should have been sent.
    http_response_code(201);
	exit('Please fill both the email and password fields!');
}

$email = trim($data->email);
$password = trim($data->password);

// Prepare our SQL, preparing the SQL statement will prevent SQL injection.
if ($stmt = $con->prepare('SELECT user_id, password, fullname, phone FROM user WHERE email = ?')) {
	// Bind parameters (s = string, i = int, b = blob, etc), in our case the username is a string so we use "s"
	$stmt->bind_param('s', $email);
	$stmt->execute();
	// Store the result so we can check if the account exists in the database.
	$stmt->store_result();


    if ($stmt->num_rows > 0) {
        $stmt->bind_result($user_id, $password, $fullname, $phone);
        $stmt->fetch();
        // Account exists, now we verify the password.
        // Note: remember to use password_hash in your registration file to store the hashed passwords.
        if (password_verify($data->password, $password)) {
            // Verification success! User has logged-in!
            $userInfo = array("user_id" => $user_id, "email" => $email, "fullname" => $fullname, "phone" => $phone);
            
            http_response_code(200);
            echo json_encode($userInfo);
        } else {
            // Incorrect password
            http_response_code(201);
            echo 'Incorrect email or password!';
        }

    } else {
        // Incorrect username
        http_response_code(201);
        echo 'Incorrect email or password!';
    }


	$stmt->close();
}
?>
