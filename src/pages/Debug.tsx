export default function Debug() {
  return (
    <div
      style={{
        background: "#0d1117",
        color: "#c9d1d9",
        padding: "40px",
        fontFamily: "monospace",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ color: "#f85149" }}>
        DEBUG MODE ENABLED – THIS FILE SHOULD NOT BE PUBLIC
      </h2>

      <pre>
{`<?php
// admin_verify.php - INTERNAL USE ONLY
// TODO: Remove debug mode before production deployment
// Last modified: J. Thompson - Security Team

function verify_admin($verification_code) {
    $stored_hash = "0e462097431906509019562988736854";
    $user_hash = md5($verification_code);

    // Vulnerable comparison (type juggling)
    if ($user_hash == $stored_hash) {
        return true;
    }
    return false;
}
?>`}
      </pre>
    </div>
  );
}
