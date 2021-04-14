<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Expose-Headers: Content-Length, X-JSON");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: *");

$db_name = 'codecaine';
$db_user = "root";
$db_password = "1234";
$dsn = "mysql:host=localhost;port=3306;dbname=$db_name;charset=utf8";
$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);

try {
    $pdo = new PDO($dsn, $db_user, $db_password, $options);
    // echo "Connection Successed!";
} catch (PDOException $e) {
    echo "Connection Failed: " . $e->getMessage();
    die();
}