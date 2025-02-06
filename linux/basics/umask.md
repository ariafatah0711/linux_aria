# umask
- umask (User File Creation Mask) adalah perintah dan konfigurasi di sistem berbasis Unix/Linux yang menentukan izin default saat file atau direktori baru dibuat. umask mengontrol izin yang tidak akan diberikan saat pembuatan file atau direktori baru.

## Cara Kerja 
- Setiap file atau direktori yang dibuat di Linux memiliki izin default:
  ```bash
  File: 666 (rw-rw-rw-)
  Direktori: 777 (rwxrwxrwx)
  ``` 
- Tetapi, nilai umask akan mengurangi izin default ini. Misalnya, jika umask bernilai 022:
  ```bash
  File baru: 666 - 022 = 644 (rw-r--r--)
  Direktori baru: 777 - 022 = 755 (rwxr-xr-x)
  ```

# command
```bash
umask # check the nilai umask
# 0022 # default

umask 027
# File baru: 666 - 027 = 640 (rw-r-----)
# Direktori baru: 777 - 027 = 750 (rwxr-x---)

```

- Jika ingin menetapkan secara permanen, tambahkan ke ~/.bashrc atau ~/.profile.

## different
```bash
0 – no permissions are blocked (read, write, and execute)
1 – execute permission is blocked
2 – write permission is blocked
3 – write and execute permissions are blocked
4 – read permission is blocked
5 – read and execute permissions are blocked
6 – read and write permissions are blocked
7 – all permissions are blocked (neither read, write, nor execute)
```

## contoh

| umask |  Izin File Baru | Izin Direktori Baru |
|:-----:|:---------------:|:-------------------:|
| 000   | 666 (rw-rw-rw-) | 777 (rwxrwxrwx)     |
| 022   | 644 (rw-r--r--) | 755 (rwxr-xr-x)     |
| 027   | 640 (rw-r-----) | 750 (rwxr-x---)     |
| 077   | 600 (rw-------) | 700 (rwx------)     |