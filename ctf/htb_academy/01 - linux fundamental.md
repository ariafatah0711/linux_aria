which <command>

find
```
Option	Description
-type f	Hereby, we define the type of the searched object. In this case, 'f' stands for 'file'.
-name *.conf	With '-name', we indicate the name of the file we are looking for. The asterisk (*) stands for 'all' files with the '.conf' extension.
-user root	This option filters all files whose owner is the root user.
-size +20k	We can then filter all the located files and specify that we only want to see the files that are larger than 20 KiB.
-newermt 2020-03-03	With this option, we set the date. Only files newer than the specified date will be presented.
-exec ls -al {} \;	This option executes the specified command, using the curly brackets as placeholders for each result. The backslash escapes the next character from being interpreted by the shell because otherwise, the semicolon would terminate the command and not reach the redirection.
2>/dev/null	This is a STDERR redirection to the 'null device', which we will come back to in the next section. This redirection ensures that no errors are displayed in the terminal. This redirection must not be an option of the 'find' command.
```

locate *.conf

apropos <comand>
man -k <command>

####################
more <nama_file>
less <nama_file>
head <nama_file>
tail <nama_file>

cat /etc/passwd | sort -u => (sort atau urutkan)
cat /etc/passwd | grep "/bin/bash" => (mengambil teks yang ada /bin/bash)
cat /etc/passwd | grep -v "false" => (mengambil teks tanpa teks false)
cat /etc/passwd | grep -v "false\|nologin" | cut -d":" -f1 => (mengambil kalimat pertama)
cat /etc/passwd | grep -v "false\|nologin" | tr ":" " " => (mengubah : menjadi spasi)
cat /etc/passwd | grep -v "false\|nologin" | tr ":" " " | column -t => (memebuat column agar lebih rapi)
cat /etc/passwd | grep -v "false\|nologin" | tr ":" " " | awk '{print $1, $NF}' => (melakukan print untuk kalimat 1 dan nf atau terakhir)
cat /etc/passwd | grep -v "false\|nologin" | tr ":" " " | awk '{print $1, $NF}' | sed 's/bin/HTB/g' => (mengubah teks bin menjadi HTB)
cat /etc/passwd | grep -v "false\|nologin" | tr ":" " " | awk '{print $1, $NF}' | wc -l => (menghitung ada berapa baris teks yang tampil)

##############################
grep -E "(my|false)" /etc/passwd => (menampilkan baris yang ada my atau false)
grep -E "(my.*false)" /etc/passwd => (menampilkan baris yang ada my dan false)


#################################
systemctl list-units --type=service => (menampilkan list unit type service)
journalctl -u ssh.service --no-pager => (menampilkan log error service)
kill -l => (list proses)
```
Signal	Description
1	SIGHUP - This is sent to a process when the terminal that controls it is closed.
2	SIGINT - Sent when a user presses [Ctrl] + C in the controlling terminal to interrupt a process.
3	SIGQUIT - Sent when a user presses [Ctrl] + D to quit.
9	SIGKILL - Immediately kill a process with no clean-up operations.
15	SIGTERM - Program termination.
19	SIGSTOP - Stop the program. It cannot be handled anymore.
20	SIGTSTP - Sent when a user presses [Ctrl] + Z to request for a service to suspend. The user can handle it afterward.
```
ps aux
kill 9 <PID> 
```
ariafatah@htb[/htb]$ ping -c 10 www.hackthebox.eu

ariafatah@htb[/htb]$ vim tmpfile
[Ctrl + Z]
[2]+  Stopped                 vim tmpfile
```
jobs => menampilkan proses latar belakang
bg => 
ping -c 10 www.hackthebox.eu &
jobs
fg 1 => untuk menampilkan proses yang ada pada list jobs

###############################
membuat crontab file yang akan menjalankan sebuah script secara otomatis
```
# System Update
* */6 * * /path/to/update_software.sh

# Execute scripts
0 0 1 * * /path/to/scripts/run_scripts.sh

# Cleanup DB
0 0 * * 0 /path/to/scripts/clean_database.sh

# Backups
0 0 * * 7 /path/to/scripts/backup.sh
```

################################
apt install rsync
## pencadangan
rsync -av /path/to/my_directory user@backup_server:/path/to/backup/directory
rsync -avz --backup --backup-dir=/path/to/backup/folder --delete /path/to/mydirectory user@backup_server:/path/to/backup/director

## pemulihan
rsync -av user@remote_host:/path/to/backup/directory /path/to/mydirectory

## agar lebih aman
rsync -avz -e ssh /path/to/mydirectory user@backup_server:/path/to/backup/director

## RSYNC_Backup.sh dan crontab
```
#!/bin/bash

rsync -avz -e ssh /path/to/mydirectory user@backup_server:/path/to/backup/directory
```

chmod +x RSYNC_Backup.sh
0 * * * * /path/to/RSYNC_Backup.sh

########################
fdisk -l => list disk
cat /etc/fstab => isi file ini adalah file yang menunjukan ketika kita boot untuk mounting
mount => menampilkan list yang sedang mounting

sudo mount /dev/sdb1 /mnt/usb
ls -al /mnt/usb
sudo umount /mnt/usb
ls -al /mnt/usb

lsof | grep cry0l1t3 => menampilkan system mount yang sedang berjalan
# karena ketika kita ingin mounting kita harus mengecek apakah sedang ada disk yang sedang di mount atau berjalan
# jika ada kita bisa unmount terlebih dahulu

Fstab File /etc/fstab
```
/dev/sda1 / ext4 defaults 0 0
/dev/sda2 /home ext4 defaults 0 0
/dev/sdb1 /mnt/usb ext4 rw,noauto,user 0 0
192.168.1.100:/nfs /mnt/nfs nfs defaults 0 0
``

######################
log kernel => /var/log/kern.log
log system => /var/log/syslog
log authentication => /var/log/auth.log
Application logs =>  
    /var/log/apache2/error.log
    /var/log/mysql/error.log

Access Log Entry
```
Service	Description
Apache	Access logs are stored in the /var/log/apache2/access.log file (or similar, depending on the distribution).
Nginx	Access logs are stored in the /var/log/nginx/access.log file (or similar).
OpenSSH	Access logs are stored in the /var/log/auth.log file on Ubuntu and in /var/log/secure on CentOS/RHEL.
MySQL	Access logs are stored in the /var/log/mysql/mysql.log file.
PostgreSQL	Access logs are stored in the /var/log/postgresql/postgresql-version-main.log file.
Systemd	Access logs are stored in the /var/log/journal/ directory.
```

Security logs
```
/var/log/ufw.log
/var/log/fail2ban.log
```


#################
uname -a
showrev -a