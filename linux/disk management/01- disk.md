# pengenalan disk
## pengenalan
- pada umumnya disk di linux konsep sama dengan operation system lainya
  - yang membedakan adalah di linux hanya mengenal directory atau file
  - maka pada linux kita sering melihat disk drive dengan /dev/sda, /dev/sdb, atau /dev/vda, /dev/vdb
  - untuk partisi biasanya /dev/sdb1, /dev/sdb2
  - yang membedkanya hanya driver saja

- Block Storage
  - penyimpanan data di mana data dibagi menjadi blok-blok kecil dengan ukuran tetap
  - ex => SSD, HDD
- Attach Storage
  - penyambungan storage (seperti block storage atau file storage) ke server atau mesin virtual
- File System (xfs, ext2, ext3, ext4, btrfs, vfat, fat32, ntfs)
  - xfs => Sistem file yang dikenal dengan kinerjanya yang baik pada operasi dengan file besar dan skalabilitas tinggi. Sering digunakan di server dan sistem Linux.
  - ext2, ext3, ext4 => Sistem file yang digunakan di Linux. 
    - ext4 adalah versi terbaru yang lebih stabil dan mendukung journaling, 
    - sementara ext2 adalah yang lebih lama tanpa journaling, dan ext3 adalah perbaikan dari ext2 dengan fitur journaling.
  - btrfs => Sistem file baru untuk Linux yang mendukung snapshot, kompresi, dan deduplikasi, ideal untuk server dan penyimpanan berbasis cloud.
  - vfat, fat32 => Sistem file yang sering digunakan pada drive USB dan perangkat penyimpanan portabel lainnya. FAT32 memiliki batas ukuran file 4 GB.
  - ntfs => Sistem file yang digunakan oleh Windows, mendukung file berukuran besar dan fitur-fitur keamanan seperti enkripsi dan izin akses file.
  - ReiserFS => Sistem file yang dikenal karena efisiensinya dalam menangani banyak file kecil, dengan struktur berbasis pohon untuk pengelolaan file yang lebih cepat. Namun, kurang digunakan lagi karena tidak ada pengembangan lebih lanjut.
  - JFS (Journaled File System) => Sistem file dengan fitur journaling yang dikembangkan oleh IBM. JFS dikenal karena efisiensinya pada sistem dengan sumber daya terbatas dan memiliki kinerja yang baik pada file besar serta stabilitas yang tinggi.

- Swap => Bukan sistem file pada umumnya, melainkan area di hard disk yang digunakan untuk memperluas memori virtual. Sistem operasi menggunakan swap ketika RAM penuh untuk menyimpan data yang tidak sedang digunakan, meskipun lebih lambat daripada RAM.

# Disk partition (GPT, MBR)
## MBR (Master Boot Record)
- teknologi jaman dulu
- mbr dapat membuat
- 4 primary partitions, 
  - atau 3 primary partitions, dan 1 primary extended (12 logical)
- 1 partitions MBR maximal 2TB

## GPT (GUID Partition Table)
- gpt dapat membuat
  - 128 partitions
  - tidak ada extended
- 1 partitions bisa mencapai 8Zib