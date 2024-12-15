# gdisk
## command
```bash
gdisk /dev/vdc

###
? => help

n => add partition
- partition number (1-128) => partiton yang ke berapa
-- First Sector => sektor awal
-- Last Sector => sektor akhir untuk menentukan ukuran partisi tersebut
    - 200M, +200M, -200M / {+-}size{KMGTP}
-- Hex Code or GUID => type disk yang akan digunakan
--- L => show type disk

p => print partition
d => delete partition
w => write
```