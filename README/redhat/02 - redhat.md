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

# archive transfer filie
```
-c or --create : Create an archive file.
-t or --list : List the contents of an archive.
-x or --extract : Extract an archive.

-v or --verbose : Show the files that are being archived or extracted during the tar operation.
-f or --file : Follow this option with the archive file name to create or open.
-p or --preserve-permissions : Preserve the original file permissions when extracting.
--xattrs : Enable extended attribute support, and store extended file attributes.
--selinux : Enable SELinux context support, and store SELinux file contexts.

-a or --auto-compress : Use the archive's suffix to determine the algorithm to use.
-z or --gzip : Use the gzip compression algorithm, which results in a .tar.gz suffix.
-j or --bzip2 : Use the bzip2 compression algorithm, which results in a .tar.bz2 suffix.
-J or --xz : Use the xz compression algorithm, which results in a .tar.xz suffix.
```

tar -cf mybackup.tar myapp1.log myapp2.log myapp3.log #memcompres 3file myapp menjadi mybackup.tar
tar -tf /root/etc.tar #extract
tar -xpf /home/user/myscripts.tar #untuk super user untuk menjaga permission

```
Kompresi GZIP adalah metode tercepat dan lebih awal, dan tersedia secara luas di seluruh platform.
Kompresi bzip2 membuat arsip yang lebih kecil tetapi kurang tersedia secara luas daripada .gzip
Kompresi XZ lebih baru, dan menawarkan rasio kompresi terbaik dari metode yang tersedia.

tar -czf /root/etcbackup.tar.gz /etc #biar jadi tar.gz
tar -cjf /root/logbackup.tar.bz2 /var/log
tar -cJf /root/sshconfig.tar.xz /etc/ssh

tar -tf /root/etcbackup.tar.gz # untuk extratnya tidak perlu pake z karena dia sudah otomatis
```

gzip -l file.tar.gz

##
sftp remoteuser@remotehost
sftp> help
sftp> pwd #pwd now
sftp> lpwd #local directory
sftp> lcd #change local directory

sftp> mkdir hostbackup
sftp> cd hostbackup
sftp> put /etc/hosts
Uploading /etc/hosts to /home/remoteuser/hostbackup/hosts
/etc/hosts                                 100%  227     0.2KB/s   00:00

put /etc/hosts #put file
put -r directory #untuk directory
get /etc/yum.conf #dapetin file

sftp remoteuser@remotehost:/home/remoteuser/remotefile

## rsync
```
-n test

-r, --recursive	Synchronize the whole directory tree recursively
-l, --links	Synchronize symbolic links
-p, --perms	Preserve permissions
-t, --times	Preserve time stamps
-g, --group	Preserve group ownership
-o, --owner	Preserve the owner of the files
-D, --devices	Preserve device files

-A to preserve Access Control Lists (ACLs)
-X to preserve SELinux file contexts
```

rsync -av /var/log hosta:/tmp #kirim
rsync -av hosta:/var/log /tmp

#yang membuat enak rsync jadi ketika kita sudah mengirim dan lalu kita ubah bbrp isi filenya saat dikirim kita tidak akan mengirim semuanya hanya mengirim file yang diubah itu aja

# tuned
```
[root@host ~]$ cat /etc/tuned/tuned-main.conf
...output omitted...
# Dynamicaly tune devices, if disabled only static tuning will be used.
dynamic_tuning = 1
...output omitted...
# Update interval for dynamic tunings (in seconds).
# It must be multiply of the sleep_interval.
update_interval = 10
...output omitted...

[root@host ~]$ dnf install tuned
...output omitted...
[root@host ~]$ systemctl enable --now tuned
Created symlink /etc/systemd/system/multi-user.target.wants/tuned.service → /usr/lib/systemd/system/tuned.service.
```

```
Tuned Profile	Purpose
balanced	Ideal for systems that require a compromise between power saving and performance.
powersave	Tunes the system for maximum power saving.
throughput-performance	Tunes the system for maximum throughput.
accelerator-performance	Tunes the same as throughput-performance, and also reduces the latency to less than 100 μs.
latency-performance	Ideal for server systems that require low latency at the expense of power consumption.
network-throughput	Derived from the throughput-performance profile. Additional network tuning parameters are applied for maximum network throughput.
network-latency	Derived from the latency-performance profile. Enables additional network tuning parameters to provide low network latency.
desktop	Derived from the balanced profile. Provides faster response of interactive applications.
hpc-compute	Derived from the latency-performance profile. Ideal for high-performance computing.
virtual-guest	Tunes the system for maximum performance if it runs on a virtual machine.
virtual-host	Tunes the system for maximum performance if it acts as a host for virtual machines.
intel-sst	Optimized for systems with Intel Speed Select Technology configurations. Use it as an overlay on other profiles.
optimize-serial-console	Increases responsiveness of the serial console. Use it as an overlay on other profiles.
```

