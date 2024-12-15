# briker
- login shell with cred root:Briker
- login web with cred Administrator:Briker

# remote ssh with port 10001
- network
  - ```vi /etc/network/interfaces```
    ```bash
    # dynamic
    auto eth0
    iface eth0 inet dhcp

    # static
    auto eth0
    iface eth0 inet static
        address 192.168.10.1
        netmask 255.255.255.0
        network 192.168.10.0
        broadcast 192.168.10.255
        gateway 192.168.10.1
        # dns 8.8.8.8
        dns-nameservers 127.0.0.1
        dns-search ippbx.briker.lan
        post-up iptables-restore < /etc/iptables.up.rules
    ```
  - restart
    ```bash
    /etc/init.d/networking restart
    service networking restart
    ```

- setup server
  - go to browser with ip pbx
    - login Administrator:Briker
  - ip pbx administrator > extensions
  - device generate submit
    - user extension: 001
    - display name  : aria
    - account code  : 001 <user-extension>
    - secret        : 123 <pass>
  - submit
  - apply configuration

- setup client
  - connect wifi
  - download zoiper
  - login with user_extension@ip_server
  - with password secret