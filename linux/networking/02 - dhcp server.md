# dhcp server
- DHCP kepanjangan dari Dynamic Host Configuration Protocol. 
- Pengertian DHCP adalah protokol yang di gunakan untuk menyediakan dan menyebarkan alamat IP secara otomatis ke perangkat lainnya yang terhubung dalam suatu jaringan.
- menggunakan port 67 dan 68

# isc-dhcp-server (ubuntu)
## install isc-dhcp-server
- ```apt install isc-dhcp-server```

## configuration isc-dhcp-server
- ```nmtui```
  - change interface enp0s3
  - ipv4 change to manual, and add ip 10.10.10.1/24

## config dhcp service and dhcp server
- ```vi /etc/systemd/system/dhcp.service```
  - ```vi /etc/default/isc-dhcp-server```
    - add interface in "INTERFACES=enp0s3"
- ```vi /etc/dhcp/dhcpd.conf```
  ```bash
  default-lease-time 24000;
  authoritative;
  max-lease-time 36000;

  subnet 192.168.1.0 netmask 255.255.255.0 {
          range 192.168.1.10 192.168.1.50;
          option routers                  192.168.1.1;
          option subnet-mask              255.255.255.0;
          option broadcast-address        192.168.1.255;
          option domain-name-servers      192.168.1.1;
          option domain-name              "ariafatah.com";
  }
  ```
- start isc-dhcp-server
  - ```systemctl start isc-dhcp-server```
  - ```systemctl status isc-dhcp-server```
  - if error ```journalctl _PID=num_error``` num_error in status dhcpd

# dhcp-server (redhat)
## install dhcp-server
- ```yum install dhcp-server```

## configuration dhcp
- ```nmtui```
  - change interface enp0s3
  - ipv4 change to manual, and add ip 10.10.10.1/24
- config dhcp service and dhcp server
  - ```cp /usr/lib/systemd/system/dhcpd.service /etc/systemd/system/```
  - ```vi /etc/systemd/system/dhcpd.service```
    - and add interface in end ExecStart ex "enpOs3"
    - ```systemctl daemon-reload``` to refresh ur interface
  - ```vi /etc/dhcp/dhcpd.conf```
    - and add configuration dhcp
      ```bash
      default-lease-time 24000;
      max-lease-time 36000;
      authoritative;

      subnet 10.10.10.0 netmask 255.255.255.0 {
              range 10.10.10.10 10.10.10.50;
              option routers                  10.10.10.1;
              option subnet-mask              255.255.255.0;
              option broadcast-address        10.10.10.255;
              option domain-name-servers      10.10.10.1;
              option domain-search            "ariafatah.com";
      }
      ```

- start dhcpd server
  - ```systemctl enable dhcpd```
  - ```systemctl start dhcpd```
  - ```systemctl status dhcpd```
  - if error ```journalctl _PID=num_error``` num_error in status dhcpd
  - or ```journalctl -xeu <name_service>```