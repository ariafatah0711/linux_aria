# ajenti
- Ajenti adalah panel kontrol manajemen sistem berbasis web open-source untuk mengelola tugas-tugas administrasi sistem Linux jarak jauh dari browser web yang mirip dengan alat administrasi sistem Webmin.
- Ajenti adalah alat yang jauh lebih kuat dan ringan, yang menyediakan antarmuka web yang cepat dan responsif untuk mengelola pengaturan server kecil dan juga paling cocok untuk VPS dan server khusus.
- Ini telah dibangun dengan banyak plugin pra-dibuat untuk mengkonfigurasi dan memantau perangkat lunak dan layanan server seperti Apache, Cron, Sistem File, Firewall, MySQL, Nginx, Munin, Samba, FTP, Squid, dan banyak alat lain seperti File Manager, Code Editor untuk pengembang dan akses Terminal.
- <a href="https://www.tecmint.com/install-ajenti-control-panel-linux">install ajenti</a>

## ubuntu
```bash
curl https://raw.githubusercontent.com/ajenti/ajenti/master/scripts/install.sh | sudo bash -s -
systemctl restart ajenti
ufw allow 8000
localhost:8000
```

## redhat
```bash
dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf install -y gcc python3-devel python3-pip python3-pillow python3-augeas python3-dbus chrony openssl-devel redhat-lsb-core
curl https://raw.githubusercontent.com/ajenti/ajenti/master/scripts/install.sh | sudo bash -s -

sudo firewall-cmd --permanent --zone=public --add-port=8000/tcp  [On RHEL]
sudo firewall-cmd --reload
sudo systemctl stop ajenti
sudo systemctl start ajenti
sudo systemctl restart ajenti
sudo systemctl status ajenti

# localhost:8000
```

## uninstall
```bash
sudo systemctl stop ajenti.service
sudo systemctl disable ajenti.service
sudo systemctl daemon-reload
sudo rm -f /lib/systemd/system/ajenti.service
```

# redhat
```bash
dnf install cockpit
systemctl enable --now cockpit.socket
```