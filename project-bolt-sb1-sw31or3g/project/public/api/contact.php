<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

ini_set('display_errors', '0');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
  exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
  $data = $_POST;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$subject = trim($data['subject'] ?? '');
$message = trim($data['message'] ?? '');

if ($name === '' || $email === '' || $subject === '' || $message === '') {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'All fields are required.']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Please enter a valid email address.']);
  exit;
}

$smtpUser = 'smathusan.info@gmail.com';
$smtpPass = 'gcwlzwibslupuqms';
$to = 'kayalinysmk@gmail.com';
$mailSubject = '[Portfolio] ' . $subject;
$bodyText = "New message from the portfolio contact form\n\n"
  . "Name: {$name}\n"
  . "Email: {$email}\n"
  . "Subject: {$subject}\n\n"
  . "Message:\n{$message}\n";

try {
  smtp_send_gmail($smtpUser, $smtpPass, $to, $email, $name, $mailSubject, $bodyText);
  echo json_encode(['ok' => true]);
} catch (Throwable $error) {
  http_response_code(500);
  echo json_encode([
    'ok' => false,
    'error' => 'Failed to send message. Please try again.',
  ]);
}

function smtp_send_gmail($smtpUser, $smtpPass, $to, $replyTo, $fromName, $subject, $body) {
  $socket = @stream_socket_client(
    'ssl://smtp.gmail.com:465',
    $errno,
    $errstr,
    30,
    STREAM_CLIENT_CONNECT
  );

  if (!$socket) {
    throw new Exception("SMTP connect failed: {$errstr}");
  }

  smtp_expect($socket, 220);
  smtp_command($socket, 'EHLO makesvarankayaliny.online', 250);
  smtp_command($socket, 'AUTH LOGIN', 334);
  smtp_command($socket, base64_encode($smtpUser), 334);
  smtp_command($socket, base64_encode($smtpPass), 235);
  smtp_command($socket, 'MAIL FROM:<' . $smtpUser . '>', 250);
  smtp_command($socket, 'RCPT TO:<' . $to . '>', 250);
  smtp_command($socket, 'DATA', 354);

  $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
  $payload = implode("\r\n", [
    'From: Portfolio Contact <' . $smtpUser . '>',
    'To: <' . $to . '>',
    'Reply-To: ' . $fromName . ' <' . $replyTo . '>',
    'Subject: ' . $encodedSubject,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    '',
    str_replace(["\r\n", "\n"], ["\n", "\r\n"], $body),
    '.',
  ]);

  fwrite($socket, $payload . "\r\n");
  smtp_expect($socket, 250);
  smtp_command($socket, 'QUIT', 221);
  fclose($socket);
}

function smtp_command($socket, $command, $expectedCode) {
  fwrite($socket, $command . "\r\n");
  smtp_expect($socket, $expectedCode);
}

function smtp_expect($socket, $expectedCode) {
  $response = '';
  while ($line = fgets($socket, 515)) {
    $response .= $line;
    if (isset($line[3]) && $line[3] === ' ') {
      break;
    }
  }

  $code = intval(substr($response, 0, 3));
  if ($code !== intval($expectedCode)) {
    throw new Exception('SMTP error: ' . trim($response));
  }
}
