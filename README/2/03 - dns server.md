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