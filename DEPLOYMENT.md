# RAC Clone Deployment Guide (GoDaddy)

Follow these steps to deploy your RAC Clone website to GoDaddy shared hosting.

## 1. Prerequisites (GoDaddy cPanel)

- **Database**: Go to **MySQL Database Wizard** and create a database.
  - Create a user and assign it to the database with "All Privileges".
  - Keep the **Database Name**, **Username**, and **Password** ready.
- **Email**: Ensure you have access to your custom domain email (e.g., `noreply@rac-dayinsuerepolicy.com`) and its password.

## 2. Configure the Backend

Open `api/config.php` in your editor and update these values:

```php
// Database Credentials
define('DB_NAME', 'your_godaddy_db_name');
define('DB_USER', 'your_godaddy_db_user');
define('DB_PASS', 'your_godaddy_db_password');

// Email Password
define('MAIL_PASS', 'YOUR_EMAIL_PASSWORD');
```

## 3. Build the Frontend

On your computer, run:

```bash
npm run build
```

This will create a folder named `out` in your project root.

## 4. Upload Files

Use File Manager in cPanel or an FTP client (like FileZilla) to upload:

1.  **Static Site**: Upload everything **inside** the `out` folder to your GoDaddy `public_html/` directory.
2.  **API**: Upload the entire `api` folder (including the `vendor` folder) to your GoDaddy `public_html/api/` directory.

> **Final Structure should look like this:**
>
> - `public_html/index.html`
> - `public_html/_next/`
> - `public_html/api/config.php`
> - `public_html/api/install.php`
> - ...etc

## 5. Final Setup

1.  **Run Installer**: Visit `https://yourdomain.com/api/install.php` in your browser.
    - This will create the database tables and set up the admin account.
2.  **Delete Installer**: **CRITICAL!** Go to the File Manager and delete `api/install.php` immediately after you see the success message.

## 6. Admin Credentials

- **Username**: `rac_admin`
- **Password**: `RacPolicy@873!`

---

**Support Info**: If emails don't send, double-check your SMTP settings in `api/config.php` (Mail Host and Port).
