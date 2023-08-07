<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $service = $_POST['service'];
    $date = $_POST['date'];
    $comments = $_POST['comments'];

    // Настройте параметры для отправки письма
    $to = "www.gatg9211@gmail.com"; // Замените на свой адрес электронной почты
    $subject = "Новая заявка с формы";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8" . "\r\n";

    // Составьте текст письма
    $message = "Имя: $name\n";
    $message .= "Email: $email\n";
    $message .= "Услуга: $service\n";
    $message .= "Дата: $date\n";
    $message .= "Комментарии: $comments\n";

    // Отправка письма
    $success = mail($to, $subject, $message, $headers);

    // Проверка успешности отправки письма
    if ($success) {
        echo "Спасибо за ваш запрос!";
    } else {
        echo "Произошла ошибка. Пожалуйста, попробуйте позже.";
    }
}
?>
