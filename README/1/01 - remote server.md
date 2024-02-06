# ssh :22

SSH adalah Secure Shell, yaitu sebuah protokol yang memungkinkan kamu untuk mengontrol perangkat, termasuk mengakses dan memodifikasi beragam pengaturan file yang ada dalam server dalam jarak jauh.

## ubuntu
- install ssh
  - ```apt install openssh-server```

- konfigurasi ssh /etc/ssh/
  - ```nano /etc/ssh/sshd_config```
    ```sh
    port 22
    ```

- start ssh
  - ```systemctl restart ssh or /etc/init.d/ssh restart```
  - ```systemctl status/start/stop/enable/disable ssh```

- host windows / termux
  - ```ssh user@192.168.1.1 -p 22```

# telnet :23

Perbedaan Utama Antara Telnet dan SSH Telnet tidak menyediakan autentikasi, sedangkan SSH mengautentikasi penerima. Jaringan pribadi berfungsi dengan Telnet, sedangkan SSH beroperasi pada jaringan bersama. Telnet berinteraksi melalui TCP/IP melalui nomor port 23, sedangkan SSH menggunakan nomor port 22 untuk komunikasi.

- install ssh
  - ```apt install telnet```

- host windows / termux
  - ```telnet 192.168.1.1```