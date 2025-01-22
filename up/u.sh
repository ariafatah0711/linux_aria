sudo yum remove haproxy
sudo rm -rf /etc/haproxy       # File konfigurasi utama
sudo rm -rf /var/lib/haproxy   # Data runtime
sudo rm -rf /var/log/haproxy   # Log

sudo yum remove named
sudo rm -rf /etc/named       # File konfigurasi utama
sudo rm -rf /etc/named.conf       # File konfigurasi utama
sudo rm -rf /etc/named.rfc1912.zones       # File konfigurasi utama
sudo rm -rf /var/lib/named   # Data runtime
sudo rm -rf /var/log/named   # Log

sudo yum clean all