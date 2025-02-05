# make img disk virtual
```bash
df -h
dd if=/dev/zero of=virtualdisk.img bs=1M count=1000

ls -l
# -rw-rw-r--. 1 ariafatah ariafatah 1048576000 Feb  5 21:56 virtualdisk.img

losetup # check apakah ada loop device yang sedang digunakan
sudo losetup loop0 virtualdisk.img # daftar

losetup
# NAME       SIZELIMIT OFFSET AUTOCLEAR RO BACK-FILE
# /dev/loop0         0      0         0  0 /home/ariafatah/virtualdisk.img

lsblk
blkid
```