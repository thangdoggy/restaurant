<?php
class Database
{

    private $db_host = 'localhost';
    private $db_username = 'root';
    private $db_password = '';
    // db
    private $db_name = 'restaurant2';

    public function dbConnection()
    {

        try {
            $conn = new PDO('mysql:host=' . $this->db_host . ';dbname=' . $this->db_name, $this->db_username, $this->db_password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (PDOException $e) {
            // for debug
            echo "Connection error " . $e->getMessage();
            exit;
        }
    }
}