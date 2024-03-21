## Konfigurasi dan Pengujian Hardening Document Host Information (Linux machines)
    - mengatur banner ssh papda file "/etc/ssh/sshd_config" dan edit filenya dan hapus banner
        - Mengubah banner SSH standar yang mengungkapkan informasi tentang versi sistem operasi, versi SSH, dan detail lainnya. Ini dapat dilakukan dengan mengedit file konfigurasi SSH (biasanya berada di /etc/ssh/sshd_config) untuk menghilangkan atau mengubah pesan banner.
    - menyembunyikan versi apache pada file "/etc/apache2/apache2.conf"
        - Jika sistem menjalankan server web Apache, mengonfigurasi server web untuk menyembunyikan versi Apache yang sedang berjalan dari respons header HTTP. Ini dapat dicapai dengan mengatur opsi serverTokens dan serverSignature dalam file konfigurasi Apache (biasanya di /etc/httpd/conf/httpd.conf atau /etc/apache2/apache2.conf).
    - Menghapus Informasi Identifikasi Sistem(bukan hapus file tapi isinya): /etc/issue, /etc/issue.net
        - Memeriksa dan menghapus atau mengurangi informasi yang mengidentifikasi sistem secara spesifik. Misalnya, menghapus file /etc/issue, /etc/issue.net, atau menyuntingnya untuk menghilangkan rincian spesifik tentang sistem operasi dan versi.
    - Menyembunyikan Informasi Kernel: Melakukan konfigurasi agar informasi kernel tidak terlalu mudah diakses. 
        - Ini dapat melibatkan penyembunyian informasi kernel di /proc/sys/kernel yang dapat diakses melalui /etc/sysctl.conf.
        - sudo nano /etc/sysctl.conf
            ```
            kernel.printk = 3 3 3 3
            ```
        - sudo sysctl -p
    - Menonaktifkan Identifikasi Versi FTP:
        - Jika sistem menjalankan layanan FTP, mengonfigurasi layanan tersebut untuk menyembunyikan informasi versi dari respons banner. Ini seringkali dapat dilakukan melalui konfigurasi pada perangkat lunak server FTP yang digunakan (misalnya, vsftpd).
        - sudo nano /etc/vsftpd.conf
        - ftpd_banner=Welcome to My FTP Server
        - sudo systemctl restart vsftpd
    - Menggunakan IDS/IPS:
        - Menggunakan sistem deteksi intrusi (IDS) atau sistem pencegahan intrusi (IPS) untuk mendeteksi dan mencegah upaya yang mencurigakan untuk mengakses informasi host yang sensitif.
    -  Mengurangi Log Verbosity
        - Mengurangi jumlah informasi log yang diproduksi oleh sistem untuk mengurangi kemungkinan pengungkapan informasi sensitif kepada penyerang.
        - sudo nano /etc/rsyslog.conf
        - #*.debug /var/log/debug => menonaktifkan pencatatan pesan debug dengan mengomentari baris yang mengandung *.debug:
        - sudo nano /etc/syslog.conf -> atur level log
        - sudo systemctl restart rsyslog

## Konfigurasi dan Pengujian Hardening Hardisk Encription (Linux machines)
    - Pilih Partisi yang Akan Dienkripsi:
    - sudo yum install cryptsetup
    - sudo cryptsetup luksFormat /dev/sdX => Ganti /dev/sdX dengan alamat partisi yang ingin Anda enkripsi.
    - sudo cryptsetup luksOpen /dev/sdX my_encrypted_partition
    - sudo mkfs.ext4 /dev/mapper/my_encrypted_partition
    - sudo mkdir /mnt/encrypted
    - sudo mount /dev/mapper/my_encrypted_partition /mnt/encrypted
    - Uji Fungsionalitas:
    - Backup Kunci Enkripsi:

## Konfigurasi dan Pengujian Hardening Closed Unusual Open Port (Linux machines)
    - sudo netstat -tuln
    - Periksa Port dalam Konfigurasi Firewall:
    - Menutup atau Mematikan Layanan yang Menggunakan Port:
    - Konfigurasi Pengaturan Jaringan:
        - sudo iptables -A INPUT -p tcp --dport nomor-port -j DROP
    - Uji Konektivitas dan Fungsionalitas:
    - Monitor dan Evaluasi:

## Konfigurasi dan Pengujian Hardening Whitelisting Selinux (Linux machines)
- Periksa Status SELinux:
    - sestatus
- Pilih Mode SELinux:
- Periksa Aturan SELinux:
    - sudo semanage permissive -a <domain>
- Buat Kebijakan Kustom:
    - sudo audit2allow -a -M nama_modul
    - sudo semodule -i nama_modul.pp
= Terapkan Whitelisting:
    - Terapkan kebijakan whitelisting dengan menambahkan aturan baru atau menyesuaikan kebijakan SELinux yang ada. Pastikan untuk hanya mengizinkan tindakan dan akses yang benar-benar diperlukan oleh aplikasi atau layanan.
- Uji Kebijakan:
    - Uji-  kebijakan yang sudah Anda buat untuk memastikan bahwa aplikasi dan layanan masih berfungsi dengan baik dan bahwa aturan yang diterapkan tidak membatasi fungsionalitas yang diperlukan.
- Monitor dan Tinjau Log:
    - Monitor log audit SELinux untuk memeriksa pelanggaran kebijakan atau peringatan yang mungkin timbul akibat kebijakan yang diterapkan. Tinjau log secara berkala untuk mengevaluasi efektivitas kebijakan SELinux dan membuat penyesuaian jika diperlukan.

