# file server
- samba
  - Samba Server adalah sebuah program dengan protokol client server yang dapat diibaratkan sebagai jembatan yang menghubungkan proses penyediaan layanan untuk berbagi data atau dokumen antara sistem operasi keluarga UNIX dengan sistem operasi Microsoft Windows.
  - menggunakan port 139, 445

# samba
## install samba
- ```apt install samba```

## konfigurasi samba /etc/samba
- ```mkdir /home/ariafatah/samba```
- ```nano /etc/samba/smb.conf```
  - add this
    ```bash
    [ariafatah.com]  
      path = /home/ariafatah/samba
      browseable = yes
      writeable = yes
      guest ok = yes
      public = no
      read only = no
      security = user
    ```
- ```systemctl restart smbd```
- ```ufw allow samba #firewal```
- ```smbpasswd -a ariafatah #add user```

## start samba
- ```systemctl restart/status smbd```

## start in host windows
- open in file with file explore and put ```//192.168.1.1```