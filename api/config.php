<?php
// ============================================================
// RAC Backend — Database Configuration
// ============================================================
// IMPORTANT: Fill in your GoDaddy MySQL credentials below.
// You can find these in GoDaddy cPanel → MySQL Databases.
// ============================================================

define('DB_HOST', 'localhost');       // Usually 'localhost' on GoDaddy
define('DB_NAME', 'your_db_name');    // Your MySQL database name
define('DB_USER', 'your_db_user');    // Your MySQL username
define('DB_PASS', 'your_db_pass');    // Your MySQL password

// ============================================================
// Email Configuration (your custom domain email)
// ============================================================
define('MAIL_HOST',     'mail.rac-dayinsuerepolicy.com'); // Your SMTP host
define('MAIL_USER',     'noreply@rac-dayinsuerepolicy.com');
define('MAIL_PASS',     'YOUR_EMAIL_PASSWORD');            // Fill this in
define('MAIL_PORT',     587);                              // 587 for TLS, 465 for SSL
define('MAIL_FROM',     'noreply@rac-dayinsuerepolicy.com');
define('MAIL_FROM_NAME','RAC Insurance');

// ============================================================
// Session security key
// ============================================================
define('SESSION_KEY', 'rac_admin_session_v1');

// ============================================================
// CORS — allow requests from your domain
// ============================================================
$allowed_origins = [
    'https://rac-dayinsuerepolicy.com',
    'https://www.rac-dayinsuerepolicy.com',
    'http://localhost:3000',  // for local dev
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json; charset=utf-8');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ============================================================
// Database connection
// ============================================================
function getDB(): PDO {
    static $pdo = null;
    if ($pdo === null) {
        try {
            $pdo = new PDO(
                'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4',
                DB_USER,
                DB_PASS,
                [
                    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES   => false,
                ]
            );
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
            exit();
        }
    }
    return $pdo;
}

// ============================================================
// Helper: send JSON response
// ============================================================
function respond(array $data, int $code = 200): void {
    http_response_code($code);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit();
}

// ============================================================
// Helper: require admin session
// ============================================================
function requireAdmin(): array {
    session_start();
    if (empty($_SESSION[SESSION_KEY])) {
        respond(['error' => 'Unauthorized. Please log in.'], 401);
    }
    return $_SESSION[SESSION_KEY];
}

// ============================================================
// Helper: get JSON request body
// ============================================================
function getBody(): array {
    $raw = file_get_contents('php://input');
    return json_decode($raw, true) ?? [];
}
