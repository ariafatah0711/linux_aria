Nama pengguna	Damianhall
Kata sandi	Logs321!
IP	10.10.7.204

cat Desktop/note.txt

```
Log Aplikasi: Pesan tentang aplikasi tertentu, termasuk status, kesalahan, peringatan, dll.
Log Audit: Kegiatan yang berkaitan dengan prosedur operasional penting untuk kepatuhan terhadap peraturan.
Log Keamanan: Peristiwa keamanan seperti login, perubahan izin, aktivitas firewall, dll.
Log Server: Berbagai log yang dihasilkan server, termasuk log sistem, peristiwa, kesalahan, dan akses.
Log Sistem: Aktivitas kernel, kesalahan sistem, urutan boot, dan status perangkat keras.
Log Jaringan: Lalu lintas jaringan, koneksi, dan peristiwa terkait jaringan lainnya.
Log Basis Data: Aktivitas dalam sistem database, seperti kueri dan pembaruan.
Log Server Web: Permintaan diproses oleh server web, termasuk URL, kode respons, dll.
```


This activity aims to introduce rsyslog and demonstrate how it can enhance the centralisation and management of logs. As part of the collection process, we will configure rsyslog to log all sshd messages to a specific file, such as /var/log/websrv-02/rsyslog_sshd.log. The steps below can be followed to achieve this:

Open a Terminal.
Ensure rsyslog is Installed: You can check if rsyslog is installed by running the command: sudo systemctl status rsyslog
Create a Configuration File: Use a text editor to create the following configuration file: gedit /etc/rsyslog.d/98-websrv-02-sshd.conf, nano /etc/rsyslog.d/98-websrv-02-sshd.conf, vi /etc/rsyslog.d/98-websrv-02-sshd.conf, or vim /etc/rsyslog.d/98-websrv-02-sshd.conf
Add the Configuration: Add the following lines in /etc/rsyslog.d/98-websrv-02-sshd.conf to direct the sshd messages to the specific log file:
$FileCreateMode 0644
:programname, isequal, "sshd" /var/log/websrv-02/rsyslog_sshd.log
Save and Close the Configuration File.
Restart rsyslog: Apply the changes by restarting rsyslog with the command: sudo systemctl restart rsyslog
Verify the Configuration: You can verify the configuration works by initiating an SSH connection to localhost via ssh localhost or by checking the log file after a minute or two.

cat /etc/rsyslog.d
cat /var/log/webserv/

sudo gedit /etc/logrotate.d/98-websrv-02_sshd.conf
```
/var/log/websrv-02/rsyslog_sshd.log {
    daily
    rotate 30
    compress
    lastaction
        DATE=$(date +"%Y-%m-%d")
        echo "$(date)" >> "/var/log/websrv-02/hashes_"$DATE"_rsyslog_sshd.txt"
        for i in $(seq 1 30); do
            FILE="/var/log/websrv-02/rsyslog_sshd.log.$i.gz"
            if [ -f "$FILE" ]; then
                HASH=$(/usr/bin/sha256sum "$FILE" | awk '{ print $1 }')
                echo "rsyslog_sshd.log.$i.gz "$HASH"" >> "/var/log/websrv-02/hashes_"$DATE"_rsyslog_sshd.txt"
            fi
        done
        systemctl restart rsyslog
    endscript
}
```

sudo logrotate -f /etc/logrotate.d/98-websrv-02_sshd.conf

cat /etc/logrotate.d/99-websrv_cron.conf
hourly
rotate 24

awk atau sed
grep
sort
uniq

open browser link and change path