# network service

## Task 3  Enumerating SMB
Lakukan pemindaian nmap pilihan Anda, Berapa banyak port yang terbuka? 3
Port apa yang dijalankan SMB? 139/445
Mari kita mulai dengan Enum4Linux, lakukan enumerasi dasar lengkap. Sebagai permulaan, apa nama grup kerja? WORKGROUP
Apa yang muncul sebagai nama mesin? polosmb
Versi sistem operasi apa yang berjalan? 6.1
Bagian apa yang menonjol sebagai sesuatu yang mungkin ingin kita selidiki? profiles

## Task 4  Exploiting SMB

What would be the correct syntax to access an SMB share called "secret" as user "suit" on a machine with the IP 10.10.10.2 on the default port? smbclient //10.10.10.2/secret -u suit -p 139
Does the share allow anonymous access? Y/N? y
Great! Have a look around for any interesting documents that could contain valuable information. Who can we assume this profile folder belongs to? john cactus
What service has been configured to allow him to work from home? ssh
Okay! Now we know this, what directory on the share should we look in? .ssh
This directory contains authentication keys that allow a user to authenticate themselves on, and then access, a server. Which of these keys is most useful to us? id_rsa
What is the smb.txt flag?

## Task 5 Understanding Telnet
What is Telnet? application protocol
What has slowly replaced Telnet? ssh
How would you connect to a Telnet server with the IP 10.10.10.3 on port 23? telnet 10.10.10.3:23
The lack of what, means that all Telnet communication is in plaintext? encryption

## Task 6 Enumerating Telnet
