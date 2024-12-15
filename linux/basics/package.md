# package
## reinstall package with default configuration
- if ur want reset configuration file to default u can
  ```
  sudo apt-get purge haproxy
  sudo apt-get install haproxy
  ```

# package error
## process id
```bash
ps aux | grep -i apt
sudo kill <process_id>
sudo kill -9 <process_id>
sudo killall apt apt-get
```

## lsof dpkg lock
```bash
sudo lsof /var/lib/dpkg/lock
sudo lsof /var/lib/apt/lists/lock
sudo lsof /var/cache/apt/archives/lock

sudo rm /var/lib/apt/lists/lock
sudo rm /var/cache/apt/archives/lock
sudo rm /var/lib/dpkg/lock
sudo dpkg --configure -a
```

## dpkg front-end
```bash
sudo lsof /var/lib/dpkg/lock-frontend
# lsof: WARNING: can't stat() fuse.gvfsd-fuse file system /run/user/1000/gvfs
# Output information may be incomplete.
# COMMAND    PID USER   FD   TYPE DEVICE SIZE/OFF   NODE NAME
# unattende 2823 root    5uW  REG    8,2        0 145221 /var/lib/dpkg/lock-frontend

sudo kill -9 PID
sudo rm /var/lib/dpkg/lock-frontend
sudo apt update
```