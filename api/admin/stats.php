<?php
// GET /api/admin/stats.php
// Returns real counts for the admin dashboard
require_once __DIR__ . '/../config.php';

requireAdmin();

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    respond(['error' => 'Method not allowed'], 405);
}

$db = getDB();

$totalPolicies = $db->query("SELECT COUNT(*) FROM policies")->fetchColumn();
$totalAdmins   = $db->query("SELECT COUNT(*) FROM admins")->fetchColumn();

// Active policies: insurance_end > NOW()
$activePolicies = $db->query(
    "SELECT COUNT(*) FROM policies WHERE insurance_end > NOW()"
)->fetchColumn();

// Recent policies (last 5)
$recentPolicies = $db->query("
    SELECT policy_number, first_name, last_name, vehicle_make, vehicle_model, created_at
    FROM policies
    ORDER BY created_at DESC
    LIMIT 5
")->fetchAll();

respond([
    'total_policies'  => (int) $totalPolicies,
    'active_policies' => (int) $activePolicies,
    'total_admins'    => (int) $totalAdmins,
    'recent_policies' => $recentPolicies,
]);
