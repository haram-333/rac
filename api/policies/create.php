<?php
// POST /api/policies/create.php
// Creates a new policy, generates a policy number, and sends confirmation email
require_once __DIR__ . '/../config.php';
require_once __DIR__ . '/../vendor/autoload.php'; // PHPMailer via Composer

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$admin = requireAdmin();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(['error' => 'Method not allowed'], 405);
}

$body = getBody();

// ── Validate required fields ───────────────────────────────
$required = ['firstName','lastName','dob','email','postcode','insuranceStart','insuranceEnd'];
foreach ($required as $field) {
    if (empty($body[$field])) {
        respond(['error' => "Missing required field: $field"], 400);
    }
}

// ── Calculate policy number ────────────────────────────────
$db = getDB();
$maxId = (int) $db->query("SELECT COALESCE(MAX(id), 0) FROM policies")->fetchColumn();
$nextId = $maxId + 1;
$policyNumber = 'RAC-' . str_pad($nextId, 6, '0', STR_PAD_LEFT);

// ── Calculate duration ────────────────────────────────────
$start = new DateTime($body['insuranceStart']);
$end   = new DateTime($body['insuranceEnd']);
$diff  = $start->diff($end);
$duration = $diff->days . ' day' . ($diff->days !== 1 ? 's' : '') . ' ' . $diff->h . ' hour' . ($diff->h !== 1 ? 's' : '');

// ── Format display dates ──────────────────────────────────
$startDisplay = $start->format('d M Y, H:i');
$endDisplay   = $end->format('d M Y, H:i');
$fullName     = trim($body['firstName'] . ' ' . $body['lastName']);
$vehicle      = trim(($body['vehicleMake'] ?? '') . ' ' . ($body['vehicleModel'] ?? '')) . ' (' . strtoupper($body['vehicleReg'] ?? 'N/A') . ')';

