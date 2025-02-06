# vars
## Shell Variable vs Environment Variable
- Shell variable (terkadang disebut local variable) adalah sebuah variable hanya ada di shell di mana ia didefinisikan. Acapkali shell variable digunakan untuk menyimpan data sementara, seperti directory yang diakses saat ini.
  ```bash
  name="aria"
  ```
- Environment variable (terkadang disebut global variable) adalah variabel yang diekspor ke semua proses yang dihasilkan oleh shell.
  ```bash
  export name="aria"

  kelas=12
  export kelas
  ```

## show var
```bash
set
env
printenv
```

---
# Data Type
- default type data di linux adalah string meskipun kita memasukan value nya adalah integer

## operasi aritmatika (int)
```bash
# expresi
$(( ekspresi ))

# contoh
Sum=$((10+3))  
echo Sum = $Sum
```

| Operator |                                    Nama                                    |                                  Penggunaan                                 |        Contoh       |
|:--------:|:--------------------------------------------------------------------------:|:---------------------------------------------------------------------------:|:-------------------:|
| +        | Addition (penjumlahan)                                                     | Menjumlahkan bilangan satu dengan lainnya.                                  |     echo $((4+2))   |
| –        | Substraction (pengurangan)                                                 | Mengurangkan bilangan satu dengan lainnya.                                  |     echo $((4-2))   |
| *        | Multiplication (perkalian)                                                 | Mengalikan bilangan satu dengan lainnya.                                    |     echo $((4*2))   |
| /        | Division (pembagian)                                                       | Menghasilkan hasil bagi dari bilangan pertama dan bilangan kedua.           |     echo $((4/2))   |
| %        | Modulo (modulus)                                                           | Menghasilkan sisa bagi dari bilangan pertama dan bilangan kedua.            |     echo $((4%2))   |
| +=       | Increment by constant (penambahan nilai oleh konstanta)                    | Menambahkan bilangan dengan nilai sebuah konstanta.                         |  x=4 echo $((x+=2)) |
| -=       | Decrement by constant (pengurangan nilai oleh konstanta)                   | Pengurangan bilangan dengan nilai sebuah konstanta.                         |  x=4 echo $((x-=2)) |
| *=       | Multiply by constant (perkalian nilai oleh konstanta)                      | Perkalian bilangan dengan nilai sebuah konstanta.                           |  x=4 echo $((x*=2)) |
| /=       | Divide by constant (pembagian nilai oleh konstanta)                        | Membagi bilangan dengan nilai sebuah konstanta dan menghasilkan hasil bagi. |  x=4 echo $((x/=2)) |
| %=       | Remainder by dividing with constant (sisa dari pembagian dengan konstanta) | Membagi bilangan dengan nilai sebuah konstanta dan menghasilkan sisa bagi.  |  x=4 echo $((x%=2)) |
| **       | Exponen (perpangkatan)                                                     | Bilangan pertama dipangkatkan dengan bilangan kedua.                        |    echo $((4**2))   |

## Array
- Meski tidak mengenal konsep data types seperti bahasa pemrograman lain, shell masih memiliki beberapa kemiripan, salah satunya kemampuannya untuk memasukkan beberapa nilai sekaligus ke dalam suatu variable yang sama. Hal ini disebut sebagai array (atau dalam bahasa Indonesia disebut larik).
- Jadi, walaupun selalu menganggap semua nilai variable sebagai teks (string), shell tetap memungkinkan kita untuk menggunakan array seperti berikut.

```bash
os=('linux' 'macos' 'windows')

echo ${os[0]} # show index pertama
echo ${os[@]} # show all
echo ${#os[@]} # show length
```

# run
```bash
alias test1='cp /mnt/c/Users/ariaf/OneDrive/Dokumen/github_aria/linux_aria/linux/shell_script/01 . && chmod +x 01 && sed -i '\''s/\r$//'\'' 01 && ./01'
alias test2='cp /mnt/c/Users/ariaf/OneDrive/Dokumen/github_aria/linux_aria/linux/shell_script/02 . && chmod +x 02 && sed -i '\''s/\r$//'\'' 02 && ./02'
alias test3='cp /mnt/c/Users/ariaf/OneDrive/Dokumen/github_aria/linux_aria/linux/shell_script/03 . && chmod +x 03 && sed -i '\''s/\r$//'\'' 03 && ./03'
```