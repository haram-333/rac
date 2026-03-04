<?php
// POST /api/retrieve/index.php
// Lookup a policy by last_name + dob + postcode
require_once __DIR__ . '/../config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(['error' => 'Method not allowed'], 405);
}

$body = getBody();

$surname  = trim($body['surname'] ?? '');
$dob      = trim($body['dob'] ?? '');     // Expected: YYYY-MM-DD
$postcode = strtoupper(trim(preg_replace('/\s+/', '', $body['postcode'] ?? '')));

if (!$surname || !$dob || !$postcode) {
    respond(['error' => 'Surname, date of birth, and postcode are required.'], 400);
}

$db = getDB();

// Normalise postcode for comparison (strip spaces)
$stmt = $db->prepare("
    SELECT
        policy_number, first_name, last_name, dob,
        vehicle_reg, vehicle_make, vehicle_model, vehicle_year,
        amount, insurance_start, insurance_end, city, postcode,
        address1, address2, mobile, email, license_number, occupation,
        created_at
    FROM policies
    WHERE LOWER(last_name) = LOWER(:surname)
      AND dob = :dob
      AND UPPER(REPLACE(postcode, ' ', '')) = :postcode
    LIMIT 1
");

$stmt->execute([
    ':surname'  => $surname,
    ':dob'      => $dob,
    ':postcode' => $postcode,
]);

$policy = $stmt->fetch();

if (!$policy) {
    respond(['error' => 'No policy found matching the details provided.'], 404);
}

// Calculate duration
$start = new DateTime($policy['insurance_start']);
$end   = new DateTime($policy['insurance_end']);
$diff  = $start->diff($end);
$duration = $diff->days . ' day' . ($diff->days !== 1 ? 's' : '') . ' ' . $diff->h . ' hour' . ($diff->h !== 1 ? 's' : '');

$policy['duration'] = $duration;
$policy['amount_display'] = '£' . number_format((float)$policy['amount'], 2);
$policy['start_display'] = $start->format('d M Y, H:i');
$policy['end_display']   = $end->format('d M Y, H:i');
$policy['vehicle'] = trim("{$policy['vehicle_make']} {$policy['vehicle_model']}") . ' (' . $policy['vehicle_reg'] . ')';

respond(['success' => true, 'policy' => $policy]);
