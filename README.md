# linux_aria

My file bash, and configurate for linux

<p align="center">
  <a href="#introduction">introduction</a> •
  <a href="#table-of-contents">table of contents</a> •
  <a href="#download">Download</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

<p id="introduction"></p>

## 🚀 introduction
this is my linux conf, and my file for run linux

<p align="left"> <a href="#">
  <img alt='Bash' src='https://img.shields.io/badge/-Bash-4EAA25?style=flat-square&logo=gnu-bash&logoColor=white'>
  <img alt="linux" src="https://img.shields.io/badge/-Linux-FCC624?style=flat-square&logo=linux&logoColor=black" />
  </a>
</p>

<p id="table-of-contents"></p>

## 📋 Table of Contents
<details open>
  <summary><b>Dokumentasi</b></summary>
  
  - linux
    - <a href="./README/0/01 - basic.md">01 - basic</a>

  - service
    - <a href="./README/1/01 - remote server.md">01 - remote server</a>
    - <a href="./README/1/02 - ftp server.md">02 - ftp server</a>
    -  <a href="./README/1/03 - file server.md">03 - file server</a>
  - server
    - <a href="./README/2/01 - dhcp server.md">01 - dhcp server</a>
    - <a href="./README/2/02 - web server.md">02 - web server</a>
    - <a href="./README/2/03 - dns server.md">03 - dns server</a>
    - <a href="./README/2/04 - database server.md">04 - database server</a>
    - <a href="./README/2/05 - mail server.md">05 - mail server</a>
  - more service / server
    - <a href="./README/3/01 - vnc server.md">01 - vnc server</a>
    - <a href="./README/3/02 - ajenti.md">02 - ajenti</a>
</details>

<details>
  <summary><b>lsb, hostnamectl</b></summary>

  - info
    ```bash
    lsb_release -a
    cat /etc/os-release

    lsb_release -d
    lsb_release -c
    lsb_release -r
    lsb_release -i

    uname -a
    uname -i

    cat /etc/issue
    ```
  - hostanme
    ```bash
    hostnamectl set-hostname <new_hostname>
    vi /etc/hostname
    ```
</details>

<details>
  <summary><b>ubuntu</b></summary>

  - install ubuntu
</details>

<details>
  <summary><b>redhat</b></summary>
  
  - install redhat with cli
    - before install in option installasion click "TAB"
    - and add in prompt "inst.text"

  - mount package
    - click icon iso in bottom window virtual machine red hat
      - and click rhel9dvd or ur iso red hat
    - make folder /mnt/disc/ ```mkdir -p /mnt/disc/```
    - mount repository ```mount /dev/sr0 /mnt/disc/```
    - make file repository conf with ```vi /etc/yum.repos.d/rhel9dvd.repo```
      ```
      [BaseOS]
      name=BaseOS Package Red Hat Enterprise Linux 9
      metadata_expire=-1
      gpgcheck=1
      enabled=1
      baseurl=file:///mnt/disc/BaseOS/
      gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release

      [AppStream]
      name=AppStream Packages Red Hat Enterprise Linux 9
      metadata_expire=-1
      gpgcheck=1
      enabled=1
      baseurl=file:///mnt/disc/AppStream/
      gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
      ```
    - change subscription manager conf with ```vi /etc/yum/pluginconf.d/subscription-manager.conf```
      - change enabled 1 to 0
    - ```yum clean all```
    - ```yum repolist```
  
  - mount package with server repo
    - file repo with server repo
      ```
      [BaseOS]
      name=BaseOS
      gpgcheck=0
      enabled=1
      baseurl=http://10.1.10.211/rhel9.4/BaseOS

      [AppStream]
      name=AppStream
      gpgcheck=0
      enabled=1
      baseurl=http://10.1.10.211/rhel9.4/AppStream  
      ```
    - rhsm
      - vi /etc/rhsm/rhsm.conf
        ```
        manage_repos = 0
        ```
    
    - with dnf
      ```
      dnf config-manager --add-repo "http://10.1.10.211/rhel9.4/BaseOS"
      echo "gpgcheck=0" > /etc/yum.repos.d/10.1.10.211_rhel9.4_BaseOS.repo
      ```
</details>

<details>
  <summary><b>debian</b></summary>
  - install
    - install with grup loader
  - mounting cdroom
    ```

    ```
</details>

