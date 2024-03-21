# nmap
nmap => network mapping
    ip route | grep default
    trace
    netmask
    route -n 
    netstat -r -n

## using
- help
    - nmap -h / man nmap -
    - nmap -o => OS system operation
    - nmap -sC => 
    - nmap -sV => version
    - nmap -sn => scan with ping
        - nmap -sn 192.168.0.1-254
        - nmap -sn 192.168.0.0/24

- nmap
    - nmap -A => all
    - namp -sT => scan not open or not sync destination repley rst
    - nmap -sS => sync scan
    - nmap -sF => fin scan
    - nmap -sX => 
    - nmap -sU => udp scan


- nmap lvl 
    - nmap -v => verbose / menampilkan prose saat run
    - nmap vv => verbose lvl 2
    - nmap vvv => verbose lvl 3
    - nmap -d => debuging lvl 1

- file
    - nmap -oA => output file all
    - nmap -oN => output normal
    - nmap -oG => output grepable

- port
    - nmap -T<0-5> => time lvl ex: nmap -T5
    - nmap -p <port> => check just port 80
    - nmap -p <port>-<port> => check range port ex: nmap -p 1000-1500
    - nmap -p U / nmap -p T
    - nmap -p- => all port

- firewall
    - namp -pN
        - -f:- Digunakan untuk memecah paket (yaitu membaginya menjadi potongan-potongan kecil) sehingga kecil kemungkinannya paket akan terdeteksi oleh firewall atau IDS.
        - Alternatif untuk , tetapi memberikan kontrol lebih besar atas ukuran paket: , menerima ukuran unit transmisi maksimum untuk digunakan untuk paket yang dikirim. Ini harus kelipatan 8.-f--mtu <number>
        - --scan-delay <time>ms:- digunakan untuk menambahkan penundaan antara paket yang dikirim. Ini sangat berguna jika jaringan tidak stabil, tetapi juga untuk menghindari pemicu firewall / IDS berbasis waktu yang mungkin ada.
        - --badsum:- Ini digunakan untuk menghasilkan checksum yang tidak valid untuk paket. Setiap tumpukan TCP / IP nyata akan menjatuhkan paket ini, namun, firewall berpotensi merespons secara otomatis, tanpa repot-repot memeriksa checksum paket. Dengan demikian, switch ini dapat digunakan untuk menentukan keberadaan firewall / IDS.
    - nmap -p 1-5000 -sS 10.10.202.100 -sS -vv -Pn
        - if know ftp is open
    - nmap --script=ftp-anon -p21 10.10.202.100 -vv

- script
    - nmap --script=<nama_file>
    - /usr/share/nmap/scripts
        - file script.db => mencari script
        - ls -l /usr/share/nmap/scripts/*ftp*
            - grep "ftp" /usr/share/nmap/scripts/script.db => mencari file script dengan file diawali ftp
            - grep "safe" /usr/share/nmap/scripts/script.db => find category
            - cat <nama_file>

## learn
- Saat pemindaian port dengan Nmap, ada tiga jenis pemindaian dasar. Ini adalah:
    - Pemindaian TCP Connect (-sT)
    - Pemindaian SYN "Setengah terbuka" (-sS)
    - Pemindaian UDP (-sU)

- Selain itu ada beberapa jenis pemindaian port yang kurang umum, beberapa di antaranya juga akan kami bahas (meskipun kurang detail). Ini adalah:
    - Pemindaian TCP Null (-sN)
    - Pemindaian TCP FIN (-sF)
    - Pemindaian TCP Xmas (-sX)

- Peta N Scripting Engine (NSE) adalah tambahan yang sangat kuat untuk Nmap, memperluas fungsinya cukup jauh. NSE Scripts ditulis dalam bahasa pemrograman Lua, dan dapat digunakan untuk melakukan berbagai hal: dari pemindaian kerentanan, untuk mengotomatisasi eksploitasi untuk mereka. NSE sangat berguna untuk pengintaian, namun, perlu diingat seberapa luas perpustakaan skrip.
- Ada banyak kategori yang tersedia. Beberapa kategori yang berguna meliputi:
    - safe:- Tidak akan mempengaruhi target
    - intrusive:- Tidak aman: kemungkinan akan mempengaruhi target
    - vuln:- Pindai kerentanan
    - exploit:- Mencoba mengeksploitasi kerentanan
    - auth:- Mencoba untuk memotong otentikasi untuk menjalankan layanan (misalnya Masuk ke server FTP secara anonim)
    - brute:- Mencoba untuk bruteforce kredensial untuk menjalankan layanan
    - discovery:- Mencoba untuk query menjalankan layanan untuk informasi lebih lanjut tentang jaringan (misalnya query server SNMP).

- Beberapa skrip dapat dijalankan secara bersamaan dengan cara ini dengan memisahkannya dengan koma. Misalnya:.--script=smb-enum-users,smb-enum-shares
- Beberapa skrip memerlukan argumen (misalnya, kredensial, jika mengeksploitasi kerentanan yang diautentikasi). Ini dapat diberikan dengan sakelar Nmap. Contohnya adalah dengan skrip (digunakan untuk mengunggah file menggunakan metode PUT). Ini membutuhkan dua argumen: URL untuk mengunggah file, dan lokasi file pada disk. Misalnya:--script-argshttp-put
    - nmap -p 80 --script http-put --script-args http-put.url='/dav/shell.php',http-put.file='./shell.php'