cd /usr/lib/tuned
ls => disitu banyak configan defaultnya
=> lalu cat salah satu confignya
=> dan jika kita masukan sysctl maka kita bisa lihatr variable yang satt ini sedang dipakaiu apa confignya
sysctl vm.dirty_ratio

tuned-adm active #config tuned yang sedang aktif
tuned-adm list
tuned-adm profile_info network-latency
tuned-adm recommend

[root@host ~]$ tuned-adm profile throughput-performance #pindah profile
[root@host ~]$ tuned-adm active
Current active profile: throughput-performance

tuned-adm off
tuned-adm active

##
ps axo pid,comm,nice,cls --sort=-nice

```
[user@host ~]$ sleep 60 &
[1] 2667
[user@host ~]$ ps -o pid,comm,nice 2667
PID COMMAND          NI
2667 sleep            0

[user@host ~]$ nice sleep 60 &
[1] 2736
[user@host ~]$ ps -o pid,comm,nice 2736
PID COMMAND          NI
2736 sleep            10

[user@host ~]$ renice -n 19 2740
2740 (process ID) old priority 15, new priority 19
```

# selinux
/etc/selinux/config
```
Enforcing : SELinux enforces the loaded policies. This mode is the default in Red Hat Enterprise Linux.
Permissive : SELinux loads the policies and is active, but instead of enforcing access control rules, it logs access violations. This mode is helpful for testing and troubleshooting applications and rules.
Disabled : SELinux is turned off. SELinux violations are not denied or logged. Disabling SELinux is strongly discouraged.

[root@host ~]# getenforce
Enforcing
[root@host ~]# setenforce
usage:  setenforce [ Enforcing | Permissive | 1 | 0 ]
[root@host ~]# setenforce 0
[root@host ~]# getenforce
Permissive
[root@host ~]# setenforce Enforcing
[root@host ~]# getenforce
Enforcing
```

selinux_user      role  type  level file

```
ps axZ
systemctl start httpd
ps -ZC httpd
```

##
```
[root@host ~]# mkdir /virtual
[root@host ~]# ls -Zd /virtual
unconfined_u:object_r:default_t:s0 /virtual

[root@host ~]# chcon -t httpd_sys_content_t /virtual
[root@host ~]# ls -Zd /virtual
unconfined_u:object_r:httpd_sys_content_t:s0 /virtual

[root@host ~]# restorecon -v /virtual
Relabeled /virtual from unconfined_u:object_r:httpd_sys_content_t:s0 to unconfined_u:object_r:default_t:s0
[root@host ~]# ls -Zd /virtual
unconfined_u:object_r:default_t:s0 /virtual
```

semanage fcontext
Option	Description
-a, --add	Add a record of the specified object type.
-d, --delete	Delete a record of the specified object type.
-l, --list	List records of the specified object type.

semanage fcontext -a -t httpd_sys_content_t '/virtual(/.*)?' #mengubah semua file didalamnya juga
restorecon -RFvv /virtual
emanage fcontext -l -C #liat local customizations to the default policy.

##
getsebool -a
getsebool httpd_enable_homedirs

[root@host ~]# semanage boolean -l | grep httpd_enable_homedirs
httpd_enable_homedirs          (off   ,  off)  Allow httpd to enable homedirs
[root@host ~]# setsebool httpd_enable_homedirs on
[root@host ~]# semanage boolean -l | grep httpd_enable_homedirs
httpd_enable_homedirs          (on   ,  off)  Allow httpd to enable homedirs
[root@host ~]# getsebool httpd_enable_homedirs
httpd_enable_homedirs --> on

[root@host ~]# semanage boolean -l -C
setsebool -P httpd_enable_homedirs on
semanage boolean -l | grep httpd_enable_homedirs
semanage boolean -l -C

```
vim /etc/httpd/conf.d/userdir.conf
#didalama file itu terdapat sebuaah module user untuk membuat sebuah public html jadi usersiapaun bisa menambahkaan fiile pada public_html

<IfModule mod_userdir.c>
      UserDir public_html
</IfModule>
```

echo "This is student content on SERVERA." > public_html/index.html
chmod 711 ~
getsebool -a | grep home
httpd_enable_homedirs --> off
setsebool -P httpd_enable_homedirs on

#setelah di setting setsebool maka nantinya web serveraa memiliki web user student
http://servera/~student/index.html 

##
/var/log/audit/audit.log #log untuk selinux
sealert -a /var/log/audit/audit.log