## Konfigurasi dan Pengujian Hardening CHROOT Shell (Linux machines)
- CHROOT adalah singkatan dari "Change Root", dan merupakan sebuah mekanisme di sistem operasi UNIX dan Linux yang memungkinkan sebuah proses
    - atau aplikasi untuk berjalan dengan lingkungan yang terisolasi dalam sebuah direktori tertentu di dalam sistem file. 
    - Fungsinya adalah untuk membatasi akses pengguna atau proses hanya pada bagian tertentu dari sistem file, 
    - sehingga meningkatkan keamanan sistem dan mengisolasi aplikasi atau proses tertentu dari sistem secara keseluruhan.
- Login menggunakan user CHROOT dan pastikan bahwa akses pengguna dibatasi hanya pada direktori CHROOT. Pengguna tidak boleh bisa melihat atau mengakses file atau direktori di luar lingkungan CHROOT.
    - sudo useradd -d /chroot_env -s /bin/bash chroot_user
    - Konfigurasi Shell CHROOT:
        - Edit file /etc/passwd dan ubah baris untuk user chroot_user menjadi:
        - chroot_user:x:1001:1001::/chroot_env:/bin/bash
- Pengujian CHROOT Shell:
    ```sudo su - chroot_user
    cd /
    ls
    ```
- contoh
    - sudo useradd -d /var/www -s /bin/bash chroot_user
    - sudo usermod -d /var/www chroot_user

## Konfigurasi dan Pengujian Hardening Directory Listing (Linux machines)
- Buat dan Kelola Sertifikat:
    - openssl genpkey -algorithm RSA -out private_key.pem
    - openssl req -new -key private_key.pem -out certificate.csr
    - openssl x509 -req -in certificate.csr -signkey private_key.pem -out certificate.crt
- Konfigurasi SSH Server:
    - Buka file konfigurasi SSH (/etc/ssh/sshd_config).
    - Pastikan opsi PubkeyAuthentication dan CertificateAuthentication diatur ke yes:
    ```
    PubkeyAuthentication yes
    CertificateAuthentication yes
    ```
    - sudo systemctl restart sshd
- Tambahkan Sertifikat ke Authorized Keys:
    - Masukkan sertifikat publik ke dalam file ~/.ssh/authorized_keys di server.
- Pengujian Hardening Certificate Shell Login:

## Konfigurasi Hardening Directory Listing:
- Konfigurasi dan pengujian hardening directory listing pada mesin Linux bertujuan untuk mengontrol akses dan pengaturan tampilan daftar isi direktori agar tidak memberikan informasi yang tidak perlu kepada pengguna yang tidak berhak. Berikut adalah langkah-langkahnya:
    - Mengonfigurasi hak akses:
        - Pastikan bahwa hak akses direktori sudah teratur dengan benar. Direktori yang tidak perlu diekspose sebaiknya memiliki hak akses yang sesuai agar tidak dapat diakses oleh pengguna yang tidak berhak.
    - Menonaktifkan listing dengan Apache:
        - Jika Anda menggunakan server web Apache, pastikan untuk menonaktifkan opsi directory listing dengan menambahkan atau memastikan opsi berikut dalam file konfigurasi Apache (httpd.conf atau .htaccess):
        - Options -Indexes
    - Mengonfigurasi Nginx:
        - Jika Anda menggunakan server web Nginx, pastikan untuk menonaktifkan directory listing dengan menambahkan atau memastikan konfigurasi berikut dalam blok server Nginx:
    - autoindex off;
- Pengujian Hardening Directory Listing:
    - Cek directory listing:
        - Setelah melakukan konfigurasi, periksa apakah directory listing sudah berhasil dinonaktifkan pada server. Anda dapat melakukannya dengan membuka browser atau perintah curl untuk mengakses direktori tertentu pada server web Anda dan memeriksa apakah daftar isi direktori ditampilkan. 
    - Uji akses ke direktori yang dibatasi:
        - Pastikan bahwa pengguna yang tidak berhak tidak dapat mengakses direktori yang seharusnya tidak mereka akses. Coba akses ke direktori terbatas menggunakan berbagai metode, seperti melalui web browser atau melalui koneksi SSH (jika itu adalah direktori sistem).
    - Pemantauan dan pembaruan:
        - Setelah melakukan konfigurasi, penting untuk terus memantau dan memperbarui pengaturan tersebut secara berkala. Pastikan untuk memeriksa apakah ada perubahan yang tidak diinginkan pada pengaturan hak akses atau konfigurasi web server yang dapat mengakibatkan kemungkinan celah keamanan.

## Konfigurasi dan Pengujian Hardening Remote Command Exec (Linux machines)
- Konfigurasi SSH:
    - Buat Pengguna Terbatas:
    - Edit file konfigurasi SSH di /etc/ssh/sshd_config
      ```
      PermitRootLogin no
      AllowUsers pengguna_terbatas
      ```
    - Gunakan Kunci SSH:
        - PasswordAuthentication no
    - systemctl restart sshd

- configurasi Firewall:
    - Buat Aturan Firewall:
    - Buat aturan firewall untuk membatasi akses jarak jauh hanya untuk host yang sah. Misalnya, jika Anda hanya ingin mengizinkan akses SSH dari alamat IP tertentu, Anda dapat menambahkan aturan firewall seperti ini:
      ```
      sudo iptables -A INPUT -p tcp --dport 22 -s alamat_ip_terpercaya -j ACCEPT
      sudo iptables -A INPUT -p tcp --dport 22 -j DROP
      ```