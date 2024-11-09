# chiper clasic

kriptograpi => proses menyamarkan informasi sehingga tidak dapat di baca atau dimengerti oleh orang lain
    - cryptosystem => metode yang dirancang untuk melakukan proses kriptograpi
    - cryptoanalyst => metode mengembalikan penyamaran dari hasil cryptosystem menjadi hasil informasi yang dapat dimengerti

- note
  ```
  abcdefghij k  l  m   n o  p  q  r  s  t  u  v  w  x  y  z
  0123456789 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
  ```

metode
```
    - shift chiper(caesar chiper) => merupakan jenis enkripsi klasik
        - dimana cara kerjanya adalah menggeser kiri/kanan sejumlah langkah dari urutan alpahabet
        ```
        k = 3

        abcdefghijklmnopqrstuvwxyz
        defghijklmnopqrstuvwxyzabc

        selamat datang
        vhodpdw gdwdqj
        ```
    
    - substitution chiper => merupakan jenis kriptograpi klasik
        - dimana metode enkripsinya dengan menukar plaintext dengan kunci
        - kunci ini huruf tunggal, atau lebih. atau bisa juga sebuah kalimat
        - jenis
            - random alphabet => mengubah seubah teks alpahabet random, atau kata diawal(syaratnya tidak boleh ada pengulangan huruf yang sama)
                - mengacak urutan alpahbet
                ```
                Plain Text : ABCDEFGHIJKLMNOPQRSTUVWXYZ
                chiper text: AZYXWVUTSRQPONMLKJIHGFEDCBA
                ```
                - menggunakan sebuah kata lalu sisanya adalah huruf yang tidak digunakan di awal kata tadi
                ```
                Plain Text : ABCDEFGHIJKLMNQRSTUVWXYZ
                chiper text: KOMPUTERABCDEFGHIJKLMNQS
                ```
                - kalau semisal ada kalimat yang sama kaya "saya" maka yang diambil hanya "say"
            - rotate by (ROT) => merotasikan (syaratnya baris atas dan bawah harus sama jumlahnya)
                - ROT13 => merotasikan setiap urutan ke 13 alphabet
                ```
                ABCDEFGHIJKLM
                NOPQRSTUVWXYZ
                ```
                - ROT18 => merotasikan setiap urutan ke 18 alphabet + angka
                ```
                ABCDEFGHIJKLMNOPQR
                STUVWXYZ123456789
                ```
                - ROT47 => merotasikan setiap urutan ke 47 alphabet (uppercase + lowercase ) + angka + symbol

    - vigenere chiper => salah satu jenis kriptograpi klasik
        - tetapi bukan monoalphabetic
        - dimana kunci yang digunakan akan berulang sepanjang plain text
            - ssetiap karakter plain text akan ditambahkan karakter di keyword, dan hasilnya di modulo 26 (huruf alpahabet)
            - termasuk dalam polyalphalbetic
            - 26 karena itu adalah huruf alphabet
            - dihitungnya dari 0
                ```
                kunci   = GELAS
                        = 6, 4, 11, 0, 18

                p text  = HATIHATIDIJALAN
                        = 7 0 19 8 7  0 19  8 3  8 9 0 11 0 13
                gelas   = 6 4 11 0 18 6  4 11 0 18 6 4 11 0 18 (diulang)
                ------- = ----------- ------------ ----------- +
                        = 13 4 30 8 25 6 23 19 3 26 15 4 22 0 31 mode 26
                        = 13 4 4 8 25 6 23 19 3 0 15 4 22 0 5
                Chiper  = NEEIZGXTDAPEWAF
                ```
            - langkah
                - konversi plain text menjadi nilai urutnya
                - konversi kunci menjadi nilai urutnya dan ulangi sebanyak plain textnya
                - jumlahkan nilai p dan k dan hasilnya di modulo 26
                    - misal (15 + 4) = 19 mod 26 = S (ingat hitungnya dari 0 bukan dari 1)
        
    - Affine Chiper => dimana setiap huruf dalam alphabet di mapping dengan nomer urutnya dan di enkripsi dengan rumus fungsi matematika
        - rumus: E(x) = (ax + b) mod m
            - X = nomer urut dari karakter plain text
            - a = bilangan primer dari 1 - 26
            - b = bilangan integer
            - m = jumlah alphabet
        - cara kerja
            - terdiri dari 2 kunci
                - k1 = a
                - k2 = b
            - biasanya ditulis k(a, b)
            - sama dengan chiper substitusi, setiap huruf plain text dikonversi menjadi nomer urutnya
            - kemudian setiap nomer urut digunakan rumus E(x) = (ax + b) mod m

        - contoh
            - plain text = selamat
            - kunci = k(3,10)
            - chiper text = ?

            - penyelesaian
                - selamat
                - 18 4 11 0 12 0 19
                - ((18x3) + 10) mod 26 = 12, ((4x3) + 10) mod 26
                    - 64 = 26 + 26 + 12 = M
            - jawaban = MWRKUKP
        
        - contoh
            - plain text = selamat
            - kunci = k(17, 3)
            - chiper text = ?

            - penyelesaian
                - selamat
                - 18 4 11 0 12 0 19
                - ((18x17) + 3) mod 26 = 309, ((4x17) + 3) mod 26 = 71
                    - 309 = 23 = x
                    - 68 = 19 = t
            - jawaban = xtidzdo

    - hill chiper => salah satu kriptograpi yang berbasis aljabar linear dimana proses enkripsinya mengalihkan antara plain text dengan kunci yang berupa matrix
        - merupakan polygrapic pertama
        - cata kerja  =>
            - setiap block dari huruf m akan menentukan mxm matriks
                - jika setiap block ada 2 huruf maka setiap block yang digunakan adalah 2x2
                - jika setiap block ada 3 huruf maka setiap block yang digunakan adalah 3x3\
            - jika p = july, k = LIDH, maka kita buat 2 block
                - (JU), dan (LY) yang masing masing block terdiri dari 2 huruf
                - (9, 20), dan (11, 24)
                - key = (LIDH) = 11 8 3 7
            - jawab = 
                - c = (11 8)(9 ) mod 26
                    = (3  7)(20) 

                    99 + 160 = 21 + 16
                    27 + 140

                - c = (3) dan (11) = DELW
                    = (4)     (20)
    
    - transpotion chiper => berbeda dengan substitution chiper, 
        - chiper ini nmenyusun plain text dengan berbagai macam pola
        - sehingga untuk membuat chiper text, dilihat dari plain text yang sudah disusun
            - simple columnar
            - keyword columnar
        - cara kerja simple columnar => 
            - plain text = bagaimana keadaan kamu hari ini
                key = 6 kolom
            - urutan => 
                - bagaim
                - anakea
                - daanka
                - muhari
                - ini
            - kemudian disusun dari kolom 1 sampai 6 secara menurun
                - badmianaunghhaiaknaiekrmaai
        
    - cara kerja keyword columnar
        - plain text = bagaimana keadaan kamu hari ini
            key = cerita
                = 235461
        - urutan plain text dari huruf k ditambahkan x
            - bagaim
            - anakea
            - daanka
            - muhari
            - inixxx

            - 235461
        - dan dimulainya dengan kolom yang sejajar 235461
            - yaitu maaix, lalu badmi, anaun, dan seterusnya
        - jadi hasilnya = maaixbadmianaunaknaxgaahiiekrx
```