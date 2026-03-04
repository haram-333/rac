<?php
// POST /api/admin/login.php
// Body: { "username": "...", "password": "..." }
require_once __DIR__ . '/../config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(['error' => 'Method not allowed'], 405);
}

$body = getBody();
$username = trim($body['username'] ?? '');
$password = trim($body['password'] ?? '');

if (!$username || !$password) {
    respond(['error' => 'Username and password are required.'], 400);
}

$db = getDB();
$stmt = $db->prepare("SELECT * FROM admins WHERE username = :username");
$stmt->execute([':username' => $username]);
$admin = $stmt->fetch();

if (!$admin || !password_verify($password, $admin['password_hash'])) {
    respond(['error' => 'Invalid username or password.'], 401);
}

session_start();
$_SESSION[SESSION_KEY] = [
    'id'        => $admin['id'],
    'username'  => $admin['username'],
    'full_name' => $admin['full_name'],
];

respond([
    'success'   => true,
    'message'   => 'Login successful.',
    'admin'     => [
        'id'        => $admin['id'],
        'username'  => $admin['username'],
        'full_name' => $admin['full_name'],
    ],
]);
