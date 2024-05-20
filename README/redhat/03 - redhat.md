date | rev
realpath namefile

tree -L 1

ls *Linux*?*
ls *Linux*\?*

df -h ~
du -h ~

```
sudo dnf install flatpak
[user@host ~]$ flatpak remote-add --if-not-exists \
flathub https://dl.flathub.org/repo/flathub.flatpakrepo

[user@host ~]$ flatpak remotes
Name    Options
flathub system

flatpak remote-add \
--if-not-exists fedora oci+https://registry.fedoraproject.org
```

```
tar --create --gzip --file example.tar.gz example
tar -czf

tar --extract --file --gzip example.tar.gz
tar -xfz
```