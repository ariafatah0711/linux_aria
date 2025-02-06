# Control Flow
- Control flow memungkinkan kita untuk membuat percabangan (dengan sintaksis if) atau perulangan (dengan sintaksis for dan while) pada shell script yang dibuat agar bisa sesuai dengan kondisi yang diinginkan. Mari kita bedah satu per satu.

## Percabangan
### If
- Sintaksis if ini dibutuhkan apabila saat membuat script Anda perlu mengevaluasi suatu kondisi terlebih dahulu untuk menentukan perintah yang akan dijalankan. Penggunaan if pada shell memiliki format sebagai berikut.

```bash
if [ expression ]
then
  Statement yang akan dijalankan apabila hasil dari expression adalah true (benar)
else
  Statement yang akan dijalankan apabila hasil dari expression adalah false (salah)
fi
```

| Fitur              | Expression Operator | Penjelasan                                                                                  |
|--------------------|---------------------|---------------------------------------------------------------------------------------------|
| String comparison  | =                   | Bernilai true jika masing-masing nilai string sama.                                         |
|                    | !=                  | Bernilai true jika masing-masing nilai string tidak sama.                                   |
| Integer comparison | -eq                 | Bernilai true jika masing-masing nilai integer sama.                                        |
|                    | -ne                 | Bernilai true jika masing-masing nilai integer tidak sama.                                  |
|                    | -lt                 | Bernilai true jika satu nilai integer lebih kecil dari nilai integer yang lain.             |
|                    | -le                 | Bernilai true jika satu nilai integer lebih kecil atau sama dengan nilai integer yang lain. |
|                    | -gt                 | Bernilai true jika satu nilai integer lebih besar dari nilai integer yang lain.             |
|                    | -ge                 | Bernilai true jika satu nilai integer lebih besar atau sama dengan nilai integer yang lain. |

| Operator |    Kepanjangan   |               Fungsi              |       Contoh       |
|:--------:|:----------------:|:---------------------------------:|:------------------:|
| -gt      | greater than     | Lebih besar dari (>)              | [ 5 -gt 3 ] (true) |
| -lt      | less than        | Lebih kecil dari (<)              | [ 3 -lt 5 ] (true) |
| -ge      | greater or equal | Lebih besar atau sama dengan (>=) | [ 5 -ge 5 ] (true) |
| -le      | less or equal    | Lebih kecil atau sama dengan (<=) | [ 3 -le 5 ] (true) |

---
# Perulangan
## For
- Perulangan dengan sintaksis for berjalan pada sebuah daftar item yang kita buat. Perintah for akan mengulangi satu set perintah untuk setiap item dalam daftar. Format penulisannya sebagai berikut.

```bash
for var in teks1 teks2 ... teksN
do
  Statement yang akan dieksekusi tiap teks
done
```

- var pada contoh di atas adalah nama dari sebuah variable, sedangkan teks1 sampai teksN adalah urutan karakter/teks dengan pemisah spasi yang dimasukkan ke variable bernama var. Hasilnya, statement akan dieksekusi mulai dari teks1 sampai teksN satu per satu.

### contoh
```bash
#!/bin/sh
 
for angka in 0 1 2 3 4 5 6 7 8 9
do
  echo $angka
done
```

## while
- Perulangan while memungkinkan kita untuk menjalankan satu set perintah secara berulang sampai sebuah kondisi terpenuhi. Umumnya, metode ini digunakan untuk memanipulasi sebuah value dari variable secara berulang. Cara penulisannya seperti di bawah ini.

```bash
while command
do
  Statement dijalankan saat command menghasilkan nilai true
done
```

- Di sini, command (perintah) akan dievaluasi. Jika nilai yang dihasilkan adalah true (benar), maka statement (pernyataan a.k.a set perintah) akan dieksekusi. Sebaliknya, jika command bernilai false (salah), maka tidak ada statement yang akan dieksekusi dan program akan melompat ke bagian done (akhir/selesai).

### command
```bash
#!/bin/sh
 
i=0
 
while [ $i -le 2 ]
do
  echo Number: $i
  i=$((i+=1))
done
```

### contoh check df
```bash
#!/bin/sh

print("Check disk free in /d/ev/sda: ")
while true
do
    usage=$( df -h /dev/sda | grep /dev | awk '{ print $5 }')
    echo $usage
    # sleep 3600
    sleep 2
done
```