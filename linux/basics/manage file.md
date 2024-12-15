# manage file
```bash
ls
ls -al
ls -alh
ls -ldZ

mkdir
rmdir
rm
cp
mv
```

## chmod
```bash
# chmod UGO file.txt
chmod 751 file.txt
# 4 = read
# 2 = write
# 1 = execute

chmod +x file.txt
chmod u+x file.txt
chmod -R 777 folder/
```

# chown
```bash
sudo chown -R $USER:$USER /path/to/path
```

# umask
```bash
umask 0002
# touch a
# -rw-rw-r-- 1 user01 user01 0 Dec 16 12:48 a

umask 0004
# touch b
# -rw-rw--w- 1 user01 user01 0 Dec 16 12:48 b
```