# enkripsi disk

## cryptsetup
### create partition
- lsblk
- fdisk /dev/sdb
  - Tekan O dan tekan Enter (membuat tabel partisi baru).
  - Tekan N dan tekan Enter (membuat partisi baru).
  - Tekan P dan tekan Enter (membuat partisi primer).
  - Kemudian tekan 1 dan tekan Enter (membuatnya sebagai partisi pertama).
  - Terakhir, tekan W (perintah ini akan menyimpan perubahan ke disk).

### encrypt the partition
- cryptsetup --verbose --verify-passphrase luksFormat /dev/sdb1 

- cyrptsetup luksOpen /dev/sdb1 sdb1
  - mkfs.ext4 /dev/mapper/sdb1
  - tune2fs -m 0 /dev/mapper/sdb1
  - mkdir -p /mnt/encrypted
- mount /dev/mapper/sdb1 /mnt/encrypted/
  - DIDALAM FOLDER INI BISA KITA TAMBAHKAN FILE, DLL
- umount /dev/mapper/sdb1
- cryptsetup luskClose sdb1

- cryptsetup luksOpen /dev/sdb1
  - mount /dev/mapper/sbd1 /mnt/encrypted
- cryptsetup luksClose sdb1

#################################################################################

- yum install cryptsetup
  - cryptsetup --version
- lsblk
  - cryptsetup luksFormat --type luks1 /dev/sdb1
  - cryptsetup -v luksOpen /dev/sdb1 my_drive
- ls -l /dev/mapper
  - cryptsetup akan membuat perangkat mapper bernama my_drive yang terletak di direktori /dev/mapper
- enkripsi
  - mkfs.vfat -F32 /dev/mapper/my_drive
  - mkdir -p /mnt/encrypted
  - mount /dev/mapper/my_drive /mnt/encrypted
  - lsblk | grep my_drive
- melepas
  - umount -R /dev/mapper/my_drive
  - cryptsetup luksClose my_drive

## veracrypt
- veracrypt --version
- veracrypt --text --create
  - Enter volume path: /dev/sdb1
  - Enter your user password or administrator password:
  - Encryption Algorithm:
    1) AES
    2) Serpent
    3) Twofish
    4) Camellia
    5) Kuznyechik
    6) AES(Twofish)
    7) AES(Twofish(Serpent))
    8) Camellia(Kuznyechik)
    9) Camellia(Serpent)
    10) Kuznyechik(AES)
    11) Kuznyechik(Serpent(Camellia))
    12) Kuznyechik(Twofish)
    13) Serpent(AES)
    14) Serpent(Twofish(AES))
    15) Twofish(Serpent)
    Select [1]:
  - Hash algorithm:
    1) SHA-512
    2) Whirlpool
    3) SHA-256
    4) Streebog
    Select [1]:
  - Filesystem:
    1) None
    2) FAT
    3) Linux Ext2
    4) Linux Ext3
    5) Linux Ext4
    6) NTFS
    7) exFAT
    8) Btrfs
    Select [2]:
  - keyfile, biarkan kosong dengan menekan Return
  - cat /dev/urandom | head -c320 | xclip -selection c
  - veracrypt /dev/sdb1 /mnt/my_drive
  - veracrypt --dismount /dev/sdb1