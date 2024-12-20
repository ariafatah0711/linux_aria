## Instalasi dan Konfigurasi OpenVPN pada VM Linux dengan Protokol Standar
    - installasi openvpn, dan membuat sertifikat server menggunakan easy-rsa 3.0 ✓
        - instalasi paket yang dibutuhkan
            - yum install epel-release
            - yum install openvpn easy-rsa
        - membuat directory easy-rsa pada /etc/openvpn, dan mengcopy template easy-rsa ke /etc/openvpn
            - mkdir /etc/openvpn/easy-rsa
            - cd /usr/share/easy-rsa/3.0.3
            - cp -rf * /etc/openvpn/easy-rsa/
        - membuat certificate untuk server
            - cd /etc/openvpn/easy-rsa
            - ./easyrsa init-pki
            - ./easyrsa build-ca
            - ./easyrsa gen-dh
            - ./easyrsa gen-req vpn-harbas nopass
            - ./easyrsa sign server vpn-harbas
        - membuat directory keys untuk tempat penyimpanan ca / certificate, dan meng copy certificate yang dibutuhkan
            - mkdir /etc/openvpn/keys
            - chmod 750 /etc/openvpn/keys/
            - cp -a /etc/openvpn/easy-rsa/pki/ca.crt /etc/openvpn/keys/
            - cp -a /etc/openvpn/easy-rsa/pki/dh.pem /etc/openvpn/keys/dh2048.pem
            - cp -a /etc/openvpn/easy-rsa/pki/issued/vpn-harbas.crt /etc/openvpn/keys/
            - cp -a /etc/openvpn/easy-rsa/pki/private/vpn-harbas.key /etc/openvpn/keys/
    - installasi openvpn, dan membuat sertifikat server menggunakan easy-rsa 2.0 ☓

## Membuat Sertifikat File Client
    - Membuat certificate File Client ✓
        - membuat certificate client
            - cd /etc/openvpn/easy-rsa
            - ./easyrsa gen-req client_window nopass
            - ./easyrsa sign client client_window
        - mengcopy certificate client ke keys
            - cp -a /etc/openvpn/easy-rsa/pki/issued/client_window.crt /etc/openvpn/client/
            - cp -a /etc/openvpn/easy-rsa/pki/private/client_window.key /etc/openvpn/client/
        - membuat konfigurasi server openvpn
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
verb 3
server 127.16.16.0 255.255.255.255
push "route 192.168.0.0 255.255.255.0"
push "dhcp-options DNS 192.168.0.5"
push "dhcp-options DOMAIN harbas.com"
ca /etc/openvpn/keys/ca.crt
cert /etc/openvpn/keys/vpn-harbas.crt
key /etc/openvpn/keys/vpn-harbas.key
dh /etc/openvpn/keys/dh2048.pem
                ```
        - konfigurasi firewall
            - firewall-cmd --permanent --add-service=openvpn
            - firewall-cmd --permanent --add-service=1194/udp
            - firewall-cmd --reload
        - membuat certificate client
            - nano client1.ovpn
                ```
client
dev tun
proto udp
remote 192.168.80.x 1194
resolv-retry infinite
nobind
persist-key
persist-tun
comp-lzo
verb 3
remote-cert-tls server
<ca>
--- isi dengan file.ca
</ca>
<cert>
--- isi dengan file.cert
</cert>
<key>
--- isi dengan file.key
</key>
                ```

## Konektifitas VPN Client dapat Berjalan di Background
    - uji coba vpn dengan file client pada windows menggunakan openvpn ✓
        - install openvpn in windows, add file vpn and run
    - uji coba vpn dengan file client pada linux menggunakan cli openvpn ✓
        - apt install openvpn
        - sudo openvpn client1.ovpn

## Uji Konektifitas OpenVP
- melakukan konektivitas dengan konfigurasi ip 10.10.10.0 ✓
- melakukan konektivitas dengan konfigurasi ip 127.16.16.0 (yang ini belum bisa ga tau kenapa kayaknya karena subnetmasknya salah) ☓