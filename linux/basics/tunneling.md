# tunelling

## ssh
### L remote local
```bash
ssh -L <remote_port>:<local_address>:<local_port> <user>@<server_tujuan_yang_akan_diambil_portnya> -p <port>
ssh -L 80:127.0.0.1:8080 192.168.1.1
```

### R remote jarak jauh
```bash
ssh -R <remote_port>:<local_address>:<local_port> <user>@<ip_address> -p <port>
ssh -R 80:127.0.0.1:8080 192.168.1.1
```

### -D dynamis ssh proxy
```bash
ssh -D <local_port> <username>@<ip_address>
ssh -D 1234 ariafatah@192.168.1.1

setting firefox lalu cari proxy dan ubah host socks dan masukan ip dan portnya
host proxt: 192.168.1.1    1234
```

## netsh (windows)
### port forwading with portproxy
```bash
# add
netsh interface portproxy add v4tov4 listenaddress=<IP_Windows> listenport=<Port_Windows> connectaddress=<IP_Tujuan> connectport=<Port_Tujuan>
netsh interface portproxy add v4tov4 listenaddress=127.0.0.1 listenport=8080 connectaddress=172.27.139.111 connectport=22
netsh interface portproxy add v4tov4 listenaddress=192.168.242.228 listenport=8081 connectaddress=172.27.139.111 connectport=8080

# list
netsh interface portproxy show all

# delete
netsh interface portproxy delete v4tov4 listenaddress=<IP_Windows> listenport=<Port_Windows>
netsh interface portproxy delete v4tov4 listenaddress=127.0.0.1 listenport=8080

# reset
netsh interface portproxy reset
```

### firewall
```bash
# add
netsh advfirewall firewall add rule name="Allow Port 8081" protocol=TCP dir=in localport=8081 action=allow
netsh advfirewall firewall add rule name="Allow Port Range 8081-8090" protocol=TCP dir=in localport=8081-8090 action=allow

# list
netsh advfirewall firewall show rule name=all
```

## ngrok