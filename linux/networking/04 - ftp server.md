# ftp
- FTP adalah singkatan dari File Transfer Protocol. 
  - Ini adalah protokol standar yang digunakan untuk mentransfer file dari satu host ke host lainnya di internet atau dalam suatu jaringan komputer.
- menggunakan port 21

# vsftpd (ubuntu)
## install vsftpd
- ```apt install vsftpd```

## config fsvtpd /etc/fsvtpd.conf
- ```cp /etc/vsftpd.conf /etc/vsftpd.conf.backup```
- ```nano /etc/fsvtpd.conf```
  - uncomment this line
    ```bash
    31 > write_enable=YES
    122> chroot_local_user=YES
    123> chroot_list_enable=NO
    125> chroot_list_file=/etc/vsftpd.chroot_list
    131> ls_recurse_enable=YES
    ```
  - add this
    ```bash
    pasv_enable=YES
    pasv_min_port=10000
    pasv_max_port=10100
    allow_writeable_chroot=YES
    ```

## start ftp
- ```systemctl start/status vsftpd```

## start in host windows
- start in terminal ```ftp localhost```
- open in file with file explore and put ```ftp://192.168.1.1```

# vsftpd (redhat)
- install vsftpd
  - ```yum install vsftpd```

## config vsftpd
- ```cp /etc/vsftpd/vsftpd.conf /etc/vsftpd/vsftpd.conf.backup```
- ```vi /etc/vsftpd/vsftpd.conf```
- Change the line which contain
  ```bash
  anonymous_enable=YES
  local_enable=YES
  write_enable=YES
  ```
- if passive mode
  ```bash
  anonymous_enable=YES

  chroot_local_user=YES
  chroot_list_enable=YES
  # (default follows)
  chroot_list_file=/etc/vsftpd/chroot_list

  pasv_enable=YES
  pasv_min_port=40000
  pasv_max_port=50000
  ```

## start vsftpd
  - ```firewall-cmd --permanent --add-port=30000-31000/tcp```
  - ```firewall-cmd --reload```
  - ``` firewall-cmd --list-ports```

## kali linux
```bash
nano /etc/vsftpd.conf
>>
write enable yes
chroot local user yes
chroot list enable yes
chroot list file = vsftpd.chroot_list
```

- add file vsftpd.chroot_list
  - nano and add user
- ```systemctl restart vsftpd```