# dns server :53

DNS server adalah server yang digunakan sebagai penerjemah IP Addressmenjadi nama host agar lebih efisien dan mudah diingat

## ubuntu
- install bind9
  - ```apt install bind9```

- configuration bind9
  - go to bind config```cd /etc/bind/```
  - make backup conf```cp named.conf.local named.conf.local.old```
  - ```nano named.conf.local```
    ```
    zone "ariafatah.com" {
        type master;
        file "/etc/bind/db.forward";
    };

    zone "1.1.168.192.in-addr.arpa" {
        type master;
        file "/etc/bind/db.reverse";
    };
    ```
  - make file forward(mengaggabungkan)
    - ```cp db.local db.forward```
    - ```nano db.forward```
      ```
      $TTL    604800
      @       IN      SOA     ariafatah.com. root.ariafatah.com. (
                                  2         ; Serial
                              604800         ; Refresh
                              86400         ; Retry
                              2419200         ; Expire
                              604800 )       ; Negative Cache TTL
      ;

      @       IN      NS      ariafatah.com.
      @       IN      A       192.168.1.1
      www     IN      A       192.168.1.1
      mail    IN      A       192.168.1.1
      ftp     IN      A       192.168.1.1
      ```
  - make file reverse(mengubah)
    - ```cp db.255 db.reverse```
    - ```nano db.reverse```
      ```
      $TTL    604800
      @       IN      SOA     ariafatah.com. root.ariafatah.com. (
                                  1         ; Serial
                              604800         ; Refresh
                              86400         ; Retry
                              2419200         ; Expire
                              604800 )       ; Negative Cache TTL
      ;

      @       IN      NS      ariafatah.com.
      1       IN      PTR     ariafatah.com.
      ```
  - change interface port
    - ```nano /etc/resolv.conf```
      ```
      #nameserver 127.0.0.53
      #options edns0 trust-ad
      #search .

      nameserver 192.168.1.1
      ```

- start bind9
  - ```systemctl restart/status bind9```

## redhat
- install bind and backup conf
  - ```yum install bind```
  - ```vi /etc/named.conf /etc/named.conf.backup```
  - ```vi /etc/named.rfc1912.zones /etc/named.rfc1912.zones.backup```

- firewall port 53
  - ```firewall-cmd --permanent --add--port=53/tcp```
  - ```firewall-cmd --add-service=dns --permanent```
  - ```firewall-cmd --reload```

- config named.conf
  - ```vi /etc/named.conf```
    ```
    options {
        listen-on port 53 { 127.0.0.1; 11.11.11.1; };
        listen-on-v6 port 53 { ::1; };
        directory       "/var/named";
        dump-file       "/var/named/data/cache_dump.db";
        statistics-file "/var/named/data/named_stats.txt";
        memstatistics-file "/var/named/data/named_mem_stats.txt";
        secroots-file   "/var/named/data/named.secroots";
        recursing-file  "/var/named/data/named.recursing";
        allow-query     { localhost; any;};
        forwarders { 8.8.8.8; 8.8.4.4; };
    }
    ```
  - ```vi /etc/named.rfc1912.zones```
    ```
      zone "ariafatah.id" IN {
        type master;
        file "forward.zone";
        allow-update { none; };
      };

      zone "11.11.11.in-addr.arpa" IN {
              type master;
              file "reverse.zone";
              allow-update { none; };
      };
    ```

- config record addres: forward, and reverse
  - ```vi /var/named/forward.conf```
    ```
    $TTL 86400
    @       IN      SOA     ns1.ariafatah.id       admin.ariafatah.id (
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
    ```
  - ```vi /var/named/reverse.conf```
    ```
    $TTL 86400
    @       IN      SOA     ns1.ariafatah.id.      admin.ariafatah.id. (
                    2010010101 ; Serial
                    3600    ; Refresh
                    1800    ; Retry
                    604800  ; Expire
                    86400 ) ; Minimum TTL

    @       IN      NS      ns1.ariafatah.id.
    1       IN      PTR     ns1.ariafatah.id.
    ```
- enable server, and restart server 
  - ```systemctl enable named```
  - ```systemctl start named```
  - ```systemctl status named```