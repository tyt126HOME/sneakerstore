<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "sneakerstore";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (
    isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['address']) &&
    isset($_POST['card_number']) && isset($_POST['expiry_month']) &&
    isset($_POST['expiry_year']) && isset($_POST['cvv'])
) {

    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $address = htmlspecialchars($_POST['address']);
    $card_number = htmlspecialchars($_POST['card_number']);
    $expiry_month = htmlspecialchars($_POST['expiry_month']);
    $expiry_year = htmlspecialchars($_POST['expiry_year']);
    $cvv = htmlspecialchars($_POST['cvv']);

    $stmt = $conn->prepare("INSERT INTO payments (name, phone, address, card_number, expiry_month, expiry_year, cvv) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $name, $phone, $address, $card_number, $expiry_month, $expiry_year, $cvv);

    if ($stmt->execute()) {
        echo "<script>alert('Checkout complete');</script>";
        echo "<script>window.setTimeout(function(){ window.location.href = 'index.html'; }, 1000);</script>";
    } else {
        echo "<script>alert('Something went wrong: " . $stmt->error . "');</script>";
    }

    $stmt->close();
} else {
    echo "<script>alert('Please fill in all fields');</script>";
}

$conn->close();
?>

