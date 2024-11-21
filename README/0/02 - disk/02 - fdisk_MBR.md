# fdisk
- command
```
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
```sh
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
```sh
lsblk
```