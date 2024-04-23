✓
☓

# hardening linux
- membuat dokumen yang mencantumkan informasi mesin virtual ✓
- selalu update pakeet secara teratur ✓
- menghapus banner yang biasanya digunakan untuk mencantumkan version service ☓

- menggunakan crypsetup untuk melakukan encrypt disk ✓
- mounting menggunakan cli ✓
- mounting menggunakan gui dengan gparted ☓

- menutup port ssh, lalu ubah ke port 1000-65536 agar tidak mudah teridentifikasi servicenya ✓
- menghapus service yang sudah tidak aman seperti ftp, telnet, rsh, dll ☓
- menggunakan firewall untuk mengijinkan hanya ip address tertentu yang dapat mengakses sebuah service ☓

```
yum erase xinetd ypserv tftp-server telnet-server rsh-server
sudo apt-get --purge remove xinetd nis yp-tools tftpd atftpd tftpd-hpa telnetd rsh-server rsh-redone-server
```

- mengaktifkan selinux menggunakan setenforce ✓
- mendaftarkan sebuah system ke sebuah directory yang nantinya dapat diakses oleh system tersebut ✓

```
https://computingforgeeks.com/apparmor-cheat-sheet-for-linux-system-administrators/#google_vignette

aa-status #AppArmor

# enable
sudo aa-enforce /path/to/profile
sudo aa-enforce /usr/sbin/httpd

# disable
sudo aa-complain /path/to/profile
sudo aa-complain /etc/apparmor.d/usr.sbin.rsyslogd

aa-genprof <nama_file>
aa-logprof

sudo aa-genprof /usr/bin/scp
scp ~/test remote_user@remote_IP:~/
```

- membuat directory chroot, lalu mencopy file system chroot ✓
- uji coba chroot menggunakan chroot ✓
- mendaftarkan chroot ke service seperti sftp ☓

- membuat kunci publik dan kunci private menggunakan ssh-keygen ✓
- mengirim kunci publik ke client, atau mengirim kunci private ke ssh server tujuan ✓
- uji coba remote server menggunakan kunci public ✓
- configurasi tambahan pada sshd_config agar lebih aman ✓

- menambahkan configurasi directory listing pada web server apache2 / httpd ✓
- menambahkan configurasi directory listing pada web server nginx ☓
- configurasi tambahan (opsional) ☓

```
Lighttpd
mod_accessserver.modules += ( "mod_access" )
Apache 2.2
For Apache 2.2 modify the httpd.conf as follows:

<DirectoryMatch "^/.*/\.git/">
   Order deny,allow
   Deny from all
</DirectoryMatch>
Apache 2.4
For Apache 2.4 modify the httpd.conf as follows:

<DirectoryMatch "^/.*/\.git/">
    Require all denied
</DirectoryMatch>
Nginx
If you use Nginx, you’ll put this code as the foremost entry in the server-block in your nginx.conf file:

location ~ /.git/ {
     deny all;
}
```

- menambahkan option pada konfigurasi httpd agar tidak terkena path travel ✓
- melakukan filter pada input agar tidak terkena RCE ✓
- https://123dok.com/article/konfigurasi-pada-sou-rce-dan-target-database.y92m7xlz ☓

# pengiriman email pgp
- membuat tanda tangan digital menggunakan paint ✓

- menggunakan gpgfrontend ✓
- menggunakan thunderbird ✓
- menggunakan pgptool ☓
- menggunakan GnuPG ☓

```
sudo apt-get install gnupg2

# Hasilkan Kunci PGP
gpg --generate-key

# Ekspor Kunci Publik Anda:
gpg --export -a "Nama Anda" > public_key.asc

# Mengirim Email Terenkripsi:
gpg -ea -r "designer@domain.com" -o - pesan.txt | mail -s "Subjek Pesan" recipient@example.com
```

- decrypt pesan pgp menggunakan kunci pgp dengan tool gpgfrontend, pgptool ✓
- decrypt pesan pgp menggunakan kunci pgp dengan tool GnuPG ☓
- decryp tanpa kunci pgp (mungkin)

# Konfigurasi OpenVPN
- installasi openvpn, konfigurasi openvpn, dan membuat sertifikat server menggunakan easy-rsa 3.0 ✓
- installasi openvpn, konfigurasi openvpn, dan membuat sertifikat server menggunakan easy-rsa 2.0 ☓

- Membuat certificate File Client ✓

- uji coba vpn dengan file client pada windows menggunakan openvpn ✓
- uji coba vpn dengan file client pada linux menggunakan cli openvpn ✓

- melakukan konektivitas dengan konfigurasi ip 10.10.10.0 ✓
- melakukan konektivitas dengan konfigurasi ip 127.16.16.0 (yang ini belum bisa ga tau kenapa kayaknya karena subnetmasknya salah) ☓

# Instalasi dan Konfigurasi Instruction Detection System (IDS) pada web server
- installasi dan konfigurasi IDS menggunakan snort ✓
- installasi dan konfigurasi IDS menggunakan suricata ☓

- rule sql injection / blind sql injection (tapi gak tau bener atau gak configurasi rulenya) ✓
- Brute Force Attack (tapi gak tau bener atau gak configurasi rulenya) ✓
- Cross Site Scripting (tapi gak tau bener atau gak configurasi rulenya) ✓

# modeevasive
- membuat file ddos menggunakan bahasa pemograman perl ✓
- membuat file ddso menggunakan bahasa pemograman ... (opsional) ☓

- installasi dan konfigurasi module ModEvasive ✓
- custom parameter ModEvasive ☓
- Instalasi dan Konfigurasi Module ModSecurity ✓
- custom parameter / rule ModSecurity ☓

# header security
- membuat file info.php yang berisi <?php phpinfo(); ?> ✓

- melakukan pengujian menggunakan tool python yaitu shcheck ✓

- belum

- Patching Strict-Transport-Security pada Apache ✓
- Patching X-Frame-Options pada Apache ✓
- Patching X-Content-Type-Options pada Apache ✓
- Patching Referrer-Policy pada Apache ✓
- Patching Permissions-Policy pada Apache ✓
- Patching Content-Security-Policy ✓
- pemahan masing masing fungsi header security (belum terlalu paham) ☓