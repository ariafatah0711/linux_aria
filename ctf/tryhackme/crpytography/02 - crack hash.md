- hashid -m 48bb6e862e54f2a795ffc4e541caed4d

## 48bb6e862e54f2a795ffc4e541caed4d : easy
- hashcat --show hash.txt
- hashcat -m 0 hash.txt /usr/share/worldlist/rockyou.txt

    - -m => hash_type (ada di # pas --show)
    - -a => attack_mode
    - -o +> output file
    - -T => threads

## CBFDAC6008F9CAB4083784CBD1874F76618D2A97 : password123
- hashcat -m 100 hash2.txt /usr/share/worldlist/rockyou.txt

## 1C8BFE8F801D79745C4631D09FFF36C82AA37FC4CCE4FC946683D7B336B63032 : letmein
```
# | Name                                                       | Category
======+============================================================+======================================
1400 | SHA2-256                                                   | Raw Hash
17400 | SHA3-256                                                   | Raw Hash
```
- hashcat -m 1400 3 /usr/share/wordlists/rockyou.txt

## $2y$12$Dwt1BZj6pcyc3Dy1FWZ5ieeUznr71EeNkJkUlypTsgbX1H68wsRom : bleh
```
    # | Name                                                       | Category
======+============================================================+======================================
3200 | bcrypt $2*$, Blowfish (Unix)                               | Operating System
25600 | bcrypt(md5($pass)) / bcryptmd5                             | Forums, CMS, E-Commerce
25800 | bcrypt(sha1($pass)) / bcryptsha1                           | Forums, CMS, E-Commerce
28400 | bcrypt(sha512($pass)) / bcryptsha512                       | Forums, CMS, E-Commerce
```
- awk ‘length == 4’ /usr/share/wordlists/rockyou.txt > filtered4
- hashcat -m 3200 4 filtered4

## 279412f945939ba78ce0758d3fd83daa : Eternity22
- open web dcode

## F09EDCB1FCEFC6DFB23DC3505A882655FF77375ED8AA2D1C13F640FCCC2D0C85 : paule
- hashcat -m 1400 6 /usr/share/wordlists/rockyou.txt

## 1DFECA0C002AE40B8619ECF94819CC1B : n63umy8lkf4i
- hashcat --show 7

## $6$aReallyHardSalt$6WKUTqzq.UQQmrm0p/T7MPpMbGNnzXPMAXi4bJMl9be.cfi3/qxIf.hsGpS41BqMhSrHVXgMpdjS6xeKZAs02 : waka99
- hashcat --show 8
```
hashcat --show 8
Hash-mode was not specified with -m. Attempting to auto-detect hash mode.
The following mode was auto-detected as the only one matching your input hash:

1800 | sha512crypt $6$, SHA512 (Unix) | Operating System

NOTE: Auto-detect is best effort. The correct hash-mode is NOT guaranteed!
Do NOT report auto-detect issues unless you are certain of the hash type.
```
- awk ‘length == 6’ /usr/share/wordlists/rockyou.txt > filtered
- hashcat -m 1800 8 filtered6.txt

## e5d8870e5bdd26602cab8dbe07a942c8669e56d6 : 481616481616
- hashid -m e5d8870e5bdd26602cab8dbe07a942c8669e56d6
- hashcat -m 110 e5d8870e5bdd26602cab8dbe07a942c8669e56d6:tryhackme /usr/share/wordlists/rockyou.txt