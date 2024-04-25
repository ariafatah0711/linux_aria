stty echo => mengaktifkan
stty -echo => menonaktifkan
python3 -c "import pty; pty.spawn('/bin/bash')" => menampilkan path di user
stty raw -echo;fg; => reset
find / -perm /4000 2>dev/null
find / -type f -name user.txt 2> /dev/null
whois => deskripsi domain
dig => mencari nama domain beserta ip secara manual

- find -name *.txt => meencari nama file
- find -name test.txt => meencari nama file
- grep "1. " data.txt => menampilkan text yang ada 1. di file data.txt
- &	Operator ini memungkinkan Anda untuk menjalankan perintah di latar belakang terminal Anda.
- &&	Operator ini memungkinkan Anda untuk menggabungkan beberapa perintah bersama-sama dalam satu baris terminal Anda.
- > Operator ini adalah redirector - artinya kita dapat mengambil output dari perintah (seperti menggunakan cat untuk mengeluarkan file) dan mengarahkannya ke tempat lain.
- >>	Operator ini melakukan fungsi yang sama dari operator tetapi menambahkan output daripada mengganti (artinya tidak ada yang ditimpa).>

ls
ll => alternarif ls -al