## Instalasi dan Konfigurasi Instruction Detection System (IDS) pada web server
    - installasi dan konfigurasi IDS menggunakan snort ✓
        - instalasi paket yang dibutuhkan
            - yum install epel-release
            - yum install dnf
            - dnf install https://www.snort.org/downloads/snort/snort-2.9.20-1.centos.x86_64.rpm
            - dnf install libnetfilter_queue-devel
            - dnf install gcc-c++ git flex bison zlib zlib-devel pcre libnet tcpdump libnghttp2 wget xz-devel -y
            - dnf install pcre-devel
        - membuat directory snort dan instalasi snort
            - mkdir /root/snort
            - cd /root/snort
            - wget https://www.tcpdump.org/release/libpcap-1.10.4.tar.gz
            - tar xzvf libpcap-1.10.4.tar.gz
            - cd libcap-1.10.4
            - ./configure
            - make
            - make install
            - ldconfig
            - yum install libdnet
            - ln -s /usr/lib64/libdnet.so.1 /usr/lib64/libdnet.1
            - snort -v
        - nano /etc/snort/snort.conf
            - cd /etc/snort/rules
                ```
                perbaiki
                ```
            - touch white_list.rules black_list.rules local.rules
            - snort -T -c /etc/snort/snort.conf
                - nano /etc/snort/rules/local.rules
                    ```
                    alert icmp any any -> $HOME_NET any (msg:"ICMP Packets Found"; sid:1001; rev:001;)
                    alert tcp any any -> $HOME_NET any (msg:"TCP SYN flood attack Detected"; sid:1002; rev:001;)
                    alert udp any any -> $HOME_NET any (msg:"DOS tool UDP mode detected"; sid:1003; rev:001;)
                    ```
            - snort -A console -q -c /etc/snort/sql.conf

    - installasi dan konfigurasi IDS menggunakan suricata ☓
        - 

## Penambahan / Aktifasi Rule SQL Injection / Blind SQL Injection, Brute Force Attack dan Cross Site Scripting
    - rule sql injection / blind sql injection (tapi gak tau bener atau gak configurasi rulenya) ✓
        - nano /etc/snort/rules/sql.rules
            ```
            alert tcp any any -> any 80 (msg: "AND SQL Injection Detected"; content: "and" ; nocase; sid:100000060; )
            alert tcp any any -> any 80 (msg: "OR SQL Injection Detected"; content: "or" ; nocase; sid:100000061; )
            alert tcp any any -> any 80 (msg: "Order by SQL Injection"; content: "order" ; sid:1000005; )
            alert tcp any any -> any 80 (msg: "UNION SELECT SQL Injection"; content: "union" ; sid:1000006; )
            ```
    - Brute Force Attack (tapi gak tau bener atau gak configurasi rulenya) ✓
        - nano /etc/snort/rules/brute.rules
            ```
            alert tcp any any -> $HOME_NET 22 (msg:"SSH Brute Force Attempt";flow:established,to_server;content:"SSH";nocase;offset:0; depth:4;detection_filter:track by_src, count 2, seconds 2;sid:2005; rev:1;)
            alert tcp $EXTERNAL_NET any -> $HOME_NET 22 (msg:"Possible SSH brute forcing!"; flags: S+; threshold: type both, track by_src, count 5, seconds 30; sid:10000001; rev: 1;)
            ```
    - Cross Site Scripting (tapi gak tau bener atau gak configurasi rulenya) ✓
        - nano /etc/snort/rules/xss.rules
            ```
            alert tcp $EXTERNAL_NET any -> $HOME_NET any (msg:"XSS attempt: script injection detected "; flow:to_server,established; content:"Alert(%22XSS_BY_C37HUN%22)"; classtype:attempted-admin; sid:1000001;)
            alert tcp $EXTERNAL_NET any -> $HOME_NET any (msg:"XSS attempt: script injection detected "; flow:to_server,established; content:"Alert%281%29"; classtype:attempted-admin; sid:1000002;)
            alert tcp $EXTERNAL_NET any -> $HOME_NET any (msg:"XSS attempt: script injection detected "; flow:to_server,established; content:"Alert(document.cookie)"; classtype:attempted-admin; sid:1000003;)
            ```

## Ujicoba Terbalik Attack dan Defence
    - 