```
[root@host ~]# touch /root/mypage
[root@host ~]# mv /root/mypage /var/www/html
[root@host ~]# systemctl start httpd
[root@host ~]# curl http://localhost/mypage
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>403 Forbidden</title>
</head><body>
<h1>Forbidden</h1>
<p>You don't have permission to access this resource.</p>
</body></html>

[root@host ~]# tail /var/log/messages
...output omitted...
Apr  6 08:44:19 host setroubleshoot[2547]: SELinux is preventing /usr/sbin/httpd from getattr access on the file /var/www/html/mypage. For complete SELinux messages run: sealert -l 95f41f98-6b56-45bc-95da-ce67ec9a9ab7
...output omitted...

sealert -l 95f41f98-6b56-45bc-95da-ce67ec9a9ab7

ausearch -m AVC -ts recent
```

# parted
```
s for sector
B for byte
MiB , GiB , or TiB (powers of 2)
MB , GB , or TB (powers of 10)
```

parted /dev/vda print
parted /dev/vda
parted /dev/vda unit s print

parted /dev/vdb mklabel msdos
parted /dev/vdb mklabel gpt

## mbr
```
parted /dev/vdb
(parted) mkpart
Partition type?  primary/extended? primary

File system type?  [ext2]? xfs

parted /dev/vdb help mkpart

Start? 2048s

End? 1000MB
(parted) quit
Information: You may need to update /etc/fstab.

[root@host ~]#
```

udevadm settle
parted /dev/vdb mkpart primary xfs 2048s 1000MB

## gpt
parted /dev/vdb mkpart userdata xfs 2048s 1000MB
udevadm settle

## Delete Partitions
parted /dev/vdb rm 1

## create file system
mkfs.xfs /dev/vdb1
mkfs.ext4 /dev/vdb1

## mount
mount /dev/vdb1 /mnt

cat /etc/fstab
systemctl daemon-reload
lsblk --fs

##
```
RAM	Ruang swap	Tukar ruang jika memungkinkan untuk hibernasi
2 GB atau kurang	RAM dua kali lipat	Tiga kali lipat RAM
Antara 2 GB dan 8 GB	Sama seperti RAM	RAM dua kali lipat
Antara 8 GB dan 64 GB	Setidaknya 4 GB	1.5 kali RAM
Lebih dari 64 GB	Setidaknya 4 GB	Hibernasi tidak dianjurkan
```

```
[root@host ~]# parted /dev/vdb
GNU Parted 3.4
Using /dev/vdb
Welcome to GNU Parted! Type 'help' to view a list of commands.
(parted) print
Model: Virtio Block Device (virtblk)
Disk /dev/vdb: 5369MB
Sector size (logical/physical): 512B/512B
Partition Table: gpt
Disk Flags:

Number  Start   End     Size    File system  Name  Flags
 1      1049kB  1001MB  1000MB               data

(parted) mkpart
Partition name?  []? swap1
File system type?  [ext2]? linux-swap
Start? 1001MB
End? 1257MB
(parted) print
Model: Virtio Block Device (virtblk)
Disk /dev/vdb: 5369MB
Sector size (logical/physical): 512B/512B
Partition Table: gpt
Disk Flags:

Number  Start   End     Size    File system     Name   Flags
 1      1049kB  1001MB  1000MB                  data
 2      1001MB  1257MB  256MB   linux-swap(v1)  swap1

(parted) quit
Information: You may need to update /etc/fstab.

[root@host ~]#
[root@host ~]# udevadm settle

parted /dev/vdb mkpart myswap linux-swap 1001MB 1501MB
```

```
mkswap /dev/vdb2

[root@host ~]# free
              total        used        free      shared  buff/cache   available
Mem:        1873036      134688     1536436       16748      201912     1576044
Swap:             0           0           0
[root@host ~]# swapon /dev/vdb2
[root@host ~]# free
              total        used        free      shared  buff/cache   available
Mem:        1873036      135044     1536040       16748      201952     1575680
Swap:        249852           0      249852
```

/etc/fstab
UUID=39e2667a-9458-42fe-9665-c5c854605881   swap   swap   defaults   0 0

