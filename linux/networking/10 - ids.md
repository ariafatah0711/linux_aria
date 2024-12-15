# ids
- snort 
- fail2 
- suricata

# suricata (centos)
##install packet
```bash
yum install epel-release
yum install jq cargo openssl-devel PyYAML lz-4devel gcc libpcap-devel pcre-devel pcre2-devel libyaml-devel file-devel zlib-devel jansson-devel nss-devel libcap-ng-devel libnet-devel tar make libnetfilter_queue_devel lua-devel
wget https://www.openinfosecfoundation.org/download/suricata-7.0.4.tar.gz
tar xvzf suricata.tar.gz
```

## installing
```bash
cd suricata
./configure --libdir=/usr/lib64 --prefix=/user --sysconfdir=/etc --localstatedir=/var --enable-nfqueue --enable-lua
sudo ldconfig # optional
make
make install-full
```

## configuration
```bash
suricata -v
# configuration
nano /etc/suricata/suricata.yaml

# check rule
cat /var/lib/suricta/rules/suricta.rules
```

## run
```bash
/usr/bin/suricata -c /etc/suricata/suricata.yaml -i enp0s3
tail -f /var/log/suricata/fast.log
# if people scan with nmap this log show
```

# snort (ubuntu)
## install
```bash
apt install snort
sudo ip link set enp0s3 promisc on
```

## configuration
- ```nano /etc/snort/snort.conf```
  - any ganti jadi ip_kita
- ```nano /etc/snort/rules/local.rules```
  ```bash
  alert icmp any any -> $HOME_NET any (msg:"Ping Detected!"; sid:100001; rev:1;)
  ```
- ```snort -q -l /var/log/snort -i enp0s3 -A console -c /etc/snort/snort.conf```
  - ```ls /var/log/snort```
- ```nano /etc/snort/snort.conf```
  ```bash
  include community.rules
  ```

## run snort
```bash
sudo snort -c /etc/snort/test_snort.conf -q -i ens34 -A full -A console -l /var/log/snort/exploitation

wheris snort
/etc/snort: /usr/sbin/snort: /usr/lib/snort: /usr/include/snort:

nano /etc/snort/snort.conf
# masukan ip kita enp0s3

sudo snort -T -i enps03 -c /etc/snort/snort.conf
# -T is used to open snort in test mode.
# -i is used to specify the network adapter in use.
# -c is used to denote the snort configuration file and where it’s located.
```