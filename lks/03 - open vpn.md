# open vpn

## user vpn
openvpn namafile.opvn

## konfigurasi vpn
yum install epel-release
yum install openvpn easy-rsa

cd /usr/share/doc/openvpn-2.3/sample/sample-config-files/
ls -l
cp server.conf/etc/openvpn

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