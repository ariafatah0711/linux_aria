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

touch file{1..10}.txt

nano /home/ariafatah/show.sh
```
echo "test"
whoami
```
cd /tmp
ln <file_target> <file_baru_yang_dijadikan_link>
ln /home/ariafatah/show.sh showme
touch file.txt
ln -s /home/ariafatah/file.txt showme

ln -s /etc ~/config
rm -f ~/config

############
```
Pola	Korek api
*	Setiap string nol atau lebih karakter
?	Setiap karakter tunggal
[Abc...]	Salah satu karakter dalam kelas tertutup (antara tanda kurung siku)
[!Abc...]	Salah satu karakter tidak di kelas tertutup
[^Abc...]	Salah satu karakter tidak di kelas tertutup
[[:alfa:]]	Karakter alfabet apa pun
[[:lebih rendah:]]	Karakter huruf kecil apa pun
[[:atas:]]	Karakter huruf besar apa pun
[[:alnum:]]	Karakter alfabet atau digit apa pun
[[:p unct:]]	Karakter apa pun yang dapat dicetak yang bukan spasi atau alfanumerik
[[:d igit:]]	Setiap digit tunggal dari 0 hingga 9
[[:spasi:]]	Setiap karakter spasi putih, yang mungkin termasuk tab, baris baru, carriage return, form feed, atau spasi
```

```
[user@host glob]$ ls a*
able  alfa
[user@host glob]$ ls *a*
able  alfa  baker  bravo  cast  charlie  delta  easy
[user@host glob]$ ls [ac]*
able  alfa  cast  charlie

[user@host glob]$ ls ????
able  cast  easy  echo
[user@host glob]$ ls ?????
baker  bravo  delta
```

```
[user@host glob]$ echo {Sunday,Monday,Tuesday,Wednesday}.log
Sunday.log Monday.log Tuesday.log Wednesday.log
[user@host glob]$ echo file{1..3}.txt
file1.txt file2.txt file3.txt
[user@host glob]$ echo file{a..c}.txt
filea.txt fileb.txt filec.txt
[user@host glob]$ echo file{a,b}{1,2}.txt
filea1.txt filea2.txt fileb1.txt fileb2.txt
[user@host glob]$ echo file{a{1,2},b,c}.txt
filea1.txt filea2.txt fileb.txt filec.txt
```

```
VARIABLENAME=value

[user@host ~]$ USERNAME=operator
[user@host ~]$ echo $USERNAME
operator
Untuk mencegah kesalahan karena ekspansi shell lainnya, Anda dapat memasukkan nama variabel dalam kurung kurawal, misalnya .${VARIABLENAME}

[user@host ~]$ USERNAME=operator
[user@host ~]$ echo ${USERNAME}
operator
```

```
[user@host glob]$ echo Today is $(date +%A).
Today is Wednesday.
[user@host glob]$ echo The time is $(date +%M) minutes past $(date +%l%p).
The time is 26 minutes past 11AM.

[user@host glob]$ echo The value of $HOME is your home directory.
The value of /home/user is your home directory.
[user@host glob]$ echo The value of \$HOME is your home directory.
The value of $HOME is your home directory.
```

man -k passwd

#####################

export var=value # export
export -n PS1 # unexport

[user@host ~]$ PS1="bash\$ "
bash$ PS1="[\u@\h \W]\$ "
PS1='[\u@\h \t \w]$ ' # time
[user@host ~]$

alias hello='echo "Hello, this is a long string."'
unalias hello # unalias

###############
chage -m 0 -M 90 -W 7 -I 14 sysadmin05

```
[root@host ~]# date +%F 1
2022-03-10
[root@host ~]# date -d "+30 days" +%F 2
2022-04-09
[root@host ~]# chage -E $(date -d "+30 days" +%F) cloudadmin10 3
[root@host ~]# chage -l cloudadmin10 | grep "Account expires" 4
Account expires						: Apr 09, 2022

date -d "+45 days" -u
```

usermod -L sysadmin03 #lock
usermod -L -e 2022-08-14 cloudadmin10
usermod -U sysadmin03 #unlock

usermod -s /sbin/nologin newapp
su - newapp

This account is currently not available.

########
nano /etc/login.defsvim
PASS_MAX_DAYS 180
PASS_MIN_DAYS   0
PASS_WARN_AGE   7