# manage storage stack
```
Perangkat fisik
Volume logis menggunakan perangkat fisik untuk menyimpan data. Perangkat ini mungkin partisi disk, seluruh disk, array RAID, atau disk SAN. Anda harus menginisialisasi perangkat sebagai volume fisik LVM. Volume fisik LVM harus menggunakan seluruh perangkat fisik.

Volume Fisik (PV)
LVM menggunakan perangkat fisik yang mendasarinya sebagai volume fisik LVM. Alat LVM mengelompokkan volume fisik menjadi Luas Fisik (PE) untuk membentuk potongan kecil data yang bertindak sebagai blok penyimpanan terkecil pada PV.

Grup Volume (VG)
Grup volume adalah kumpulan penyimpanan yang dibuat dari satu atau lebih PV. Ini adalah ekuivalen fungsional dari seluruh disk dalam penyimpanan fisik. PV harus dialokasikan hanya untuk satu VG. LVM menetapkan ukuran PE secara otomatis, meskipun dimungkinkan untuk menentukannya. VG mungkin terdiri dari ruang yang tidak terpakai dan beberapa volume logis.

Volume Logis (LV)
Volume logis dibuat dari luas fisik bebas dalam VG, dan disediakan sebagai perangkat penyimpanan untuk aplikasi, pengguna, dan sistem operasi. LV adalah kumpulan Luas Logis (LE), yang memetakan ke luas fisik. Secara default, setiap LE dipetakan ke satu PE. Mengatur opsi LV tertentu mengubah pemetaan ini; misalnya, mirroring menyebabkan setiap LE memetakan ke dua PE.
```

- Prepare Physical Devices
```
[root@host ~]# parted /dev/vdb mklabel gpt mkpart primary 1MiB 769MiB
...output omitted...
[root@host ~]# parted /dev/vdb mkpart primary 770MiB 1026MiB
[root@host ~]# parted /dev/vdb set 1 lvm on
[root@host ~]# parted /dev/vdb set 2 lvm on
[root@host ~]# udevadm settle
```

- Create Physical Volumes
```
[root@host ~]# pvcreate /dev/vdb1 /dev/vdb2
```

- Create a Volume Group
```
vgcreate vg01 /dev/vdb1 /dev/vdb2
```

- Create a Logical Volume
```
[root@host ~]# lvcreate -n lv01 -L 300M vg01

lvcreate -n lv01 -L 128M vg01 : create an LV of size 128 MiB, rounded to the next PE.
lvcreate -n lv01 -l 32 vg01 : create an LV of size 32 PEs at 4 MiB each, total 128 MiB.
```

## vdo
dnf install vdo kmod-kvdo
lvcreate --type vdo --name vdo-lv01 --size 5G vg01
mkfs -t xfs /dev/vg01/lv01

To make the file system available persistently, add an entry to the /etc/fstab file.
```
/dev/vg01/lv01 /mnt/data xfs defaults 0 0
```

[root@host ~]# mount /mnt/data/

pvdisplay /dev/vdb1
vgdisplay vg01
lvdisplay /dev/vg01/lv01

### extend volume
```
[root@host ~]# parted /dev/vdb mkpart primary 1072MiB 1648MiB
...output omitted...
[root@host ~]# parted /dev/vdb set 3 lvm on
...output omitted...
[root@host ~]# udevadm settle
[root@host ~]# pvcreate /dev/vdb3
Physical volume "/dev/vdb3" successfully created.

[root@host ~]# vgextend vg01 /dev/vdb3

lvextend -L +500M /dev/vg01/lv01

xfs_growfs /mnt/data/

resize2fs /dev/vg01/lv01
```

### Extend Swap Space Logical Volumes
```
swapoff -v /dev/vg01/swap
lvextend -L +300M /dev/vg01/swap
mkswap /dev/vg01/swap
swapon /dev/vg01/swap

pvmove /dev/vdb3
vgreduce vg01 /dev/vdb3

umount /mnt/data
```

```
### Remove the Logical Volume
lvremove /dev/vg01/lv01

### Remove the Volume Group
vgremove vg01

### Remove the Physical Volumes
pvremove /dev/vdb1 /dev/vdb2
```

### soal 1
```
[root@servera ~]# parted /dev/vdb mklabel gpt

[root@servera ~]# parted /dev/vdb mkpart first 1MiB 258MiB
[root@servera ~]# parted /dev/vdb set 1 lvm on

[root@servera ~]# parted /dev/vdb mkpart second 258MiB 514MiB
[root@servera ~]# parted /dev/vdb set 2 lvm on
```

##
dnf install stratis-cli stratisd
systemctl enable --now stratisd
stratis pool create pool1 /dev/vdb
stratis pool list

stratis pool add-data pool1 /dev/vdc
stratis blockdev list pool1

stratis filesystem create pool1 fs1
stratis filesystem list

stratis filesystem snapshot pool1 fs1 snapshot1

lsblk --output=UUID /dev/stratis/pool1/fs1
UUID=c7b57190-8fba-463e-8ec8-29c80703d45e /dir1 xfs defaults,x-systemd.requires=stratisd.service 0 0

