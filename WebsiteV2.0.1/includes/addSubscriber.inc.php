<?php
	session_start();

include '../dbh.php';
date_default_timezone_set("America/New_York");

$userEmail = $_POST["subEmail"];

$sql = "INSERT INTO subscribers (subEmail) VALUES ('$userEmail')";
$result = mysqli_query($conn, $sql);

header("Location: ../index.php");
//echo $userEmail;

?>