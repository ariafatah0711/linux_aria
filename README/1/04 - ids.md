# ids

ids => snort fail2 serucuta

## centos
- install packet
  -  yum install epel-release
  - yum install jq cargo openssl-devel PyYAML lz-4devel gcc libpcap-devel pcre-devel pcre2-devel libyaml-devel file-devel zlib-devel jansson-devel nss-devel libcap-ng-devel libnet-devel tar make libnetfilter_queue_devel lua-devel
  - wget https://www.openinfosecfoundation.org/download/suricata-7.0.4.tar.gz
  - tar xvzf suricata.tar.gz
- installing
  - cd suricata
  - ./configure --libdir=/usr/lib64 --prefix=/user --sysconfdir=/etc --localstatedir=/var --enable-nfqueue --enable-lua
    - sudo ldconfig (optional)
  - make
  - make install-full
- suricata -v
  - edit rule in
    - nano /etc/suricata/suricata.yaml
  - liat rule
    - cat /var/lib/suricta/rules/suricta.rules
  - run: 
    - /usr/bin/suricata -c /etc/suricata/suricata.yaml -i enp0s3
    - tail -f /var/log/suricata/fast.log
      - if people scan with nmap this log show
    
## ubuntu
- apt install snort
- wheris snort
  - /etc/snort: /usr/sbin/snort: /usr/lib/snort: /usr/include/snort:
- nano /etc/snort/snort.conf
  - masukan ip kita enp0s3
-  sudo snort -T -i enps03 -c /etc/snort/snort.conf
  - -T is used to open snort in test mode.
  - -i is used to specify the network adapter in use.
  - -c is used to denote the snort configuration file and where it’s located.

