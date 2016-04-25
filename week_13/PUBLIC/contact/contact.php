
<?php
require '../phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$contactName = $_REQUEST['name'];
$email = $_REQUEST['email'] ;
$message = $_REQUEST['message'] ;

$mail->SMTPDebug = 1;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com:';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'emilyelainecarey@gmail.com';                 // SMTP username
$mail->Password = 'uhbrfxtzcebcwkfe';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('emilyelainecarey@gmail.com', 'Contact Mailer');
$mail->addAddress('emilyelainecarey@gmail.com'); 

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Contact Inquiry';
$mail->Body    = $message;
$mail->AltBody = $message;

if(!$mail->Send())
{
   echo "Message could not be sent. <p>";
   echo "Mailer Error: " . $mail->ErrorInfo;
   exit;
}

echo "Message has been sent";
header("Location: index.html"); 

?>

