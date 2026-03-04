<?php
// POST /api/admin/logout.php
require_once __DIR__ . '/../config.php';

session_start();
session_unset();
session_destroy();

respond(['success' => true, 'message' => 'Logged out successfully.']);