# networsk attact torage
```
Manually by using the mount command.
Persistently at boot by configuring entries in the /etc/fstab file.
On demand by configuring an automounter method.
```

dnf install nfs-utils
showmount --exports server

mkdir /mountpoint
mount server:/ /mountpoint
ls /mountpoint

mkdir /mountpoint
mount -t nfs -o rw,sync server:/export /mountpoint

vim /etc/fstab
```
server:/export  /mountpoint  nfs  rw  0 0
```
mount /mountpoint
lsof  /mountpoint

##
mount -t nfs servera.lab.example.com:/shares/public /public

vim /etc/fstab
```
serverb.lab.example.com:/shares/public  /public  nfs  rw,sync  0 0
```
##
```
sudo dnf install autofs nfs-utils
sudo vim /etc/auto.master.d/demo.autofs

/shares  /etc/auto.demo

[user@host ~]$ sudo vim /etc/auto.demo
work  -rw,sync  serverb:/shares/work

/etc/auto.demo

*  -rw,sync  serverb:/shares/&
/-  /etc/auto.direct
/mnt/docs  -rw,sync  serverb:/shares/docs

sudo systemctl enable --now autofs
```

## external
```
vim /etc/auto.master.d/direct.autofs
/-	/etc/auto.direct

vim /etc/auto.direct
/external	-rw,sync,fstype=nfs4	serverb.lab.example.com:/shares/direct/external
```

## internal
```
vim /etc/auto.master.d/indirect.autofs
/internal	/etc/auto.indirect

vim /etc/auto.indirect
*	-rw,sync,fstype=nfs4	serverb.lab.example.com:/shares/indirect/&
```

# boot
```
Target	Maksud
graphical.target	Target ini mendukung banyak pengguna, dan menyediakan login berbasis grafis dan teks.
multi-user.target	Target ini mendukung banyak pengguna, dan hanya menyediakan login berbasis teks.
rescue.target	Target ini menyediakan sistem pengguna tunggal untuk memungkinkan perbaikan sistem Anda.
emergency.target	Target ini memulai sistem paling minimal untuk memperbaiki sistem Anda ketika unit gagal memulai.rescue.target
```

systemctl list-dependencies graphical.target | grep target
systemctl list-units --type=target --all

systemctl isolate multi-user.target
systemctl cat graphical.target
AllowIsolate=yes
[user@host ~]$ systemctl cat cryptsetup.target
systemctl get-default
systemctl set-default graphical.target
systemctl get-default

systemctl set-default graphical.target
systemctl isolate graphical.target
systemctl set-default multi-user.target
systemctl isolate multi-user.target

boot looder edit
```
Ketika menu boot loader muncul, tekan sembarang tombol untuk mengganggu hitungan mundur (kecuali Enter, yang akan memulai boot normal).
Gunakan tombol kursor untuk menyorot entri boot loader default.
Tekan e untuk mengedit entri saat ini.
Dengan menggunakan tombol kursor, navigasikan ke baris yang dimulai dengan .linu
Tekan Akhiri untuk memindahkan kursor ke akhir baris.
Tambahkan ke akhir baris

video=640x480 or vga=ask

Tekan Ctrl + x untuk boot dengan menggunakan konfigurasi yang dimodifikasi.
```

## Reset the Root Password from the Boot Loader
rd.break #in eufi boot looder

mount -o remount,rw /sysroot
chroot /sysroot
passwd root
touch /.autorelabel

vim /etc/systemd/journald.conf
Storage=persistent

systemctl restart systemd-journald.service

journalctl -b -1 -p err

## fix error boot looder disk
```
[DEPEND] Dependency failed for /mnt/mountfolder
[DEPEND] Dependency failed for Local File Systems.
[DEPEND] Dependency failed for Mark need to relabel after reboot.
...output omitted...
[  OK  ] Started Emergency Shell.
[  OK  ] Reached target Emergency Mode.
...output omitted...
Give root password for maintenance
(or press Control-D to continue):
```

systemd.unit=emergency.target # add in eufi

mount
mount -o remount,rw /
mount --all
mount -a
systemctl reboot

