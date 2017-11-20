<?php
date_default_timezone_set('UTC');

const MESSAGE_SEPARATOR = '<br>-----------------------------------<br><br>';
const DATA_FILE = 'data.txt';

if (!($val = $_POST['value'])) {
    return;
}

$content = substr(file_get_contents('data.txt'), 0, 10000);

$date = date('H:i:s');


file_put_contents('data.txt', MESSAGE_SEPARATOR . $date . ": " . $val . $content);

echo "OK";