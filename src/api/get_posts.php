<?php
header('Content-Type: application/json; charset=utf-8');
try {
    require_once "./config.php";

    $sql = "SELECT * FROM posts";
    $statement = $pdo->query($sql);
    $statement->execute();
    $result = $statement->fetchAll(PDO::FETCH_ASSOC);

    if (count($result)) {
        // $response = array(
        //     'status' => true,
        //     'response' => $result,
        // );
        echo json_encode($result);
    } else {

    }
} catch (PDOException $e) {
    echo "ERROR LINE: " . $e->getLine() . "<br>";
    echo "ERROR MESSAGE: " . $e->getMessage() . "<br>";
    die();
}