<details>
  <summary><b>reinstall package with default configuration</b></summary>
  
  - if ur want reset configuration file to default u can
    ```
    sudo apt-get purge haproxy
    sudo apt-get install haproxy
    ```
</details>

<details>
  <summary><b>users</b></summary>

  - show users active
    ```
    w
    who
    users
    ps u
    ```
  - kill
    ```
    pkill -u <user>
    pkill -t <tty>

    pkill -KILL -t pts/1
    
    kill -SIGKILL <pid>
    ```
</details>

<details>
  <summary><b>package error</b></summary>

  - process id
    - ```ps aux | grep -i apt```
    - ```sudo kill <process_id>```
    - ```sudo kill -9 <process_id>```
    - ```sudo killall apt apt-get```

  - lsof dpkg lock
    - ```sudo lsof /var/lib/dpkg/lock```
    - ```sudo lsof /var/lib/apt/lists/lock```
    - ```sudo lsof /var/cache/apt/archives/lock```

    - ```sudo rm /var/lib/apt/lists/lock```
    - ```sudo rm /var/cache/apt/archives/lock```
    - ```sudo rm /var/lib/dpkg/lock```
    - ```sudo dpkg --configure -a```

  - dpkg front-end
    - ```sudo lsof /var/lib/dpkg/lock-frontend```
      ```
      lsof: WARNING: can't stat() fuse.gvfsd-fuse file system /run/user/1000/gvfs
      Output information may be incomplete.
      COMMAND    PID USER   FD   TYPE DEVICE SIZE/OFF   NODE NAME
      unattende 2823 root    5uW  REG    8,2        0 145221 /var/lib/dpkg/lock-frontend
      ```
    - ```sudo kill -9 PID```
    - ```sudo rm /var/lib/dpkg/lock-frontend```
    - ```sudo apt update```
</details>

<details>
  <summary><b>firewall-cmd</b></summary>

  - ```firewall-cmd --permanent --add-port=1000-1100/tcp```
  - ```firewall-cmd --permanent --add-port={80/tcp,443/tcp}```
  - ```firewall-cmd --permanent --add-port=21/tcp```
  - ```firewall-cmd --permanent --add-service=dns```
  - ```firewall-cmd --permanent --remove-port=21/tcp```
  - ```firewall-cmd --reload```
  - ``` firewall-cmd --list-ports```
</details>

<details>
  <summary><b>ufw</b></summary>

  - ```ufw status```
  - ```ufw enable```
  - ```ufw disable```
  - ```ufw allow 23```
</details>

<details>
  <summary><b>ip tables</b></summary>

  - "iptables -A INPUT -p tcp --dport 22 -j ACCEPT" # allow port 22
  - "sudo iptables -A INPUT -p tcp -m tcp --dport 80 -j ACCEPT"
  - command list
    ```
    -p or --protocol	Specifies the protocol to match (e.g. tcp, udp, icmp)
    --dport	Specifies the destination port to match
    --sport	Specifies the source port to match
    -s or --source	Specifies the source IP address to match
    -d or --destination	Specifies the destination IP address to match
    -m state	Matches the state of a connection (e.g. NEW, ESTABLISHED, RELATED)
    -m multiport	Matches multiple ports or port ranges
    -m tcp	Matches TCP packets and includes additional TCP-specific options
    -m udp	Matches UDP packets and includes additional UDP-specific options
    -m string	Matches packets that contain a specific string
    -m limit	Matches packets at a specified rate limit
    -m conntrack	Matches packets based on their connection tracking information
    -m mark	Matches packets based on their Netfilter mark value
    -m mac	Matches packets based on their MAC address
    -m iprange	Matches packets based on a range of IP addresse
    ```
</details>

<details>
  <summary><b>file permission</b></summary>

  - ```sudo chmod 777 file.txt```
    - chmod owner-group-other
      - 4 = read
      - 2 = write
      - 1 = execute
    - ls -a => all file
    - ls -l => list permission

  - ```sudo chown -R $USER:$USER /path/to/path```
  - ```sudo chmod -R 755 /path/to/path```
</details>

