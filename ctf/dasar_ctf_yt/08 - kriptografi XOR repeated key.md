# XOR repeated key
- mial key = "XOR"
  - maka plain text akan di (+) tiap kata keynya namun di ulang ulang
  ```bash
  plaintext = kriptografi
            = xorxorxorxo
            = ___________ (+)
  ```

## example python
```bash
ipython

from itertools import cycle

def repeated_xor(string, key):
    result = ""
    for c, k in zip (string, cycle(key)):
        result += chr(ord(c) ^ ord(k))
    return result

repeated_xor("KRIPTOGRAFI", "XOR") # '\x13\x1d\x1b\x08\x1b\x1d\x1f\x1d\x13\x1e\x06'
repeated_xor("\x13\x1d\x1b\x08\x1b\x1d\x1f\x1d\x13\x1e\x06", "XOR") # 'KRIPTOGRAFI'
```

### encrypt with file
```bash
cat data
###
Di balik setiap perjalanan, ada langkah kecil yang membawa kita lebih dekat ke tujuan. Fokus, tekun, dan percaya diri adalah kunci untuk meraih apa yang kita impikan. Selalu ada cahaya di ujung perjalanan, selama kita tidak berhenti melangkah.

plaintext = open("data").read()
ciphertext = repeated_xor(plaintext, "XOR")
open("data.enc", "w").write(ciphertext)

cat data.enc
###
'\x1c&r:.>1$r+*&1."x?7*%34.<9!~x.69o>9!53.:x$7;&>x636(r5*?:.%9o91;3x#7:&:x+73.&x$7x;\'2:36ar\x1e 9-<~x;73:<to69!r(* ;.+9o61=;x.69#30o9-!11o\'6;\'3o?==31\'r9?3x636(r3&&9o;5?;3.<vo\x01=#34:r9+3x,30.+9o61o\'2:<?o"==89#36.<to!=#35.r3&&9o&1+33o0==:=!&1o?=#36(99\'|R'
```

### decrypt without key
- gunakan tool xortool
```bash
ciphertext = repeated_xor(plaintext, "RAHASIA")
open("data.enc", "w").write(ciphertext)

## soal
# (h#2%(9a;$'  "a8$!# > & =ea3%)a?(/5*))s"$1($a*(/5a%$>+ % h*:= r--#:!a6$# 'i*7a<49< <oh<"4!mh56"4<mh%2'a"$:"20 r%!3:i 6 $ ;i*'/+(s</&4#a>,33( a29 r8)/4i*;5)a:$1;*)/}i7-)-&i 6 h"2! + h%:i484&&s9$ +)-2' <mh26% ? h*:= r5!%2"a0$:)6'5;a%$?(/5*))}CK$!/7()3/h26# &(h56;-75)*s9 6 h"2; r*!52i,7-!)2=a64&(2i%7// =i)35!a*(/5a<4?<2XK(7<1r , ?()r5-*2d57*!a*(/5a%$=(3;*h4==49a,(#,"3) =i235=a#&5=// =i%7,!a#&5=// =gKX -5:" r-)/4 5r&--29mr#!/'(/5l*(== <&h,&% ;a*$!:(< :a?,#;)h56; <&BK,5; 8a?(/5*))s"$1($a>,/'+=a:$1; &a2- >  a8,,7/)/4(/r8)/4i135=5s-(  1 8(/|K

pip2 install xortool

xor data.enc
###
The most probable key lengths:
   1:   14.2%
   7:   20.5%
   9:   9.7%
  11:   8.8%
  14:   13.9%
  16:   6.6%
  18:   6.1%
  21:   8.9%
  28:   6.2%
  35:   4.9%
Key-length can be 7*n
###

# disini bisa kita lihat bahwa length dari key yang memungkinakan adalah 7
xortool data.enc -l 7 -c 20
# -l => length
# -c => char yang sering muncul 20 karena adalah spasi

xortool data.enc -l 7 -b
# -b => untuk brute force
```