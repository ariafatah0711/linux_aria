# swap
## recomended
```
- < 2gb => 2 x amount of ram
- 2gb - 8gb => sama kaya ram yang digunakan
- 8gb - 64gb => at least 4gb
- > 64gb => at least 4gb
```

- untuk swap sendiri tidak semua nya harus dipakai
  - beberapa seperti kubernetes tidak boleh menggunakan swap

# swap partition
- swap yang menggunakan partition

## command
```bash
free -h
blkid
```

## fdisk
```bash
# create partition
fdisk /dev/vdb

n
- p,default,default
p
# (default 83)

### change id 
t => type change
- l => list
-- swap is 82
- 82

### format with mkswap
partprobe # ketika partitionya gak muncul setelah di create
mkswap /dev/vdb1
```bash

## add swap partition
### temporery
- swapon /dev/vdb1

### persistance
- vi /etc/fstab
  ```bash
  /dev/sdc2               swap                    swap    defaults        0 0
  ```

## remove swap
```bash
swapoff /dev/sdc2
# dont forget remove the /etc/fstab
```

# file
- swap partition by file

## mkswap
```bash
mkswap /dev/sdb1
swapon /dev/sdb1

swapoff /dev/sdb1
```

## command
```bash
dd if=/dev/zero of=/swapfile bs=1024 count=65536
mkswap /swapfile
chmod 0600 /swapfile

swapon /swapfile
### OR
vi /etc/fstab
######
/swapfile none swap defaults 0 0
or
/swapfile swap swap defaults 0 0

free -h
lsblk
######
```

- dd => create file
- if => input
- of => output
- bs =>
- count => ukuran