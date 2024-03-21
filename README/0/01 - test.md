stty echo => mengaktifkan
stty -echo => menonaktifkan
python3 -c "import pty; pty.spawn('/bin/bash')" => menampilkan path di user
stty raw -echo;fg; => reset
find / -perm /4000 2>dev/null
find / -type f -name user.txt 2> /dev/null