# podman
podman rm -f web1 web2

# haproxy
sudo yum remove haproxy -y
sudo rm -rf /etc/haproxy
sudo rm -rf /var/lib/haproxy
sudo rm -rf /var/log/haproxy

# bind
sudo yum remove bind bind-utils -y
sudo rm -rf /etc/named
sudo rm -rf /etc/named.conf
sudo rm -rf /etc/named.rfc1912.zones
sudo rm -rf /var/lib/named
sudo rm -rf /var/log/named

sudo yum clean all