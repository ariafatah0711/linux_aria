# ctf

## ctf 1
- kerentananya: sql injection
- tool: sqlmap
- lab setup: cyber academy > web karcis
- mitigasi: memfilter sebuah input agar tidak dapat terkena rce

## ctf 2
- kerentananya: terjadi karena webnya terdapat direcotry .git yang lupa dihapus dan membuat kita dapat melihat repository githubnya
web simulasi targetnya: web github yang repositorynya public
- lab setup: web dengan github public dan tidak mengaktifkan directory listing
- mitigasi: mengaktifkan directory listing pada setiap file yang terdapat . dan jangan lupa mengaktifkan nya pada setiap halaman yang bersifat private

## ctf 3
- kerentananya: CVE-2018-10933
  - CVE-2018-10933 adalah sebuah kerentanan yang ditemukan pada libssh, sebuah perpustakaan multiplatform yang mendukung protokol Secure Shell (SSH). Kerentanan ini terjadi pada mesin server libssh sebelum versi 0.7.6 dan 0.8.4Seorang klien yang jahat dapat membuat saluran tanpa melakukan autentikasi terlebih dahulu, yang mengakibatkan akses yang tidak sah 1
- lab setup: Apache-2.4.50---Path-Traversal # setup
  - apt-get update
  - apt-get install wget curl make gcc perl -y
  - apt-get install libapr1-dev libaprutil1-dev libpcre3-dev -y
  - wget https://archive.apache.org/dist/httpd/httpd-2.4.50.tar.gz
  - tar -xf httpd-2.4.50.tar.gz
  - ./httpd-2.4.50/configure --prefix=/usr/local/apache
  - make && make install
  - httpd.conf /conf/httpd.conf
  - /usr/local/apache/bin/apachectl -k start
  - /icons/.%%32%65/.%%32%65/.%%32%65/.%%32%65/etc/passwd
  - http:///icons/.%%32%65/.%%32%65/.%%32%65/.%%32%65/etc/passwd
- mitigasi: memperbarui versi apache ke versi terbaru

## ctf 4
- kerentananya: CVE-2018-10933
  - CVE-2018-10933 adalah sebuah kerentanan yang ditemukan pada libssh, sebuah perpustakaan multiplatform yang mendukung protokol Secure Shell (SSH). Kerentanan ini terjadi pada mesin server libssh sebelum versi 0.7.6 dan 0.8.4Seorang klien yang jahat dapat membuat saluran tanpa melakukan autentikasi terlebih dahulu, yang mengakibatkan akses yang tidak sah 1
- lab setup: none
- mitigasi: memperbarui versi libssh ke versi terbaru

## ctf 5
- kerentananya: terdapat rest api yang tidak tervalidasi dengan baik yang memungkinkan kita untuk request api dan kita dapat mengubah paramternya
- lab setup: https://tryhackme.com/r/room/bookstoreoc
- mitigasi: mempeerbaiki versi rest api yang memiliki kerentanan

## ctf 6
- kerentananya: terjadi karena directory listing tidak dikonfigurasikan dengan benar, yang membuat kita dapat malkukan rce
- lab setup: https://tryhackme.com/r/room/rrootme
- mitigasi: mengaktifkan directory listing

## ctf 7
- kerentananya: brute force pada ssh, dan local privilege esculataion yang tidak di konfigurasikan dengan benar
- lab setup: https://tryhackme.com/r/room/cowboyhacker
- mitigasi: mengaktifkan keamanan ssh untuk memperkuat keamanan ssh

## ctf 8
- kerentananya: CVE-2019-9193
  - CVE-2019-9193 COPY TO/FROM PROGRAM” pada PostgreSQL memungkinkan pengguna super dan pengguna dalam grup ‘pg_execute_server_program’ untuk mengeksekusi kode arbitrer dalam konteks pengguna sistem operasi database. Fungsionalitas ini diaktifkan secara default dan dapat disalahgunakan untuk menjalankan perintah sistem operasi yang sewenang-wenang di Windows, Linux, dan macOS1.
- lab setup: none
- mitigasi: none