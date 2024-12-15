# vnc server
- VNC Server adalah alat yang kuat yang memungkinkan Anda mengendalikan perangkat Anda dari jarak jauh. Ini terdiri dari dua komponen utama:
- VNC Server: Instal perangkat lunak ini pada perangkat yang ingin Anda kendalikan. Anda dapat mengunduhnya untuk Windows, macOS, Linux, Raspberry Pi, dan lainnya. Untuk pengalaman terbaik, pertimbangkan untuk menginstal VNC Viewer dan VNC Server bersama menggunakan aplikasi RealVNC Connect Setup. 
  - Berikut beberapa fitur dari VNC Server:
    - Enkripsi sesi dari ujung ke ujung
    - Perekaman sesi
    - Otentikasi multi-faktor lanjutan
    - Konektivitas melalui cloud & langsung (LAN)
    - Kontrol akses dan izin pengguna secara terperinci
    - Cetak jarak jauh, obrolan real-time, dan berbagi file
- VNC Viewer: Gunakan perangkat lunak pendamping ini untuk terhubung ke perangkat desktop dan seluler. 
  - Ini berfungsi dengan lancar dengan VNC Server, memberikan keamanan yang ditingkatkan, koneksi yang andal, dan fitur eksklusif dalam VNC Connect.
  - Memulai dengan VNC Connect sangat mudah:
    - Unduh: Instal VNC Server pada perangkat jarak jauh Anda.
    - Masuk/daftar: Buat akun (dan nikmati uji coba gratis selama 14 hari).
    - Konfigurasi dan Terhubung: Instal VNC Viewer pada perangkat Anda dan sambungkan.

# vino (ubuntu)
- ```apt install vino```
- go to setting > sharing
  - screen sharing > access options > require a password
  - add ur password
- ```ufw allow from any to any port 5900 proto tcp```
- ```apt install dconf-editor```
- dconf-editor
  - org/gnome/desktop/remote access
  - require encpytion disable
- find ur ip with ip a or ifconfig
- connect

# vnc tiger (ubuntu)
## install
```bash
apt install xfce4 xfce4-goodies
apt install tightvncserver
vncserver
# pass: 
# verif:
# y/n : n
```
## configuration
- change pass
  - ```vncpasswd```
- kill
  - ```vncserver -kill :1```
- config
  - ```mv ~/.vnc/xstartup ~/.vnc/xstartup.bak```
  - ```nano ~/.vnc/xstartup```
    ```bash
    #!/bin/bash
    xrdb $HOME/.Xresources
    startxfce4 &
    ```
- run vnc
  ```bash
  chmod +x ~/.vncxstartup
  vncserver -localhost
  ssh -L 59000:localhost:5901 -c -N -l user 192.168.10.10
  connect localhost:5901
  ```

# x11vnc
## install
```bash
apt install x11vnc
x11vnc -storepasswd
x11vnc -auth guess -forever -loop -noxdamage -repeat -rfbauth ~/.vnc/passwd -rfbport 5900 -shared
  -auth guess: Mencoba menebak file otentikasi X Window.
  -forever: Tetap berjalan tanpa keluar setelah klien terputus.
  -loop: Tunggu dan perbarui setiap detik.
  -noxdamage: Nonaktifkan pengoptimalan X damage extension.
  -repeat: Aktifkan perekaman pengulangan perangkat input.
  -rfbauth ~/.vnc/passwd: Tentukan lokasi file password.
  -rfbport 5900: Gunakan port 5900 (bisa diganti sesuai kebutuhan).
  -shared: Berbagi sesi dengan pengguna lain (opsional)
```
## connect
- Terhubung Menggunakan RealVNC Viewer: Gunakan RealVNC Viewer atau aplikasi VNC lainnya untuk terhubung ke alamat IP atau nama host mesin Ubuntu pada port 5900.
- Pastikan untuk mengganti ~/.vnc/passwd dengan lokasi file password yang telah Anda tentukan. Setelah itu, Anda dapat mengakses VNC server Ubuntu Anda menggunakan RealVNC Viewer atau klien VNC lainnya. 
  - Jangan lupa untuk menyesuaikan pengaturan sesuai kebutuhan Anda.