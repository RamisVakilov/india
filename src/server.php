<?php
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require_once 'PHPMailer.php';
    require_once 'Exception.php';
    require_once 'SMTP.php';

    if (empty($_POST['email'])) $email = '';
    else $email = 'c данным емайлом: '. $_POST['email'];
    if (empty($_POST['phone'])) $phone = '';
    else $phone = $_POST['phone'];
   
    $mail = new PHPMailer(true);
        $mail->CharSet = "UTF-8";
        $mail->isHTML(true);   
    
    
        //Получатели
        $mail->setFrom('info@massage.com', 'Отдых в Индии');//от кого письмо
        $mail->addAddress('ramis.vakilov@gmail.com');     //Add a recipient
        //
        //$mail->addAddress('ramisvakilov18@gmail.com');               //Name is optional
      
            
    
        //Content
                                       
        $mail->Subject = 'Заявка';
        $mail->Body    = '<h2>Пришла заявка на отдых в Индию</h2>'.
                            'от клиента '.$email.' и <br>'.
                             'телефоном: '.$phone.'.';
        $mail->AltBody = 'Пришла заявка на отдых в Индию';
    
        $mail->send();
        echo 'Message has been sent';
    
?>