# bind
yum install named
firewall-cmd --add-port={22/tcp,53/tcp,53/udp,80tcp,443/tcp,8080-8090/tcp} --permanent
firewall-cmd --add-service=dns --permanent
firewall-cmd --reload

systemctl enable --now named
vi /etc/named.conf
##
## listen-on port 53 { 127.0.0.1; 11.11.11.1; };
## ---
## allow-query     { localhost; 0.0.0.0/0; };
##

cd /var/named
cat >> /etc/named.rfc1912.zones << EOF
zone "ariafatah.id" IN {
        type master;
        file "db.forward";
        allow-update { none; };
};

zone "11.11.11.in-addr.arpa" IN {
        type master;
        file "db.reverse";
        allow-update { none; };
};
EOF

# 1
cat > db.forward << EOF 
$TTL 86400
@       IN      SOA     ns1.ariafatah.id.       admin.ariafatah.id (
                2010010101 ; Serial
                3600    ; Refresh
                1800    ; Retry
                604800  ; Expire
                86400 ); Minimum TTL

@       IN      NS      ns1.ariafatah.id.
@       IN      A       11.11.11.1
ns1     IN      A       11.11.11.1
www     IN      A       11.11.11.1
mail    IN      A       11.11.11.1
ftp     IN      A       11.11.11.1
ssh     IN      A       11.11.11.1
EOF
cat > db.reverse << EOF
$TTL 86400
@       IN      SOA     ns1.ariafatah.id.      admin.ariafatah.id. (
                2010010101 ; Serial
                3600    ; Refresh
                1800    ; Retry
                604800  ; Expire
                86400 ) ; Minimum TTL

@       IN      NS      ns1.ariafatah.id.
1       IN      PTR     ns1.ariafatah.id.
EOF

# 2
cat > db.forward << EOF 
$TTL 1D
@       IN SOA  ariafatah.id. admin.ariafatah.id. (
                                        0       ; serial
                                        1D      ; refresh
                                        1H      ; retry
                                        1W      ; expire
                                        3H )    ; minimum
@       IN NS   ariafatah.id.
@       IN A    11.11.11.1
www     IN A    11.11.11.1
ftp     IN A    11.11.11.1
ssh     IN A    11.11.11.1
EOF

cat > db.reverse << EOF
$TTL 1D
@       IN SOA  ariafatah.id. admin.ariafatah.id. (
                                        0       ; serial
                                        1D      ; refresh
                                        1H      ; retry
                                        1W      ; expire
                                        3H )    ; minimum
@       IN NS   ariafatah.id.
@       IN PTR  ariafatah.id.
EOF

chown -R :named /var/named/

named-checkconf /etc/named.conf
named-checkconf /etc/named.rfc1912.zones
named-checkzone ariafatah.id db.forward
named-checkzone 11.11.11.1 db.reverse

systemctl start named
systemctl restart named

nslookup ariafatah.id
dig @11.11.11.1 ariafatah.id

## use
# wget https://raw.githubusercontent.com/ariafatah0711/linux_aria/refs/heads/main/up/a.sh | sh