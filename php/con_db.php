<?php
$host = 'localhost'; // адрес сервера
$database = 'man_db'; // имя базы данных
$user = 'vlad'; // имя пользователя
$password = '1'; // пароль

$link = mysqli_connect($host, $user, $password, $database)
or die("Ошибка " . mysqli_error($link));


$total_rq = 'SELECT * FROM `man_db`.`total_table` ';

$result = mysqli_query($link, $total_rq) or die("Ошибка " . mysqli_error($link));

$encode = json_encode($result);

$man_rq = 'SELECT * FROM `man_db`.`man_data`';

$result2 = mysqli_query($link, $man_rq) or die("Ошибка " . mysqli_error($link));