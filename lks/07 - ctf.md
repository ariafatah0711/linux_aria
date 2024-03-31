#ctf

kerentananya: terdapat rest api yang tidak tervalidasi dengan baik yang memungkinkan kita untuk request api dan kita dapat mengubah paramternya
web simulasi targetnya: tryhackme > bookstore
link: https://tryhackme.com/r/room/bookstoreoc


- pastikan validasi input pengguna yang tepat. Ini termasuk memfilter karakter atau kode yang berpotensi berbahaya dan memproses data hanya setelah validasi:
- memindai sistem dan jaringan untuk kerentanan yang diketahui, termasuk kerentanan RCE.
- melakukan penetrasi testing terhadap server untuk mengetahui kelemahan


- Audit Kode Reguler: Lakukan audit kode menyeluruh untuk mengidentifikasi kerentanan sebelum penyerang melakukannya.
- Validasi dan Sanitasi Input: Menerapkan mekanisme validasi dan sanitasi input yang kuat untuk mencegah injeksi kode.
- Praktik Pengkodean Aman: Ikuti praktik pengkodean aman untuk meminimalkan kemungkinan memperkenalkan kerentanan.
- Web Application Firewalls: Gunakan Web Application Firewalls (WAFs) untuk menyaring lalu lintas berbahaya dan permintaan.



## tavel path vulnerabilty
file=/../../..//etc/passwd

kerentanan: directory tarvel, terjadi karena terdapat query yang tidak di konfigurasikan dengan benar yang mengakibatkan terdapat cara untuk melakukan path travel
web simulasi targetnya: