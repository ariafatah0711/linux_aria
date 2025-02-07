# services
## /etc/init
### /etc/init.d (ubuntu, debian)
```bash
sudo /etc/init.d/<nama-service> status
sudo /etc/init.d/<nama-service> restart
sudo /etc/init.d/<nama-service> stop

ls /etc/init.d
```

### /etc/rc.d/init.d (cent, redhat)
```bash
ls /etc/init.d
```

## service
```bash
service --status-all
service <nama-service> status
service <nama-service> start | restart | stop
```

## systemctl
### systemctl list
```bash
# help type service
systemctl -t help
```

```bash
# list units
systemctl list-units --type=service # hanya yang sedang aktif saja
```

|    Kolom    |                                                                       Penjelasan                                                                       |
|:-----------:|:------------------------------------------------------------------------------------------------------------------------------------------------------:|
| UNIT        | Nama service.                                                                                                                                          |
| LOAD        | Keterangan yang menjelaskan apakah systemd membaca konfigurasi unit dengan benar dan memuat unit ke dalam memori.                                      |
| ACTIVE      | Kondisi high-level dari unit, apakah aktif (bisa dimulai/start dengan sukses) atau tidak.                                                              |
| SUB         | Kondisi low-level dari unit. Bagian ini menginformasikan lebih detail terkait unit, seperti tipe unit, kondisi (state), dan bagaimana unit dijalankan. |
| DESCRIPTION | Penjelasan singkat dari sebuah unit.                                                                                                                   |

```bash
systemctl list-units --type=service --all # show all

# list with -state
systemctl list-units --type=service --state=inactive # inactive
systemctl list-units --type=service --state=exited # exited
```

```bash
# show status
systemctl status sshd.service
```

|    Bagian   |                                                     Penjelasan                                                     |
|:-----------:|:------------------------------------------------------------------------------------------------------------------:|
| Loaded      | Keterangan yang menjelaskan apakah service sudah dimuat ke memory.                                                 |
| Active      | Keterangan yang menjelaskan apakah service sudah berjalan. Jika berjalan, ia akan menampilkan informasi durasinya. |
| Main PID    | PID atau Process ID utama dari service, termasuk juga nama perintahnya.                                            |
| Status      | Terletak di paling bawah, seperti log. Bagian ini merupakan informasi tambahan terkait service.                    |

|      Keyword     |                                          Penjelasan                                          |
|:----------------:|:--------------------------------------------------------------------------------------------:|
| loaded           | File konfigurasi telah terproses.                                                            |
| active (running) | Berjalan dengan satu atau beberapa proses lainnya yang berkelanjutan.                        |
| active (exited)  | Berhasil menyelesaikan satu kali konfigurasi.                                                |
| active (waiting) | Berjalan, tetapi menunggu sebuah event (kejadian/peristiwa tertentu).                        |
| inactive         | Tidak berjalan.                                                                              |
| enabled          | Dijalankan saat boot.                                                                        |
| disabled         | Tidak dijalankan saat boot.                                                                  |
| static           | Tidak dapat diaktifkan, tetapi dapat dimulai oleh unit lain yang diaktifkan secara otomatis. |

```bash
# verification service
systemctl is-active sshd.service # verification active?
systemctl is-enabled sshd.service # verification enabled? (enabled= service tersebut dijalankan otomatis saat sistem dimulai.)

systemctl is-failed sshd.service # verification gagal dijalankan ketika dimuali (enabled with error)

# list failed service
systemctl --failed --type=service # show all failed service
```

### systemctl start, stop, restart
```bash
# start service
systemctl start apache2.service

# enable service
systemctl enable apache2.service

# stop service
systemctl stop apache2.service

# disable service
systemctl disable apache2.service

# restart service
systemctl restart sshd
```

### systemctl daemon
```bash
systemctl daemon-reload # reload daemon

systemctl daemon-reexec	# Memulai ulang systemd itu sendiri tanpa reboot sistem.
systemctl restart <service>	# Menghentikan dan memulai ulang layanan tertentu.
systemctl reload <service>	# Memuat ulang konfigurasi layanan tanpa menghentikannya (jika layanan mendukung).
```

---
```bash
systemctl restart <nama-service>

sudo systemctl enable <nama-service>

systemctl is-active <nama-service>
systemctl list-unit-files --type=service | grep enabled
```