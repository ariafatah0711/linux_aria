## Konfigurasi dan Pengujian Hardening Document Host Information (Linux machines)
    - membuat dokumen yang mencantumkan informasi mesin virtual ✓
        - nano info
            ```
            nama virtual machine	: centos 7
            alamat ip			    : 192.168.80.x / 24
            alamat mac			    : fe80::1a42:5e9f:95b:b4c1%7
            created user			: aria
            created date			: 04 - 04 - 2024
            asset number			: 1 (optional)
            ```
    - selalu update pakeet secara teratur ✓
        - yum update
    - menghapus banner yang biasanya digunakan untuk mencantumkan version service ☓
        - 

## Konfigurasi dan Pengujian Hardening Hardisk Encription (Linux machines)
    - membuat partisi menggunakan fdisk  ✓
        - fdisk /dev/sdb
            - m untuk help, o untuk empety disk, n new partisi (p primary, e extend), w untuk write, d untuk delete
        - mkfs.ext4 #ubah type file system [ext2, ext3, ext4, nfs, xfs]
    - membuat partisi menggunakan parted  ✓
            - parted /dev/sdb
                - mklabel msdos
                - mkpart primary <file_system_type> 1MiB 10GiB
                - print
                - resize 2
                - rm <id>
    - membuat partisi menggunakan gparted  ✓
        - yum install epel-release
            - yum install gparted
    - menggunakan crypsetup untuk melakukan encrypt disk ✓
        - crypsetup luksFormat -v -y /dev/sdb1
            - crypsetup luksOpen /dev/sdb1 sdb1_aria
            - mkfs.ext4 /dev/mapper/sdb1_aria
        - mount /dev/mapper/sdb1_aria /mnt
        - umount /mnt
            - crypsetup luksClose sdb1_aria

## Konfigurasi dan Pengujian Hardening Closed Unusual Open Port (Linux machines)
    - menutup port ssh, lalu ubah ke port 1000-65536 agar tidak mudah teridentifikasi servicenya ✓
        - nano /etc/ssh/sshd_config
            ```
            Port 10000
            ```
        - semanage port -a -t ssh_port_t -p tcp <port_number>
            - semanage port -l | grep ssh
        - systemctl restart sshd
    - menghapus service yang sudah tidak aman seperti ftp, telnet, rsh, dll ☓
    - menggunakan firewall untuk mengijinkan hanya ip address tertentu yang dapat mengakses sebuah service ☓

D. Konfigurasi dan Pengujian Hardening Whitelisting Selinux (Linux machines)
    - mengaktifkan selinux menggunakan setenforce ✓
    - mendaftarkan sebuah system ke sebuah directory yang nantinya dapat diakses oleh system tersebut ✓

## Konfigurasi dan Pengujian Hardening Whitelisting Selinux (Linux machines)
    - mengaktifkan selinux menggunakan setenforce ✓
        - getenforce #show selinux status
        - setenforce 0 @disable selinux
            - setenforce 1 @enable selinux
        - nano /etc/sysconfig/selinux
    - mendaftarkan sebuah system ke sebuah directory yang nantinya dapat diakses oleh system tersebut ✓
        - mkdir /web-harbas
            - ls -ldZ /web-harbas
            - man semanage-fcontext
        - semanage fcontext -a -t httpd_sys_content_t "/web-harbas(/.*)?"
            - restorecon -R /web-harbas/
    - management selinux port
        - semanage port -l
            - nano /etc/httpd/conf/httpd.conf
                ```
                port 15000
                ```
            - systemctl restart httpd #error output
        - sealert /var/log/audit/audit.log
            - semanage port -a -t http_port_t -p tcp 15000
            - systemctl restart httpd #berhasil

## Konfigurasi dan Pengujian Hardening CHROOT Shell (Linux machines)
    - membuat directory chroot, lalu mencopy file system chroot ✓
            - mkdir -p /user-chroot
            - cd /user-chroot
            - mkdir bin lib lib64
        - cp -r /bin/bash /user-chroot/bin
            - cp -r /lib/* /user-chroot/lib
            - cp -r /lib64/* /user-chroot/lib64
        - cp -r /bin/<perintah> /user-chroot/bin
    - uji coba chroot menggunakan chroot ✓
        - chroot /user-chroot
        - mkdir -p /user-chroot/home/user
            - useradd user -d /user-chroot/home/user
        - su - user
    - mendaftarkan chroot ke service seperti sftp ✓
        - nano /etc/ssh/sshd_config
            ```
            Match user jail
                ChrootDirectory /var/chroot
                #ForceCommand /user-chroot/bin
                ForceCommand internal-sftp
            ```
        - ssh -P 10000 user@localhost

## Konfigurasi dan Pengujian Hardening Certificate Shell Login (Linux machines)
    - 