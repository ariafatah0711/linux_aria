# 🔧 Reinstall GRUB di Sistem EFI (Kali Linux & Arch Linux)

## 📌 Pendahuluan: Apa itu...

### 1. **GRUB (GRand Unified Bootloader)**

GRUB adalah *bootloader*, yaitu program pertama yang dijalankan setelah BIOS/UEFI ketika komputer menyala. GRUB bertugas:

* Menampilkan daftar OS (jika multi-boot)
* Memuat kernel Linux
* Memberi opsi pemulihan (recovery, safe boot, dsb)

### 2. **EFI / UEFI**

UEFI (Unified Extensible Firmware Interface) adalah penerus BIOS yang lebih modern:

* Bisa boot ke partisi bertipe FAT32 (biasanya `ESP`)
* Menyimpan file bootloader di `/EFI/Boot/`, misalnya `BOOTX64.EFI`
* Disimpan dalam **partisi khusus** bernama **EFI System Partition (ESP)**

ESP biasanya:

* Format: `vfat` (FAT32)
* Ukuran: 100–512MB
* Mount point: `/boot/efi` atau `/boot`

### 3. **initramfs / initrd**

Initramfs adalah file sistem awal (ramdisk) yang dimuat **setelah** kernel tapi **sebelum** root filesystem. Fungsinya:

* Muat driver awal (misalnya: driver untuk ext4, nvme, btrfs)
* Mount root filesystem
* Lanjutkan booting ke Linux

File ini dihasilkan oleh:

```bash
mkinitcpio -P  # Arch
update-initramfs -u  # Debian/Kali
```

### 4. **Firmware**

Firmware adalah kode bawaan perangkat (seperti WiFi, VGA, dll) yang dibutuhkan oleh kernel saat boot. Disimpan di `/usr/lib/firmware`. Jika bermasalah, bisa menyebabkan error saat booting.

---

## 🔁 Proses Reinstall GRUB di EFI

### ⚙️ 1. Mount dan Persiapan Chroot

Mount partisi root dan EFI:

```bash
mount /dev/nvme1n1p4 /mnt/kali               # Mount root Kali
mount /dev/nvme1n1p3 /mnt/kali/boot/efi      # Mount EFI Partition
```

Bind sistem penting:

```bash
mount --bind /dev /mnt/kali/dev
mount --bind /proc /mnt/kali/proc
mount --bind /sys /mnt/kali/sys
mount --bind /run /mnt/kali/run
mount -t efivarfs efivarfs /mnt/kali/sys/firmware/efi/efivars
```

Masuk ke sistem (chroot):

```bash
chroot /mnt/kali
```

### 🔧 2. Install Ulang GRUB (Kali Linux)

```bash
grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=KALI
grub-mkconfig -o /boot/grub/grub.cfg
```

Penjelasan:

* `--target=x86_64-efi`: Untuk sistem UEFI 64-bit
* `--efi-directory=...`: Tempat file EFI diletakkan (ESP)
* `--bootloader-id=KALI`: Nama folder di `/boot/efi/EFI/`

`grub-mkconfig` mencari:

* Kernel (`vmlinuz-*`)
* Initramfs (`initramfs-*`)
* OS lain yang terinstal (misal Windows)

---

## 🔁 Versi untuk Arch Linux

Setelah mounting root dan EFI (biasanya EFI Arch Linux langsung di `/boot`):

```bash
mount /dev/nvme0n1pX /mnt/arch              # root
mount /dev/nvme0n1pY /mnt/arch/boot         # EFI (jika terpisah)
```

Bind dan chroot:

```bash
mount --bind /dev /mnt/arch/dev
mount --bind /proc /mnt/arch/proc
mount --bind /sys /mnt/arch/sys
mount --bind /run /mnt/arch/run
mount --bind /etc/resolv.conf /mnt/arch/etc/resolv.conf  # agar ada internet
mount -t efivarfs efivarfs /mnt/arch/sys/firmware/efi/efivars

chroot /mnt/arch
```

Install ulang grub:

```bash
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=ArchLinux
grub-mkconfig -o /boot/grub/grub.cfg
```

Update kernel dan firmware:

```bash
pacman -Sy linux linux-firmware
```

Jika ada error firmware NVIDIA:

```bash
rm -rf /usr/lib/firmware/nvidia/ad10{3,4,6,7}
```

Regenerasi initramfs:

```bash
mkinitcpio -P
```

---

## 🧠 Bonus: Apa itu efibootmgr?

`efibootmgr` adalah tool untuk melihat dan mengatur entri boot di firmware UEFI:

```bash
efibootmgr         # Lihat semua entri
efibootmgr -v      # Lihat path lengkap EFI loader
```

Jika GRUB tidak muncul saat boot, bisa set GRUB sebagai default:

```bash
efibootmgr -o 0003,0001  # Urutkan entri boot
```

---

## ✅ Kesimpulan

| Komponen      | Fungsi                                                       |
| ------------- | ------------------------------------------------------------ |
| GRUB          | Memuat kernel dan initramfs, bisa tampilkan pilihan OS       |
| EFI           | Sistem firmware modern, menggantikan BIOS, butuh partisi ESP |
| initramfs     | Ramdisk awal berisi driver dan init script                   |
| efibootmgr    | Alat untuk mengatur urutan boot di firmware                  |
| mkinitcpio    | Buat ulang initramfs di Arch                                 |
| grub-mkconfig | Scan OS/kernels dan buat konfigurasi grub.cfg                |
