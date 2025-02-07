# net-tools
```bash
sudo apt install net-tools
```

### show ip
```bash
# show all
ip a
ip addr
## EthX (eth1, eth2, dan seterusnya) merupakan suatu network interface berjenis network card atau kartu jaringan, seperti ethernet card atau LAN card.

# show spesific interface
ip a show lo
ip addr show eth0
```

- pemberian nama interface
  - Skema 1: nama berdasarkan nomor indeks yang disediakan Firmware atau BIOS untuk perangkat On-Board (contoh: eno1). Skema ini akan digunakan jika informasi dari firmware atau BIOS dapat diterapkan dan tersedia. Jika tidak, diarahkan menggunakan skema 2.
  - Skema 2: nama berdasarkan nomor indeks yang disediakan Firmware atau BIOS untuk perangkat PCI Express Hotplug (contoh: ens1). Skema ini akan digunakan jika informasi dari firmware atau BIOS dapat diterapkan dan tersedia. Jika tidak, diarahkan menggunakan skema 3.
  - Skema 3: nama berdasarkan lokasi fisik konektor perangkat keras (contoh: enp2s0). Skema ini akan diterapkan bila memungkinkan. Jika tidak, diarahkan skema 5.
  - Skema 4: nama berdasarkan MAC address dari network interface (contoh: enx78e7d1ea46da). Skema ini tidak digunakan secara default, tetapi tersedia jika user memilih.
  - Skema 5: skema penamaan kernel tradisional yang tidak dapat diprediksi. Skema ini akan digunakan jika semua metode lain gagal (contoh: eth0).

### routing
```bash
# show route
ip route
ip -6 route
```

### netstat lsof
```bash

netstat -tulpn
kill -9 <pid>

lsof -i tcp:80
kill -9 <pid>
```

---
## Konfigurasi Jaringan Sementara
```bash
# sementara (akan kemabli normal ketika di reboot)
sudo ip addr add 192.168.1.212/24 dev eth0
sudo ip route add default via 192.168.1.1

echo 8.8.8.8 > /etc/resolv.conf

# remove konfigurasi jaringan sementara
sudo ip addr flush eth0
```

## Konfigurasi Jaringan Permanen
### netplan
```bash
vi /etc/netplan/01-network-manager-all.yaml
# dhcp
network:
 version: 2
  renderer: networkd
  ethernets:
    eth0:
      dhcp4: true

# static
network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:
      addresses:
        - 192.168.1.66/24
      gateway4: 192.168.1.1
      nameservers:
          addresses: [8.8.8.8, 8.8.4.4]

# apply configuration
sudo netplan apply
```

### nmtui

### NetworkManager