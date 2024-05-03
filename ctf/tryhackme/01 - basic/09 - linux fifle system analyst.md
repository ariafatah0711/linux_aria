Username	investigator
Password	TryHackMe123!

export PATH=/mnt/usb/bin:/mnt/usb/sbin
export LD_LIBRARY_PATH=/mnt/usb/lib:/mnt/usb/lib64
check-env

THM{5514ec4f1ce82f63867806d3cd95dbd8}

find / -user bob -type f 2>/dev/null
cat /var/tmp/findme.txt
THM{0b1313afd2136ca0faafb2daa2b430f3}

exiftool /var/www/html/asstes/rev.elf
mime type: application/octet-stream

```
Ubah Timestamp (mtime): Stempel waktu ini mencerminkan kapan terakhir kali konten file diubah atau diubah. Setiap kali file ditulis atau diubah, mtime-nya diperbarui.
Ubah Timestamp (ctime): Stempel waktu ini menunjukkan kapan terakhir kali metadata file diubah. Metadata mencakup atribut seperti izin, kepemilikan, atau nama file itu sendiri. Setiap kali metadata yang terkait dengan file berubah, ctime-nya diperbarui.
Akses Timestamp (atime): Stempel waktu ini menunjukkan kapan terakhir kali file diakses atau dibaca. Setiap kali file dibuka, waktunya diperbarui.
```
bisa oake stat
stat /etc/hosts

##
cat /etc/passwd | cut -d: -f1,3 | grep ':0$'

getent group 1004
getent group admins

last
lastlog

THM{f38279ab9c6af1215815e5f7bbad891b}

grep -i "thm" -r bob
./.hidden34:THM{6ed90e00e4fb7945bead8cd59e9fcd7f}

##
strings example.elf
debsums -e -s


# suid
find / -perm -u=s -type f 2>/dev/null
# suid in .bash_history
sudo cat /home/jane/.bash_history | grep -B 2 -A 2 "python"

# 
md5sum /var/tmp/bash

/etc/sudoers
7063c3930affe123baecd3b340f1ad2c 

##
sudo chkrootkit
sudo rkhunter -c -sk
rkhunter --update

/var/tmp/findme.sh
Warning