## wget
```bash
wget <url>
wget <url> -o <output>
wget -P /path <url>
wget -c <url> # continue (agar ketika gagal di tengah bisa dillanjutkan)

wget -i <file> # wget with many url in file

wget -m <url> # mirror website
```

## Curl
```bash
curl <url>
curl <url> > namafile
```

## Rsync
- Rsync singkatan dari remote sync yang merupakan sebuah tools sinkronisasi file dan directory, baik local maupun remote. Rsync menggunakan algoritma tertentu sehingga dapat meminimalkan jumlah data yang disalin dengan hanya memindahkan bagian file yang telah diubah.
```bash
cd ~
mkdir dir1 dir2
touch dir1/file{1..100}

rsync -r dir1/ dir2 # not recomended
rsync -a dir1/ dir2 # recomended karena jika ada file baru hanya namabahins saja
# path / memperngaruhi jika tidak pake maka nanti hasil nya jadi dir2/dir1/

rsync -av dir1/ dir2
```

## Rsync Remote
```bash
rsync -a ~/dir1 user@remotesystem:direktoritujuan
rsync -a ~/dir1 haris@192.168.1.66:~/

rsync -az sumber tujuan # mengompres data saat proses sinkronisasi
rsync -azP sumber tujuan # gabungan dari opsi --progress dan --partial. Opsi ini dapat menampilkan bilah progres (progress bar) saat proses transfer dan memungkinkan kita untuk melanjutkan sinkronisasi saat proses sebelumnya terganggu atau terputus.

rsync -a --delete sumber tujuan # menghapus file di directory tujuan
rsync -an --delete sumber tujuan # -n atau --dry-rununtuk menguji terlebih dahulu perintah tersebut agar terhindar dari kehilangan data yang tidak diinginkan.

rsync -a --exclude=*.log sumber tujuan # --excludebisa membuat perintah rsync mengecualikan beberapa file agar tidak ikut tersinkronisasi dengan pattern tertentu.
rsync -a --exclude=*.log --include=user.log,access.log sumber tujuan # --include kebalikanya
```