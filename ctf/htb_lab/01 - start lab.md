# 1
virtual machine
terminal
openvpn
ping
nmap
telnet
root

telnet -l root ip_target
b40abdfe23665f766f9c61ecba8a4c19

# 2
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
get 