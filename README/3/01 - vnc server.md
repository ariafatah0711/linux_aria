# vnc server

- VNC Server adalah alat yang kuat yang memungkinkan Anda mengendalikan perangkat Anda dari jarak jauh. Ini terdiri dari dua komponen utama:
  - VNC Server: Instal perangkat lunak ini pada perangkat yang ingin Anda kendalikan. Anda dapat mengunduhnya untuk Windows, macOS, Linux, Raspberry Pi, dan lainnya. Untuk pengalaman terbaik, pertimbangkan untuk menginstal VNC Viewer dan VNC Server bersama menggunakan aplikasi RealVNC Connect Setup. Berikut beberapa fitur dari VNC Server:
    - Enkripsi sesi dari ujung ke ujung
    - Perekaman sesi
    - Otentikasi multi-faktor lanjutan
    - Konektivitas melalui cloud & langsung (LAN)
    - Kontrol akses dan izin pengguna secara terperinci
    - Cetak jarak jauh, obrolan real-time, dan berbagi file
  - VNC Viewer: Gunakan perangkat lunak pendamping ini untuk terhubung ke perangkat desktop dan seluler. Ini berfungsi dengan lancar dengan VNC Server, memberikan keamanan yang ditingkatkan, koneksi yang andal, dan fitur eksklusif dalam VNC Connect.
  - Memulai dengan VNC Connect sangat mudah:
    - Unduh: Instal VNC Server pada perangkat jarak jauh Anda.
    - Masuk/daftar: Buat akun (dan nikmati uji coba gratis selama 14 hari).
    - Konfigurasi dan Terhubung: Instal VNC Viewer pada perangkat Anda dan sambungkan.

## ubuntu
- install vino
  - apt install vino
  - go to setting > sharing
    - screen sharing > access options > require a password
    - add ur password
  - ufw allow from any to any port 5900 proto tcp
  - apt install dconf-editor
  - dconf-editor
    - org/gnome/desktop/remote access
    - require encpytion disable
  - find ur ip with ip a or ifconfig
  - connect

- install vnc tiger
  - apt install xfce4 xfce4-goodies
  - apt install tightvncserver
  - vncserver
    - pass: 
    - verif:
    - y/n : n
  - vncpasswd
    - change password
  - vncserver -kill :1
  - mv ~/.vnc/xstartup ~/.vnc/xstartup.bak
  - nano ~/.vnc/xstartup
    ```
    #!/bin/bash
    xrdb $HOME/.Xresources
    startxfce4 &
    ```
  - chmod +x ~/.vncxstartup
  - vncserver -localhost
  - ssh -L 59000:localhost:5901 -c -N -l user 192.168.10.10
  - connect localhost:5901