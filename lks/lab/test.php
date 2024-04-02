<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
    <form method="post" action="">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username"><br>
        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password"><br><br>
        <input type="submit" value="Login">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Mendapatkan username dan password dari form
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Validasi username dan password
        if (preg_match('/[^a-zA-Z0-9]/', $username) || preg_match('/[^a-zA-Z0-9]/', $password)) {
            echo "<p>Username atau password mengandung karakter yang tidak valid. Silakan coba lagi.</p>";
        } else {
            // Username dan password valid, lakukan proses login di sini
            // Misalnya, verifikasi username dan password di database
            // Jika login berhasil, redirect pengguna ke halaman selanjutnya
            // Jika login gagal, tampilkan pesan kesalahan
            echo "<p>Login berhasil!</p>";
        }
    }
    ?>
</body>
</html>
