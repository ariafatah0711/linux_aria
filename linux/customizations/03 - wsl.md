# installation
```bash
wsl --set-default-version 2
wsl --install
```

# export import
```bash
# export (backup)
wsl --export <distro_name> <path_to_backup>/backup.tar
wsl --export Ubuntu-22.04 C:\WSLBackups\Ubuntu-22.04-backup.tar

# import (restore)
wsl --import <new_distro_name> <path_to_restore> <path_to_backup>/backup.tar
wsl --import Ubuntu-Restore C:\WSLRestored C:\WSLBackups\Ubuntu-22.04-backup.tar
```

# error
- registrasi error 0x80004005
  - https://github.com/microsoft/WSL/issues/10424
- Setting up libc6:amd64 (2.37-14) ...
  - https://github.com/microsoft/WSL/discussions/11097
- wsl mode bridge
  - https://medium.com/@adyoi/menjadikan-windows-subsystem-for-linux-wsl-sebagai-mode-bridge-local-server-fd7ab5857efe
- wsl error install package *** --configure
  - https://blog.csdn.net/dou3516/article/details/105120221 

# tutorial
- win 11
  - https://youtu.be/FnSVYf1gJFo?si=rCWPNwqPusc7bKfM
- win 10
  - https://youtu.be/03e3zuSKTM8?si=HNnygW8yll48LQed