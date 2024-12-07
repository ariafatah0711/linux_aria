# cipher modern
## XOR
- bisa menggunakan XOR (exclusive OR)
  - simbolnya (+) 
  - operasinya per byte
- contoh
  ```
  a b | a(+)b
  _________
  0 0 |  0
  0 1 |  1
  1 0 |  1
  1 1 |  0
  ```
- operasinya mirip logika xor
  - enaknya xor karena operasinya bisa bolak balik
  - misal kita punya a (+) b = c
    - maka c (+) b = a
    - maka c (+) a = b

- contoh
  - plaintext di xor dengan key = ciper text
  - plaintext (+) key = chipertext
  - ciphertext (+) key = plaintext

- misal plain text "A" kode hex/ASCII = 0x41 / 01000001
  - misal angka 37 kode hex/ASCII = 0x25 / 00100101
  - maka hasil xor nya hanya perlu di tambah
  ```bash
  01000001
  00100101
  ________ (+)
  01100100

  menjadi hex 0x64 => "d"
  ```
  jadi jika "A" di xor dengan angka 27 maka hasilnya "d"

### python
```bash
python2

ord("A") # 65
hex(ord("A")) # '0x41'

ord("A") ^ 0x25 # 100 (huruf A di xor dengan 0x25)
hex(ord("A") ^ 0x25) # '0x64'

chr(0x64) # 'd'
chr(ord("A") ^ 0x25) # 'd'
```

## jika dibalik operasi XOR nya
```bash
d    = 01100100
0x25 = 00100101
_______________ (+)
     = 01000001 = 0x41 (A)

## python
python2

chr(ord("d") ^ 0x25) # 'A'
```

## implementasi
### simple XOR dengan 1 byte kunci
- kita bisa lakukan untuk banyak huruf juga
- misal HELLO di xor dengan 0x25
  - H (+) 0x25 =
  - E (+) 0x25 =
  - L (+) 0x25 = 
  - ....

### python
```bash
python2

plaintext = "HELLO"
key = 0xd8
ciphertext = ""

for c in plaintext:
    ciphertext += chr(ord(c) ^ key)

ciphertext # \x90\x9d\x94\x94\x97

## kebalikan
for c in ciphertext:
    plaintext += chr(ord(c) ^ 0xd8)

plaintext # 'HELLO'

# jika key yang salah hasilnya akan salah juga
```

### with function
```bash
def xor_string(string, key):
    result = ""
    for c in string:
        result += chr(ord(c) ^ key)
    return result

xor_string("HELLO", 0x25) # 'm`iij'
xor_string("HELLO", 0x58) # '\x10\x1d\x14\x14\x17'
xor_string("HELLO", 0x27) # 'obkkh'

xor_string("\x10\x1d\x14\x14\x17", 0x58) # 'HELLO'
xor_string("obkh", 0x27) # 'HELO'
```

## chalange ctf jika tidak ada keynya
- kita bisa lakukan bruteforce
  - karena kunci 1 byte hanya dari ox00(0) - 0xff(255)
  - hanya 255 kali saja

## contoh soal: 'FUNF\x07AFSFO\x07FIHJ'
```bash
ciphertext = 'FUNF\x07AFSFO\x07FIHJ'

for i in range(0, 256):
    print i, xor_string(ciphertext, i)

###
33 gtog&`grgn&ghik
34 dwld%cdqdm%dkjh
35 evme$bepel$ejki
36 bqjb#ebwbk#bmln
37 cpkc"dcvcj"clmo
38 `sh`!g`u`i!`onl
39 aria fatah anom # ketemu text aslinya di xor (39 atau 0x90)
40 n}fn/in{ng/na`b
41 o|go.hozof.o`ac
42 ldl-klyle-lcb`

hex(39) # '0x27' => ini adalah key nya
``` 

## picoCTF 2014 "ZOR"
- https://goo.gl/zS9cuA
```bash
cat xor_encrypted
���ي������ϊ�ي��؊�������ي����������Ċ���ӄ���؊���������ي��؊��ϊ�����͊��ϊ��������Ί���ˊ�������΄����ފ�������Ί�ي���Ϟ��������Ο���Ξ�ȒȞ��ȝ�

python2
ciphertext = open("xor_encrypted").read() # jika python2 pake .read()
print ciphertext # ���ي������ϊ�ي��؊�������....
ciphertext # \xfe\xc2\xc3\xd9\x8a\xc7\xcf\xd9\xd9\xcb....

def xor_string(string, key):
    result = ""
    for c in string:
        result += chr(ord(c) ^ key)
    return result

for i in range(0, 256):
   print i, xor_string(ciphertext, i)

###
168 Vjkq"ogqqceg"kq"dmp"Fcgfcnwq"Amprmpcvkml"mln{,"Mwp"`nwgrpklvq"dmp"vjg"A{`mpe"cpg"rpmvgavgf"ukvj"c"rcqqumpf,"Vjcv"rcqqumpf"kq"faag64daccddgf74dff62`:`6ac`5f
169 Wkjp#nfppbdf#jp#elq#Gbfgbovp#@lqslqbwjlm#lmoz-#Lvq#aovfsqjmwp#elq#wkf#@zalqd#bqf#sqlwf`wfg#tjwk#b#sbpptlqg-#Wkbw#sbpptlqg#jp#g``f75e`bbeefg65egg73a;a7`ba4g
170 This message is for Daedalus Corporation only. Our blueprints for the Cyborg are protected with a password. That password is dcce46fcaaffed56fdd40b8b4cab7d # ketemu flagnya
171 Uihr!ldrr`fd!hr!gns!E`de`mtr!Bnsqns`uhno!nomx/!Nts!cmtdqshour!gns!uid!Bxcnsf!`sd!qsnudbude!vhui!`!q`rrvnse/!Ui`u!q`rrvnse!hr!ebbd57gb``ggde47gee51c9c5b`c6e
```

## enkripsi, decrypt XOR dengan c
```bash
cat xor.c
#include <stdio.h>
#include <string.h>

int main (int argc, char **argv)
{
        char str[15] = "aria fatah anom";
        char key = 0x27;
        int i;

        for (i = 0; i < strlen(str); i++) {
                str[i] = str[i] ^ key;
        }

        printf("%s\n", str);

        return 0;
}

gcc xor.c
./a.out # FUNFAFSFOFIHJ

xor_string("aria fatah anom", 0x27) # 'FUNF\x07AFSFO\x07FIHJ'
```