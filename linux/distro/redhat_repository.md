# redhat repo
## install redhat with cli
- before install in option installasion click "TAB"
- and add in prompt "inst.text"

## mount package by iso
- click icon iso in bottom window virtual machine red hat
  - and click rhel9dvd or ur iso red hat
- make folder /mnt/disc/ ```mkdir -p /mnt/disc/```
- mount repository ```mount /dev/sr0 /mnt/disc/```
- make file repository conf with ```vi /etc/yum.repos.d/rhel9dvd.repo```
  ```bash
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
  
## mount package with server repo
- file repo with server repo
  ```bash
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

## rhsm, mematikan repo luar
- vi /etc/rhsm/rhsm.conf
  ```bash
  manage_repos = 0
  ```
    
## with dnf
```bash
dnf config-manager --add-repo "http://10.1.10.211/rhel9.4/BaseOS"
echo "gpgcheck=0" > /etc/yum.repos.d/10.1.10.211_rhel9.4_BaseOS.repo
```

## test repo
```bash
yum clean all
yum repolist
```