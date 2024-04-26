# bash scripting
```
[user@host ~]$ var=$(hostname -s); echo $var
host
[user@host ~]$ echo "***** hostname is ${var} *****"
***** hostname is host *****
[user@host ~]$ echo Your username variable is \$USER.
Your username variable is $USER.
[user@host ~]$ echo "Will variable $var evaluate to $(hostname -s)?"
Will variable host evaluate to host?
[user@host ~]$ echo 'Will variable $var evaluate to $(hostname -s)?'
Will variable $var evaluate to $(hostname -s)?
[user@host ~]$ echo "\"Hello, world\""
"Hello, world"
[user@host ~]$ echo '"Hello, world"'
"Hello, world"
```

- looping
```
for VARIABLE in LIST; do
    COMMAND VARIABLE
done
```

- example
```
[user@host ~]$ for HOST in host1 host2 host3; do echo $HOST; done
host1
host2
host3
[user@host ~]$ for HOST in host{1,2,3}; do echo $HOST; done
host1
host2
host3
[user@host ~]$ for HOST in host{1..3}; do echo $HOST; done
host1
host2
host3
[user@host ~]$ for FILE in file{a..c}; do ls $FILE; done
filea
fileb
filec
[user@host ~]$ for PACKAGE in $(rpm -qa | grep kernel); \
do echo "$PACKAGE was installed on \
$(date -d @$(rpm -q --qf "%{INSTALLTIME}\n" $PACKAGE))"; done
kernel-tools-libs-5.14.0-70.2.1.el9_0.x86_64 was installed on Thu Mar 24 10:52:40 PM EDT 2022
kernel-tools-5.14.0-70.2.1.el9_0.x86_64 was installed on Thu Mar 24 10:52:40 PM EDT 2022
kernel-core-5.14.0-70.2.1.el9_0.x86_64 was installed on Thu Mar 24 10:52:46 PM EDT 2022
kernel-modules-5.14.0-70.2.1.el9_0.x86_64 was installed on Thu Mar 24 10:52:47 PM EDT 2022
kernel-5.14.0-70.2.1.el9_0.x86_64 was installed on Thu Mar 24 10:53:04 PM EDT 2022
[user@host ~]$ for EVEN in $(seq 2 2 10); do echo "$EVEN"; done
2
4
6
8
10
```

- perbandingan numerik
```
[user@host ~]$ [[ 1 -eq 1 ]]; echo $?
0
[user@host ~]$ [[ 1 -ne 1 ]]; echo $?
1
[user@host ~]$ [[ 8 -gt 2 ]]; echo $?
0
[user@host ~]$ [[ 2 -ge 2 ]]; echo $?
0
[user@host ~]$ [[ 2 -lt 2 ]]; echo $?
1
[user@host ~]$ [[ 1 -lt 2 ]]; echo $?
0
```

- perbandingan string
```
[user@host ~]$ [[ abc = abc ]]; echo $?
0
[user@host ~]$ [[ abc == def ]]; echo $?
1
[user@host ~]$ [[ abc != def ]]; echo $?
0
```

- statement
```
if <CONDITION>; then
      <STATEMENT>
      ...
      <STATEMENT>
elif <CONDITION>; then
      <STATEMENT>
      ...
      <STATEMENT>
else
      <STATEMENT>
      ...
      <STATEMENT>
fi
```

```
[user@host ~]$ systemctl is-active psacct > /dev/null 2>&1
[user@host ~]$ if  [[ $? -ne 0 ]]; then sudo systemctl start psacct; fi

[user@host ~]$ systemctl is-active psacct > /dev/null 2>&1
[user@host ~]$ if  [[ $? -ne 0 ]]; then \
sudo systemctl start psacct; \
else \
sudo systemctl stop psacct; \
fi

[user@host ~]$ systemctl is-active mariadb > /dev/null 2>&1
[user@host ~]$ MARIADB_ACTIVE=$?
[user@host ~]$ sudo systemctl is-active postgresql > /dev/null 2>&1
[user@host ~]$ POSTGRESQL_ACTIVE=$?
[user@host ~]$ if  [[ "$MARIADB_ACTIVE" -eq 0 ]]; then \
mysql; \
elif  [[ "$POSTGRESQL_ACTIVE" -eq 0 ]]; then \
psql; \
else \
sqlite3; \
fi
```

