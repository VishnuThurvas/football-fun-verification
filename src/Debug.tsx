<?php
// admin_verify.php - INTERNAL USE ONLY
// TODO: Remove debug mode before production deployment
// Last modified: J. Thompson - Security Team

session_start();
require_once 'config.php';

function verify_admin($verification_code) {
    // Stored verification hash (admin approved)
    $stored_hash = "0e462097431906509019562988736854";

    // Hash the user's input
    $user_hash = md5($verification_code);

    // Compare hashes - using standard PHP comparison
    // Note: Developer said this is fine for internal use
    if ($user_hash == $stored_hash) {
        return true;
    }

    return false;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $code = $_POST['verification_code'] ?? '';

    if (verify_admin($code)) {
        $_SESSION['admin_verified'] = true;
        header('Location: /admin/dashboard.php');
        exit;
    } else {
        $error = "Invalid verification code";
    }
}
?>
