<?php
    
    require_once 'phpmailer/class.phpmailer.php';

    if (empty($_POST['email'])) $email = '';
    else $email = 'и данному емайлу: '. $_POST['email'];
    if (empty($_POST['phone'])) $phone = '';
    else $phone = $_POST['phone'];
   

    $mail = new PHPMailer(true);
    if (!empty($_POST['email'])){
        $mail->setFrom($email, 'Клиент');   // От кого письмо 
    }
    else $mail->setFrom('', 'Клиент');
    $mail->addAddress('ramis.vakilov@gmail.com'); //кому это письмо
    $mail->CharSet = 'UTF-8';//кодировка
    $mail->isHTML(true);//Письмо и в html формате отправляется 
    $mail->Subject = 'Консультация';
    $mail->Body = 'Был выполнен запрос на получение консультации<br>
                          по данному номеру: <b>'.$phone.'</b><br>'.$email;
    $mail->AltBody = 'Был выполнен запрос на получение консультации
                      по данному номеру: '.$phone;

    if(!$mail->send()) {
        return false;
    } else {
        return true;
    }
?>