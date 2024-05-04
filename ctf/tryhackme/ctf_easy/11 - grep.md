nmap -sC -sV -p- <ip> -oN nmap

buka browser check 
http://ip
https://ip
https://ip:51337

lalu cek sertifnya cari yang namanya common disitu tedapat domain name
kita tambahkan di /etc/hosts

ip_add grep.thm
ip_add leack.hacker.grep.thm

lalu jika sudah cek di https://grep.thm dan view source page
lalu buka https://grep.thm/api dan lakukan gobsuter
menggunakan
gobuster dir -u https://grep.thm -w /usr/.. -t 64 -X .php -k

searchmecms repo githubfind api and after that change api in burp suite
ffe60ecaa8bba2f12b43d1a4b15b8f39

go to upload.php
change revshell with hexedit

hexedit add first 
“FF D8 FF E0 00 10 4A 46” -jpg