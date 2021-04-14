<?php

try {
    require_once "./config.php";

    $sql = "SELECT * FROM categories";
    $statement = $pdo->query($sql);
    $statement->execute();
    $result = $statement->fetchAll(PDO::FETCH_ASSOC);
    $posts = array();

    if (count($result)) {
        echo json_encode($result);
    } else {

    }
} catch (PDOException $e) {
    echo "ERROR LINE: " . $e->getLine() . "<br>";
    echo "ERROR MESSAGE: " . $e->getMessage() . "<br>";
    die();
}