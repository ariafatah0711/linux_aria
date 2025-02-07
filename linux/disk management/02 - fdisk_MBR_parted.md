# fdisk
## command
```bash
fdisk /dev/vdb

###
m => help

n => add partition
- p => primary
- e => extended
    - partition number => partition ke berapa
    - First Sector => sektor awal tempat partisi baru dimulai. (default 2048)
        - biasanya dipake buat system
    - Last Sector => sektor akhir untuk menentukan ukuran partisi tersebut.
        - jika di fdisk kita gunakan +siza{K, M, G} ex: +10000K, +100M, + 1G

p => print partition
d => delete partition
w => write

# jika kita add partition lagi maka First Sector nya akan dimulai setelah Last Sector sebelumbya
```

# create MBR
## create primary and extended
```bash
fdisk /dev/vdb

### create primary
n
- p
-- partition    : 1
-- First Sector : 2048
-- last Sector  : +200M
n
- p
-- partition    : 2
-- First Sector : 411648
-- last Sector  : +200M
n
- p
-- partition    : 3
-- First Sector : 821248
-- last Sector  : +200M

# optimal partition disk
udevadm settle

### create extended
n
- e
-- First Sector : 1230848
-- Last Sector  : (default => karena kita tidak bisa membuat partition lagi sebaiknya di fullkan saja extendednya)

w
```

## create partition in extended
```sh
n
- (otomatis add logical 5)
-- First Sector : 1232896
-- Last Sector  : +200M

w
```

## show partition
```bash
lsblk
```

# parted
```bash
# virtual disk
dd if=/dev/zero of=virtualdisk.img bs=1M count=1000
sudo losetup loop0 virtualdisk.img

parted /dev/sda
help

# parted with v disk
parted /dev/loop0 (1000M)
mklabel msdos
mkpart
- Partition type?  primary/extended? primary
- File system type?  [ext2]? ext2
- Start? 1
- End? 1000

print
quit
```

## format
```bash
# format v disk
lsblk
# loop0             7:0    0 1000M  0 loop
# └─loop0p1       259:0    0  953M  0 loop

mkfs.ext2 /dev/loop0p1

# remove v disk
sudo losetup -d /dev/loop0
rm virtualdisk.img
```