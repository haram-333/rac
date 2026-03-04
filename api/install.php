<?php
// ============================================================
// ONE-TIME INSTALL SCRIPT
// Run this once at: https://yourdomain.com/api/install.php
// DELETE THIS FILE after running it!
// ============================================================

require_once __DIR__ . '/config.php';

$db = getDB();

// Create admins table
$db->exec("
    CREATE TABLE IF NOT EXISTS admins (
        id           INT AUTO_INCREMENT PRIMARY KEY,
        username     VARCHAR(100) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        full_name    VARCHAR(200) NOT NULL,
        created_at   DATETIME DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
");

// Create policies table
$db->exec("
    CREATE TABLE IF NOT EXISTS policies (
        id               INT AUTO_INCREMENT PRIMARY KEY,
        policy_number    VARCHAR(20) NOT NULL UNIQUE,
        first_name       VARCHAR(100) NOT NULL,
        last_name        VARCHAR(100) NOT NULL,
        dob              DATE NOT NULL,
        license_number   VARCHAR(50),
        occupation       VARCHAR(100),
        address1         VARCHAR(255),
        address2         VARCHAR(255),
        city             VARCHAR(100),
        postcode         VARCHAR(20) NOT NULL,
        mobile           VARCHAR(30),
        email            VARCHAR(255) NOT NULL,
        vehicle_reg      VARCHAR(20),
        vehicle_make     VARCHAR(100),
        vehicle_model    VARCHAR(100),
        vehicle_year     INT,
        amount           DECIMAL(10,2),
        insurance_start  DATETIME NOT NULL,
        insurance_end    DATETIME NOT NULL,
        admin_id         INT,
        use_alt_email    TINYINT(1) DEFAULT 0,
        created_at       DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (admin_id) REFERENCES admins(id) ON DELETE SET NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
");

// Seed default admin account
// Username: rac_admin | Password: RacPolicy@873!
$existing = $db->query("SELECT id FROM admins WHERE username = 'rac_admin'")->fetch();
if (!$existing) {
    $hash = password_hash('RacPolicy@873!', PASSWORD_BCRYPT);
    $stmt = $db->prepare("
        INSERT INTO admins (username, password_hash, full_name)
        VALUES (:username, :hash, :full_name)
    ");
    $stmt->execute([
        ':username'  => 'rac_admin',
        ':hash'      => $hash,
        ':full_name' => 'RAC Insurance Services',
    ]);
    echo "<p>✅ Default admin created.</p>";
    echo "<p><strong>Username:</strong> rac_admin</p>";
    echo "<p><strong>Password:</strong> RacPolicy@873!</p>";
} else {
    echo "<p>ℹ️ Admin already exists.</p>";
}

echo "<p>✅ Tables created successfully.</p>";
echo "<p style='color:red;font-weight:bold;'>⚠️ IMPORTANT: Delete this file (install.php) now!</p>";
