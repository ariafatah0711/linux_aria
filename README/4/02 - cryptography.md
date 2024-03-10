kriptograpi => proses menyamarkan informasi sehingga tidak dapat di baca atau dimengerti oleh orang lain
    - cryptosystem => metode yang dirancang untuk melakukan proses kriptograpi
    - cryptoanalyst => metode mengembalikan penyamaran dari hasil cryptosystem menjadi hasil informasi yang dapat dimengerti

metode
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

    - vigenere chiper => 