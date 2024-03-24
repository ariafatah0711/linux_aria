# nmap

## pengertian
- nmap(Network Mapping) => merupakan alat pemindai jaringan open source yang digunakan untuk menemukan host dan layanan di jaringan,
- fungsi:
    - Pemindaian Port: Nmap dapat memeriksa status port (terbuka, tertutup, difilter, atau tidak difilter) pada host.
    - Eksplorasi Jaringan: Nmap dapat menentukan host mana saja yang tersedia pada jaringan.
    - Deteksi Versi dan Layanan: Nmap dapat mengidentifikasi versi perangkat lunak yang berjalan pada host.
    - Audit Keamanan: Nmap dapat mengidentifikasi layanan yang berjalan, sistem operasi yang digunakan, dan karakteristik lainnya.
- tool tambahan network
    ```
    ip route | grep default
    trace
    netmask
    route -n 
    netstat -r -n
    ```

## command
### option
|         option         |                                penjelasan                               |                                penggunaan                                |
|:----------------------:|:-----------------------------------------------------------------------:|:------------------------------------------------------------------------:|
|         -v, -vv        |        show verbosity level (use -vv or more for greater effect)        |                            nmap -v 10.10.10.1                            |
|         -d, -dd        |        show debugging level (use -dd or more for greater effect)        |                            nmap -d 10.10.10.1                            |
|           -6           |                           Enable IPv6 scanning                          |                    nmap -6 fe80::1a42:5e9f:95b:b4c1%7                    |
|           -A           | Enable OS detection, version detection, script scanning, and traceroute |                            nmap -A 10.10.10.1                            |
|           -O           |                           Enable OS detection                           |                            nmap -O 10.10.10.1                            |
|           -sn          |                      Ping Scan - disable port scan                      |              nmap -sn 10.10.10.0/24; nmap -sn 10.10.10.1-255             |
|           -iL          |                  scan with file list of hosts/networks                  |                            nmap -iL /tmp/hosts                           |
|           -Pn          |             Treat all hosts as online -- skip host discovery            |                            nmap -Pn 10.10.10.1                           |
|           -sV          |            Probe open ports to determine service/version info           |                            nmap -sV 10.10.10.1                           |
|           -sC          |                      equivalent to --script=default                     |                            nmap -sC 10.10.10.1                           |
|         -t, -u         |                           Scan TCP, UDP port                            |                   nmap -p U:53,111, T:21-25 10.10.10.1                   |
|    -p <port ranges>    |                        Only scan specified ports                        |          nmap -p -p22; nmap -p1-65535; nmap -p U:53,111, T:21-25         |
| --script=<nama_script> |               /usr/share/nmap/script \| grep <nama_script>              | nmap -p 445 --script=-psmb-enum-shares.nse,smb-enum-users.nse 10.10.10.1 |
|      -oN, -oG, oA      |             Output Normal FIle, Output File Grepable, Ouput All         |                           nmap 10.10.10.1 -oN 10.1                       |
|        -T<0-5>         |                   Set timing template (higher is faster)                |                         nmap -T5 -sV 192.168.1.1/24                      |

### more
```
--open => open port
--reason => alasan port ditutup
--iflist
--top-ports


nmap -T<0-5> => time lvl ex: nmap -T5

namp -sT => TCP scan
nmap -sS => sync scan
nmap -sU => UDP scan

- Pindai Kelemahan Pada Firewall / IDS
nmap -sF => fin scan
nmap -sX => Xmass
nmap -sN => null scan

-f:- Digunakan untuk memecah paket (yaitu membaginya menjadi potongan-potongan kecil) sehingga kecil kemungkinannya paket akan terdeteksi oleh firewall atau IDS.
# Alternatif untuk , tetapi memberikan kontrol lebih besar atas ukuran paket: , menerima ukuran unit transmisi maksimum untuk digunakan untuk paket yang dikirim. Ini harus kelipatan 8.-f--mtu <number>

--scan-delay <time>ms:- digunakan untuk menambahkan penundaan antara paket yang dikirim. Ini sangat berguna jika jaringan tidak stabil, tetapi juga untuk menghindari pemicu firewall / IDS berbasis waktu yang mungkin ada.

--badsum:- Ini digunakan untuk menghasilkan checksum yang tidak valid untuk paket. Setiap tumpukan TCP / IP nyata akan menjatuhkan paket ini, namun, firewall berpotensi merespons # secara otomatis, tanpa repot-repot memeriksa checksum paket. Dengan demikian, switch ini dapat digunakan untuk menentukan keberadaan firewall / IDS.
```

## nmap vulnerabilty
### option
- safe:- Tidak akan mempengaruhi target
- intrusive:- Tidak aman: kemungkinan akan mempengaruhi target
- vuln:- Pindai kerentanan
- exploit:- Mencoba mengeksploitasi kerentanan
- auth:- Mencoba untuk memotong otentikasi untuk menjalankan layanan (misalnya Masuk ke server FTP secara anonim)
- brute:- Mencoba untuk bruteforce kredensial untuk menjalankan layanan
- discovery:- Mencoba untuk query menjalankan layanan untuk informasi lebih lanjut tentang jaringan (misalnya query server SNMP).

### example
```
# untuk mengunggah file menggunakan metode PUT). Ini membutuhkan dua argumen: URL untuk mengunggah file, dan lokasi file pada disk. Misalnya:--script-argshttp-put
nmap -p 80 --script http-put --script-args http-put.url='/dav/shell.php',http-put.file='./shell.php'
```