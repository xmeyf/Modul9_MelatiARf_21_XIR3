<?php
    include 'conn.php';
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

    $_POST = json_decode(file_get_contents("php://input"), true);

    $id = $_POST['id'];
    $nama = $_POST['nama'];
    $harga = $_POST['harga'];

    $sql = $conn->query("UPDATE product SET id='$id', nama='$nama', harga='$harga' WHERE id=$id");

    if($sql == TRUE){
        $result = "berhasil";
    }
    else{
        $result="Eror:" . $sql . "<br/>" . $conn->error;
    }

    echo json_encode($result);

    mysqli_close($conn);
?>
