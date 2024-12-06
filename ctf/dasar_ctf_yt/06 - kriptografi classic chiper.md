# kriptografi
- menyembunyikan pesan
  - plain text (text biasa)
    - enkripsi plain text ke chiper menggunakan key
  - cipher text (text yang sudah sembunyikan)
    - dekripsi menggunakan key untuk mengubahh chiper ke plain text agar dapat dibaca text aslinya

## classic cipher
- caesar chiper
  - pergeseran misal 
    - shift=3
    - abcd => menjadi cdef
- ROT13
  - adala caesar ciper dengan shift=13 / n=13
- subsitution
  - merubaah text dengan key
  - misal key=zyxw
    - maka nanti jika kita tulis "abcdefghij" hasilnya akan menjadi "zyxwabcdef"

## picoCTF 2014 caeser
- soal: hvsgsqfshdoggdvfogswgfxwkqwqfuclskklefemiyboubjtxff
  - gunakan tool caeser cipher
  - dan ubah shift nya sampai ketemu text yang bermakna
  - ketika saya mengubah menjadi caeser 16 saya menemukan hasilnya
    ```
    thesecretpassphraseisrjiwcicrgoxewwxqrqyuknagnvfjrr
    thesecretpassphraseis : rjiwcicrgoxewwxqrqyuknagnvfjrr
    ```
  - ini adalahh flagnya  "rjiwcicrgoxewwxqrqyuknagnvfjrr"

## picoCTF 2014 subsitution
- soal: https://pastebin.com/raw/DZKKMt9D
- kita gunakan tool frequency analisis

### tool otomatis
- https://www.quipqiup.com/
  - ketika di paste nanti akan muncul kemungkinan kemungkinan plain text nya

### tool manual
- https://www.cryptoclub.org/#vAllTools 

- namun terkadang terdapat soal ctf juga yang berbentuk image jadi chiper text nya berbentu icon