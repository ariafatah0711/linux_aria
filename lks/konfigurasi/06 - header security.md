## Menyiapkan Sebuah file php berisi phpinfo(); pada sebuah web server di virtualbox / vmware masing masing peserta.
    - nano info.php
        ```
        <?php phpinfo(); ?>
        ```

## Menemukan dan Menggunakan Tools untuk melakukan Pengecekan Security
    - yum install python3
        - pip3 install sh check
        - cd /usr/local/lib/python3.6/site-packages/shcheck
        - python3 shcheck.py <website yang dituju> -i -x  -g
    - git clone https://github.com/santoru/shcheck
        - cd shcheck
        - ./shcheck.py -h
##  Peserta membuat sendiri aplikasi Web yang berisi info.php yang vulnerable disisi Header. Peserta harus mampu Mengaktifkan semua Mitigasi Security Header tanpa mengganggu Fungsionalitas Aplikasi
    - nano /etc/http/conf/httpd.conf
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

## Peserta akan mendeploy aplikasi yang disediakan panitia untuk di hardening di sisi WebHeader