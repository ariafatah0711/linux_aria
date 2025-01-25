# adb
## install
```bash
# windows

# linux
sudo apt update
sudo apt install adb
```

## use
```bash
adb devices

# adb pull src_path dst_path
# adb push src_path dst_path

adb pull /sdcard/DCIM/ /path/to/destination/
adb push /path/to/file /sdcard/Download/

adb install path_to_app.apk
adb uninstall com.package.name

adb reboot
adb logcat
```

## shell
```bash
adb shell
pm list packages
```

## backup restore
```bash
adb backup -apk -shared -all -f backup.ab
adb restore backup.ab
adb shell screenrecord /sdcard/video.mp4
```

## root
```bash
# fastboot mode
adb reboot bootloader

# membuka kunci bootloader
fastboot oem unlock

# Instal TWRP Recovery
fastboot flash recovery twrp.img

# Di dalam TWRP, pilih Install dan pilih file Magisk.zip yang sudah diunduh.
# Geser untuk menginstal file Magisk.
# Setelah selesai, pilih Reboot System.

# jika sudah terinstall twrp gunakan ini
fastboot boot twrp.img
```

## adb wifi
```bash
adb tcpip 5555
adb connect device_ip_address:5555
```