// ── Insert policy into DB ─────────────────────────────────
$stmt = $db->prepare("
    INSERT INTO policies (
        policy_number, first_name, last_name, dob, license_number, occupation,
        address1, address2, city, postcode, mobile, email,
        vehicle_reg, vehicle_make, vehicle_model, vehicle_year,
        amount, insurance_start, insurance_end, admin_id, use_alt_email
    ) VALUES (
        :policy_number, :first_name, :last_name, :dob, :license_number, :occupation,
        :address1, :address2, :city, :postcode, :mobile, :email,
        :vehicle_reg, :vehicle_make, :vehicle_model, :vehicle_year,
        :amount, :insurance_start, :insurance_end, :admin_id, :use_alt_email
    )
");

$stmt->execute([
    ':policy_number'  => $policyNumber,
    ':first_name'     => $body['firstName'],
    ':last_name'      => $body['lastName'],
    ':dob'            => $body['dob'],
    ':license_number' => $body['licenseNumber'] ?? null,
    ':occupation'     => $body['occupation'] ?? null,
    ':address1'       => $body['address1'] ?? null,
    ':address2'       => $body['address2'] ?? null,
    ':city'           => $body['city'] ?? null,
    ':postcode'       => strtoupper(trim($body['postcode'])),
    ':mobile'         => $body['mobile'] ?? null,
    ':email'          => $body['email'],
    ':vehicle_reg'    => strtoupper(trim($body['vehicleReg'] ?? '')),
    ':vehicle_make'   => $body['vehicleMake'] ?? null,
    ':vehicle_model'  => $body['vehicleModel'] ?? null,
    ':vehicle_year'   => $body['vehicleYear'] ?? null,
    ':amount'         => $body['amount'] ?? null,
    ':insurance_start'=> $body['insuranceStart'],
    ':insurance_end'  => $body['insuranceEnd'],
    ':admin_id'       => $admin['id'],
    ':use_alt_email'  => !empty($body['useAlternativeEmail']) ? 1 : 0,
]);

// ── Build HTML email ──────────────────────────────────────
$useAlt = !empty($body['useAlternativeEmail']);
$amount = '£' . number_format((float)($body['amount'] ?? 0), 2);

if ($useAlt) {
    // Alternative template — plain details
    $emailSubject = "Your RAC Insurance Policy — $policyNumber";
    $emailBody = "
    <html><body style='font-family:Arial,sans-serif;color:#333;max-width:600px;margin:0 auto;'>
        <p>Hi $fullName,</p>
        <p>Your policy <strong>$policyNumber</strong> has been created.</p>
        <p>Start: $startDisplay | End: $endDisplay | Amount: $amount</p>
        <p>If you need assistance, call <strong>0330 159 1111</strong>.</p>
        <p>— RAC Insurance</p>
    </body></html>";
} else {
    // Default template — full branded email
    $emailSubject = "Your RAC Insurance Policy Confirmation — $policyNumber";
    $emailBody = "
    <html><body style='font-family:Arial,sans-serif;background:#f5f5f5;margin:0;padding:20px;'>
    <div style='max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);'>

        <!-- Header -->
        <div style='background:#f95108;padding:32px 40px;text-align:center;'>
            <h1 style='color:#ffffff;font-size:28px;font-weight:900;margin:0;letter-spacing:-1px;'>RAC</h1>
            <p style='color:rgba(255,255,255,0.9);margin:8px 0 0;font-size:14px;'>Short-Term Car Insurance</p>
        </div>

        <!-- Body -->
        <div style='padding:40px;'>
            <p style='font-size:18px;margin:0 0 8px;'>Hi, <strong>$fullName</strong></p>
            <p style='color:#666;margin:0 0 32px;'>Thank you for choosing RAC Short-Term Car Insurance. Your policy has been created successfully. Here are your details:</p>

            <!-- Policy details table -->
            <div style='background:#f9f9f9;border-radius:8px;border:1px solid #eee;overflow:hidden;margin-bottom:32px;'>
                <div style='background:#f95108;padding:14px 20px;'>
                    <p style='color:#fff;font-weight:900;font-size:13px;letter-spacing:1px;text-transform:uppercase;margin:0;'>Policy Details</p>
                </div>
                <table style='width:100%;border-collapse:collapse;'>
                    <tr style='border-bottom:1px solid #eee;'>
                        <td style='padding:14px 20px;font-size:13px;color:#888;font-weight:700;width:40%;'>Policy Number</td>
                        <td style='padding:14px 20px;font-size:14px;color:#111;font-weight:900;'>$policyNumber</td>
                    </tr>
                    <tr style='border-bottom:1px solid #eee;background:#fff;'>
                        <td style='padding:14px 20px;font-size:13px;color:#888;font-weight:700;'>Policy Start</td>
                        <td style='padding:14px 20px;font-size:14px;color:#111;'>$startDisplay</td>
                    </tr>
                    <tr style='border-bottom:1px solid #eee;'>
                        <td style='padding:14px 20px;font-size:13px;color:#888;font-weight:700;'>Policy End</td>
                        <td style='padding:14px 20px;font-size:14px;color:#111;'>$endDisplay</td>
                    </tr>
                    <tr style='border-bottom:1px solid #eee;background:#fff;'>
                        <td style='padding:14px 20px;font-size:13px;color:#888;font-weight:700;'>Insured by</td>
                        <td style='padding:14px 20px;font-size:14px;color:#111;'>{$admin['full_name']}</td>
                    </tr>
                    <tr style='border-bottom:1px solid #eee;'>
                        <td style='padding:14px 20px;font-size:13px;color:#888;font-weight:700;'>Duration</td>
                        <td style='padding:14px 20px;font-size:14px;color:#111;'>$duration</td>
                    </tr>
                    <tr style='border-bottom:1px solid #eee;background:#fff;'>
                        <td style='padding:14px 20px;font-size:13px;color:#888;font-weight:700;'>Vehicle</td>
                        <td style='padding:14px 20px;font-size:14px;color:#111;'>$vehicle</td>
                    </tr>
                    <tr>
                        <td style='padding:14px 20px;font-size:13px;color:#888;font-weight:700;'>Amount</td>
                        <td style='padding:14px 20px;font-size:16px;color:#f95108;font-weight:900;'>$amount</td>
                    </tr>
                </table>
            </div>

            <p style='color:#666;font-size:14px;margin:0 0 8px;'>Need to retrieve your policy information? Visit:</p>
            <a href='https://rac-dayinsuerepolicy.com/retrieve-info/' style='display:inline-block;background:#f95108;color:#fff;text-decoration:none;padding:12px 24px;border-radius:6px;font-weight:700;font-size:14px;margin-bottom:32px;'>Retrieve Policy Info</a>

            <p style='color:#999;font-size:13px;margin:0;'>For support, call <strong style='color:#333;'>0330 159 1111</strong></p>
        </div>

        <!-- Footer -->
        <div style='background:#222;padding:24px 40px;text-align:center;'>
            <p style='color:#888;font-size:12px;margin:0;'>© " . date('Y') . " RAC Motoring Services. All rights reserved.</p>
        </div>

    </div>
    </body></html>";
}

// ── Send email via PHPMailer ──────────────────────────────
$emailSent = false;
$emailError = '';

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = MAIL_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = MAIL_USER;
    $mail->Password   = MAIL_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = MAIL_PORT;

    $mail->setFrom(MAIL_FROM, MAIL_FROM_NAME);
    $mail->addReplyTo(MAIL_FROM, MAIL_FROM_NAME);
    $mail->addAddress($body['email'], $fullName);

    $mail->isHTML(true);
    $mail->Subject = $emailSubject;
    $mail->Body    = $emailBody;
    $mail->AltBody = strip_tags(str_replace(['<br>', '<br/>'], "\n", $emailBody));

    $mail->send();
    $emailSent = true;
} catch (Exception $e) {
    $emailError = $mail->ErrorInfo;
}

// ── Respond ───────────────────────────────────────────────
respond([
    'success'       => true,
    'policy_number' => $policyNumber,
    'email_sent'    => $emailSent,
    'email_error'   => $emailError ?: null,
    'message'       => $emailSent
        ? "Policy $policyNumber created and email sent to {$body['email']}."
        : "Policy $policyNumber created, but email failed: $emailError",
]);
