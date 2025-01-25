read -p "masukan \$domain ex: ariafatah.id > " domain
read -p "masukan \$ip1 (wildcard 3) ex: 11.11.11, 10.168.192 > " ip1
read -p "masukan \$ip1 (ip: 1-255)  ex: 1, 2 > " ip2
ip=$ip1.$ip2

# bind
yum install bind bind-utils -y
firewall-cmd --add-port={22/tcp,53/tcp,53/udp,80tcp,443/tcp,8080-8090/tcp} --permanent
firewall-cmd --add-service=dns --permanent
firewall-cmd --reload

systemctl enable --now named
vi /etc/named.conf
## listen-on port 53 { 127.0.0.1; 11.11.11.1; };
## ---
## allow-query     { localhost; 0.0.0.0/0; };

cd /var/named
cat >> /etc/named.rfc1912.zones << EOF
zone "$domain" IN {
        type master;
        file "db.forward";
        allow-update { none; };
};

zone "$ip1.in-addr.arpa" IN {
        type master;
        file "db.reverse";
        allow-update { none; };
};
EOF

cat > db.forward << EOF 
\$TTL 1D
@       IN SOA  $domain. admin.$domain. (
                                        0       ; serial
                                        1D      ; refresh
                                        1H      ; retry
                                        1W      ; expire
                                        3H )    ; minimum
@       IN NS   $domain.
@       IN A    $ip
www     IN A    $ip
ftp     IN A    $ip
ssh     IN A    $ip
EOF

cat > db.reverse << EOF
\$TTL 1D
@       IN SOA  $domain. admin.$domain. (
                                        0       ; serial
                                        1D      ; refresh
                                        1H      ; retry
                                        1W      ; expire
                                        3H )    ; minimum
@       IN NS   $domain.
$ip2       IN PTR  $domain.
EOF

chown -R :named /var/named/

named-checkconf /etc/named.conf
named-checkconf /etc/named.rfc1912.zones
named-checkzone $domain db.forward
named-checkzone $ip.in-addr.arp db.reverse

systemctl start named
systemctl restart named

echo "nameserver 127.0.0.1" > /etc/resolv.conf

nslookup $domain
dig @11.11.11.1 $domain

systemctl restart NetworkManager