# netwrok security
```
Predefined Zones

Zone name	Default configuration
trusted	Allow all incoming traffic.
home	Reject incoming traffic unless related to outgoing traffic or matching the ssh, mdns, ipp-client, samba-client, or dhcpv6-client predefined services.
internal	Reject incoming traffic unless related to outgoing traffic or matching the ssh, mdns, ipp-client, samba-client, or dhcpv6-client predefined services (same as the home zone to start with).
work	Reject incoming traffic unless related to outgoing traffic or matching the ssh, ipp-client, or dhcpv6-client predefined services.
public	Reject incoming traffic unless related to outgoing traffic or matching the ssh or dhcpv6-client predefined services. The default zone for newly added network interfaces.
external	Reject incoming traffic unless related to outgoing traffic or matching the ssh predefined service. Outgoing IPv4 traffic that is forwarded through this zone is masqueraded to appear that it originated from the IPv4 address of the outgoing network interface.
dmz	Reject incoming traffic unless related to outgoing traffic or matching the ssh predefined service.
block	Reject all incoming traffic unless related to outgoing traffic.
drop	Drop all incoming traffic unless related to outgoing traffic (do not even respond with ICMP errors).

Predefined Services

Service name	Configuration
ssh	Local SSH server. Traffic to 22/tcp.
dhcpv6-client	Local DHCPv6 client. Traffic to 546/udp on the fe80::/64 IPv6 network.
ipp-client	Local IPP printing. Traffic to 631/udp.
samba-client	Local Windows file and print sharing client. Traffic to 137/udp and 138/udp.
mdns	Multicast DNS (mDNS) local-link name resolution. Traffic to 5353/udp to the 224.0.0.251 (IPv4) or ff02::fb (IPv6) multicast addresses.
cockpit	Red Hat Enterprise Linux web-based interface for managing and monitoring your local and remote system. Traffic to 9090 port.
```

```
perintah firewall-cmd	Penjelasan
--get-default-zone	Mengkueri zona default saat ini.
--set-default-zone=ZONE	Tetapkan zona default. Zona default ini mengubah runtime dan konfigurasi permanen.
--get-zones	Cantumkan semua zona yang tersedia.
--get-active-zones	Cantumkan semua zona yang sedang digunakan (dengan antarmuka atau sumber yang terkait dengannya), bersama dengan antarmuka dan informasi sumbernya.
--add-source=CIDR [--zone=ZONE]	Rutekan semua lalu lintas dari alamat IP atau jaringan/netmask ke zona yang ditentukan. Jika tidak ada opsi yang disediakan, maka zona default digunakan.--zone=
--remove-source=CIDR [--zone=ZONE]	Hapus aturan yang merutekan semua lalu lintas dari zona yang berasal dari alamat IP atau jaringan. Jika tidak ada opsi yang disediakan, maka zona default digunakan.--zone=
--add-interface=INTERFACE [--﻿zone=ZONE]	Rutekan semua lalu lintas dari ke zona yang ditentukan. Jika tidak ada opsi yang disediakan, maka zona default digunakan.INTERFACE--zone=
--change-interface=INTERFACE [--﻿zone=ZONE]	Kaitkan antarmuka dengan ZONE alih-alih zonanya saat ini. Jika tidak ada opsi yang disediakan, maka zona default digunakan.--zone=
--list-all [--zone=ZONE]	Cantumkan semua antarmuka, sumber, layanan, dan port yang dikonfigurasi untuk . Jika tidak ada opsi yang disediakan, maka zona default digunakan.ZONE--zone=
--list-all-zones	Ambil semua informasi untuk semua zona (antarmuka, sumber, port, dan layanan).
--add-service=SERVICE [--﻿zone=ZONE]	Izinkan lalu lintas ke . Jika tidak ada opsi yang disediakan, maka zona default digunakan.SERVICE--zone=
--add-port=PORT/PROTOCOL [--﻿zone=ZONE]	Izinkan lalu lintas ke port. Jika tidak ada opsi yang disediakan, maka zona default digunakan.PORT/PROTOCOL--zone=
--remove-service=SERVICE [--﻿zone=ZONE]	Hapus dari daftar yang diizinkan untuk zona tersebut. Jika tidak ada opsi yang disediakan, maka zona default digunakan.SERVICE--zone=
--remove-port=PORT/PROTOCOL [--﻿zone=ZONE]	Hapus port dari daftar yang diizinkan untuk zona tersebut. Jika tidak ada opsi yang disediakan, maka zona default digunakan.PORT/PROTOCOL--zone=
--reload	Hapus konfigurasi runtime dan terapkan konfigurasi persisten.
```

```
firewall-cmd --get-services

[root@host ~]# firewall-cmd --set-default-zone=dmz
[root@host ~]# firewall-cmd --permanent --zone=internal \
--add-source=192.168.0.0/24
[root@host ~]# firewall-cmd --permanent --zone=internal --add-service=mysql
[root@host ~]# firewall-cmd --reload

[root@host ~]# firewall-cmd --permanent --zone=public \
--add-source=172.25.25.11/32
[root@host ~]# firewall-cmd --reload
```

## selinux ports
grep gopher /etc/services