```
.	Titik () cocok dengan karakter tunggal..
?	Item sebelumnya bersifat opsional dan dicocokkan paling banyak sekali.
*	Item sebelumnya dicocokkan nol kali atau lebih.
+	Item sebelumnya dicocokkan satu kali atau lebih.
\{n\}	{n}	Item sebelumnya dicocokkan tepat waktu.n
\{n,\}	{n,}	Item sebelumnya dicocokkan atau lebih sering.n
\{,m\}	{,m}	Item sebelumnya paling sering dicocokkan.m
\{n,m\}	{n,m}	Item sebelumnya dicocokkan setidaknya kali, tetapi tidak lebih dari kali.nm
[:alnum:]	Karakter alfanumerik: dan ; dalam pengkodean lokal 'C' dan karakter ASCII, ungkapan ini sama dengan .[:alpha:][:digit:][0-9A-Za-z]
[:alfa:]	Karakter alfabet: dan ; dalam pengkodean lokal 'C' dan karakter ASCII, ungkapan ini sama dengan .[:lower:][:upper:][A-Za-z]
[:kosong:]	Karakter kosong: spasi dan tab.
[:cntrl:]	Karakter kontrol. Dalam ASCII, karakter ini memiliki kode oktal 000 hingga 037, dan 177 (DEL).
[:d igit:]	Digit:.0 1 2 3 4 5 6 7 8 9
[:grafik:]	Karakter grafis: dan .[:alnum:][:punct:]
[:lebih rendah:]	Huruf kecil; di lokal 'C' dan pengkodean karakter ASCII: .a b c d e f g h i j k l m n o p q r s t u v w x y z
[:p rint:]	Karakter yang dapat dicetak: , , dan spasi.[:alnum:][:punct:]
[:p unct:]	Karakter tanda baca; di lokal 'C' dan pengkodean karakter ASCII: .! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ' { | } ~
[:spasi:]	Karakter spasi: di lokal 'C', itu adalah tab, baris baru, tab vertikal, umpan formulir, pengembalian kereta, dan spasi.
[:atas:]	Huruf besar: dalam pengkodean lokal 'C' dan karakter ASCII, itu adalah: .A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
[:xdigit:]	Digit heksadesimal: .0 1 2 3 4 5 6 7 8 9 A B C D E F a b c d e f
\b	Cocokkan string kosong di tepi kata.
\B	Cocokkan string kosong asalkan tidak berada di tepi kata.
\<	Cocokkan string kosong di awal kata.
\>	Cocokkan string kosong di akhir kata.
\w	Cocokkan kata konstituen. Sinonim untuk .[_[:alnum:]]
\W	Cocokkan konstituen non-kata. Sinonim untuk .[^_[:alnum:]]
\s	Cocokkan spasi putih. Sinonim untuk .[[:space:]]
\S	Cocokkan dengan spasi non-putih. Sinonim untuk .[^[:space:]]
```

```
-i	Gunakan ekspresi reguler yang disediakan dan jangan terapkan sensitivitas huruf besar/kecil (jalankan peka huruf besar/kecil).
-v	Hanya menampilkan baris yang berfungsi tidak berisi kecocokan dengan ekspresi reguler.
-r	Cari data yang cocok dengan ekspresi reguler secara rekursif dalam grup file atau direktori.
-A NUMBER	Menampilkan ANGKA baris setelah kecocokan ekspresi reguler.
-B NUMBER	Menampilkan ANGKA baris sebelum kecocokan ekspresi reguler.
-e	Jika beberapa opsi digunakan, maka beberapa ekspresi reguler dapat disediakan dan digunakan dengan OR logis.-e
-E	Gunakan sintaks ekspresi reguler yang diperluas alih-alih sintaks ekspresi reguler dasar saat menguraikan ekspresi reguler yang disediakan.
```

# crontab
echo "date > /home/student/time" | at now +2min 
atg
watch atq

at -q g teatime
      at> echo "test" >> test.txt
      at> CTRL+D

at -q b 16:05

atq
1
2
3

at -c 1
at -c 2

atrm 1

####
crontab -l	Cantumkan pekerjaan untuk pengguna saat ini.
crontab -r	Hapus semua pekerjaan untuk pengguna saat ini.
crontab -e	Edit pekerjaan untuk pengguna saat ini.
crontab filename	Hapus semua pekerjaan, dan ganti dengan pekerjaan yang dibaca dari Filename. Perintah ini menggunakan input ketika tidak ada file yang ditentukan.stdin

```
/etc/crontab

# For details see man 4 crontabs

# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name  command to be executed

Minutes
Hours
Day of month
Month
Day of week
Command
```

```
crontab -e

15 12 11 * Fri command
0 9 3 2 * /usr/local/bin/yearly_backup
*/5 9-16 * Jul 5 echo "Chime"
58 23 * * 1-5 /usr/local/bin/daily_report
0 9 * * 1-5 mutt -s "Checking in" developer@example.com % Hi there, just checking in.
```

* * * * * <perintah> permenit
*/30 * * * * <perintah> per 30 menit

0 * * * * <perintah> akan jalan pada menit ke 0 yang artinya 1 jam

0 15 * * * <perintah> tiap hari jam 15
*/10 15 * * 1 /path/to/script.sh => tiap hari senin jam 15 dan berulang setiap 10 menit sekali

