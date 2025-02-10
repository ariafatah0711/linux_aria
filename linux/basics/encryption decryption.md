# Encryption dan Decryption
- Secret key atau kunci rahasia (dengan passphrase atau password) disebut enkripsi simetris;
- Public key atau kunci publik disebut enkripsi asimetris.

## GnuPG
- Salah satu tools yang bisa kita pakai untuk mengenkripsi file dengan metode simetris adalah program GnuPG (bisa juga disebut GPG) yang merupakan singkatan dari GNU Privacy Guard.
- Tools ini dapat mengenkripsi dan mendekripsi data serta membuat tanda tangan digital berbasiskan kunci PGP/GPG (Pretty Good Privacy/GNU Privacy Guard).

### run
```bash
sudo apt install gnupg
echo "aria fatah" > file

# enkripsi
gpg -c file # cipher simetris yang digunakan adalah AES256. Kita bisa memilih lainnya menggunakan opsi --cipher-algo bila mau. 

ls # file file.gpg
rm file # agar tidak nabark ketika decrypt

# decrypt
gpg file.gpg
```

---
## OpenSSL
- Public-key encryption atau enkripsi kunci publik menggunakan dua set kunci yang disebut key pair (pasangan kunci), yaitu
  - public key (kunci publik) yang dapat dibagikan secara bebas dengan siapa pun yang ingin Anda ajak berkomunikasi secara diam-diam; dan
  - private key (kunci privat) yang wajib menjadi rahasia dan tidak boleh dibagikan ke pihak lain.

- Jika seseorang ingin bertukar informasi sensitif, kita dapat mengirimkan public key kepadanya agar orang tersebut dapat menggunakannya untuk mengenkripsi pesan atau file sebelum mengirimkannya kembali kepada kita.
- Setelah itu, satu-satunya cara agar dapat mendekripsi pesan yang telah dikirimkan tersebut adalah menggunakan private key milik kita.

### run
```bash
sudo apt install openssl

# create key / generate rsa
openssl genrsa -aes128 -out haris_private.pem 1024a
# Enter PEM pass phrase:
# Verifying - Enter PEM pass phrase:
```

- Perintah di atas akan men-generate suatu key pair (pasangan public key dan private key) sepanjang 1024 bit dan menggunakan algoritma AES-128. Saat perintah tersebut dijalankan, kita akan diminta untuk memasukkan passphrase dua kali. Nantinya, setiap menggunakan private key, kita akan diminta untuk memasukkan passphrase tersebut.
- Perintah di atas akan men-generate suatu key pair (pasangan public key dan private key) sepanjang 1024 bit dan menggunakan algoritma AES-128. Saat perintah tersebut dijalankan, kita akan diminta untuk memasukkan passphrase dua kali. Nantinya, setiap menggunakan private key, kita akan diminta untuk memasukkan passphrase tersebut.
- Setelah perintah tersebut sukses dijalankan, nantinya akan ada file bernama haris_private.pem. Kita bisa mengintip isinya dengan perintah cat. Namun, pasti hasilnya hanya menampilkan rangkaian karakter yang tidak bisa terbaca manusia.

```bash
# make the file mudah dibaca
openssl rsa -in haris_private.pem -noout -text

# extract private key to public key
openssl rsa -in haris_private.pem -pubout > haris_public.pem

# read the key to easyy
openssl rsa -in haris_public.pem -pubin -text -noout

# encrypt file
echo "aria fatah" > file.txt
openssl pkeyutl -encrypt -inkey haris_public.pem -pubin -in file.txt -out file_rahasia.enc

# decrypt file
openssl pkeyutl -decrypt -inkey haris_private.pem -in file_rahasia.enc > file_terbuka.txt
```