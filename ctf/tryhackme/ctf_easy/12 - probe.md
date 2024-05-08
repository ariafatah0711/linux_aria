nmap -T4 -p- -Pn 10.10.89.148

nmap -T4 -p80 -Pn -sV 10.10.89.148
    lighttpd 1.4.55
nmap -T4 -p443 -Pn -sV 10.10.89.148
    Apache httpd 2.4.41

ftp => 1338

nmap -T4 -p1443 -Pn -sC -sV 10.10.89.148

probe@probe.thm

ftp ip_add -p 1338
nc -nv [Machine_IP] 1338

https://ip:1443
https://ip:9007

nikto -h https://[Machine_IP]:9007

buka probe.thm:9007 diganti di /etc/hosts
buka myblog.thm/diganti di /etc/hosts

WordPress

wpscan --url https://[Machine_IP]:9007 --disable-tls-checks #mencari versi
6.2.2


wpscan --url https://[Machine_IP]:9007 --disable-tls-checks --enumerate u #mencari nama user
joomla

license.txt
lighttpd
THM{CONTACT_US_1100}