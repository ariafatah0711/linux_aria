# ssh
```bash
ssh username@host
ssh username@host -p 2000
ssh username@host -o StrictHostKeyChecking=no
ssh username@host -o IdentitiesOnly=yes
ssh -i private.key username@host

# Opsi	Fungsi
# -i	Menentukan file private key
# -p	Menentukan port SSH (default 22)
# -l	Menentukan username
# -v	Menampilkan log koneksi (debugging)
# -X	Mengaktifkan forwarding X11 (GUI)
# -o	Menentukan opsi tambahan
```

## scp
```bash
scp /path/file username@host:/path/tujuan
scp username@host:/path/file /path/tujuan/lokal
scp -r /path/direktori username@host:/path/tujuan

scp username@host:/path/file username@host:/path/folder

scp haris@192.168.1.66:/home/haris/file-A.txt haris@192.168.1.67:/home/haris/
scp 192.168.1.66:~/file-A.txt 192.168.1.67:~/ # persingkat

# Opsi	Fungsi
# -r	Menyalin direktori secara rekursif
# -P	Menentukan port SSH
# -C	Mengaktifkan kompresi transfer data
# -i	Menentukan private key untuk autentikasi
```

## sftp
```bash
sftp username@host

# Perintah	Fungsi
# ls	Melihat isi direktori server
# pwd	Menampilkan direktori saat ini di server
# cd	Pindah ke direktori tertentu di server
# get file	Mengunduh file dari server ke lokal
# put file	Mengunggah file dari lokal ke server
# bye atau exit	Keluar dari SFTP

get /home/aria/file.txt
put file.txt
```

## ssh-keygen
```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Opsi:
# -t → Menentukan jenis kunci (rsa, dsa, ecdsa, ed25519)
# -b → Menentukan panjang bit kunci (1024, 2048, 4096)
# -C → Menambahkan komentar pada kunci (biasanya email)
```

## ssh-copy-id
```bash
ssh-copy-id username@host
cat ~/.ssh/id_rsa.pub | ssh username@host "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

## sshpass
```bash
sudo apt install sshpass
sshpass -p "password" ssh username@host
sshpass -p "password" <command_ssh_scp_etc>
```