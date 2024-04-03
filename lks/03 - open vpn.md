# open vpn

## user vpn
- openvpn namafile.opvn

## konfigurasi vpn
### install vpn
- yum install epel-release
- yum install openvpn easy-rsa
- mkdir /etc/openvpn/easy-rsa

- cd /usr/share/easy-rsa/3.0.3
- cp -rf * /etc/openvpn/easy-rsa/
- cd /etc/openvpn/easy-rsa/

- ./easyrsa init-pki
- ./easyrsa build-ca
- ./easyrsa gen-dh
- ./easyrsa gen-req node2 nopass
- ./easyrsa sign server node2

- mkdir /etc/openvpn/keys
- chmod 750 /etc/openvpn/keys/

- cp -a /etc/openvpn/easy-rsa/pki/ca.crt /etc/openvpn/keys/
- cp -a /etc/openvpn/easy-rsa/pki/dh.pem /etc/openvpn/keys/dh2048.pem
- cp -a /etc/openvpn/easy-rsa/pki/issued/node2.crt /etc/openvpn/keys/
- cp -a /etc/openvpn/easy-rsa/pki/private/node2.key /etc/openvpn/keys/

### Generate certificates for Client
- ./easyrsa gen-req deepak nopass
- ./easyrsa sign client deepak

- cp -a /etc/openvpn/easy-rsa/pki/issued/deepak.crt /etc/openvpn/keys/
- cp -a /etc/openvpn/easy-rsa/pki/private/deepak.key /etc/openvpn/keys/

- vim /etc/openvpn/server.conf
  ```
  port 1194
  proto udp
  dev tun
  comp-lzo
  management 127.0.0.1 1194
  keepalive 10 120
  persist-key
  persist-tun
  ifconfig-pool-persist ipp.txt
  status openvpn-status.log
  verb 3
  server 172.16.0.0 255.255.255.0
  push "route 192.168.0.0 255.255.255.0"
  push "dhcp-option DNS 192.168.0.5"
  push "dhcp-option DOMAIN example.com"
  ca /etc/openvpn/keys/ca.crt
  cert /etc/openvpn/keys/node2.crt
  key /etc/openvpn/keys/node2.key  # This file should be kept secret
  dh /etc/openvpn/keys/dh2048.pem
  ```

- systemctl stop firewalld
- systemctl disable firewalld
- systemctl -f enable openvpn@server
- systemctl start openvpn@server

### mengirim file ke client
- scp /etc/openvpn/keys/deepak.* node3:/etc/openvpn/
- scp /etc/openvpn/keys/deepak.* ariafatah@192.168.80.200:/home/ariafatah/lks/vpn
- scp /etc/openvpn/keys/ca.crt ariafatah@192.168.80.200:/home/ariafatah/lks/vpn

- client =>
  - chmod 700 deepkay.key
  - nano client.ovpn
    ```
    client
    dev tun
    proto udp
    remote 192.168.80.188 1194
    resolv-retry infinite
    nobind
    persist-key
    persist-tun
    ca ca.crt
    cert deepak.crt
    key deepak.key
    comp-lzo
    verb 3
    remote-cert-tls server
    ```
  - openvpn client.ovpn


##############################################################################################################
## konfigurasi vpn versi 2
- yum install epel-release
- yum -y install openvpn easy-rsa iptables-services wget
- wget -O /tmp/easyrsa https://github.com/OpenVPN/easy-rsa-old/archive/2.3.3.tar.gz

