

# Hackoff FC CTF Challenge - PHP Type Juggling

## Overview
A football-themed Capture The Flag challenge where players exploit a PHP type juggling vulnerability to bypass admin verification and capture the flag: `hackoff{typ3_juggl1ng_g04l}`

---

## Pages to Build

### 1. Landing Page (`/`)
- **Theme:** Hackoff FC - Official Football Club website
- **Design:** Football stadium aesthetic with team colors (green/white)
- **Content:** 
  - Hero section with club logo and "Welcome to Hackoff FC"
  - Navigation with "Home", "Fixtures", "Players", and a subtle "Admin" link
  - Footer with club info

### 2. Admin Verification Page (`/admin`)
- **Purpose:** The main challenge entry point
- **Design:** 
  - Dark/serious admin panel aesthetic
  - Club logo with "Staff Only - Verification Required"
  - Single input field for "Verification Code"
  - Submit button
- **Behavior:**
  - Simulates PHP type juggling comparison
  - Accepts any "magic hash" string (like `240610708`, `QNKCDZO`, etc.)
  - Wrong codes show "Invalid verification code" error
  - Correct magic hash → redirects to success page

### 3. Debug Page (`/debug.php`)
- **Purpose:** Reveals the vulnerable source code
- **Design:**
  - Styled like a raw PHP file accidentally exposed
  - Shows the exact PHP code you provided with syntax highlighting
  - Header comment: "DEBUG MODE ENABLED - THIS FILE SHOULD NOT BE PUBLIC"
  - Includes hints like "TODO: Remove debug mode before production"
- **Key vulnerability visible:**
  - MD5 hash comparison using `==` instead of `===`
  - Stored hash `0e462097431906509019562988736854` (starts with `0e`)

### 4. Success Page (`/admin/dashboard`)
- **Purpose:** Flag reveal on successful bypass
- **Design:**
  - Celebratory football theme with confetti
  - "ACCESS GRANTED - Welcome, Admin!"
  - Large flag display: `hackoff{typ3_juggl1ng_g04l}`
  - Trophy/goal celebration animation

---

## Discovery Mechanism

### robots.txt
```
User-agent: *
Disallow: /debug.php
Disallow: /admin/dashboard
# Note: Security audit scheduled for next week
```

### HTML Hints
- Comment in admin page source: `<!-- TODO: Remove debug endpoint before go-live -->`
- Meta tag hint: `<meta name="author" content="J. Thompson - Security Team">`

---

## Technical Implementation

### Magic Hash Validation Logic
The frontend will simulate PHP's type juggling:
- Any input whose MD5 hash starts with `0e` followed by only digits will be accepted
- Known working inputs: `240610708`, `QNKCDZO`, `0e215962017`

### Visual Design
- **Color scheme:** Football green (#1a472a), white, gold accents
- **Typography:** Bold sports-style headings
- **Imagery:** Stadium backgrounds, football motifs, club badge

---

## Challenge Flow
```
Player visits /admin → "Enter verification code"
           ↓
Player checks robots.txt → Finds /debug.php listed
           ↓
Player visits /debug.php → Sees vulnerable PHP code
           ↓
Player researches "PHP magic hash 0e" → Finds bypass strings
           ↓
Player enters "240610708" → MD5 = 0e462097431906509019562988736854
           ↓
Loose comparison: 0 == 0 → TRUE → Access granted!
           ↓
Flag revealed: hackoff{typ3_juggl1ng_g04l}
```

