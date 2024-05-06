## Digital Signature
    - membuat tanda tangan digital menggunakan paint atau signaturely ✓

## Encryption + Signing
    - menggunakan gpgfrontend ✓
        - install gpgfrontend in micosoft store
    - menggunakan thunderbird ✓
        - install thunderbird in micrsoft store
    - menggunakan pgptool ☓
        - install in btrowsers (mau nyoba tapi ada warning gitu jadinya belum dicoba)
    - menggunakan GnuPG ☓
        - nano sample.txt
        - gpg -c sample.txt #encrypt
            - scp sample.txt.gpg user@localhost
        - gpg -d sample.txt.gpg #decrypt

        - gpg --gen-key
            - 1, [enter], [0, 1y, 1m, 1w], y, name_key, email, comment
        - gpg -k #list key
        - export key
            - gpg -o ~/harbas.crt --gen-revoke harbas@harbas.com
            - y, 1, y
            - chmod 600 harbas.crt
        - export key
            - 
        
        - gpa

## Decrypt
    - decrypt pesan pgp menggunakan kunci pgp dengan tool gpgfrontend, pgptool ✓
        - pake apk gpgfrontend, pgptool
    - decrypt pesan pgp menggunakan kunci pgp dengan tool GnuPG ☓
        - gpg

## Verification
    - gpg — verify signature.asc email.txt