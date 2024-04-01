# Analisis dan Patching Security Header Web

- file info.php
  ```
  <?php phpinfo(); ?>
  ```

## melakukan Pengecekan Security Header Web Server
- install shcheck
- yum install python3
  - pip3 install shcheck
  - cd /usr/local/lib/python3.6/site-packages/
- python3 shcheck.py -h
  - python3 shcheck.py https://blog.linuxsec.org -i -x -k -g

## Mengaktifkan semua Mitigasi Security Header tanpa mengganggu Fungsionalitas Aplikasi
- menambahkan konfigurasi security header pada httpd.conf
  ```
  <IfModule mod_headers.c>
    <Directory />
        Header always set X-XSS-Protection "1; mode=block"
        Header always set x-Frame-Options "SAMEORIGIN"
        Header always set X-Content-Type-Options "nosniff"
        Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
        Header always set Content-Security-Policy "default-src 'self'; font-src *;img-src * data:; script-src *; style-src *;"
        Header always set Referrer-Policy "strict-origin"
        Header set Permissions-Policy "geolocation=self"
    </Directory>
  </IfModule>
  ```

## Patching pada apache
- python3 shcheck.py https://blog.linuxsec.org -i -x -k -g 