semanage port -l | grep ftp
semanage port -l | grep ftp
semanage port -l | grep -w 70

semanage port -a -t port_label -p tcp|udp PORTNUMBER #add selinux
semanage port -a -t gopher_port_t -p tcp 71
semanage port -l -C

dnf -y install selinux-policy-doc
man -k _selinux

semanage port -d -t gopher_port_t -p tcp 71

```
semanage port -l -C
semanage port -l | grep http

http_cache_port_t              tcp      8080, 8118, 8123, 10001-10010
http_cache_port_t              udp      3130
http_port_t                    tcp      71, 80, 81, 443, 488, 8008, 8009, 8443, 9000
pegasus_http_port_t            tcp      5988
pegasus_https_port_t           tcp      5989
```

# installation
```
#version=RHEL9

# Define system bootloader options
bootloader --append="console=ttyS0 console=ttyS0,115200n8 no_timer_check net.ifnames=0  crashkernel=auto" --location=mbr --timeout=1 --boot-drive=vda

# Clear and partition disks
clearpart --all --initlabel
ignoredisk --only-use=vda
zerombr
part / --fstype="xfs" --ondisk=vda --size=10000

# Define installation options
text
repo --name="appstream" --baseurl="http://classroom.example.com/content/rhel9.0/x86_64/dvd/AppStream/"
url --url="http://classroom.example.com/content/rhel9.0/x86_64/dvd/"

# Configure keyboard and language settings
keyboard --vckeymap=us
lang en_US

# Set a root password, authselect profile, and selinux policy
rootpw --plaintext redhat
authselect select sssd
selinux --enforcing
firstboot --disable

# Enable and disable system services
services --disabled="kdump,rhsmcertd" --enabled="sshd,rngd,chronyd"

# Configure the system timezone and NTP server
timezone America/New_York --utc
timesource --ntp-server classroom.example.com
```

```
%packages

@core
chrony
cloud-init
dracut-config-generic
dracut-norescue
firewalld
grub2
kernel
rsync
tar
-plymouth

%end

%post

echo "This system was deployed using Kickstart on $(date)" > /etc/motd

%end
```

ksvalidator kickstart.cfg #test file
sudo cp ~/kickstart.cfg /var/www/html/ks-config

##
dnf group list | grep -i virt
dnf group info "Virtualization Host"
dnf group install "Virtualization Host"

virt-host-validate
virt-install --name demo --memory 4096 --vcpus 2 --disk size=40 --os-type linux --cdrom /root/rhel.iso

dnf install cockpit-machines
systemctl enable --now cockpit.socket

# container
podman login registry.lab.example.com
echo $PASSWORDVAR | podman login --username RH134 --password-stdin registry.access.redhat.com

podman login registry.access.redhat.com --get-login
podman login quay.io --get-login

cat /etc/containers/registries.conf

podman pull ubi
podman pull registry.access.redhat.com/ubi8/ubi:latest

```
[[registry]]
location = "registry.lab.example.com"
insecure = true
blocked = false
```

cat Containerfile

```
Command	Description
podman build	Build a container image with a container file.
podman run	Run a command in a new container.
podman images	List images in local storage.
podman ps	Print information about containers.
podman inspect	Display configuration of a container, image, volume, network, or pod.
podman pull	Download an image from a registry.
podman cp	Copy files or directories between a container and the local file system.
podman exec	Execute a command in a running container.
podman rm	Remove one or more containers.
podman rmi	Remove one or more locally stored images.
podman search	Search a registry for an image.
```

dnf install container-tools
dnf info container-tools
podman info
podman search python-38

skopeo inspect docker://registry.access.redhat.com/ubi8/python-38
podman pull registry.access.redhat.com/ubi8/python-38

podman images
cat Containerfile

podman build -t NAME:TAG DIR
podman build -t python36:1.0 .

podman images

podman inspect localhost/python36:1.0

podman create --name python36 dd6ca291f097
podman create --name python36 dd6ca291f097
podman ps
podman ps -a

podman start python36
podman ps

podman run -d --name python38 registry.access.redhat.com/ubi8/python-38 sleep infinity
podman ps

ps -ax
podman exec python38 ps -ax
podman exec python38 sh -c 'ps -ax > /tmp/process-data.log'
python3 --version
podman exec python36 python3 --version
podman exec python38 python3 --version

echo "echo 'hello world'" > /tmp/hello.sh

stat /tmp/hello.sh
podman exec python38 stat /tmp/hello.sh

podman cp /tmp/hello.sh python38:/tmp/hello.sh
podman exec python38 bash /tmp/hello.sh

podman rmi registry.access.redhat.com/ubi8/python-38
podman stop python38