- cd /etc/openvpn
- tar xfz /tmp/easyrsa
- mkdir /etc/ovenpn/easy-rsa
- cp /etc/openvpn/easy-rsa-old-2.3.3/easy-rsa/2.0/* /etc/openvpn/easy-rsa
- sudo chown sammy /etc/openvpn/easy-rsa/
- cp -r /usr/share/doc/openvpn-2.4.12/sample/sample-config-files/server.conf .
- nano /etc/openvpn/server.conf
  ```
  push "redirect-gateway def1 bypass-dhcp"

  push "dhcp-option DNS 8.8.8.8"
  push "dhcp-option DNS 8.8.4.4"

  user nobody
  group nobody

  topology subnet

  remote-cert-eku "TLS Web Client Authentication"

  ;tls-auth ta.key 0
  tls-crypt myvpn.tlsauth
  ``` 
- sudo openvpn --genkey --secret /etc/openvpn/myvpn.tlsauth

- sudo mkdir /etc/openvpn/easy-rsa/keys
- nano vars
  ```
  KEY_CN: Di sini, masukkan domain atau subdomain yang ditetapkan ke server Anda.
  KEY_NAME: Anda harus masuk ke sini. Jika Anda memasukkan sesuatu yang lain.
  KEY_COUNTRY: Untuk variabel ini, masukkan singkatan dua huruf dari negara tempat tinggal Anda.
  KEY_PROVINCE: Ini harus berupa nama atau singkatan dari negara bagian tempat tinggal Anda.
  KEY_CITY: Di sini, masukkan nama kota tempat Anda tinggal.
  KEY_ORG: Ini harus nama organisasi atau perusahaan Anda.
  KEY_EMAIL: Masukkan alamat email yang ingin Anda sambungkan ke sertifikat keamanan.
  KEY_OU: Ini harus berupa nama "Unit Organisasi" tempat Anda berada, biasanya nama departemen atau tim Anda.
  ```

- source ./vars
- .clean-all
- .build-ca

- ./build-key-server server
- ./build-dh

- cd /etc/openvpn/easy-rsa/keys
- sudo cp dh2048.pem ca.crt server.crt server.key /etc/openvpn

- cd /etc/openvpn/easy-r
- ./build-key client

- cp /etc/openvpn/easy-rsa/openssl-1.0.0.cnf /etc/openvpn/easy-rsa/openssl.cnf

- firewall-cmd --get-active-zones

- sudo firewall-cmd --zone=trusted --permanent --add-service openvpn
- sudo firewall-cmd --reload
- sudo firewall-cmd --list-services --zone=trusted

- sudo firewall-cmd --permanent --add-masquerade
- sudo firewall-cmd --query-masquerade

- SHARK=$(ip route get 8.8.8.8 | awk 'NR==1 {print $(NF-2)}')
- firewall-cmd --permanent --direct --passthrough ipv4 -t nat -A POSTROUTING -s 10.8.0.0/24 -o $SHARK -j MASQUERADE
- firewall-cmd --reload

- nano /etc/sysctl.conf
  ```
  net.ipv4.ip_forward = 1
  ```
- systemctl restart network.service

- sudo systemctl -f enable openvpn@server.service
- sudo systemctl start openvpn@server.service

## membuat sertifikat file client
copy file ini ke client =>
- /etc/openvpn/easy-rsa/keys/ca.crt
- /etc/openvpn/easy-rsa/keys/client.crt
- /etc/openvpn/easy-rsa/keys/client.key
- /etc/openvpn/myvpn.tlsauth

- nano client.ovpn
  ```
  client
  tls-client
  ca /path/to/ca.crt
  cert /path/to/client.crt
  key /path/to/client.key
  tls-crypt /path/to/myvpn.tlsauth
  remote-cert-eku "TLS Web Client Authentication"
  proto udp
  remote your_server_ip 1194 udp
  dev tun
  topology subnet
  pull
  user nobody
  group nobody
  ```




















yum install epel-release
yum install openvpn easy-rsa

cd /usr/share/doc/openvpn-2.3/sample/sample-config-files/
ls -l
cp server.conf /etc/openvpn

cd /etc/openvpn
mkdir rsa
ls -l
cp -rf /usr/share/easy-rsa/2.0/* /etc/openvpn/rsa

vim /etc/openvpn/rsa/vars

source ./vars/
./clean-all
./build-ca
./build-key-server server
    y
    y
./build-dh

cd ../easy-rsa/
ls -l
cp ca.crt linuxhelp.1.crt linuxhelp.1.key dh2048.pom /etc/openvpn/
cd ..
ls -l

restorecon -Rv /etc/openvpn
vim server.com
    cert linuxhelp.lc.rt
    key linuxhelp.1.key

systemctl -f enable openvpn@server.service
systemctl start openvpn@server
systemctl status openvpn@server

## membuat sertifikat file client
cd easy-rsa
ls -l
./vars
.build-key myclient1
     isi kan datanya

cd keys
ls -l

copy file client ke vm client
cp ca.crt myclient1.crt myclient1.key /home/user1/Downloads/
cd /home/user1/Downloads
ls -l
chmod 644 myclient.key

rsync ca.ctrt myclient1.crt myclient.key user@192.168.1.1:/home/user1/openvpnclient

client =>
cd /home/user1/openvpnclient

nano myclient.ovpn
```
client
dev tun
proto udp
remote 10.10.1.1 1194
resolv-retry infinite
nobind
persist-key
persist-tun
comp-lzo
verb3
ca ca.crt
cert myclient1.crt
key myclient.key
aut-user-pass
```

server =>
nano /etc/sysctl.conf
    net.ipv4.ip_forward=1
sysctl -p

touch /etc/pam.d/openvpn
nano /etc/pam.d/openvpn

    auth    required    pam_unix.so     shadow  nodelay
    account required    pam_unix.so

vi /etc/openvpn/server.conf

    push"route 192.168.1.0 255.255.255.0"

    mute 20
    plugin /usr/lib64/openvpn/plugins/openvpn-plugin-auth-pas.so openvpn

dan hapus comment
    ;clienht-to-client
    client-to-client

systemctl restart openvpn@seerver.service

client =>
openvpn myclient.ovpn