# alguik
```bash
scoop bucket add java # openjdk
scoop bucket add extras

scoop install openjdk
scoop install jadx

jadx-gui
```

```bash
scrcpy -tcpip 

adb -s ip:port shell dumpsys activity | findstr mResumedActivity
adb logcat

## pull apk
adb shell pm path net.sid.alguik_v1
adb pull /data/app/xxx/base.apk alguik.apk
```

- Klik File > Open
- Pilih file base.apk dari folder Downloads
- Tunggu proses decompile selesai
- Mulai eksplor folder seperti MainActivity, WebView, lock, atau hal lain terkait penguncian


```bash
KioskMode, LockTask, setLockTaskEnabled

onWindowFocusChanged, onBackPressed, dispatchKeyEvent

WebView.setWebChromeClient() – sering dipakai buat exam browser

System.exit(0) atau blok lain yang memaksa keluar

Filter AndroidManifest.xml → lihat permission seperti:

SYSTEM_ALERT_WINDOW

DISABLE_KEYGUARD

RECEIVE_BOOT_COMPLETED

FOREGROUND_SERVICE
```