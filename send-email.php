<?php
$data = json_decode(file_get_contents("php://input"), true);

$name = $data["name"];
$email = $data["email"];
$subject = $data["subject"];
$message = $data["message"];

$to = "alpha_kamara@hotmail.de";  // Admin email

$fullSubject = "New Contact Message: " . $subject;

$body = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";

$headers = "From: KLCRS Website <no-reply@klcrs.com>\r\n" .
           "Reply-To: $email\r\n";

if (mail($to, $fullSubject, $body, $headers)) {
    echo "OK";
} else {
    echo "ERROR";
}
?>