## systemd timer
```
...output omitted...
[Unit]
Description=Run system activity accounting tool every 10 minutes

[Timer]
OnCalendar=*:00/10

[Install]
WantedBy=sysstat.service
```

systemctl daemon-reload
systemctl enable --now <unitname>.timer

/etc/cron.daily
/etc/cron.week

systemctl cat systemd-tmpfiles-clean.timer

##
cp /usr/lib/tmpfiles.d/tmp.conf /etc/tmpfiles.d/tmp.conf
vim
```
q /tmp 1777 root root 5d
```
systemd-tmpfiles --clean /etc/tmpfiles.d/tmp

vim /etc/tmpfiles.d/momentary.conf
```
d /run/momentary 0700 root root 30s
```

systemd-tmpfiles --create /etc/tmpfiles.d/momentary.conf 
ls -ld /run/momentary/
touch /run/momentary
systemd-tmpfiles --clean /etc/tmpfiles.d/momentary.conf 

# log system
```
Berkas log	Jenis pesan yang disimpan
/var/log/messages	Sebagian besar pesan syslog dicatat di sini. Pengecualian mencakup pesan tentang autentikasi dan pemrosesan email, eksekusi pekerjaan terjadwal, dan pesan terkait debugging murni.
/var/log/secure	Pesan syslog tentang peristiwa keamanan dan autentikasi.
/var/log/maillog	Pesan syslog tentang server email.
/var/log/cron	Pesan syslog tentang eksekusi pekerjaan terjadwal.
/var/log/boot.log	Pesan konsol non-syslog tentang startup sistem.
```

```
Code	Facility	Facility description
0	kern	Kernel messages
1	user	User-level messages
2	mail	Mail system messages
3	daemon	System daemon messages
4	auth	Authentication and security messages
5	syslog	Internal syslog messages
6	lpr	Printer messages
7	news	Network news messages
8	uucp	UUCP protocol messages
9	cron	Clock daemon messages
10	authpriv	Non-system authorization messages
11	ftp	FTP protocol messages
16-23	local0 to local7	Custom local messages

Code	Priority	Priority description
0	emerg	System is unusable
1	alert	Action must be taken immediately
2	crit	Critical condition
3	err	Non-critical error condition
4	warning	Warning condition
5	notice	Normal but significant event
6	info	Informational event
7	debug	Debugging-level message
```

/etc/ryslog.conf
```
#### RULES ####

# Log all kernel messages to the console.
# Logging much else clutters up the screen.
#kern.*                                                 /dev/console

# Log anything (except mail) of level info or higher.
# Don't log private authentication messages!
*.info;mail.none;authpriv.none;cron.none                /var/log/messages

# The authpriv file has restricted access.
authpriv.*                                              /var/log/secure

# Log all the mail messages in one place.
mail.*                                                  -/var/log/maillog


# Log cron stuff
cron.*                                                  /var/log/cron

# Everybody gets emergency messages
.emerg                                                 :omusrmsg:

# Save news errors of level crit and higher in a special file.
uucp,news.crit                                          /var/log/spooler

# Save boot messages also to boot.log
local7.*                                                /var/log/boot.log
```

send message
logger -p local7.notice "Log entry created on host"

##
vim /etc/rsyslog.d/debug.conf
```
*.debug /var/log/messages-debug
```

systemctl restart rsyslog
logger -p user.debug "Debug Message Test"

##
journalctl
journalctl -n 5 #5 baris
journalctl -f #10 baris tail
journalctl -p err #periority err
journalctl -u sshd.service #units
journalctl --since today #sejak today
journalctl --since "2022-03-11 20:30" --until "2022-03-14 10:00"
journalctl --since "-1 hour"
journalctl -o verbose

journalctl _SYSTEMD_UNIT=sshd.service _PID=2110
```
_COMM is the command name.
_EXE is the path to the executable file for the process.
_PID is the PID of the process.
_UID is the UID of the user that runs the process.
_SYSTEMD_UNIT is the systemd unit that started the process.
```

##
```
persistent: Stores journals in the /var/log/journal directory, which persists across reboots. If the /var/log/journal directory does not exist, then the systemd-journald service creates it.

volatile: Stores journals in the volatile /run/log/journal directory. Because the /run file system is temporary and exists only in the runtime memory, the data in it, including system journals, does not persist across a reboot.

auto: If the /var/log/journal directory exists, then the systemd-journald service uses persistent storage; otherwise it uses volatile storage. This action is the default if you do not set the Storage parameter.

none: Do not use any storage. The system drops all logs, but you can still forward the logs.
```

##
tzselect # update timezone

timedatectl list-timezones
timedatectl set-timezone America/Phoenix
timedatectl set-time 9:00:00
timedatectl set-ntp false #sync waktu
timedatectl
chronyc sources -v

# 