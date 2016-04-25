
<?php
require '../phpmailer/class.phpmailer.php';

$mail = new PHPMailer;

//$message=
//'Full Name:	'.$_POST['fullname'].'<br />Email:	'.$_POST['email'].'<br />Comments:	'.$_POST['comments'].'';

$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  					  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'emilyelainecarey@gmail.com';       // SMTP username
$mail->Password = 'uhbrfxtzcebcwkfe';                 // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('emilyelainecarey@gmail.com', 'Emily');
$mail->addAddress('emilyelaine.62@gmail.com');     // Add a recipient

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Here is the subject';
$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}

?>

