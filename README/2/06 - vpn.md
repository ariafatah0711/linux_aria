# openvpn

## ubuntu
- sudo apt install openvpn easy-rsa
- Selanjutnya, Anda perlu menciptakan direktori baru pada Server OpenVPN sebagai pengguna non-root yang bernama ~/easy-rsa:
  - mkdir ~/easy-rsa
- Sekarang Anda perlu membuat symlink dari skrip easyrsa yang diinstal paket ke direktori ~/easy-rsa yang baru saja Anda buat:
  - ln -s /usr/share/easy-rsa/* ~/easy-rsa/
  - sudo chown sammy ~/easy-rsa
  - chmod 700 ~/easy-rsa
  - 