podman rm python38
podman rmi registry.access.redhat.com/ubi8/python-38

##
podman run -d registry.lab.example.com/rhel8/mariadb-105 --name db01
podman ps -a
podman container logs db01
skopeo inspect docker://registry.lab.example.com/rhel8/mariadb-105

```
Variable	Description
MYSQL_USER	Username for the MySQL account to create
MYSQL_PASSWORD	Password for the user account
MYSQL_DATABASE	Database name
MYSQL_ROOT_PASSWORD	Password for the root user (optional)
```

podman run -d --name db01 \
-e MYSQL_USER=student \
-e MYSQL_PASSWORD=student \
-e MYSQL_DATABASE=dev_data \
-e MYSQL_ROOT_PASSWORD=redhat \
registry.lab.example.com/rhel8/mariadb-105

podman ps

podman unshare cat /proc/self/uid_map
podman unshare cat /proc/self/gid_map

podman exec -it db01 grep mysql /etc/passwd
mysql:x:27:27:MySQL Server:/var/lib/mysql:/sbin/nologin

mkdir /home/user/db_data
podman unshare chown 27:27 /home/user/db_data

podman run -d --name db01 \
-e MYSQL_USER=student \
-e MYSQL_PASSWORD=student \
-e MYSQL_DATABASE=dev_data \
-e MYSQL_ROOT_PASSWORD=redhat \
-v /home/user/db_data:/var/lib/mysql \
registry.lab.example.com/rhel8/mariadb-105

podman container logs db01

 podman run -d --name db01 \
-e MYSQL_USER=student \
-e MYSQL_PASSWORD=student \
-e MYSQL_DATABASE=dev_data \
-e MYSQL_ROOT_PASSWORD=redhat \
-v /home/user/db_data:/var/lib/mysql:Z \
registry.lab.example.com/rhel8/mariadb-105

ls -Z /home/user/
system_u:object_r:container_file_t:s0:c81,c1009 db_data

podman run -d --name db01 \
-e MYSQL_USER=student \
-e MYSQL_PASSWORD=student \
-e MYSQL_DATABASE=dev_data \
-e MYSQL_ROOT_PASSWORD=redhat \
-v /home/user/db_data:/var/lib/mysql:Z \
-p 13306:3306 \
registry.lab.example.com/rhel8/mariadb-105

[user@host ~]$ podman port -a
1c22fd905120	3306/tcp -> 0.0.0.0:13306
[user@host ~]$ podman port db01
3306/tcp -> 0.0.0.0:13306

podman info --format {{.Host.NetworkBackend}}

podman network create --gateway 10.87.0.1 \
--subnet 10.87.0.0/16 db_net

podman run -d --name db01 \
-e MYSQL_USER=student \
-e MYSQL_PASSWORD=student \
-e MYSQL_DATABASE=dev_data \
-e MYSQL_ROOT_PASSWORD=redhat \
-v /home/user/db_data:/var/lib/mysql:Z \
-p 13306:3306 \
--network db_net \
registry.lab.example.com/rhel8/mariadb-105
[user@host ~]$ podman run -d --name client01 \
--network db_net \
registry.lab.example.com/ubi8/ubi:latest \
sleep infinity

[user@host ~]$ podman exec -it db01 dnf install -y iputils iproute
[user@host ~]$ podman exec -it client01 dnf install -y iputils iproute

podman exec -it db01 ping -c3 client01
podman exec -it client01 ping -c3 db01

podman exec -it db01 ip a | grep 10.8
podman exec -it client01 ip a | grep 10.8

podman network create backend

[user@host ~]$ podman network connect backend db01
[user@host ~]$ podman network connect backend client01

podman inspect db01
podman inspect client01
podman exec -it client01 ping -c3 10.89.1.4 | grep 'packet loss'
podman exec -it client01 ping -c3 10.87.0.3 | grep 'packet loss'

##
podman run -d --name webserver1 -p 8080:8080 -v \
~/app-artifacts:/var/www/html:Z registry.access.redhat.com/ubi8/httpd-24

podman generate systemd --name webserver1

podman generate systemd --name webserver1 --new

podman generate systemd --name webserver1 --new --files

mkdir -p ~/.config/systemd/user/
mv container-webserver1.service ~/.config/systemd/user/

systemctl --user daemon-reload
[appdev-adm@host ~]$ systemctl --user start container-webserver1.service
[appdev-adm@host ~]$ systemctl --user status container-webserver1.service

[user@host ~]$ loginctl show-user appdev-adm
...output omitted...
Linger=no
[user@host ~]$ loginctl enable-linger
[user@host ~]$ loginctl show-user appdev-adm
...output omitted...
Linger=yes