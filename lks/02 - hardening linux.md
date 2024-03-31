# hardening linux

<?php phpinfo(); ?>

## document host information
- buat dokument yang mencantumkan informasi mesin virtual seperti:
  ```
  - name machine : centos_aria
  - alamat ip    : 10.0.2.5
  - mac address  : 08:00:27:3a:fe:41
  - user         : ariafatah
  - date         : 24-03-2024
  - asset number(optional) : -
  ```
- selalu update paket secara teratur
  ```
  yum update && yum upgrade
  ```
- hapus beberapa banner, dan version yang digunakan pada sebuah service untuk menjaga kerahasian sebuah servicec yang digunakan
  - /etc/ssh/sshd_config
  - /etc/httpd/conf/httpd.conf
  - /etc/vsftpd.conf

## Hardisk Encription
- menambahkan hardisk pada linux machine
- configurasikan crypsetup
  - lsblk
  - fdisk /dev/sdb
    - Tekan O dan tekan Enter (membuat tabel partisi baru).
    - Tekan N dan tekan Enter (membuat partisi baru).
    - Tekan P dan tekan Enter (membuat partisi primer).
    - Kemudian tekan 1 dan tekan Enter (membuatnya sebagai partisi pertama).
    - Terakhir, tekan W (perintah ini akan menyimpan perubahan ke disk).
  - cryptsetup --verbose --verify-passphrase luksFormat /dev/sdb1 

  - cyrptsetup luksOpen /dev/sdb1 sdb1
    - mkfs.ext4 /dev/mapper/sdb1
    - tune2fs -m 0 /dev/mapper/sdb1
    - mkdir -p /mnt/encrypted
  - mount /dev/mapper/sdb1 /mnt/encrypted/
    - DIDALAM FOLDER INI BISA KITA TAMBAHKAN FILE, DLL
  - umount /dev/mapper/sdb1
  - cryptsetup luskClose sdb1

  - cryptsetup luksOpen /dev/sdb1
    - mount /dev/mapper/sbd1 /mnt/encrypted

  - umount /dev/mapper/sdb1
    - cryptsetup luksClose sdb1

## Closed Unusual Open Port
- menutup port dan mengubah port untuk menjaga keamanan
  - mengubah port ssh 22 menjadi port 30500
    - nano /etc/ssh/sshd_config
    ```

    ```
    - semanage port -a -t ssh_port_t -p tcp #PORTNUMBER
    - firewall-cmd --permanent --remove-service=ssh
    - firewall-cmd --permanent --add-port=20000/tcp
  - systemctl restart sshd
    
## Whitelisting Selinux
- mangaktifkan selinux
  ```
  sestatus => check system linux
  setenforce 0 => disable selinux
  setenforce 1 => enable seiinux

  nano /etc/selinux/config
      > SELINUX=enforcing
  sudo reboot
  ```

## CHROOT Shell
- membuat lokasi chroot
  - mkdir -p /var/chroot

- mengcopy system ke chroot
  - cp -v /bin/bash /var/chroot/bin
      - ldd /var/chroot/bin
      - cp /lib64/~~~ /var/chroot/lib

- konfigurasi 
    - nano /etc/passwd.chroot
      ```
      ariafatah:x:1000:1000::/home/ariafatah:/bin/bash
      ```
    - nano /etc/group.chroot
      ```
      ariafatah:x:1000:
      ```
    - nano /etc/ssh/sshd_config
      ```
      Subsystem    sftp       internal-sftp

      Match group jail
            ChrootDirectory /home/jail
      ```
      atau
      ```
      Match user jail
            ChrootDirectory /var/chroot
            #ForceCommand /bin/bash
            ForceCommand internal-sftp
      ```
    - client => 
      - sftp -P 1026 ariafatah@localhost

## Certificate Shell Login
- ssh-keygen -t rsa
  - ssh-copy-id ariafatah@localhost
  - ssh -i ~/.ssh/id_rsa ariafatah@localhost
- konfigurasi ssh
  - nano /etc/ssh/sshd_config
    ```
    MaxAuthTries 4 #digunakan agar tidak dapat di brute force
    PermitRootLogin no #tolak user root login
    public key authentication
    ```

## Directory Listing
- nano /etc/http/conf/http.conf
  ```
  include ../conf.d/directory_listing.conf
  ```
- nano /etc/http/conf.d/directory_listing.conf
  ```
  <Directory /var/www/html>
    Options -Indexes #menonaktifkan direcotry listing pada
    AllowOverride All #Mengizinkan konfigurasi direktori untuk diganti oleh file .htaccess.
  </Directory>
  ```
  atau
  ```
  <Directory /var/www/html/src>
    Options -Indexes
  </Directory>

  <Directory /var/www/html/images>
    Options -Indexes
  </Directory>

  <Directory /var/www/html/src/style>
    Options -Indexes
  </Directory>
  ```

## Remote Command Exec
- pastikan validasi input pengguna yang tepat. Ini termasuk memfilter karakter atau kode yang berpotensi berbahaya dan memproses data hanya setelah validasi:
```
if (preg_match('/[^a-zA-Z0-9]/', $username) || preg_match('/[^a-zA-Z0-9]/', $password))
{
    exit(); 
}
```


pastikan validasi input pengguna yang tepat. Ini termasuk memfilter karakter atau kode yang berpotensi berbahaya dan memproses data

if (preg_match('/[^a-zA-Z0-9]/', $username) || preg_match('/[^a-zA-Z0-9]/', $password))