<details>
  <summary><b>upgrade disk in virtual box</b></summary>
  https://www.pragmaticlinux.com/2020/09/how-to-increase-the-disk-size-in-a-virtualbox-virtual-machine/

  - click tools > media , and chose u disk
  - chnage the memory to ur want
  - open machine
    - lsbk -p | grep "disk"
    - lsbk -p | grep "part"
  - if u have gprated u can install and add in ide partisi
  - pindahin alocated ke extend  dev2,
  - lalu dari situ tambahin yang dev5 yaitu sswap tapi yang free storage
  - lalu kecilini partisi extend dev2
  - lalu tambahin deh yang dev1
  - aply lalu aktifkan dev5 ke swap dan restart
</details>

<details>
  <summary><b>tunneling</b></summary>

  - L remote local
    - ssh -L <remote_port>:<local_address>:<local_port> <user>@<server_tujuan_yang_akan_diambil_portnya> -p <port>
    - ssh -L 80:127.0.0.1:8080 192.168.1.1

  - R reote jarak jauh
    - ssh -R <remote_port>:<local_address>:<local_port> <user>@<ip_address> -p <port>
    - ssh -R 80:127.0.0.1:8080 192.168.1.1
  
  -D dynamis ssh proxy
    - ssh -D <local_port> <username>@<ip_address>
    - ssh -D 1234 ariafatah@192.168.1.1

    setting firefox lalu cari proxy dan ubah host socks dan masukan ip dan portnya
    host proxt: 192.168.1.1    1234
</details>

<details>
  <summary><b>Service</b></summary>

  - /etc/init.d (ubuntu, debian)
    ```
    sudo /etc/init.d/<nama-service> status
    sudo /etc/init.d/<nama-service> restart
    sudo /etc/init.d/<nama-service> stop

    ls /etc/init.d
    ```
  - /etc/rc.d/init.d (cent, redhat)
    ```
    ls /etc/init.d
    ```
  - service
    ```
    service --status-all
    service <nama-service> status
    service <nama-service> start | restart | stop
    ```
  - systemctl
    ```
    systemctl daemon-reload
    systemctl restart <nama-service>

    sudo systemctl enable <nama-service>

    systemctl is-active <nama-service>
    systemctl list-unit-files --type=service | grep enabled
    ```
</details>

<details>
  <summary><b>net-tools</b></summary>

  - net-tools
    ```bash 
    netstat -tulpn
    kill -9 <pid>

    lsof -i tcp:80
    kill -9 <pid>
    ```
</details>


<details>
  <summary><b>netsh windows</b></summary>

  - port forwading with portproxy
    ```bash
    # add
    netsh interface portproxy add v4tov4 listenaddress=<IP_Windows> listenport=<Port_Windows> connectaddress=<IP_Tujuan> connectport=<Port_Tujuan>
    netsh interface portproxy add v4tov4 listenaddress=127.0.0.1 listenport=8080 connectaddress=172.27.139.111 connectport=22

    netsh interface portproxy add v4tov4 listenaddress=192.168.242.228 listenport=8081 connectaddress=172.27.139.111 connectport=8080

    # list
    netsh interface portproxy show all

    # delete
    netsh interface portproxy delete v4tov4 listenaddress=<IP_Windows> listenport=<Port_Windows>
    netsh interface portproxy delete v4tov4 listenaddress=127.0.0.1 listenport=8080

    # reset
    netsh interface portproxy reset
    ```
  - firewall
    ```bash
    # add
    netsh advfirewall firewall add rule name="Allow Port 8081" protocol=TCP dir=in localport=8081 action=allow
    
    netsh advfirewall firewall add rule name="Allow Port Range 8081-8090" protocol=TCP dir=in localport=8081-8090 action=allow


    # list
    netsh advfirewall firewall show rule name=all
    ```
</details>

<p id="download"></p>

## 🔨 download

1. Open a terminal or command prompt on your computer.
2. Navigate to the directory where you want to save this project.
3. Use the following command to download the project from the GitHub repository:
   ```sh
   git clone https://github.com/ariafatah0711/linux_aria.git
   ```

<p id="related"></p>

## 📈 related

<p id="license"></p>

## ©️ license
<a href="https://github.com/ariafatah0711" alt="CREATED"><img src="https://img.shields.io/static/v1?style=for-the-badge&label=CREATED%20BY&message=ariafatah0711&color=000000"></a>
<a href="https://github.com/ariafatah0711/ariafatah0711/blob/main/LICENSE" alt="LICENSE"><img src="https://img.shields.io/static/v1?style=for-the-badge&label=LICENSE&message=MIT&color=000000"></a>
