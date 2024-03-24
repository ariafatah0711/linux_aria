# document host information
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

## configurasi
- hapus bener pada ssh, ftp, dll
    - /stc/ssh/sshd.conf
        ```
        Banner no
        ```
- Setiap kali Anda melakukan hardening pada sistem Linux, buat dokumen baru yang mencantumkan informasi mesin virtual
    - name machine : centos_aria
    - alamat ip    : 10.10.10.1
    - mac address  : 08:00:27:3a:fe:41
    - user         : ariafatah
    - date         : 24-03-2024
    - asset number(optional) : -

- remove service not secure
```
yum erase xinetd ypserv tftp-server telnet-server rsh-server
sudo apt-get --purge remove xinetd nis yp-tools tftpd atftpd tftpd-hpa telnetd rsh-server rsh-redone-server
```

## selinuc
- SELinux adalah fitur pengaturan keamanan yang membatasi akses ke modul Kernel tertentu. Fitur ini digunakan secara standar pada CentOS 7 dan RHEL untuk memberikan keamanan tambahan untuk kedua sistem operasi tersebut. SELinux terdiri dari “policies”, yaitu peraturan yang memperbolehkan atau mencegah penggunaan aplikasi tertentu
```
sestatus => check system linux
setenforce 0 => disable selinux
setenforce 1 => enable seiinux

nano /etc/selinux/config
    > SELINUX=enforcing
sudo reboot
```

## ssh
nano /etc/ssh/sshd.conf
- Batasan Jumlah Percobaan Login
    - Setelah user mencoba beberapa kali login menggunakan password yang salah otomatis server akan menolak untuk login
    ```
    MaxAuthTries 4
    ```
- Nonaktifkan Login Root melalui SSH
    - Tolak user root pada saat Anda mengakses SSH server, loginlah sebagai normal user dan apabila anda ingin menggunakan root privillage, lakukan dengan perintah su.
    ```
    PermitRootLogin no
    ```
- mengijinkan ssh hanya pada ip address tetentu
    ```
    sudo ufw enable
    sudo ufw denny 22
    sudo ufw allow from 192.168.1.0/24 to any port 22
    sudo ufw allow from 10.0.0.0/24 to any port 22    

    sudo ufw reload
    ```
    ```
    sudo firewall-cmd --permanent --zone=trusted --add-source=192.168.95.0/24
    sudo firewall-cmd --permanent --zone=trusted --add-source=10.0.0.0/24

    sudo firewall-cmd --permanent --zone=public --remove-service=ssh # close port
    sudo firewall-cmd --permanent --zone=trusted --add-service=ssh # open port

    sudo firewall-cmd --reload
    ```

- Nonaktifkan Binari SUID dan SGID yang Tidak Diinginkan
    - Semua bit SUID / SGID diaktifkan file dapat disalahgunakan ketika SUID / SGID executable memiliki masalah keamanan atau bug. Semua pengguna lokal atau jarak jauh dapat menggunakan file tersebut. Ini adalah ide yang baik untuk menemukan semua file tersebut. Gunakan perintah find sebagai berikut:
#See all set user id files:
find / -perm +4000
# See all group id files
find / -perm +2000
# Or combine both in a single command
find / \( -perm -4000 -o -perm -2000 \) -print
find / -path -prune -o -type f -perm +6000 -ls

- Secure Apache/PHP/Nginx server
Edit httpd.conf file and add the following:

ServerTokens Prod
ServerSignature Off
TraceEnable Off
Options all -Indexes
Header always unset X-Powered-By