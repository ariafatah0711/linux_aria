# termux_aria

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

  - 
    - <a href="./README/1/01 - remote server.md">01 - remote server</a>
    - <a href="./README/1/02 - ftp server.md">02 - ftp server</a>
    -  <a href="./README/1/03 - file server.md">03 - file server</a>
  - server
    - <a href="./README/2/01 - dhcp server.md">01 - dhcp server</a>
    - <a href="./README/2/02 - web server.md">02 - web server</a>
    - <a href="./README/2/03 - dns server.md">03 - dns server</a>
    - <a href="./README/2/04 - database server.md">04 - database server</a>
    - <a href="./README/2/05 - mail server.md">05 - mail server</a>
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
</details>

<p id="download"></p>

## 🔨 download

1. Open a terminal or command prompt on your computer.
2. Navigate to the directory where you want to save this project.
3. Use the following command to download the project from the GitHub repository:
   ```sh
   git clone https://github.com/ariafatah0711/dicoding_3.git
   ```

<p id="related"></p>

## 📈 related
<a href="" alt="DEMO"><img src="https://img.shields.io/static/v1?style=for-the-badge&label=DEMO&message=WEB&color=000000"></a>

<p id="license"></p>

## ©️ license
<a href="https://github.com/ariafatah0711" alt="CREATED"><img src="https://img.shields.io/static/v1?style=for-the-badge&label=CREATED%20BY&message=ariafatah0711&color=000000"></a>
<a href="https://github.com/ariafatah0711/ariafatah0711/blob/main/LICENSE" alt="LICENSE"><img src="https://img.shields.io/static/v1?style=for-the-badge&label=LICENSE&message=MIT&color=000000"></a>
