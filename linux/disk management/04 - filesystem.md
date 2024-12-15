# file system
## mkfs
### command
```bash
## format
mkfs.ext4 /dev/vdb1
mkfs.xfs /dev/vdc1

## show
lsblk
df -h
mount
blkid

## mount all
mount -av # all, verbose
```

# mounting
## temporery (sementara) => ketika di reboot akan hilang
```bash
## create dir
mkdir -p /home/disk-vdb1
mkdir -p /home/disk-vdb2

## mount
mount /dev/vdb1 /home/disk-vdb1

## umounting
umount /home/disk-vdb1
```

## persistance (permanent)
```bash
vi /etc/fstab

####
/dev/mapper/centos-root /                       xfs     defaults        0 0
UUID=d2401f06-03bd-4572-98ff-8180bae6a888 /boot                   xfs     defaults        0 0
/dev/mapper/centos-swap swap                    swap    defaults        0 0
/dev/sdc1               /home/disk-sdc1         ext4    defaults        0 0
/dev/sdd1               /home/disk-sdd1         xfs     defaults        0 0
####

# atau gunakan UUID
blki # show UUID

vi /etc/fstab
####
UUID=e2d53152-7f80-4840-a873-220bc9ea9f71       /home/disk-sdc1         ext4    defaults        0 0
####
```