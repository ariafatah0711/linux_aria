# ids

## installasi konfigurasi ids
- yum update
- yum install epel-release dnf
- dnf install https://www.snort.org/downloads/snort/snort-2.9.20-1.centos.x86_64.rpm

- dnf --enablerepo=powertools install libnetfilter_queue-devel
atau
- dnf install libnetfilter_queue-devel

- dnf install gcc-c++ git flex bison zlib zlib-devel pcre libnet tcpdump libnghttp2 wget xz-devel -y
- dnf install pcre-devel

- mkdir /root/snort && cd snorts
- wget https://www.tcpdump.org/release/libpcap-1.10.4.tar.gz
- tar xzvf libpcap-1.10.4.tar.gz
- cd libcap
- ./configure
- make
- make install

- ldconfig
- ln -s /usr/lib64/libdnet.so.1 /usr/lib64/libdnet.1
- yum install libdnet
- snort -v

#######################################################
- cd /etc/snort/rules
- touch white_list.rules black_list.rules local.rules

- vi /etc/snort/snort.conf
  ```
  step 1 tambahin network nya /24
    var white = /etc/snort/rules/
    var black = /etc/snort/rules/
  step 7 komenenin semua
  ```

#######################################################
- snort -T -c /etc/snort/snort.conf

- vi /etc/snort/rules/local.rules
  ```
  alert icmp any any -> $HOME_NET any (msg:"ICMP Packets Found"; sid:1001; rev:001;)
  alert tcp any any -> $HOME_NET any (msg:"TCP SYN flood attack Detected"; sid:1002; rev:001;)
  alert udp any any -> $HOME_NET any (msg:"DOS tool UDP mode detected"; sid:1003; rev:001;)
  ```

- systemctl daemon-reload
- systemctl start snort
- snort -A console -q -c /etc/snort/snort.conf

## penambahan aktifitas rules