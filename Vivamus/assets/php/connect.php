<?php
	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];
	$email = $_POST['email'];
	$number = $_POST['number'];
	$donated = $_POST['donated'];
	$cardHolder = $_POST['cardHolder'];
	$cardNumber = $_POST['cardNumber'];
	$code = $_POST['code'];
	$date = $_POST['date'];
	$message = $_POST['message'];

	// Database connection
	$conn = new mysqli('localhost','root','','vivamus');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into donation(firstName, lastName, email, number, donated, cardHolder, cardNumber, code, date, message ) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("sssiisiiis", $firstName, $lastName, $email, $number, $donated, $cardHolder, $cardNumber, $code, $date, $message);
		$execval = $stmt->execute();
		echo $execval;
		echo $_POST['firstName']."<br>".$_POST['lastName']."<br>".$_POST['email']."<br>".$_POST['number']."<br>".$_POST['donated']."<br>".$_POST['cardHolder']."<br>".$_POST['cardNumber']."<br>".$_POST['code']."<br>".$_POST['date']."<br>".$_POST['message'];
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>