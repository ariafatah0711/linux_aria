A. Konfigurasi dan Pengujian Hardening Document Host Information (Linux machines)
- membuat dokumen yang mencantumkan informasi mesin virtual ✓
    - nano info
        ```
        nama virtual machine		: centos 7
        alamat ip			: 192.168.80.x / 24
        alamat mac			: fe80::1a42:5e9f:95b:b4c1%7
        created user			: aria
        created date			: 04 - 04 - 2024
        asset number			: 1 (optional)
        ```
- selalu update pakeet secara teratur ✓
    - yum update
- menghapus banner yang biasanya digunakan untuk mencantumkan version service ☓
    - 

B. Konfigurasi dan Pengujian Hardening Hardisk Encription (Linux machines)
- membuat partisi menggunakan fdisk  ✓
    - fdisk /dev/sdb
        - m untuk help, o untuk empety disk, n new partisi (p primary, e extend), w untuk write, d untuk delete
    - mkfs.ext4 #ubah type file system [ext2, ext3, ext4, nfs, xfs]
- membuat partisi menggunakan parted  ✓
        - parted /dev/sdb
            - mklabel msdos
            - mkpart primary <file_system_type> 1MiB 10GiB
            - print
            - resize 2
            - rm <id>
- membuat partisi menggunakan gparted  ✓
    - yum install epel-release
        - yum install gparted
- menggunakan crypsetup untuk melakukan encrypt disk ✓
    - crypsetup luksFormat -v -y /dev/sdb1
        - crypsetup luksOpen /dev/sdb1 sdb1_aria
        - mkfs.ext4 /dev/mapper/sdb1_aria
    - mount /dev/mapper/sdb1_aria /mnt
    - umount /mnt
        - crypsetup luksClose sdb1_aria