# forensic file carving
- misal kita punya suatu image hardisk / storage device
  - kita ingin merecover ( mengambil file file yang ada dalam hardisk image ini )
  - biasanya kita menggunakan program binwalk, dan foremost

- jika kita mengacak ngacak / modifikasi suatu header file / file menggunakan hex editor
  - kemungkinan besar file tersebut suda tidak dikenali formatnya
    - dan akan dikenali sebagai :data
    ```bash
    hexer icon
    # ubah / acak file header nya

    file icon
    icon: data
    ```

## binwalk
- tool yang digunakan untuk mencari signature meskipun signature tersebut sudah acak
```bash
binwalk icon
DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
22            0x16            PNG image, 464 x 255, 8-bit/color RGBA, non-interlaced

# artinya file png tersebut dimulai dari decimal 22

cat cat a.png b.mp3 c.gif > a
cat a d.pptx > b

file a
# a: PNG image data, 464 x 255, 8-bit/color RGBA, non-interlaced 
# karena header filenya
file b
# b: PNG image data, 464 x 255, 8-bit/color RGBA, non-interlaced

binwalk a
###
0             0x0             PNG image, 464 x 255, 8-bit/color RGBA, non-interlaced
143           0x8F            Zlib compressed data, best compression
5943193       0x5AAF99        Cisco IOS experimental microcode, for "C4"
###

binwalk b
###
DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             PNG image, 464 x 255, 8-bit/color RGBA, non-interlaced
143           0x8F            Zlib compressed data, best compression
5943193       0x5AAF99        Cisco IOS experimental microcode, for "C4"
12863743      0xC448FF        Zip archive data, at least v2.0 to extract, name: éContentèTypesê.xml
12864283      0xC44B1B        Zip archive data, at least v2.0 to extract, name: èrels/.rels
12864591      0xC44C4F        Zip archive data, at least v2.0 to extract, name: docProps/app.xml
---
###
```

## foremost
- extract aplikasi
  - jadi dengan ini kita bisa mengextract file apa file apa aja yang ada didalam suatu binary / file
  - terkadang extension tidak memiliki footer
    - maka ketika di recovery bisa saja file yang aslinya 44 bytes ahnya terecover 36 bytes (contonya extension music seperti .waf)


```bash
foremost a
# ls output/
# audit.txt  png

foremost b -T out
# maka nanti file pptx akan ada file zip
# yang dimana file zip tersebut ketika di unzip akan berisi image / gambar yang ada pada pptx tersebut
```