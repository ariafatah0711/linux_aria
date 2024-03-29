chroot 
- mkdir -p /home/jail/home/jailuser
useradd jailuser -d /home/jail/home/jailuser
groupadd jail

/etc/ssh/sshd_config

Subsystem    sftp       internal-sftp

Match group jail
       ChrootDirectory /home/jail

di /home/jail tambahkan
lib, bin, lib64
lalu cp /bin/bash ke bin

cp /bin/baash /home/jail/bin
ldd bash

cp /lib64

client => 
sftp -P 1026 jailuser@localhost