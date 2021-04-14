<?php

try {
    require_once "./config.php";

    $sql = "SELECT * FROM posts p LEFT JOIN categories c ON (p.cat_id = c.cat_id) ORDER BY p.post_id";
    $statement = $pdo->query($sql);
    $statement->execute();
    $result = $statement->fetchAll(PDO::FETCH_ASSOC);
    $posts = array();

    if (count($result)) {
        // $items = array(
        //     'items' => $result,
        // );
        echo json_encode($result);
    } else {

    }
} catch (PDOException $e) {
    echo "ERROR LINE: " . $e->getLine() . "<br>";
    echo "ERROR MESSAGE: " . $e->getMessage() . "<br>";
    die();
}